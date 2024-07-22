
`lively.next` ships with its own particular flavor of the GUI framework `morphic`, which was first introduced in [`Self`](https://ftp.squeak.org/docs/Self-4.0-UI-Framework.pdf) and since then has been implemented multiple times, for example in [`Squeak`](https://wiki.squeak.org/squeak/morphic) and in [`LivelyKernel`](https://en.wikipedia.org/wiki/Lively_Kernel).

As the name `morphic` implies, this framework assembles GUIs by means of malleable objects called `Morphs`. Each of these `Morphs` can potentially also carry a complete custom set of behavior that implements the GUIs interactivity. These characteristic of the framework originally referred to as "liveness" and "directness" allows to inspect and explore every piece of the GUI and application at hand while it is running. This is particularly suitable for self sustaining live development environments such as `lively.next`. In `morphic`, GUIs are composed of tree-like structures where morphs contain sub-morphs, similar to the way tags are nested in `HTML`.

## Types
Different types of morphs are available to the user, which are implemented by (sub)class(es) of `Morph`.
- **Morph**
*This is the base morph, namely a rectangular shape that is used most often throughout the system. Useful for almost anything from wrapping nesting layouts to composing sophisticated UI elements.*

- **Ellipse**
*Very similar to the basic morph, but automatically maintains an elliptical shape. Obliterates the need to manually adjust the border radius once the extent changes.*

- **Image**
*Standard container for any kind of web supported image file (notably also GIFs!). Supports two different layout methods where the image is either scaled to fill the size of the morph (while respecting the ratio of the original image) or resized to fit the entire area.*

- **Text**
*One of the most powerful morphs that allows to display read-only text (for elements like UI labels or static website contents) but also allows for interactive rich-text editing.*

- **HTML**
*Allows to directly render custom HTML and bypass the standard morphic renderer. Useful in cases where we want to embed 3rd-party-libraries and create wrapper morphs for them.*

- **Canvas**
*Similar to the HTMLMorph yet specialized for the case where we want to render to a canvas. Provides convenience methods to access the canvas context. Useful for integrating 3rd-party canvas libraries that render 2D or 3D content.*

- **Path**
*Allows to draw SVG paths via the morph interface.*

- **Polygon**
*Specialized subclass of `Path` where the vertices form a closed path. Also allows to clip the submorphs via its shape.*

### Custom Subclasses

The previously introduced subclasses of `Morph` are just the default ones that ship with `lively.morphic`. It is always possible to create further subclasses in order to implement custom types of morphs for special purposes. In fact this has been the default way of doing things in [`Squeak`](https://wiki.squeak.org/squeak/morphic) and [`LivelyKernel`](https://en.wikipedia.org/wiki/Lively_Kernel). Both `LivelyKernel` and the original `Self` implementation further had the ability to vary the behavior with *Traits*, which made custom behaviors more pluggable.
In `lively.next` we favor a different approach, where custom subclassing of morphs should be kept to a minimum and DOMain specific behavior instead be implemented via a `ViewModel` that attaches to morph-compositions and augments their behavior accordingly. We discuss this in greater detail in the section on `ViewModel`s below.

## Properties
Morphs in `lively.next` come with a large set of visual properties. You can explore some of them in the interactive section below.

<!-- __lv_expr__:{part}:lively.morphic:{MorphicPropertyEssay}:nextguys--lively-next-relaunch/ui/docs/interactive-doc.cp.js:part(MorphicPropertyEssay) -->

Aside from the visual properties, morphs also come with a large set of *behavioral properties* which will not be covered in this chapter. For more info on the latter, please refer to our [API Documentation](https://livelykernel.github.io/lively.next/).

### Custom Subclasses

The previously introduced subclasses of `Morph` are just the default ones that ship with `lively.morphic`. It is always possible to create further subclasses in order to implement custom types of morphs for special purposes. In fact this has been the default way of doing things in [Squeak](https://wiki.squeak.org/squeak/morphic) and [LivelyKernel](https://en.wikipedia.org/wiki/Lively_Kernel). Both LivelyKernel and the original Self implementation further had the ability to vary the behavior with *Traits* which made custom behaviors more pluggable.
In `lively.next` we favor a different approach, where custom subclassing of morphs should be kept to a minimum and domain specific behavior instead be implemented via a `ViewModel` that attaches to morph-compositions and augments their behavior accordingly. We discuss this in greated detail in the [View Model Chapter](#ViewModels).

## Instantiating and using Morphs

Given a `Morph` class, we can instantiate it simply via the constructor:
```javascript
new Morph();
```
We can also pass morph properties to the constructor, like this:
```javascript
new Morph({ name: 'foo', fill: Color.red, borderWidth: 2 });
```
We refer to the property object above as the *spec* of a morph. Instead of directly invoking the constructor, it is also possible to utilize the `morph()` convenience function and pass the spec object to this function in order to create the morph:
```javascript
morph({ type: Morph, name: 'foo', fill: Color.red, borderWidth: 2})
```
Notice how we now pass the class of the morph as the type property inside of the spec.
If the type is just `Morph` we can also leave out the `type` property since this is the default value.
Via the spec we can further define not only the morph itself but also its submorphs and sub-submorphs (and so on) like so:
```javascript
let aMorph = morph({
  extent: pt(78.5, 78.7),
  borderRadius: 13,
  fill: Color.rgb(255, 0, 0),
  submorphs: [{
    type: Ellipse,
    name: 'eye',
    extent: pt(15.9, 16.6),
    position: pt(9.9, 7.6)
  }]
})
```
Just instantiating a morph via an object will not make it visible. For that to happen we need to mount it into the *World*. The *World* is itself a morph that is present at all times when the `lively.morphic` framework is embedded (be it a bundled application or the `lively.next`-IDE). In fact this very document you are reading is mounted inside of a *World*. So lets go ahead and call `aMorph.openInWorld()`, you will see this:

<!-- __lv_expr__:{part}:lively.morphic:{InteractiveDie}:nextguys--lively-next-relaunch/explanation/examples.cp.js:part(InteractiveDie) -->

You can now go ahead and manipulate the morph above in the workspace below. Try editing the code and running it via the button:

<!-- __lv_expr__:{part}:lively.morphic:{InteractiveDelay}:nextguys--lively-next-relaunch/explanation/examples.cp.js:part(InteractiveDelay, { viewModel: { loader: 'editor example 1' }}) -->

## Event System
Morphic comes with its completely custom build event system. This is for multiple reasons, since the classic DOM Event system...

1. is severely broken *(have you tried using onDrag?)*.
2. does not support the same event types that we expect in `morphic`, for instance hovering.
3. also does not match the morph object in the bubbling phase, since some morphs are rendered as multiple different DOM nodes.


## Halo
For more information on the Halo, please refer to the [`lively.next` studio Guide](#documentation/studio).

The event system in Morphic is a completely custom implementation on top of the native browser events.
DOM-Events that originate from the rendered elements in the browser are used as entry points and from then on a completely custom dispatch is performed.

Theses synthesized events are bubbling from the `morph` they originate from upwards until they reach the world `morph`.
During bubbling, the custom event callbacks are invoked on each of the traversed morph.
The event object itself carries further meta information about the targeted morph, as well as information with respect to the type of event *(pressed key, mouse buttons, etc...)*.
The propagation can be terminated by invoking the `event.stop()` method on the event object that is always passed to the event handler.
There are also certain events that concern the keyboard which are not only *augmented* but rather *simulated* behind the scenes.
This is implemented via a hidden DOM input node which is manually focused on demand via the event system. This gives us fine grained control about the redirection of keyboard events. For instance we can make any type of morph receive keyboard events as well as retrieve keyboard events even if no element is currently in focus, which is useful for the implementation of keyboard shortcuts.

### Classic Events
There is a set of basic DOM events which behave more or less the same as they do inside the DOM:
   - **onMouse (Down/Up/Move/Wheel)** *In response to the mouse buttons getting pressed.*
   - **onKey (Up/Down)** *In response to a key on the keyboard being pressed.*
   - **onContextMenu** *In response to the HTML context menu event. Is used to create custom morph based menus instead.*
  
### Customized Events
There is a set of events that provide a different behavior to the native DOM version. One of them is the drag event, which compared to the `HTML` event further provides more *movement specific* meta information to the morph as well as specific callbacks marking the *start* and *end* of the drag process:

   ![An example of a morph being dragged across a scene](/local_projects/nextguys--lively-next-relaunch/assets/dragging.gif) 
   - **onDrag** *Invoked continously while a morph is being dragged via touch gesture or mouse press and move. On each update it provides a drag delta that tells us about the current drag speed.*
   - **onDragStart** *Invoked once at the start of the drag process before onDrag is getting called repeatedly.*
   - **onDragEnd** *Invoked once at the end of the drag process.*

There are also completely synthesized versions of the focus and blur events. For one, unlike the browser, they cover all types of morphs, including the base morph. This is different to HTML which reserves the focus and blur events only for a certain set of elements of the text and input types.

<!-- __lv_expr__:{part}:lively.morphic:{FocusBlurDiagram}:nextguys--lively-next-relaunch/explanation/examples.cp.js:part(FocusBlurDiagram) -->

   - **onFocus** *Invoked if we call `focus()` on a morph where the `focusable` property is set to `true`. For text morphs the `focus()` function is called by default on a `mousedown` event.*
   - **onBlur** *Invoked on a currently focused morph if `focus()` is called on another one.*

### Custom Events
`lively.morphic` further supports a custom set of purely custom events:

   ![An example of a morph being grabbed between morphs](/local_projects/nextguys--lively-next-relaunch/assets/grabbing.gif) 
   - **onGrab** *If the morph is `grabbable` or has been grabbed via the halo, this callback is invoked once the morph is removed from its parent.*
   - **onDrop** *If the morph was grabbed and is now getting dropped onto another morph, this callback is invoked.*
   - **onBeingDroppedOn** *Similar to `onDrop`, but is invoked \*right before\* the drop happens.*
   - **onHoverIn** *Triggered when the mouse cursor enters the bounds of the morph.*
   - **onHoverOut** *Triggered when the mouse cursor exits the morph bounds.*
   - **onDropHoverIn** *Trigged when `onHoverIn` is invoked while at the same time a morph is being grabbed by the user. This is useful to implement logic for UIs that respond to drag and drop gestures.*
   - **onDropHoverOut** *Triggered when `onHoverOut` is invoked while a grab is in process.*
   - **onDropHoverUpdate** *Triggered while a morph is being grabbed and the cursor is hovering over a particular morph.*

## Component System

The component system in `lively.next` really presents one of the strongest diversions from the more vanilla implementations of `Morphic`. Some would argue it even turns `lively.next`'s `Morphic` into something entirely different.
However the components are designed as a superset to the underlying `Morphic` system we have described so far. So one can still write all of the applications in a flavor that is entirely *pure* `Morphic`. It's just arguably more difficult to write applications in such a way that leverages the benefits of direct manipulation for both **developers** and **non-programmers** (i.e. designers). 

We designed the component system in a way that tries to achieve the following:

1. It should keep visual and behavior implementation separate. In particular this allows us to develop GUIs with their behavioral aspects disabled, and vice versa. This is especially useful in a self sustained live development environment such as `lively.next`. In our experience that keeping behavior too closely tied to the GUI can complicate implementation and maintenance of applications by a lot.

2. It should support modularity, which allows parts (visual as well as behavioral) to be composed and reused with ease. Basically we try to keep what's nice about the [Partsbin](http://hpi.uni-potsdam.de/hirschfeld/publications/media/LinckeKrahnIngallsRoederHirschfeld_2012_TheLivelyPartsBinACloudBasedRepositoryForCollaborativeDevelopmentOfActiveWebContent_IEEE.pdf) and reconcile it with the world of mainstream development where everything revolves around source code and modules. You can find more information on this in our [introduction to `lively.project`s](#documentation/projects).

3. It should support evolving the GUI in a purely visual way, that does not break modularity of the visual and behavioral parts of the system. This entails enhancing the existing Morphic Halo system into something that is closer to current state of the art design applications like Adobe XD or Figma.

### Component Definitions

In order to define a component we need to specify its structure and appearance. This is done by calling the `component` function, which will return a component that can then be instantiated as a morph. Therefore, the signature of `component` resembles the one of `morph` quite closely.
To get started let us look at a simple example, a component that represents a die with its face showing 4:

```javascript

const Die = component({
  extent: pt(78.5, 78.7),
  borderRadius: 13,
  fill: Color.rgb(255, 0, 0),
  submorphs: [{
    type: Ellipse,
    name: 'eye',
    extent: pt(15.9, 16.6),
    position: pt(9.9, 7.6)
  }, {
    type: Ellipse,
    name: 'eye1',
    extent: pt(15.9, 16.6),
    position: pt(51, 8.4)
  }, {
    type: Ellipse,
    name: 'eye2',
    extent: pt(15.9, 16.6),
    position: pt(9.7, 52)
  }, {
    type: Ellipse,
    name: 'eye3',
    extent: pt(15.9, 16.6),
    position: pt(49.3, 52.4)
  }]
});

```
As you can see, the `component()` function is invoked similarly to the already introduced `morph()` function. We are passing properties and recursively define submorphs in the same manner down the line. Just as in `morph()` if a property is not mentioned it is assumed to take on its default value. We refer to this object as a *spec*.

> ⚠️ **Warning**
>
> It is important that the names of each morph in a component are unique! If no name is specified,
> the system may provide an auto generated one. In the future we want to experiment with implementations
> where we only require for siblings to have unique names, but for now it is imperative that a morph name
> is unique within the entire component definition. Unique names are also important for attaching behavior
> to elements once we introduce `ViewModel`s later on.
   
We can now instantiate the `Die` component with the help of the `part()` function:

```javascript
part(Die)
```

Which will yield a morph that looks like this:

<!-- __lv_expr__:{part}:lively.morphic:{WrappedDie}:nextguys--lively-next-relaunch/explanation/examples.cp.js:part(WrappedDie) -->

> 💡 **Tip**
>
> It is important to let the difference between `component` and `part` sink in.
> While `component` is used to **define** a reusable component (similar to components in other state-of-the-art web frameworks), `part` is used to **instantiate** such a component.

Now, we can go ahead and create other components that now in turn re-use this component as a part of their own definition. This also happens with the help of the `part()` function. Let's define a component that resembles a poker table:

```javascript
const PokerTable = component({
  extent: pt(475.7, 360.9),
  borderWidth: 21,
  borderColor: Color.rgb(147, 81, 22),
  borderRadius: 37,
  fill: new LinearGradient({ stops: [{ offset: 0, color: Color.rgb(46, 125, 50) }, { offset: 1, color: Color.rgb(27, 94, 32) }], vector: rect(0.49999999999999994, 0, 6.123233995736766e-17, 1) }),
  submorphs: [part(Die, {
    name: 'die1',
    position: pt(49.8, 49.4)
  }), part(Die, {
    name: 'die2',
    rotation: num.toRadians(77.0),
    position: pt(375.5,90.1)
  }), part(Die, {
    name: 'die3',
    rotation: num.toRadians(20.0),
    position: pt(180.3, 211.7)
  })]
});
```

The resulting morph should look something like this:

<!-- __lv_expr__:{part}:lively.morphic:{WrappedPokerTable}:nextguys--lively-next-relaunch/explanation/examples.cp.js:part(WrappedPokerTable) -->

As you can see, by invoking the part calls within the submorph array we reused the component definition of `Die` within the component definition of `PokerTable`. Also notice, how in the  `part` calls we have passed some properties to adjust the properties of each die to place them at unique positions (and varying degrees of rotation). If we skipped these overrides, all dice would just sit on top of each other at the same position.

### Component Derivations

While reusing component definitions to compose new components is useful, we also want to be able to expand or customize existing component definitions to suit our needs. For instance we may want to have different color themes of the same system button in order to match different styles of tools.
In order to achieve that, the component system allows to derive a component similar to subclassing a class:

```javascript

const goldGradient =  new LinearGradient({
  stops: [{ offset: 0, color: Color.rgb(244, 171, 4) }, { offset: 1, color: Color.rgb(246, 138, 9) }],
  vector: rect(0.49999999999999994, 0, 6.123233995736766e-17, 1)
});

const GoldenDie = component(Die, {
  fill: Color.black,javascript
    name: 'eye1',
    fill: goldGradient
  }, {
    name: 'eye2',
    fill: goldGradient
  }, {
    name: 'eye3',
    fill: goldGradient
  }]
});
```

The first argument to `component()` is now the component that we are using to derive a new component definition. When thinking about the component definition as a class, we can think about this first argument as the superclass. Internally we refer to this component as the component's *parent*.
Looking further, we notice the structure of the spec which looks quite similar to the one we passed initially to `component` when we were defining `Die`. However this time, the properties here only define the *overridden* properties for each morph with respect to the way they were defined in the parent component. You can think of the resulting component definition as a *deep merge* of the spec found in the parent and the spec provided here in the derived component. Since this component derivation adjusts the fill of various parts of the die, the resulting component looks like this:

![](/local_projects/nextguys--lively-next-relaunch/assets/gold%20die.png) 

> 💡 **Tip**
>
> When deriving components and overwriting parts of their `spec` in the definition of the derivation, it is important that each submorphs `name` property is specified correctly. Also consider the importance of unique names inside a component hierarchy mentioned above. You will always need to specify the complete path to a submorph (in the case of deeply nested submorphs). `lively.next` will not expand the hierarchy automatically. 


For the well trained eye, it should become apparent that component definitions constitute something others refer to as *nested classes*. However, instead of utilizing the native `JavaScript` class syntax we opted for this function notation for two reasons:
1. It is slightly less verbose than class declarations
2. The property dispatch happens not as a simple single dispatch (as is the norm in `JavaScript` classes) but constitutes a multiple dispatch taking into account the **component itself**, the **component's parent**, the **component's states** and also the **state of the morph** being styled.

#### Altering Structure
Obviously, when deriving a component from a different one, we often want to adjust aspects about its structure. For instance, we may want to remove certain morphs from the component, that are not useful for the current component. We also may want to add new morphs which are needed to implement a different set of functionality.

Altering structure cannot easily be expressed with the property overriding mechanism, which is why a set of three convenience functions is provided: `add()`, `remove()`.
Let's illustrate how each of them is used by returning to our dice example. When we want to create versions of each dice each of which shows a different face, we will want to adjust the structure.
For instance turning the original `Die` into a `FiveDie` could look something like this:

```javascript
const FiveDie = component(Die, {
  submorphs: [add({
    type: Ellipse,
    name: 'eye5',
    extent: pt(15.9, 16.6),
    position: pt(30.3,29.3)
  })]
});
```

In case we want to insert a new morph at a particular index in the submorphs array, we can pass the name of the **proceeding** sibling as a second argument like so:

```javascript
const FiveDie = component(Die, {
  submorphs: [add({
    type: Ellipse,
    name: 'eye5',
    extent: pt(15.9, 16.6),
    position: pt(30.3,29.3)
  }), 'eye']
});
```

In turn, creating a die that shows the three face requires removing and adjusting certain eyes:

```javascript
const ThreeDie = component(Die, {
  submorphs: [
    without('eye2'), // we remove one eye by referencing its name
    {
      name: 'eye1',
      position: pt(30.8,31) // and adjust the position of another one to fit at the center
  }]
});
```

#### Overriding Masters

In order to adjust morphs in derived components its often simpler to *reassign* a different **master component** to style a particular morph rather then simply overriding each property of a morph by hand.
For instance, going back to our poker table example, we may want to apply different styles to some of the dice in a derived component like so:

```javascript
const DiversePokerTable = component(PokerTable, {
  submorphs: [
    { name: 'die1', master: EmeraldDie }
    { name: 'die2', master: GoldenDie },
   ) 
  ]
});
```

Notice that in the resulting scene, the dice have changed their styling:

<!-- __lv_expr__:{part}:lively.morphic:{WrappedDiversePokerTable}:nextguys--lively-next-relaunch/explanation/examples.cp.js:part(WrappedDiversePokerTable) -->

Also notice that some properties have remained untouched, this includes properties like `rotation` and `position`. These are *transform properties* and can not be overridden via assigning a new master. This can only be done by overriding them explicitly within the component definition.

The application of a master component via the master property is *recursive*, which means that any of the submorphs that  may be styled by a master are also getting their masters overridden in turn if the *new* master defines them to be different.
In the example of the dice for instance, imagine a scenario where each eye was itself derived from a component. If `GoldenDie` was defined such that it overrides each of the eyes with a different master component, then the application of `GoldenDie` to `'die2'` would also recursively apply the adjusted masters to each of its eyes.

### Component States

So far we have just talked about using master components to define and inherit structure *(component derivations)* and applying styles *(overriding masters)*. We will now turn to some master configurations that allow components to also be applied *dynamically*.

Note, that for one component definition only one component state can be active at a time. There is no parallel application of two (or more) components via multiple component states where the result will be merged in some way. While this semantic is theoretically possible, we refrained from doing so in order to avoid overly complex behavior and hard to trace unintended styling effects.

#### Event States

The most straight forward dynamic application of master components is in the case of morphic events. For this, the component system supports defining component to be applied in case of a *click* or *hover* event. This is achieved by overriding the `master` property just as we did in the previous section. However, this time, we pass a `spec` object instead of a component reference like so:

```javascript
const HoveredDie = component(Die, { fill: Color.red.darker() });

const HoverableDie = component(Die, {
  master: {
    hover: HoveredDie
  }
});
```
The die will now alter its color to the one defined in `HoveredDie` for as long as the cursor is hovering above the morph being styled.
The same can also be done for a touch/click event, where the master is going to be applied for as long as the press continues:

```javascript
const ClickedDie = component(Die, { fill: Color.red.lighter() });

const HoverableDie = component(Die, {
  master: {
    click: ClickedDie
  }
});
```

We can also define both at the same time. In this case the click will take precedence over the hover:

```javascript
const ClickedDie = component(Die, { fill: Color.red.lighter() });
const HoveredDie = component(Die, { fill: Color.red.darker() });

const InteractiveDie = component(Die, {
  master: {
    hover: HoveredDie,
    click: ClickedDie
  }
});
```

In scenarios where we still want to override the master statically, but also want to attach dynamic event master styles, we can utilize the `auto` field which will apply the specified master in just the same way as was the case when we directly overwrote the master in the above section. However with the additional dynamic master styles stepping in when applicable:

```javascript
const ClickedDie = component(Die, { fill: Color.red.lighter() });
const HoveredDie = component(Die, { fill: Color.red.darker() });

const InteractiveGoldenDie = component(Die, {
  master: {
    auto: GoldenDie,
    hover: HoveredDie,
    click: ClickedDie
  }
});
```

The above examples have all resorted to creating custom derivations of the `Die` component in order to parametrize the component states  accordingly. Oftentimes however, such declarations are overly verbose, since they are never gonna be used outside of the context of a component to being with. In those instances, you can also skip the component declaration like so:

```javascript
const InteractiveGoldenDie = component(Die, {
  master: {
    auto: GoldenDie,
    hover: component({ fill: Color.red.darker() }),
    click: component({ fill: Color.red.lighter() })
  }
});
```

We refer to these types of implicit declarations as **inline master/inline components**.
  
#### Breakpoints

When implementing a responsive design for a website or application, we often want to select between different master component based on the extent of a morph. Based on the viewport size, a morph warrants entirely different presentations of contents.
For instance a morph that implements a link to a blogpost should have different font sizes, layout settings and displayed elements depending on the size it is allotted.
This is where *breakpoint states* come in handy, since they allow us to define at what height(s) or width(s) of the morph which component(s) are supposed to be applied, right within the component definition itself.

The following example showcases how we can have a poker table that, depending on its size, shows varying amounts of dice:

```javascript
const PokerTableLarge = component(PokerTable, {
  // nothing changed
});
const PokerTableMedium = component(PokerTable, {
  submorphs: [{
    name: 'die2',
    visible: false
  }]
});
const PokerTableSmall = component(PokerTable, {
  submorphs: [{
    name: 'die2',
    visible: false
  }, {
    name: 'die3',
    visible: false
  }]
});

const ResponsivePokerTable = component(PokerTable, {
  extent: pt(710.9, 317.8),
  master: {
    auto: PokerTableSmall,
    breakpoints: [
      [pt(300, 0), PokerTableMedium],
      [pt(600, 0), PokerTableLarge]
    ]
  }
});
```

The resulting behavior looks like this:

![](/local_projects/nextguys--lively-next-relaunch/assets/responsive-poker-table.gif) 

> 💡 **Tip**
>
> Note, that the breakpoints from any of the parent components are overridden if present and are not getting considered when the style is applied to the morph.

#### Custom States

Aside from the hard wired event states mentioned above, it is often handy to define some domain-specific component states which can only be triggered via code execution. Examples for this include different styles to distinguish between an *active* or *inactive* state of GUI elements. Other examples include *selection styles* that add an accent to a particular element or even *mode styles* that allow to cycle between different states such as *warning*,*error* or others.

In order to define a custom style, we again invoke the `master` property as in the previous example, yet this time we add another field `states` to which we pass the definition of the custom states:

```javascript

const EmptyPokerTable = component(PokerTable, {
  submorphs: [{
    name: 'die1',
    visible: false
  }, {
    name: 'die2',
    visible: false
  }, {
    name: 'die3',
    visible: false
  }]
});

const InteractivePokerTable = component(PokerTable, {
  master: {
    states: {
      empty: EmptyPokerTable
    }
  }
});
```

We can trigger the custom state by calling `setState()` on the master object like so:

```javascript
const table = part(InteractivePokertable); // instantiate the table
table.master.setState('empty'); // applies the empty style
table.master.setState(null); // reverts back to the default styling
```

Note that, just as the breakpoints, the custom state object does not get merged in case you override the custom states from one of the parent components. If for instance the `PokerTable` in the above example would itself define a custom component state called `foo` setting `table.master.setState('foo')` would have no effect, since `foo` is not mentioned in the component states of `InteractivePokerTable`.

### Adding Behavior via `ViewModel`s

Based on the past experiences with live systems such as `LivelyKernel`, we decided that there is an immense value in the option to easily toggle interactive behavior of components on and off. This does not only lead to more concise and reusable code, but also makes it so that we can toggle the behavior during runtime inside of `lively.next`. This leads to a smoother transition between the design stage of a component and the phase where the behavior is implemented. See the [Introduction to lively.next's Studio](#documentation/studio) for more details on this.

A `ViewModel` is first and foremost a class that will need to inherit from the base `ViewModel` class:

```javascript
class CustomViewModel extends ViewModel {

} 
```

In order to actually trigger behavior, you will need to connect the default morph functions to methods inside of your view model code. Consider the following example that shows how we can trigger a custom `clickHandler` when the morph that stems from a component definition is clicked. Remember, that the default `morphic` method for click handling in `lively.next` is `onMouseDown`.

```javascript
class CustomViewModel extends ViewModel {
  static get properties () {
    return {
      customProperty: {},
      bindings: {
        get () {
          return [
            { signal: 'onMouseDown', handler: 'clickHandler' }
          ];
        }
      }
    };
  }

  clickHandler () {
    // custom behavior here
  }
}
```

In order to add a view model class to a component, add the `defaultViewModel` property inside of the `component` call with the corresponding class as value.

You can also initialize components (or specific instances) with dynamic values for properties that are defined on the view model. It is important that these values are declared as properties on the view model class, like `customProperty` in the example above. To set a dynamic value, you will need to specify the `viewModel` property in the `part` call like this: `viewModel: { customProperty: 'Hello!' }`.

As usual, it is possible to reach from the model code inside of the view to react to programmatic changes. The outer-most morph of a component is available via `this.view` inside of the view model.
In order to access a nested morph inside of the components hierarchy, we provide a synthesized `ui` property on the model object. To access a morph called `deepMorph` inside of a component in its model, you would access `this.ui.deepMorph`, regardless of the position of the morph inside of the hierarchy. Consider our above warning about unique morph names!

A model is responsible for the outer-most morph of a component (the *view* of the *model*) and all its descendants until one of the submorphs itself carries a `ViewModel`!

While the building blocks of the view are accessible from within the model, it is not possible to access specific properties or methods of a model by accessing the morph of the components instance!
As it is sometimes handy to make parts of the model accessible to the outside world, we provide an `expose` property. Only properties and functions mentioned inside of this are available from the outside. The following example showcases how to utilize the `expose` property:

```javascript
class CustomViewModel extends ViewModel {
  static get properties () {
    return {
      customPropertyInternal: { defaultValue: 'this is secret'},
      customPropertyExternal: { defaultValue: 'this is not secret'},
      expose: {
        get () {
          return ['customPropertyExternal'];
        }
      }
    };
  }
}

const ExposeComponent = { name: 'demo morph', defaultViewModel: CustomViewModel};
const exposeInstance = part(ExposeComponent);
exposeInstance.customPropertyInternal // -> will result in an error
exposeInstance.customPropertyExternal // -> will result in 'this is not secret'
```

Therefore, you can think of the `expose` property of a view model as defining the programmatic interface of the corresponding component.

#### Bindings - In Depth

Each binding is defined as follows: `{ target?, signal, handler, converter?, updater?, varMapping? }`

- **target**: Defines which morph of the component the binding should hold on to. If `target` is omitted, `target` is assumed to be the morph the model is directly attached to.
- **signal**: Defines the method or signal the binding should react to. This is usually a method from the base `Morph` class.
- **handler**: Defines the method that is called in response to the binding getting triggered. This can be either the name of the method or a closure passed directly.
- **converter**: An optional function that can transform the value passed to the signal or method. This is the same as the converter from `connect()`. By default, the arguments from the signal are passed.
- **updater**: An optional function that allows the user to fully control the way the handler is called. This is the same as the updater from `connect()`.
- **varMapping**: Both `converter` and `updater` support the provision of the function as a string. In this case it is useful to have a varMapping that will ensure the closures are properly initialized.

For more details on `converter`, `updater` and `varMapping`, see [this entry in the wiki of `lively.next`](https://github.com/LivelyKernel/lively.next/wiki/Bindings,-Connections-and-Signals).

#### Callbacks provided by the `ViewModel` superclass

> ⚠️ **Warning**
>
> The API of the viewmodels is subject to change in the future, this section will be updated accordingly.

In addition to the special `expose` and `bindings` properties, `ViewModel` provides a set of handy callbacks than can be utilized to accommodate common use-cases:

- `onRefresh(propName)`: Called whenever a property in the model is changed. This is useful for performing view updates in response to model changes that we cannot anticipate via bindings. The callback is called for each property change separately, with the name of the changed property passed as an argument as a string. 
- `viewDidLoad()`: Called once when the model is attached to the view. This is the place where initialization or setup code usually is placed best.
- `withoutBindingsDo(cb)`: Allows the code in the callback function to operate on the view without triggering the bindings. This prevents updated loops caused by back-propagation.

### Using Components and ViewModels
Let us go over a final example that combines the various aspects discussed in this chapter. We will implement a throw behavior for the dice we have been working with previously. The idea is that clicking on a die will cause it to shuffle and display a different face.

First, we define a component that includes all the faces we may want to display, which we will call the universal die.

```javascript
const UniversalDie = component({
  origin: pt(38.5, 37.1),
  fill: Color.rgb(255, 0, 0),
  extent: pt(78.5, 78.7),
  borderRadius: 13,
  submorphs: [
    {
      type: Ellipse,
      name: 'eye0',
      extent: pt(15.9, 16.6),
      position: pt(-28.6, -29.5)
    }, {
      type: Ellipse,
      name: 'eye1',
      extent: pt(15.9, 16.6),
      position: pt(12.5, -28.7)
    }, {
      type: Ellipse,
      name: 'eye2',
      extent: pt(15.9, 16.6),
      position: pt(-28.8, 14.9)
    }, {
      type: Ellipse,
      name: 'eye3',
      extent: pt(15.9, 16.6),
      position: pt(11.8, 15.8)
    }, {
      type: Ellipse,
      name: 'eye4',
      extent: pt(15.9, 16.6),
      position: pt(-7.6, -7.6)
    }, {
      type: Ellipse,
      name: 'eye5',
      extent: pt(15.9, 16.6),
      position: pt(-28.8, -7.4)
    }, {
      type: Ellipse,
      name: 'eye6',
      extent: pt(15.9, 16.6),
      position: pt(12.2, -6.9)
    }]
});
```

Notice how the die has an eye in every position potentially needed, totaling seven eyes. We then derive this component six times, adjusting the styling so that each die shows a different face by varying the visibility of each eye.

```javascript
const Die1 = component(UniversalDie, {
  submorphs: [{
    name: 'eye0',
    visible: false
  }, {
    name: 'eye1',
    visible: false
  }, {
    name: 'eye2',
    visible: false
  }, {
    name: 'eye3',
    visible: false
  }, {
    name: 'eye5',
    visible: false
  }, {
    name: 'eye6',
    visible: false
  }]
});

const Die2 = component(UniversalDie, {
  submorphs: [{
    name: 'eye1',
    visible: false
  }, {
    name: 'eye2',
    visible: false
  }, {
    name: 'eye4',
    visible: false
  }, {
    name: 'eye5',
    visible: false
  }, {
    name: 'eye6',
    visible: false
  }]
});

const Die3 = component(UniversalDie, {
  submorphs: [{
    name: 'eye1',
    visible: false
  }, {
    name: 'eye2',
    visible: false
  }, {
    name: 'eye5',
    visible: false
  }, {
    name: 'eye6',
    visible: false
  }]
});

const Die4 = component(UniversalDie, {
  submorphs: [{
    name: 'eye4',
    visible: false
  }, {
    name: 'eye5',
    visible: false
  }, {
    name: 'eye6',
    visible: false
  }]
});

const Die5 = component(UniversalDie, {
  submorphs: [{
    name: 'eye5',
    visible: false
  }, {
    name: 'eye6',
    visible: false
  }]
});

const Die6 = component(UniversalDie, {
  submorphs: [{
    name: 'eye4',
    visible: false
  }]
});

```

<!-- __lv_expr__:{part}:lively.morphic:{AllFaces}:nextguys--lively-next-relaunch/explanation/examples.cp.js:part(AllFaces) -->

Next, we define a view model that can attach to the universal die and toggle the visibility of the eyes to show different faces. This is achieved by toggling between different component states.

```javascript

class ThrowableDieModel extends ViewModel {
  get bindings () {
    return [
      // wire up the mouse down event with the throw method 
      {
        signal: 'onMouseDown', handler: 'throw'
      }
    ];
  }

  viewDidLoad () {
    this.showFace(1); // default to face 1 when the morph and the viewmodel are initialized and ready
  }

  showFace (face) {
    this.view.master.setState(face);
  }

  async throw () {
    // we access the morph from the viewmodel via the view property
    this.view.animate({ rotation: 16 * Math.PI, duration: 2000 }).then(() => {
      this.view.rotation = 0;
    });
    await promise.delay(1000);
    // and adjust the face randomly while it is spinning
    this.showFace(num.random(1, 6));
  }
}

const ThrowableDie = component(Die1, {
  defaultViewModel: ThrowableDieModel, // this will make sure an instance of the component is initialized with the view model
  master: {
    states: {
      1: Die1,
      2: Die2,
      3: Die3,
      4: Die4,
      5: Die5,
      6: Die6
    }
  }
});
```

The resulting die looks like this. Try triggering the throw mechanism by clicking on the die.

<!-- __lv_expr__:{part}:lively.morphic:{WrappedThrowableDie}:nextguys--lively-next-relaunch/explanation/examples.cp.js:part(WrappedThrowableDie) -->

With this interactive version of the dice in place, we can implement an interactive version of the previously defined poker table. The custom behavior will allow each of the dice to be shuffled independently, displaying the new total of the dice on the poker table.

To achieve this, we derive the poker table from the standard poker table, replacing the instances of the old static dice with the new dynamic ones. We also add a label that enables us to display the face value of all the dice on the table.

```javascript

const DynamicPokerTable = component(PokerTable, {
  defaultViewModel: DynamicPokerTableModel,
  submorphs: [
   // replace the previous dice, since we need a completely new structure and behavior
    replace('die1', part(ThrowableDie)),
    replace('die2', part(ThrowableDie)),
    replace('die3', part(ThrowableDie)),
    // add a new label that shows that total face value to the user
    add({
      type: Text,
      name: 'face value',
      dropShadow: new ShadowObject({ color: Color.black, blur: 15, fast: false }),
      dynamicCursorColoring: true,
      fill: Color.rgba(255, 255, 255, 0),
      fontColor: Color.rgb(255, 255, 255),
      fontSize: 28,
      fontWeight: '600',
      position: pt(184.6, 110.3),
      textAndAttributes: ['Total: 3', null]
    })
  ]
});
```

We further define a new view model that we can attach to the dynamic poker table. It wires up the changes in the `faceValue` of each die that gets triggered when they are shuffled and triggers a method `showTotalFaceValue`, which updates the label we just added to the component accordingly.

```javascript
class DynamicPokerTableModel extends ViewModel {
  get bindings () {
    return [
      { target: /die/, signal: 'faceValue', handler: 'showTotalFaceValue' }
    ];
  }

  showTotalFaceValue () {
    const { die1, die2, die3, faceValue } = this.ui;
    faceValue.textString = `Total: ${die1.faceValue + die2.faceValue + die3.faceValue}`;
  }
}
```

The resulting poker table looks like this. **Click on the dice and observe how the total changes**:

<!-- __lv_expr__:{part}:lively.morphic:{WrappedDynamicPokerTable}:nextguys--lively-next-relaunch/explanation/examples.cp.js:part(WrappedDynamicPokerTable) -->
