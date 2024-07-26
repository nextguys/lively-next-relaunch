import { component } from "lively.morphic/index.js";
import { pt } from "lively.graphics/geometry-2d.js";
import { HTMLMorph } from "lively.morphic/html-morph.js";
const modules = component({
  type: HTMLMorph,
  name: 'aMarkdownPreviewMorph',
  extent: pt(420,12496.1),
  fixedHeight: false,
  html: '<link type=\"text/css\" rel=\"stylesheet\" id=\"github-markdown\" href=\"/lively.ide/md/github-markdown.css\"><div class=\"markdown-body\" style=\"margin: 5px\">\n\
<blockquote>\n\
<p>⚠️ <strong>Attention</strong>\n\
The following article is of very technical nature and only suitable for people who are interested in learning more about the inner workings of lively.next.</p>\n\
</blockquote>\n\
<p class=\"markdown-line-marker\" data-mdline=\"4\" data-htmlline=\"5\"><code>lively.next</code> draws inspiration from Smalltalk, aiming to provide a flexible, efficient, and interactive coding experience. The following chapter outlines the key features and mechanisms of lively.next, highlighting its advanced class management, source transformations, module system, performance optimizations for loading the system, and bundling techniques.</p>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"7\" data-htmlline=\"8\">Transpilation in lively.next</h2>\n\
<p class=\"markdown-line-marker\" data-mdline=\"9\" data-htmlline=\"10\">Since lively.next lives in the Browser and Node.JS runtimes, it does not have the luxury of a pure Smalltalk system where scopes and runtime stacks are fist class objects or mutable classes are built into the system core. Instead we need to tweak the default behavior of the javascript syntax with a little sprinkle of transpilation magic.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"11\" data-htmlline=\"12\">Scope</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"13\" data-htmlline=\"14\">The first area of concern are evaluation scopes. In Javascript a scope is defined syntactically but can not be accessed easily programmatically after the fact, especially not in the browser. For instance evaluating variable declaration like <code>var foo = \"bar\";</code> manually will not populate some kind of local namespace. Likewise we can not access variables from other scopes unless we have them explicitly stored away in a dedicated object.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"15\" data-htmlline=\"17\">This is especially troubling when considering tools like the Workspace or the System Browser, where we operate on a module scope and would like to have the ability to flexibly evaluate expressions within the context of the module.\n\
To alleviate that, <code>lively.next</code> provides a scope capturing transpilation for modules that is transparent to the user. It covers:</p>\n\
<ul>\n\
<li>Class declarations.</li>\n\
<li>Function declarations.</li>\n\
<li>Constants, or other top level variables, especially <em>Component Definitions</em>.\n\
These entities are then rewritten to be captured by a synthesized recording object that keeps all declared variables stored transparent to the user. So a module scope that on the surface looks something like this:</li>\n\
</ul>\n\
<pre><code class=\"language-javascript\">\n\
const foo = \'bar\';\n\
\n\
function alice() { returns \'bob\' }\n\
\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"30\" data-htmlline=\"31\">Internally turns into something like that:</p>\n\
<pre><code class=\"language-javascript\">\n\
const foo = __rec.foo = \'bar\';\n\
\n\
__rec.alice = function alice() { returns \'bob\' }\n\
// also attach meta information to functions\n\
__rec.alice[Symbol.for(\'lively-module-meta\')] = {\n\
  sourceLocation,\n\
  package: { module }\n\
  ....\n\
}\n\
\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"46\" data-htmlline=\"47\">Without going into too much detail, there are also more advanced scope capturing transformations. For instance in the presence of destructuring declarations the following happens:</p>\n\
<pre><code class=\"language-javascript\">\n\
const { ...bar, key } = foo;\n\
\n\
// is transformed to:\n\
\n\
let destructured_1 = {\n\
  key: 42,\n\
  hello: \"foo\",\n\
  world: \"bar\"\n\
};\n\
__rec.key = destructured_1.key;\n\
var bar = __rec.bar = {};\n\
for (var __key in destructured_1) {\n\
  if (__key === \"key\")\n\
    continue;\n\
  bar[__key] = destructured_1[__key];\n\
}\n\
\n\
</code></pre>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"69\" data-htmlline=\"70\">Classes</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"71\" data-htmlline=\"72\">The objective of implementing classes in lively.next is to replicate a Smalltalk-like class object within its runtime. In Smalltalk, when a class definition is modified, the change is applied in place, allowing all instances of the class to immediately reflect the updated behavior. In contrast, JavaScript’s default behavior, whether using the new ECMAScript class syntax or the traditional function prototype approach, replaces the existing class with the new definition. To achieve a Smalltalk-like system with live updates in lively.next, it’s essential to alter this default evaluation method.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"73\" data-htmlline=\"74\">To ensure that redefining a class does not replace the existing class instance but instead patches it with the new definition, the classes are transformed into a function call that synthesizes a new class based on a preexisting version and includes the necessary class members, such as methods and static methods and getters.</p>\n\
<pre><code class=\"language-javascript\">class Foo extends SuperFoo {\n\
  m() { return 2 + super.m() }\n\
}\n\
\n\
// is converted into somethin like:\n\
 createOrExtend(recorder, {referencedAs: \"SuperFoo\", value: SuperFoo}, \"Foo2\", [{\n\
   key: \"m\",\n\
   value: function m() {\n\
     return 2 + this.constructor[superclassSymbol].prototype.m.call(this);\n\
   }\n\
 }])\n\
\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"90\" data-htmlline=\"91\">The <code>createOrExtend</code> function in the above transformation consequently checks in the scope recorder if a class object is already present and if so, continues to extend the class instead of replacing it.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"92\" data-htmlline=\"94\">Additionally, the class object needs to be equipped with meta-information about itself, including details about its properties, superclass, module it is defined in and package it belongs to.\n\
Meta information about the properties within classes can be derived by using a canonical <code>static get properties() { }</code> definition, allowing for declarative property definitions. This setup facilitates the specification of property dependencies, default values, custom initialization routines, and other helpful meta-information for tool inspection, such as type and read-only status. Below is a schematic overview of how such a definition can look like:</p>\n\
<pre><code class=\"language-javascript\">// example of a class definition with static properties\n\
class Foo  extends SuperFoo {\n\
  static get properties () {\n\
    return {\n\
       caption: {\n\
          defaultValue: \'Default caption\', // does not invoke the setter when initialized to this value\n\
          initialize(v) {\n\
            // passed the defaultValue as the first argument if defined\n\
          }\n\
          set(v) {\n\
            // allows to override the default setter\n\
          },\n\
          get() {\n\
            // allows to override the default getter\n\
          },\n\
          before: [...], // list of properties that have to be initialized before\n\
          after: [...] // list of properties that can be initialized after \n\
          ...\n\
       },\n\
       ...\n\
    }\n\
  }\n\
}\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"121\" data-htmlline=\"122\">Every other piece of meta information on the other hand is generated during transpilation since the transpiler has all the meta information at hand already so that it can be attached to the initialized class. It is then passed to the <code>createOrExtent()</code> function from earlier like so:</p>\n\
<pre><code class=\"language-javascript\"> createOrExtend(recorder, {referencedAs: \"SuperFoo\", value: SuperFoo}, \"Foo2\", [{\n\
   key: \"m\",\n\
   value: function m() {\n\
     return 2 + this.constructor[superclassSymbol].prototype.m.call(this);\n\
   }\n\
 }], {\n\
   package: { module },\n\
   sourceLocation,\n\
   ...\n\
 })\n\
\n\
</code></pre>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"137\" data-htmlline=\"138\">Modules in lively.next</h2>\n\
<p class=\"markdown-line-marker\" data-mdline=\"139\" data-htmlline=\"140\">The modules system in <code>lively.next</code> is its own spin on the now widely adopted <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules\" target=\"_blank\">EcmaScript Module System</a>. It provides a fully reflective interpretation of the former, allowing for runtime inspection and modification of each and every modules in the system. In the following we will go over the different technical bits that play a key role in its implementation.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"141\" data-htmlline=\"142\">SystemJS</h3>\n\
<ul>\n\
<li>Is a framework that was developed directly in tandem with the early drafts of the EcmaScript Module System proposal.\n\
<ul>\n\
<li>It has over time always kept up with the semantics and changes of the standard, which changed various times over the years until it reached its present final form.</li>\n\
</ul>\n\
</li>\n\
<li>The idea was that it would provided a working version of the standard as early as possible while also easing the adaption of JS modules into the wider ecosystem.</li>\n\
<li>The approach was that since the syntax support was not yet available in the browser, provide an alternative programmatic format that semantically is equivalent to the ESM Module System.</li>\n\
<li>Nowadays SystemJS main utility is for lively development of js module based applications since it still comes with a handy hot swapping engine that still is (and probably never will be) supported by browsers.</li>\n\
<li>lively.next utilizes SystemJS as an underlying architecture for implementing various custom aspects that are not supported by native Javascript modules.</li>\n\
<li>This is achived by wrapping the aforementioned custom transpilation logic as a plugin to systemjs.\n\
<ul>\n\
<li>In addition to the lively specific transformations described earlier, we also in a final step apply a ESM module to SystemJS transpilation step.</li>\n\
<li>The transpiled module code is then fed into SystemJS such that it can take care of the remaining bookkeeping for running the module system.</li>\n\
</ul>\n\
</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"152\" data-htmlline=\"153\">Modules and Files</h3>\n\
<ul>\n\
<li>Modules are in the end based on files that reside on a server</li>\n\
<li>With regards to the core modules of <code>lively.next</code> these files reside in the local file system the lively.server is running on.</li>\n\
<li>By defauly <code>lively.next</code> requests the sources via the server which in return fetches the file and sends its contents back to the client.</li>\n\
<li>If a module is changed from the client, the corresponding file as eventually also updated in the file system.</li>\n\
<li>Broadly speaking there are 4 types of modules one encounters in lively.next:\n\
<ul>\n\
<li>The first are the modules belonging to the core packages of <code>lively.next</code> (the ones that were just mentioned). They can be changed in order to evolve the system at runtime.</li>\n\
<li>The second one are 3rd party modules that have been installed via the custom NPM package manager <code>flatn</code>. While these technically can also be adjusted <em>as well</em> it should be obvious that in practice one should never do so.\n\
<ul>\n\
<li>Note that a lot of these installed npm packages still do not ship as ESM modules and can therefore only be reliably utilized inside node.js.\</li>\n\
<li>The reason is that we currently only provide native fallbacks for non esm modules inside the <code>node.js</code> context.</li>\n\
<li>In order to import 3rd part modules in the browser reliably, see the module type below.</li>\n\
<li>The downside is that we loose the reflection capabilities to the modules that are imported via the native fallback.</li>\n\
</ul>\n\
</li>\n\
<li>The third type is 3rd party modules that have been installed via public ESM transpilation service. These are public servers that ship ESM transpilations of NPM packages.\n\
<ul>\n\
<li>In practice this means that 90% of the time an npm package that is intended to be utilizied in the browser can be imported in the browser via these servers.</li>\n\
<li>There are still bugs and issues with some packages that can be reported to the administrators of these servers who often are rather quick at fixing the issues at hand.</li>\n\
<li>These modules are cached as files on the server file system in order to improve loading performance.</li>\n\
<li>It goes without say that altering these modules while technically possible, is not a good idea.</li>\n\
</ul>\n\
</li>\n\
<li>The fourth type are modules belonging to projects that where created in <code>lively.next</code> and you are working on right now.</li>\n\
</ul>\n\
</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"172\" data-htmlline=\"173\">Bootstrapping the Modulesystem</h3>\n\
<ul>\n\
<li>An interesting aspect about modules in lively.next is that they are fully reflective.\n\
<ul>\n\
<li>This means every module object carries all the info it needs about its place in the system, the source code it holds and how to update or reload itself.</li>\n\
</ul>\n\
</li>\n\
<li>Since neither the Browser nor the NodeJS runtime offer a comprable reflection capability, it is curcial to devise a bootstrapping scheme that initializes the module system before it starts importing each module in the system.\n\
<ul>\n\
<li>The bootstrapping process itself is metacircular meaning the process is defined entirely within lively.next itself.</li>\n\
<li>The bootstrapping algorithm roughly works as follows:\n\
<ul>\n\
<li><strong>Step A</strong>\n\
<ul>\n\
<li>First it is ensured that the required third party libraries are loaded. This includes mainly SystemJS and Babel.\n\
<blockquote>\n\
<p>🏗️ <strong>Notice</strong>\n\
In the future we are trying to remove BabelJS and its large set of dependencies from the system. The main obstacle is the esm to systemjs transpilation we currently utilize in babel.</p>\n\
</blockquote>\n\
</li>\n\
<li>We then import all of the core packages that are required for <code>lively.modules</code> to run.</li>\n\
<li>We then go ahead and initialize the <code>lively.modules</code> package.</li>\n\
</ul>\n\
</li>\n\
<li><strong>Step B</strong>\n\
<ul>\n\
<li>We then use that newly created lively.modules package to import the previously imported packages <em>again</em> together with the remaining packages that have not yet been imported but are nessecary for the bootstrapping to be complete.</li>\n\
<li>At this stage we reach a fully reflective state of the module system</li>\n\
</ul>\n\
</li>\n\
</ul>\n\
</li>\n\
<li>As is, the above code is not executable since without a preexisting module system, we can not go ahead to import <em>anything</em> to begin with.</li>\n\
<li>However by <em><strong>bundling the bootstrapping algorithm</strong></em>, the steps inside <strong>A</strong> become just static imports resolved by the bulder. which are enough to enable the steps in <strong>B</strong>.</li>\n\
</ul>\n\
</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"191\" data-htmlline=\"192\">Fast vs Slow Loading</h3>\n\
<ul>\n\
<li>A further optimization for lively.next boot performance</li>\n\
<li>When looking at the process of bootstrapping itself it can generally be said that 10% of the time are spend in <strong>Step A</strong> wheras the majority of compute is spent on <strong>Step B</strong>.</li>\n\
<li>We can therefore improve the performance by adjusting the dial on <em>how complete</em> we want <strong>Step B</strong> to be performed.</li>\n\
<li>Hence, there is a choice between what we call the <em>slow load</em> and the <em>fast load</em>.</li>\n\
<li>Slow Load;\n\
<ul>\n\
<li>Slow loading will use the bundled version in order to completely replace itself with a version of lively loaded via lively.modules, where every module object is loaded from scratch again. This creates a clean network of modules where each module is a first class object that is managed by SystemJS below.</li>\n\
<li>This approach takes longer to load but from then on provides the most reliabel way to enhance the system from within of itself.</li>\n\
</ul>\n\
</li>\n\
<li>Fast Load:\n\
<ul>\n\
<li>Will try to run everything in lively.next without reinstantiating all of the modules again, instead restorting to using the bundledl version of lively.next most of the time.</li>\n\
<li>Changes that were dont to the system after the bundle, are injected into the bundle by a mechanism we refer to as <em>reviving modules</em>.</li>\n\
<li>The degree to wich this works varies. In our experience it is best not to have many local changes in place.</li>\n\
<li>The fast load mode is suited best for users who mostly do not touch the core system at all, and are rather non programmers.</li>\n\
</ul>\n\
</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"206\" data-htmlline=\"207\">Caching Optimizations</h3>\n\
<ul>\n\
<li>In order to further improve the loading performance in <strong>Step B</strong> we also utilize compression and caching strategies.</li>\n\
<li>These are integrated via the SystemJS plugin API that allows us to hook into the loading process of a module.</li>\n\
</ul>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"210\" data-htmlline=\"211\">server side compression of core source code</h4>\n\
<ul>\n\
<li>The server keeps a complete bundle of the entire lively.next core library code ans a single gzip bundle</li>\n\
<li>The bundle is created whenever the server starts or whenever one of the modules in the core are changed during development</li>\n\
<li>The bundle is shipped to the client during startup, which saves time since the request overhead of thousands of seperate module requests is reduced to a single transfer request.</li>\n\
<li>The bundle is then used to directly read the module source from memory during booting of lively.next</li>\n\
</ul>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"215\" data-htmlline=\"216\">transpilation and storage in client for immediate fetch from store</h4>\n\
<ul>\n\
<li>In addition to optimizing the load time of the source code itself, it is also vital to reduce the time spent in transpilation</li>\n\
<li>Since basically any module that is to be editied and evaluated at runtime in lively.next needs to be transpiled, the time to transpile all modules is quite significant.</li>\n\
<li>In order to save this on successive boots, it is possible to store each transpiled module in the local storage and directly fetch and evaluate from there instead of repeatedly performing a costly transpilation.</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"220\" data-htmlline=\"221\">Hot Reloading</h3>\n\
<ul>\n\
<li>how hot reloading works and how we are leveraging SystemJS to perform this</li>\n\
<li>SystemJS internally stores the information about which module depends on which\n\
<ul>\n\
<li>Handles the reload of the nessecary modules in case one module is updated at runtime</li>\n\
<li>When we request a module to be updated or simply reloaded, we trigger the following API calls in SystemJS\n\
<ul>\n\
<li>First the record of the module is deleted from SystemJS</li>\n\
<li>We then redeclare the module in its new or current form, depending on the scenario (reload or patch)</li>\n\
<li>We then trigger an import of the module, which initiates the updates in the module and all of the other modules that depend on it.</li>\n\
</ul>\n\
</li>\n\
</ul>\n\
</li>\n\
<li>Reloading of module basically causes a clean re-evaluation of the module, which potentially resets all variables, objects, functions and classes within it.\n\
<ul>\n\
<li>This is alleviated by our custom transpilation explained earlier, which makes the resulting code automatically handle all the aspects required for sucessful <em>patching at runtime</em>.</li>\n\
</ul>\n\
</li>\n\
</ul>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"232\" data-htmlline=\"233\">Dynamic Code Evaluation in lively.next</h2>\n\
<!--lively.vm provides the ability to evaluate JavaScript code in an evaluation context. Normally the JavaScript eval() function uses the local scope of the function it was called in (however, there are some additional weird rules). It offers no further options about scope and bindings.\n\
lively.vm has a range of options that control what bindings are available inside the executed code and also how top-level assignments inside the evaluated code are captured. The latter is helpful when you want to access intermediate results and assignments caused by the evaluation, e.g. to allow incremental development.-->\n\
<ul>\n\
<li>Another key element to Smalltalk-like systems is the ubiqutous ability to evaluate expressions.\n\
<ul>\n\
<li>This is a key idea that Smalltalk inherited from LISP like systems it was inspired from.</li>\n\
</ul>\n\
</li>\n\
<li>The standard <code>eval()</code> in javascript has various weird rules attached to it, that make it hard to use in practice.\n\
<ul>\n\
<li>One of them is that the default scope the evaluation is bound to is the local scope of the function it was called in</li>\n\
<li>However there are however, there are some <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#description\" target=\"_blank\">additional weird rules</a></li>\n\
</ul>\n\
</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"242\" data-htmlline=\"243\">Usage with transpilers</h3>\n\
<!--lively.vm.runEval supports evaluation processes that are asynchronous. runEval itself will return a Promise that resolves to the eval result object. You can also specify an onEndEval handler to be notified when the evaluation is done. The following example also uses the transpileroption to allow top-level await (your JavaScript VM needs to support that, alternatively use a transpiler like babeljs in the transpiler function you pass to lively.vm). -->\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"246\" data-htmlline=\"247\">Usage with modules</h3>\n\
<ul>\n\
<li>Given a particular module is loaded you can pass the latter as a targetModule option to lively.vm that will run the evaluation in the context of the module, having access to all top-level module bindings (and being able to change those).</li>\n\
</ul>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"251\" data-htmlline=\"252\">Bundling in lively.next</h2>\n\
<!--\n\
 - Smalltalk and other Smalltalk-like systems can basically only \"ship\" their apps together with their runtimes.\n\
 - This usually requires a person that wants to run Self to have Self installed. Likewise a person that wants to run a Smalltalk app needs to have a Squeak Image available or provided.\n\
 - The same issue arises with lively.next, just that we need to instantiate the runtime in the browser, which takes while in order to create all required objects to get the system going and live.\n\
 - If we reallt want to ship in the browser, things needs to load fast and only ship with the minimum amount of what is needed.\n\
   - This is reasonable since we can assume that most end users of an application will not feel the need to customize it further.\n\
   - And even if they do, its fair to assume that they will be patient enough to wait a while for the system to load in order to incorporate the changes they need.\n\
 - This is why lively.next comes with a comprehensive bundling system, which is able to create compact bundles out of applications that only include code that is needed while also avoiding expensive initialization of the module system.\n\
 - The bundler is a fairly involved `RollupJS` plugin.\n\
 - The resulting bundle is split bundle via the support of the [System.register() module format](https://github.com/systemjs/systemjs/blob/main/docs/system-register.md). (Explain system.register)\n\
   - This allows for lazy loading of code chunk which helps with initial load time for applications that use a broad functionality of lively.next (i.e. interactive essays)\n\
-->\n\
<p class=\"markdown-line-marker\" data-mdline=\"266\" data-htmlline=\"267\">Smalltalk and similar systems typically require their applications to be shipped along with their runtimes. For instance, running a Self application necessitates having Self installed, and running a Smalltalk app requires access to a Squeak Image. This dependency issue is also present in lively.next, where the runtime needs to be instantiated in the browser. This process involves creating all the necessary objects to get the system operational, which can take a significant amount of time.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"268\" data-htmlline=\"269\">To ship applications effectively in the browser, it is crucial to ensure that they load quickly and include only the essential components. This is a reasonable approach because most end users are unlikely to want to customize the application further. Even if customization is desired, it is fair to assume that users will be willing to wait for the system to load to incorporate the changes they need.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"270\" data-htmlline=\"271\">To address these needs, lively.next features a comprehensive bundling system. This system creates compact bundles of applications, including only the necessary code and avoiding the costly initialization of the module system. The bundler operates as a sophisticated <code>RollupJS</code> plugin.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"272\" data-htmlline=\"273\">The resulting bundle utilizes the <a href=\"https://github.com/systemjs/systemjs/blob/main/docs/system-register.md\" target=\"_blank\">System.register() module format</a>. This format allows for lazy loading of code chunks, which improves the initial load time for applications that use a wide range of lively.next functionalities, such as interactive essays.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"274\" data-htmlline=\"275\">Configuring the Freezer</h3>\n\
<ul>\n\
<li>basically works by parametrizing the rollup plugin.</li>\n\
<li>The supported configuration is the explained here:</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"279\" data-htmlline=\"280\">Bundling via console</h3>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"281\" data-htmlline=\"282\">Bundling from the Browser</h3>\n\
<blockquote>\n\
<p>⚠️ <strong>Attention</strong>\n\
This is currently not supported. Will be available in the future though.</p>\n\
</blockquote>\n\
\n\
</div>',
  layout: null,
  position: pt(750,297)
});



export { modules }