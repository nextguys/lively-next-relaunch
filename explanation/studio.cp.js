import { part, component, TilingLayout } from "lively.morphic/index.js";
import { pt, rect } from "lively.graphics/geometry-2d.js";
import { HTMLMorph } from "lively.morphic/html-morph.js";
import { ExampleFlap, InteractiveDelay } from "./examples.cp.js";
import { Color } from "lively.graphics/color.js";
const studio = component({
  name: 'aMarkdownPreviewMorph',
  extent: pt(420,26345),
  layout: new TilingLayout({
  axis: "column",
  hugContentsVertically: true,
  resizePolicies: [["aMorph", {
        height: "fixed",
        width: "fill"
      }]]
}),
  position: pt(823,472),
  submorphs: [{
  name: 'aMorph',
  clipMode: 'auto',
  extent: pt(420,26345),
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
      }]],
  spacing: 15
}),
  submorphs: [{
  type: HTMLMorph,
  name: 'markdown 0',
  extent: pt(385,10467.6),
  fixedHeight: false,
  html: '<link type=\"text/css\" rel=\"stylesheet\" id=\"github-markdown\" href=\"/lively.ide/md/github-markdown.css\"><div class=\"markdown-body\" style=\"margin: 5px\">\n\
<p class=\"markdown-line-marker\" data-mdline=\"0\" data-htmlline=\"2\">Generally speaking, lively.next presents itself as a desktop OS running inside the browser. It comes with all of the standard elements from these kinds of systems, such as a desktop, mouse, context menus, menu bars and windows.\n\
Given the fact that these things very essentially invented in Smalltalk and lively.next regards itself as a descendant of such systems this should not be surprising.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"3\" data-htmlline=\"4\">In the following we will outline in detail the various different UI elements and tools that lively.next comes with, how they interact, how you are supposed to use them, and which tools may be introduced in the near future.</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/lively-desktop.png\" alt=\"\"></figure>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"7\" data-htmlline=\"8\">Top Bar</h2>\n\
<p class=\"markdown-line-marker\" data-mdline=\"8\" data-htmlline=\"9\">The top bar is floating on top of the desktop at all times, providing the user with a variety of shortcuts for important actions and modes implemented in the system.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"10\" data-htmlline=\"11\">Save Button</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"11\" data-htmlline=\"12\">Allows the user to save the current project or playground. Apart from the default <em>click and save</em> functionality, a variety of other saving modes can be triggered via the drop down menu. For more details on this button and its capability, please refer to the <strong>Project Chapter</strong>.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"13\" data-htmlline=\"14\">Halo and Interaction Mode</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"14\" data-htmlline=\"18\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/halo-mode.png\" alt=\"\" width=\"200px\"> <br>\n\
When working with designs or applications, there are various expectations for how the mouse cursor should behave.\n\
During the implementation or testing of an application, we want the cursor to function as it would for an end user interacting with the user interface.\n\
This behavior is referred to as <em>interactive mode</em> because it facilitates user interaction with the interface.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"19\" data-htmlline=\"22\">However, when designing an application or crafting a user interface, we prioritize the easy selection and manipulation of morphs without interference from interactive behaviors.\n\
In line with other Morphic implementations, selecting a morph to activate resize handles, property manipulation, or dragging is known as invoking a <em>Halo</em>.\n\
The halo can be activated via <em><strong>CMD-(left click)</strong></em> on Mac or <em><strong>(Ctrl-Shift-left click)</strong></em> on Linux or Windows when in interactive mode.</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/summon-halo.gif\" alt=\"\" width=\"200px\"><figcaption>Depiction of a halo getting summoned on a morph.</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"25\" data-htmlline=\"26\">To escalate the selection to the enclosing morph, one simply needs to meta click on the halo again, successively propagating the halo upwards until reaching the world level, at which point the halo selection is discarded.</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/propagate-halo.gif\" alt=\"\" width=\"200px\"><figcaption>The halo selection can be propagated up a morph’s owner chain.</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"29\" data-htmlline=\"30\">For convenience, users can enter halo mode, where a simple left click is sufficient to summon halos and outline the boundaries of the morph to be selected. This makes it easy to navigate a complex user interface and select the precise morph of interest.</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/hover-halo.gif\" alt=\"\" width=\"200px\"><figcaption>Selection targets are displayed when in Halo mode.</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"33\" data-htmlline=\"34\">In the top bar, the cursor mode button displays either a cursor in <em>halo mode</em> or a hand in <em>interactive mode</em>. Users can switch between these modes via a drop-down menu invoked by the caret next to the cursor mode button.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"35\" data-htmlline=\"36\">Halo Controls</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"36\" data-htmlline=\"37\">You may have noticed that once the halo is summoned, it dispalys a bunch of controls surrounding the selected morph. Let’s go over each of these in detail and explain what they allow the user to do:</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"38\" data-htmlline=\"39\">Resize Handles</h4>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/resize-halo.gif\" alt=\"\" width=\"200px\"><figcaption>Resizing an object via the halo.</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"41\" data-htmlline=\"44\">Allows the user to resize the selected object. Not that you can also grab the sides of the halo in order to adjust the width or height in isolation.\n\
Holding down the <em><strong>Shift-key</strong></em> while dragging one of the corners will lock the current proportion of the morph and adjust the extent proportionally.\n\
When resizing, the halo will automatically display visual guides (the yellow lines) that indicate how the center and bounds of the resizied morph relate to its surrounding morphs. If you hold down the <em><strong>Ctrl-key</strong></em> during resizing the morph will snap to these guides to make it easier to align</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"44\" data-htmlline=\"45\">Name Tag</h4>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/rename-halo.gif\" alt=\"\" width=\"200px\"><figcaption>Changing the name of an object.</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"47\" data-htmlline=\"48\">Displays the name of the selected morph and also allows the user to edit and change the name. Names are particulary important in lively, since they later on play key roles when attaching behavior to controls in a user interface.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"48\" data-htmlline=\"49\">Rotation / Scale Control</h4>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/rotate-halo.gif\" alt=\"\" width=\"200px\"><figcaption>Rotating via halo</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"52\" data-htmlline=\"55\">Allows to control the rotation as well as the scale factor of the selected morph.\n\
By default dragging the handle will adjust the rotation like illustrated above.<br>\n\
However holding down the shift key will shift the halo to manipulate the scale property as well. Note how the icon of the handle changes in response to the shift key being pressed:</p>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/scale-halo.gif\" alt=\"\" width=\"200px\"><figcaption>Scaling via halo</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"58\" data-htmlline=\"59\">Scaling an morph in the world this way is disabled when the world zoom is enabled. This is because the world zoom operates by scaling each of the morphs inside the world automatically. The world zoom is explained in more detail in the <strong>World Zoom Section</strong></p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"59\" data-htmlline=\"60\">Declare / Revoke Component</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"60\" data-htmlline=\"61\">Allows to turn a selected morph into a component definition or alternatively also revoke a component (i.e. remove the component and its definition). For more information about components please refer to the <strong>Component Module Section</strong>.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"61\" data-htmlline=\"62\">Copy</h4>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/copy-halo.gif\" alt=\"\" width=\"200px\"><figcaption>Copying a morph via the halo.</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"64\" data-htmlline=\"67\">Holding a dragging this control will copy the morph instance at hand and prepare the cursor to drop the new (copied) instance on a new target.\n\
Note that if this is applied to a component, it will not copy the component but rather create a new morph derived from that component.\n\
This is also useful when you want to create new components from existing components: Simply copy an existing component and declare the derived morph to be a new component.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"67\" data-htmlline=\"68\">Open Morph Menu</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"68\" data-htmlline=\"69\">Opens the default menu for morphs. This can be a custom set of menu items depending on what kind of morph is selected. For instance selecting an image will give rise to different menu items than selecting a textbox etc.</p>\n\
<blockquote>\n\
<p>⚠️ <strong>Warning</strong></p>\n\
<p>The current default morph menu is subject to change very soon. Currently it contains various actions that are either not supported or are overly specific and not designed for general use. We will update this area accordingly.</p>\n\
</blockquote>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"73\" data-htmlline=\"74\">Drag</h4>\n\
<figure data-type=\"image\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/drag-halo.gif\" alt=\"\" width=\"200px\"><figcaption>Dragging a morph via the halo handle.</figcaption></figure>\n\
<p class=\"markdown-line-marker\" data-mdline=\"76\" data-htmlline=\"77\">In order to change a morph’s position, the user can either use the drag handle of the halo, or drag the morph by dragging the inside of the halo itself.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"77\" data-htmlline=\"78\">Grab</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"78\" data-htmlline=\"80\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/grab-halo.gif\" alt=\"\" width=\"200px\"> <br>\n\
The structure of morph compositions can also be adjusted via the grab control on the halo. This allows the user to remove a morph from its parent and subsequently assign it to a different owner. Its also possible to place the morph into the world instead of a new owner morph.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"81\" data-htmlline=\"82\">Remove</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"82\" data-htmlline=\"84\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/remove-halo.gif\" alt=\"\" width=\"200px\"> <br>\n\
Pressing this button removes the selected morph entirely.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"84\" data-htmlline=\"85\">Open Object/Component Editor</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"85\" data-htmlline=\"86\">For more details please refer to the <strong>Object/Component Editor</strong>.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"86\" data-htmlline=\"87\">Open Inspector</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"87\" data-htmlline=\"88\">For more details please refer to the <strong>Inspector Section</strong>.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"88\" data-htmlline=\"89\">Textbox Creator</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"89\" data-htmlline=\"93\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/text-mode.png\" alt=\"\" width=\"200px\"> <br>\n\
Next we find the button that toggles the <em>Textbox Creation Mode</em>. This mode should be familiar to what is best practice in most CAD or Visuakl Design Applications. When active, the mode allows users to create new text boxes by either clicking on the world, in which case a default text box will be created at the spot or by dragging the cursor across the world which allows the users to define a textbox with arbitrary extent.\n\
In the case of the text box with arbitrary extent, the user will automatically enter the <em>edit mode</em> and be able to input the desired text into the box.\n\
When editing a textbox, the text can be further refined and customized via the <em>Rich Text Controls</em>. For more detail on this please refer to the <strong>Rich Text Controls Section</strong>.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"94\" data-htmlline=\"95\">Shape Creator</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"95\" data-htmlline=\"96\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/shape-mode.png\" alt=\"\" width=\"200px\"> <br></p>\n\
<ul>\n\
<li>Can create differen types of shapes by selecting the mode and then dragging on the world, analogous to the textbox creation explained previously.</li>\n\
<li>The different types of morphs that can be created are described in more detail in the <strong>Morph Chapter</strong>.</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"99\" data-htmlline=\"100\">Asset Browser</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"100\" data-htmlline=\"101\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/asset-button.png\" alt=\"\" width=\"200px\"> <br></p>\n\
<ul>\n\
<li>Central tool for managing all assets that belong to the current project.</li>\n\
<li>For more details on how assets are managed with respect to projects, please refer to the <strong>Project Chapter</strong>.</li>\n\
<li>There are three kinds of assets currently supported by the asset manager: Video, Audio and Images.\n\
<ul>\n\
<li>If you are wondering about font files, these are handled by a dedicated <em>Font Manager</em> available in the <em>Rich Text Control</em> in the sidebar.</li>\n\
</ul>\n\
</li>\n\
</ul>\n\
<blockquote>\n\
<p>⚠️ <strong>Warning</strong></p>\n\
<p>As of now, the support for <strong>video</strong> and <strong>audio</strong> has not yet been implemented, since the corresponding morphs are not yet ready. We will update this section accordingly once we finalize support for these asset types.</p>\n\
</blockquote>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"110\" data-htmlline=\"111\">Component Browser</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"111\" data-htmlline=\"113\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/component-button.png\" alt=\"\" width=\"200px\"> <br>\n\
Allows the user to browse all available components in the current project as well as the standard components provided by the system.</p>\n\
<ul>\n\
<li>Also provides separate access to the Partsbin repository, where we maintain a bunch of useful, interesting or even reusable components to be used.</li>\n\
<li>A selected component can be instantiated by dragging it from the component browser into the world</li>\n\
<li>The user has the option to disable or enable to behavior of a component once it is instantiated. This is useful for cases, where I do not want the behavior to interfere with my work (for instance if we are in the process of building new components).</li>\n\
<li>If the component is part of the current project and lively.next is configured accordingly, it is also possible to open up the component in the world in order to manipulate the definition.</li>\n\
<li>Further the components can be queried via a global search</li>\n\
<li>At all times the components can be grouped either by module (they are defined in) or by name, in which case each letter of the alphabet will define a group.</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"120\" data-htmlline=\"121\">Minimap</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"121\" data-htmlline=\"123\"><img src=\"/local_projects/nextguys--lively-next-relaunch/assets/mini-map-button.png\" alt=\"\" width=\"200px\"> <br>\n\
The world can be configured to support infinite scroll.</p>\n\
<ul>\n\
<li>If enabled, the user is able to spread out all morphs on the world as far as needed.</li>\n\
<li>Windows and Popups are excluded from the world scroll</li>\n\
<li>When enabled, it is easy to loose track of certain elements that are scrolled out of the view.</li>\n\
<li>For this purpose the user can always display the minimap which displays the currently displayed part of the world as well as where other morphs are located that are scrolled out of the world bounds.</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"128\" data-htmlline=\"129\">Offline/Online Mode</h3>\n\
<ul>\n\
<li>Allows the user to toggle between offline and online mode.</li>\n\
<li>This is only relevant when working with projects, where usually communication with a GIT server is nessecary.</li>\n\
<li>For more details on this, please refer to the <strong>Projects Chapter</strong>.</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"133\" data-htmlline=\"134\">User Status</h3>\n\
\n\
</div>',
  position: pt(15,15)
}, part(ExampleFlap, {
  name: 'embedded 1',
  position: pt(15,10498)
}), {
  type: HTMLMorph,
  name: 'markdown 2',
  extent: pt(385,12675.5),
  fixedHeight: false,
  html: '<link type=\"text/css\" rel=\"stylesheet\" id=\"github-markdown\" href=\"/lively.ide/md/github-markdown.css\"><div class=\"markdown-body\" style=\"margin: 5px\">\n\
<ul>\n\
<li>displays the connection status of the lively.next server (the backend)</li>\n\
<li>the user name of the account the user is logged in with (github id usually)</li>\n\
<li>a shorthand button for logging out or logging in depending on the status</li>\n\
<li>Login will guide the user to authenticate via github</li>\n\
<li>avatar of the user account if available</li>\n\
</ul>\n\
<blockquote>\n\
<p>⚠️ <strong>Warning</strong></p>\n\
<p>As of now lively.next only supports Github Accounts in order to authenticate. We are working on expanding the support to different plattform in the future and will update this section accordingly.</p>\n\
</blockquote>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"10\" data-htmlline=\"11\">World Zoom</h2>\n\
<p class=\"markdown-line-marker\" data-mdline=\"11\" data-htmlline=\"12\">provides an interactive zoom for the world</p>\n\
<ul>\n\
<li>zooms all morphs in the world, except for windows, popups and tools (side bars, top bar, halo)</li>\n\
<li>Click on the world zoom indicator resets the zoom to 100% and also centers the viewport position to the origin</li>\n\
</ul>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"15\" data-htmlline=\"16\">Version Checker</h2>\n\
<ul>\n\
<li>displays the current version of the lively.next system</li>\n\
<li>it also allows the user to copy the version number which is useful for bug reports</li>\n\
<li>finally there is a status icon that displays how the local version of lively.next relates to the latest public version\n\
<ul>\n\
<li><strong>up to date:</strong> The lively.next repository is on the latest commit on the main branch <br> <img src=\"/local_projects/nextguys--lively-next-relaunch/assets/up-to-date.png\" alt=\"\" width=\"170px\"></li>\n\
<li><strong>behind:</strong> The lively.next repository is on an outdated commit and can be updated. Provides shortcut for immediately updating lively.next to the latest version.<br> <img src=\"/local_projects/nextguys--lively-next-relaunch/assets/update-ready.gif\" alt=\"\" width=\"200px\"></li>\n\
</ul>\n\
</li>\n\
<li>The following two will usually only be displayed to developers, or people who actively develop lively.next core:\n\
<ul>\n\
<li><strong>ahead:</strong> The user is on a more recent commit than the latest one on the main branch. This often happens when developing on lively.next core packages. <br> <img src=\"/local_projects/nextguys--lively-next-relaunch/assets/ahead.png\" alt=\"\" width=\"170px\"></li>\n\
<li><strong>out of sync:</strong> This usually only happens if the user is a on custom branch for the purpose of developing fixes, features. Means that the most recent version of lively.next is not to be found in the current branch. This can often be solved by rebasing onto the main branch. If you are a designer and encounter this version tag, please contact one of the programmers in your team. They will most likely be able to help you out. <br> <img src=\"/local_projects/nextguys--lively-next-relaunch/assets/out-of-sync.png\" alt=\"\" width=\"260px\"></li>\n\
</ul>\n\
</li>\n\
</ul>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"25\" data-htmlline=\"26\">Properties Panel</h2>\n\
<ul>\n\
<li>Provides a convenient way to inspect and adjust a majority of morphic properties.</li>\n\
<li>Can be toggled to move in and out of the workspace when needed</li>\n\
<li>The properties are controlled by different sections that displayed with respect to selected target (for instance a text will have different controls than an image or a default shape).</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"30\" data-htmlline=\"31\">Background</h3>\n\
<ul>\n\
<li>This controls the background of the workspace (which is basically the fill of the world).</li>\n\
<li>Is only displayed if no target is selected (this is basically the default).</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"34\" data-htmlline=\"35\">Shape</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"36\" data-htmlline=\"37\">The Shape Control Panel is always displayed whenever a target is selected. This panel provides comprehensive control over the properties of a morph that define its <em>shape</em>. These properties can be finely tuned to achieve the desired appearance and behavior of the morph.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"38\" data-htmlline=\"39\">Position</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"40\" data-htmlline=\"41\">The Position can be controlled the X and Y value respectively allowing users to specify the exact coordinates of the morph within its parent container. By adjusting the position, users can precisely place the morph where it is needed within the design.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"42\" data-htmlline=\"43\">Width and Height</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"44\" data-htmlline=\"46\">Width and height of the selected morph is displayed in the number inputs. Users can input specific values to resize the morph. Additionally, there is a lock toggle feature that ensures the extent proportions are preserved when changing either the width or height. This is particularly useful for maintaining the aspect ratio of the morph.\n\
Note that these inputs are disabled if the width or height is controlled by a layout (see the section below).</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"47\" data-htmlline=\"48\">Resizing Behavior</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"49\" data-htmlline=\"50\">The Resizing Behavior control provides options for how the morph should resize, typically based on the applied layout. The available options include:</p>\n\
<ul>\n\
<li><strong>Fixed Dimension:</strong> The default resizing behavior, where the morph maintains a fixed size as specified by its width or height value.</li>\n\
<li><strong>Fill Dimension:</strong> The morph will expand to fill any remaining empty space within its parent container.</li>\n\
<li><strong>Hug Dimension:</strong> The morph will hug its content, resizing to fit precisely around the content, such as a document or a set of children, if the layout permits.</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"55\" data-htmlline=\"56\">Border Radius</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"57\" data-htmlline=\"58\">For morphs with corners, the Border Radius section provides controls to adjust the curvature of the corners. There is also an “individual corner control” toggle that enables users to set the radius of each corner independently. This allows for more creative and customized border shapes.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"59\" data-htmlline=\"60\">Rotation</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"60\" data-htmlline=\"61\">The Rotation section offers a control to rotate the morph to the desired angle. This is an alternative to the rotation control already provided by the Halo.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"62\" data-htmlline=\"63\">Clipping Mode</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"64\" data-htmlline=\"65\">The Clipping Mode section determines whether the overflow content of the morph is visible or cropped. If the overflow is set to be cropped, users have the option to enable a scroll overflow. This feature allows the clipped content to be scrolled within the morph, adding functionality for viewing additional content within a limited space. All in all the user can select from either of the following:</p>\n\
<ul>\n\
<li><strong>visible:</strong> This is the default, the morphs are visible regardless if they overlap their parent or not</li>\n\
<li><strong>hidden:</strong> Simple clip of all overlapping morphs.</li>\n\
<li><strong>scroll:</strong> Clips all of the overlapping morphs but allows to scroll the morph such that all clipped morphs can be scrolled into view. The scrollbars are always visible.</li>\n\
<li><strong>auto:</strong> Same as <em>scroll</em> yet the scrollbar is only displayed if you can actually scroll across the dimension.</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"70\" data-htmlline=\"71\">Rich Text</h3>\n\
<ul>\n\
<li>Is only displayed if a <strong>Textbox</strong> is selected.</li>\n\
<li>Comes with all fo the standard text properties found in a normal rich text editor\n\
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
<li><strong>no wrap:</strong>: The default value, the text lines are never wrapped and go as long until the next newline character is encountered.</li>\n\
<li><strong>wrap by words:</strong>: The lines in the text are wrapped on a word level. Once the space becomes so narrows that single words do not fit into a line any more, the line starts to be wrapped by characters.</li>\n\
<li><strong>wrap by characters:</strong> The lines in the text are wrapped on a character level.</li>\n\
<li><strong>wrap only by words:</strong> The lines in the text are wrapped on a word level at all times, even in super narrow space scenarios.</li>\n\
</ul>\n\
</li>\n\
<li>Text Padding</li>\n\
</ul>\n\
</li>\n\
<li>Allows to summon the <em><strong>Font Manager</strong></em> which allows the user to import font files and configure them accordingly.\n\
<ul>\n\
<li>In case the native font selection is not sufficient, this allows for arbitrary extension of the font set, with respect to the project.</li>\n\
<li>Font assets are imported and stored in the project’s repository. To learn more about projects, please refer to the <strong>Projects Chapter</strong>.</li>\n\
<li>Utilization of the font manager requires some expert knowlege about the font files, such as which font styles are implemented in them and in particular the unicode range they are covering.</li>\n\
</ul>\n\
</li>\n\
</ul>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"90\" data-htmlline=\"91\">Popup</h4>\n\
<ul>\n\
<li>Naturally, rich text allows us not to perform text styling on the entire textbox but also on a selected piece of the text.</li>\n\
<li>To prevent confusion we separate control of selected text into a <em>Rich Text Popup</em> which contains most of the controls that are available in the default richt text control.</li>\n\
<li>Some of the controls exclusive to the popup are:\n\
<ul>\n\
<li>Link, which naturally allows us to turn a selected piece of text into a hyperlink.</li>\n\
<li>Quote, which applies a quote CSS style to a selected piece of text.</li>\n\
</ul>\n\
</li>\n\
<li>NOt available are, since they do not make sense unless applied to a textbox as a whole:\n\
<ul>\n\
<li>Text align</li>\n\
<li>Padding</li>\n\
</ul>\n\
</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"101\" data-htmlline=\"102\">Constraints</h3>\n\
<ul>\n\
<li>This is the default layout applied to morphs if nothing else is specified.</li>\n\
<li>Constraints are not available for <strong>Textbox</strong>.</li>\n\
<li>Constraints adjust the submorphs extent and position in response to resizing of the encosing morph.</li>\n\
<li>Constraints can be applied to both the horizontal and the vertical dimension independently.</li>\n\
<li>The following constraints are available:\n\
<ul>\n\
<li><strong>Fixed</strong>\n\
<ul>\n\
<li>left, top, right, bottom, left and right or bottom and top\n\
<img src=\"/local_projects/nextguys--lively-next-relaunch/assets/fixed-default.gif\" alt=\"\"> <br>\n\
<img src=\"/local_projects/nextguys--lively-next-relaunch/assets/fixed-bottom.gif\" alt=\"\"> <br>\n\
<img src=\"/local_projects/nextguys--lively-next-relaunch/assets/fixed-top-bottom.gif\" alt=\"\"> <br></li>\n\
</ul>\n\
</li>\n\
<li><strong>Scale</strong>\n\
<ul>\n\
<li>horizontal or vertical\n\
<img src=\"/local_projects/nextguys--lively-next-relaunch/assets/scale.gif\" alt=\"\"> <br></li>\n\
</ul>\n\
</li>\n\
<li><strong>Center</strong>\n\
<ul>\n\
<li>horizontal or vertical\n\
<img src=\"/local_projects/nextguys--lively-next-relaunch/assets/centered.gif\" alt=\"\"> <br></li>\n\
</ul>\n\
</li>\n\
</ul>\n\
</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"119\" data-htmlline=\"120\">Layout</h3>\n\
<ul>\n\
<li>Is always displayed when a target is selected</li>\n\
<li>Layouts are not supported for <strong>Textbox</strong>.</li>\n\
<li>Supports aligning submorphs across a vertical or horizontal axis:\n\
<img src=\"/local_projects/nextguys--lively-next-relaunch/assets/item-axis.gif\" alt=\"\"> <br></li>\n\
<li>Supports a spacing distance that is applied between the morphs across the axis\n\
<img src=\"/local_projects/nextguys--lively-next-relaunch/assets/item-spacing.gif\" alt=\"\"> <br></li>\n\
<li>Supports wrapping of the axis, if submorphs do not fit.\n\
<img src=\"/local_projects/nextguys--lively-next-relaunch/assets/wrap-items.gif\" alt=\"\"> <br></li>\n\
<li>Supports a padding similar to the text padding, only applied to the laid out submorphs instead.</li>\n\
<li>We can further also control the alignment of the axis themselves. A total of 9 configurations is possible, which can be selected from this helpful popover:\n\
<img src=\"/local_projects/nextguys--lively-next-relaunch/assets/align-axis.gif\" alt=\"\"> <br></li>\n\
<li>Lastly we can also configure the spacing of the morphs within of the axis: This can either be packed (so the morphs sit tightly next to each other) or spaced (the morphs try to keep the maximum distance apart from each other):\n\
<img src=\"/local_projects/nextguys--lively-next-relaunch/assets/axis-spacing.gif\" alt=\"\"> <br></li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"134\" data-htmlline=\"135\">Fill</h3>\n\
<ul>\n\
<li>Is always displayed when a target is selected.</li>\n\
<li>Default allows to control the color fill of a morph.</li>\n\
<li>In case of image morph, displays controls for the image texture.</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"139\" data-htmlline=\"140\">Stroke</h3>\n\
<ul>\n\
<li>\n\
<p>Is always displayed when a target is selected.</p>\n\
</li>\n\
<li>\n\
<p>Allows to control the style of the border/stroke of the morph</p>\n\
</li>\n\
<li>\n\
<p>Color of the stroke can be controlled in the same manner as for fill, however no gradient is supported.</p>\n\
</li>\n\
<li>\n\
<p>Further stroke specific controls are</p>\n\
<ul>\n\
<li>Width of the stroke</li>\n\
<li>Style of the stroke</li>\n\
</ul>\n\
</li>\n\
<li>\n\
<p>Further allows to adjust each of the border sides (top, left, bottom and right) in isolation via the stroke popup</p>\n\
<ul>\n\
<li>This option is not available for paths and polygons</li>\n\
</ul>\n\
</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"150\" data-htmlline=\"151\">Component Control</h3>\n\
<ul>\n\
<li>Is always displayed when a target is selected.</li>\n\
<li>Allows the user to configure master components in response to click and hover events</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"154\" data-htmlline=\"155\">Component States</h3>\n\
<ul>\n\
<li>Only displayed in case a target is assigned a master (or was derived from a master)</li>\n\
<li>Allows the user to configure custom component states that can be triggered programmatically</li>\n\
<li>Examples are active/inactive windows or active/inactive buttons</li>\n\
<li>Allows for artbirary number of custom component states to be added and configured accordingly</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"160\" data-htmlline=\"161\">Responsive Design</h3>\n\
<ul>\n\
<li>Responsive design allows the user to define different styles that are applied to a morph depending on its extent.\n\
<ul>\n\
<li>For instance when horizontal space gets narrower, we want to display different layouts vary the font size etc.</li>\n\
</ul>\n\
</li>\n\
<li>Allows the user to control breakpoints and assign different masters based on the extent of the selected morph</li>\n\
<li>For more fine grained control, the responsive halo is useful</li>\n\
<li>The responsive halo can be summoed via the normal halo menu</li>\n\
<li>It is only available if the selected morph is assigned to a master component</li>\n\
<li>Inside the responsive halo the user can create new breakpoints and also adjust their range by slide control</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"169\" data-htmlline=\"170\">Effects Controller</h3>\n\
<ul>\n\
<li>For any target, multiple styles can be applied</li>\n\
<li>All of them can be applied at the same time, none of them are mutually exclusive</li>\n\
<li>To add a new style, the plus button on the top right of the effects controller can be used</li>\n\
<li>The newly added style can then be adjusted accordingly via the drop down</li>\n\
<li>Fine tuning of the style can be achieved via the popup for each style entry</li>\n\
</ul>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"175\" data-htmlline=\"176\">Drop Shadow</h4>\n\
<ul>\n\
<li>Displays a backdrop shadow, that allows to accentuate a morph and give it a visual effect of hovering above other elements in a scene.</li>\n\
</ul>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"177\" data-htmlline=\"178\">Inset Shadow</h4>\n\
<ul>\n\
<li>Displays an inner shadow, which creates the impression of an indentation defined by the morph’s bounds. Nice for visualizing pressed buttons and such.</li>\n\
</ul>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"179\" data-htmlline=\"180\">Opacity</h4>\n\
<ul>\n\
<li>Makes the morph itself transparent. Unlike controlling the opacity of the fill of a morph, this turns the morph and all of its submorphs transparent.</li>\n\
</ul>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"181\" data-htmlline=\"182\">Background Blur</h4>\n\
<ul>\n\
<li>Given that the morph is translucent (due to opacity or transparent fill) will apply a blur effect to the are covered by the selected morph.</li>\n\
</ul>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"183\" data-htmlline=\"184\">Inner Blur</h4>\n\
<ul>\n\
<li>Will apply a blur effect to the morph itself and all of its submorphs.</li>\n\
</ul>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"185\" data-htmlline=\"186\">Cursor</h4>\n\
<ul>\n\
<li>Adjustes the cursor style while hovering over a morph</li>\n\
</ul>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"188\" data-htmlline=\"189\">Scene Graph</h2>\n\
<ul>\n\
<li>each node corresponds to a morph in the world</li>\n\
<li>displays the state of the morph\n\
<ul>\n\
<li>visibility (can be toggled)</li>\n\
<li>the name of the morph (auto scrolled in case name is too long to display)</li>\n\
<li>auto layouts and their direction</li>\n\
<li>control wether or not a morph belongs to a layout or not</li>\n\
</ul>\n\
</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"195\" data-htmlline=\"196\">Filtering</h3>\n\
<ul>\n\
<li>scene graph can be queried via a search.</li>\n\
<li>uncollapses the entire tree and only displays the nodes which mach the query</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"198\" data-htmlline=\"199\">Navigation</h3>\n\
<ul>\n\
<li>collapse and uncollapsing nodes to drill down the scene graph</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"200\" data-htmlline=\"201\">Applying Structural Changes</h3>\n\
<ul>\n\
<li>drag and drop of nodes corresponds to drag and drop of morphs</li>\n\
</ul>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"203\" data-htmlline=\"204\">System Browser</h2>\n\
<ul>\n\
<li>Core Packages vs Projects</li>\n\
<li>Controls (history, browse, tabs, eval backend)</li>\n\
<li>Module Actions (open file, search, render markdown, get snippet)</li>\n\
<li>Browsing and Editing modules and components</li>\n\
<li>Editing Markdown and CSS</li>\n\
<li>Editing package configurations</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"211\" data-htmlline=\"212\">Reconciliation</h3>\n\
<ul>\n\
<li>We previously described the programmatic interface to defining and deriving components.</li>\n\
<li>In order to provide a direct manipulation, purely visual workflow to create and modify component definitions, <code>lively.next</code> ships with a reconciliation engine which bridges the gap between visual represenation and symbolic description of componnent definitions.</li>\n\
<li>This is done by translating direct manipulation changes (such as draggin, dropping, edditing, style property changes) into changes to the module source code where the components are defined.</li>\n\
<li>To illustrate the point, below you can see a simplified example of what the reconciliation engine is able to archieve:</li>\n\
</ul>\n\
\n\
</div>',
  position: pt(15,10565)
}, part(InteractiveDelay, {
  name: 'embedded 3',
  extent: pt(385,344),
  position: pt(15,23255),
  viewModel: { loader: "reconciliation" }
}), {
  type: HTMLMorph,
  name: 'markdown 4',
  extent: pt(385,2710.6),
  fixedHeight: false,
  html: '<link type=\"text/css\" rel=\"stylesheet\" id=\"github-markdown\" href=\"/lively.ide/md/github-markdown.css\"><div class=\"markdown-body\" style=\"margin: 5px\">\n\
<ul>\n\
<li>Besides evolving already existing component definitions purely visually, the user is also able to create entirely new component definitions from scratch.</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"4\" data-htmlline=\"5\">Reconciliation inside the System Browser</h3>\n\
<ul>\n\
<li>the user browses to a component module and finds the component definition</li>\n\
<li>the system browser displays a edit button to start an edit session</li>\n\
<li>once changes are propagated back, a revert button becomes active</li>\n\
<li>the user can also toggle the behavior of the component</li>\n\
<li>during active behavior, the reconciliation is temporarily disabled</li>\n\
<li><strong>Downsides:</strong> The user can not edit the code of the module while the reconciliation is active. Once the user starts to edit the module code, the system prompts the user to exit the reconciliation sessons affecting this module.</li>\n\
</ul>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"12\" data-htmlline=\"13\">Reconciliation via the Component Browser</h3>\n\
<ul>\n\
<li>the user browses to a component module and finds the component that they want to edit</li>\n\
<li>in case the user has the permission to edit this component the edit button is displayed next to the import button</li>\n\
<li>the user opens up the component by pressing the edit button (this will open the component edit  instance instead of a derived instance)</li>\n\
<li>the user adjusts the component via direct manipulation, the code is updated in the background completely transparent to the user</li>\n\
<li><strong>Downsides:</strong> While the component browser provides a nice way to find and use components, using it as a tool for managing custom design systems is cumbersome as one always has to select and edit the desired component through the component browser.</li>\n\
</ul>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"19\" data-htmlline=\"20\">Inspector</h2>\n\
<ul>\n\
<li>A tool mostly used by experts or people familiar with programming, it is usually too detailed for users not interested in the internal state of objects.</li>\n\
<li>Displays all properties of a morph or any object the is inspected as a tree view</li>\n\
<li>Below the tree, the user has access to a workspace area, where they can evaluate any kind of code within the context of the inspected object\n\
<ul>\n\
<li>The user is able to select the binding of the workspace via the dropdown</li>\n\
<li>For more information about evaluation and modules, see the <strong>Modules Chapter</strong></li>\n\
</ul>\n\
</li>\n\
</ul>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"26\" data-htmlline=\"27\">System Search</h2>\n\
<ul>\n\
<li>handy tool to perform a global search in the lively.next code base as well as the currently loaded project</li>\n\
<li>you are able to only query the “running” code, that is only the loaded modules or query all source code availabel to the system.</li>\n\
<li>matching lines can open up the system browser right at the code location by hitting enter or double clicking</li>\n\
</ul>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"31\" data-htmlline=\"32\">Object Editor</h2>\n\
<blockquote>\n\
<p>⚠️ <strong>Warning</strong></p>\n\
<p>The Object Editor in its current form is going to be deprecated in favor of the new component editor soon. The component editor will be basically a superset of the object editor and be able to edit both morphs, components and non visual objects (like in the case of remote server side scripting).</p>\n\
</blockquote>\n\
<ul>\n\
<li>Can edit morph classes or view model classes\n\
<ul>\n\
<li>If both morph class and view model class are available, prompts the user to choose which one to edit</li>\n\
</ul>\n\
</li>\n\
<li>Inspect subclass hierarchy on the left hand</li>\n\
<li>Continously allows for the evaluation of snippets inside of the editable area where the context is bound to the object editor target</li>\n\
<li>Saving changes in the object editor has an immediate effect on the edited class, changes propage among all instances</li>\n\
<li>Imports can be managed via a sidebar menu</li>\n\
<li>Subclasses can be created as well\n\
<ul>\n\
<li>The object editor performs the subclassing, module adjustment and reassignment of the class to the current instance automatically in the abckground</li>\n\
<li>The new subclass will be declared and exported from the same module as its superclass, as long as the superclass is not part of the lively.next core.\n\
<ul>\n\
<li>If we are subclassing a core class, a new module is created solely for the purpose of storing the new subclass</li>\n\
</ul>\n\
</li>\n\
</ul>\n\
</li>\n\
</ul>\n\
\n\
</div>',
  position: pt(15,23614)
}]
}]
});



export { studio }