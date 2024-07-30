Generally speaking, `lively.next` presents itself as a desktop OS running inside the browser. It comes with all of the standard elements from these kinds of systems, such as a desktop, mouse, context menus, menu bars and windows.
Given the fact that these things very essentially invented in Smalltalk and `lively.next` regards itself as a descendant of such systems this should not be surprising.

![A `lively.next` instance showcasing various tools.](/local_projects/nextguys--lively-next-relaunch/assets/lively-desktop.png){style="max-width:800px"}

In the following we will outline in detail the various different UI elements and tools that `lively.next` comes with, how they interact, how you are supposed to use them, and which tools may be introduced in the near future.

## Top Bar

The top bar is floating on top of the desktop at all times, providing the user with a variety of shortcuts for important actions and modes implemented in the system.
 
### Save Button

Allows the user to save the current project or playground. Apart from the default *click and save* functionality, a variety of other saving modes can be triggered via the drop down menu. For more details on this button and its capability, please refer to our introduction into working with [`lively.project`](#documentation/projects). When working with `lively.project`s, the dropdown also allows to make various changes to the settings of a project.
 
### Halo and Interaction Mode

![](/local_projects/nextguys--lively-next-relaunch/assets/halo-mode.png){style="max-width:200px"}

When working with designs or applications, there are various expectations for how the mouse cursor should behave.
During the implementation or testing of an application, we want the cursor to function as it would for an end user interacting with the user interface.
This behavior is referred to as *interactive mode* because it facilitates user interaction.

However, when designing an application or crafting a user interface, we prioritize the easy selection and manipulation of morphs without interference from interactive behaviors.
In line with other Morphic implementations, selecting a morph to activate resize handles, property manipulation, or dragging is known as invoking a *Halo*.
The halo can be activated via ***CMD-(left click)*** when in interactive mode.

  ![Depiction of a halo getting summoned on a morph.](/local_projects/nextguys--lively-next-relaunch/assets/summon-halo.gif){style="max-width:200px"}

To propagate the selection to the enclosing morph, one simply needs to meta click on the halo again, successively propagating the halo upwards until reaching the world level, at which point the halo selection is discarded.

![The halo selection can be propagated up a morph's owner chain.](/local_projects/nextguys--lively-next-relaunch/assets/propagate-halo.gif){style="max-width:200px"}

For convenience, users can enter halo mode, where a simple left click is sufficient to summon halos and on hovering, the boundaries of the hovered morph are displayed. This makes it easy to navigate a complex user interface and select the precise morph of interest.

![Selection targets are displayed when in Halo mode.](/local_projects/nextguys--lively-next-relaunch/assets/hover-halo.gif){style="max-width:200px"}

In the top bar, the cursor mode button displays either a cursor in *halo mode* or a hand in *interactive mode*. Users can switch between these modes via a drop-down menu invoked by the caret next to the cursor mode button.

### Halo Controls

You may have noticed that once the halo is summoned, it displays a bunch of controls surrounding the selected morph. Let's go over each of these briefly and explain what they allow the user to do:

#### Resize Handles

![Resizing an object via the halo.](/local_projects/nextguys--lively-next-relaunch/assets/resize-halo.gif){style="max-width:200px"}

Allows the user to resize the selected object. Note, that you can also grab the sides of the halo in order to adjust the width or height in isolation.

Holding down the ***Shift-key*** while dragging one of the corners will lock the current proportion of the morph and adjust the extent proportionally.

When resizing, the halo will automatically display visual guides (the yellow lines) that indicate how the center and bounds of the resized morph relate to its surrounding morphs. If you hold down the ***Ctrl-key*** during resizing the morph will snap to these guides to make aligning easier.

#### Name Tag

![Changing the name of an object.](/local_projects/nextguys--lively-next-relaunch/assets/rename-halo.gif){style="max-width:200px"}

Displays the name of the selected morph and also allows the user to edit and change the name. Names are particularly important in `lively.next`, since they later on play key roles when attaching behavior to controls in a user interface.

#### Rotation / Scale Control

![Rotating via halo](/local_projects/nextguys--lively-next-relaunch/assets/rotate-halo.gif){style="max-width:200px"}

Allows to control the rotation as well as the scale factor of the selected morph.
By default dragging the handle will adjust the rotation like illustrated above.

However holding down the ***Shift-key*** will change the halo to manipulate the scale property. Note, how the icon of the handle changes in response to the shift key being pressed:

![Scaling via halo](/local_projects/nextguys--lively-next-relaunch/assets/scale-halo.gif){style="max-width:200px"}

Scaling an morph in the world this way is disabled when the world zoom is enabled. This is because the world zoom operates by scaling each of the morphs inside the world automatically. The world zoom is explained in more detail in the **World Zoom Section**.

#### Declare / Revoke Component

![The "component" halo](/local_projects/nextguys--lively-next-relaunch/assets/component_halo.png){style="max-width:80px"}

Allows to turn a selected morph into a **component definition** or alternatively also revoke a component (i.e. remove the component and its definition). For more information about components please refer to our [introduction to `lively.morphic` and components](#documentation/morphic).

#### Copy

![Copying a morph via the halo.](/local_projects/nextguys--lively-next-relaunch/assets/copy-halo.gif){style="max-width:200px"}

Holding and dragging this control will copy the morph instance at hand and prepare the cursor to drop the new (copied) instance on a new target.
Note that if this is applied to a component, it will **not** copy the component but rather create a new morph derived from that component (aka an *instance* of it).

This is also useful when you want to create new components from existing components: Simply copy an existing component and declare the derived morph to be a new component, with the above-mentioned "component halo".

#### Open Morph Menu

![The menu halo](/local_projects/nextguys--lively-next-relaunch/assets/menu_halo.png){style="max-width:80px"}

Opens the default menu for morphs. This can be a custom set of menu items, depending on what kind of morph is selected. For instance, selecting an image will give rise to different menu items than selecting a textbox etc.

> ⚠️ **Warning**
>
> The current default morph menu is subject to change very soon. Currently, it contains various actions that are either not supported or are overly specific and not designed for general use. We will update this area accordingly.

#### Drag

![Dragging a morph via the halo handle.](/local_projects/nextguys--lively-next-relaunch/assets/drag-halo.gif){style="max-width:300px"}

In order to change a morph's position, the user can either use the drag handle of the halo, or 
drag the morph by dragging the inside of the halo itself.

#### Grab

![Grabbing a morph via the halo handle.](/local_projects/nextguys--lively-next-relaunch/assets/grab-halo.gif){style="max-width:300px"}

The structure of morph compositions can also be adjusted via the grab control on the halo. This allows the user to remove a morph from its parent and subsequently assign it to a different owner. Its also possible to place the morph into the world instead of a new owner morph.

#### Remove

![](/local_projects/nextguys--lively-next-relaunch/assets/remove-halo.gif){style="max-width:300px"}

Pressing this button removes the selected morph entirely.

#### Open Inspector

![The inspector halo](/local_projects/nextguys--lively-next-relaunch/assets/inspector_halo.png){style="max-width:80px"}

For more details please refer to the **Inspector Section** below.

### Textbox Creator

![](/local_projects/nextguys--lively-next-relaunch/assets/text-mode.png){style="max-width:200px"}

Next, we find the button that toggles the *Textbox Creation Mode* in the top bar. This mode should be familiar to users of most CAD or Visual Design Applications.

When active, the mode allows users to create new text boxes by either clicking on the world, in which case a default text box will be created at the spot, or by dragging the cursor across the world which allows the users to define a textbox with arbitrary extent.

In the case of the text box with arbitrary extent, the user will automatically enter the *edit mode* and be able to input the desired text into the box. The same can be achieved by double-clicking on a text with the hand being in *halo mode*.
When editing a textbox, the text can be further refined and customized via the *Rich Text Controls*. For more detail on this please refer to the **Rich Text Controls Section** below.

### Shape Creator

![](/local_projects/nextguys--lively-next-relaunch/assets/shape-mode.png){style="max-width:200px"}

When active, multiple different types of morphs can be created in the world with via click-and-drag, analogue to the behavior described for texts above. The different types of morphs are explained in more detail in our [morphic guide](#documentation/morphic).

### Asset Browser

![](/local_projects/nextguys--lively-next-relaunch/assets/asset-button.png){style="max-width:200px"}

When working with `lively.project`s, we provide many convenience functions to the work with assets, such as automatic bundling. The Asset Browser is the central tool to manage your assets. Uploading your assets via this tool will automatically copy them into the appropriate folder.

You can use the Asset Browser to see all assets currently available in your project, upload new ones, or delete already uploaded assets.
   - If you are wondering about font files, these are handled by a dedicated *Font Manager* available in the *Rich Text Control* in the sidebar.

> ⚠️ **Warning**
>
> As of now, the support for **video** and **audio** has not yet been implemented, since the corresponding morphs are not yet ready for primetime. We will update this section accordingly once we finalize support for these asset types.

![An opened Asset Browser, including the assets for this website.](/local_projects/nextguys--lively-next-relaunch/assets/asset_browser_open.png){style="max-width:400px"}

### Component Browser

![The button to open the Component Browser in the top bar.](/local_projects/nextguys--lively-next-relaunch/assets/component-button.png){style="max-width:200px"}

Allows the user to browse all available components in the current project as well as the standard components provided by the system. Also provides separate access to the [`partsbin` repository](https://github.com/LivelyKernel/partsbin), where we maintain a bunch of useful, interesting or even reusable components to be used.

![An opened Component Browser, showing the component that is this website.](/local_projects/nextguys--lively-next-relaunch/assets/component_browser_open.png){style="max-width:400px"}

A selected component can be instantiated by dragging it from the component browser into the world. The user has the option to disable or enable to behavior of a component once it is instantiated. This is useful for cases, where we do not want the behavior of a component to interfere with my work immediately (for instance if we are in the process of building new components). If the component is part of the currently opened project it is also possible to open up the component in the world in order to manipulate the definition.

### Minimap

![The button that shows/closes the minimap and allows to enable "canvas mode"](/local_projects/nextguys--lively-next-relaunch/assets/mini-map-button.png){style="max-width:200px"}

The world can be configured to support infinite scroll. We refer to this mode as "canvas mode". If enabled, the user is able to spread out all morphs on the world as far as needed. You can scroll in all directions, automatically expanding the world.
Additionally, you can also zoom in and out of the world, by using ***Ctrl-Mousewheel***. Windows and Popups are excluded from this and thus have a "fixed position".

When *canvas mode* enabled, it is easy to loose track of certain elements that are scrolled out of the view. For this purpose, a minimap can be shown which displays the currently displayed part of the world as well as where other morphs are located that are scrolled out of the world bounds.

![The zoom indicator, at the side of an opened minimap, showing a zoom value when zoomed in.](/local_projects/nextguys--lively-next-relaunch/assets/zoom_indicator.png){style="max-width:300px"}

The currently active zoom factor is visible at all times in the zoom indicator in the bottom-right corner. Clicking the indicator will reset the viewport and the zoom to its default values.

> ⚠️ **Warning**
>
> "Canvas mode" interferes with the scale of all morphs opened in the world, thus caution is advised should you utilize this property for something else.
>
> The **minimap** is as of now not finished and might not work as expected when depicting complicated morph hierarchies (especially when you changed the origin of morphs).

### Offline/Online Mode

Allows the user to toggle between offline- and online-mode. This is only relevant when working with `lively.project`s, where usually synchronization with a `git` server is performed. For more details on this, please refer to our guide to [working with project](#documentation/projects).
 
### User Status

![Even Robins dog is using `lively.next`!](/local_projects/nextguys--lively-next-relaunch/assets/justin_user_flap.png){style="max-width:200px"}

Displays the connection status to the `lively.next` server (the backend). When a connection is established, you will see a small green light. As of now, you will need to run the server on your own system in parallel with your browser. When logged in using a GitHub Account, you will see the name and avatar (if available) of the currently logged in user. You can either logout or login using this widget, depending on the current state.

 > ⚠️ **Warning**
 >
 > As of now, `lively.next` only supports Github Accounts in order to authenticate. We are working on expanding the support for different platforms in the future and will update this section accordingly.

## Version Checker

Located in the bottom-left corner, the "Version Checker" shows the version of `lively.next` currently running on your system. Clicking the appropriate icon will copy the version hash to your clipboard, which is handy for bug reports. Clicking on the version checker itself will refresh its state.


There are multiple icons that might be displayed which show how the currently running version relates to the latest published version of `lively.next`:

- **up to date:** The lively.next repository is on the latest commit on the main branch

![](/local_projects/nextguys--lively-next-relaunch/assets/up-to-date.png){style="max-width:170px"}

- **behind:** The lively.next repository is on an outdated commit and can be updated. Provides shortcut for immediately updating lively.next to the latest version.

![](/local_projects/nextguys--lively-next-relaunch/assets/update.png){style="max-width:200px"}

- **ahead:** The user is on a more recent commit than the latest one on the main branch. This often happens when working on `lively.next` core packages.

![](/local_projects/nextguys--lively-next-relaunch/assets/ahead.png){style="max-width:170px"}

- **out of sync:** This usually only happens if the user is a on custom branch while working on the `lively.next` core. It means that the most recent version of `lively.next` cannot be found in the current branch. This can often be solved by rebasing onto the `main` branch. **If you are a designer and encounter this version tag, please contact one of the programmers in your team.** They will most likely be able to help you out.

![](/local_projects/nextguys--lively-next-relaunch/assets/out-of-sync.png){style="max-width:260px"}

The last two will usually only be displayed to developers, while the first two are relevant to all users of `lively.next`.

## Properties Panel

The properties panel can be opened and closed via the appropriate flap, at the left side of the workspace. It provides a convenient way to inspect and adjust the majority of morphic properties. These properties are controlled by different sections inside of the panel, that are displayed with respect to the selected target (for instance a text will have different controls than an image or a default shape).

In the next sections, we will go over most of the available widgets that might appear in the properties panel:

### Background

This controls the background of the workspace (which is basically the fill of the "world"). It is only displayed if no target is selected.

### Shape

![The Shape Control Widget](/local_projects/nextguys--lively-next-relaunch/assets/shape_control.png){style="max-width:400px"}

The Shape Control Panel is always displayed whenever a target is selected. This panel provides comprehensive control over the properties of a morph that define its *shape*. These properties can be finely tuned to achieve the desired appearance and behavior of the morph. From top to bottom, the following properties are available:

#### Position

The position can be controlled via its `X` and `Y` value respectively, allowing users to specify the exact coordinates of the morph within its parent container. By adjusting the position, users can precisely place the morph where it is needed within the design.

#### Width and Height

Width and height of the selected morph are displayed in the number inputs. Users can input specific values to resize the morph. Additionally, there is a lock toggle feature that ensures the extent proportions are preserved when changing either the width or height. This is particularly useful for maintaining the aspect ratio of the morph. **Note that these inputs are disabled if the width or height is controlled by a layout (see the section below)!**

### Resizing Behavior

The Resizing Behavior control provides options for how the morph should resize, typically based on the layout that controls the currently selected morph. The available options include:

- **Fixed Dimension:** The default resizing behavior, where the morph maintains a fixed size as specified by its width or height value.
- **Fill Dimension:** The morph will expand to fill any remaining empty space within its parent container.
- **Hug Dimension:** The morph will hug its content, resizing to fit precisely around the content, such as a document or a set of children, if the layout permits.

### Border Radius

For morphs with corners, the "Border Radius" section provides controls to adjust the curvature of the corners. There is also an "individual corner control" toggle that enables users to set the radius of each corner independently. This allows for more creative and customized border shapes.

### Rotation

The Rotation section offers a control to rotate the morph to the desired angle. This is an alternative to the rotation control already provided by the Halo (see above).

### Clipping Mode

The "Clipping Mode" section determines whether the overflow content of the morph is visible or cropped. If the overflow is set to be cropped, users have the option to enable a scroll overflow. This feature allows the clipped content to be scrolled within the morph, adding functionality for viewing additional content within a limited space. You can select from the following options:

- **visible:** This is the default, the morphs are visible regardless if they overlap their parent or not.
- **hidden:** Simple clip of (hide) all overlapping morphs.
- **scroll:** Clips all of the overlapping morphs but allows to scroll the morph such that all clipped morphs can be scrolled into view. The scrollbars are always visible.
- **auto:** Same as *scroll* yet the scrollbar is only displayed if you can actually scroll across the dimension.

### Rich Text

![The Rich Text Widget](/local_projects/nextguys--lively-next-relaunch/assets/rich_text_controls.png){style="max-width:400px"}

The "Rich Text Controls" appear only when a Textmorph is selected.  It comes with all of the standard text properties that one would expect and should resemble what you know from Tools like "MS Office Word" and others. The following properties are available:

- Font Family
- Font Style
- Font Size
- Line Height
- Letter Spacing
- Font Color
- Text Align
- Text Wrapping, which offers the following types of wrapping:
  - **no wrap:** The default value, the text lines are never wrapped and go as long until the next newline character is encountered.
  - **wrap by words:** The lines in the text are wrapped on a word level. Once the space becomes so narrows that single words do not fit into a line any more, the line starts to be wrapped by characters.
  - **wrap by characters:** The lines in the text are wrapped on a character level.
  - **wrap only by words:** The lines in the text are wrapped on a word level at all times, even in super narrow space scenarios. 
- Text Padding

The bottom in the top-right allows to open the "Font Manager", which allows the user to import font files and configure them accordingly.
While `lively.next` ships with a wide variety of fonts with an permissive license that you can use and bundle in your applications, in some cases you might want to your your own font files. The font manager allows uploading and using additional fonts.

![The Rich Text Widget with an opened Font Manager](/local_projects/nextguys--lively-next-relaunch/assets/font_manager.png){style="max-width:800px"}

#### Interactive Editing and Styling of Rich Text

Naturally, rich text allows us not only to perform text styling on the entire textbox, but also on a selected piece of the text. To summon the appropriate popup, you will need to interactively edit some text (usually by double clicking into the text) and select some text *by dragging the selection with the mouse*.

![The Rich Text Formatting Popup](/local_projects/nextguys--lively-next-relaunch/assets/rich_text_popup.png){style="max-width:400px"}

The formatting popup gives you access to some exclusive styling properties, which only make sense when targeting specific pieces of text, namely the definition of links and quotes.

Options like "Text Align" and "Padding" are not available in the popup, as they in turn only make sense when targeting a whole textbox.

### Layout

The "Layout" widget is always displayed when a target is selected, except for Textboxes. At the time of this writing, there are primarily two layouts available in `lively.next`:

#### Constraints Layout
This is the default layout applied to morphs if nothing else is specified. It is only available for morphs **inside** of a container.

A constraints based layout positions and resizes a morph in relation to its parent morph. It allows to apply constraints to both the horizontal and the vertical dimension independently.The following constraints are available:

##### Fixed Positioning

Keeps the posittion of a morph fixed in relation to specific fix-points of its outer container. It is often helpful to think of these "positions" as fixed distances to the borders of the outer container

![A morph that has a fixed position in relation to the container left and top border.](/local_projects/nextguys--lively-next-relaunch/assets/fixed-default.gif){style="max-width:300px"}

![A morph that has a fixed position in relation to the container right and bottom border.](/local_projects/nextguys--lively-next-relaunch/assets/fixed-bottom.gif){style="max-width:300px"}

![A morph that has a fixed position in relation to the containers top **and** bottom border at the same time.](/local_projects/nextguys--lively-next-relaunch/assets/fixed-top-bottom.gif){style="max-width:300px"}

##### Centered Positioning

This option can keep a morph centered in relation to its parent in either horizontal and vertical dimension.

![A Constraint Layout centering a morph.](/local_projects/nextguys--lively-next-relaunch/assets/centered.gif){style="max-width:300px"}
 
 
##### Scaling Positioning

Resizes a morph in relation to the bounds of its parent.

![A Constraint Layout resizing a morph in relation to its container.](/local_projects/nextguys--lively-next-relaunch/assets/scale.gif){style="max-width:300px"}
   
#### Auto Layout

While a constraint based layout is specified on the basis of the child morphs of a container, the auto layout is defined on the container itself. Enabling an auto-layout on a container will disable the constraints based controls for its children. An auto layout can be added to a container via the "Plus" button when a morph is selected. If a layout already exists on the container, it can be removed via the same button.

An auto layout allows you to either position the children of a container along rows or columns:

![](/local_projects/nextguys--lively-next-relaunch/assets/item-axis.gif){style="max-width:300px"}

The distance between the child items can be controlled via the "spacing" option of the layout:

![](/local_projects/nextguys--lively-next-relaunch/assets/item-spacing.gif){style="max-width:300px"}

These layouts also allow for the specification of a padding that will control the distance between the children of a container and its border.

When the children of a container are too large to be spaced according to the specified axis, wrapping can be enabled:

![](/local_projects/nextguys--lively-next-relaunch/assets/wrap-items.gif){style="max-width:300px"}

Further, we can also control the alignment of the axis itself inside of the container. In total, nine different configurations are possible, which can be selected via a popover:

![](/local_projects/nextguys--lively-next-relaunch/assets/align-axis.gif){style="max-width:300px"}

Lastly we can also configure the spacing of the morphs within the axis. They can either be packed (so the morphs sit tightly next to each other) or spaced (the morphs try to keep the maximum distance apart from each other):

![](/local_projects/nextguys--lively-next-relaunch/assets/axis-spacing.gif){style="max-width:300px"}

### Fill

The widget controlling a morphs fill is always visible as long as a target is selected. By default, it allows to select the fill color of a morph, while special morphs like Images allow for a wider variety of controls.

### Stroke

The "Stroke Widget" is always visible when a target is selected. It allows to control the style of the border of the morph. You can control the color of the border, as well  as its width and style (such as *solid*, *dotted*, *dashed*, ...).

For all morphs except `Path` and `Polygon` you can also activate an advanced mode that allows you to control each side of the border independently.

![The advanced border control popup.](/local_projects/nextguys--lively-next-relaunch/assets/advanced_stroke.png){style="max-width:400px"}

### Component Control

![The component controls without any master components specified on the target.](/local_projects/nextguys--lively-next-relaunch/assets/component_controls.png){style="max-width:400px"}

The component section allows you to configure the overall master component of a morph and in respect to click and hover event. Clicking on the "link" button opens a popup similar to the "Component Browser" which you can use to set the specified master.

### Component States

This section is only active in the case that the target is assigned a master (or was derived from a master). It allows you to configure custom component states that can be triggered programmatically. An example of a scenario where this is useful is the implementation of an active and inactive state. An arbitrary number of custom states can be defined. For more details, please see our [introduction to `lively.morphic` and components](#documentation/morphic).

### Responsive Design

This section is only available if the selected morph is assigned to a master component.

For modern web-design, designing with multiple different view-ports in mind at all times is crucial! The responsive design section allows you to apply different styles to a morph, depending on its extent. For instance, when horizontal space gets narrower, we might want to display different layouts, vary the font size etc... The connection between different view-ports and their styling is defined in a similar way as for the component states mentioned above. 


To define the different view-port sizes that are to be styled independently, one utilized the responsive halo:

![Defining and editing breakpoint via the "Responsive Halo".](/local_projects/nextguys--lively-next-relaunch/assets/responsive_halo.mp4){.responsive-video}

### Effects Controller

The last section in the 'Properties Panel' is the "Effect Section". It allows is possible to add multiple effect via the `+`-Button, as they are not mutually exclusive. After adding a new effect, the concrete effect to be applied can be selected via the dropdown menu and configured via the popup that is to be triggered with the left button. 

The following effects are available:

#### Drop Shadow

Displays a backdrop shadow, that allows to accentuate a morph and give it a visual effect of hovering above other elements in a scene.

#### Inset Shadow

Displays an inner shadow, which creates the impression of an indentation defined by the morph's bounds. Handy for indicating pressed buttons and similar elements.

#### Opacity

Makes the morph itself transparent. Unlike controlling the opacity of the fill of a morph, this turns the morph and **all of its submorphs transparent**.

#### Background Blur

Given that the morph is translucent (due to opacity or transparent fill), this will apply a blur effect to the area covered by the selected morph.

#### Inner Blur

Will apply a blur effect to the morph itself and all of its submorphs.

#### Cursor

Changes the cursor style while hovering over a morph. Most of the default browser options should be available.

## Scene Graph

At the opposite site of the properties panel, at the left border of the workspace, a similar flap can be opened and closed. It contains the scene graph.

![Partial "Scene Graph" for the design of this webiste.](/local_projects/nextguys--lively-next-relaunch/assets/scene_graph.png){style="max-width:400px"}

Each node of the scene graph represents a morph present in the world. Some special morphs, such as windows and other tooling, are excluded as to not clutter the graph. Hierarchies can be collapsed and uncollapsed. For each node, you can toggle its visibility and whether it is to be controlled by layouts, and observe its name and layout, if applicable.

At the top of the scene graph, you can query the graph to display only morphs with a specific name.

You can click on each node to target the morph it represents and open its halo. Additionally, you can recompose the morph structure of a scene by drag-and-dropping nodes.

## System Browser

![](/local_projects/nextguys--lively-next-relaunch/assets/system_browser.png){style="max-width:600px"}


The "System Browser" is one of the main tools for programmers inside of `lively.next`. It allows you, amongst other things, to read and write source code, integrates with the system search of `lively.next` and gives you quick access to other tools such as our 'Test Runner'. It can be opened with ***Ctrl-B*** or via the world menu, accessible by right-clicking anywhere on the world.

The core of `lively.next` is structured into multiple packages. For example, `lively.morphic` is one such package. All available packages are displayed in the left-most column of the *System Browser* (F). The browser categorizes loaded packages into packages belonging to the lively *core*, loaded *projects*, and other loaded packages which are controlled via a bare `git` repository but are not part of the `lively.next` core.

Each package consists of multiple files and maybe folders. These are visible in the second colum (G). Depending on whether a folder or a file is selected in the second column, the contents of the third and subsequent columns (H) change. In the above screenshot, it contains the classes and top-level functions defined in `morph.js`. Selecting a class in column (H) will open a new column, containing the functions inside of the class and so on. This concept of a dynamic number of columns should be familiar to users with previous exposure to Smalltalk Browsers and is known as [Miller Columns](https://en.wikipedia.org/wiki/Miller_columns).

Section (A) contains buttons for code navigation, with which you can browser the history of previously opened modules in this browser. Button (B) opens up a search field to browse all modules available in the system. Button (C) opens the "System Search" (see below) and (D) allows to open new tabs in order to open multiple modules inside of the same "System Browser" at the same time.

Section (I) contains various handy actions in order to execute specific actions, depending on the opened file. For example, you might open the currently opened module in the "File Browser" (see below), run tests contained in a module or open the markdown preview.

The browser comes with editing modes for multiple different file types, such as `JavaScript`, `JSON`, `markdown`, and `CSS`. It is fully integrated in the system, so that saving a `JavaScript` module for example will automatically patch the behavior of live instances in the world and saving the `index.css` file of a project will take effect immediately.

## Reconciliation

In our [introduction to `lively.morphic`](#explanations/morphic), we introduced our component system and how to use it to build composable and reusable UI building blocks. Using this code driven approach might be handy for developers, but this workflow is not accessible for non-programmers. Even for programmers, navigating large component hierarchies might be burdensome at some times. **One of our goals for the `lively.next` project is to change this and provide our users with a graphical, direct manipulation workflow for the definition and derivation of components.** For this reason, `lively.ide` comes with a **reconciliation** mechanism that seamlessly translates between the code and visual representation  of components.

To illustrate this point, below you can see a simplified example of what the reconciliation engine is able to achieve:

<!-- __lv_expr__:{part}:lively.morphic:{InteractiveDelay}:nextguys--lively-next-relaunch/explanation/examples.cp.js:part(InteractiveDelay, { viewModel: { loader: 'reconciliation' }}) -->

The reconciliation mechanism is accessible via two different ways:

### Reconciliation inside the System Browser

When browsing a component module (`.cp.js`), there is an "Edit Component" button besides each component definition. Clicking this button will open a visual representation of the component definition. It can subsequently be changed in the same way as all others morphs in the system, utilizing the **Properties Panel** as described above. Changes will be propagated back into the source code in real time. Once changes have been made, you can revert them using the appropriate button at the side of component definition. When the component in question has a `ViewModel` setup, its behavior can be activated, again by using the appropriate button. This allows to easily test the behavior of a component and is thus a handy option for developers as well. When the behavior of a component is activated, the reconciliation will temporarily be disabled, in order to keep the separation between visual representation and the behavior implementation in order.

> **⚠️ Warning**
> When reconciliation is active, it is not possible to edit the code inside of the module by hand. Editing the source code will prompt the user to exit the reconciliation session.

### Reconciliation via the Component Browser

Alternatively, it is possible to open a component without usage of the **System Browser** by choosing it in the **Component Browser**. It is only possible to edit components in the currently loaded project (see our guide to projects for more info). If this condition is met, you will see an edit button once a component is selected. Again, the visual representation of the component opens in the world an can be changed by using the **Properties Panel**. The code will automatically be updated by the system, total transparent to the user.

## Inspector

The "Inspector" allows to inspect the internal state of an object. It can be summoned via the *Inspector Halo* (see above) or by selecting a morph or code reference to an object and pressing ***Ctrl-Shift-I***.

It is a tool mostly used by experts or people familiar with programming, as is usually too detailed for users not interested in the internal state of objects.
The Inspector displays all properties of a morph or any object that is inspected in a filterable tree view. Below the tree, the user has access to a workspace area, where they can evaluate any kind of code within the context of the inspected object (that is, `this` is bound to the inspected object). For more information about working with workspaces, please see the workspace section below. More information about code evaluation and modules can be found in our [introduction to `lively.modules`](#documentation/modules).

## System Search

![](/local_projects/nextguys--lively-next-relaunch/assets/search.png){style="max-width:400px"}

The "System Search" can be opened via the world menu or by pressing ***Ctrl-Shift-F***. It is a handy tool to perform a global search inside of the `lively.next` codebase, as well as the currently loaded project. A case-sensitive search mode, as well as support for regular expressions can be toggled. Found matches for a search can open up a "System Browser" right at the code location by double clicking the result you are interested in.

## File Browser

![The 'File Browser' browsing the contents of the project for this website.](/local_projects/nextguys--lively-next-relaunch/assets/file_browser.png){style="max-width:400px"}

The **System Browser** (see above) tries to execute modules you load and save, automatically lints your `JS` code and provides lots of other useful features. However, it does currently not support all file types. Additionally, sometimes you might not want the opinionated behavior of the **System Browser** and just want to edit a plain text file. For this reason, we provide the "File Browser", which again can be opened via the world menu. It allows you to navigate the contents of your `lively.next` directory in a tree structure, create and delete files, and change their contents. Editing and other operations are available via the buttons at the bottom of the browser. 

## Workspace

![A `JavaScrpipt` workspace evaluating a simple expression.](/local_projects/nextguys--lively-next-relaunch/assets/workspace.mp4){.responsive-video}

The **Workspace** can be summoned with ***Ctrl-K*** or via the *world menu*. There are multiple flavours available, although the `JavaScript` workspace is the one that will be used most in most circumstances.

The idea behind all workspaces is that they allow you to write code and immediately evaluate the code you have written. You can import arbitrary code from anywhere in the system or external libraries via a CDN. You can execute each line independently, either via right-clicking on a selection or via ***Alt-Enter*** (Win/Linux) or ***Cmd+D*** (macOS). The workspace is an extremely useful tool to quickly prototype something and allows you to feel the benefits of a truly live programming system such as `lively.next` the fastest!

## Terminal 

![Demonstration of executing shell commands from inside of `lively.next`.](/local_projects/nextguys--lively-next-relaunch/assets/shell_terminal.mp4){.responsive-video}

Through the `lively.server`, `lively.next` allows you to execute shell commands directly from inside the browser. The terminal is accessible through the *world menu*. The output of the last command that was executed is visible inside of the terminal. Interactive programs, such as `vi` are not supported. However, this can be handy to quickly commit your work from inside of lively, perform file systems from the command line, etc.

> **⚠️ Warning**
> 
> **As this gives essentially arbitrary access to all parts of your system, we do not recommend deploying `lively.next` servers openly on the web at this time**