import { component } from "lively.morphic/index.js";
import { pt } from "lively.graphics/geometry-2d.js";
import { HTMLMorph } from "lively.morphic/html-morph.js";
const modules = component({
  type: HTMLMorph,
  name: 'aMarkdownPreviewMorph',
  extent: pt(420,12412.4),
  fixedHeight: false,
  html: '<div class=\"markdown-body\" style=\"margin: 5px\">\n\
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
<pre><code class=\"language-javascript\">const foo = \'bar\';\n\
\n\
function alice() { returns \'bob\' }\n\
\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"29\" data-htmlline=\"30\">Internally turns into something like that:</p>\n\
<pre><code class=\"language-javascript\">const foo = __rec.foo = \'bar\';\n\
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
<p class=\"markdown-line-marker\" data-mdline=\"44\" data-htmlline=\"45\">Without going into too much detail, there are also more advanced scope capturing transformations. For instance in the presence of destructuring declarations the following happens:</p>\n\
<pre><code class=\"language-javascript\">const { ...bar, key } = foo;\n\
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
<h3 class=\"markdown-line-marker\" data-mdline=\"66\" data-htmlline=\"67\">Classes</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"68\" data-htmlline=\"69\">The objective of implementing classes in lively.next is to replicate a Smalltalk-like class object within its runtime. In Smalltalk, when a class definition is modified, the change is applied in place, allowing all instances of the class to immediately reflect the updated behavior. In contrast, JavaScript’s default behavior, whether using the new ECMAScript class syntax or the traditional function prototype approach, replaces the existing class with the new definition. To achieve a Smalltalk-like system with live updates in lively.next, it’s essential to alter this default evaluation method.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"70\" data-htmlline=\"71\">To ensure that redefining a class does not replace the existing class instance but instead patches it with the new definition, the classes are transformed into a function call that synthesizes a new class based on a preexisting version and includes the necessary class members, such as methods and static methods and getters.</p>\n\
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
<p class=\"markdown-line-marker\" data-mdline=\"87\" data-htmlline=\"88\">The <code>createOrExtend</code> function in the above transformation consequently checks in the scope recorder if a class object is already present and if so, continues to extend the class instead of replacing it.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"89\" data-htmlline=\"91\">Additionally, the class object needs to be equipped with meta-information about itself, including details about its properties, superclass, module it is defined in and package it belongs to.\n\
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
<p class=\"markdown-line-marker\" data-mdline=\"118\" data-htmlline=\"119\">Every other piece of meta information on the other hand is generated during transpilation since the transpiler has all the meta information at hand already so that it can be attached to the initialized class. It is then passed to the <code>createOrExtent()</code> function from earlier like so:</p>\n\
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
<h3 class=\"markdown-line-marker\" data-mdline=\"134\" data-htmlline=\"135\">Dynamic Code Evaluation</h3>\n\
<!--- Another key element to Smalltalk-like systems is the ubiqutous ability to evaluate expressions.\n\
  - This is a key idea that Smalltalk inherited from LISP like systems it was inspired from.\n\
- The standard `eval()` in javascript has various weird rules attached to it, that make it hard to use in practice.\n\
  - One of them is that the default scope the evaluation is awlays bound to the local scope of the function it was called in\n\
  - However there are some [additional weird rules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#description)\n\
- In order to alleviate this, `lively.next` provides its own wrapper around the native `eval()` of Javascript, which applies custom source transformations in order to make the evaluation behavior more predictable and flexible.\n\
- Evaluation is performed with custom bindings that can be provided alongside the code to be executed.\n\
- The different environments can be:\n\
  - A custom variable mapping, where variables names are manually assigned certain values.\n\
  - A module where all the variables that where captured by the custom transpilation will be made available to the expression.\n\
    - It also allows for partial module specific expressions (such as import or export statements) to be evaluated.\n\
    - This is not supported by the native `eval()` and is achieved by transpiling the module specific syntax into statements that extract the correct values from the module\'s recorder object.\n\
  - A remote runtime such as a different browser, server or a lively.next running on a different hardware. Here the source transpilation also ensures that all required modules and packages are imported to fullfill the evaluation in the separate environment.-->\n\
<p class=\"markdown-line-marker\" data-mdline=\"150\" data-htmlline=\"151\">In Smalltalk-like systems, a crucial feature is the pervasive capability to evaluate expressions. This concept is rooted in the influences of LISP-like systems from which Smalltalk drew inspiration. In JavaScript, the standard <code>eval()</code> function has a number of peculiarities that can complicate its practical use. Notably, the evaluation context is tied to the local scope of the function from which it was invoked. Additionally, there are several other specific rules and behaviors associated with <code>eval()</code>, which are outlined in detail on resources like the Mozilla Developer Network.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"152\" data-htmlline=\"153\">To address these limitations, the <code>lively.next</code> framework offers a custom wrapper around JavaScript’s native <code>eval()</code> function. This wrapper applies unique source transformations, thereby providing a more predictable and flexible evaluation behavior. It allows for custom bindings to be provided alongside the code being evaluated, offering various styles of evaluation:</p>\n\
<ol>\n\
<li>\n\
<p><strong>Custom Variable Mapping Evaluation</strong>: This allows variables in the expression to be manually assigned specific values, enabling tailored execution contexts.</p>\n\
</li>\n\
<li>\n\
<p><strong>Module-Based Evaluation</strong>: Here, the variables of a module scope captured during custom transpilation are made available to the expression. This setup also supports the evaluation of partial module-specific expressions, such as <code>import</code> or <code>export</code> statements. This functionality is not available with the native <code>eval()</code> and is achieved by transforming module-specific syntax into statements that correctly access values from the module’s recorder object.</p>\n\
</li>\n\
<li>\n\
<p><strong>Remote Runtime Evaluation</strong>: This environment supports evaluation in separate runtimes, such as different browsers, servers, or <code>lively.next</code> instances running on different hardware. The source transpilation process ensures that all necessary modules and packages are imported, enabling the evaluation to proceed smoothly in the different environment.</p>\n\
</li>\n\
</ol>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"160\" data-htmlline=\"161\">Modules in lively.next</h2>\n\
<p class=\"markdown-line-marker\" data-mdline=\"162\" data-htmlline=\"163\">The modules system in <code>lively.next</code> is its own spin on the now widely adopted <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules\" target=\"_blank\">EcmaScript Module System</a>. It provides a fully reflective interpretation of the former, allowing for runtime inspection and modification of each and every modules in the system. In the following we will go over the different technical bits that play a key role in its implementation.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"164\" data-htmlline=\"165\">System.js</h3>\n\
<!--- Is a framework that was developed directly in tandem with the early drafts of the EcmaScript Module System proposal.\n\
   - It has over time always kept up with the semantics and changes of the standard, which changed various times over the years until it reached its present final form.\n\
 - The idea of SystemJS was that it provides a working version of the standard as early as possible while also easing the adaption of JS modules into the wider Javascript ecosystem.\n\
 - The approach was that since the syntax support was not yet available in the browser, provide an alternative programmatic format that semantically is equivalent to the ESM Module System.\n\
   - This was accompanyied by an easily adaptable transpilation interface where one could translate ESM syntax into the SystemJS compliant format.\n\
 - Nowadays SystemJS main utility is for lively development of js module based applications since it still comes with a handy hot swapping engine that still is (and probably never will be) supported by browsers.\n\
\n\
- lively.next utilizes SystemJS as its backbone for implementing various custom aspects that are not supported by native Javascript modules.\n\
 - This is achived by wrapping the aforementioned custom transpilation logic as a plugin to systemjs.\n\
   - In addition to the lively specific transformations described earlier, we also in a final step apply a ESM module to SystemJS transpilation step.\n\
   - The transpiled module code is then fed into SystemJS such that it can take care of the remaining bookkeeping for running the module system.-->\n\
<p class=\"markdown-line-marker\" data-mdline=\"178\" data-htmlline=\"179\">System.js is a framework that was developed in parallel with the early drafts of the EcmaScript Module System proposal. Over time, it has consistently aligned with the evolving semantics and changes of the standard, adapting through various iterations until the standard reached its current form. The core idea behind System.js was to offer a functional implementation of the standard as early as possible, thereby facilitating the adoption of JavaScript modules across the broader JavaScript ecosystem.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"180\" data-htmlline=\"181\">Given that native syntax support for modules was not yet available in browsers during its inception, System.js provided an alternative programmatic format that was semantically equivalent to the ECMAScript Module (ESM) System. This was complemented by an easily adaptable transpilation interface, enabling developers to convert ESM syntax into a format compliant with System.js.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"182\" data-htmlline=\"183\">Today, SystemJS is particularly valuable for the dynamic development of JavaScript module-based applications. It includes a convenient hot-swapping engine that allows for a dynamic live development in the browser.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"184\" data-htmlline=\"185\">In the case of the <code>lively.next</code> framework, System.js serves as the foundation for implementing various custom features that native JavaScript modules do not support. This is accomplished by integrating the aforementioned custom transpilation logic as a plugin into System.js. In addition to the unique transformations specific to <code>lively.next</code>, also performs a final step of transpiling ESM module syntax into a format that SystemJS can process. The transpiled module code is then managed by SystemJS, which handles the necessary bookkeeping to ensure the proper functioning of the module system.</p>\n\
<div id=\"mermaid-container-465367f5d7264c538854ce5a042b0dfe\"></div><h3 class=\"markdown-line-marker\" data-mdline=\"196\" data-htmlline=\"197\">Modules and Files</h3>\n\
<!-- - Modules are in the end based on files that reside somewhere on a computer.\n\
 - With regards to the core modules of `lively.next` these files reside in the local file system the lively.server is running on.\n\
 - By defauly `lively.next` requests the sources via the server which in return fetches the file and sends its contents back to the client.\n\
 - If a module is changed from the client, the corresponding file as eventually also updated in the file system.\n\
 - Broadly speaking there are 4 types of modules one encounters in lively.next:\n\
   - The first are the modules belonging to the core packages of `lively.next` (the ones that were just mentioned). They can be changed in order to evolve the system at runtime.\n\
   - The second one are 3rd party modules that have been installed via the custom NPM package manager `flatn`. While these technically can also be adjusted *as well* it should be obvious that in practice one should never do so.\n\
     - Note that a lot of these installed npm packages still do not ship as ESM modules and can therefore only be reliably utilized inside node.js.\\n\
     - The reason is that we currently only provide native fallbacks for non esm modules inside the `node.js` context.\n\
     - In order to import 3rd part modules in the browser reliably, see the module type below.\n\
     - The downside is that we loose the reflection capabilities to the modules that are imported via the native fallback.\n\
   - The third type is 3rd party modules that have been installed via public ESM transpilation service. These are public servers that ship ESM transpilations of NPM packages.\n\
     - In practice this means that 90% of the time an npm package that is intended to be utilizied in the browser can be imported in the browser via these servers.\n\
     - There are still bugs and issues with some packages that can be reported to the administrators of these servers who often are rather quick at fixing the issues at hand.\n\
     - These modules are cached as files on the server file system in order to improve loading performance.\n\
     - It goes without say that altering these modules while technically possible, is not a good idea.\n\
   - The fourth type are modules belonging to projects that where created in `lively.next` and you are working on right now.\n\
 - Aside from file based modules, `lively.next` also supports *in-memory* modules that are either stored to the browser local storage *(`local://...`)* or are kept purely in memory *(`lively://...`)*, ceasing to exisit once the runtime is terminated.\n\
   - One example for these ephemeral modules are the ones created by workspaces in the system.-->\n\
<p class=\"markdown-line-marker\" data-mdline=\"218\" data-htmlline=\"219\">In essence, modules are ultimately based on files that are stored somewhere on a computer. For the core modules of <code>lively.next</code>, these files are located within the local file system where the lively.server is running. By default, <code>lively.next</code> requests these source files from the server, which retrieves the files and sends their contents back to the client. When a module is modified from the client side, the corresponding file is eventually updated in the file system.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"220\" data-htmlline=\"221\">However these are not only only types of modules we use. There are broadly four types of modules encountered in <code>lively.next</code>:</p>\n\
<ol>\n\
<li>\n\
<p><strong>Core Modules</strong>: These are part of the core packages of <code>lively.next</code>. These modules can be modified to evolve the system at runtime.</p>\n\
</li>\n\
<li>\n\
<p><strong>Project-Specific Modules</strong>: These are modules related to projects currently being developed in <code>lively.next</code>. You are very welcome to edit these modules of course!</p>\n\
</li>\n\
<li>\n\
<p><strong>Third-Party Modules via Flatn</strong>: These modules are installed through the custom NPM package manager <code>flatn</code>. Although technically modifiable, it is generally advised not to alter these modules. Many of these NPM packages do not ship as ECMAScript Modules (ESM) and can only be reliably used within a Node.js environment. This limitation arises because <code>lively.next</code> currently provides native fallbacks for non-ESM modules exclusively in the Node.js context. For reliable import of third-party modules in the browser, a different approach is needed. However, using native fallbacks results in a loss of reflection capabilities for these modules.</p>\n\
</li>\n\
<li>\n\
<p><strong>Third-Party Modules via Public ESM Transpilation Services</strong>: These are public servers that provide ESM-transpiled versions of NPM packages. This method enables approximately 90% of NPM packages intended for browser use to be imported directly into the browser. While there may be occasional bugs or issues, they can often be reported to the administrators of these servers, who are usually prompt in addressing the problems. To enhance loading performance, these modules are cached as files on the server file system. Although technically possible, altering these modules is generally not recommended.</p>\n\
</li>\n\
</ol>\n\
<p class=\"markdown-line-marker\" data-mdline=\"230\" data-htmlline=\"231\">In addition to file-based modules, <code>lively.next</code> also supports in-memory modules. These can be stored in the browser’s local storage (<code>local://...</code>) or kept entirely in memory (<code>lively://...</code>), disappearing once the runtime is terminated. An example of these ephemeral modules includes those created by workspaces within the system. In memory modules can also be serialized, meaning they can be incorporated into a snapshot which can be handy to transport state and behavior across different systems.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"232\" data-htmlline=\"233\">Bootstrapping the Modulesystem</h3>\n\
<!-- - An interesting aspect about modules in lively.next is that they are fully reflective.\n\
   - This means every module object carries all the info it needs about its place in the system, the source code it holds and how to update or reload itself.\n\
 - Since neither the Browser nor the NodeJS runtime offer a comprable reflection capability, it is curcial to devise a bootstrapping scheme that initializes the module system before it starts importing each module in the system.\n\
   - The bootstrapping process itself is metacircular meaning the process is defined entirely within lively.next itself.\n\
   - The bootstrapping algorithm roughly works as follows:\n\
     - **Step A**\n\
       - First it is ensured that the required third party libraries are loaded. This includes mainly SystemJS and Babel.\n\
         > 🏗️ **Notice**\n\
         > In the future we are trying to remove BabelJS and its large set of dependencies from the system. The main obstacle is the esm to systemjs transpilation we currently utilize in babel.\n\
       - We then import all of the core packages that are required for `lively.modules` to run.\n\
       - We then go ahead and initialize the `lively.modules` package.\n\
     - **Step B**\n\
       - We then use that newly created lively.modules package to import the previously imported packages *again* together with the remaining packages that have not yet been imported but are nessecary for the bootstrapping to be complete.\n\
       - At this stage we reach a fully reflective state of the module system\n\
   - As is, the above code is not executable since without a preexisting module system, we can not go ahead to import *anything* to begin with.\n\
   - However by ***bundling the bootstrapping algorithm***, the steps inside **A** become just static imports resolved by the bulder. which are enough to enable the steps in **B**.-->\n\
<p class=\"markdown-line-marker\" data-mdline=\"251\" data-htmlline=\"252\">In <code>lively.next</code>, modules are fully reflective, meaning each module object contains all the information it needs about its position within the system, the source code it holds, and the methods to update or reload itself. This level of introspection is not natively supported by either the Browser or the NodeJS runtime, making it essential to establish a bootstrapping process that initializes the module system before any module imports occur.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"253\" data-htmlline=\"254\">The bootstrapping process is metacircular, meaning it is defined entirely within <code>lively.next</code>. Here’s a breakdown of the process:</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"255\" data-htmlline=\"256\"><strong>Step A</strong> involves ensuring that all necessary third-party libraries, particularly SystemJS and Babel, are loaded first. These libraries are crucial for the functioning of the system. There’s a note that the future goal is to remove BabelJS and its extensive dependencies, as it is currently used for ESM to SystemJS transpilation. After loading these libraries, all core packages required for the <code>lively.modules</code> package are imported, followed by the initialization of the <code>lively.modules</code> package itself.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"257\" data-htmlline=\"258\"><strong>Step B</strong> utilizes the now initialized <code>lively.modules</code> package to re-import the previously imported packages along with any remaining necessary packages. This re-importation process is critical to achieve a fully reflective state within the module system.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"259\" data-htmlline=\"260\">It is important to note that the code described in the steps above is not executable on its own because there needs to be an initial module system in place to start importing anything. This issue is resolved by bundling the bootstrapping algorithm, where the steps in <strong>Step A</strong> become static imports resolved by the bundler. This setup provides enough infrastructure to enable the actions described in <strong>Step B</strong>.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"261\" data-htmlline=\"262\">Here is a diagram illustrating the bootstrapping process:</p>\n\
<div id=\"mermaid-container-1b37353c72ec4cb484079387328b7f93\"></div><h3 class=\"markdown-line-marker\" data-mdline=\"286\" data-htmlline=\"287\">Fast vs Slow Loading</h3>\n\
<!-- - A further optimization for lively.next boot performance\n\
 - When looking at the process of bootstrapping itself it can generally be said that 10% of the time are spend in **Step A** wheras the majority of compute is spent on **Step B**.\n\
 - We can therefore improve the performance by adjusting the dial on *how complete* we want **Step B** to be performed.\n\
 - Hence, there is a choice between what we call the *slow load* and the *fast load*.\n\
 - Slow Load;\n\
   - Slow loading will use the bundled version in order to completely replace itself with a version of lively loaded via lively.modules, where every module object is loaded from scratch again. This creates a clean network of modules where each module is a first class object that is managed by SystemJS below.\n\
   - This approach takes longer to load but from then on provides the most reliabel way to enhance the system from within of itself.\n\
 - Fast Load:\n\
   - Will try to run everything in lively.next without reinstantiating all of the modules again, instead restorting to using the bundledl version of lively.next most of the time.\n\
   - Changes that were dont to the system after the bundle, are injected into the bundle by a mechanism we refer to as *reviving modules*.\n\
   - The degree to wich this works varies. In our experience it is best not to have many local changes in place.\n\
   - The fast load mode is suited best for users who mostly do not touch the core system at all, and are rather non programmers.-->\n\
<p class=\"markdown-line-marker\" data-mdline=\"301\" data-htmlline=\"302\">To optimize the startup performance of <code>lively.next</code>, we can adjust the approach to the bootstrapping process. Typically, around 10% of the boot time is spent on <strong>Step A</strong>, while the majority of the time is consumed by <strong>Step B</strong>. To enhance performance, we can choose how thoroughly to perform <strong>Step B</strong>, resulting in two different loading modes: <em>slow load</em> and <em>fast load</em>.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"303\" data-htmlline=\"305\"><strong>Slow Load</strong>:\n\
In the slow loading mode, the system uses the bundled version to fully replace itself with a version of <code>lively.next</code> loaded through <code>lively.modules</code>. This process reloads each module object from scratch, creating a clean and complete network of modules where each module is treated as a first-class object managed by SystemJS. While this approach takes longer to load, it offers the most reliable way to enhance and modify the system internally, ensuring that all modules are up-to-date and correctly integrated.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"306\" data-htmlline=\"308\"><strong>Fast Load</strong>:\n\
In contrast, the fast load mode aims to minimize the reinitialization of modules. It primarily uses the bundled version of <code>lively.next</code>, avoiding the complete reloading of all modules. Changes made to the system after the bundle are incorporated through a mechanism called <em>reviving modules</em>, which injects these updates into the existing bundled modules. However, the effectiveness of this approach can vary, and it is generally not recommended to have numerous local changes in place. The fast load mode is best suited for users who do not modify the core system.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"309\" data-htmlline=\"310\">Caching Optimizations</h3>\n\
<!--\n\
 - In order to further improve the loading performance in **Step B** we also utilize compression and caching strategies.\n\
 - These are integrated via the SystemJS plugin API that allows us to hook into the loading process of a module.\n\
#### server side compression of core source code\n\
   - The server keeps a complete bundle of the entire lively.next core library code ans a single gzip bundle\n\
   - The bundle is created whenever the server starts or whenever one of the modules in the core are changed during development\n\
   - The bundle is shipped to the client during startup, which saves time since the request overhead of thousands of seperate module requests is reduced to a single transfer request.\n\
   - The bundle is then used to directly read the module source from memory during booting of lively.next\n\
#### transpilation and storage in client for immediate fetch from store\n\
   - In addition to optimizing the load time of the source code itself, it is also vital to reduce the time spent in transpilation\n\
   - Since basically any module that is to be editied and evaluated at runtime in lively.next needs to be transpiled, the time to transpile all modules is quite significant.\n\
   - In order to save this on successive boots, it is possible to store each transpiled module in the local storage and directly fetch and evaluate from there instead of repeatedly performing a costly transpilation.-->\n\
<p class=\"markdown-line-marker\" data-mdline=\"323\" data-htmlline=\"324\">To further optimize the loading performance in <strong>Step B</strong> of the <code>lively.next</code> bootstrapping process, we employ compression and caching strategies through the SystemJS plugin API. This API allows us to integrate directly into the module loading process, enhancing efficiency in two key ways:</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"325\" data-htmlline=\"326\">Server-Side Compression of Core Source Code</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"326\" data-htmlline=\"328\">By default when loading a module its source code is fetched <strong>via the server (3)</strong>. This happens on per module basis and is therefore relatively time consuming since it creates a lot of request overhead from the browser.\n\
To alleviate that, the server maintains a complete bundle of the entire <code>lively.next</code> core library code in a single gzip-compressed file. This bundle is created whenever the server starts or when any core module changes during development. By sending this bundle to the client at startup, we significantly reduce the overhead associated with multiple module requests, consolidating them into a single transfer. This method allows the system to <strong>read module sources directly from memory (2)</strong> during booting, accelerating the bootstrapping process.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"329\" data-htmlline=\"330\">Transpilation and Client-Side Storage for Immediate Fetch</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"330\" data-htmlline=\"331\">Besides optimizing the loading time of the source code itself, reducing the time spent on transpilation is crucial. In <code>lively.next</code>, almost every module that is to be edited and evaluated at runtime requires transpilation, which can be a time-consuming process. To mitigate this, we store each transpiled module in the local storage. On successive boots, the system can directly fetch and evaluate these modules <strong>from storage (1)</strong> rather than re-transpiling them, thereby saving time and resources.</p>\n\
<div id=\"mermaid-container-1a48fc4eee984fd3b065c1f22660161a\"></div><h3 class=\"markdown-line-marker\" data-mdline=\"350\" data-htmlline=\"351\">Hot Reloading</h3>\n\
<!-- - SystemJS internally stores the information about which module depends on which\n\
    - Handles the reload of the nessecary modules in case one module is updated at runtime\n\
    - When we request a module to be updated or simply reloaded, we trigger the following API calls in SystemJS\n\
      - First the record of the module is deleted from SystemJS\n\
      - We then redeclare the module in its new or current form, depending on the scenario (reload or patch)\n\
      - We then trigger an import of the module which executes the module and populates the module record accordingly.\n\
 - Reloading of module basically causes a clean re-evaluation of the module, which potentially resets all variables, objects, functions and classes within it.\n\
   - This is alleviated by our custom transpilation explained earlier, which makes the resulting code automatically handle all the aspects required for sucessful *patching at runtime*.\n\
\n\
 - Regardless of reload or update, `lively.modules` detects the changed exports of the module and determines which dependent modules are affected.\n\
   - It then traverses these affected modules and forces a re-execution of their compiled bodies such that the updated exports are propagated accordingly. -->\n\
<p class=\"markdown-line-marker\" data-mdline=\"363\" data-htmlline=\"364\">SystemJS maintains an internal record of module dependencies, which allows it to handle the reloading of necessary modules when one is updated at runtime. When a request is made to update or reload a module, the following steps occur in SystemJS:</p>\n\
<ol>\n\
<li>The record of the module is deleted from the SystemJS registry.</li>\n\
<li>The module is redeclared in its new or current form, depending on whether a complete reload or just a patch is required.</li>\n\
<li>An import of the module is triggered, which executes the module and updates the module record.</li>\n\
</ol>\n\
<p class=\"markdown-line-marker\" data-mdline=\"369\" data-htmlline=\"370\">Reloading a module essentially results in a complete re-evaluation of the module’s contents, which can reset all variables, objects, functions, and classes defined within it. To manage this, our custom transpilation process, as explained earlier, ensures that the code is structured to support successful runtime patching, preserving necessary state changes.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"371\" data-htmlline=\"372\">Regardless of whether a module is reloaded or updated, <code>lively.modules</code> detects any changes in the module’s exports and identifies the dependent modules affected by these changes. It then traverses these affected modules, forcing a re-execution of their compiled bodies to propagate the updated exports throughout the system.</p>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"374\" data-htmlline=\"375\">Bundling in lively.next</h2>\n\
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
<p class=\"markdown-line-marker\" data-mdline=\"389\" data-htmlline=\"390\">Smalltalk and similar systems typically require their applications to be shipped along with their runtimes. For instance, running a Self application necessitates having Self installed, and running a Smalltalk app requires access to a Squeak Image. This dependency issue is also present in lively.next, where the runtime needs to be instantiated in the browser. This process involves creating all the necessary objects to get the system operational, which can take a significant amount of time.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"391\" data-htmlline=\"392\">To ship applications effectively in the browser, it is crucial to ensure that they load quickly and include only the essential components. This is a reasonable approach because most end users are unlikely to want to customize the application further. Even if customization is desired, it is fair to assume that users will be willing to wait for the system to load to incorporate the changes they need.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"393\" data-htmlline=\"394\">To address these needs, lively.next features a comprehensive bundling system. This system creates compact bundles of applications, including only the necessary code and avoiding the costly initialization of the module system. The bundler operates as a sophisticated <code>RollupJS</code> plugin.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"395\" data-htmlline=\"396\">The resulting bundle utilizes the <a href=\"https://github.com/systemjs/systemjs/blob/main/docs/system-register.md\" target=\"_blank\">System.register() module format</a>. This format allows for lazy loading of code chunks, which improves the initial load time for applications that use a wide range of lively.next functionalities, such as interactive essays.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"397\" data-htmlline=\"398\">When you create a project, <code>lively.next</code> will automatically generate the nessecary build scripts for you, so that you can invoke them easily by running <code>npm run build</code> from the console.</p>\n\
\n\
</div>',
  layout: null,
  position: pt(750,297)
});



export { modules }