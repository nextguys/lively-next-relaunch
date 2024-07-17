import { part, component, TilingLayout, ConstraintLayout } from "lively.morphic/index.js";
import { pt, rect } from "lively.graphics/geometry-2d.js";
import { HTMLMorph } from "lively.morphic/html-morph.js";
import { MorphicPropertyEssay } from "../ui/docs/interactive-doc.cp.js";
import { InteractiveDie, WrappedDiversePokerTable, WrappedPokerTable, WrappedDie, FocusBlurDiagram, InteractiveDelay } from "./examples.cp.js";
import { Color } from "lively.graphics/color.js";
const morphic = component({
  name: 'aMarkdownPreviewMorph',
  extent: pt(420,29323.9),
  layout: new TilingLayout({
  axis: "column",
  hugContentsVertically: true,
  resizePolicies: [["aMorph", {
        height: "fixed",
        width: "fill"
      }]]
}),
  position: pt(813,472),
  submorphs: [{
  name: 'aMorph',
  clipMode: 'auto',
  extent: pt(420,29324),
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
      }]],
  spacing: 15
}),
  submorphs: [{
  type: HTMLMorph,
  name: 'markdown 0',
  extent: pt(385,1645.6),
  fixedHeight: false,
  html: '<link type=\"text/css\" rel=\"stylesheet\" id=\"github-markdown\" href=\"/lively.ide/md/github-markdown.css\"><div class=\"markdown-body\" style=\"margin: 5px\">\n\
<p class=\"markdown-line-marker\" data-mdline=\"1\" data-htmlline=\"2\"><code>lively.next</code> ships with its own particular flavor of Morphic which was first introduced in <a href=\"https://ftp.squeak.org/docs/Self-4.0-UI-Framework.pdf\" target=\"_blank\">Self</a> and since then implemented multiple times over in different ways such as <a href=\"https://wiki.squeak.org/squeak/morphic\" target=\"_blank\">Squeak</a> and <a href=\"https://en.wikipedia.org/wiki/Lively_Kernel\" target=\"_blank\">LivelyKernel</a>.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"3\" data-htmlline=\"4\">As the name Morphic implies, this framework assembles GUIs by means of malleable objects called Morphs. Each of these Morphs can potentially also carry a complete custom set of behavior that implements the GUIs interactivity. This characteristic of the framework originally referred to asliveness and directness allows to inspect and explore every piece of the GUI and application at hand while it is running. This is particulary suitable for self sustaining live development environments such as lively.next.</p>\n\
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
<em>Standard container for any kind of web supported image file (notably also GIFs!). Supports two different layout methods where the image is either scaled to fill the size of the morph or resized to fit the entire area.</em></p>\n\
</li>\n\
<li>\n\
<p><strong>Text</strong>\n\
<em>One of the most powerful morphs that allows to display read-only text (for elements like UI labels or static website contents) but also allows for interactive richt-text editing.</em></p>\n\
</li>\n\
<li>\n\
<p><strong>HTML</strong>\n\
<em>Allows to directly render custom HTML and bypass the standard morphic renderer. Useful in cases where we want to embedd 3rd part libraries and create wrapper morphs for them.</em></p>\n\
</li>\n\
<li>\n\
<p><strong>Canvas</strong>\n\
<em>Similar to the HTML Morph yet specialized for the case where we want to render to a canvas. Provides convenience methods to access the canvas context. Useful for integrating 3rd party canvas libraries that render 2d or 3d content.</em></p>\n\
</li>\n\
<li>\n\
<p><strong>Path</strong>\n\
<em>Allows to draw SVG paths via the morph interface.</em></p>\n\
<ul>\n\
<li><em><strong>Polygon</strong></em>\n\
<em>Specialized subclass of Path where the vertices form a closed path. Also allows to clip the submorphs via its shape.</em></li>\n\
</ul>\n\
</li>\n\
</ul>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"30\" data-htmlline=\"31\">Properties</h2>\n\
<p class=\"markdown-line-marker\" data-mdline=\"31\" data-htmlline=\"32\">Morphs in <code>lively.next</code> come with a large set of properties. You can explore them in the interactive section below. They split up into what we call <em>visual properties</em> and <em>behavioral</em> properties.</p>\n\
\n\
</div>',
  position: pt(15,15)
}, part(MorphicPropertyEssay, {
  name: 'embedded 1',
  extent: pt(385,3062),
  position: pt(15,1676),
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
  extent: pt(794,153),
  submorphs: [{
  name: 'aText copy_1',
  width: undefined
}, {
  name: 'behavioral prop filter',
  submorphs: [{
  name: 'placeholder icon',
  visible: false
}]
}]
}]
}), {
  type: HTMLMorph,
  name: 'markdown 2',
  extent: pt(385,1672.8),
  fixedHeight: false,
  html: '<link type=\"text/css\" rel=\"stylesheet\" id=\"github-markdown\" href=\"/lively.ide/md/github-markdown.css\"><div class=\"markdown-body\" style=\"margin: 5px\">\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"2\" data-htmlline=\"3\">Custom Subclasses</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"4\" data-htmlline=\"6\">The previously introduced subclasses of <code>Morph</code> are just the default ones that ship with <code>lively.morphic</code>. It is always possible to create further subclasses in order to implement custom types of morphs for special purposes. In fact this has been the default way of doing things in <a href=\"https://wiki.squeak.org/squeak/morphic\" target=\"_blank\">Squeak</a> and <a href=\"https://en.wikipedia.org/wiki/Lively_Kernel\" target=\"_blank\">LivelyKernel</a>. Both LivelyKernel and the original Self implementation further had the ability to vary the behavior with <em>Traits</em> which made custom behaviors more pluggable.\n\
In <code>lively.next</code> we favor a different approach, where custom subclassing of morphs should be kept to a minimum and domain specific behavior instead be implemented via a <code>ViewModel</code> that attaches to morph-compositions and augments their behavior accordingly. We discuss this in greated detail in the <a href=\"#ViewModels\" target=\"_blank\">View Model Chapter</a>.</p>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"7\" data-htmlline=\"8\">Instantiating and using Morphs</h2>\n\
<p class=\"markdown-line-marker\" data-mdline=\"9\" data-htmlline=\"10\">Given a Morph class, we can instantiate it simply via the constructor:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Morph</span>();\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"13\" data-htmlline=\"14\">We can also pass morph properties to the constructor, like so:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">Morph</span>({ <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'foo\'</span>, <span class=\"hljs-attr\">fill</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-property\">red</span>, <span class=\"hljs-attr\">borderWidth</span>: <span class=\"hljs-number\">2</span> });\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"17\" data-htmlline=\"18\">We refer to the property object above as the <em>spec</em> of a morph. Instead of directly invoking the constructor, it is also possible to utilize the <code>morph()</code> convenience function and pass the spec object to this function in order to create the morph:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-title function_\">morph</span>({ <span class=\"hljs-attr\">type</span>: <span class=\"hljs-title class_\">Morph</span>, <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'foo\'</span>, <span class=\"hljs-attr\">fill</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-property\">red</span>, <span class=\"hljs-attr\">borderWidth</span>: <span class=\"hljs-number\">2</span>})\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"21\" data-htmlline=\"24\">Notice how we now pass the class of the morph as the type property inside the spec.\n\
If the type is just <code>Morph</code> we can also leave out the <code>type</code> property alltogether since that is the default value.\n\
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
<p class=\"markdown-line-marker\" data-mdline=\"37\" data-htmlline=\"38\">Just instantiating a morph via an object, will not make it visible. For that to happen we need to mount it into the <em>World</em>. The <em>World</em> is itself a morph that is present at all times when <code>lively.morphic</code> framework is embedded (be it a bundled application or the <code>lively.next</code>-IDE). In fact this very document you are reading is mounted inside of a <em>World</em>. So lets go ahead and call <code>aMorph.openInWorld()</code>, you will see this:</p>\n\
\n\
</div>',
  position: pt(15,4753)
}, part(InteractiveDie, {
  name: 'embedded 3',
  extent: pt(385,304.9),
  layout: new ConstraintLayout({
  lastExtent: {
    x: 385,
    y: 304.9
  },
  reactToSubmorphAnimations: false,
  submorphSettings: [["movable die 1", {
        x: "center",
        y: "center"
      }]]
}),
  position: pt(15,6441),
  submorphs: [{
  name: 'movable die 1',
  extent: pt(78.5,78.7),
  position: pt(148.5,111.4)
}]
}), {
  type: HTMLMorph,
  name: 'markdown 4',
  extent: pt(385,72),
  fixedHeight: false,
  html: '<link type=\"text/css\" rel=\"stylesheet\" id=\"github-markdown\" href=\"/lively.ide/md/github-markdown.css\"><div class=\"markdown-body\" style=\"margin: 5px\">\n\
<p class=\"markdown-line-marker\" data-mdline=\"2\" data-htmlline=\"3\">You can now go ahead and manipulate the morph above in the workspace below. Try editing the code and running it via the button:</p>\n\
\n\
</div>',
  position: pt(15,6761)
}, part(InteractiveDelay, {
  name: 'embedded 5',
  extent: pt(385,344),
  position: pt(15,6848),
  viewModel: { loader: "editor example 1" }
}), {
  type: HTMLMorph,
  name: 'markdown 6',
  extent: pt(385,2314.8),
  fixedHeight: false,
  html: '<link type=\"text/css\" rel=\"stylesheet\" id=\"github-markdown\" href=\"/lively.ide/md/github-markdown.css\"><div class=\"markdown-body\" style=\"margin: 5px\">\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"2\" data-htmlline=\"3\">Event System</h2>\n\
<p class=\"markdown-line-marker\" data-mdline=\"3\" data-htmlline=\"4\">Morphic comes with its completely custom build event system. This for multiple reasons, since the DOM Event system…</p>\n\
<ol>\n\
<li>is severely broken <em>(have you tried using onDrag?)</em>.</li>\n\
<li>does not support the same event types that we expect in morphic, for instance hovering.</li>\n\
<li>also does match the morph object in the bubbling phase, since some morphs consists of multiple different dom nodes.</li>\n\
</ol>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"10\" data-htmlline=\"11\">Halo</h2>\n\
<p class=\"markdown-line-marker\" data-mdline=\"11\" data-htmlline=\"12\">For more information on the Halo, please refer to the studio chapter.</p>\n\
<!--\n\
 - The event system in morphic consists entirely of synthesized events and a custom event dispatch.\n\
 - It uses the DOM events as entry points but from there follows an entirely custom algorithm:\n\
   - The DOM Events are captured but then a custom traversal of the morphs is started, where the event object is also a custom lively object\n\
   - Event propagation happens from the morph where the event originated up until it reaches the world morph\n\
   - Event propagation can be stopped via a `Event.stop()`\n\
   - The event object provides information about how the event location related to the scene graph made up of the morphs, as well as information about drag events such as the distance of the drag etc.\n\
- Further, there is a completely custom implementation of `blur()` and `focus()` which are not even derived from the browser events.\n\
  - Text input is implemented via a hidden dom input node which is manually focused on demand by the lively event system.\n\
  - Blur and Focus event are triggered by mouse click events on other targets as the currently focused one.\n\
  - A nice aspect about this system, is that we can have \"global\" keyboard events that do not require an input target. This is essential for implementing shortcuts.\n\
  -->\n\
<p class=\"markdown-line-marker\" data-mdline=\"26\" data-htmlline=\"34\">The event system in Morphic is a completely custom implementation on top of the native browser events.\n\
DOM-Events that originate from the rendered elements in the browser are used as entry points and from then on a completely custom dispatch is performed.<br>\n\
Theses synthesized events are bubbling from the morph they originate from upwards until they reach the world morph.\n\
During bubbling the custom event callbacks are invoked on each of the traversed morph.\n\
The event object itself carries further meta information about the targeted morph, as well as information with respect to the type of event <em>(pressed key, mouse buttons, etc…)</em>.\n\
The propagation can be terminated by invoking the <code>event.stop()</code> method on the event object that is always passed to the event handler.\n\
There are also certain events that concern the keyboard events which are not only <em>augmented</em> but rather <em>simulated</em> beind the scenes.\n\
This is implemented via a hidden dom input node which is manually focused on demand via the event system. This gives us fine grained control about the redirection of keyboard events. For instance we can make any type of morph receive keyboard events as well as retrieve keyboard events even if no element is currently in focus (this is useful for the implementation of keyboard shortcuts).</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"35\" data-htmlline=\"36\">Classic Events</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"36\" data-htmlline=\"37\">There is a set of basic dom events which behave more or less the same as the do inside the dom:</p>\n\
<ul>\n\
<li><strong>onMouse (Down/Up/Move/Wheel)</strong> <em>In response to the mouse buttons getting pressed.</em></li>\n\
<li><strong>onKey (Up/Down)</strong> <em>In response to a key on the keyboard being pressed.</em></li>\n\
<li><strong>onContextMenu</strong> <em>In response to the HTML context menu event. Is used to create custom morph based menus instead.</em></li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"40\" data-htmlline=\"41\">Customized Events</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"41\" data-htmlline=\"42\">There is a set of events that provides a different behavior to the native dom version. One of them is the drag event, which compared to the HTML event further provides more <em>movement specific</em> meta information to the morph as well as specific callbacks marking the <em>start</em> and <em>end</em> of the drag process:</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/dragging.gif\" alt=\"\"><figcaption>An example of a morph being dragged across a scene</figcaption></figure>\n\
<ul>\n\
<li><strong>onDrag</strong> <em>Invoked continously while a morph is being dragged via touch gesture or mouse press and move. On each update it provides a drag delta that tells us about the current drag speed.</em></li>\n\
<li><strong>onDragStart</strong> <em>Invoked once at the start of the drag process before onDrag is getting called repeatedly.</em></li>\n\
<li><strong>onDragEnd</strong> <em>Invoked once at the end of the drag process.</em></li>\n\
</ul>\n\
<p class=\"markdown-line-marker\" data-mdline=\"48\" data-htmlline=\"49\">There are also completely synthesized versions of the focus and blur events. For one, unlike the browser, they cover all types of morphs, including the base morph. This is different to HTML which reserves the focus and blur events only for a certain set of elements of the text and input types.</p>\n\
\n\
</div>',
  position: pt(15,7207)
}, part(FocusBlurDiagram, {
  name: 'embedded 7',
  extent: pt(385,353.3),
  position: pt(15,9537),
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
  extent: pt(385,3725.3),
  fixedHeight: false,
  html: '<link type=\"text/css\" rel=\"stylesheet\" id=\"github-markdown\" href=\"/lively.ide/md/github-markdown.css\"><div class=\"markdown-body\" style=\"margin: 5px\">\n\
<ul>\n\
<li><strong>onFocus</strong> <em>Invoked if we call <code>focus()</code> on a morph where the <code>focusable</code> property is set to <code>true</code>. For text morphs the <code>focus()</code> function is called by default on a <code>mousedown</code> event.</em></li>\n\
<li><strong>onBlur</strong> <em>Invoked on a currently focused morph if <code>focus()</code> is called on another one.</em></li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"5\" data-htmlline=\"6\">Custom Events</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"6\" data-htmlline=\"7\">Further supports a custom set of purely morphic methods:</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/grabbing.gif\" alt=\"\"><figcaption>An example of a morph being grabbed between morphs</figcaption></figure>\n\
<ul>\n\
<li><strong>onGrab</strong> <em>If the morph is grabbable or has been grabbed via the halo, this callback is invoked once the morph is removed from its parent.</em></li>\n\
<li><strong>onDrop</strong> <em>If the morph was grabbed and is now getting dropped onto another morph, this callback is invoked.</em></li>\n\
<li><strong>onBeingDroppedOn</strong> <em>Similar to onDrop, but is invoked <em>right before</em> the drop happens.</em></li>\n\
<li><strong>onHoverIn</strong> <em>Triggered when the mouse cursor enters the bounds of the morph.</em></li>\n\
<li><strong>onHoverOut</strong> <em>Triggered when the mouse cursor exits the morph bounds.</em></li>\n\
<li><strong>onDropHoverIn</strong> <em>Trigged when <em>onHoverIn</em> is invoked while at the same time a morph is being grabbed by the user. This is useful to implement logic for UIs that respond to drag and drop gestures.</em></li>\n\
<li><strong>onDropHoverOut</strong> <em>Triggered when <em>onHoverOut</em> is invoked while a grab is in process.</em></li>\n\
<li><strong>onDropHoverUpdate</strong> <em>Triggered while a morph is being grabbed and the cursor is hovering over a particular morph.</em></li>\n\
</ul>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"18\" data-htmlline=\"19\">Component System</h2>\n\
<p class=\"markdown-line-marker\" data-mdline=\"20\" data-htmlline=\"22\">The component system in <em>lively.next</em> really presents one of the strongest diversions from the more vanilla implementations of Morphic. Some would argue it even turns <em>lively.next</em>’s Morphic into something entirely different.\n\
However the components are designed as a superset to the underlying Morphic system we have described so far. So one can still write all of the applications in a flavor that is entirely <em>pure</em> Morphic. It’s just arguably more difficult to write applications in such a way that leverages the benefits of direct manipulation for both developers and <em>non-programmers</em> (i.e. designers).</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"23\" data-htmlline=\"24\">We designed the component system in a way that tries to achieve the following:</p>\n\
<ol>\n\
<li>\n\
<p>It should keep visual and behavior implementation separate. In particular this allows us to develop GUIs with their behavioral aspects disabled, and vice versa. This is especially useful in a self sustained live development environment such as lively.next. It is our experience that keeping behavior too closely tied to the GUI can complicate implementation and maintenance of applications by a lot.</p>\n\
</li>\n\
<li>\n\
<p>It should support modularity, which allows parts (visual as well as behavioral) to be composed and reused with ease. Basically we try to keep whats nice about the Partsbin and reconcile it with the world of mainstream development where everything revolves around source code and modules.</p>\n\
</li>\n\
<li>\n\
<p>It should support evolving the GUI in a purely visual way, that does not break modularity of the visual and behavioral parts of the system. This entails enhancing the existing Morphic Halo system into something that is closer to current state of the art design applications like Adobe XD or Figma.</p>\n\
</li>\n\
</ol>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"31\" data-htmlline=\"32\">Component Definitions</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"33\" data-htmlline=\"35\">In order to define a component we need to specify its structure and appearance. This is done by employing the <code>component</code> function, which will return us a component that can in turn be instantiated as a morph. As you will see, the signature of <code>component</code> resembles the one of <code>morph</code> quite closely and this is by design.\n\
To get started let us look at a simple example that illustrates the point. We start with a simple component that represents a die with its face showing 4:</p>\n\
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
<p class=\"markdown-line-marker\" data-mdline=\"66\" data-htmlline=\"67\">As you can see, the <code>component()</code> function is invoked similarily to the already introduced <code>morph()</code> function. We are passing properties and recursively define submorphs in the same manner down the line. Just as in <code>morph()</code> if a property is not mentioned it is assumed to take on its default value. We refer to this object as a <em>spec</em>.</p>\n\
<blockquote>\n\
<p>⚠️ <strong>Warning</strong>\n\
It is important that the names of each morph in a component are unique! If no name is specified,\n\
the system may provide an auto generated one. In the future we are experimenting with implementations\n\
where we only require for siblings to have unique names, but for now it is imperative a morph name\n\
is unique within the entire component definition. Unique names are also important for attaching behavior\n\
to elements once we introduce the viewmodels.</p>\n\
</blockquote>\n\
<p class=\"markdown-line-marker\" data-mdline=\"75\" data-htmlline=\"76\">We can now instantiate the <code>Die</code> component with the help of the <code>part()</code> function:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-title function_\">part</span>(<span class=\"hljs-title class_\">Die</span>)\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"81\" data-htmlline=\"82\">Which will yield a morph that looks like this:</p>\n\
\n\
</div>',
  position: pt(15,9905)
}, part(WrappedDie, {
  name: 'embedded 9',
  extent: pt(385,304.1),
  position: pt(15,13646)
}), {
  type: HTMLMorph,
  name: 'markdown 10',
  extent: pt(385,636.1),
  fixedHeight: false,
  html: '<link type=\"text/css\" rel=\"stylesheet\" id=\"github-markdown\" href=\"/lively.ide/md/github-markdown.css\"><div class=\"markdown-body\" style=\"margin: 5px\">\n\
<p class=\"markdown-line-marker\" data-mdline=\"2\" data-htmlline=\"3\">Now, we can go ahead and create other components that now in turn re-use this component as a part of their own definition. This also happens with the help of the <code>part()</code> function. Let’s for instance define a component that resembles a poker table:</p>\n\
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
<p class=\"markdown-line-marker\" data-mdline=\"26\" data-htmlline=\"27\">The resulting morph should look something like this:</p>\n\
\n\
</div>',
  position: pt(15,13965)
}, part(WrappedPokerTable, {
  name: 'embedded 11',
  extent: pt(385,453.8),
  position: pt(15,14616)
}), {
  type: HTMLMorph,
  name: 'markdown 12',
  extent: pt(385,4359.1),
  fixedHeight: false,
  html: '<link type=\"text/css\" rel=\"stylesheet\" id=\"github-markdown\" href=\"/lively.ide/md/github-markdown.css\"><div class=\"markdown-body\" style=\"margin: 5px\">\n\
<p class=\"markdown-line-marker\" data-mdline=\"2\" data-htmlline=\"3\">As you can see, by invoking the part calls within the submorph array we reused the component definition of <code>Die</code> within the component definition of <code>PokerTable</code>. Also notice, how in the  <code>part</code> calls we have passed some properties to adjust the properties of each die to place them at unique positions (and varying degrees of rotation). If we skipped these overrides, all dice would just sit on top of each other at the same position.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"4\" data-htmlline=\"5\">Component Derivations</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"6\" data-htmlline=\"8\">While reusing component definitions to compose new components is useful, we also want to be able to expand or customize existing component definitions to suit our needs. For instance we may want to have different color themes of the same system button in order to match different styles of tools.\n\
In order to archieve that, the component system allows to derive a component similar to subclassing a class:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\">\n\
<span class=\"hljs-keyword\">const</span> goldGradient =  <span class=\"hljs-keyword\">new</span> <span class=\"hljs-title class_\">LinearGradient</span>({\n\
  <span class=\"hljs-attr\">stops</span>: [{ <span class=\"hljs-attr\">offset</span>: <span class=\"hljs-number\">0</span>, <span class=\"hljs-attr\">color</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-title function_\">rgb</span>(<span class=\"hljs-number\">244</span>, <span class=\"hljs-number\">171</span>, <span class=\"hljs-number\">4</span>) }, { <span class=\"hljs-attr\">offset</span>: <span class=\"hljs-number\">1</span>, <span class=\"hljs-attr\">color</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-title function_\">rgb</span>(<span class=\"hljs-number\">246</span>, <span class=\"hljs-number\">138</span>, <span class=\"hljs-number\">9</span>) }],\n\
  <span class=\"hljs-attr\">vector</span>: <span class=\"hljs-title function_\">rect</span>(<span class=\"hljs-number\">0.49999999999999994</span>, <span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">6.123233995736766e-17</span>, <span class=\"hljs-number\">1</span>)\n\
});\n\
\n\
<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">GoldenDie</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">Die</span>, {\n\
  <span class=\"hljs-attr\">fill</span>: <span class=\"hljs-title class_\">Color</span>.<span class=\"hljs-property\">black</span>,\n\
  <span class=\"hljs-attr\">submorphs</span>: [{\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye\'</span>,\n\
    <span class=\"hljs-attr\">fill</span>: goldGradient\n\
  }, {\n\
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
<p class=\"markdown-line-marker\" data-mdline=\"34\" data-htmlline=\"36\">The first argument to <code>component()</code> is now the component that we are using to derive a new component definition. When thinking about the component definition as a class, we can think about this first argument as the superclass. Internally we refer to this component as the component’s <em>parent</em>.\n\
Looking further, we notice the structure of the spec which looks quite similar to the one we passed initially to <code>component</code> when we were defining <code>Die</code>. However this time, the properties here only define the <em>overridden</em> properties for each morph with respect to the way they were defined in the parent component. You can think of the resulting component definition as a <em>deep merge</em> of the spec found in the parent and the spec provided here in the derived component. Since this component derivation adjusts the fill of various parts of the die, the resulting component looks like this:</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/gold%20die.png\" alt=\"\"></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"39\" data-htmlline=\"40\">For the well trained eye, it should become apparent that component definitions constitue something others refer to as <em>nested classes</em>. However instead of utilizing the native javascript class syntax we opted for this function notation for two reasons:</p>\n\
<ol>\n\
<li>It is slightly less verbose than class declarations</li>\n\
<li>The property dispatch happens not as a simple single dispatch (as is the norm in javascript classes) but constitutes a multiple dispatch taking into account the <strong>component itself</strong>, the <strong>component’s parent</strong>, the <strong>component’s states</strong> and also the <strong>state of the morph</strong> being styled. <em>(More on that later)</em>.</li>\n\
</ol>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"43\" data-htmlline=\"44\">Altering Structure</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"44\" data-htmlline=\"48\">Obviously, when deriving a component from a different one, we often want to adjust aspects about its structure. For instance we may want to remove certain morphs from the component, that are not useful for the current component. We also may want to add new morphs which are needed to implement a different set of functionality.\n\
Altering structure can not easily be expressed with the property overriding mechanism, which is why a set of three convenience functions is provided: <code>add()</code>, <code>remove()</code> and <code>replace()</code>.\n\
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
<p class=\"markdown-line-marker\" data-mdline=\"60\" data-htmlline=\"61\">In case we want to insert a new morph at a particular index in the submorphs array, we can pass the name of the proceeding sibling as a second argument like so:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">FiveDie</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">Die</span>, {\n\
  <span class=\"hljs-attr\">submorphs</span>: [<span class=\"hljs-title function_\">add</span>({\n\
    <span class=\"hljs-attr\">type</span>: <span class=\"hljs-title class_\">Ellipse</span>,\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye5\'</span>,\n\
    <span class=\"hljs-attr\">extent</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">15.9</span>, <span class=\"hljs-number\">16.6</span>),\n\
    <span class=\"hljs-attr\">position</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">30.3</span>,<span class=\"hljs-number\">29.3</span>)\n\
  }), <span class=\"hljs-string\">\'eye\'</span>]\n\
});\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"73\" data-htmlline=\"74\">In turn creating a die that shows the three face requires removing and adjusting certain eyes:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">ThreeDie</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">Die</span>, {\n\
  <span class=\"hljs-attr\">submorphs</span>: [\n\
    <span class=\"hljs-title function_\">without</span>(<span class=\"hljs-string\">\'eye2\'</span>), <span class=\"hljs-comment\">// we remove one eye by referencing its name</span>\n\
    {\n\
      <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye1\'</span>,\n\
      <span class=\"hljs-attr\">position</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">30.8</span>,<span class=\"hljs-number\">31</span>) <span class=\"hljs-comment\">// and adjust the position of another one to fit at the center</span>\n\
  }]\n\
});\n\
</code></pre>\n\
<blockquote>\n\
<p>⚠️ <strong>Warning</strong>\n\
As of the point of this writing, <code>replace</code> is not yet implemented.</p>\n\
</blockquote>\n\
<p class=\"markdown-line-marker\" data-mdline=\"89\" data-htmlline=\"91\">In some rare cases, adding and removing is not enough, and we want to replace an element with a different one. This is for instance useful, if we decide to alter the input method for a particular value inside a form. Here we want the morph of the name to be preserved but just replace its structure and styling.\n\
In the case of the <code>PokerTable</code> we can replace some of the dice with a new <code>D12</code> (a 12 sided dice) like so:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">DiversePokerTable</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">PokerTable</span>, {\n\
  <span class=\"hljs-attr\">submorphs</span>: [\n\
    <span class=\"hljs-title function_\">replace</span>(<span class=\"hljs-string\">\'die2\'</span>, <span class=\"hljs-title function_\">part</span>(<span class=\"hljs-title class_\">Dodecahedron</span>, {\n\
      <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'die2\'</span>,\n\
      <span class=\"hljs-attr\">position</span>: <span class=\"hljs-title function_\">pt</span>(<span class=\"hljs-number\">375.5</span>,<span class=\"hljs-number\">90.1</span>)\n\
    })\n\
   ) \n\
  ]\n\
});\n\
</code></pre>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"104\" data-htmlline=\"105\">Overriding Masters</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"106\" data-htmlline=\"108\">In order to adjust morphs in derived components its often simpler to <em>reassign</em> a different master component to style a particular morph rather then simply overriding each property of a morph by hand.\n\
For instance, going back to our poker table example, we may want to apply different styles to some of the dice in a derived component like so:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">DiversePokerTable</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">PokerTable</span>, {\n\
  <span class=\"hljs-attr\">submorphs</span>: [\n\
    { <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'die1\'</span>, <span class=\"hljs-attr\">master</span>: <span class=\"hljs-title class_\">EmeraldDie</span> }\n\
    { <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'die2\'</span>, <span class=\"hljs-attr\">master</span>: <span class=\"hljs-title class_\">GoldenDie</span> },\n\
   ) \n\
  ]\n\
});\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"119\" data-htmlline=\"120\">Notice that in the resulting scene, the dice have changed their styling:</p>\n\
\n\
</div>',
  position: pt(15,15084)
}, part(WrappedDiversePokerTable, {
  name: 'embedded 13',
  extent: pt(385,465.7),
  position: pt(15,19459)
}), {
  type: HTMLMorph,
  name: 'markdown 14',
  extent: pt(385,9364.6),
  fixedHeight: false,
  html: '<link type=\"text/css\" rel=\"stylesheet\" id=\"github-markdown\" href=\"/lively.ide/md/github-markdown.css\"><div class=\"markdown-body\" style=\"margin: 5px\">\n\
<p class=\"markdown-line-marker\" data-mdline=\"2\" data-htmlline=\"3\">Also notice that some properties have remained untouched, this includes properties like <code>rotation</code> and <code>position</code>. These are <em>transform properties</em> and can not be overridden via assigning a new master. This can only be done by overriding them explicitly within the component definition.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"4\" data-htmlline=\"6\">The application of a master component via the master property is <em>recursive</em>, which means that any of the submorphs that  may be styled by a master are also getting their masters overridden in turn if the <em>new</em> master defines them to be different.\n\
In the example of the dice for instance, imagine a scenario where each eye was itself derived from a component. If <code>GoldenDie</code> was defined such that it overrides each of the eyes with a different master component, then the application of <code>GoldenDie</code> to <code>\'die2\'</code> would also recursively apply the adjusted masters to each of its eyes.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"7\" data-htmlline=\"8\">Component States</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"9\" data-htmlline=\"10\">So far we have just talked about using master components to define and inherit structure <em>(component derivations)</em> and applying styles <em>(overriding masters)</em>. We will now turn to some master configurations that allow components to also be applied <em>dynamically</em>.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"11\" data-htmlline=\"12\">Note, that for one component definition only one component state can be active at a time. There is not parallel application of two (or more) components via multiple component states where the result will be merged in some way. While this semantic is theoretically possible, we refrained from doing so in order to avoid overly complex behavior and hard to trace unintended styling effects.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"13\" data-htmlline=\"14\">Event States</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"15\" data-htmlline=\"16\">The most straight forward dynamic application of master components is in the case of morphic events. For this, the component system supports defining component to be applied in case of a <em>click</em> or <em>hover</em> event. This is achieved by overriding the <code>master</code> property just as we did in the previoust section. However this time, we pass a spec object instead of a component reference like so:</p>\n\
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
<p class=\"markdown-line-marker\" data-mdline=\"53\" data-htmlline=\"54\">In scenarios where we still want to override the master statically but also want to attach dynamic event master styles, we can utilize the <code>auto</code> field which will apply the specified master in just the same way as was the case when we directly overwrote the master in the above section. However with the additional dynamic master styles stepping in when applicable:</p>\n\
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
<h4 class=\"markdown-line-marker\" data-mdline=\"80\" data-htmlline=\"81\">Color Scheme States</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"82\" data-htmlline=\"85\">In lively.next, we are able to specify a preferred theme for dark or bright environments (i.e. <em>dark mode</em> and <em>light mode</em>).\n\
This option can be found in <code>lively.morphic/config.js</code> and can be overridden in the <code>localconfig.js</code>.\n\
By default, lively assumes the preferred theme as dictated by the system.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"86\" data-htmlline=\"87\">In order to easily manage the appearance of a morph in response to this setting, component definitions support custom states for both <code>dark</code> and <code>light</code> which match the preferred theme:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">DynamicDie</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">Die</span>, {\n\
  <span class=\"hljs-attr\">master</span>: {\n\
    <span class=\"hljs-attr\">light</span>: <span class=\"hljs-title class_\">Die</span>, <span class=\"hljs-comment\">// not really needed here but illustrates the point</span>\n\
    <span class=\"hljs-attr\">dark</span>: <span class=\"hljs-title class_\">GoldenDie</span>\n\
  }\n\
});\n\
</code></pre>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"97\" data-htmlline=\"98\">Breakpoints</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"99\" data-htmlline=\"102\">When implementing a responsive design for a website or application we often want to select between different master component based on the extent of a morph. Based on the viewport size, a morph warrants entirely different presentations of contents.\n\
For instance a morph that implements a link to a blogpost should have different font sizes, layout settings and displayed elements depending on the size it is alottet.\n\
This is where <em>breakpoint states</em> come in handy, since they allow us to define right withint the component definition itself at what height(s) or width(s) of the morph which component(s) are supposed to be applied.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"103\" data-htmlline=\"104\">An example for we can have a poker table that depending on its size, shows varrying amounts of dice:</p>\n\
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
<p class=\"markdown-line-marker\" data-mdline=\"137\" data-htmlline=\"138\">The resulting behavior looks like this:</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/responsive-poker-table.gif\" alt=\"\"></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"141\" data-htmlline=\"142\">Note that the breakpoints from any of the parent components are overridden if present and are not getting considered when the style is applied to the morph.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"143\" data-htmlline=\"144\">Custom States</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"145\" data-htmlline=\"146\">Aside from the hard wired event states, it is often nessecary to define some domain specific component states which can only be triggered via code execution. Examples for this include different styles to distinguish between an <em>active</em> or <em>inactive</em> states of GUI elements. Other examples include <em>selection styles</em> that add an accent to a particular element or even <em>mode styles</em> that allow to cycle between different states such as <em>warning</em>,<em>error</em> or others.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"147\" data-htmlline=\"148\">In order to define a custom style, we again invoke the <code>master</code> property as in the previous example, yet this time we add another field <code>states</code> to which we pass the definition of the custom states:</p>\n\
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
<p class=\"markdown-line-marker\" data-mdline=\"173\" data-htmlline=\"174\">We can trigger the custom state, by calling <code>setState()</code> on the master object like so:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\"><span class=\"hljs-keyword\">const</span> table = <span class=\"hljs-title function_\">part</span>(<span class=\"hljs-title class_\">InteractivePokertable</span>); <span class=\"hljs-comment\">// instantiate the table</span>\n\
table.<span class=\"hljs-property\">master</span>.<span class=\"hljs-title function_\">setState</span>(<span class=\"hljs-string\">\'empty\'</span>); <span class=\"hljs-comment\">// applies the empty style</span>\n\
table.<span class=\"hljs-property\">master</span>.<span class=\"hljs-title function_\">setState</span>(<span class=\"hljs-literal\">null</span>); <span class=\"hljs-comment\">// reverts back to the default styling</span>\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"181\" data-htmlline=\"182\">Note that just as the breakpoints, the custom state object does not get merged in case you override the custom states from one of the parent components. If for instance the <code>PokerTable</code> in the above example would itself define a custom component state called <code>foo</code> setting <code>table.master.setState(\'foo\')</code> would have not effect since <code>foo</code> is not mentioned in the component states of <code>InteractivePokerTable</code>.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"183\" data-htmlline=\"184\">Style Palettes</h3>\n\
<blockquote>\n\
<p>⚠️ <strong>Warning</strong>\n\
As of the point of this writing, style systems have not been implemented yet.</p>\n\
</blockquote>\n\
<p class=\"markdown-line-marker\" data-mdline=\"188\" data-htmlline=\"189\">Sometimes we want to assign the value of a particular properly a certain role that it plays in the grand scheme of a design. For instance oftentimes, a designer selects a particular color for an element to be <em>primary</em>, <em>secondary</em> or <em>accent</em> in nature. This allows for an easier swapping of color designs later in the design process.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"190\" data-htmlline=\"191\">In <code>lively.next</code> supports this management of style systems via <em>style palettes</em>. A style palette can be created for different kinds of properties. These includes: <em>color properties</em>, <em>layout properties</em>, <em>text style properties</em> and <em>effect properties</em> such as <em>drop shadow</em> and <em>opacity</em>.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"192\" data-htmlline=\"193\">For instance, we can rewrite our earlier example with where we defined <code>GoldenDie</code> as follows:</p>\n\
<pre><code class=\"language-javascript hljs\" data-highlighted=\"yes\">\n\
<span class=\"hljs-keyword\">const</span> <span class=\"hljs-title class_\">GoldenDie</span> = <span class=\"hljs-title function_\">component</span>(<span class=\"hljs-title class_\">Die</span>, {\n\
  <span class=\"hljs-attr\">fill</span>: palette.<span class=\"hljs-property\">color</span>.<span class=\"hljs-property\">dark</span>,\n\
  <span class=\"hljs-attr\">submorphs</span>: [{\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye\'</span>,\n\
    <span class=\"hljs-attr\">fill</span>: palette.<span class=\"hljs-property\">color</span>.<span class=\"hljs-property\">gold</span>\n\
  }, {\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye1\'</span>,\n\
    <span class=\"hljs-attr\">fill</span>: palette.<span class=\"hljs-property\">color</span>.<span class=\"hljs-property\">gold</span>\n\
  }, {\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye2\'</span>,\n\
    <span class=\"hljs-attr\">fill</span>: palette.<span class=\"hljs-property\">color</span>.<span class=\"hljs-property\">fold</span>\n\
  }, {\n\
    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">\'eye3\'</span>,\n\
    <span class=\"hljs-attr\">fill</span>: palette.<span class=\"hljs-property\">color</span>.<span class=\"hljs-property\">gold</span>\n\
  }]\n\
});\n\
\n\
</code></pre>\n\
<!--\n\
### Template Masters\n\
\n\
> ⚠️ **Warning**\n\
> As of the point of this writing, template masters are not yet supported. For the time being\n\
> we solve this by passing parametrized masters as viewModel properties to the viewModel.\n\
\n\
 - Sometimes it does not make sense to stick to one master for a part of a component\n\
 - We then want to parametrize the component from the outside in a convenient way\n\
 - The parametrization should work nicely in a programmatic way as well as via tool support\n\
 - Code sample:\n\
 \n\
```javascript\n\
const Alice = component({\n\
   submorphs: [\n\
     {\n\
       name: \'bob\',\n\
       master: template(\'masterForBob\', Bob)\n\
     }\n\
   ]\n\
})\n\
\n\
// which can then be controlled when creating an instance like this:\n\
\n\
part(Alice, { masterForBob: Foo });\n\
\n\
// Or adjust in component definitions:\n\
\n\
const Linus = component({\n\
   submorphs: [\n\
     part(Alice, { masterForBob: Bar }))\n\
   ]\n\
});\n\
\n\
```\n\
-->\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"252\" data-htmlline=\"253\">Viewmodels</h3>\n\
<ul>\n\
<li>Separates the behavior from the morphs, making behavior “pluggable”\n\
<ul>\n\
<li>Since behavior just attached to the morphs from the outside, it is no longer tied to the component definitions</li>\n\
<li>Behavior can be reused across multiple different designs for the same things (think of calculator designs, clock faces etc…)</li>\n\
<li>Behavior can be toggled at runtime. For more, see the controls for <em>Editing Components</em> in the <strong>Studio Chapter</strong>.</li>\n\
</ul>\n\
</li>\n\
<li>Allow behavior to be disabled dynamically which allows to switch between an <em>Interactive Mode</em> (useful for verifying correct behavior) and <em>Designer Mode</em> where the behavior is disabled in order not to interfere with manipulation of the GUI.</li>\n\
<li>Define bindings in order to attach behavior to parts of a component declaratively</li>\n\
<li>A model is reponsible for the morph and all its descendants until one of the submorphs carries itself a viewmodel\n\
<ul>\n\
<li>In that way a component scope is defined.</li>\n\
</ul>\n\
</li>\n\
<li>Properties or methods can not be accessed from the morph directly, unless they are exposed by the model via the <code>expose</code> property.\n\
<ul>\n\
<li>In the future we will also support the <code>@expose</code> decorator that can be attached to the method or property declaration.</li>\n\
</ul>\n\
</li>\n\
<li>Bindings are static properties on the viewmodel classes, which define wich part of the morph the model is attached to triggers which actions/methods inside the model.\n\
<ul>\n\
<li>Declarative way to look at how behavior is “wired up”</li>\n\
<li>Bindings are initialized when the model is attached to the morph and whenever the submorphs within the scope of the model are added or removed.</li>\n\
<li>Can only access members or signals that are defined or signaled on the morph. Access of the model methods or properties directly is not allowed. Exposed methods or properties are OK.</li>\n\
</ul>\n\
</li>\n\
<li>Each binding id defines as follows: <code>{ target?, signal, handler, converter?, updater?, varMapping? }</code>\n\
<ul>\n\
<li><em><strong>target</strong></em>: Defines which part of the morph the binding should hold on to. If target is ommitted, target is assumed to be the morph the model is directly attached to.</li>\n\
<li><em><strong>signal</strong></em>: Defines the method or signal the binding should react to.</li>\n\
<li><em><strong>handler</strong></em>: Defines the method that is called in response to the binding getting triggered. This can be either the name of the method or closure passed directly.</li>\n\
<li><em><strong>converter</strong></em>: An optional function that can transform the value passed to the signal or method. This is the same as the converter from <code>connect()</code>.</li>\n\
<li><em><strong>updater</strong></em>: An optional function that allows the user to fully control the way the handler is called. This is the same as the updater from <code>connect()</code>.</li>\n\
<li><em><strong>varMapping</strong></em>: Both <code>converter</code> and <code>updater</code> support the provision of the function as a string. In this case it is useful to have a varMapping that will ensure the closures are properly initialized.</li>\n\
</ul>\n\
</li>\n\
<li>Further a viewmodel has various callbacks, that subclasses can use to control the lifecycle updates of the viewmodel accordingly:</li>\n\
</ul>\n\
<blockquote>\n\
<p>⚠️ <strong>Warning</strong>\n\
The API of the viewmodels is subject to change in the future, this section will be updated accordingly.</p>\n\
</blockquote>\n\
<ul>\n\
<li><code>onRefresh(propName)</code>: Called whenever a property in the model is changed. This is useful for performing view updates in response to model changes that we can no anticipate via bindings.</li>\n\
<li><code>viewDidLoad()</code>: Called once when the model is attached to the view. This is similar to <code>onLoad()</code> but unlike the latter is only called when the entire view is ready not only the model itself is initialized.</li>\n\
<li><code>withoutBindingsDo(cb)</code>: Allows the code in the callback function to operate on the view without triggering the bindings. This prevents updated loops caused by backpropagation.</li>\n\
</ul>\n\
\n\
</div>',
  position: pt(15,19939)
}]
}]
});



export { morphic }