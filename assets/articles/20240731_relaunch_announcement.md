---
title: A new home for the lively.next project!
date: 2024-07-31
abstract: | 
  After some years of neglect, this entry marks the launch of a fresh website for the lively.next project.
  However, the project itself has commenced at a far greater pace over the last few years.
  In this post, we will talk a bit about the current developments in the lively.next project, this website, and our vision for the future.
slug: a-new-home
author: '@linusha'
---

# Intro

After Y-Combinator Research shut down in 2017 there was no longer any continuous funding available for the larger `lively.next` team. Subsequently, the team as it then existed dissolved and many contributors set out to different endeavors. However, parts of this iteration of the team continued to work on `lively.next` on the side. In 2021, Robin was able to secure some reliable funding to get a small-scale development operation for `lively.next` going once again and brought me into the project. Over the last two and a half years we were able to devote to developing `lively.next` full-time.

In this post, we want to shed some light on what we worked on during this time and dare a brief look ahead at what's coming for `lively.next` in the future.

# What the last Years have Wrought

When we set out to plan what our goals were for the initially planned two-years of development, we did so with a lens that might have been a bit unusual for this project. Previously, Robin had used `lively.next` in a commercial context with [typeshift](https://typeshift.io/) and my introduction to the world of `lively.next`, although in a university context, was product-driven as well, with the development of [`qinoq`](#examples). While `lively.next` had been primarily a research vehicle and sandbox for all kinds of impressive prototypes (*just look at this [demo of Nodetalk](https://www.youtube.com/watch?v=mcEFAt3HsLA) by Robert Krahn!*), house-keeping the IDE itself and polishing it to increase its [affordance](https://en.wikipedia.org/wiki/Affordance) was never the highest priority.

Therefore, we "inherited" a huge system that came with a multitude of impressive ideas and possibilities, but all of them pretty rough around the edges. We identified the following list of the most pressing pain-points for users of `lively.next` and us as developers:

- Working with components, essentially a must-have in the world of modern web-development, was complicated and brittle, especially in a collaborative context,
- there were some drastic performance bottle-necks, especially when working with large amounts of text,
- collaboration as a whole was a largely unsolved problem, especially when taking into account non-programmers as users,
- developing the kernel of `lively.next` or involved tooling came with a great amount of uncertainty - although a lot of tests existed, there was no infrastructure for best-practice development techniques such as pull-requests and a good portion of the tests was failing, although the system still seemed™️ to work as expected.  

We set out to turn `lively.next` into, what we refer to as, a  **truly integrated development environment**, accessible to multiple stake-holders in the development process of a web-application, especially programmers and designers, both as first-class citizens.

In the next parts of this article, we will tackle these points on by one and see how far we have gotten.

## Introducing: A state-of-the-art component system for `lively.next`

When I first began using `lively.next`, there already existed a first iteration of a component system. At that time, artifacts in `lively.next` were still stored in snapshots (comparable to *Images* in the Smalltalk world). Components therefore were developed in their own worlds, stored there and using them meant loading these worlds after the fact. These snapshots (more on that later, when we talk about collaboration in more depth) serialized the whole state of graphical objects and their behavior implementation. Due to the snapshots serializing a whole `lively.next` world and its state as large `JSON` blobs, we had no actual concept of collaboration or even merging diverging versions of them. Working on them essentially meant putting a lock on them, communicating that with the whole team and hoping everything would turn out fine. Even in the best case, it was not possible to easily see what changed inside of a component after the fact, as the `JSON` snapshots did not lend themselves to be easily "diff-able". Additionally, changing a component meant loading an entirely different `lively.next` world, making some changes, serializing everything again and then loading the world in which the component was to be used.

As solving the underlying issue of collaboration on the basis of snapshots is a **really hard** problem, due to their cyclical nature and the need to map something like "intent" to changes, we opted to ditch them for the next iteration of the component system - the idea of `.cp.js` files, akin to what other web frameworks do, was born.

Initially introduced in `Self`, `lively.next` uses a flavour of the GUI framework `morphic`. In it, abstract graphical building blocks called `morphs` are assembled in a tree-like structure. Each `morph` can be styled individually and behavior can be attached, traditionally by sub-classing the base `Morph` class.
It lends itself for either imperative or declarative definitions of GUIs.

As we wanted to achieve a workflow where designers could easily create, change, and reuse components inside of `lively.next`, while programmers could add behavior to them just as easily, we now needed some way of reflecting changes made by designers using a direct manipulation workflow into these `.cp.js` files. Based on an idea initially developed in his [master thesis](https://publishup.uni-potsdam.de/opus4-ubp/frontdoor/index/index/year/2017/docId/9830), Robin developed a mechanism called *reconciliation*, which allowed us to keep declarative component definitions in sync with the state of `Morph` objects and vice versa.

Taking a good amount of inspiration from state-of-the-art design tools like Figma, we polished our direct-manipulation interfaces and it is now possible to define, change, and compose complex GUI structures by means of reusable components, loaded from inside normal `JavaScript` modules in either a programmatic or visually-driven workflow. If you want to learn more about this, you might be interested in our [interactive guide to components](#documentation/morphic).  

## New Renderer and Optimizations for Working with Text

As all graphical elements in `lively.next` are `Morph`s, it comes without surprise that we also got our own `Morph` to display Text. This allows to do some crazy stuff, such as embedding other arbitrary Morphs (including behavior!) inside of rich-text and mixing code and rich-text as much as one likes.

As citizens of the browser, we need to translate `Morph`s into HTML and CSS. For this, `lively.next` comes with its own renderer. As you might imagine, this renderer is quite complex and needs to run nearly constantly in order to allow for a fluid experience when working in `lively.next`. Previously, the renderer was utilizing the [`virtual-dom`](https://github.com/Matt-Esch/virtual-dom) library by Matt Esch. However, this came with significant downsides, as, by its nature, rendering based on a virtual DOM happens asynchronously. This meant that one could never be sure when a change in our internal data model would actually be reflected in the DOM and, as a result, `async` was scattered generously throughout our codebase.
Additionally, our implementation of Text was originally developed with interactive editing capabilities in mind. While this makes total sense for usage inside of `lively.next`, as one wants to be able to change all text during development, this also meant that in finished applications all displayed text came with a huge overhead of data-structures that were expensive to maintain and provided no real benefit.

I spend the greater part of my first year working on a complete rewrite of `lively.next`s renderer. It now manually patches the DOM, figuring out what changes occurred in the model and how these changes need to reflected into the DOM. It does so by remembering the last state reflected into the DOM on a per-morph-basis, without the need to maintain an entire virtual DOM. While I was at this, I also spent a good amount of thought and work on enhancing our `Text` implementation. Its interactive editing capabilities can now be toggled on and off on the fly, allowing us render read-only text efficient and without the need for expensive data structure behind the scenes.

While we came our dream of synchronous rendering a great step closer,  we are still not entirely there yet. Hooking into the browsers `requestAnimationFrame()` method always leads to some amount of uncertainty as to when the next repaint will actually happen and enforcing strictly synchronous rendering still comes with unsolved performance implications. However, the `Text` refactoring alone already proofed to be of immense value and we could get rid of a lot of `async/await` throughout our code.

## Collaborating like "Serious Developers"

As previously mentioned in passing, storing and exchanging artifacts in `lively.next` was done by serializing whole worlds, and thus their state and that of all objects therein. While this approach comes with a lot of upsides, especially since it is preserving **all** state, there are also some significant downsides. The most prominent one is that these snapshots do not lend themselves to an easy integration with standard version control systems like `git`. While real-time collaboration might be possible to achieve, asynchronous collaboration is hard to get right, as that requires us to figure out the "semantics" of a change. Consider for example a green rectangle - now I delete this rectangle and put a red one in its place, while my collaborator jut changes the fill of the original rectangle to be red. Merging these sets of changes is not straight forward - should there now be two rectangles, or only one? Getting this right opens an enormous can of worms and there are underlying, technical issues to which we also do not have an answer as of yet. However, to get designers and programmers into the same system, we needed a collaboration mechanism that "just works™️".

Therefore, we, once again, opted for the pragmatic decision to embrace a file-system driven approach, similar to that of most other tools. This decision became easier, once we had the file-based component system in place. We acknowledge that, as all pragmatic decisions, this comes with downsides. We threw a lot of potential of the snapshot driven approach "out of the window" for now. However, we ended up with a transparent wrapper around `git` repositories that are seamlessly and automatically integrated inside of `lively.next`. Committing and publishing changes happens directly inside of the IDE, without the need to understand what happens internally. This means, that designers can just press "Save" on their project, without worrying about `git` terminology. While I was working on this abstraction, I also implemented a tight integration for the usage of GitHub in `lively.next` that comes with auto-generated GitHub Actions for building, testing and deploying applications to GitHub Pages. These developments are where we probably strayed the furthest from the usual spirit of the `lively.next` project of the past, embracing a working product over a lot of exciting ideas, that would have required a lot more (although extremely interesting!) research.

While I was working on the implementation of `lively.project`s, Robin overhauled `lively.next`s bundler, called the `freezer`, to work with our new component system and projects. The result is a custom [`rollupJS`](https://rollupjs.org/) plugin, that makes it possible to bundle `lively.next` applications directly from the command line. Additionally, he has done a great effort to improve the loading performance of `lively.next` when developing applications outside of the `lively.next` core. More details about working with projects can be found [here](#documentation/projects), while the loading speed improvements are outlined [here](#documentation/modules).

## Testing Infrastructure and Project Governance

After funding was cut in 2017 and the project was mainly driven forward by Robin and Robert on a volunteer-basis in their free-time, all governance structure that might have existed in the past was laid aside. As a result, there was no public roadmap, no active issue tracker, no testing infrastructure, etc.

As Robin and spent the last two years directly next to each other in the same office, this is probably the most lacking of our initial goals. However, I was quickly able to setup an automated testing infrastructure and Robin undertook the great task of fixing all existing tests. We now have regularly running tests that are succeeding, as well as automated test runs that prevent PRs (we introduced code review!) from breaking any tests. We also began technical documentation in `JSDocs`, that lives directly inside of the source code of `lively.next` and can be read [here](https://livelykernel.github.io/lively.next/).
Still, the amount of added tests over the last two-and-a-half years is small and this remains an achilles heel.

While we try to document our ideas and found bugs in our GitHub repository, there are still (far too many) ideas scattered throughout our office. We tried organizing and planning our development process multiple times, preparing sprints, estimates and goals - but with limited success. Working on a large and complex project such as `lively.next` with as little resources as two people is a strange undertaking and having neither need, desire, nor ambition to producterize it comes as a blessing and a curse at the same time. We might reflect on this further in a future blog post!

# A look in the future...

These lines mark, in a very non-dramatic way, the end of another chapter in the [history of the `lively.next`](#history) project. Initially we planned to be able to develop `lively.next` on a full-time basis for two years. Luckily, circumstances were so good that we could continue for more than half a year and a continuation still seems likely. 

However, for personal reasons, the speed of development will be a bit lower in the coming months and I personally will go back to university - while still being friend and contributor to the project.

As usual with a project with this large of a scope - there remains a lot to do! Some examples of what we are thinking about and would like to experiment on include:

- Developing an easy to use testing framework for graphical elements in `lively.next` that takes the mental load of thinking about even simulation, rendering delays, etc. off of programmers and that would us therefore allow to drastically increase the test coverage of the overall codebase.
- Shipping support for code-maps, in order to make debugging `lively.next` itself as well as applications built with it drastically easier. In order to provide its "lifeness", `lively.next` performs a great deal of source transformations under the hood (Robin wrote about that [here](#documentation/modules)!), which are hard to parse without some experience. As a bonus, this might also allow us to measure some more metrics, such as code coverage...
- While we are at the topic of debugging - past iterations of `lively` came with a [custom debugger](https://chris-schuster.net/master/master_thesis.pdf), that allowed for a debugging experience similar to that in Smalltalk. We are still very interested in bringing this back, as well as shipping `lively.next` as an actual application (using [`nw.js`](https://nwjs.io/)), making it easier to get started, especially for non-programmers.
- While working on this website, we discovered some performance problems when instantiating larger amounts of components at runtime. We therefore tried to experiment with "pre-compiling" component to static HTML - with some success. We will probably share this experiment in a future blog post. We would like to generalize this approach and make it available out-of-the-box.
- We still dream of real-time collaboration in `lively.next` and are interested in experimenting with approaches such as [croquet](https://croquet.io/) or other CRDT based solutions.

# ...and back

While we are very happy with all the progress that we achieved over the last years, none of this would have been possible without the extremely impressive work that came before us. Over the years, a multitude of people contributed to the overall Lively project and `lively.next` in particular. **To all of you, we owe a debt of gratitude!**

We want to especially thank 

- Robert Krahn, who probably has written most of the code in the system still in use to this day,
- the entirety of the Software Architecture Group at HPI, especially Prof. Dr. Robert Hirschfeld, Jens Lincke (who is also working on an [exciting version of Lively](https://github.com/LivelyKernel/lively4-core)!), and Patrick Rein, who introduced me to the world of Smalltalk and Lively,
- our sponsors, who provided no-strings-attached funding for the last two and a half years, and 
- Dan Ingalls, who had the original idea of the `LivelyKernel` and lead the projects research groups for many years.

# The End

With the launch of this new website for the `lively.next` project we once more have a home to collect interesting and helpful resources. We hope to maintain and expand this in the future. If you were affiliated with `lively.next` or the overall Lively project in the past and feel like something is missing, we would be glad for any input - what is currently there, is of course only a very narrow perspective on how things went, due to us being two people and me coming to the project only in 2021.

We hope to use this launch as a starting point to gather a growing user base and that we will be able to keep this blog alive for the forseeable future.

If you'd like to get in touch, come say hi to us in Berlin or write us an e-mail to `hi @ lively-next.org`. 🧡