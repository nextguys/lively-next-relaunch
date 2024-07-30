import { part, component, TilingLayout } from "lively.morphic/index.js";
import { pt, rect } from "lively.graphics/geometry-2d.js";
import { HTMLMorph } from "lively.morphic/html-morph.js";
import { InteractiveDelay } from "./examples.cp.js";
import { Color } from "lively.graphics/color.js";
const studio = component({
  name: 'aMarkdownPreviewMorph',
  extent: pt(420,34909),
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
  extent: pt(420,34909),
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
      }]],
  spacing: 15
}),
  submorphs: [{
  type: HTMLMorph,
  name: 'markdown 0',
  extent: pt(390,29967.8),
  fixedHeight: false,
  html: '<div class=\"markdown-body\" style=\"margin: 5px\">\n\
<p class=\"markdown-line-marker\" data-mdline=\"0\" data-htmlline=\"2\">Generally speaking, <code>lively.next</code> presents itself as a desktop OS running inside the browser. It comes with all of the standard elements from these kinds of systems, such as a desktop, mouse, context menus, menu bars and windows.\n\
Given the fact that these things very essentially invented in Smalltalk and <code>lively.next</code> regards itself as a descendant of such systems this should not be surprising.</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/lively-desktop.png\" alt=\"\" style=\"max-width:800px\"><figcaption>A <code>lively.next</code> instance showcasing various tools.</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"5\" data-htmlline=\"6\">In the following we will outline in detail the various different UI elements and tools that <code>lively.next</code> comes with, how they interact, how you are supposed to use them, and which tools may be introduced in the near future.</p>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"7\" data-htmlline=\"8\">Top Bar</h2>\n\
<p class=\"markdown-line-marker\" data-mdline=\"9\" data-htmlline=\"10\">The top bar is floating on top of the desktop at all times, providing the user with a variety of shortcuts for important actions and modes implemented in the system.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"11\" data-htmlline=\"12\">Save Button</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"13\" data-htmlline=\"14\">Allows the user to save the current project or playground. Apart from the default <em>click and save</em> functionality, a variety of other saving modes can be triggered via the drop down menu. For more details on this button and its capability, please refer to our introduction into working with <a href=\"#documentation/projects\" target=\"_blank\"><code>lively.project</code></a>. When working with <code>lively.project</code>s, the dropdown also allows to make various changes to the settings of a project.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"15\" data-htmlline=\"16\">Halo and Interaction Mode</h3>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/halo-mode.png\" alt=\"\" style=\"max-width:200px\"></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"19\" data-htmlline=\"22\">When working with designs or applications, there are various expectations for how the mouse cursor should behave.\n\
During the implementation or testing of an application, we want the cursor to function as it would for an end user interacting with the user interface.\n\
This behavior is referred to as <em>interactive mode</em> because it facilitates user interaction.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"23\" data-htmlline=\"26\">However, when designing an application or crafting a user interface, we prioritize the easy selection and manipulation of morphs without interference from interactive behaviors.\n\
In line with other Morphic implementations, selecting a morph to activate resize handles, property manipulation, or dragging is known as invoking a <em>Halo</em>.\n\
The halo can be activated via <em><strong>CMD-(left click)</strong></em> when in interactive mode.</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/summon-halo.gif\" alt=\"\" style=\"max-width:200px\"><figcaption>Depiction of a halo getting summoned on a morph.</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"29\" data-htmlline=\"30\">To propagate the selection to the enclosing morph, one simply needs to meta click on the halo again, successively propagating the halo upwards until reaching the world level, at which point the halo selection is discarded.</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/propagate-halo.gif\" alt=\"\" style=\"max-width:200px\"><figcaption>The halo selection can be propagated up a morph’s owner chain.</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"33\" data-htmlline=\"34\">For convenience, users can enter halo mode, where a simple left click is sufficient to summon halos and on hovering, the boundaries of the hovered morph are displayed. This makes it easy to navigate a complex user interface and select the precise morph of interest.</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/hover-halo.gif\" alt=\"\" style=\"max-width:200px\"><figcaption>Selection targets are displayed when in Halo mode.</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"37\" data-htmlline=\"38\">In the top bar, the cursor mode button displays either a cursor in <em>halo mode</em> or a hand in <em>interactive mode</em>. Users can switch between these modes via a drop-down menu invoked by the caret next to the cursor mode button.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"39\" data-htmlline=\"40\">Halo Controls</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"41\" data-htmlline=\"42\">You may have noticed that once the halo is summoned, it displays a bunch of controls surrounding the selected morph. Let’s go over each of these briefly and explain what they allow the user to do:</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"43\" data-htmlline=\"44\">Resize Handles</h4>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/resize-halo.gif\" alt=\"\" style=\"max-width:200px\"><figcaption>Resizing an object via the halo.</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"47\" data-htmlline=\"48\">Allows the user to resize the selected object. Note, that you can also grab the sides of the halo in order to adjust the width or height in isolation.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"49\" data-htmlline=\"50\">Holding down the <em><strong>Shift-key</strong></em> while dragging one of the corners will lock the current proportion of the morph and adjust the extent proportionally.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"51\" data-htmlline=\"52\">When resizing, the halo will automatically display visual guides (the yellow lines) that indicate how the center and bounds of the resized morph relate to its surrounding morphs. If you hold down the <em><strong>Ctrl-key</strong></em> during resizing the morph will snap to these guides to make aligning easier.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"53\" data-htmlline=\"54\">Name Tag</h4>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/rename-halo.gif\" alt=\"\" style=\"max-width:200px\"><figcaption>Changing the name of an object.</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"57\" data-htmlline=\"58\">Displays the name of the selected morph and also allows the user to edit and change the name. Names are particularly important in <code>lively.next</code>, since they later on play key roles when attaching behavior to controls in a user interface.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"59\" data-htmlline=\"60\">Rotation / Scale Control</h4>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/rotate-halo.gif\" alt=\"\" style=\"max-width:200px\"><figcaption>Rotating via halo</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"63\" data-htmlline=\"65\">Allows to control the rotation as well as the scale factor of the selected morph.\n\
By default dragging the handle will adjust the rotation like illustrated above.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"66\" data-htmlline=\"67\">However holding down the <em><strong>Shift-key</strong></em> will change the halo to manipulate the scale property. Note, how the icon of the handle changes in response to the shift key being pressed:</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/scale-halo.gif\" alt=\"\" style=\"max-width:200px\"><figcaption>Scaling via halo</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"70\" data-htmlline=\"71\">Scaling an morph in the world this way is disabled when the world zoom is enabled. This is because the world zoom operates by scaling each of the morphs inside the world automatically. The world zoom is explained in more detail in the <strong>World Zoom Section</strong>.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"72\" data-htmlline=\"73\">Declare / Revoke Component</h4>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/component_halo.png\" alt=\"\" style=\"max-width:80px\"><figcaption>The “component” halo</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"76\" data-htmlline=\"77\">Allows to turn a selected morph into a <strong>component definition</strong> or alternatively also revoke a component (i.e. remove the component and its definition). For more information about components please refer to our <a href=\"#documentation/morphic\" target=\"_blank\">introduction to <code>lively.morphic</code> and components</a>.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"78\" data-htmlline=\"79\">Copy</h4>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/copy-halo.gif\" alt=\"\" style=\"max-width:200px\"><figcaption>Copying a morph via the halo.</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"82\" data-htmlline=\"84\">Holding and dragging this control will copy the morph instance at hand and prepare the cursor to drop the new (copied) instance on a new target.\n\
Note that if this is applied to a component, it will <strong>not</strong> copy the component but rather create a new morph derived from that component (aka an <em>instance</em> of it).</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"85\" data-htmlline=\"86\">This is also useful when you want to create new components from existing components: Simply copy an existing component and declare the derived morph to be a new component, with the above-mentioned “component halo”.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"87\" data-htmlline=\"88\">Open Morph Menu</h4>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/menu_halo.png\" alt=\"\" style=\"max-width:80px\"><figcaption>The menu halo</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"91\" data-htmlline=\"92\">Opens the default menu for morphs. This can be a custom set of menu items, depending on what kind of morph is selected. For instance, selecting an image will give rise to different menu items than selecting a textbox etc.</p>\n\
<blockquote>\n\
<p>⚠️ <strong>Warning</strong></p>\n\
<p>The current default morph menu is subject to change very soon. Currently, it contains various actions that are either not supported or are overly specific and not designed for general use. We will update this area accordingly.</p>\n\
</blockquote>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"97\" data-htmlline=\"98\">Drag</h4>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/drag-halo.gif\" alt=\"\" style=\"max-width:300px\"><figcaption>Dragging a morph via the halo handle.</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"101\" data-htmlline=\"103\">In order to change a morph’s position, the user can either use the drag handle of the halo, or\n\
drag the morph by dragging the inside of the halo itself.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"104\" data-htmlline=\"105\">Grab</h4>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/grab-halo.gif\" alt=\"\" style=\"max-width:300px\"><figcaption>Grabbing a morph via the halo handle.</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"108\" data-htmlline=\"109\">The structure of morph compositions can also be adjusted via the grab control on the halo. This allows the user to remove a morph from its parent and subsequently assign it to a different owner. Its also possible to place the morph into the world instead of a new owner morph.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"110\" data-htmlline=\"111\">Remove</h4>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/remove-halo.gif\" alt=\"\" style=\"max-width:300px\"></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"114\" data-htmlline=\"115\">Pressing this button removes the selected morph entirely.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"116\" data-htmlline=\"117\">Open Inspector</h4>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/inspector_halo.png\" alt=\"\" style=\"max-width:80px\"><figcaption>The inspector halo</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"120\" data-htmlline=\"121\">For more details please refer to the <strong>Inspector Section</strong> below.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"122\" data-htmlline=\"123\">Textbox Creator</h3>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/text-mode.png\" alt=\"\" style=\"max-width:200px\"></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"126\" data-htmlline=\"127\">Next, we find the button that toggles the <em>Textbox Creation Mode</em> in the top bar. This mode should be familiar to users of most CAD or Visual Design Applications.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"128\" data-htmlline=\"129\">When active, the mode allows users to create new text boxes by either clicking on the world, in which case a default text box will be created at the spot, or by dragging the cursor across the world which allows the users to define a textbox with arbitrary extent.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"130\" data-htmlline=\"132\">In the case of the text box with arbitrary extent, the user will automatically enter the <em>edit mode</em> and be able to input the desired text into the box. The same can be achieved by double-clicking on a text with the hand being in <em>halo mode</em>.\n\
When editing a textbox, the text can be further refined and customized via the <em>Rich Text Controls</em>. For more detail on this please refer to the <strong>Rich Text Controls Section</strong> below.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"133\" data-htmlline=\"134\">Shape Creator</h3>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/shape-mode.png\" alt=\"\" style=\"max-width:200px\"></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"137\" data-htmlline=\"138\">When active, multiple different types of morphs can be created in the world with via click-and-drag, analogue to the behavior described for texts above. The different types of morphs are explained in more detail in our <a href=\"#documentation/morphic\" target=\"_blank\">morphic guide</a>.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"139\" data-htmlline=\"140\">Asset Browser</h3>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/asset-button.png\" alt=\"\" style=\"max-width:200px\"></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"143\" data-htmlline=\"144\">When working with <code>lively.project</code>s, we provide many convenience functions to the work with assets, such as automatic bundling. The Asset Browser is the central tool to manage your assets. Uploading your assets via this tool will automatically copy them into the appropriate folder.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"145\" data-htmlline=\"146\">You can use the Asset Browser to see all assets currently available in your project, upload new ones, or delete already uploaded assets.</p>\n\
<ul>\n\
<li>If you are wondering about font files, these are handled by a dedicated <em>Font Manager</em> available in the <em>Rich Text Control</em> in the sidebar.</li>\n\
</ul>\n\
<blockquote>\n\
<p>⚠️ <strong>Warning</strong></p>\n\
<p>As of now, the support for <strong>video</strong> and <strong>audio</strong> has not yet been implemented, since the corresponding morphs are not yet ready for primetime. We will update this section accordingly once we finalize support for these asset types.</p>\n\
</blockquote>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/asset_browser_open.png\" alt=\"\" style=\"max-width:400px\"><figcaption>An opened Asset Browser, including the assets for this website.</figcaption></figure>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"154\" data-htmlline=\"155\">Component Browser</h3>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/component-button.png\" alt=\"\" style=\"max-width:200px\"><figcaption>The button to open the Component Browser in the top bar.</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"158\" data-htmlline=\"159\">Allows the user to browse all available components in the current project as well as the standard components provided by the system. Also provides separate access to the <a href=\"https://github.com/LivelyKernel/partsbin\" target=\"_blank\"><code>partsbin</code> repository</a>, where we maintain a bunch of useful, interesting or even reusable components to be used.</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/component_browser_open.png\" alt=\"\" style=\"max-width:400px\"><figcaption>An opened Component Browser, showing the component that is this website.</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"162\" data-htmlline=\"163\">A selected component can be instantiated by dragging it from the component browser into the world. The user has the option to disable or enable to behavior of a component once it is instantiated. This is useful for cases, where we do not want the behavior of a component to interfere with my work immediately (for instance if we are in the process of building new components). If the component is part of the currently opened project it is also possible to open up the component in the world in order to manipulate the definition.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"164\" data-htmlline=\"165\">Minimap</h3>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/mini-map-button.png\" alt=\"\" style=\"max-width:200px\"><figcaption>The button that shows/closes the minimap and allows to enable “canvas mode”</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"168\" data-htmlline=\"170\">The world can be configured to support infinite scroll. We refer to this mode as “canvas mode”. If enabled, the user is able to spread out all morphs on the world as far as needed. You can scroll in all directions, automatically expanding the world.\n\
Additionally, you can also zoom in and out of the world, by using <em><strong>Ctrl-Mousewheel</strong></em>. Windows and Popups are excluded from this and thus have a “fixed position”.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"171\" data-htmlline=\"172\">When <em>canvas mode</em> enabled, it is easy to loose track of certain elements that are scrolled out of the view. For this purpose, a minimap can be shown which displays the currently displayed part of the world as well as where other morphs are located that are scrolled out of the world bounds.</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/zoom_indicator.png\" alt=\"\" style=\"max-width:300px\"><figcaption>The zoom indicator, at the side of an opened minimap, showing a zoom value when zoomed in.</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"175\" data-htmlline=\"176\">The currently active zoom factor is visible at all times in the zoom indicator in the bottom-right corner. Clicking the indicator will reset the viewport and the zoom to its default values.</p>\n\
<blockquote>\n\
<p>⚠️ <strong>Warning</strong></p>\n\
<p>“Canvas mode” interferes with the scale of all morphs opened in the world, thus caution is advised should you utilize this property for something else.</p>\n\
<p>The <strong>minimap</strong> is as of now not finished and might not work as expected when depicting complicated morph hierarchies (especially when you changed the origin of morphs).</p>\n\
</blockquote>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"183\" data-htmlline=\"184\">Offline/Online Mode</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"185\" data-htmlline=\"186\">Allows the user to toggle between offline- and online-mode. This is only relevant when working with <code>lively.project</code>s, where usually synchronization with a <code>git</code> server is performed. For more details on this, please refer to our guide to <a href=\"#documentation/projects\" target=\"_blank\">working with project</a>.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"187\" data-htmlline=\"188\">User Status</h3>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/justin_user_flap.png\" alt=\"\" style=\"max-width:200px\"><figcaption>Even Robins dog is using <code>lively.next</code>!</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"191\" data-htmlline=\"192\">Displays the connection status to the <code>lively.next</code> server (the backend). When a connection is established, you will see a small green light. As of now, you will need to run the server on your own system in parallel with your browser. When logged in using a GitHub Account, you will see the name and avatar (if available) of the currently logged in user. You can either logout or login using this widget, depending on the current state.</p>\n\
<blockquote>\n\
<p>⚠️ <strong>Warning</strong></p>\n\
<p>As of now, <code>lively.next</code> only supports Github Accounts in order to authenticate. We are working on expanding the support for different platforms in the future and will update this section accordingly.</p>\n\
</blockquote>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"197\" data-htmlline=\"198\">Version Checker</h2>\n\
<p class=\"markdown-line-marker\" data-mdline=\"199\" data-htmlline=\"200\">Located in the bottom-left corner, the “Version Checker” shows the version of <code>lively.next</code> currently running on your system. Clicking the appropriate icon will copy the version hash to your clipboard, which is handy for bug reports. Clicking on the version checker itself will refresh its state.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"202\" data-htmlline=\"203\">There are multiple icons that might be displayed which show how the currently running version relates to the latest published version of <code>lively.next</code>:</p>\n\
<ul>\n\
<li><strong>up to date:</strong> The lively.next repository is on the latest commit on the main branch</li>\n\
</ul>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/up-to-date.png\" alt=\"\" style=\"max-width:170px\"></figure>\n\
<ul>\n\
<li><strong>behind:</strong> The lively.next repository is on an outdated commit and can be updated. Provides shortcut for immediately updating lively.next to the latest version.</li>\n\
</ul>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/update.png\" alt=\"\" style=\"max-width:200px\"></figure>\n\
<ul>\n\
<li><strong>ahead:</strong> The user is on a more recent commit than the latest one on the main branch. This often happens when working on <code>lively.next</code> core packages.</li>\n\
</ul>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/ahead.png\" alt=\"\" style=\"max-width:170px\"></figure>\n\
<ul>\n\
<li><strong>out of sync:</strong> This usually only happens if the user is a on custom branch while working on the <code>lively.next</code> core. It means that the most recent version of <code>lively.next</code> cannot be found in the current branch. This can often be solved by rebasing onto the <code>main</code> branch. <strong>If you are a designer and encounter this version tag, please contact one of the programmers in your team.</strong> They will most likely be able to help you out.</li>\n\
</ul>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/out-of-sync.png\" alt=\"\" style=\"max-width:260px\"></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"220\" data-htmlline=\"221\">The last two will usually only be displayed to developers, while the first two are relevant to all users of <code>lively.next</code>.</p>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"222\" data-htmlline=\"223\">Properties Panel</h2>\n\
<p class=\"markdown-line-marker\" data-mdline=\"224\" data-htmlline=\"225\">The properties panel can be opened and closed via the appropriate flap, at the left side of the workspace. It provides a convenient way to inspect and adjust the majority of morphic properties. These properties are controlled by different sections inside of the panel, that are displayed with respect to the selected target (for instance a text will have different controls than an image or a default shape).</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"226\" data-htmlline=\"227\">In the next sections, we will go over most of the available widgets that might appear in the properties panel:</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"228\" data-htmlline=\"229\">Background</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"230\" data-htmlline=\"231\">This controls the background of the workspace (which is basically the fill of the “world”). It is only displayed if no target is selected.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"232\" data-htmlline=\"233\">Shape</h3>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/shape_control.png\" alt=\"\" style=\"max-width:400px\"><figcaption>The Shape Control Widget</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"236\" data-htmlline=\"237\">The Shape Control Panel is always displayed whenever a target is selected. This panel provides comprehensive control over the properties of a morph that define its <em>shape</em>. These properties can be finely tuned to achieve the desired appearance and behavior of the morph. From top to bottom, the following properties are available:</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"238\" data-htmlline=\"239\">Position</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"240\" data-htmlline=\"241\">The position can be controlled via its <code>X</code> and <code>Y</code> value respectively, allowing users to specify the exact coordinates of the morph within its parent container. By adjusting the position, users can precisely place the morph where it is needed within the design.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"242\" data-htmlline=\"243\">Width and Height</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"244\" data-htmlline=\"245\">Width and height of the selected morph are displayed in the number inputs. Users can input specific values to resize the morph. Additionally, there is a lock toggle feature that ensures the extent proportions are preserved when changing either the width or height. This is particularly useful for maintaining the aspect ratio of the morph. <strong>Note that these inputs are disabled if the width or height is controlled by a layout (see the section below)!</strong></p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"246\" data-htmlline=\"247\">Resizing Behavior</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"248\" data-htmlline=\"249\">The Resizing Behavior control provides options for how the morph should resize, typically based on the layout that controls the currently selected morph. The available options include:</p>\n\
<ul>\n\
<li><strong>Fixed Dimension:</strong> The default resizing behavior, where the morph maintains a fixed size as specified by its width or height value.</li>\n\
<li><strong>Fill Dimension:</strong> The morph will expand to fill any remaining empty space within its parent container.</li>\n\
<li><strong>Hug Dimension:</strong> The morph will hug its content, resizing to fit precisely around the content, such as a document or a set of children, if the layout permits.</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"254\" data-htmlline=\"255\">Border Radius</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"256\" data-htmlline=\"257\">For morphs with corners, the “Border Radius” section provides controls to adjust the curvature of the corners. There is also an “individual corner control” toggle that enables users to set the radius of each corner independently. This allows for more creative and customized border shapes.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"258\" data-htmlline=\"259\">Rotation</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"260\" data-htmlline=\"261\">The Rotation section offers a control to rotate the morph to the desired angle. This is an alternative to the rotation control already provided by the Halo (see above).</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"262\" data-htmlline=\"263\">Clipping Mode</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"264\" data-htmlline=\"265\">The “Clipping Mode” section determines whether the overflow content of the morph is visible or cropped. If the overflow is set to be cropped, users have the option to enable a scroll overflow. This feature allows the clipped content to be scrolled within the morph, adding functionality for viewing additional content within a limited space. You can select from the following options:</p>\n\
<ul>\n\
<li><strong>visible:</strong> This is the default, the morphs are visible regardless if they overlap their parent or not.</li>\n\
<li><strong>hidden:</strong> Simple clip of (hide) all overlapping morphs.</li>\n\
<li><strong>scroll:</strong> Clips all of the overlapping morphs but allows to scroll the morph such that all clipped morphs can be scrolled into view. The scrollbars are always visible.</li>\n\
<li><strong>auto:</strong> Same as <em>scroll</em> yet the scrollbar is only displayed if you can actually scroll across the dimension.</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"271\" data-htmlline=\"272\">Rich Text</h3>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/rich_text_controls.png\" alt=\"\" style=\"max-width:400px\"><figcaption>The Rich Text Widget</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"275\" data-htmlline=\"276\">The “Rich Text Controls” appear only when a Textmorph is selected.  It comes with all of the standard text properties that one would expect and should resemble what you know from Tools like “MS Office Word” and others. The following properties are available:</p>\n\
<ul>\n\
<li>Font Family</li>\n\
<li>Font Style</li>\n\
<li>Font Size</li>\n\
<li>Line Height</li>\n\
<li>Letter Spacing</li>\n\
<li>Font Color</li>\n\
<li>Text Align</li>\n\
<li>Text Wrapping, which offers the following types of wrapping:\n\
<ul>\n\
<li><strong>no wrap:</strong> The default value, the text lines are never wrapped and go as long until the next newline character is encountered.</li>\n\
<li><strong>wrap by words:</strong> The lines in the text are wrapped on a word level. Once the space becomes so narrows that single words do not fit into a line any more, the line starts to be wrapped by characters.</li>\n\
<li><strong>wrap by characters:</strong> The lines in the text are wrapped on a character level.</li>\n\
<li><strong>wrap only by words:</strong> The lines in the text are wrapped on a word level at all times, even in super narrow space scenarios.</li>\n\
</ul>\n\
</li>\n\
<li>Text Padding</li>\n\
</ul>\n\
<p class=\"markdown-line-marker\" data-mdline=\"291\" data-htmlline=\"293\">The bottom in the top-right allows to open the “Font Manager”, which allows the user to import font files and configure them accordingly.\n\
While <code>lively.next</code> ships with a wide variety of fonts with an permissive license that you can use and bundle in your applications, in some cases you might want to your your own font files. The font manager allows uploading and using additional fonts.</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/font_manager.png\" alt=\"\" style=\"max-width:800px\"><figcaption>The Rich Text Widget with an opened Font Manager</figcaption></figure>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"296\" data-htmlline=\"297\">Interactive Editing and Styling of Rich Text</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"298\" data-htmlline=\"299\">Naturally, rich text allows us not only to perform text styling on the entire textbox, but also on a selected piece of the text. To summon the appropriate popup, you will need to interactively edit some text (usually by double clicking into the text) and select some text <em>by dragging the selection with the mouse</em>.</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/rich_text_popup.png\" alt=\"\" style=\"max-width:400px\"><figcaption>The Rich Text Formatting Popup</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"302\" data-htmlline=\"303\">The formatting popup gives you access to some exclusive styling properties, which only make sense when targeting specific pieces of text, namely the definition of links and quotes.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"304\" data-htmlline=\"305\">Options like “Text Align” and “Padding” are not available in the popup, as they in turn only make sense when targeting a whole textbox.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"306\" data-htmlline=\"307\">Layout</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"308\" data-htmlline=\"309\">The “Layout” widget is always displayed when a target is selected, except for Textboxes. At the time of this writing, there are primarily two layouts available in <code>lively.next</code>:</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"310\" data-htmlline=\"311\">Constraints Layout</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"311\" data-htmlline=\"312\">This is the default layout applied to morphs if nothing else is specified. It is only available for morphs <strong>inside</strong> of a container.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"313\" data-htmlline=\"314\">A constraints based layout positions and resizes a morph in relation to its parent morph. It allows to apply constraints to both the horizontal and the vertical dimension independently.The following constraints are available:</p>\n\
<h5 class=\"markdown-line-marker\" data-mdline=\"315\" data-htmlline=\"316\">Fixed Positioning</h5>\n\
<p class=\"markdown-line-marker\" data-mdline=\"317\" data-htmlline=\"318\">Keeps the posittion of a morph fixed in relation to specific fix-points of its outer container. It is often helpful to think of these “positions” as fixed distances to the borders of the outer container</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/fixed-default.gif\" alt=\"\" style=\"max-width:300px\"><figcaption>A morph that has a fixed position in relation to the container left and top border.</figcaption></figure>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/fixed-bottom.gif\" alt=\"\" style=\"max-width:300px\"><figcaption>A morph that has a fixed position in relation to the container right and bottom border.</figcaption></figure>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/fixed-top-bottom.gif\" alt=\"\" style=\"max-width:300px\"><figcaption>A morph that has a fixed position in relation to the containers top <strong>and</strong> bottom border at the same time.</figcaption></figure>\n\
<h5 class=\"markdown-line-marker\" data-mdline=\"325\" data-htmlline=\"326\">Centered Positioning</h5>\n\
<p class=\"markdown-line-marker\" data-mdline=\"327\" data-htmlline=\"328\">This option can keep a morph centered in relation to its parent in either horizontal and vertical dimension.</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/centered.gif\" alt=\"\" style=\"max-width:300px\"><figcaption>A Constraint Layout centering a morph.</figcaption></figure>\n\
<h5 class=\"markdown-line-marker\" data-mdline=\"332\" data-htmlline=\"333\">Scaling Positioning</h5>\n\
<p class=\"markdown-line-marker\" data-mdline=\"334\" data-htmlline=\"335\">Resizes a morph in relation to the bounds of its parent.</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/scale.gif\" alt=\"\" style=\"max-width:300px\"><figcaption>A Constraint Layout resizing a morph in relation to its container.</figcaption></figure>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"338\" data-htmlline=\"339\">Auto Layout</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"340\" data-htmlline=\"341\">While a constraint based layout is specified on the basis of the child morphs of a container, the auto layout is defined on the container itself. Enabling an auto-layout on a container will disable the constraints based controls for its children. An auto layout can be added to a container via the “Plus” button when a morph is selected. If a layout already exists on the container, it can be removed via the same button.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"342\" data-htmlline=\"343\">An auto layout allows you to either position the children of a container along rows or columns:</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/item-axis.gif\" alt=\"\" style=\"max-width:300px\"></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"346\" data-htmlline=\"347\">The distance between the child items can be controlled via the “spacing” option of the layout:</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/item-spacing.gif\" alt=\"\" style=\"max-width:300px\"></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"350\" data-htmlline=\"351\">These layouts also allow for the specification of a padding that will control the distance between the children of a container and its border.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"352\" data-htmlline=\"353\">When the children of a container are too large to be spaced according to the specified axis, wrapping can be enabled:</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/wrap-items.gif\" alt=\"\" style=\"max-width:300px\"></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"356\" data-htmlline=\"357\">Further, we can also control the alignment of the axis itself inside of the container. In total, nine different configurations are possible, which can be selected via a popover:</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/align-axis.gif\" alt=\"\" style=\"max-width:300px\"></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"360\" data-htmlline=\"361\">Lastly we can also configure the spacing of the morphs within the axis. They can either be packed (so the morphs sit tightly next to each other) or spaced (the morphs try to keep the maximum distance apart from each other):</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/axis-spacing.gif\" alt=\"\" style=\"max-width:300px\"></figure>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"364\" data-htmlline=\"365\">Fill</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"366\" data-htmlline=\"367\">The widget controlling a morphs fill is always visible as long as a target is selected. By default, it allows to select the fill color of a morph, while special morphs like Images allow for a wider variety of controls.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"368\" data-htmlline=\"369\">Stroke</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"370\" data-htmlline=\"371\">The “Stroke Widget” is always visible when a target is selected. It allows to control the style of the border of the morph. You can control the color of the border, as well  as its width and style (such as <em>solid</em>, <em>dotted</em>, <em>dashed</em>, …).</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"372\" data-htmlline=\"373\">For all morphs except <code>Path</code> and <code>Polygon</code> you can also activate an advanced mode that allows you to control each side of the border independently.</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/advanced_stroke.png\" alt=\"\" style=\"max-width:400px\"><figcaption>The advanced border control popup.</figcaption></figure>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"376\" data-htmlline=\"377\">Component Control</h3>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/component_controls.png\" alt=\"\" style=\"max-width:400px\"><figcaption>The component controls without any master components specified on the target.</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"380\" data-htmlline=\"381\">The component section allows you to configure the overall master component of a morph and in respect to click and hover event. Clicking on the “link” button opens a popup similar to the “Component Browser” which you can use to set the specified master.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"382\" data-htmlline=\"383\">Component States</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"384\" data-htmlline=\"385\">This section is only active in the case that the target is assigned a master (or was derived from a master). It allows you to configure custom component states that can be triggered programmatically. An example of a scenario where this is useful is the implementation of an active and inactive state. An arbitrary number of custom states can be defined. For more details, please see our <a href=\"#documentation/morphic\" target=\"_blank\">introduction to <code>lively.morphic</code> and components</a>.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"386\" data-htmlline=\"387\">Responsive Design</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"388\" data-htmlline=\"389\">This section is only available if the selected morph is assigned to a master component.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"390\" data-htmlline=\"391\">For modern web-design, designing with multiple different view-ports in mind at all times is crucial! The responsive design section allows you to apply different styles to a morph, depending on its extent. For instance, when horizontal space gets narrower, we might want to display different layouts, vary the font size etc… The connection between different view-ports and their styling is defined in a similar way as for the component states mentioned above.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"393\" data-htmlline=\"394\">To define the different view-port sizes that are to be styled independently, one utilized the responsive halo:</p>\n\
<p class=\"responsive-video markdown-line-marker\" data-mdline=\"395\" data-htmlline=\"396\"><video src=\"/local_projects/nextguys--lively-next-relaunch/assets/responsive_halo.mp4\" controls=\"\" class=\"html5-video-player\">\n\
Your browser does not support playing HTML5 video.\n\
You can <a href=\"/local_projects/nextguys--lively-next-relaunch/assets/responsive_halo.mp4\" download=\"\">download the file</a> instead.\n\
Here is a description of the content: Defining and editing breakpoint via the \"Responsive Halo\".\n\
</video></p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"397\" data-htmlline=\"398\">Effects Controller</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"399\" data-htmlline=\"400\">The last section in the ‘Properties Panel’ is the “Effect Section”. It allows is possible to add multiple effect via the <code>+</code>-Button, as they are not mutually exclusive. After adding a new effect, the concrete effect to be applied can be selected via the dropdown menu and configured via the popup that is to be triggered with the left button.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"401\" data-htmlline=\"402\">The following effects are available:</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"403\" data-htmlline=\"404\">Drop Shadow</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"405\" data-htmlline=\"406\">Displays a backdrop shadow, that allows to accentuate a morph and give it a visual effect of hovering above other elements in a scene.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"407\" data-htmlline=\"408\">Inset Shadow</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"409\" data-htmlline=\"410\">Displays an inner shadow, which creates the impression of an indentation defined by the morph’s bounds. Handy for indicating pressed buttons and similar elements.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"411\" data-htmlline=\"412\">Opacity</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"413\" data-htmlline=\"414\">Makes the morph itself transparent. Unlike controlling the opacity of the fill of a morph, this turns the morph and <strong>all of its submorphs transparent</strong>.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"415\" data-htmlline=\"416\">Background Blur</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"417\" data-htmlline=\"418\">Given that the morph is translucent (due to opacity or transparent fill), this will apply a blur effect to the area covered by the selected morph.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"419\" data-htmlline=\"420\">Inner Blur</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"421\" data-htmlline=\"422\">Will apply a blur effect to the morph itself and all of its submorphs.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"423\" data-htmlline=\"424\">Cursor</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"425\" data-htmlline=\"426\">Changes the cursor style while hovering over a morph. Most of the default browser options should be available.</p>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"427\" data-htmlline=\"428\">Scene Graph</h2>\n\
<p class=\"markdown-line-marker\" data-mdline=\"429\" data-htmlline=\"430\">At the opposite site of the properties panel, at the left border of the workspace, a similar flap can be opened and closed. It contains the scene graph.</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/scene_graph.png\" alt=\"\" style=\"max-width:400px\"><figcaption>Partial “Scene Graph” for the design of this webiste.</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"433\" data-htmlline=\"434\">Each node of the scene graph represents a morph present in the world. Some special morphs, such as windows and other tooling, are excluded as to not clutter the graph. Hierarchies can be collapsed and uncollapsed. For each node, you can toggle its visibility and whether it is to be controlled by layouts, and observe its name and layout, if applicable.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"435\" data-htmlline=\"436\">At the top of the scene graph, you can query the graph to display only morphs with a specific name.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"437\" data-htmlline=\"438\">You can click on each node to target the morph it represents and open its halo. Additionally, you can recompose the morph structure of a scene by drag-and-dropping nodes.</p>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"439\" data-htmlline=\"440\">System Browser</h2>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/system_browser.png\" alt=\"\" style=\"max-width:600px\"></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"444\" data-htmlline=\"445\">The “System Browser” is one of the main tools for programmers inside of <code>lively.next</code>. It allows you, amongst other things, to read and write source code, integrates with the system search of <code>lively.next</code> and gives you quick access to other tools such as our ‘Test Runner’. It can be opened with <em><strong>Ctrl-B</strong></em> or via the world menu, accessible by right-clicking anywhere on the world.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"446\" data-htmlline=\"447\">The core of <code>lively.next</code> is structured into multiple packages. For example, <code>lively.morphic</code> is one such package. All available packages are displayed in the left-most column of the <em>System Browser</em> (F). The browser categorizes loaded packages into packages belonging to the lively <em>core</em>, loaded <em>projects</em>, and other loaded packages which are controlled via a bare <code>git</code> repository but are not part of the <code>lively.next</code> core.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"448\" data-htmlline=\"449\">Each package consists of multiple files and maybe folders. These are visible in the second colum (G). Depending on whether a folder or a file is selected in the second column, the contents of the third and subsequent columns (H) change. In the above screenshot, it contains the classes and top-level functions defined in <code>morph.js</code>. Selecting a class in column (H) will open a new column, containing the functions inside of the class and so on. This concept of a dynamic number of columns should be familiar to users with previous exposure to Smalltalk Browsers and is known as <a href=\"https://en.wikipedia.org/wiki/Miller_columns\" target=\"_blank\">Miller Columns</a>.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"450\" data-htmlline=\"451\">Section (A) contains buttons for code navigation, with which you can browser the history of previously opened modules in this browser. Button (B) opens up a search field to browse all modules available in the system. Button © opens the “System Search” (see below) and (D) allows to open new tabs in order to open multiple modules inside of the same “System Browser” at the same time.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"452\" data-htmlline=\"453\">Section (I) contains various handy actions in order to execute specific actions, depending on the opened file. For example, you might open the currently opened module in the “File Browser” (see below), run tests contained in a module or open the markdown preview.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"454\" data-htmlline=\"455\">The browser comes with editing modes for multiple different file types, such as <code>JavaScript</code>, <code>JSON</code>, <code>markdown</code>, and <code>CSS</code>. It is fully integrated in the system, so that saving a <code>JavaScript</code> module for example will automatically patch the behavior of live instances in the world and saving the <code>index.css</code> file of a project will take effect immediately.</p>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"456\" data-htmlline=\"457\">Reconciliation</h2>\n\
<p class=\"markdown-line-marker\" data-mdline=\"458\" data-htmlline=\"459\">In our <a href=\"#explanations/morphic\" target=\"_blank\">introduction to <code>lively.morphic</code></a>, we introduced our component system and how to use it to build composable and reusable UI building blocks. Using this code driven approach might be handy for developers, but this workflow is not accessible for non-programmers. Even for programmers, navigating large component hierarchies might be burdensome at some times. <strong>One of our goals for the <code>lively.next</code> project is to change this and provide our users with a graphical, direct manipulation workflow for the definition and derivation of components.</strong> For this reason, <code>lively.ide</code> comes with a <strong>reconciliation</strong> mechanism that seamlessly translates between the code and visual representation  of components.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"460\" data-htmlline=\"461\">To illustrate this point, below you can see a simplified example of what the reconciliation engine is able to achieve:</p>\n\
\n\
</div>',
  position: pt(15,15)
}, part(InteractiveDelay, {
  name: 'embedded 1',
  extent: pt(390,344),
  position: pt(15,29998),
  viewModel: { loader: "reconciliation" }
}), {
  type: HTMLMorph,
  name: 'markdown 2',
  extent: pt(390,4536.8),
  fixedHeight: false,
  html: '<div class=\"markdown-body\" style=\"margin: 5px\">\n\
<p class=\"markdown-line-marker\" data-mdline=\"2\" data-htmlline=\"3\">The reconciliation mechanism is accessible via two different ways:</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"4\" data-htmlline=\"5\">Reconciliation inside the System Browser</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"6\" data-htmlline=\"7\">When browsing a component module (<code>.cp.js</code>), there is an “Edit Component” button besides each component definition. Clicking this button will open a visual representation of the component definition. It can subsequently be changed in the same way as all others morphs in the system, utilizing the <strong>Properties Panel</strong> as described above. Changes will be propagated back into the source code in real time. Once changes have been made, you can revert them using the appropriate button at the side of component definition. When the component in question has a <code>ViewModel</code> setup, its behavior can be activated, again by using the appropriate button. This allows to easily test the behavior of a component and is thus a handy option for developers as well. When the behavior of a component is activated, the reconciliation will temporarily be disabled, in order to keep the separation between visual representation and the behavior implementation in order.</p>\n\
<blockquote>\n\
<p><strong>⚠️ Warning</strong>\n\
When reconciliation is active, it is not possible to edit the code inside of the module by hand. Editing the source code will prompt the user to exit the reconciliation session.</p>\n\
</blockquote>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"11\" data-htmlline=\"12\">Reconciliation via the Component Browser</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"13\" data-htmlline=\"14\">Alternatively, it is possible to open a component without usage of the <strong>System Browser</strong> by choosing it in the <strong>Component Browser</strong>. It is only possible to edit components in the currently loaded project (see our guide to projects for more info). If this condition is met, you will see an edit button once a component is selected. Again, the visual representation of the component opens in the world an can be changed by using the <strong>Properties Panel</strong>. The code will automatically be updated by the system, total transparent to the user.</p>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"15\" data-htmlline=\"16\">Inspector</h2>\n\
<p class=\"markdown-line-marker\" data-mdline=\"17\" data-htmlline=\"18\">The “Inspector” allows to inspect the internal state of an object. It can be summoned via the <em>Inspector Halo</em> (see above) or by selecting a morph or code reference to an object and pressing <em><strong>Ctrl-Shift-I</strong></em>.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"19\" data-htmlline=\"21\">It is a tool mostly used by experts or people familiar with programming, as is usually too detailed for users not interested in the internal state of objects.\n\
The Inspector displays all properties of a morph or any object that is inspected in a filterable tree view. Below the tree, the user has access to a workspace area, where they can evaluate any kind of code within the context of the inspected object (that is, <code>this</code> is bound to the inspected object). For more information about working with workspaces, please see the workspace section below. More information about code evaluation and modules can be found in our <a href=\"#documentation/modules\" target=\"_blank\">introduction to <code>lively.modules</code></a>.</p>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"22\" data-htmlline=\"23\">System Search</h2>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/search.png\" alt=\"\" style=\"max-width:400px\"></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"26\" data-htmlline=\"27\">The “System Search” can be opened via the world menu or by pressing <em><strong>Ctrl-Shift-F</strong></em>. It is a handy tool to perform a global search inside of the <code>lively.next</code> codebase, as well as the currently loaded project. A case-sensitive search mode, as well as support for regular expressions can be toggled. Found matches for a search can open up a “System Browser” right at the code location by double clicking the result you are interested in.</p>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"28\" data-htmlline=\"29\">File Browser</h2>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/file_browser.png\" alt=\"\" style=\"max-width:400px\"><figcaption>The ‘File Browser’ browsing the contents of the project for this website.</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"32\" data-htmlline=\"33\">The <strong>System Browser</strong> (see above) tries to execute modules you load and save, automatically lints your <code>JS</code> code and provides lots of other useful features. However, it does currently not support all file types. Additionally, sometimes you might not want the opinionated behavior of the <strong>System Browser</strong> and just want to edit a plain text file. For this reason, we provide the “File Browser”, which again can be opened via the world menu. It allows you to navigate the contents of your <code>lively.next</code> directory in a tree structure, create and delete files, and change their contents. Editing and other operations are available via the buttons at the bottom of the browser.</p>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"34\" data-htmlline=\"35\">Workspace</h2>\n\
<p class=\"responsive-video markdown-line-marker\" data-mdline=\"36\" data-htmlline=\"37\"><video src=\"/local_projects/nextguys--lively-next-relaunch/assets/workspace.mp4\" controls=\"\" class=\"html5-video-player\">\n\
Your browser does not support playing HTML5 video.\n\
You can <a href=\"/local_projects/nextguys--lively-next-relaunch/assets/workspace.mp4\" download=\"\">download the file</a> instead.\n\
Here is a description of the content: A `JavaScrpipt` workspace evaluating a simple expression.\n\
</video></p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"38\" data-htmlline=\"39\">The <strong>Workspace</strong> can be summoned with <em><strong>Ctrl-K</strong></em> or via the <em>world menu</em>. There are multiple flavours available, although the <code>JavaScript</code> workspace is the one that will be used most in most circumstances.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"40\" data-htmlline=\"41\">The idea behind all workspaces is that they allow you to write code and immediately evaluate the code you have written. You can import arbitrary code from anywhere in the system or external libraries via a CDN. You can execute each line independently, either via right-clicking on a selection or via <em><strong>Alt-Enter</strong></em> (Win/Linux) or <em><strong>Cmd+D</strong></em> (macOS). The workspace is an extremely useful tool to quickly prototype something and allows you to feel the benefits of a truly live programming system such as <code>lively.next</code> the fastest!</p>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"42\" data-htmlline=\"43\">Terminal</h2>\n\
<p class=\"responsive-video markdown-line-marker\" data-mdline=\"44\" data-htmlline=\"45\"><video src=\"/local_projects/nextguys--lively-next-relaunch/assets/shell_terminal.mp4\" controls=\"\" class=\"html5-video-player\">\n\
Your browser does not support playing HTML5 video.\n\
You can <a href=\"/local_projects/nextguys--lively-next-relaunch/assets/shell_terminal.mp4\" download=\"\">download the file</a> instead.\n\
Here is a description of the content: Demonstration of executing shell commands from inside of `lively.next`.\n\
</video></p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"46\" data-htmlline=\"47\">Through the <code>lively.server</code>, <code>lively.next</code> allows you to execute shell commands directly from inside the browser. The terminal is accessible through the <em>world menu</em>. The output of the last command that was executed is visible inside of the terminal. Interactive programs, such as <code>vi</code> are not supported. However, this can be handy to quickly commit your work from inside of lively, perform file systems from the command line, etc.</p>\n\
<blockquote>\n\
<p><strong>⚠️ Warning</strong></p>\n\
<p><strong>As this gives essentially arbitrary access to all parts of your system, we do not recommend deploying <code>lively.next</code> servers openly on the web at this time</strong></p>\n\
</blockquote>\n\
\n\
</div>',
  position: pt(15,30357)
}]
}]
});



export { studio }