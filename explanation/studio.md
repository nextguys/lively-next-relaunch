Generally speaking, lively.next presents itself as a desktop OS running inside the browser. It comes with all of the standard elements from these kinds of systems, such as a desktop, mouse, context menus, menu bars and windows.
Given the fact that these things very essentially invented in Smalltalk and lively.next regards itself as a descendant of such systems this should not be surprising.

In the following we will outline in detail the various different UI elements and tools that lively.next comes with, how they interact, how you are supposed to use them, and which tools may be introduced in the near future.

![](/local_projects/nextguys--lively-next-relaunch/assets/lively-desktop.png)

## Top Bar
The top bar is floating on top of the desktop at all times, providing the user with a variety of shortcuts for important actions and modes implemented in the system.

### World Menu
> ⚠️ **Warning**
>
> The current form of the world menu is subject to change very soon. Currently it contains various actions that are either not supported or are overly specific and not designed for general use. We will update this area accordingly.
 - Reachable by pressing the lively icon on the top left of the screen.
 - Alternatively its also always summonable via a right click on an empty area of the world.
 - Generally speaking the world menu provides quick access to a set of common actions that are often invoked via shortcuts.
 - The world menu is therefore especially convenient for people not yet familiar with the system and who want to explore the capabilities.
 
### Save Button
 - Allows you to save the current project or playground. For more details on this capability, please refer to the **Project Chapter**.
 
### Halo and Interaction Mode
When working with designs or applications, there are various expectations for how the mouse cursor should behave.
During the implementation or testing of an application, we want the cursor to function as it would for an end user interacting with the user interface.
This behavior is referred to as *interactive mode* because it facilitates user interaction with the interface.

However, when designing an application or crafting a user interface, we prioritize the easy selection and manipulation of morphs without interference from interactive behaviors.
In line with other Morphic implementations, selecting a morph to activate resize handles, property manipulation, or dragging is known as invoking a *Halo*.
The halo can be activated via ***CMD-(left click)*** on Mac or ***(Ctrl-Shift-left click)*** on Linux or Windows when in interactive mode.

![](/local_projects/nextguys--lively-next-relaunch/assets/summon-halo.gif)

To escalate the selection to the enclosing morph, one simply needs to meta click on the halo again, successively propagating the halo upwards until reaching the world level, at which point the halo selection is discarded.

![](/local_projects/nextguys--lively-next-relaunch/assets/propagate-halo.gif)

For convenience, users can enter halo mode, where a simple left click is sufficient to summon halos and outline the boundaries of the morph to be selected. This makes it easy to navigate a complex user interface and select the precise morph of interest.

![](/local_projects/nextguys--lively-next-relaunch/assets/hover-halo.gif)

In the top bar, the cursor mode button displays either a cursor in *halo mode* or a hand in *interactive mode*. Users can switch between these modes via a drop-down menu invoked by the caret next to the cursor mode button.

### Halo Controls
You may have noticed that once the halo is summoned, it dispalys a bunch of controls surrounding the selected morph. Let's go over each of these in detail and explain what they allow the user to do:

#### Resize Handles
![](/local_projects/nextguys--lively-next-relaunch/assets/resize-halo.gif) </br>
Allows the user to resize the selected object. Not that you can also grab the sides of the halo in order to adjust the width or height in isolation.
Holding down the ***Shift-key*** while dragging one of the corners will lock the current proportion of the morph and adjust the extent proportionally.
When resizing, the halo will automatically display visual guides (the yellow lines) that indicate how the center and bounds of the resizied morph relate to its surrounding morphs. If you hold down the ***Ctrl-key*** during resizing the morph will snap to these guides to make it easier to align 
#### Name Tag
![](/local_projects/nextguys--lively-next-relaunch/assets/rename-halo.gif) </br>
Displays the name of the selected morph and also allows the user to edit and change the name. Names are particulary important in lively, since they later on play key roles when attaching behavior to controls in a user interface.
#### Rotation / Scale Control
Allows to control the rotation as well as the scale factor of the selected morph.
By default dragging the handle will adjust the rotation like illustrated below:</br>
![](/local_projects/nextguys--lively-next-relaunch/assets/rotate-halo.gif) </br>
However holding down the shift key will shift the halo to manipulate the scale property as well. Note how the icon of the handle changes in response to the shift key being pressed:</br>
![](/local_projects/nextguys--lively-next-relaunch/assets/scale-halo.gif) </br>
Scaling an morph in the world this way is disabled when the world zoom is enabled. This is because the world zoom operates by scaling each of the morphs inside the world automatically. The world zoom is explained in more detail in the **World Zoom Section**
#### Declare / Revoke Component
Allows to turn a selected morph into a component definition or alternatively also revoke a component (i.e. remove the component and its definition). For more information about components please refer to the **Component Module Section**.
#### Copy
![](/local_projects/nextguys--lively-next-relaunch/assets/copy-halo.gif) </br>
Holding a dragging this control will copy the morph instance at hand and prepare the cursor to drop the new (copied) instance on a new target.
Note that if this is applied to a component, it will not copy the component but rather create a new morph derived from that component.
This is also useful when you want to create new components from existing components: Simply copy an existing component and declare the derived morph to be a new component.
#### Open Morph Menu
Opens the default menu for morphs. This can be a custom set of menu items depending on what kind of morph is selected. For instance selecting an image will give rise to different menu items than selecting a textbox etc.
> ⚠️ **Warning**
>
> The current default morph menu is subject to change very soon. Currently it contains various actions that are either not supported or are overly specific and not designed for general use. We will update this area accordingly.

#### Drag
![](/local_projects/nextguys--lively-next-relaunch/assets/drag-halo.gif) </br>
In order to change a morph's position, the user can either use the drag handle of the halo, or drag the morph by dragging the inside of the halo itself.
#### Grab
![](/local_projects/nextguys--lively-next-relaunch/assets/grab-halo.gif) </br>
The structure of morph compositions can also be adjusted via the grab control on the halo. This allows the user to remove a morph from its parent and subsequently assign it to a different owner. Its also possible to place the morph into the world instead of a new owner morph.

#### Remove
![](/local_projects/nextguys--lively-next-relaunch/assets/remove-halo.gif) </br>
Pressing this button removes the selected morph entirely.
#### Open Object/Component Editor
For more details please refer to the **Object/Component Editor**.
#### Open Inspector
For more details please refer to the **Inspector Section**.
### Textbox Creator
- When the mode is active dragging the cursor across the world with the left mouse button pressed will yield textbox with the extent being the dragged distance.
- Once the drag is finished the textbox is created and the user will immediately enter the edit mode in order to input the desired text.
  - This is a pretty standard behavior familiar from other CAD design tools
- Alternatively it is also possible to click once on an empty area in the world in order to yield a single textbox where a default text has been placed beforehand.
- Text can be further refined and customized via the *Rich Text Controls*. For more detail on this please refer to the **Rich Text Controls Section**.

### Shape Creator
- Can create differen types of shapes by selecting the mode and then dragging on the world, analogous to the textbox creation explained previously.
- The different types of morphs that can be created are described in more detail in the **Morph Chapter**.

### Component Module
> ⚠️ **Warning**
>
> Component Module Frames are currently still under construction and not yet available in lively.next. We will update this section accordingly once they are available.

![](/local_projects/nextguys--lively-next-relaunch/assets/component%20module%20mock.png) </br>
- allows to draw a frame on the world where the components of a specific component modules are laid out.
- visualizes the relationships between the components (how they are derived from each other)
- allows to easily edit, rename or remove components inside of a component module
- Component Frames can be created by selecting the component module option in the shape creator by dragging the cursor analogous to the textbox or shape creation.
- The user can then select to either create a new component module from scratch or fill the contents of the frame with components from a preexisting module.

### Component Browser
 - Allows the user to browse all available components in the current project as well as the standard components provided by the system.
 - Also provides separate access to the Partsbin repository, where we maintain a bunch of useful, interesting or even reusable components to be used.
 - A selected component can be instantiated by dragging it from the component browser into the world
 - The user has the option to disable or enable to behavior of a component once it is instantiated. This is useful for cases, where I do not want the behavior to interfere with my work (for instance if we are in the process of building new components).
 - If the component is part of the current project and lively.next is configured accordingly, it is also possible to open up the component in the world in order to manipulate the definition.
 - Further the components can be queried via a global search
 - At all times the components can be grouped either by module (they are defined in) or by name, in which case each letter of the alphabet will define a group.

### Asset Browser
 - Central tool for managing all assets that belong to the current project.
 - For more details on how assets are managed with respect to projects, please refer to the **Project Chapter**.
 - There are three kinds of assets currently supported by the asset manager: Video, Audio and Images.
   - If you are wondering about font files, these are handled by a dedicated *Font Manager* available in the *Rich Text Control* in the sidebar.

> ⚠️ **Warning**
>
> As of now, the support for **video** and **audio** has not yet been implemented, since the corresponding morphs are not yet ready. We will update this section accordingly once we finalize support for these asset types.

### Minimap
 - The world can be configured to support infinite scroll.
   - If enabled, the user is able to spread out all morphs on the world as far as needed.
   - Windows and Popups are excluded from the world scroll
 - When enabled, it is easy to loose track of certain elements that are scrolled out of the view.
 - For this purpose the user can always display the minimap which displays the currently displayed part of the world as well as where other morphs are located that are scrolled out of the world bounds.

### Offline/Online Mode
 - Allows the user to toggle between offline and online mode.
 - This is only relevant when working with projects, where usually communication with a GIT server is nessecary.
 - For more details on this, please refer to the **Projects Chapter**.
 
### User Status
<!-- __lv_expr__:{part}:lively.morphic:{ExampleFlap}:nextguys--lively-next-relaunch/explanation/examples.cp.js:part(ExampleFlap) -->
 - displays the connection status of the lively.next server (the backend)
 - the user name of the account the user is logged in with (github id usually)
 - a shorthand button for logging out or logging in depending on the status
 - Login will guide the user to authenticate via github
 - avatar of the user account if available
 > ⚠️ **Warning**
 >
 > As of now lively.next only supports Github Accounts in order to authenticate. We are working on expanding the support to different plattform in the future and will update this section accordingly.

## World Zoom
 - provides an interactive zoom for the world
 - zooms all morphs in the world, except for windows, popups and tools (side bars, top bar, halo)
 - Click on the world zoom indicator resets the zoom to 100% and also centers the viewport position to the origin
 
## Version Checker
 - displays the current version of the lively.next system
 - it also allows the user to copy the version number which is useful for bug reports
 - finally there is a status icon that displays how the local version of lively.next relates to the latest public version
    - up to date: The lively.next repository is on the latest commit on the main branch
    - behind: The lively.next repository is on an outdated commit and can be updated. Provides shortcut for immediately updating lively.next to the latest version.
 - The following two will usually only be displayed to developers, or people who actively develop lively.next core:
    - ahead: The user is on a more recent commit than the latest one on the main branch. This often happens when developing on lively.next core packages.
    - out of sync: This usually only happens if the user is a on custom branch for the purpose of developing fixes, features. Means that the most recent version of lively.next is not to be found in the current branch. This can often be solved y rebasing onto the main branch.

## Properties Panel
 - Provides a convenient way to inspect and adjust a majority of morphic properties.
 - Can be toggled to move in and out of the workspace when needed
 - The properties are controlled by different sections that displayed with respect to selected target (for instance a text will have different controls than an image or a default shape).

### Background
 - This controls the background of the workspace (which is basically the fill of the world).
 - Is only displayed if no target is selected (this is basically the default).

### Shape
<!--
 - Is always displayed whenever a target is selected.
 - Allows us to control the properties of a morph that constitute its *shape*. This includes:
   - Width and Height
     - user can select the lock toggle in order to ensure that when one of either width or height inputs are changed, the extent proportions are preserved.
   - Position
   - Border Radius (rounded borders)
     - Also allows the user to individually adjust the radius of each corner in isolation by toggling the "invidivual corner control".
   - Rotation
   - Clipping mode (wether overflow is visible or cropped)
     - In the case of cropped overflows, the user can also choose to select a scroll overflow, in which case the morph will allow the clipped content to be scrolled as well.
   - Resizing Behavior (usually depending on the applied layout)
     - Fixed Dimension (default resizing behavior)
     - Fill Dimension (if controlled by layout, will a remaining empty space)
     - Hug Dimension (if layout permits, hug the content e.g. a document or a set of children)
     - Shrink Dimension (is a combination of hugging and fill, where if fill were to exceed the size of hug, we would resort to hug and else behave as shrink) (not yet implemented)
-->

The Shape Control Panel is always displayed whenever a target is selected. This panel provides comprehensive control over the properties of a morph that define its *shape*. These properties can be finely tuned to achieve the desired appearance and behavior of the morph.

#### Position

The Position can be controlled the X and Y value respectively allowing users to specify the exact coordinates of the morph within its parent container. By adjusting the position, users can precisely place the morph where it is needed within the design.

#### Width and Height

Width and height of the selected morph is displayed in the number inputs. Users can input specific values to resize the morph. Additionally, there is a lock toggle feature that ensures the extent proportions are preserved when changing either the width or height. This is particularly useful for maintaining the aspect ratio of the morph.
Note that these inputs are disabled if the width or height is controlled by a layout (see the section below).

### Resizing Behavior

The Resizing Behavior control provides options for how the morph should resize, typically based on the applied layout. The available options include:

- **Fixed Dimension:** The default resizing behavior, where the morph maintains a fixed size as specified by its width or height value.
- **Fill Dimension:** The morph will expand to fill any remaining empty space within its parent container.
- **Hug Dimension:** The morph will hug its content, resizing to fit precisely around the content, such as a document or a set of children, if the layout permits.
- **Shrink Dimension:** A combination of hugging and filling behavior. If filling exceeds the size of hugging, the morph will default to hugging. *This feature is not yet implemented.*

### Border Radius

For morphs with corners, the Border Radius section provides controls to adjust the curvature of the corners. There is also an "individual corner control" toggle that enables users to set the radius of each corner independently. This allows for more creative and customized border shapes.

### Rotation
The Rotation section offers a control to rotate the morph to the desired angle. This is an alternative to the rotation control already provided by the Halo.

### Clipping Mode

The Clipping Mode section determines whether the overflow content of the morph is visible or cropped. If the overflow is set to be cropped, users have the option to enable a scroll overflow. This feature allows the clipped content to be scrolled within the morph, adding functionality for viewing additional content within a limited space. All in all the user can select from either of the following:
  - **visible:** This is the default, the morphs are visible regardless if they overlap their parent or not
  - **hidden:** Simple clip of all overlapping morphs.
  - **scroll:** Clips all of the overlapping morphs but allows to scroll the morph such that all clipped morphs can be scrolled into view. The scrollbars are always visible.
  - **auto:** Same as *scroll* yet the scrollbar is only displayed if you can actually scroll across the dimension.

### Rich Text
 - Is only displayed if a **Textbox** is selected.
 - Comes with all fo the standard text properties found in a normal rich text editor
   - Font Family
   - Font Style
   - Font Size
   - Line Height
   - Letter Spacing
   - Font Color
   - Text Align
   - Text Wrapping, which offers the following types of wrapping:
     - **no wrap:**: The default value, the text lines are never wrapped and go as long until the next newline character is encountered.
     - **wrap by words:**: The lines in the text are wrapped on a word level. Once the space becomes so narrows that single words do not fit into a line any more, the line starts to be wrapped by characters.
     - **wrap by characters:** The lines in the text are wrapped on a character level.
     - **wrap only by words:** The lines in the text are wrapped on a word level at all times, even in super narrow space scenarios. 
   - Text Padding
 - Allows to summon the ***Font Manager*** which allows the user to import font files and configure them accordingly.
   - In case the native font selection is not sufficient, this allows for arbitrary extension of the font set, with respect to the project.
   - Font assets are imported and stored in the project's repository. To learn more about projects, please refer to the **Projects Chapter**.
   - Utilization of the font manager requires some expert knowlege about the font files, such as which font styles are implemented in them and in particular the unicode range they are covering.
#### Popup
  - Naturally, rich text allows us not to perform text styling on the entire textbox but also on a selected piece of the text.
  - To prevent confusion we separate control of selected text into a *Rich Text Popup* which contains most of the controls that are available in the default richt text control.
  - Some of the controls exclusive to the popup are:
    - Link, which naturally allows us to turn a selected piece of text into a hyperlink.
    - Quote, which applies a quote CSS style to a selected piece of text.
  - NOt available are, since they do not make sense unless applied to a textbox as a whole:
    - Text align
    - Padding
    

### Constraints
 - This is the default layout applied to morphs if nothing else is specified.
 - Constraints are not available for **Textbox**.
 - Constraints adjust the submorphs extent and position in response to resizing of the encosing morph.
 - Constraints can be applied to both the horizontal and the vertical dimension independently.
 - The following constraints are available:
   - **Fixed**
      - left, top, right, bottom, left and right or bottom and top
       ![](/local_projects/nextguys--lively-next-relaunch/assets/fixed-default.gif) </br>
       ![](/local_projects/nextguys--lively-next-relaunch/assets/fixed-bottom.gif) </br>
       ![](/local_projects/nextguys--lively-next-relaunch/assets/fixed-top-bottom.gif) </br>
   - **Scale**
      - horizontal or vertical
       ![](/local_projects/nextguys--lively-next-relaunch/assets/scale.gif) </br>
   - **Center**
      - horizontal or vertical
       ![](/local_projects/nextguys--lively-next-relaunch/assets/centered.gif) </br>

### Layout
 - Is always displayed when a target is selected
 - Layouts are not supported for **Textbox**.
 - Supports aligning submorphs across a vertical or horizontal axis:
 ![](/local_projects/nextguys--lively-next-relaunch/assets/item-axis.gif) </br>
 - Supports a spacing distance that is applied between the morphs across the axis
 ![](/local_projects/nextguys--lively-next-relaunch/assets/item-spacing.gif) </br>
 - Supports wrapping of the axis, if submorphs do not fit.
  ![](/local_projects/nextguys--lively-next-relaunch/assets/wrap-items.gif) </br>
 - Supports a padding similar to the text padding, only applied to the laid out submorphs instead.
 - We can further also control the alignment of the axis themselves. A total of 9 configurations is possible, which can be selected from this helpful popover:
![](/local_projects/nextguys--lively-next-relaunch/assets/align-axis.gif) </br>
 - Lastly we can also configure the spacing of the morphs within of the axis: This can either be packed (so the morphs sit tightly next to each other) or spaced (the morphs try to keep the maximum distance apart from each other):
 ![](/local_projects/nextguys--lively-next-relaunch/assets/axis-spacing.gif) </br>

### Fill
 - Is always displayed when a target is selected.
 - Default allows to control the color fill of a morph.
 - In case of image morph, displays controls for the image texture.
 - In case of video morph, displays controls for the displayed video. (not yet implemented)

### Stroke
 - Is always displayed when a target is selected.
 - Allows to control the style of the border/stroke of the morph
 - Color of the stroke can be controlled in the same manner as for fill, however no gradient is supported.
 - Further stroke specific controls are
   - Width of the stroke
   - Style of the stroke

 - Further allows to adjust each of the border sides (top, left, bottom and right) in isolation via the stroke popup
   - This option is not available for paths and polygons

### Component Control
 - Is always displayed when a target is selected.
 - Allows the user to configure master components in response to click and hover events

### Component States
 - Only displayed in case a target is assigned a master (or was derived from a master)
 - Allows the user to configure custom component states that can be triggered programmatically
 - Examples are active/inactive windows or active/inactive buttons
 - Allows for artbirary number of custom component states to be added and configured accordingly

### Responsive Design
 - Responsive design allows the user to define different styles that are applied to a morph depending on its extent.
   - For instance when horizontal space gets narrower, we want to display different layouts vary the font size etc.
 - Allows the user to control breakpoints and assign different masters based on the extent of the selected morph
 - For more fine grained control, the responsive halo is useful
 - The responsive halo can be summoed via the normal halo menu
 - It is only available if the selected morph is assigned to a master component
 - Inside the responsive halo the user can create new breakpoints and also adjust their range by slide control

### Effects Controller
 - For any target, multiple styles can be applied
 - All of them can be applied at the same time, none of them are mutually exclusive
 - To add a new style, the plus button on the top right of the effects controller can be used
 - The newly added style can then be adjusted accordingly via the drop down
 - Fine tuning of the style can be achieved via the popup for each style entry
#### Drop Shadow
 - Displays a backdrop shadow, that allows to accentuate a morph and give it a visual effect of hovering above other elements in a scene.
#### Inset Shadow
 - Displays an inner shadow, which creates the impression of an indentation defined by the morph's bounds. Nice for visualizing pressed buttons and such. 
#### Opacity
 - Makes the morph itself transparent. Unlike controlling the opacity of the fill of a morph, this turns the morph and all of its submorphs transparent.
#### Background Blur
 - Given that the morph is translucent (due to opacity or transparent fill) will apply a blur effect to the are covered by the selected morph.
#### Inner Blur
 - Will apply a blur effect to the morph itself and all of its submorphs.
#### Cursor
 - Adjustes the cursor style while hovering over a morph

## Scene Graph
- each node corresponds to a morph in the world
- displays the state of the morph
  - visibility (can be toggled)
  - the name of the morph (auto scrolled in case name is too long to display)
  - auto layouts and their direction
  - control wether or not a morph belongs to a layout or not
### Filtering
 - scene graph can be queried via a search.
 - uncollapses the entire tree and only displays the nodes which mach the query
### Navigation
 - collapse and uncollapsing nodes to drill down the scene graph
### Applying Structural Changes
 -  drag and drop of nodes corresponds to drag and drop of morphs

## System Browser
 - Core Packages vs Projects
 - Controls (history, browse, tabs, eval backend)
 - Module Actions (open file, search, render markdown, get snippet)
 - Browsing and Editing modules and components
 - Editing Markdown and CSS
 - Editing package configurations

### Reconciliation

  - We previously described the programmatic interface to defining and deriving components.
  - In order to provide a direct manipulation, purely visual workflow to create and modify component definitions, `lively.next` ships with a reconciliation engine which bridges the gap between visual represenation and symbolic description of componnent definitions.
  - This is done by translating direct manipulation changes (such as draggin, dropping, edditing, style property changes) into changes to the module source code where the components are defined.
  - To illustrate the point, below you can see a simplified example of what the reconciliation engine is able to archieve:

<!-- __lv_expr__:{part}:lively.morphic:{InteractiveDelay}:nextguys--lively-next-relaunch/explanation/examples.cp.js:part(InteractiveDelay, { viewModel: { loader: 'reconciliation' }}) -->

  - Besides evolving already existing component definitions purely visually, the user is also able to create entirely new component definitions from scratch.

### Reconciliation inside the System Browser
 - the user browses to a component module and finds the component definition
 - the system browser displays a edit button to start an edit session
 - once changes are propagated back, a revert button becomes active
 - the user can also toggle the behavior of the component
 - during active behavior, the reconciliation is temporarily disabled
 - **Downsides:** The user can not edit the code of the module while the reconciliation is active. Once the user starts to edit the module code, the system prompts the user to exit the reconciliation sessons affecting this module.

### Reconciliation via the Component Browser
 - the user browses to a component module and finds the component that they want to edit
 - in case the user has the permission to edit this component the edit button is displayed next to the import button
 - the user opens up the component by pressing the edit button (this will open the component edit  instance instead of a derived instance)
 - the user adjusts the component via direct manipulation, the code is updated in the background completely transparent to the user
 - **Downsides:** While the component browser provides a nice way to find and use components, using it as a tool for managing custom design systems is cumbersome as one always has to select and edit the desired component through the component browser.

### Reconciliation via Component Module (preferred for Designer)
> ⚠️ **Warning**
>
> At the point in time of this writing component modules have not been released yet. So the following is the outline of the concept, not the actual thing.

  ![](/local_projects/nextguys--lively-next-relaunch/assets/component%20module%20mock.png)
 - Allows to organize component modules as a design system in a visual manner.
 - Derivation relationships between components are visualized via arrows that track which component is derived from which.
 - Allows the user to organize the components on the canvas freely, while also providing a default ordering that uses the structure of the component module source code as a template.
 - The user can utilize the top left hyperlink to navigate to the component module inside the system browser.
 - Again, all changes to the components will be reconciled back into the component module.
 - In particular the following interactions will also get reconciled accordingly:
   - Removing a component from the module space will delete the definition, and perform the corresponding adjustments (like deleting all the derivations if they are not detached).
   - Components that are derived can be detached from their parents, in which case tehy preserve all of their current props but forget their ancestor.
   - Dropping a component into the space or declaring a previously non component inside a component, will insert the corresponding component definition in the module source code behind the scenes.
   - Dragging and dropping a component will move the component and all of its derivatives over to another component. In case a cyclical dependency would result, the drag and drop is canceled by the system.
   - Dragging and dropping a component onto anything else that is not also a component module will lead to a canceled drop (the component will snap back to its original position).

### Reconciliation via Component Editor (preferred for Designer/Engineer)
> ⚠️ **Warning**
>
> At the point in time of this writing the component editor has not been implemented yet. So the following is the outline of the concept, not the actual thing.

 - The Component Editor allows to edit the code of the view model as well as manipulate the component definition at the same time
 - It is also not blocking the editing of the component definition with reconciliation still active.
 - This is possible since the component editor is able to isolate both component definition and view model class definition, and manages the changes to the component module behind the scenes. 

## Inspector
- A tool mostly used by experts or people familiar with programming, it is usually too detailed for users not interested in the internal state of objects.
- Displays all properties of a morph or any object the is inspected as a tree view
- Below the tree, the user has access to a workspace area, where they can evaluate any kind of code within the context of the inspected object
  - The user is able to select the binding of the workspace via the dropdown
  - For more information about evaluation and modules, see the **Modules Chapter**

## System Search
- handy tool to perform a global search in the lively.next code base as well as the currently loaded project
- you are able to only query the "running" code, that is only the loaded modules or query all source code availabel to the system.
- matching lines can open up the system browser right at the code location by hitting enter or double clicking

## Object Editor

> ⚠️ **Warning**
>
> The Object Editor in its current form is going to be deprecated in favor of the new component editor soon. The component editor will be basically a superset of the object editor and be able to edit both morphs, components and non visual objects (like in the case of remote server side scripting).

 - Can edit morph classes or view model classes
   - If both morph class and view model class are available, prompts the user to choose which one to edit
 - Inspect subclass hierarchy on the left hand
 - Continously allows for the evaluation of snippets inside of the editable area where the context is bound to the object editor target
 - Saving changes in the object editor has an immediate effect on the edited class, changes propage among all instances
 - Imports can be managed via a sidebar menu
 - Subclasses can be created as well
   - The object editor performs the subclassing, module adjustment and reassignment of the class to the current instance automatically in the abckground
   - The new subclass will be declared and exported from the same module as its superclass, as long as the superclass is not part of the lively.next core.
     - If we are subclassing a core class, a new module is created solely for the purpose of storing the new subclass

