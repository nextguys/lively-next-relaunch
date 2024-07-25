Work in `lively.next` is organized in so called "projects". Other ways of thinking about these projects might be a folder, containing all relevant files for a specific application or, for the technical inclined readers, a `git` repository.

This explanation is split in two parts: The first part will focus on how one interacts with these projects and describe the intended workflow for collaboration inside of `lively.next`. The second part will give some technical details on how these projects are implemented and working under the hood. The second part is only relevant for developers, while the first part is intended for all users of `lively.next`.

## Working with lively.projects - Informations for all Users

Even when developing an application in `lively.next` on your own, creating a project is the recommended way of doing so. 

> 💡 **Tip**
>
> Coming from other versions of `lively`, you might wonder why we do not prominently talk about working with [snapshots (exemplary: chapter 5.2 of "Evolving Tools in a Collaborative Self-supporting Development Environment". Jens Lincke, 2014.)](https://publishup.uni-potsdam.de/opus4-ubp/frontdoor/index/index/docId/9092). While snapshots are in principal available in `lively.next`, there are some unsolved problems with them that makes seamless collaboration still hard. We thus recommend the file-driven approach `lively.project` enables for now, while still acknowledging the potential that lies in the use of snapshot-driven approaches. Snapshots are called "playgrounds" inside of `lively.next`. You can start using them on the landing page. You might also encounter references to "worlds" throughout the code, the old name for `lively.next` playgrounds.

`lively.next` projects takes care of saving your works, sharing your progress with contributors, sync changes made by contributors to your system, and also comes with some quality of life features such as easy deployment of applications to GitHub pages. 

### Prerequisites

As of writing this, a GitHub account is necessary to meaningfully use `lively.next`.

### Creating a new Project

To start a new project, begin on the landing page of `lively.next`. Press the appropriate button and proceed to login with GitHub.

You have the option to create a new project locally, or initialize a project from a remote. Creating a new project locally is the right thing to do to start a new project. Initializing a project from a remote is the appropriate option in case you want to collaborate on an already existing project.

In the first case, you'll need to fill out the form. In the case you want to collaborate with others, you will need to check the box to create a GitHub repository. You can also do this later in the developing process. This option is then available through the project save menu in the top bar.  

Collaborators can then make the project available to them in `lively.next` by initializing a project from a remote and copying the GitHub URL of the repository.

The dropdown menu in the project creation prompt allows you to specify the owner of the projects repository on GitHub. You can either create the repository under your own user account or create it under an organization you are a member of. For the latter case, you'll need to grant sufficient permissions to the `lively.next` GitHub App when prompted.

`lively.next` will now create the expected folder structure of a project for you and also take care of setting up a GitHub repository etc. for you, in case you chose to do so.

### Using Projects

Working with `lively.next` projects is straight forward: Just open them inside of `lively.next` from the landing page and develop away! When you want to save your changes you can just press the save button in the top bar. `lively.next` will prompt you for a description of the changes you made. Clear and concise descriptions will make your life and that of all your collaborators easier. After you save your changes, they will also become available to all your collaborators.

When opening a project from the landing page, `lively.next` will make sure that you got the latest saved changes from all your collaborators!

> ⚠️ **Warning**
>
> We highly recommend saving your progress regularly and especially at the end of each session where you work with `lively.next`.
> Accumulating unsaved changes drastically increases the chance that you might loose out on the latest changes by your collaborators!

### Projects and their `lively.next` version

Projects come with a specified version of `lively.next` that they are "bound" to. When a project is opened in a `lively.next` version that is newer than the currently bound version this version will automatically be upgraded when the project is saved. When a version of `lively.next` that no longer exists is referenced, `lively.next` will indicate this at the time of opening the project. This mechanism is implemented in a way that gives you a lot of freedom, but you should try to make sure that your project still works with the latest version of `lively.next` in regular intervals.

#### Dependencies between Projects

As applications and components developed in `lively.next` are structured in projects, you might want to use another project as a dependency in your project.
A prime example of why one would like to do this is the development of a shared component library that you then want to use throughout multiple of your applications.

To add a different `lively.next` project to your project as a dependency, you simply use one of the components of the dependency inside of your `lively.next` project. The recommended way of doing this is via the "Component Browser". While dependent projects are available via the "Components Browser", components therein cannot be edited while another project is opened. For More details, take a look at the [Introduction to `lively.next`'s Studio](#documentation/studio).

Opening a project with a declared dependency inside of `lively.next` will also take care of ensuring all dependencies are available locally.

> ⚠️ **Warning**
>
> It is important to ensure that all collaborators GitHub accounts have access to all projects that are declared as dependencies!

> 💡 **Tip**
>
> Projects are versioned using a three number versioning system that follows [semver semantics](https://semver.org/).
> When saving a project, `lively.next` will by default increase the patch version of the project. Especially when having other projects that depend on your project, it is important that you cautiously keep the version updated. When saving a project, you can also increase the major and minor version numbers of a project under the advanced settings.

When opening a project with multiple dependencies that contradict each other or that are not all satisfiable, there will be a short prompt with this information upon opening the project. This mechanism is currently only intended to make you aware of this problem. Most importantly, there currently is no way for lively to "downgrade" a dependency to an older version. More sophisticated support for dependency management might be implemented in the future. As of writing this, you should however still be aware of these limitations.

### Working with Multiple Version of Projects in Parallel

When multiple people are working on the same project at the same time, it sometimes is easier when each member of the team uses their own, independent version of the project and they are unified at a later point in development. Programmers often call these different versions "branches". To save your own version independently of others, use the "Create a new branch to save on" option in the advanced options of the save dialogue. You can also see the name of the version you are currently saving to at the top of the save dialogue.
**`lively.next` will still try to make changes to the unified version of the project (called main) available to you. Please note that there is currently no option to unify branches inside of `lively.next`. You will either need to create a [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) on GitHub to do so or seek the help of a developer on your team.**

### Online and Offline Mode

The top bar allows you to toggle between online and offline mode. **It is highly recommended to use online mode whenever possible.**  However, when you currently do not have an active internet connection, you can enable offline mode to circumvent the automatic syncing of projects. Doing so means that `lively.next` will not try to retrieve the latest changes to your project upon load and saving will also not lead to your changes being published. **Working in such a manner might result in problems later on, when conflicting changes have been made.** You will need to be logged in already when enabling offline-mode in order for everything to work as expected. Logging out in offline mode might therefore be a bad idea.

> **💡 Tip**
>
> Offline mode does not necessarily mean that all work can seamlessly performed offline, as we use some dependencies provided by a CDN. However, we provide a caching mechanism for those, so that work without an internet connection is possible once the cache is warmed up.

## `lively.project` internals - Information for Developers

As you might have guessed from the above description, `lively.project` is simply a thin wrapper around `git`. Utilizing your local shell via `lively.2lively` and the GitHub API, we automatically commit, push, pull, and rebase a local repository. Our implementation is designed in a way that should allow non-technical users more-or-less seamless participation without learning (too much) about `git`, while still giving developers access to their accustomed workflows.

### What makes a Project

A project is defined by its folder structure. In theory, it would be possible to create a `lively.next` project by hand, by just creating all these files manually. Most important is the `package.json` file, that stores a lot of important meta data about the project that we utilize at runtime.
When creating a new project, the folder structure is as follow:

```sh
# >$ tree
.
├── build
├── fonts.css
├── index.css
├── index.js
├── package.json
├── README.md
├── tests
│   └── test.js
├── tools
│   ├── build.mjs
│   └── build.sh
├── ui
│   └── components.cp.js
└── workspaces
    └── default.workspace.js

```

Projects are stored inside of the `lively.next` installation directory inside of the `local_projects` folder. The folder of a project needs to follow a specific naming convention: `<OwningGitHubUser>--<NameOfTheProject>`.

### Git Operations in Projects

Projects will execute the following `git` operations at the specified points in time:

- Opening a project will try pull the remote version of the currently checked out branch. In the case of local commits, it will try to rebase them. In the presence of uncommitted changed, those will be stashed and applied after pulling/rebasing if possible.
- Saving a project will commit all changed files and try to push.
- Saving on a new branch will create a new branch at the currently checked out commit and switch to it.

In the case of something going amiss (especially during the application of a stash or while rebasing) `lively.next` will give up rather easily and show an error message to the user. In these cases they will need help by a developer. Cleanly committing all desired changes and cleaning up the stash by hand will normally resolve all problems. **Projects can always be committed to manually. There is no expectation towards the history from the standpoint of `lively.next`.** 

### Advanced GitHub Integrations

Projects come with some advanced integration for GitHub Actions. As of writing this, we automatically provide three actions for you:

1. An action to run the tests of your project in CI.
2. An action to build your project in CI and download the build as artifact, that can subsequently be used to serve a static website on any web-hoster.
3. An action to build and deploy your site using GitHub Pages. [Note, that for private repositories GitHub pages requires a paid plan](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages).

These actions are setup in a way to automatically keep the used `lively.next` version up to date. Inside of the project settings dialogue, available via the top bar inside of `lively.next`, you can change them to either run on each push to main or to be run manually on GitHub (default setting).

> ⚠️ **Warning**
>
> You should not change these files manually. However, feel free to add new actions or scripts!

### Deploying/Bundling Applications build with `lively.next`

We automatically provide a build script for the bundler of `lively.next`, called the `freezer`, with your project. In most circumstances, no changes to this script should be necessary. To run it locally, just execute `npm run build` inside of the folder of your project.

> 🏗️ **Notice**
>
> This section will be expanded on in the future! For further questions, right now the best course of action is to [reach out to us via matrix](https://matrix.to/#/#lively.next:matrix.org)!

The entrypoint for the bundled application is the `main()` function inside of the `index.js` file in your project. Here, you should create at least an instance of the `Morph` representing your application and open it in the world. Further actions are of course possible.