import { part, component, TilingLayout, ConstraintLayout } from "lively.morphic/index.js";
import { pt, rect } from "lively.graphics/geometry-2d.js";
import { HTMLMorph } from "lively.morphic/html-morph.js";
import { MorphicPropertyEssay } from "../ui/docs/interactive-doc.cp.js";
import { InteractiveDie, WrappedDynamicPokerTable, AllFaces, WrappedDiversePokerTable, WrappedPokerTable, WrappedDie, FocusBlurDiagram, InteractiveDelay } from "./examples.cp.js";
import { Color } from "lively.graphics/color.js";
const morphic = component({
  name: 'aMarkdownPreviewMorph',
  extent: pt(420,35859),
  layout: new TilingLayout({
  axis: "column",
  hugContentsVertically: true,
  resizePolicies: [["aMorph", {
        height: "fixed",
        width: "fill"
      }]]
}),
  position: pt(750,297),
  submorphs: [{
  name: 'aMorph',
  clipMode: 'auto',
  extent: pt(420,35859),
  fill: Color.transparent,
  layout: new TilingLayout({
  axis: "column",
  hugContentsVertically: true,
  padding: rect(15,15,0,0),
  resizePolicies: [["markdown 0", {
        height: "fixed",
        width: "fill"
      }], ["embedded 1", {
        height: "fixed",
        width: "fill"
      }], ["markdown 2", {
        height: "fixed",
        width: "fill"
      }], ["embedded 3", {
        height: "fixed",
        width: "fill"
      }], ["markdown 4", {
        height: "fixed",
        width: "fill"
      }], ["embedded 5", {
        height: "fixed",
        width: "fill"
      }], ["markdown 6", {
        height: "fixed",
        width: "fill"
      }], ["embedded 7", {
        height: "fixed",
        width: "fill"
      }], ["markdown 8", {
        height: "fixed",
        width: "fill"
      }], ["embedded 9", {
        height: "fixed",
        width: "fill"
      }], ["markdown 10", {
        height: "fixed",
        width: "fill"
      }], ["embedded 11", {
        height: "fixed",
        width: "fill"
      }], ["markdown 12", {
        height: "fixed",
        width: "fill"
      }], ["embedded 13", {
        height: "fixed",
        width: "fill"
      }], ["markdown 14", {
        height: "fixed",
        width: "fill"
      }], ["embedded 15", {
        height: "fixed",
        width: "fill"
      }], ["markdown 16", {
        height: "fixed",
        width: "fill"
      }], ["embedded 17", {
        height: "fixed",
        width: "fill"
      }], ["markdown 18", {
        height: "fixed",
        width: "fill"
      }]],
  spacing: 15
}),
  submorphs: [{
  type: HTMLMorph,
  name: 'markdown 0',
  extent: pt(375,2245),
  fixedHeight: false,
  html: '<link type=\"text/css\" rel=\"stylesheet\" id=\"github-markdown\" href=\"/lively.ide/md/github-markdown.css\"><div class=\"markdown-body\" style=\"margin: 5px\">\n\
<p class=\"markdown-line-marker\" data-mdline=\"1\" data-htmlline=\"2\"><code>lively.next</code> ships with its own particular flavor of the GUI framework <code>morphic</code>, which was first introduced in <a href=\"https://ftp.squeak.org/docs/Self-4.0-UI-Framework.pdf\" target=\"_blank\"><code>Self</code></a> and since then has been implemented multiple times, for example in <a href=\"https://wiki.squeak.org/squeak/morphic\" target=\"_blank\"><code>Squeak</code></a> and in <a href=\"https://en.wikipedia.org/wiki/Lively_Kernel\" target=\"_blank\"><code>LivelyKernel</code></a>.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"3\" data-htmlline=\"4\">As the name <code>morphic</code> implies, this framework assembles GUIs by means of malleable objects called <code>Morphs</code>. Each of these <code>Morphs</code> can potentially also carry a complete custom set of behavior that implements the GUIs interactivity. These characteristic of the framework originally referred to as “liveness” and “directness” allows to inspect and explore every piece of the GUI and application at hand while it is running. This is particularly suitable for self sustaining live development environments such as <code>lively.next</code>. In <code>morphic</code>, GUIs are composed of tree-like structures where morphs contain sub-morphs, similar to the way tags are nested in <code>HTML</code>.</p>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"5\" data-htmlline=\"6\">Types</h2>\n\
<p class=\"markdown-line-marker\" data-mdline=\"6\" data-htmlline=\"7\">Different types of morphs are available to the user, which are implemented by (sub)class(es) of <code>Morph</code>.</p>\n\
<ul>\n\
<li>\n\
<p><strong>Morph</strong>\n\
<em>This is the base morph, namely a rectangular shape that is used most often throughout the system. Useful for almost anything from wrapping nesting layouts to composing sophisticated UI elements.</em></p>\n\
</li>\n\
<li>\n\
<p><strong>Ellipse</strong>\n\
<em>Very similar to the basic morph, but automatically maintains an elliptical shape. Obliterates the need to manually adjust the border radius once the extent changes.</em></p>\n\
</li>\n\
<li>\n\
<p><strong>Image</strong>\n\
<em>Standard container for any kind of web supported image file (notably also GIFs!). Supports two different layout methods where the image is either scaled to fill the size of the morph (while respecting the ratio of the original image) or resized to fit the entire area.</em></p>\n\
</li>\n\
<li>\n\
<p><strong>Text</strong>\n\
<em>One of the most powerful morphs that allows to display read-only text (for elements like UI labels or static website contents) but also allows for interactive rich-text editing.</em></p>\n\
</li>\n\
<li>\n\
<p><strong>HTML</strong>\n\
<em>Allows to directly render custom HTML and bypass the standard morphic renderer. Useful in cases where we want to embed 3rd-party-libraries and create wrapper morphs for them.</em></p>\n\
</li>\n\
<li>\n\
<p><strong>Canvas</strong>\n\
<em>Similar to the HTMLMorph yet specialized for the case where we want to render to a canvas. Provides convenience methods to access the canvas context. Useful for integrating 3rd-party canvas libraries that render 2D or 3D content.</em></p>\n\
</li>\n\
<li>\n\
<p><strong>Path</strong>\n\
<em>Allows to draw SVG paths via the morph interface.</em></p>\n\
</li>\n\
<li>\n\
<p><strong>Polygon</strong>\n\
<em>Specialized subclass of <code>Path</code> where the vertices form a closed path. Also allows to clip the submorphs via its shape.</em></p>\n\
</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"31\" data-htmlline=\"32\">Custom Subclasses</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"33\" data-htmlline=\"35\">The previously introduced subclasses of <code>Morph</code> are just the default ones that ship with <code>lively.morphic</code>. It is always possible to create further subclasses in order to implement custom types of morphs for special purposes. In fact this has been the default way of doing things in <a href=\"https://wiki.squeak.org/squeak/morphic\" target=\"_blank\"><code>Squeak</code></a> and <a href=\"https://en.wikipedia.org/wiki/Lively_Kernel\" target=\"_blank\"><code>LivelyKernel</code></a>. Both <code>LivelyKernel</code> and the original <code>Self</code> implementation further had the ability to vary the behavior with <em>Traits</em>, which made custom behaviors more pluggable.\n\
In <code>lively.next</code> we favor a different approach, where custom subclassing of morphs should be kept to a minimum and DOMain specific behavior instead be implemented via a <code>ViewModel</code> that attaches to morph-compositions and augments their behavior accordingly. We discuss this in greater detail in the section on <code>ViewModel</code>s below.</p>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"36\" data-htmlline=\"37\">Properties</h2>\n\
<p class=\"markdown-line-marker\" data-mdline=\"37\" data-htmlline=\"38\">Morphs in <code>lively.next</code> come with a large set of visual properties. You can explore some of them in the interactive section below.</p>\n\
\n\
</div>',
  position: pt(15,15)
}, part(MorphicPropertyEssay, {
  name: 'embedded 1',
  extent: pt(375,1834),
  position: pt(15,2275),
  submorphs: [{
  name: 'visual property intro',
  submorphs: [{
  name: 'aText copy',
  width: undefined
}, {
  name: 'visual prop filter',
  submorphs: [{
  name: 'placeholder icon',
  visible: false
}]
}]
}, {
  name: 'visual property collection',
  submorphs: [{
  name: 'border color tile',
  submorphs: [{
  name: 'dummy poly',
  vertices: [({position:pt(46.0256,27.6999),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(59.9,44.8195),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(37.1025,38.503),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(22.8797,55.4),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(22.6645,34.3766),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(0,27.6999),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(22.6645,21.0233),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(22.8797,0),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(37.1025,16.897),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(59.9,10.5804),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(46.0256,27.6999),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}})]
}]
}, {
  name: 'border width tile',
  submorphs: [{
  name: 'dummy poly',
  vertices: [({position:pt(46.0256,27.6999),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(59.9,44.8195),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(37.1025,38.503),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(22.8797,55.4),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(22.6645,34.3766),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(0,27.6999),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(22.6645,21.0233),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(22.8797,0),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(37.1025,16.897),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(59.9,10.5804),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(46.0256,27.6999),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}})]
}]
}, {
  name: 'fill tile',
  submorphs: [{
  name: 'dummy poly',
  vertices: [({position:pt(46.0256,27.6999),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(59.9,44.8195),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(37.1025,38.503),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(22.8797,55.4),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(22.6645,34.3766),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(0,27.6999),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(22.6645,21.0233),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(22.8797,0),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(37.1025,16.897),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(59.9,10.5804),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}}),({position:pt(46.0256,27.6999),isSmooth:false,controlPoints:{next:pt(0,0),previous:pt(0,0)}})]
}]
}, {
  name: 'visibility tile',
  submorphs: [{
  name: 'dummy container',
  extent: pt(156.8,60.1),
  submorphs: [{
  name: 'dummy',
  extent: pt(51,46)
}, {
  name: 'other dummy',
  extent: pt(28,26)
}]
}]
}]
}, {
  name: 'behavioral properties intro',
  submorphs: [{
  name: 'aText copy_1',
  width: undefined
}]
}],
  viewModel: { loader: "undefined" }
}), {
  type: HTMLMorph,
  name: 'markdown 2',
  extent: pt(375,1861.2),
  fixedHeight: false,
  html: '<link type=\"text/css\" rel=\"stylesheet\" id=\"github-markdown\" href=\"/lively.ide/md/github-markdown.css\"><div class=\"markdown-body\" style=\"margin: 5px\">\n\
<p class=\"markdown-line-marker\" data-mdline=\"2\" data-htmlline=\"3\">Aside from the visual properties, morphs also come with a large set of <em>behavioral properties</em> which will not be covered in this chapter. For more info on the latter, please refer to the <a href=\"https://livelykernel.github.io/lively.next/\" target=\"_blank\">API Documentation</a>.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"4\" data-htmlline=\"5\">Custom Subclasses</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"6\" data-htmlline=\"8\">The previously introduced subclasses of <code>Morph</code> are just the default ones that ship with <code>lively.morphic</code>. It is always possible to create further subclasses in order to implement custom types of morphs for special purposes. In fact this has been the default way of doing things in <a href=\"https://wiki.squeak.org/squeak/morphic\" target=\"_blank\">Squeak</a> and <a href=\"https://en.wikipedia.org/wiki/Lively_Kernel\" target=\"_blank\">LivelyKernel</a>. Both LivelyKernel and the original Self implementation further had the ability to vary the behavior with <em>Traits</em> which made custom behaviors more pluggable.\n\
In <code>lively.next</code> we favor a different approach, where custom subclassing of morphs should be kept to a minimum and domain specific behavior instead be implemented via a <code>ViewModel</code> that attaches to morph-compositions and augments their behavior accordingly. We discuss this in greated detail in the <a href=\"#ViewModels\" target=\"_blank\">View Model Chapter</a>.</p>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"9\" data-htmlline=\"10\">Instantiating and using Morphs</h2>\n\
<p class=\"markdown-line-marker\" data-mdline=\"11\" data-htmlline=\"12\">Given a <code>Morph</code> class, we can instantiate it simply via the constructor:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Morph</span>();\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"15\" data-htmlline=\"16\">We can also pass morph properties to the constructor, like this:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Morph</span>({ <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'foo\'</span>, <span class=\"hljs-attr\">fill</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-property\">red</span>, <span class=\"hljs-attr\">borderWidth</span>: <span class=\"hljs-number\">2</span> });\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"19\" data-htmlline=\"20\">We refer to the property object above as the <em>spec</em> of a morph. Instead of directly invoking the constructor, it is also possible to utilize the <code>morph()</code> convenience function and pass the spec object to this function in order to create the morph:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-title function_\">morph</span>({ <span class=\"hljs-attr\">type</span>: <span class=\"hljs-title class_\">Morph</span>, <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'foo\'</span>, <span class=\"hljs-attr\">fill</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-property\">red</span>, <span class=\"hljs-attr\">borderWidth</span>: <span class=\"hljs-number\">2</span>})\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"23\" data-htmlline=\"26\">Notice how we now pass the class of the morph as the type property inside of the spec.\n\
If the type is just <code>Morph</code> we can also leave out the <code>type</code> property since this is the default value.\n\
Via the spec we can further define not only the morph itself but also its submorphs and sub-submorphs (and so on) like so:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">let</span> aMorph = <span class=\"hljs-title function_\">morph</span>({\n\
  <span class=\"hljs-attr\">extent</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">78.5</span>, <span class=\"hljs-number\">78.7</span>),\n\
  <span class=\"hljs-attr\">borderRadius</span>: <span class=\"hljs-number\">13</span>,\n\
  <span class=\"hljs-attr\">fill</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-title function_\">rgb</span>(<span class=\"hljs-number\">255</span>, <span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">0</span>),\n\
  <span class=\"hljs-attr\">submorphs</span>: [{\n\
    <span class=\"hljs-attr\">type</span>: <span class=\"hljs-title class_\">Ellipse</span>,\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye\'</span>,\n\
    <span class=\"hljs-attr\">extent</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">15.9</span>, <span class=\"hljs-number\">16.6</span>),\n\
    <span class=\"hljs-attr\">position</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">9.9</span>, <span class=\"hljs-number\">7.6</span>)\n\
  }]\n\
})\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"39\" data-htmlline=\"40\">Just instantiating a morph via an object will not make it visible. For that to happen we need to mount it into the <em>World</em>. The <em>World</em> is itself a morph that is present at all times when the <code>lively.morphic</code> framework is embedded (be it a bundled application or the <code>lively.next</code>-IDE). In fact this very document you are reading is mounted inside of a <em>World</em>. So lets go ahead and call <code>aMorph.openInWorld()</code>, you will see this:</p>\n\
\n\
</div>',
  position: pt(15,4124)
}, part(InteractiveDie, {
  name: 'embedded 3',
  extent: pt(375,304.9),
  layout: new ConstraintLayout({
  lastExtent: {
    x: 375,
    y: 304.9
  },
  reactToSubmorphAnimations: false,
  submorphSettings: [["movable die 1", {
        x: "center",
        y: "center"
      }]]
}),
  position: pt(15,6000),
  submorphs: [{
  name: 'movable die 1',
  extent: pt(78.5,78.7),
  position: pt(143.6,111.4)
}]
}), {
  type: HTMLMorph,
  name: 'markdown 4',
  extent: pt(375,72),
  fixedHeight: false,
  html: '<link type=\"text/css\" rel=\"stylesheet\" id=\"github-markdown\" href=\"/lively.ide/md/github-markdown.css\"><div class=\"markdown-body\" style=\"margin: 5px\">\n\
<p class=\"markdown-line-marker\" data-mdline=\"2\" data-htmlline=\"3\">You can now go ahead and manipulate the morph above in the workspace below. Try editing the code and running it via the button:</p>\n\
\n\
</div>',
  position: pt(15,6320)
}, part(InteractiveDelay, {
  name: 'embedded 5',
  extent: pt(375,344),
  position: pt(15,6407),
  viewModel: { loader: "editor example 1" }
}), {
  type: HTMLMorph,
  name: 'markdown 6',
  extent: pt(375,2381.1),
  fixedHeight: false,
  html: '<link type=\"text/css\" rel=\"stylesheet\" id=\"github-markdown\" href=\"/lively.ide/md/github-markdown.css\"><div class=\"markdown-body\" style=\"margin: 5px\">\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"2\" data-htmlline=\"3\">Event System</h2>\n\
<p class=\"markdown-line-marker\" data-mdline=\"3\" data-htmlline=\"4\">Morphic comes with its completely custom build event system. This is for multiple reasons, since the classic DOM Event system…</p>\n\
<ol>\n\
<li>is severely broken <em>(have you tried using onDrag?)</em>.</li>\n\
<li>does not support the same event types that we expect in <code>morphic</code>, for instance hovering.</li>\n\
<li>also does not match the morph object in the bubbling phase, since some morphs are rendered as multiple different DOM nodes.</li>\n\
</ol>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"10\" data-htmlline=\"11\">Halo</h2>\n\
<p class=\"markdown-line-marker\" data-mdline=\"11\" data-htmlline=\"12\">For more information on the Halo, please refer to the <a href=\"#documentation/studio\" target=\"_blank\"><code>lively.next</code> studio Guide</a>.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"13\" data-htmlline=\"15\">The event system in Morphic is a completely custom implementation on top of the native browser events.\n\
DOM-Events that originate from the rendered elements in the browser are used as entry points and from then on a completely custom dispatch is performed.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"16\" data-htmlline=\"22\">Theses synthesized events are bubbling from the <code>morph</code> they originate from upwards until they reach the world <code>morph</code>.\n\
During bubbling, the custom event callbacks are invoked on each of the traversed morph.\n\
The event object itself carries further meta information about the targeted morph, as well as information with respect to the type of event <em>(pressed key, mouse buttons, etc…)</em>.\n\
The propagation can be terminated by invoking the <code>event.stop()</code> method on the event object that is always passed to the event handler.\n\
There are also certain events that concern the keyboard which are not only <em>augmented</em> but rather <em>simulated</em> behind the scenes.\n\
This is implemented via a hidden DOM input node which is manually focused on demand via the event system. This gives us fine grained control about the redirection of keyboard events. For instance we can make any type of morph receive keyboard events as well as retrieve keyboard events even if no element is currently in focus, which is useful for the implementation of keyboard shortcuts.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"23\" data-htmlline=\"24\">Classic Events</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"24\" data-htmlline=\"25\">There is a set of basic DOM events which behave more or less the same as they do inside the DOM:</p>\n\
<ul>\n\
<li><strong>onMouse (Down/Up/Move/Wheel)</strong> <em>In response to the mouse buttons getting pressed.</em></li>\n\
<li><strong>onKey (Up/Down)</strong> <em>In response to a key on the keyboard being pressed.</em></li>\n\
<li><strong>onContextMenu</strong> <em>In response to the HTML context menu event. Is used to create custom morph based menus instead.</em></li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"29\" data-htmlline=\"30\">Customized Events</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"30\" data-htmlline=\"31\">There is a set of events that provide a different behavior to the native DOM version. One of them is the drag event, which compared to the <code>HTML</code> event further provides more <em>movement specific</em> meta information to the morph as well as specific callbacks marking the <em>start</em> and <em>end</em> of the drag process:</p>\n\
<figure data-type=\"image\"><img src=\"./assets/dragging.gif\" alt=\"\"><figcaption>An example of a morph being dragged across a scene</figcaption></figure>\n\
<ul>\n\
<li><strong>onDrag</strong> <em>Invoked continously while a morph is being dragged via touch gesture or mouse press and move. On each update it provides a drag delta that tells us about the current drag speed.</em></li>\n\
<li><strong>onDragStart</strong> <em>Invoked once at the start of the drag process before onDrag is getting called repeatedly.</em></li>\n\
<li><strong>onDragEnd</strong> <em>Invoked once at the end of the drag process.</em></li>\n\
</ul>\n\
<p class=\"markdown-line-marker\" data-mdline=\"37\" data-htmlline=\"38\">There are also completely synthesized versions of the focus and blur events. For one, unlike the browser, they cover all types of morphs, including the base morph. This is different to HTML which reserves the focus and blur events only for a certain set of elements of the text and input types.</p>\n\
\n\
</div>',
  position: pt(15,6766)
}, part(FocusBlurDiagram, {
  name: 'embedded 7',
  extent: pt(375,353.3),
  position: pt(15,9162),
  submorphs: [{
  name: 'diagram',
  submorphs: [{
  name: 'event 1',
  vertices: [({position:pt(0,24.6),isSmooth:true,controlPoints:{next:pt(32.3781,4.6726),previous:pt(0,0)}}),({position:pt(101,0),isSmooth:true,controlPoints:{next:pt(1.1647,0.1419),previous:pt(-48.0541,-5.8538)}})]
}, {
  name: 'event 2',
  vertices: [({position:pt(0,0),isSmooth:true,controlPoints:{next:pt(35.0225,4.4618),previous:pt(0,0)}}),({position:pt(96.7,54.9),isSmooth:true,controlPoints:{next:pt(-0.1857,1.1981),previous:pt(6.9663,-44.9415)}})]
}]
}]
}), {
  type: HTMLMorph,
  name: 'markdown 8',
  extent: pt(375,3819.1),
  fixedHeight: false,
  html: '<link type=\"text/css\" rel=\"stylesheet\" id=\"github-markdown\" href=\"/lively.ide/md/github-markdown.css\"><div class=\"markdown-body\" style=\"margin: 5px\">\n\
<ul>\n\
<li><strong>onFocus</strong> <em>Invoked if we call <code>focus()</code> on a morph where the <code>focusable</code> property is set to <code>true</code>. For text morphs the <code>focus()</code> function is called by default on a <code>mousedown</code> event.</em></li>\n\
<li><strong>onBlur</strong> <em>Invoked on a currently focused morph if <code>focus()</code> is called on another one.</em></li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"5\" data-htmlline=\"6\">Custom Events</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"6\" data-htmlline=\"7\"><code>lively.morphic</code> further supports a custom set of purely custom events:</p>\n\
<figure data-type=\"image\"><img src=\"./assets/grabbing.gif\" alt=\"\"><figcaption>An example of a morph being grabbed between morphs</figcaption></figure>\n\
<ul>\n\
<li><strong>onGrab</strong> <em>If the morph is <code>grabbable</code> or has been grabbed via the halo, this callback is invoked once the morph is removed from its parent.</em></li>\n\
<li><strong>onDrop</strong> <em>If the morph was grabbed and is now getting dropped onto another morph, this callback is invoked.</em></li>\n\
<li><strong>onBeingDroppedOn</strong> <em>Similar to <code>onDrop</code>, but is invoked *right before* the drop happens.</em></li>\n\
<li><strong>onHoverIn</strong> <em>Triggered when the mouse cursor enters the bounds of the morph.</em></li>\n\
<li><strong>onHoverOut</strong> <em>Triggered when the mouse cursor exits the morph bounds.</em></li>\n\
<li><strong>onDropHoverIn</strong> <em>Trigged when <code>onHoverIn</code> is invoked while at the same time a morph is being grabbed by the user. This is useful to implement logic for UIs that respond to drag and drop gestures.</em></li>\n\
<li><strong>onDropHoverOut</strong> <em>Triggered when <code>onHoverOut</code> is invoked while a grab is in process.</em></li>\n\
<li><strong>onDropHoverUpdate</strong> <em>Triggered while a morph is being grabbed and the cursor is hovering over a particular morph.</em></li>\n\
</ul>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"18\" data-htmlline=\"19\">Component System</h2>\n\
<p class=\"markdown-line-marker\" data-mdline=\"20\" data-htmlline=\"22\">The component system in <code>lively.next</code> really presents one of the strongest diversions from the more vanilla implementations of <code>Morphic</code>. Some would argue it even turns <code>lively.next</code>’s <code>Morphic</code> into something entirely different.\n\
However the components are designed as a superset to the underlying <code>Morphic</code> system we have described so far. So one can still write all of the applications in a flavor that is entirely <em>pure</em> <code>Morphic</code>. It’s just arguably more difficult to write applications in such a way that leverages the benefits of direct manipulation for both <strong>developers</strong> and <strong>non-programmers</strong> (i.e. designers).</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"23\" data-htmlline=\"24\">We designed the component system in a way that tries to achieve the following:</p>\n\
<ol>\n\
<li>\n\
<p>It should keep visual and behavior implementation separate. In particular this allows us to develop GUIs with their behavioral aspects disabled, and vice versa. This is especially useful in a self sustained live development environment such as <code>lively.next</code>. In our experience that keeping behavior too closely tied to the GUI can complicate implementation and maintenance of applications by a lot.</p>\n\
</li>\n\
<li>\n\
<p>It should support modularity, which allows parts (visual as well as behavioral) to be composed and reused with ease. Basically we try to keep what’s nice about the <a href=\"http://hpi.uni-potsdam.de/hirschfeld/publications/media/LinckeKrahnIngallsRoederHirschfeld_2012_TheLivelyPartsBinACloudBasedRepositoryForCollaborativeDevelopmentOfActiveWebContent_IEEE.pdf\" target=\"_blank\">Partsbin</a> and reconcile it with the world of mainstream development where everything revolves around source code and modules. You can find more information on this in our <a href=\"#documentation/projects\" target=\"_blank\">introduction to <code>lively.project</code>s</a>.</p>\n\
</li>\n\
<li>\n\
<p>It should support evolving the GUI in a purely visual way, that does not break modularity of the visual and behavioral parts of the system. This entails enhancing the existing Morphic Halo system into something that is closer to current state of the art design applications like Adobe XD or Figma.</p>\n\
</li>\n\
</ol>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"31\" data-htmlline=\"32\">Component Definitions</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"33\" data-htmlline=\"35\">In order to define a component we need to specify its structure and appearance. This is done by calling the <code>component</code> function, which will return a component that can then be instantiated as a morph. Therefore, the signature of <code>component</code> resembles the one of <code>morph</code> quite closely.\n\
To get started let us look at a simple example, a component that represents a die with its face showing 4:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\">\n\
<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">Die</span> = <span class=\"hljs-title function_\">component</span>({\n\
  <span class=\"hljs-attr\">extent</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">78.5</span>, <span class=\"hljs-number\">78.7</span>),\n\
  <span class=\"hljs-attr\">borderRadius</span>: <span class=\"hljs-number\">13</span>,\n\
  <span class=\"hljs-attr\">fill</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-title function_\">rgb</span>(<span class=\"hljs-number\">255</span>, <span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">0</span>),\n\
  <span class=\"hljs-attr\">submorphs</span>: [{\n\
    <span class=\"hljs-attr\">type</span>: <span class=\"hljs-title class_\">Ellipse</span>,\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye\'</span>,\n\
    <span class=\"hljs-attr\">extent</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">15.9</span>, <span class=\"hljs-number\">16.6</span>),\n\
    <span class=\"hljs-attr\">position</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">9.9</span>, <span class=\"hljs-number\">7.6</span>)\n\
  }, {\n\
    <span class=\"hljs-attr\">type</span>: <span class=\"hljs-title class_\">Ellipse</span>,\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye1\'</span>,\n\
    <span class=\"hljs-attr\">extent</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">15.9</span>, <span class=\"hljs-number\">16.6</span>),\n\
    <span class=\"hljs-attr\">position</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">51</span>, <span class=\"hljs-number\">8.4</span>)\n\
  }, {\n\
    <span class=\"hljs-attr\">type</span>: <span class=\"hljs-title class_\">Ellipse</span>,\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye2\'</span>,\n\
    <span class=\"hljs-attr\">extent</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">15.9</span>, <span class=\"hljs-number\">16.6</span>),\n\
    <span class=\"hljs-attr\">position</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">9.7</span>, <span class=\"hljs-number\">52</span>)\n\
  }, {\n\
    <span class=\"hljs-attr\">type</span>: <span class=\"hljs-title class_\">Ellipse</span>,\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye3\'</span>,\n\
    <span class=\"hljs-attr\">extent</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">15.9</span>, <span class=\"hljs-number\">16.6</span>),\n\
    <span class=\"hljs-attr\">position</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">49.3</span>, <span class=\"hljs-number\">52.4</span>)\n\
  }]\n\
});\n\
\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"66\" data-htmlline=\"67\">As you can see, the <code>component()</code> function is invoked similarly to the already introduced <code>morph()</code> function. We are passing properties and recursively define submorphs in the same manner down the line. Just as in <code>morph()</code> if a property is not mentioned it is assumed to take on its default value. We refer to this object as a <em>spec</em>.</p>\n\
<blockquote>\n\
<p>⚠️ <strong>Warning</strong></p>\n\
<p>It is important that the names of each morph in a component are unique! If no name is specified,\n\
the system may provide an auto generated one. In the future we want to experiment with implementations\n\
where we only require for siblings to have unique names, but for now it is imperative that a morph name\n\
is unique within the entire component definition. Unique names are also important for attaching behavior\n\
to elements once we introduce <code>ViewModel</code>s later on.</p>\n\
</blockquote>\n\
<p class=\"markdown-line-marker\" data-mdline=\"76\" data-htmlline=\"77\">We can now instantiate the <code>Die</code> component with the help of the <code>part()</code> function:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-title function_\">part</span>(<span class=\"hljs-title class_\">Die</span>)\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"82\" data-htmlline=\"83\">Which will yield a morph that looks like this:</p>\n\
\n\
</div>',
  position: pt(15,9530)
}, part(WrappedDie, {
  name: 'embedded 9',
  extent: pt(375,304.1),
  position: pt(15,13364)
}), {
  type: HTMLMorph,
  name: 'markdown 10',
  extent: pt(375,847.3),
  fixedHeight: false,
  html: '<link type=\"text/css\" rel=\"stylesheet\" id=\"github-markdown\" href=\"/lively.ide/md/github-markdown.css\"><div class=\"markdown-body\" style=\"margin: 5px\">\n\
<blockquote>\n\
<p>💡 <strong>Tip</strong></p>\n\
<p>It is important to let the difference between <code>component</code> and <code>part</code> sink in.\n\
While <code>component</code> is used to <strong>define</strong> a reusable component (similar to components in other state-of-the-art web frameworks), <code>part</code> is used to <strong>instantiate</strong> such a component.</p>\n\
</blockquote>\n\
<p class=\"markdown-line-marker\" data-mdline=\"7\" data-htmlline=\"8\">Now, we can go ahead and create other components that now in turn re-use this component as a part of their own definition. This also happens with the help of the <code>part()</code> function. Let’s define a component that resembles a poker table:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">PokerTable</span> = <span class=\"hljs-title function_\">component</span>({\n\
  <span class=\"hljs-attr\">extent</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">475.7</span>, <span class=\"hljs-number\">360.9</span>),\n\
  <span class=\"hljs-attr\">borderWidth</span>: <span class=\"hljs-number\">21</span>,\n\
  <span class=\"hljs-attr\">borderColor</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-title function_\">rgb</span>(<span class=\"hljs-number\">147</span>, <span class=\"hljs-number\">81</span>, <span class=\"hljs-number\">22</span>),\n\
  <span class=\"hljs-attr\">borderRadius</span>: <span class=\"hljs-number\">37</span>,\n\
  <span class=\"hljs-attr\">fill</span>: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">LinearGradient</span>({ <span class=\"hljs-attr\">stops</span>: [{ <span class=\"hljs-attr\">offset</span>: <span class=\"hljs-number\">0</span>, <span class=\"hljs-attr\">color</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-title function_\">rgb</span>(<span class=\"hljs-number\">46</span>, <span class=\"hljs-number\">125</span>, <span class=\"hljs-number\">50</span>) }, { <span class=\"hljs-attr\">offset</span>: <span class=\"hljs-number\">1</span>, <span class=\"hljs-attr\">color</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-title function_\">rgb</span>(<span class=\"hljs-number\">27</span>, <span class=\"hljs-number\">94</span>, <span class=\"hljs-number\">32</span>) }], <span class=\"hljs-attr\">vector</span>: <span class=\"hljs-title function_\">rect</span>(<span class=\"hljs-number\">0.49999999999999994</span>, <span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">6.123233995736766e-17</span>, <span class=\"hljs-number\">1</span>) }),\n\
  <span class=\"hljs-attr\">submorphs</span>: [<span class=\"hljs-title function_\">part</span>(<span class=\"hljs-title class_\">Die</span>, {\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'die1\'</span>,\n\
    <span class=\"hljs-attr\">position</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">49.8</span>, <span class=\"hljs-number\">49.4</span>)\n\
  }), <span class=\"hljs-title function_\">part</span>(<span class=\"hljs-title class_\">Die</span>, {\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'die2\'</span>,\n\
    <span class=\"hljs-attr\">rotation</span>: num.<span class=\"hljs-title function_\">toRadians</span>(<span class=\"hljs-number\">77.0</span>),\n\
    <span class=\"hljs-attr\">position</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">375.5</span>,<span class=\"hljs-number\">90.1</span>)\n\
  }), <span class=\"hljs-title function_\">part</span>(<span class=\"hljs-title class_\">Die</span>, {\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'die3\'</span>,\n\
    <span class=\"hljs-attr\">rotation</span>: num.<span class=\"hljs-title function_\">toRadians</span>(<span class=\"hljs-number\">20.0</span>),\n\
    <span class=\"hljs-attr\">position</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">180.3</span>, <span class=\"hljs-number\">211.7</span>)\n\
  })]\n\
});\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"31\" data-htmlline=\"32\">The resulting morph should look something like this:</p>\n\
\n\
</div>',
  position: pt(15,13684)
}, part(WrappedPokerTable, {
  name: 'embedded 11',
  extent: pt(375,453.8),
  position: pt(15,14546)
}), {
  type: HTMLMorph,
  name: 'markdown 12',
  extent: pt(375,4191),
  fixedHeight: false,
  html: '<link type=\"text/css\" rel=\"stylesheet\" id=\"github-markdown\" href=\"/lively.ide/md/github-markdown.css\"><div class=\"markdown-body\" style=\"margin: 5px\">\n\
<p class=\"markdown-line-marker\" data-mdline=\"2\" data-htmlline=\"3\">As you can see, by invoking the part calls within the submorph array we reused the component definition of <code>Die</code> within the component definition of <code>PokerTable</code>. Also notice, how in the  <code>part</code> calls we have passed some properties to adjust the properties of each die to place them at unique positions (and varying degrees of rotation). If we skipped these overrides, all dice would just sit on top of each other at the same position.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"4\" data-htmlline=\"5\">Component Derivations</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"6\" data-htmlline=\"8\">While reusing component definitions to compose new components is useful, we also want to be able to expand or customize existing component definitions to suit our needs. For instance we may want to have different color themes of the same system button in order to match different styles of tools.\n\
In order to achieve that, the component system allows to derive a component similar to subclassing a class:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\">\n\
<span class=\"hljs-keyword\">const</span> goldGradient =  <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">LinearGradient</span>({\n\
  <span class=\"hljs-attr\">stops</span>: [{ <span class=\"hljs-attr\">offset</span>: <span class=\"hljs-number\">0</span>, <span class=\"hljs-attr\">color</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-title function_\">rgb</span>(<span class=\"hljs-number\">244</span>, <span class=\"hljs-number\">171</span>, <span class=\"hljs-number\">4</span>) }, { <span class=\"hljs-attr\">offset</span>: <span class=\"hljs-number\">1</span>, <span class=\"hljs-attr\">color</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-title function_\">rgb</span>(<span class=\"hljs-number\">246</span>, <span class=\"hljs-number\">138</span>, <span class=\"hljs-number\">9</span>) }],\n\
  <span class=\"hljs-attr\">vector</span>: <span class=\"hljs-title function_\">rect</span>(<span class=\"hljs-number\">0.49999999999999994</span>, <span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">6.123233995736766e-17</span>, <span class=\"hljs-number\">1</span>)\n\
});\n\
\n\
<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">GoldenDie</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">Die</span>, {\n\
  <span class=\"hljs-attr\">fill</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-property\">black</span>,javascript\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye1\'</span>,\n\
    <span class=\"hljs-attr\">fill</span>: goldGradient\n\
  }, {\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye2\'</span>,\n\
    <span class=\"hljs-attr\">fill</span>: goldGradient\n\
  }, {\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye3\'</span>,\n\
    <span class=\"hljs-attr\">fill</span>: goldGradient\n\
  }]\n\
});\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"30\" data-htmlline=\"32\">The first argument to <code>component()</code> is now the component that we are using to derive a new component definition. When thinking about the component definition as a class, we can think about this first argument as the superclass. Internally we refer to this component as the component’s <em>parent</em>.\n\
Looking further, we notice the structure of the spec which looks quite similar to the one we passed initially to <code>component</code> when we were defining <code>Die</code>. However this time, the properties here only define the <em>overridden</em> properties for each morph with respect to the way they were defined in the parent component. You can think of the resulting component definition as a <em>deep merge</em> of the spec found in the parent and the spec provided here in the derived component. Since this component derivation adjusts the fill of various parts of the die, the resulting component looks like this:</p>\n\
<figure data-type=\"image\"><img src=\"./assets/gold%20die.png\" alt=\"\"></figure>\n\
<blockquote>\n\
<p>💡 <strong>Tip</strong></p>\n\
<p>When deriving components and overwriting parts of their <code>spec</code> in the definition of the derivation, it is important that each submorphs <code>name</code> property is specified correctly. Also consider the importance of unique names inside a component hierarchy mentioned above. You will always need to specify the complete path to a submorph (in the case of deeply nested submorphs). <code>lively.next</code> will not expand the hierarchy automatically.</p>\n\
</blockquote>\n\
<p class=\"markdown-line-marker\" data-mdline=\"40\" data-htmlline=\"41\">For the well trained eye, it should become apparent that component definitions constitute something others refer to as <em>nested classes</em>. However, instead of utilizing the native <code>JavaScript</code> class syntax we opted for this function notation for two reasons:</p>\n\
<ol>\n\
<li>It is slightly less verbose than class declarations</li>\n\
<li>The property dispatch happens not as a simple single dispatch (as is the norm in <code>JavaScript</code> classes) but constitutes a multiple dispatch taking into account the <strong>component itself</strong>, the <strong>component’s parent</strong>, the <strong>component’s states</strong> and also the <strong>state of the morph</strong> being styled.</li>\n\
</ol>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"44\" data-htmlline=\"45\">Altering Structure</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"45\" data-htmlline=\"46\">Obviously, when deriving a component from a different one, we often want to adjust aspects about its structure. For instance, we may want to remove certain morphs from the component, that are not useful for the current component. We also may want to add new morphs which are needed to implement a different set of functionality.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"47\" data-htmlline=\"50\">Altering structure cannot easily be expressed with the property overriding mechanism, which is why a set of three convenience functions is provided: <code>add()</code>, <code>remove()</code>.\n\
Let’s illustrate how each of them is used by returning to our dice example. When we want to create versions of each dice each of which shows a different face, we will want to adjust the structure.\n\
For instance turning the original <code>Die</code> into a <code>FiveDie</code> could look something like this:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">FiveDie</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">Die</span>, {\n\
  <span class=\"hljs-attr\">submorphs</span>: [<span class=\"hljs-title function_\">add</span>({\n\
    <span class=\"hljs-attr\">type</span>: <span class=\"hljs-title class_\">Ellipse</span>,\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye5\'</span>,\n\
    <span class=\"hljs-attr\">extent</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">15.9</span>, <span class=\"hljs-number\">16.6</span>),\n\
    <span class=\"hljs-attr\">position</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">30.3</span>,<span class=\"hljs-number\">29.3</span>)\n\
  })]\n\
});\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"62\" data-htmlline=\"63\">In case we want to insert a new morph at a particular index in the submorphs array, we can pass the name of the <strong>proceeding</strong> sibling as a second argument like so:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">FiveDie</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">Die</span>, {\n\
  <span class=\"hljs-attr\">submorphs</span>: [<span class=\"hljs-title function_\">add</span>({\n\
    <span class=\"hljs-attr\">type</span>: <span class=\"hljs-title class_\">Ellipse</span>,\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye5\'</span>,\n\
    <span class=\"hljs-attr\">extent</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">15.9</span>, <span class=\"hljs-number\">16.6</span>),\n\
    <span class=\"hljs-attr\">position</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">30.3</span>,<span class=\"hljs-number\">29.3</span>)\n\
  }), <span class=\"hljs-string\">\'eye\'</span>]\n\
});\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"75\" data-htmlline=\"76\">In turn, creating a die that shows the three face requires removing and adjusting certain eyes:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">ThreeDie</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">Die</span>, {\n\
  <span class=\"hljs-attr\">submorphs</span>: [\n\
    <span class=\"hljs-title function_\">without</span>(<span class=\"hljs-string\">\'eye2\'</span>), <span class=\"hljs-comment\">// we remove one eye by referencing its name</span>\n\
    {\n\
      <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye1\'</span>,\n\
      <span class=\"hljs-attr\">position</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">30.8</span>,<span class=\"hljs-number\">31</span>) <span class=\"hljs-comment\">// and adjust the position of another one to fit at the center</span>\n\
  }]\n\
});\n\
</code></pre>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"88\" data-htmlline=\"89\">Overriding Masters</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"90\" data-htmlline=\"92\">In order to adjust morphs in derived components its often simpler to <em>reassign</em> a different <strong>master component</strong> to style a particular morph rather then simply overriding each property of a morph by hand.\n\
For instance, going back to our poker table example, we may want to apply different styles to some of the dice in a derived component like so:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">DiversePokerTable</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">PokerTable</span>, {\n\
  <span class=\"hljs-attr\">submorphs</span>: [\n\
    { <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'die1\'</span>, <span class=\"hljs-attr\">master</span>: <span class=\"hljs-title class_\">EmeraldDie</span> }\n\
    { <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'die2\'</span>, <span class=\"hljs-attr\">master</span>: <span class=\"hljs-title class_\">GoldenDie</span> },\n\
   ) \n\
  ]\n\
});\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"103\" data-htmlline=\"104\">Notice that in the resulting scene, the dice have changed their styling:</p>\n\
\n\
</div>',
  position: pt(15,15015)
}, part(WrappedDiversePokerTable, {
  name: 'embedded 13',
  extent: pt(375,465.7),
  position: pt(15,19221)
}), {
  type: HTMLMorph,
  name: 'markdown 14',
  extent: pt(375,13084.1),
  fixedHeight: false,
  html: '<link type=\"text/css\" rel=\"stylesheet\" id=\"github-markdown\" href=\"/lively.ide/md/github-markdown.css\"><div class=\"markdown-body\" style=\"margin: 5px\">\n\
<p class=\"markdown-line-marker\" data-mdline=\"2\" data-htmlline=\"3\">Also notice that some properties have remained untouched, this includes properties like <code>rotation</code> and <code>position</code>. These are <em>transform properties</em> and can not be overridden via assigning a new master. This can only be done by overriding them explicitly within the component definition.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"4\" data-htmlline=\"6\">The application of a master component via the master property is <em>recursive</em>, which means that any of the submorphs that  may be styled by a master are also getting their masters overridden in turn if the <em>new</em> master defines them to be different.\n\
In the example of the dice for instance, imagine a scenario where each eye was itself derived from a component. If <code>GoldenDie</code> was defined such that it overrides each of the eyes with a different master component, then the application of <code>GoldenDie</code> to <code>\'die2\'</code> would also recursively apply the adjusted masters to each of its eyes.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"7\" data-htmlline=\"8\">Component States</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"9\" data-htmlline=\"10\">So far we have just talked about using master components to define and inherit structure <em>(component derivations)</em> and applying styles <em>(overriding masters)</em>. We will now turn to some master configurations that allow components to also be applied <em>dynamically</em>.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"11\" data-htmlline=\"12\">Note, that for one component definition only one component state can be active at a time. There is no parallel application of two (or more) components via multiple component states where the result will be merged in some way. While this semantic is theoretically possible, we refrained from doing so in order to avoid overly complex behavior and hard to trace unintended styling effects.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"13\" data-htmlline=\"14\">Event States</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"15\" data-htmlline=\"16\">The most straight forward dynamic application of master components is in the case of morphic events. For this, the component system supports defining component to be applied in case of a <em>click</em> or <em>hover</em> event. This is achieved by overriding the <code>master</code> property just as we did in the previous section. However, this time, we pass a <code>spec</code> object instead of a component reference like so:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">HoveredDie</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">Die</span>, { <span class=\"hljs-attr\">fill</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-property\">red</span>.<span class=\"hljs-title function_\">darker</span>() });\n\
\n\
<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">HoverableDie</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">Die</span>, {\n\
  <span class=\"hljs-attr\">master</span>: {\n\
    <span class=\"hljs-attr\">hover</span>: <span class=\"hljs-title class_\">HoveredDie</span>\n\
  }\n\
});\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"26\" data-htmlline=\"28\">The die will now alter its color to the one defined in <code>HoveredDie</code> for as long as the cursor is hovering above the morph being styled.\n\
The same can also be done for a touch/click event, where the master is going to be applied for as long as the press continues:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">ClickedDie</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">Die</span>, { <span class=\"hljs-attr\">fill</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-property\">red</span>.<span class=\"hljs-title function_\">lighter</span>() });\n\
\n\
<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">HoverableDie</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">Die</span>, {\n\
  <span class=\"hljs-attr\">master</span>: {\n\
    <span class=\"hljs-attr\">click</span>: <span class=\"hljs-title class_\">ClickedDie</span>\n\
  }\n\
});\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"39\" data-htmlline=\"40\">We can also define both at the same time. In this case the click will take precedence over the hover:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">ClickedDie</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">Die</span>, { <span class=\"hljs-attr\">fill</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-property\">red</span>.<span class=\"hljs-title function_\">lighter</span>() });\n\
<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">HoveredDie</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">Die</span>, { <span class=\"hljs-attr\">fill</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-property\">red</span>.<span class=\"hljs-title function_\">darker</span>() });\n\
\n\
<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">InteractiveDie</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">Die</span>, {\n\
  <span class=\"hljs-attr\">master</span>: {\n\
    <span class=\"hljs-attr\">hover</span>: <span class=\"hljs-title class_\">HoveredDie</span>,\n\
    <span class=\"hljs-attr\">click</span>: <span class=\"hljs-title class_\">ClickedDie</span>\n\
  }\n\
});\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"53\" data-htmlline=\"54\">In scenarios where we still want to override the master statically, but also want to attach dynamic event master styles, we can utilize the <code>auto</code> field which will apply the specified master in just the same way as was the case when we directly overwrote the master in the above section. However with the additional dynamic master styles stepping in when applicable:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">ClickedDie</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">Die</span>, { <span class=\"hljs-attr\">fill</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-property\">red</span>.<span class=\"hljs-title function_\">lighter</span>() });\n\
<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">HoveredDie</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">Die</span>, { <span class=\"hljs-attr\">fill</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-property\">red</span>.<span class=\"hljs-title function_\">darker</span>() });\n\
\n\
<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">InteractiveGoldenDie</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">Die</span>, {\n\
  <span class=\"hljs-attr\">master</span>: {\n\
    <span class=\"hljs-attr\">auto</span>: <span class=\"hljs-title class_\">GoldenDie</span>,\n\
    <span class=\"hljs-attr\">hover</span>: <span class=\"hljs-title class_\">HoveredDie</span>,\n\
    <span class=\"hljs-attr\">click</span>: <span class=\"hljs-title class_\">ClickedDie</span>\n\
  }\n\
});\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"68\" data-htmlline=\"69\">The above examples have all resorted to creating custom derivations of the <code>Die</code> component in order to parametrize the component states  accordingly. Oftentimes however, such declarations are overly verbose, since they are never gonna be used outside of the context of a component to being with. In those instances, you can also skip the component declaration like so:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">InteractiveGoldenDie</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">Die</span>, {\n\
  <span class=\"hljs-attr\">master</span>: {\n\
    <span class=\"hljs-attr\">auto</span>: <span class=\"hljs-title class_\">GoldenDie</span>,\n\
    <span class=\"hljs-attr\">hover</span>: <span class=\"hljs-title function_\">component</span>({ <span class=\"hljs-attr\">fill</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-property\">red</span>.<span class=\"hljs-title function_\">darker</span>() }),\n\
    <span class=\"hljs-attr\">click</span>: <span class=\"hljs-title function_\">component</span>({ <span class=\"hljs-attr\">fill</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-property\">red</span>.<span class=\"hljs-title function_\">lighter</span>() })\n\
  }\n\
});\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"80\" data-htmlline=\"81\">We refer to these types of implicit declarations as <strong>inline master/inline components</strong>.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"82\" data-htmlline=\"83\">Breakpoints</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"84\" data-htmlline=\"87\">When implementing a responsive design for a website or application, we often want to select between different master component based on the extent of a morph. Based on the viewport size, a morph warrants entirely different presentations of contents.\n\
For instance a morph that implements a link to a blogpost should have different font sizes, layout settings and displayed elements depending on the size it is allotted.\n\
This is where <em>breakpoint states</em> come in handy, since they allow us to define at what height(s) or width(s) of the morph which component(s) are supposed to be applied, right within the component definition itself.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"88\" data-htmlline=\"89\">The following example showcases how we can have a poker table that, depending on its size, shows varying amounts of dice:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">PokerTableLarge</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">PokerTable</span>, {\n\
  <span class=\"hljs-comment\">// nothing changed</span>\n\
});\n\
<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">PokerTableMedium</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">PokerTable</span>, {\n\
  <span class=\"hljs-attr\">submorphs</span>: [{\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'die2\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }]\n\
});\n\
<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">PokerTableSmall</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">PokerTable</span>, {\n\
  <span class=\"hljs-attr\">submorphs</span>: [{\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'die2\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }, {\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'die3\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }]\n\
});\n\
\n\
<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">ResponsivePokerTable</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">PokerTable</span>, {\n\
  <span class=\"hljs-attr\">extent</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">710.9</span>, <span class=\"hljs-number\">317.8</span>),\n\
  <span class=\"hljs-attr\">master</span>: {\n\
    <span class=\"hljs-attr\">auto</span>: <span class=\"hljs-title class_\">PokerTableSmall</span>,\n\
    <span class=\"hljs-attr\">breakpoints</span>: [\n\
      [<span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">300</span>, <span class=\"hljs-number\">0</span>), <span class=\"hljs-title class_\">PokerTableMedium</span>],\n\
      [<span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">600</span>, <span class=\"hljs-number\">0</span>), <span class=\"hljs-title class_\">PokerTableLarge</span>]\n\
    ]\n\
  }\n\
});\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"122\" data-htmlline=\"123\">The resulting behavior looks like this:</p>\n\
<figure data-type=\"image\"><img src=\"./assets/responsive-poker-table.gif\" alt=\"\"></figure>\n\
<blockquote>\n\
<p>💡 <strong>Tip</strong></p>\n\
<p>Note, that the breakpoints from any of the parent components are overridden if present and are not getting considered when the style is applied to the morph.</p>\n\
</blockquote>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"130\" data-htmlline=\"131\">Custom States</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"132\" data-htmlline=\"133\">Aside from the hard wired event states mentioned above, it is often handy to define some domain-specific component states which can only be triggered via code execution. Examples for this include different styles to distinguish between an <em>active</em> or <em>inactive</em> state of GUI elements. Other examples include <em>selection styles</em> that add an accent to a particular element or even <em>mode styles</em> that allow to cycle between different states such as <em>warning</em>,<em>error</em> or others.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"134\" data-htmlline=\"135\">In order to define a custom style, we again invoke the <code>master</code> property as in the previous example, yet this time we add another field <code>states</code> to which we pass the definition of the custom states:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\">\n\
<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">EmptyPokerTable</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">PokerTable</span>, {\n\
  <span class=\"hljs-attr\">submorphs</span>: [{\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'die1\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }, {\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'die2\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }, {\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'die3\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }]\n\
});\n\
\n\
<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">InteractivePokerTable</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">PokerTable</span>, {\n\
  <span class=\"hljs-attr\">master</span>: {\n\
    <span class=\"hljs-attr\">states</span>: {\n\
      <span class=\"hljs-attr\">empty</span>: <span class=\"hljs-title class_\">EmptyPokerTable</span>\n\
    }\n\
  }\n\
});\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"160\" data-htmlline=\"161\">We can trigger the custom state by calling <code>setState()</code> on the master object like so:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">const</span> table = <span class=\"hljs-title function_\">part</span>(<span class=\"hljs-title class_\">InteractivePokertable</span>); <span class=\"hljs-comment\">// instantiate the table</span>\n\
table.<span class=\"hljs-property\">master</span>.<span class=\"hljs-title function_\">setState</span>(<span class=\"hljs-string\">\'empty\'</span>); <span class=\"hljs-comment\">// applies the empty style</span>\n\
table.<span class=\"hljs-property\">master</span>.<span class=\"hljs-title function_\">setState</span>(<span class=\"hljs-literal\">null</span>); <span class=\"hljs-comment\">// reverts back to the default styling</span>\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"168\" data-htmlline=\"169\">Note that, just as the breakpoints, the custom state object does not get merged in case you override the custom states from one of the parent components. If for instance the <code>PokerTable</code> in the above example would itself define a custom component state called <code>foo</code> setting <code>table.master.setState(\'foo\')</code> would have no effect, since <code>foo</code> is not mentioned in the component states of <code>InteractivePokerTable</code>.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"170\" data-htmlline=\"171\">Adding Behavior via <code>ViewModel</code>s</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"172\" data-htmlline=\"173\">Based on the past experiences with live systems such as <code>LivelyKernel</code>, we decided that there is an immense value in the option to easily toggle interactive behavior of components on and off. This does not only lead to more concise and reusable code, but also makes it so that we can toggle the behavior during runtime inside of <code>lively.next</code>. This leads to a smoother transition between the design stage of a component and the phase where the behavior is implemented. See the <a href=\"#documentation/studio\" target=\"_blank\">Introduction to lively.next’s Studio</a> for more details on this.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"174\" data-htmlline=\"175\">A <code>ViewModel</code> is first and foremost a class that will need to inherit from the base <code>ViewModel</code> class:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title class_\">CustomViewModel</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title class_ inherited__\">ViewModel</span> {\n\
\n\
} \n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"182\" data-htmlline=\"183\">In order to actually trigger behavior, you will need to connect the default morph functions to methods inside of your view model code. Consider the following example that shows how we can trigger a custom <code>clickHandler</code> when the morph that stems from a component definition is clicked. Remember, that the default <code>morphic</code> method for click handling in <code>lively.next</code> is <code>onMouseDown</code>.</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title class_\">CustomViewModel</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title class_ inherited__\">ViewModel</span> {\n\
  <span class=\"hljs-keyword\">static</span> get properties () {\n\
    <span class=\"hljs-keyword\">return</span> {\n\
      <span class=\"hljs-attr\">customProperty</span>: {},\n\
      <span class=\"hljs-attr\">bindings</span>: {\n\
        get () {\n\
          <span class=\"hljs-keyword\">return</span> [\n\
            { <span class=\"hljs-attr\">signal</span>: <span class=\"hljs-string\">\'onMouseDown\'</span>, <span class=\"hljs-attr\">handler</span>: <span class=\"hljs-string\">\'clickHandler\'</span> }\n\
          ];\n\
        }\n\
      }\n\
    };\n\
  }\n\
\n\
  clickHandler () {\n\
    <span class=\"hljs-comment\">// custom behavior here</span>\n\
  }\n\
}\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"205\" data-htmlline=\"206\">In order to add a view model class to a component, add the <code>defaultViewModel</code> property inside of the <code>component</code> call with the corresponding class as value.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"207\" data-htmlline=\"208\">You can also initialize components (or specific instances) with dynamic values for properties that are defined on the view model. It is important that these values are declared as properties on the view model class, like <code>customProperty</code> in the example above. To set a dynamic value, you will need to specify the <code>viewModel</code> property in the <code>part</code> call like this: <code>viewModel: { customProperty: \'Hello!\' }</code>.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"209\" data-htmlline=\"211\">As usual, it is possible to reach from the model code inside of the view to react to programmatic changes. The outer-most morph of a component is available via <code>this.view</code> inside of the view model.\n\
In order to access a nested morph inside of the components hierarchy, we provide a synthesized <code>ui</code> property on the model object. To access a morph called <code>deepMorph</code> inside of a component in its model, you would access <code>this.ui.deepMorph</code>, regardless of the position of the morph inside of the hierarchy. Consider our above warning about unique morph names!</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"212\" data-htmlline=\"213\">A model is responsible for the outer-most morph of a component (the <em>view</em> of the <em>model</em>) and all its descendants until one of the submorphs itself carries a <code>ViewModel</code>!</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"214\" data-htmlline=\"216\">While the building blocks of the view are accessible from within the model, it is not possible to access specific properties or methods of a model by accessing the morph of the components instance!\n\
As it is sometimes handy to make parts of the model accessible to the outside world, we provide an <code>expose</code> property. Only properties and functions mentioned inside of this are available from the outside. The following example showcases how to utilize the <code>expose</code> property:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title class_\">CustomViewModel</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title class_ inherited__\">ViewModel</span> {\n\
  <span class=\"hljs-keyword\">static</span> get properties () {\n\
    <span class=\"hljs-keyword\">return</span> {\n\
      <span class=\"hljs-attr\">customPropertyInternal</span>: { <span class=\"hljs-attr\">defaultValue</span>: <span class=\"hljs-string\">\'this is secret\'</span>},\n\
      <span class=\"hljs-attr\">customPropertyExternal</span>: { <span class=\"hljs-attr\">defaultValue</span>: <span class=\"hljs-string\">\'this is not secret\'</span>},\n\
      <span class=\"hljs-attr\">expose</span>: {\n\
        get () {\n\
          <span class=\"hljs-keyword\">return</span> [<span class=\"hljs-string\">\'customPropertyExternal\'</span>];\n\
        }\n\
      }\n\
    };\n\
  }\n\
}\n\
\n\
<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">ExposeComponent</span> = { <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'demo morph\'</span>, <span class=\"hljs-attr\">defaultViewModel</span>: <span class=\"hljs-title class_\">CustomViewModel</span>};\n\
<span class=\"hljs-keyword\">const</span> exposeInstance = <span class=\"hljs-title function_\">part</span>(<span class=\"hljs-title class_\">ExposeComponent</span>);\n\
exposeInstance.<span class=\"hljs-property\">customPropertyInternal</span> <span class=\"hljs-comment\">// -&gt; will result in an error</span>\n\
exposeInstance.<span class=\"hljs-property\">customPropertyExternal</span> <span class=\"hljs-comment\">// -&gt; will result in \'this is not secret\'</span>\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"238\" data-htmlline=\"239\">Therefore, you can think of the <code>expose</code> property of a view model as defining the programmatic interface of the corresponding component.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"240\" data-htmlline=\"241\">Bindings - In Depth</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"242\" data-htmlline=\"243\">Each binding is defines as follows: <code>{ target?, signal, handler, converter?, updater?, varMapping? }</code></p>\n\
<ul>\n\
<li><strong>target</strong>: Defines which morph of the component the binding should hold on to. If <code>target</code> is omitted, <code>target</code> is assumed to be the morph the model is directly attached to.</li>\n\
<li><strong>signal</strong>: Defines the method or signal the binding should react to. This is usually a method from the base <code>Morph</code> class.</li>\n\
<li><strong>handler</strong>: Defines the method that is called in response to the binding getting triggered. This can be either the name of the method or a closure passed directly.</li>\n\
<li><strong>converter</strong>: An optional function that can transform the value passed to the signal or method. This is the same as the converter from <code>connect()</code>. By default, the arguments from the signal are passed.</li>\n\
<li><strong>updater</strong>: An optional function that allows the user to fully control the way the handler is called. This is the same as the updater from <code>connect()</code>.</li>\n\
<li><strong>varMapping</strong>: Both <code>converter</code> and <code>updater</code> support the provision of the function as a string. In this case it is useful to have a varMapping that will ensure the closures are properly initialized.</li>\n\
</ul>\n\
<p class=\"markdown-line-marker\" data-mdline=\"251\" data-htmlline=\"252\">For more details on <code>converter</code>, <code>updater</code> and <code>varMapping</code>, see <a href=\"https://github.com/LivelyKernel/lively.next/wiki/Bindings,-Connections-and-Signals\" target=\"_blank\">this entry in the wiki of <code>lively.next</code></a>.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"253\" data-htmlline=\"254\">Callbacks provided by the <code>ViewModel</code> superclass</h4>\n\
<blockquote>\n\
<p>⚠️ <strong>Warning</strong></p>\n\
<p>The API of the viewmodels is subject to change in the future, this section will be updated accordingly.</p>\n\
</blockquote>\n\
<p class=\"markdown-line-marker\" data-mdline=\"259\" data-htmlline=\"260\">In addition to the special <code>expose</code> and <code>bindings</code> properties, <code>ViewModel</code> provides a set of handy callbacks than can be utilized to accommodate common use-cases:</p>\n\
<ul>\n\
<li><code>onRefresh(propName)</code>: Called whenever a property in the model is changed. This is useful for performing view updates in response to model changes that we cannot anticipate via bindings. The callback is called for each property change separately, with the name of the changed property passed as an argument as a string.</li>\n\
<li><code>viewDidLoad()</code>: Called once when the model is attached to the view. This is the place where initialization or setup code usually is placed best.</li>\n\
<li><code>withoutBindingsDo(cb)</code>: Allows the code in the callback function to operate on the view without triggering the bindings. This prevents updated loops caused by back-propagation.</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"265\" data-htmlline=\"266\">Using Components and ViewModels</h3>\n\
<ul>\n\
<li>Let us illustrate how viewmodels are used in conjunction with components by a final example</li>\n\
<li>For this we will implement a throw behavior for the dice we have been working with previouysly. The idea is that clicking on a die will cause it to shuffle and display a different face.</li>\n\
<li>In order to that, we will first define a component that has all the faces we may want to display and call it the universal die.</li>\n\
</ul>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">UniversalDie</span> = <span class=\"hljs-title function_\">component</span>({\n\
  <span class=\"hljs-attr\">origin</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">38.5</span>, <span class=\"hljs-number\">37.1</span>),\n\
  <span class=\"hljs-attr\">fill</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-title function_\">rgb</span>(<span class=\"hljs-number\">255</span>, <span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">0</span>),\n\
  <span class=\"hljs-attr\">extent</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">78.5</span>, <span class=\"hljs-number\">78.7</span>),\n\
  <span class=\"hljs-attr\">borderRadius</span>: <span class=\"hljs-number\">13</span>,\n\
  <span class=\"hljs-attr\">submorphs</span>: [\n\
    {\n\
      <span class=\"hljs-attr\">type</span>: <span class=\"hljs-title class_\">Ellipse</span>,\n\
      <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye0\'</span>,\n\
      <span class=\"hljs-attr\">extent</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">15.9</span>, <span class=\"hljs-number\">16.6</span>),\n\
      <span class=\"hljs-attr\">position</span>: <span class=\"hljs-title function_\">pt</span>(-<span class=\"hljs-number\">28.6</span>, -<span class=\"hljs-number\">29.5</span>)\n\
    }, {\n\
      <span class=\"hljs-attr\">type</span>: <span class=\"hljs-title class_\">Ellipse</span>,\n\
      <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye1\'</span>,\n\
      <span class=\"hljs-attr\">extent</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">15.9</span>, <span class=\"hljs-number\">16.6</span>),\n\
      <span class=\"hljs-attr\">position</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">12.5</span>, -<span class=\"hljs-number\">28.7</span>)\n\
    }, {\n\
      <span class=\"hljs-attr\">type</span>: <span class=\"hljs-title class_\">Ellipse</span>,\n\
      <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye2\'</span>,\n\
      <span class=\"hljs-attr\">extent</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">15.9</span>, <span class=\"hljs-number\">16.6</span>),\n\
      <span class=\"hljs-attr\">position</span>: <span class=\"hljs-title function_\">pt</span>(-<span class=\"hljs-number\">28.8</span>, <span class=\"hljs-number\">14.9</span>)\n\
    }, {\n\
      <span class=\"hljs-attr\">type</span>: <span class=\"hljs-title class_\">Ellipse</span>,\n\
      <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye3\'</span>,\n\
      <span class=\"hljs-attr\">extent</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">15.9</span>, <span class=\"hljs-number\">16.6</span>),\n\
      <span class=\"hljs-attr\">position</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">11.8</span>, <span class=\"hljs-number\">15.8</span>)\n\
    }, {\n\
      <span class=\"hljs-attr\">type</span>: <span class=\"hljs-title class_\">Ellipse</span>,\n\
      <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye4\'</span>,\n\
      <span class=\"hljs-attr\">extent</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">15.9</span>, <span class=\"hljs-number\">16.6</span>),\n\
      <span class=\"hljs-attr\">position</span>: <span class=\"hljs-title function_\">pt</span>(-<span class=\"hljs-number\">7.6</span>, -<span class=\"hljs-number\">7.6</span>)\n\
    }, {\n\
      <span class=\"hljs-attr\">type</span>: <span class=\"hljs-title class_\">Ellipse</span>,\n\
      <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye5\'</span>,\n\
      <span class=\"hljs-attr\">extent</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">15.9</span>, <span class=\"hljs-number\">16.6</span>),\n\
      <span class=\"hljs-attr\">position</span>: <span class=\"hljs-title function_\">pt</span>(-<span class=\"hljs-number\">28.8</span>, -<span class=\"hljs-number\">7.4</span>)\n\
    }, {\n\
      <span class=\"hljs-attr\">type</span>: <span class=\"hljs-title class_\">Ellipse</span>,\n\
      <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye6\'</span>,\n\
      <span class=\"hljs-attr\">extent</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">15.9</span>, <span class=\"hljs-number\">16.6</span>),\n\
      <span class=\"hljs-attr\">position</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">12.2</span>, -<span class=\"hljs-number\">6.9</span>)\n\
    }]\n\
});\n\
</code></pre>\n\
<ul>\n\
<li>We then derive it 6 times, where we adjust the styling in a way so that each die shows a different face.</li>\n\
</ul>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">Die1</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">UniversalDie</span>, {\n\
  <span class=\"hljs-attr\">submorphs</span>: [{\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye0\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }, {\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye1\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }, {\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye2\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }, {\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye3\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }, {\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye5\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }, {\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye6\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }]\n\
});\n\
\n\
<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">Die2</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">UniversalDie</span>, {\n\
  <span class=\"hljs-attr\">submorphs</span>: [{\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye1\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }, {\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye2\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }, {\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye4\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }, {\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye5\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }, {\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye6\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }]\n\
});\n\
\n\
<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">Die3</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">UniversalDie</span>, {\n\
  <span class=\"hljs-attr\">submorphs</span>: [{\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye1\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }, {\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye2\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }, {\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye5\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }, {\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye6\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }]\n\
});\n\
\n\
<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">Die4</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">UniversalDie</span>, {\n\
  <span class=\"hljs-attr\">submorphs</span>: [{\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye4\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }, {\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye5\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }, {\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye6\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }]\n\
});\n\
\n\
<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">Die5</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">UniversalDie</span>, {\n\
  <span class=\"hljs-attr\">submorphs</span>: [{\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye5\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }, {\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye6\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }]\n\
});\n\
\n\
<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">Die6</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">UniversalDie</span>, {\n\
  <span class=\"hljs-attr\">submorphs</span>: [{\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye4\'</span>,\n\
    <span class=\"hljs-attr\">visible</span>: <span class=\"hljs-literal\">false</span>\n\
  }]\n\
});\n\
\n\
</code></pre>\n\
\n\
</div>',
  position: pt(15,19701)
}, part(AllFaces, {
  name: 'embedded 15',
  extent: pt(375,314.9),
  position: pt(15,32800)
}), {
  type: HTMLMorph,
  name: 'markdown 16',
  extent: pt(375,2215.1),
  fixedHeight: false,
  html: '<link type=\"text/css\" rel=\"stylesheet\" id=\"github-markdown\" href=\"/lively.ide/md/github-markdown.css\"><div class=\"markdown-body\" style=\"margin: 5px\">\n\
<ul>\n\
<li>We then define a view model, which can attach to the universal die and toggle the visibility of the eyes such that it shows different faces. We will achieve this by toggling between different component states.</li>\n\
</ul>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\">\n\
<span class=\"hljs-keyword\">class</span> <span class=\"hljs-title class_\">ThrowableDieModel</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title class_ inherited__\">ViewModel</span> {\n\
  get bindings () {\n\
    <span class=\"hljs-keyword\">return</span> [\n\
      <span class=\"hljs-comment\">// wire up the mouse down event with the throw method </span>\n\
      {\n\
        <span class=\"hljs-attr\">signal</span>: <span class=\"hljs-string\">\'onMouseDown\'</span>, <span class=\"hljs-attr\">handler</span>: <span class=\"hljs-string\">\'throw\'</span>\n\
      }\n\
    ];\n\
  }\n\
\n\
  viewDidLoad () {\n\
    <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-title function_\">showFace</span>(<span class=\"hljs-number\">1</span>); <span class=\"hljs-comment\">// default to face 1 when the morph and the viewmodel are initialized and ready</span>\n\
  }\n\
\n\
  showFace (face) {\n\
    <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">view</span>.<span class=\"hljs-property\">master</span>.<span class=\"hljs-title function_\">setState</span>(face);\n\
  }\n\
\n\
  <span class=\"hljs-keyword\">async</span> <span class=\"hljs-keyword\">throw</span> () {\n\
    <span class=\"hljs-comment\">// we access the morph from the viewmodel via the view property</span>\n\
    <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">view</span>.<span class=\"hljs-title function_\">animate</span>({ <span class=\"hljs-attr\">rotation</span>: <span class=\"hljs-number\">16</span> * <span class=\"hljs-title class_\">Math</span>.<span class=\"hljs-property\">PI</span>, <span class=\"hljs-attr\">duration</span>: <span class=\"hljs-number\">2000</span> }).<span class=\"hljs-title function_\">then</span>(<span class=\"hljs-function\">() =&gt;</span> {\n\
      <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">view</span>.<span class=\"hljs-property\">rotation</span> = <span class=\"hljs-number\">0</span>;\n\
    });\n\
    <span class=\"hljs-keyword\">await</span> promise.<span class=\"hljs-title function_\">delay</span>(<span class=\"hljs-number\">1000</span>);\n\
    <span class=\"hljs-comment\">// and adjust the face randomly while it is spinning</span>\n\
    <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-title function_\">showFace</span>(num.<span class=\"hljs-title function_\">random</span>(<span class=\"hljs-number\">1</span>, <span class=\"hljs-number\">6</span>));\n\
  }\n\
}\n\
\n\
<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">ThrowableDie</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">Die1</span>, {\n\
  <span class=\"hljs-attr\">defaultViewModel</span>: <span class=\"hljs-title class_\">ThrowableDieModel</span>, <span class=\"hljs-comment\">// this will make sure an instance of the component is initialized with the view model</span>\n\
  <span class=\"hljs-attr\">master</span>: {\n\
    <span class=\"hljs-attr\">states</span>: {\n\
      <span class=\"hljs-number\">1</span>: <span class=\"hljs-title class_\">Die1</span>,\n\
      <span class=\"hljs-number\">2</span>: <span class=\"hljs-title class_\">Die2</span>,\n\
      <span class=\"hljs-number\">3</span>: <span class=\"hljs-title class_\">Die3</span>,\n\
      <span class=\"hljs-number\">4</span>: <span class=\"hljs-title class_\">Die4</span>,\n\
      <span class=\"hljs-number\">5</span>: <span class=\"hljs-title class_\">Die5</span>,\n\
      <span class=\"hljs-number\">6</span>: <span class=\"hljs-title class_\">Die6</span>\n\
    }\n\
  }\n\
});\n\
</code></pre>\n\
<ul>\n\
<li>Lets enhance this by also writing some custom behavior for the previously defined poker table.</li>\n\
<li>The custom code will trigger a shuffle of all the dice and then display the total value to the user.</li>\n\
<li>To achieve that we adjust the poker table by deriving it like so:</li>\n\
</ul>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\">\n\
<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">DynamicPokerTable</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">PokerTable</span>, {\n\
  <span class=\"hljs-attr\">defaultViewModel</span>: <span class=\"hljs-title class_\">DynamicPokerTableModel</span>,\n\
  <span class=\"hljs-attr\">submorphs</span>: [\n\
   <span class=\"hljs-comment\">// replace the previous dice, since we need a completely new structure and behavior</span>\n\
    <span class=\"hljs-title function_\">replace</span>(<span class=\"hljs-string\">\'die1\'</span>, <span class=\"hljs-title function_\">part</span>(<span class=\"hljs-title class_\">ThrowableDie</span>)),\n\
    <span class=\"hljs-title function_\">reaplce</span>(<span class=\"hljs-string\">\'die2\'</span>, <span class=\"hljs-title function_\">part</span>(<span class=\"hljs-title class_\">ThrowableDie</span>)),\n\
    <span class=\"hljs-title function_\">replace</span>(<span class=\"hljs-string\">\'die3\'</span>, <span class=\"hljs-title function_\">part</span>(<span class=\"hljs-title class_\">ThrowableDie</span>)),\n\
    <span class=\"hljs-comment\">// add a new label that shows that total face value to the user</span>\n\
    <span class=\"hljs-title function_\">add</span>({\n\
      <span class=\"hljs-attr\">type</span>: <span class=\"hljs-title class_\">Text</span>,\n\
      <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'face value\'</span>,\n\
      <span class=\"hljs-attr\">dropShadow</span>: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">ShadowObject</span>({ <span class=\"hljs-attr\">color</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-property\">black</span>, <span class=\"hljs-attr\">blur</span>: <span class=\"hljs-number\">15</span>, <span class=\"hljs-attr\">fast</span>: <span class=\"hljs-literal\">false</span> }),\n\
      <span class=\"hljs-attr\">dynamicCursorColoring</span>: <span class=\"hljs-literal\">true</span>,\n\
      <span class=\"hljs-attr\">fill</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-title function_\">rgba</span>(<span class=\"hljs-number\">255</span>, <span class=\"hljs-number\">255</span>, <span class=\"hljs-number\">255</span>, <span class=\"hljs-number\">0</span>),\n\
      <span class=\"hljs-attr\">fontColor</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-title function_\">rgb</span>(<span class=\"hljs-number\">255</span>, <span class=\"hljs-number\">255</span>, <span class=\"hljs-number\">255</span>),\n\
      <span class=\"hljs-attr\">fontSize</span>: <span class=\"hljs-number\">28</span>,\n\
      <span class=\"hljs-attr\">fontWeight</span>: <span class=\"hljs-string\">\'600\'</span>,\n\
      <span class=\"hljs-attr\">position</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">184.6</span>, <span class=\"hljs-number\">110.3</span>),\n\
      <span class=\"hljs-attr\">textAndAttributes</span>: [<span class=\"hljs-string\">\'Total: 3\'</span>, <span class=\"hljs-literal\">null</span>]\n\
    })\n\
  ]\n\
});\n\
</code></pre>\n\
<ul>\n\
<li>Where the code of the viewmodel looks like so:</li>\n\
</ul>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title class_\">DynamicPokerTableModel</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title class_ inherited__\">ViewModel</span> {\n\
  get bindings () {\n\
    <span class=\"hljs-keyword\">return</span> [\n\
      { <span class=\"hljs-attr\">target</span>: <span class=\"hljs-regexp\">/die/</span>, <span class=\"hljs-attr\">signal</span>: <span class=\"hljs-string\">\'faceValue\'</span>, <span class=\"hljs-attr\">handler</span>: <span class=\"hljs-string\">\'showTotalFaceValue\'</span> }\n\
    ];\n\
  }\n\
\n\
  showTotalFaceValue () {\n\
    <span class=\"hljs-keyword\">const</span> { die1, die2, die3, faceValue } = <span class=\"hljs-variable language_\">this</span>.<span class=\"hljs-property\">ui</span>;\n\
    faceValue.<span class=\"hljs-property\">textString</span> = <span class=\"hljs-string\">`Total: <span class=\"hljs-subst\">${die1.faceValue + die2.faceValue + die3.faceValue}</span>`</span>;\n\
  }\n\
}\n\
</code></pre>\n\
<ul>\n\
<li>The resulting poker table looks like this. Click on the dice and observe how the total changes:</li>\n\
</ul>\n\
\n\
</div>',
  position: pt(15,33130)
}, part(WrappedDynamicPokerTable, {
  name: 'embedded 17',
  extent: pt(375,453.8),
  position: pt(15,35360)
}), {
  type: HTMLMorph,
  name: 'markdown 18',
  extent: pt(375,0),
  fixedHeight: false,
  html: '<link type=\"text/css\" rel=\"stylesheet\" id=\"github-markdown\" href=\"/lively.ide/md/github-markdown.css\"><div class=\"markdown-body\" style=\"margin: 5px\">\n\
\n\
</div>',
  position: pt(15,35829)
}]
}]
});



export { morphic }