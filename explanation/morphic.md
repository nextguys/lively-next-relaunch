
# Morphic
This is about the morphic framework in lively.next.

## Properties
Morphs in `lively.next` come with a large set of properties. You can explore them in the interactive section below. They roughly split up into what we call *visual properties* and *behavioral* properties.

## Types
Different types of morphs are available to the user.

### Custom Subclasses

## Instantiating a Morph

## Event System
Morphic comes with its completely custom build event system. This for multiple reasons, since the DOM Event system...

1. is severely broken *(have you tried using onDrag?)*.
2. does not support the same event types that we expect in morphic, for instance hovering.
3. also does match the morph object in the bubbling phase, since some morphs consists of multiple different dom nodes.


## Halo
For more information on the Halo, please refer to the studio chapter.

## Serialization

 - Objects in lively.next and particular Morphs support full serialization of the object state into a JSON format.
 - This JSON snapshot can then in turn be used to reinitialize *(deserialize)* the serialized objects into memory.
 - Since the control of the runtime in Javascript is limited (we can not yet create pure memory snapshots) we are unable to reliably serialize closures.
 - This means the in order to be able to successfuly serialize objects in lively.next, the classes of the objects need to be particulary designed with care such that they can be correctly *revived*.
 - Correct revival is not trivial due to two reasons:
   - Invocation of setters need to be able to handle a case where a setter is triggered during deserialization vs during normal execution of a program.
     - The nature of execution between deserialization and normal execution varies heavily since normal execution usually implicitly respects certain constraints about properties (for instance property A cannot be defined before property B since it relies partially on A). Deserialization on the other hand cannot guess these implicit constraints and therefore relies on explicit knowledge of property dependencies.
   - Reconstruction of non serializable objects needs to be handled correctly. For instance using 3rd part libraries to archieve certain capabilities 

## Components System

We designed the component system in a way that tries to achieve the following:

1. It should keep visual and behavior implementation separate. In particular this allows us to develop GUIs with their behavioral aspects disabled, and vice versa. This is especially useful in a self sustained live development environment such as lively.next. It is our experience that keeping behavior too closely tied to the GUI can complicate implementation and maintenance of applications by a lot.

2. It should support modularity, which allows parts (visual as well as behavioral) to be composed and reused with ease. Basically we try to keep whats nice about the Partsbin and reconcile it with the world of mainstream development where everything revolves around source code and modules.

3. It should support evolving the GUI in a purely visual way, that does not break modularity of the visual and behavioral parts of the system. This entails enhancing the existing Morphic Halo system into something that is closer to current state of the art design applications like Adobe XD or Figma.

In a sense the component system in *lively.next* really presents one of the strongest diversions from the more vanilla implementations of Morphic. Some would argue it even turns *lively.next*'s Morphic into something entirely different.
However the components are designed as a superset to the underlying Morphic system we have described so far. So one can still write all of the applications in a flavor that is entirely *pure* Morphic. It's just arguably more difficult to write applications in such a way that leverages the benefits of direct manipulation for both developers and *non-programmers* (i.e. designers). 

### Component Definitions

In order to define a component we need to specify its structure and appearance. This is done by employing the `component` function, which will return us a component that can in turn be instantiated as a morph.
To get started let us look at a simple example that illustrates the point. We start by a simple morph the presents a die with its face showing 4:

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
As you can see, the `component()` function is invoked similarily to the already introduced `morph()` function. We are passing properties and recursively define submorphs in the same manner down the line. Just as in `morph()` if a property is not mentioned it is assumed to take on its default value. We refer to this object as a *spec*.

> ⚠️ **Warning**
> It is important that the names of each morph in a component are unique! If no name is specified,
> the system may provide an auto generated one. In the future we are experimenting with implementations
> where we only require for siblings to have unique names, but for now it is imperative a morph name
> is unique within the entire component definition. Unique names are also important for attaching behavior
> to elements once we introduce the viewmodels.
   
We can now instantiate the `Die` component with the help of the `part()` function:

```javascript
part(Die)
```

Which will yield a morph that looks like this: ![](/local_projects/nextguys--lively-next-relaunch/assets/die.png) 

Now, we can go ahead and create other components that now in turn re-use this component as a part of their own definition. This also happens with the help of the `part()` function. Let's for instance define a component that resembles a poker table:

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

The resulting morph should look something like this: ![](/local_projects/nextguys--lively-next-relaunch/assets/poker-table.png) 

As you can see, by invoking the part calls within the submorph array we reused the component definition of `Die` within the component definition of `PokerTable`. Also notice, how in the  `part` calls we have passed some properties to adjust the properties of each die to place them at unique positions (and varying degrees of rotation). If we skipped these overrides, all dice would just sit on top of each other at the same position.

### Component Derivations

While reusing component definitions to compose new components is useful, we also want to be able to expand or customize existing component definitions to suit our needs. For instance we may want to have different color themes of the same system button in order to match different styles of tools.
In order to archieve that, the component system allows to derive a component similar to subclassing a class:

```javascript

const goldGradient =  new LinearGradient({
  stops: [{ offset: 0, color: Color.rgb(244, 171, 4) }, { offset: 1, color: Color.rgb(246, 138, 9) }],
  vector: rect(0.49999999999999994, 0, 6.123233995736766e-17, 1)
});

const GoldenDie = component(Die, {
  fill: Color.black,
  submorphs: [{
    name: 'eye',
    fill: goldGradient
  }, {
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

The first argument to `component()` is now the component that we are using to derive a new component definition. When thinking about it as a class, we can think about it as the superclass. Internally we refer to this component as the component's *parent*.
Looking further, we notice the structure of the spec which looks quite similar to the one we passed initially to `component` when we were defining `Die`. However this time, the properties here only define the *overridden* properties for each morph with respect to the way they were defined in the parent component. You can think of the resulting component definition as a *deep merge* of the spec found in the parent and the spec provided here in the derived component. Since this component derivation adjusts the fill of various parts of the die, the resulting component looks like this:

![](/local_projects/nextguys--lively-next-relaunch/assets/gold%20die.png) 


<!---
 - Component definitions are basically nested classes
  - You can derive new ones from existing ones, and adjust the properties, structure or styling.
  - However unlike classical javascript classes, components utilize a specific form of dynamic multi dispatch
    - The dispatch takes into account the identity of the definition
    - It also factors in how the definition is configured (overridden masters)
    - It also factors in the state of the morph being styled. Here it considers things like event state of the morph and the extent in order to properly resolve with respect to breakpoints, and master states.
  - The dispatch in vanilla JS basically works like this:
     `instance.method(args) => instance_method(instance, ...args)`
  - Components on the other hand dispatch like this:
     `def.\[property\](aMorph) => resolvePropFor(def, config(def), state(aMorph))`
  - In order to improve the performance of the component styling, we instantiate dispatch structures when the component definitions are evaluated.
    - There a multi trees that create a custom sub tree for each possible dispatch. These sub trees are stored inside of nested classes themselves, however they are too numerous and there is no feasable way to compute all possible dispatches ahead of time without taking significan amounts of memory/compute.
    - We can then save the expensive synthesization of each subtree that happens during style application
- A derived component definition inherits structure and style from its parent
- One can further adjust style and structure to ones liking
-->

#### Altering Structure
Obviously, when deriving a component from a different we often want to adjust aspect about its structre. For instance we may want to remove certain morphs from the component, that are not useful for the current component. We often also may want to add new morphs which are needed to implement a different set of functionality.
Altering structure can not be expressed with the property overriding mechanism, which is why a set of three convenience functdions is provided: `add()`, `remove()` and `replace()`.
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

In turn creating a die that shows the three face requires removing and adjusting certain eyes:

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

> ⚠️ **Warning**
> As of the point of this writing, `replace` is not yet implemented.


#### Overriding Masters
  - override masters in derivations (poker table scene where each dice is overridden to a custom one)
  - also highlight how we block behavior of breakpoints by overriding the masters in a derivation
  - With respect to a single policy only a single state can be active at a time, however multiple states can play together if they are stacked through the derivation chain. For instance we can have the following synthetization in place:
  - `aMorph -> policy1.parent => policy2.customState => policy3.eventState => policy4`
  - If multiple event states match for a single policy, the one with the highest priority is considered over the other.
  - The priority of the masters are order from highes to lowest as follows:

### Inline Styles

If we just want simple styling adjustments to add an accent to a morph, and do not want to define an entire component for that sake we can also work with inline styles.

### Style Palettes

> ⚠️ **Warning**
> As of the point of this writing, style systems have not been implemented yet.
 
Sometimes we want to assign the value of a particular properly a certain role that it plays in the grand scheme of a design. For instance oftentimes, a designer selects a particular color for an element to be *primary*, *secondary* or *accent* in nature. This allows for an easier swapping of color designs later in the design process.

In `lively.next` supports this management of style systems via *style palettes*. A style palette can be created for different kinds of properties. These includes: *color properties*, *layout properties*, *text style properties* and *effect properties* such as *drop shadow* and *opacity*.

For instance, we can rewrite our earlier example with where we defined `GoldenDie` as follows:

```javascript

const GoldenDie = component(Die, {
  fill: palette.color.dark,
  submorphs: [{
    name: 'eye',
    fill: palette.color.gold
  }, {
    name: 'eye1',
    fill: palette.color.gold
  }, {
    name: 'eye2',
    fill: palette.color.fold
  }, {
    name: 'eye3',
    fill: palette.color.gold
  }]
});

```

### Component States

#### Event States

  - Respond to the event state of a morph that is to be styled.
  - This includes:
    - The click state
    - The hover state

#### Custom States
  - Custom states can be defined and triggered from code in order to allow switching between appearances in response to custom internal states. An example is things like "active state" or "inactive state".
  
#### Color Scheme States

> ⚠️ **Warning**
> As of the point of this writing, color scheme states have not yet been implemented.

  - Respond to the preferred color scheme based on the system or an explicit preference by the user. 
  
### Breakpoints

 - We not only want to react to changes based on states, but often apply different styles based on the extent of a particular morph
 - For instance different viewports warrant different layouts or entirely different presentations of contents
 - Breakpoints allow to easily define ranges where a particular master is applied as a style
 - Comes with extensive tool support such as the breakpoint control in the sidebar as well as the breakpoint halo 

### Template Masters

> ⚠️ **Warning**
> As of the point of this writing, template masters are not yet supported. For the time being
> we solve this by passing parametrized masters as viewModel properties to the viewModel.

 - Sometimes it does not make sense to stick to one master for a part of a component
 - We then want to parametrize the component from the outside in a convenient way
 - The parametrization should work nicely in a programmatic way as well as via tool support
 - Code sample:
 
```javascript
const Alice = component({
   submorphs: [
     {
       name: 'bob',
       master: template('masterForBob', Bob)
     }
   ]
})

// which can then be controlled when creating an instance like this:

part(Alice, { masterForBob: Foo });

// Or adjust in component definitions:

const Linus = component({
   submorphs: [
     part(Alice, { masterForBob: Bar }))
   ]
});

```

 
### Reconciliation

  - We previously described the programmatic interface to defining and deriving components.
  - In order to provide a direct manipulation, purely visual workflow to create and modify component definitions, `lively.next` ships with a reconciliation engine which bridges the gap between visual represenation and symbolic description of componnent definitions.
  - This is done by translating direct manipulation changes (such as draggin, dropping, edditing, style property changes) into changes to the module source code where the components are defined.
  - Besides evolving already existing component definitions purely visually, the user is also able to create entirely new component definitions from scratch.
  - For more information on how to use reconciliation please refer to the studio chapter.
  
### Viewmodels
  - Separating the view from the behavior
  - Making behavior "pluggable"
    - Since behavior just attached to the morphs from the outside, it is no longer tied to the component definitions
    - Behavior can be reused across multiple different designs for the same things (think of calculator designs, clock faces etc..)
  - Allow behavior to be disabled dynamically
