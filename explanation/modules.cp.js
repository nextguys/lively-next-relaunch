import { component } from "lively.morphic/index.js";
import { pt } from "lively.graphics/geometry-2d.js";
import { HTMLMorph } from "lively.morphic/html-morph.js";
const modules = component({
  type: HTMLMorph,
  name: 'aMarkdownPreviewMorph',
  extent: pt(420,3392.4),
  fixedHeight: false,
  html: '<link type=\"text/css\" rel=\"stylesheet\" id=\"github-markdown\" href=\"/lively.ide/md/github-markdown.css\"><div class=\"markdown-body\" style=\"margin: 5px\">\n\
<blockquote>\n\
<p>⚠️ <strong>Warning</strong>\n\
This is about the module system we utilize in lively. It is internally referred to as lively.modules.\n\
But this is not to scare you.</p>\n\
</blockquote>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"5\" data-htmlline=\"6\">SystemJS</h2>\n\
<ul>\n\
<li>Is a framework that was developed directly in tandem with the early drafts of the EcmaScript Module System proposal.\n\
<ul>\n\
<li>It has over time always kept up with the semantics and changes of the standard, which changed various times over the years until it reached its present final form.</li>\n\
</ul>\n\
</li>\n\
<li>The idea was that it would provided a working version of the standard as early as possible while also easing the adaption of JS modules into the wider ecosystem.</li>\n\
<li>Nowadays SystemJS main utility is for lively development of js module based applications since it still comes with a handy hot swapping engine that still is (and probably never will be) supported by browsers.</li>\n\
<li>lively.next utilizes SystemJS as an underlying architecture for implementing various custom aspect that are not supported by native Javascript modules.</li>\n\
<li>These includes:\n\
<ul>\n\
<li>capturing and preservation of the top level module scope (this includes top level variables, classes and functions)</li>\n\
<li>in place updating of classes if their definition changes. The classes are not replaced by new instances but instead are manipulated in place such that all currently existing instances are updated. (See more in <strong>Classes in lively.next</strong>)</li>\n\
<li>embedding of meta information to entities like classes, functions or component definitions. This includes module, package and source locations. This information is in turn used by many of the tools within the system. (Seem more about the <strong>Source Transformations</strong>)</li>\n\
</ul>\n\
</li>\n\
</ul>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"15\" data-htmlline=\"16\">Classes in lively.next</h2>\n\
<blockquote>\n\
<p>⚠️ <strong>Attention</strong> In the future, we are considering replacing the <code>static properties</code> notation of property definition in favor of a decorator syntax.</p>\n\
</blockquote>\n\
<ul>\n\
<li>classes are transformed into a function call that synthesizes a new class based on a preexisting version of the class and a set of class members (methods, static methods) and soon also (decorators, class fields).</li>\n\
</ul>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"21\" data-htmlline=\"22\">Source Transformations</h2>\n\
<ul>\n\
<li>more details about which entities are transformed and what that entails for the user</li>\n\
</ul>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"23\" data-htmlline=\"24\">Module Environments and Evaluation Contexts</h2>\n\
<ul>\n\
<li>basically this is lively.vm stuff</li>\n\
</ul>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"25\" data-htmlline=\"26\">Hot Reloading</h2>\n\
<ul>\n\
<li>how hot reloading works and how we are leveraging SystemJS to perform this</li>\n\
</ul>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"27\" data-htmlline=\"28\">Caching Optimization</h2>\n\
<ul>\n\
<li>server side compression of core source code</li>\n\
<li>local source transform caching</li>\n\
</ul>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"30\" data-htmlline=\"31\">Fast vs Slow Loading</h2>\n\
<ul>\n\
<li>lively.next loads by bootstrapping itself outside of a bundled version of itself.</li>\n\
<li>The user can very the degree of diversion from the bootstrapped instance. There is a choice between what we call the <em>slow load</em> and the <em>fast load</em>.</li>\n\
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
<h2 class=\"markdown-line-marker\" data-mdline=\"41\" data-htmlline=\"42\">Bundling (aka. Freezing)</h2>\n\
<ul>\n\
<li>Smalltalk and other Smalltalk-like systems can basically only “ship” their apps together with their runtimes.</li>\n\
<li>This usually requires a person that wants to run Self to have Self installed. Likewise a person that wants to run a Smalltalk app needs to have a Squeak Image available or provided.</li>\n\
<li>The same issue arises with lively.next, just that we need to instantiate the runtime in the browser, which takes while in order to create all required objects to get the system going and live.</li>\n\
<li>If we reallt want to ship in the browser, things needs to load fast and only ship with the minimum amount of what is needed.\n\
<ul>\n\
<li>This is reasonable since we can assume that most end users of an application will not feel the need to customize it further.</li>\n\
<li>And even if they do, its fair to assume that they will be patient enough to wait a while for the system to load in order to incorporate the changes they need.</li>\n\
</ul>\n\
</li>\n\
<li>This is why lively.next comes with a comprehensive bundling system, which is able to create compact bundles out of applications that only include code that is needed while also avoiding expensive initialization of the module system.</li>\n\
<li>The bundler is a fairly involved <code>RollupJS</code> plugin.</li>\n\
</ul>\n\
\n\
</div>',
  layout: null,
  position: pt(813,472)
});



export { modules }