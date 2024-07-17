
> ⚠️ **Warning**
> This is about the module system we utilize in lively. It is internally referred to as lively.modules.
> But this is not to scare you.

## SystemJS
 - Is a framework that was developed directly in tandem with the early drafts of the EcmaScript Module System proposal.
   - It has over time always kept up with the semantics and changes of the standard, which changed various times over the years until it reached its present final form.
 - The idea was that it would provided a working version of the standard as early as possible while also easing the adaption of JS modules into the wider ecosystem.
 - Nowadays SystemJS main utility is for lively development of js module based applications since it still comes with a handy hot swapping engine that still is (and probably never will be) supported by browsers.
 - lively.next utilizes SystemJS as an underlying architecture for implementing various custom aspect that are not supported by native Javascript modules.
 - These includes:
   - capturing and preservation of the top level module scope (this includes top level variables, classes and functions)
   - in place updating of classes if their definition changes. The classes are not replaced by new instances but instead are manipulated in place such that all currently existing instances are updated. (See more in **Classes in lively.next**)
   - embedding of meta information to entities like classes, functions or component definitions. This includes module, package and source locations. This information is in turn used by many of the tools within the system. (Seem more about the **Source Transformations**)
## Classes in lively.next

> ⚠️ **Attention** In the future, we are considering replacing the `static properties` notation of property definition in favor of a decorator syntax.

- classes are transformed into a function call that synthesizes a new class based on a preexisting version of the class and a set of class members (methods, static methods) and soon also (decorators, class fields).

## Source Transformations
 - more details about which entities are transformed and what that entails for the user
## Module Environments and Evaluation Contexts
 - basically this is lively.vm stuff
## Hot Reloading
 - how hot reloading works and how we are leveraging SystemJS to perform this
## Caching Optimization
 - server side compression of core source code
 - local source transform caching
## Fast vs Slow Loading
 - lively.next loads by bootstrapping itself outside of a bundled version of itself.
 - The user can very the degree of diversion from the bootstrapped instance. There is a choice between what we call the *slow load* and the *fast load*.
 - Slow Load;
   - Slow loading will use the bundled version in order to completely replace itself with a version of lively loaded via lively.modules, where every module object is loaded from scratch again. This creates a clean network of modules where each module is a first class object that is managed by SystemJS below.
   - This approach takes longer to load but from then on provides the most reliabel way to enhance the system from within of itself.
 - Fast Load:
   - Will try to run everything in lively.next without reinstantiating all of the modules again, instead restorting to using the bundledl version of lively.next most of the time.
   - Changes that were dont to the system after the bundle, are injected into the bundle by a mechanism we refer to as *reviving modules*.
   - The degree to wich this works varies. In our experience it is best not to have many local changes in place.
   - The fast load mode is suited best for users who mostly do not touch the core system at all, and are rather non programmers.
## Bundling (aka. Freezing)
 - Smalltalk and other Smalltalk-like systems can basically only "ship" their apps together with their runtimes.
 - This usually requires a person that wants to run Self to have Self installed. Likewise a person that wants to run a Smalltalk app needs to have a Squeak Image available or provided.
 - The same issue arises with lively.next, just that we need to instantiate the runtime in the browser, which takes while in order to create all required objects to get the system going and live.
 - If we reallt want to ship in the browser, things needs to load fast and only ship with the minimum amount of what is needed.
   - This is reasonable since we can assume that most end users of an application will not feel the need to customize it further.
   - And even if they do, its fair to assume that they will be patient enough to wait a while for the system to load in order to incorporate the changes they need.
 - This is why lively.next comes with a comprehensive bundling system, which is able to create compact bundles out of applications that only include code that is needed while also avoiding expensive initialization of the module system.
 - The bundler is a fairly involved `RollupJS` plugin.



