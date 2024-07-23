
> ⚠️ **Attention**
> The following article is of very technical nature and only suitable for people who are interested in learning more about the inner workings of lively.next.

`lively.next` draws inspiration from Smalltalk, aiming to provide a flexible, efficient, and interactive coding experience. The following chapter outlines the key features and mechanisms of lively.next, highlighting its advanced class management, source transformations, module system, performance optimizations for loading the system, and bundling techniques.


## Transpilation in lively.next

Since lively.next lives in the Browser and Node.JS runtimes, it does not have the luxury of a pure Smalltalk system where scopes and runtime stacks are fist class objects or mutable classes are built into the system core. Instead we need to tweak the default behavior of the javascript syntax with a little sprinkle of transpilation magic.

### Scope

The first area of concern are evaluation scopes. In Javascript a scope is defined syntactically but can not be accessed easily programmatically after the fact, especially not in the browser. For instance evaluating variable declaration like `var foo = "bar";` manually will not populate some kind of local namespace. Likewise we can not access variables from other scopes unless we have them explicitly stored away in a dedicated object.

This is especially troubling when considering tools like the Workspace or the System Browser, where we operate on a module scope and would like to have the ability to flexibly evaluate expressions within the context of the module.
To alleviate that, `lively.next` provides a scope capturing transpilation for modules that is transparent to the user. It covers:
  - Class declarations.
  - Function declarations.
  - Constants, or other top level variables, especially *Component Definitions*.
These entities are then rewritten to be captured by a synthesized recording object that keeps all declared variables stored transparent to the user. So a module scope that on the surface looks something like this:

```javascript

const foo = 'bar';

function alice() { returns 'bob' }

```

Internally turns into something like that:

```javascript

const foo = __rec.foo = 'bar';

__rec.alice = function alice() { returns 'bob' }
// also attach meta information to functions
__rec.alice[Symbol.for('lively-module-meta')] = {
  sourceLocation,
  package: { module }
  ....
}

```

Without going into too much detail, there are also more advanced scope capturing transformations. For instance in the presence of destructuring declarations the following happens:

```javascript

const { ...bar, key } = foo;

// is transformed to:

let destructured_1 = {
  key: 42,
  hello: "foo",
  world: "bar"
};
__rec.key = destructured_1.key;
var bar = __rec.bar = {};
for (var __key in destructured_1) {
  if (__key === "key")
    continue;
  bar[__key] = destructured_1[__key];
}

```

### Classes

The objective of implementing classes in lively.next is to replicate a Smalltalk-like class object within its runtime. In Smalltalk, when a class definition is modified, the change is applied in place, allowing all instances of the class to immediately reflect the updated behavior. In contrast, JavaScript's default behavior, whether using the new ECMAScript class syntax or the traditional function prototype approach, replaces the existing class with the new definition. To achieve a Smalltalk-like system with live updates in lively.next, it's essential to alter this default evaluation method.

To ensure that redefining a class does not replace the existing class instance but instead patches it with the new definition, the classes are transformed into a function call that synthesizes a new class based on a preexisting version and includes the necessary class members, such as methods and static methods and getters.

```javascript
class Foo extends SuperFoo {
  m() { return 2 + super.m() }
}

// is converted into somethin like:
 createOrExtend(recorder, {referencedAs: "SuperFoo", value: SuperFoo}, "Foo2", [{
   key: "m",
   value: function m() {
     return 2 + this.constructor[superclassSymbol].prototype.m.call(this);
   }
 }])

```

The `createOrExtend` function in the above transformation consequently checks in the scope recorder if a class object is already present and if so, continues to extend the class instead of replacing it.

Additionally, the class object needs to be equipped with meta-information about itself, including details about its properties, superclass, module it is defined in and package it belongs to. 
Meta information about the properties within classes can be derived by using a canonical `static get properties() { }` definition, allowing for declarative property definitions. This setup facilitates the specification of property dependencies, default values, custom initialization routines, and other helpful meta-information for tool inspection, such as type and read-only status. Below is a schematic overview of how such a definition can look like:

```javascript
// example of a class definition with static properties
class Foo  extends SuperFoo {
  static get properties () {
    return {
       caption: {
          defaultValue: 'Default caption', // does not invoke the setter when initialized to this value
          initialize(v) {
            // passed the defaultValue as the first argument if defined
          }
          set(v) {
            // allows to override the default setter
          },
          get() {
            // allows to override the default getter
          },
          before: [...], // list of properties that have to be initialized before
          after: [...] // list of properties that can be initialized after 
          ...
       },
       ...
    }
  }
}
```

Every other piece of meta information on the other hand is generated during transpilation since the transpiler has all the meta information at hand already so that it can be attached to the initialized class. It is then passed to the `createOrExtent()` function from earlier like so:

```javascript
 createOrExtend(recorder, {referencedAs: "SuperFoo", value: SuperFoo}, "Foo2", [{
   key: "m",
   value: function m() {
     return 2 + this.constructor[superclassSymbol].prototype.m.call(this);
   }
 }], {
   package: { module },
   sourceLocation,
   ...
 })

```

## Modules in lively.next

The modules system in `lively.next` is its own spin on the now widely adopted [EcmaScript Module System](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). It provides a fully reflective interpretation of the former, allowing for runtime inspection and modification of each and every modules in the system. In the following we will go over the different technical bits that play a key role in its implementation.

### SystemJS
 - Is a framework that was developed directly in tandem with the early drafts of the EcmaScript Module System proposal.
   - It has over time always kept up with the semantics and changes of the standard, which changed various times over the years until it reached its present final form.
 - The idea was that it would provided a working version of the standard as early as possible while also easing the adaption of JS modules into the wider ecosystem.
 - The approach was that since the syntax support was not yet available in the browser, provide an alternative programmatic format that semantically is equivalent to the ESM Module System.
 - Nowadays SystemJS main utility is for lively development of js module based applications since it still comes with a handy hot swapping engine that still is (and probably never will be) supported by browsers.
 - lively.next utilizes SystemJS as an underlying architecture for implementing various custom aspects that are not supported by native Javascript modules.
 - This is achived by wrapping the aforementioned custom transpilation logic as a plugin to systemjs.
   - In addition to the lively specific transformations described earlier, we also in a final step apply a ESM module to SystemJS transpilation step.
   - The transpiled module code is then fed into SystemJS such that it can take care of the remaining bookkeeping for running the module system.

### Modules and Files

 - Modules are in the end based on files that reside on a server
 - With regards to the core modules of `lively.next` these files reside in the local file system the lively.server is running on.
 - By defauly `lively.next` requests the sources via the server which in return fetches the file and sends its contents back to the client.
 - If a module is changed from the client, the corresponding file as eventually also updated in the file system.
 - Broadly speaking there are 4 types of modules one encounters in lively.next:
   - The first are the modules belonging to the core packages of `lively.next` (the ones that were just mentioned). They can be changed in order to evolve the system at runtime.
   - The second one are 3rd party modules that have been installed via the custom NPM package manager `flatn`. While these technically can also be adjusted *as well* it should be obvious that in practice one should never do so.
     - Note that a lot of these installed npm packages still do not ship as ESM modules and can therefore only be reliably utilized inside node.js.\
     - The reason is that we currently only provide native fallbacks for non esm modules inside the `node.js` context.
     - In order to import 3rd part modules in the browser reliably, see the module type below.
     - The downside is that we loose the reflection capabilities to the modules that are imported via the native fallback.
   - The third type is 3rd party modules that have been installed via public ESM transpilation service. These are public servers that ship ESM transpilations of NPM packages.
     - In practice this means that 90% of the time an npm package that is intended to be utilizied in the browser can be imported in the browser via these servers.
     - There are still bugs and issues with some packages that can be reported to the administrators of these servers who often are rather quick at fixing the issues at hand.
     - These modules are cached as files on the server file system in order to improve loading performance.
     - It goes without say that altering these modules while technically possible, is not a good idea.
   - The fourth type are modules belonging to projects that where created in `lively.next` and you are working on right now.

### Bootstrapping the Modulesystem

 - An interesting aspect about modules in lively.next is that they are fully reflective.
   - This means every module object carries all the info it needs about its place in the system, the source code it holds and how to update or reload itself.
 - Since neither the Browser nor the NodeJS runtime offer a comprable reflection capability, it is curcial to devise a bootstrapping scheme that initializes the module system before it starts importing each module in the system.
   - The bootstrapping process itself is metacircular meaning the process is defined entirely within lively.next itself.
   - The bootstrapping algorithm roughly works as follows:
     - **Step A**
       - First it is ensured that the required third party libraries are loaded. This includes mainly SystemJS and Babel.
         > 🏗️ **Notice**
         > In the future we are trying to remove BabelJS and its large set of dependencies from the system. The main obstacle is the esm to systemjs transpilation we currently utilize in babel.
       - We then import all of the core packages that are required for `lively.modules` to run.
       - We then go ahead and initialize the `lively.modules` package.
     - **Step B**
       - We then use that newly created lively.modules package to import the previously imported packages *again* together with the remaining packages that have not yet been imported but are nessecary for the bootstrapping to be complete.
       - At this stage we reach a fully reflective state of the module system
   - As is, the above code is not executable since without a preexisting module system, we can not go ahead to import *anything* to begin with.
   - However by ***bundling the bootstrapping algorithm***, the steps inside **A** become just static imports resolved by the bulder. which are enough to enable the steps in **B**.

### Fast vs Slow Loading

 - A further optimization for lively.next boot performance
 - When looking at the process of bootstrapping itself it can generally be said that 10% of the time are spend in **Step A** wheras the majority of compute is spent on **Step B**.
 - We can therefore improve the performance by adjusting the dial on *how complete* we want **Step B** to be performed.
 - Hence, there is a choice between what we call the *slow load* and the *fast load*.
 - Slow Load;
   - Slow loading will use the bundled version in order to completely replace itself with a version of lively loaded via lively.modules, where every module object is loaded from scratch again. This creates a clean network of modules where each module is a first class object that is managed by SystemJS below.
   - This approach takes longer to load but from then on provides the most reliabel way to enhance the system from within of itself.
 - Fast Load:
   - Will try to run everything in lively.next without reinstantiating all of the modules again, instead restorting to using the bundledl version of lively.next most of the time.
   - Changes that were dont to the system after the bundle, are injected into the bundle by a mechanism we refer to as *reviving modules*.
   - The degree to wich this works varies. In our experience it is best not to have many local changes in place.
   - The fast load mode is suited best for users who mostly do not touch the core system at all, and are rather non programmers.

### Caching Optimizations

 - In order to further improve the loading performance in **Step B** we also utilize compression and caching strategies.
 - These are integrated via the SystemJS plugin API that allows us to hook into the loading process of a module.
#### server side compression of core source code
   - The server keeps a complete bundle of the entire lively.next core library code ans a single gzip bundle
   - The bundle is created whenever the server starts or whenever one of the modules in the core are changed during development
   - The bundle is shipped to the client during startup, which saves time since the request overhead of thousands of seperate module requests is reduced to a single transfer request.
   - The bundle is then used to directly read the module source from memory during booting of lively.next
#### transpilation and storage in client for immediate fetch from store
   - In addition to optimizing the load time of the source code itself, it is also vital to reduce the time spent in transpilation
   - Since basically any module that is to be editied and evaluated at runtime in lively.next needs to be transpiled, the time to transpile all modules is quite significant.
   - In order to save this on successive boots, it is possible to store each transpiled module in the local storage and directly fetch and evaluate from there instead of repeatedly performing a costly transpilation.

### Hot Reloading

 - how hot reloading works and how we are leveraging SystemJS to perform this
 - SystemJS internally stores the information about which module depends on which
    - Handles the reload of the nessecary modules in case one module is updated at runtime
    - When we request a module to be updated or simply reloaded, we trigger the following API calls in SystemJS
      - First the record of the module is deleted from SystemJS
      - We then redeclare the module in its new or current form, depending on the scenario (reload or patch)
      - We then trigger an import of the module, which initiates the updates in the module and all of the other modules that depend on it.
 - Reloading of module basically causes a clean re-evaluation of the module, which potentially resets all variables, objects, functions and classes within it.
   - This is alleviated by our custom transpilation explained earlier, which makes the resulting code automatically handle all the aspects required for sucessful *patching at runtime*.

## Dynamic Code Evaluation in lively.next

<!--lively.vm provides the ability to evaluate JavaScript code in an evaluation context. Normally the JavaScript eval() function uses the local scope of the function it was called in (however, there are some additional weird rules). It offers no further options about scope and bindings.
lively.vm has a range of options that control what bindings are available inside the executed code and also how top-level assignments inside the evaluated code are captured. The latter is helpful when you want to access intermediate results and assignments caused by the evaluation, e.g. to allow incremental development.-->
- Another key element to Smalltalk-like systems is the ubiqutous ability to evaluate expressions.
  - This is a key idea that Smalltalk inherited from LISP like systems it was inspired from.
- The standard `eval()` in javascript has various weird rules attached to it, that make it hard to use in practice.
  - One of them is that the default scope the evaluation is bound to is the local scope of the function it was called in
  - However there are however, there are some [additional weird rules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#description)

### Usage with transpilers

<!--lively.vm.runEval supports evaluation processes that are asynchronous. runEval itself will return a Promise that resolves to the eval result object. You can also specify an onEndEval handler to be notified when the evaluation is done. The following example also uses the transpileroption to allow top-level await (your JavaScript VM needs to support that, alternatively use a transpiler like babeljs in the transpiler function you pass to lively.vm). -->

### Usage with modules

 - Given a particular module is loaded you can pass the latter as a targetModule option to lively.vm that will run the evaluation in the context of the module, having access to all top-level module bindings (and being able to change those). 


## Bundling in lively.next

<!--
 - Smalltalk and other Smalltalk-like systems can basically only "ship" their apps together with their runtimes.
 - This usually requires a person that wants to run Self to have Self installed. Likewise a person that wants to run a Smalltalk app needs to have a Squeak Image available or provided.
 - The same issue arises with lively.next, just that we need to instantiate the runtime in the browser, which takes while in order to create all required objects to get the system going and live.
 - If we reallt want to ship in the browser, things needs to load fast and only ship with the minimum amount of what is needed.
   - This is reasonable since we can assume that most end users of an application will not feel the need to customize it further.
   - And even if they do, its fair to assume that they will be patient enough to wait a while for the system to load in order to incorporate the changes they need.
 - This is why lively.next comes with a comprehensive bundling system, which is able to create compact bundles out of applications that only include code that is needed while also avoiding expensive initialization of the module system.
 - The bundler is a fairly involved `RollupJS` plugin.
 - The resulting bundle is split bundle via the support of the [System.register() module format](https://github.com/systemjs/systemjs/blob/main/docs/system-register.md). (Explain system.register)
   - This allows for lazy loading of code chunk which helps with initial load time for applications that use a broad functionality of lively.next (i.e. interactive essays)
-->

Smalltalk and similar systems typically require their applications to be shipped along with their runtimes. For instance, running a Self application necessitates having Self installed, and running a Smalltalk app requires access to a Squeak Image. This dependency issue is also present in lively.next, where the runtime needs to be instantiated in the browser. This process involves creating all the necessary objects to get the system operational, which can take a significant amount of time.

To ship applications effectively in the browser, it is crucial to ensure that they load quickly and include only the essential components. This is a reasonable approach because most end users are unlikely to want to customize the application further. Even if customization is desired, it is fair to assume that users will be willing to wait for the system to load to incorporate the changes they need.

To address these needs, lively.next features a comprehensive bundling system. This system creates compact bundles of applications, including only the necessary code and avoiding the costly initialization of the module system. The bundler operates as a sophisticated `RollupJS` plugin.

The resulting bundle utilizes the [System.register() module format](https://github.com/systemjs/systemjs/blob/main/docs/system-register.md). This format allows for lazy loading of code chunks, which improves the initial load time for applications that use a wide range of lively.next functionalities, such as interactive essays.

### Configuring the Freezer

 - basically works by parametrizing the rollup plugin.
 - The supported configuration is the explained here:

### Bundling via console

### Bundling from the Browser

> ⚠️ **Attention**
> This is currently not supported. Will be available in the future though.

