import { component } from "lively.morphic/index.js";
import { pt } from "lively.graphics/geometry-2d.js";
import { HTMLMorph } from "lively.morphic/html-morph.js";
const projects = component({
  type: HTMLMorph,
  name: 'aMarkdownPreviewMorph',
  extent: pt(420,8091.2),
  fixedHeight: false,
  html: '<div class=\"markdown-body\" style=\"margin: 5px\">\n\
<p class=\"markdown-line-marker\" data-mdline=\"0\" data-htmlline=\"1\">Work in <code>lively.next</code> is organized in so called “projects”. Other ways of thinking about these projects might be a folder, containing all relevant files for a specific application or, for the technical inclined readers, a <code>git</code> repository.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"2\" data-htmlline=\"3\">This explanation is split in two parts: The first part will focus on how one interacts with these projects and describe the intended workflow for collaboration inside of <code>lively.next</code>. The second part will give some technical details on how these projects are implemented and working under the hood. The second part is only relevant for developers, while the first part is intended for all users of <code>lively.next</code>.</p>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"4\" data-htmlline=\"5\">Working with lively.projects - Informations for all Users</h2>\n\
<p class=\"markdown-line-marker\" data-mdline=\"6\" data-htmlline=\"7\">Even when developing an application in <code>lively.next</code> on your own, creating a project is the recommended way of doing so.</p>\n\
<blockquote>\n\
<p>💡 <strong>Tip</strong></p>\n\
<p>Coming from other versions of <code>lively</code>, you might wonder why we do not prominently talk about working with <a href=\"https://publishup.uni-potsdam.de/opus4-ubp/frontdoor/index/index/docId/9092\" target=\"_blank\">snapshots (exemplary: chapter 5.2 of “Evolving Tools in a Collaborative Self-supporting Development Environment”. Jens Lincke, 2014.)</a>. While snapshots are in principal available in <code>lively.next</code>, there are some unsolved problems with them that makes seamless collaboration still hard. We thus recommend the file-driven approach <code>lively.project</code> enables for now, while still acknowledging the potential that lies in the use of snapshot-driven approaches. Snapshots are called “playgrounds” inside of <code>lively.next</code>. You can start using them on the landing page. You might also encounter references to “worlds” throughout the code, the old name for <code>lively.next</code> playgrounds.</p>\n\
</blockquote>\n\
<p class=\"markdown-line-marker\" data-mdline=\"12\" data-htmlline=\"13\"><code>lively.next</code> projects takes care of saving your works, sharing your progress with contributors, sync changes made by contributors to your system, and also comes with some quality of life features such as easy deployment of applications to GitHub pages.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"14\" data-htmlline=\"15\">Prerequisites</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"16\" data-htmlline=\"17\">As of writing this, a GitHub account is necessary to meaningfully use <code>lively.next</code>.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"18\" data-htmlline=\"19\">Creating a new Project</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"20\" data-htmlline=\"21\">To start a new project, begin on the landing page of <code>lively.next</code>. Press the appropriate button and proceed to login with GitHub.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"22\" data-htmlline=\"23\">You have the option to create a new project locally, or initialize a project from a remote. Creating a new project locally is the right thing to do to start a new project. Initializing a project from a remote is the appropriate option in case you want to collaborate on an already existing project.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"24\" data-htmlline=\"25\">In the first case, you’ll need to fill out the form. In the case you want to collaborate with others, you will need to check the box to create a GitHub repository. You can also do this later in the developing process. This option is then available through the project save menu in the top bar.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"26\" data-htmlline=\"27\">Collaborators can then make the project available to them in <code>lively.next</code> by initializing a project from a remote and copying the GitHub URL of the repository.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"28\" data-htmlline=\"29\">The dropdown menu in the project creation prompt allows you to specify the owner of the projects repository on GitHub. You can either create the repository under your own user account or create it under an organization you are a member of. For the latter case, you’ll need to grant sufficient permissions to the <code>lively.next</code> GitHub App when prompted.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"30\" data-htmlline=\"31\"><code>lively.next</code> will now create the expected folder structure of a project for you and also take care of setting up a GitHub repository etc. for you, in case you chose to do so.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"32\" data-htmlline=\"33\">Using Projects</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"34\" data-htmlline=\"35\">Working with <code>lively.next</code> projects is straight forward: Just open them inside of <code>lively.next</code> from the landing page and develop away! When you want to save your changes you can just press the save button in the top bar. <code>lively.next</code> will prompt you for a description of the changes you made. Clear and concise descriptions will make your life and that of all your collaborators easier. After you save your changes, they will also become available to all your collaborators.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"36\" data-htmlline=\"37\">When opening a project from the landing page, <code>lively.next</code> will make sure that you got the latest saved changes from all your collaborators!</p>\n\
<blockquote>\n\
<p>⚠️ <strong>Warning</strong></p>\n\
<p>We highly recommend saving your progress regularly and especially at the end of each session where you work with <code>lively.next</code>.\n\
Accumulating unsaved changes drastically increases the chance that you might loose out on the latest changes by your collaborators!</p>\n\
</blockquote>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"43\" data-htmlline=\"44\">Projects and their <code>lively.next</code> version</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"45\" data-htmlline=\"46\">Projects come with a specified version of <code>lively.next</code> that they are “bound” to. When a project is opened in a <code>lively.next</code> version that is newer than the currently bound version this version will automatically be upgraded when the project is saved. When a version of <code>lively.next</code> that no longer exists is referenced, <code>lively.next</code> will indicate this at the time of opening the project. This mechanism is implemented in a way that gives you a lot of freedom, but you should try to make sure that your project still works with the latest version of <code>lively.next</code> in regular intervals.</p>\n\
<h4 class=\"markdown-line-marker\" data-mdline=\"47\" data-htmlline=\"48\">Dependencies between Projects</h4>\n\
<p class=\"markdown-line-marker\" data-mdline=\"49\" data-htmlline=\"51\">As applications and components developed in <code>lively.next</code> are structured in projects, you might want to use another project as a dependency in your project.\n\
A prime example of why one would like to do this is the development of a shared component library that you then want to use throughout multiple of your applications.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"52\" data-htmlline=\"53\">To add a different <code>lively.next</code> project to your project as a dependency, you simply use one of the components of the dependency inside of your <code>lively.next</code> project. The recommended way of doing this is via the “Component Browser”. While dependent projects are available via the “Components Browser”, components therein cannot be edited while another project is opened. For More details, take a look at the <a href=\"#documentation/studio\" target=\"_blank\">Introduction to <code>lively.next</code>’s Studio</a>.</p>\n\
<p class=\"markdown-line-marker\" data-mdline=\"54\" data-htmlline=\"55\">Opening a project with a declared dependency inside of <code>lively.next</code> will also take care of ensuring all dependencies are available locally.</p>\n\
<blockquote>\n\
<p>⚠️ <strong>Warning</strong></p>\n\
<p>It is important to ensure that all collaborators GitHub accounts have access to all projects that are declared as dependencies!</p>\n\
</blockquote>\n\
<blockquote>\n\
<p>💡 <strong>Tip</strong></p>\n\
<p>Projects are versioned using a three number versioning system that follows <a href=\"https://semver.org/\" target=\"_blank\">semver semantics</a>.\n\
When saving a project, <code>lively.next</code> will by default increase the patch version of the project. Especially when having other projects that depend on your project, it is important that you cautiously keep the version updated. When saving a project, you can also increase the major and minor version numbers of a project under the advanced settings.</p>\n\
</blockquote>\n\
<p class=\"markdown-line-marker\" data-mdline=\"65\" data-htmlline=\"66\">When opening a project with multiple dependencies that contradict each other or that are not all satisfiable, there will be a short prompt with this information upon opening the project. This mechanism is currently only intended to make you aware of this problem. Most importantly, there currently is no way for <code>lively.next</code> to “downgrade” a dependency to an older version. More sophisticated support for dependency management might be implemented in the future. As of writing this, you should however still be aware of these limitations.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"67\" data-htmlline=\"68\">Working with Multiple Version of Projects in Parallel</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"69\" data-htmlline=\"71\">When multiple people are working on the same project at the same time, it sometimes is easier when each member of the team uses their own, independent version of the project and they are unified at a later point in development. Programmers often call these different versions “branches”. To save your own version independently of others, use the “Create a new branch to save on” option in the advanced options of the save dialogue. You can also see the name of the version you are currently saving to at the top of the save dialogue.\n\
<strong><code>lively.next</code> will still try to make changes to the unified version of the project (called main) available to you. Please note that there is currently no option to unify branches inside of <code>lively.next</code>. You will either need to create a <a href=\"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests\" target=\"_blank\">Pull Request</a> on GitHub to do so or seek the help of a developer on your team.</strong></p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"72\" data-htmlline=\"73\">Online and Offline Mode</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"74\" data-htmlline=\"75\">The top bar allows you to toggle between online and offline mode. <strong>It is highly recommended to use online mode whenever possible.</strong>  However, when you currently do not have an active internet connection, you can enable offline mode to circumvent the automatic syncing of projects. Doing so means that <code>lively.next</code> will not try to retrieve the latest changes to your project upon load and saving will also not lead to your changes being published. <strong>Working in such a manner might result in problems later on, when conflicting changes have been made.</strong> You will need to be logged in already when enabling offline-mode in order for everything to work as expected. Logging out in offline mode might therefore be a bad idea.</p>\n\
<blockquote>\n\
<p><strong>💡 Tip</strong></p>\n\
<p>Offline mode does not necessarily mean that all work can seamlessly performed offline, as we use some dependencies provided by a CDN. However, we provide a caching mechanism for those, so that work without an internet connection is possible once the cache is warmed up.</p>\n\
</blockquote>\n\
<h2 class=\"markdown-line-marker\" data-mdline=\"80\" data-htmlline=\"81\"><code>lively.project</code> internals - Information for Developers</h2>\n\
<p class=\"markdown-line-marker\" data-mdline=\"82\" data-htmlline=\"83\">As you might have guessed from the above description, <code>lively.project</code> is simply a thin wrapper around <code>git</code>. Utilizing your local shell via <code>lively.2lively</code> and the GitHub API, we automatically commit, push, pull, and rebase a local repository. Our implementation is designed in a way that should allow non-technical users more-or-less seamless participation without learning (too much) about <code>git</code>, while still giving developers access to their accustomed workflows.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"84\" data-htmlline=\"85\">What makes a Project</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"86\" data-htmlline=\"88\">A project is defined by its folder structure. In theory, it would be possible to create a <code>lively.next</code> project by hand, by just creating all these files manually. Most important is the <code>package.json</code> file, that stores a lot of important meta data about the project that we utilize at runtime.\n\
When creating a new project, the folder structure is as follow:</p>\n\
<pre><code class=\"language-sh\"># &gt;$ tree\n\
.\n\
├── build\n\
├── fonts.css\n\
├── index.css\n\
├── index.js\n\
├── package.json\n\
├── README.md\n\
├── tests\n\
│&nbsp;&nbsp; └── test.js\n\
├── tools\n\
│&nbsp;&nbsp; ├── build.mjs\n\
│&nbsp;&nbsp; └── build.sh\n\
├── ui\n\
│&nbsp;&nbsp; └── components.cp.js\n\
└── workspaces\n\
    └── default.workspace.js\n\
\n\
</code></pre>\n\
<p class=\"markdown-line-marker\" data-mdline=\"110\" data-htmlline=\"111\">Projects are stored inside of the <code>lively.next</code> installation directory inside of the <code>local_projects</code> folder. The folder of a project needs to follow a specific naming convention: <code>&lt;OwningGitHubUser&gt;--&lt;NameOfTheProject&gt;</code>.</p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"112\" data-htmlline=\"113\">Git Operations in Projects</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"114\" data-htmlline=\"115\">Projects will execute the following <code>git</code> operations at the specified points in time:</p>\n\
<ul>\n\
<li>Opening a project will try pull the remote version of the currently checked out branch. In the case of local commits, it will try to rebase them. In the presence of uncommitted changed, those will be stashed and applied after pulling/rebasing if possible.</li>\n\
<li>Saving a project will commit all changed files and try to push.</li>\n\
<li>Saving on a new branch will create a new branch at the currently checked out commit and switch to it.</li>\n\
</ul>\n\
<p class=\"markdown-line-marker\" data-mdline=\"120\" data-htmlline=\"121\">In the case of something going amiss (especially during the application of a stash or while rebasing) <code>lively.next</code> will give up rather easily and show an error message to the user. In these cases they will need help by a developer. Cleanly committing all desired changes and cleaning up the stash by hand will normally resolve all problems. <strong>Projects can always be committed to manually. There is no expectation towards the history from the standpoint of <code>lively.next</code>.</strong></p>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"122\" data-htmlline=\"123\">Advanced GitHub Integrations</h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"124\" data-htmlline=\"125\">Projects come with some advanced integration for GitHub Actions. As of writing this, we automatically provide three actions for you:</p>\n\
<ol>\n\
<li>An action to run the tests of your project in CI.</li>\n\
<li>An action to build your project in CI and download the build as artifact, that can subsequently be used to serve a static website on any web-hoster.</li>\n\
<li>An action to build and deploy your site using GitHub Pages. <a href=\"https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages\" target=\"_blank\">Note, that for private repositories GitHub pages requires a paid plan</a>.</li>\n\
</ol>\n\
<p class=\"markdown-line-marker\" data-mdline=\"130\" data-htmlline=\"131\">These actions are setup in a way to automatically keep the used <code>lively.next</code> version up to date. Inside of the project settings dialogue, available via the top bar inside of <code>lively.next</code>, you can change them to either run on each push to main or to be run manually on GitHub (default setting).</p>\n\
<blockquote>\n\
<p>⚠️ <strong>Warning</strong></p>\n\
<p>You should not change these files manually. However, feel free to add new actions or scripts!</p>\n\
</blockquote>\n\
<h3 class=\"markdown-line-marker\" data-mdline=\"136\" data-htmlline=\"137\">Deploying/Bundling Applications build with <code>lively.next</code></h3>\n\
<p class=\"markdown-line-marker\" data-mdline=\"138\" data-htmlline=\"139\">We automatically provide a build script for the bundler of <code>lively.next</code>, called the <code>freezer</code>, with your project. In most circumstances, no changes to this script should be necessary. To run it locally, just execute <code>npm run build</code> inside of the folder of your project.</p>\n\
<blockquote>\n\
<p>🏗️ <strong>Notice</strong></p>\n\
<p>This section will be expanded on in the future! For further questions, right now the best course of action is to <a href=\"https://matrix.to/#/#lively.next:matrix.org\" target=\"_blank\">reach out to us via matrix</a>!</p>\n\
</blockquote>\n\
<p class=\"markdown-line-marker\" data-mdline=\"144\" data-htmlline=\"145\">The entrypoint for the bundled application is the <code>main()</code> function inside of the <code>index.js</code> file in your project. Here, you should create at least an instance of the <code>Morph</code> representing your application and open it in the world. Further actions are of course possible.</p>\n\
\n\
</div>',
  layout: null,
  position: pt(750,297)
});



export { projects }