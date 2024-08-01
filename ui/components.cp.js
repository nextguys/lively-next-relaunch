import { component, part, ViewModel, TilingLayout } from 'lively.morphic';
import { pt, rect } from 'lively.graphics/geometry-2d.js';
import { Image } from 'lively.morphic/morph.js';
import { Color } from 'lively.graphics/color.js';
import { Text } from 'lively.morphic/text/morph.js';

import { Footer } from './footer.cp.js';
import { HashRouter } from 'lively.components/hash-router.js';
import { Blog } from './blog.cp.js';
import { entries as blogEntries } from '../assets/articles/entries.js';
import { CompiledHistoryPage } from './pages/compiled_history.cp.js';
import { ImprintPage } from './pages/imprint.cp.js';
import { ExamplePage } from './pages/examples.cp.js';

import { connect, signal } from 'lively.bindings';
import { NavBar } from './navigation.cp.js';
import { LandingPage } from './pages/landing-page.cp.js';

import { ErrorPage } from './pages/error.cp.js';
import { DocumentationPage, BackToDocsButton } from './pages/documentation.cp.js';

import bowser from 'esm://run/bowser';

class LivelyWebPageModel extends ViewModel {
  static get properties () {
    return {
      documentationComponents: {
        readOnly: true,
        get () {
          return {
            morphic: {
              load: async () => (await System.import('nextguys--lively-next-relaunch/explanation/morphic.cp.js')).morphic,
              title: 'lively.morphic'
            },
            modules: {
              load: async () => (await System.import('nextguys--lively-next-relaunch/explanation/modules.cp.js')).modules,
              title: 'lively.modules'
            },
            projects: {
              load: async () => (await System.import('nextguys--lively-next-relaunch/explanation/projects.cp.js')).projects,
              title: 'lively.projects'
            },
            serialization: {
              load: async () => (await System.import('nextguys--lively-next-relaunch/explanation/serialization.cp.js')).serialization,
              title: 'lively.serialization'
            },
            studio: {
              load: async () => (await System.import('nextguys--lively-next-relaunch/explanation/studio.cp.js')).studio,
              title: 'lively.studio'
            }
          };
        }
      },
      expose: {
        get () {
          return ['onMouseDown', 'getAllRoutes', 'route'];
        }
      }
    };
  }

  getAllRoutes () {
    return [
      '', 'history', 'documentation',
      ...Object.keys(this.documentationComponents).map(slug => `documentation/${slug}`),
      'examples', 'imprint', 'blog',
      ...blogEntries.map(e => `blog/${e.slug}`),
      'error'
    ];
  }

  hideAllPages () {
    // reset menu headings
    this.ui.history.fontWeight = 'normal';
    this.ui.documentation.fontWeight = 'normal';
    this.ui.examples.fontWeight = 'normal';
    this.ui.blog.fontWeight = 'normal';
    this.ui.body.submorphs = [];
    if (lively.FreezerRuntime) { $world.env.eventDispatcher.keyInputHelper.domState.textareaNode.setAttribute('disabled', true); }
  }

  showErrorPage () {
    let errorPage = this.showInBody(ErrorPage);
    errorPage.getSubmorphNamed('bottom text').requestMasterStyling();
    errorPage.getSubmorphNamed('number').requestMasterStyling();
  }

  showInBody (pageComponent) {
    const page = part(pageComponent);
    this.ui.body.submorphs = [page];
    this.ui.body.layout.setResizePolicyFor(page, { width: 'fill', height: 'fixed' });
    page.whenRendered().then(() => signal(this.view, 'route finished'));
    return page;
  }

  async route (hash) {
    this.hideAllPages();

    window.scrollTo(0, 0);

    // base landing page
    if (!hash || hash === '') {
      this.showInBody(LandingPage);
      return;
    }

    if (hash === 'history') {
      this.ui.history.fontWeight = 'bold';
      this.showInBody(CompiledHistoryPage);
      return;
    }

    if (hash === 'documentation') {
      this.ui.documentation.fontWeight = 'bold';
      this.showInBody(DocumentationPage);
      return;
    }

    if (hash === 'examples') {
      this.ui.examples.fontWeight = 'bold';
      this.showInBody(ExamplePage);
      return;
    }

    if (hash === 'imprint') {
      this.showInBody(ImprintPage);
      return;
    }

    let blogComponent;
    if (hash === 'blog') {
      this.ui.blog.fontWeight = 'bold';
      blogComponent = this.showInBody(Blog);
      blogComponent.showList();
      return;
    }

    if (hash.startsWith('blog/')) {
      this.ui.blog.fontWeight = 'bold';
      blogComponent = this.showInBody(Blog);
      const slug = hash.replace('blog/', '').replaceAll('/', '');
      const entryToOpen = blogEntries.find(e => e.slug === slug);
      if (!entryToOpen) {
        this.showErrorPage();
        return;
      }
      blogComponent.openEntry(entryToOpen);
      return;
    }

    if (hash.startsWith('documentation/')) {
      const slug = hash.replace('documentation/', '').replaceAll('/', '');
      if (!this.documentationComponents[slug]) {
        this.showErrorPage();
        return;
      }
      this.ui.documentation.fontWeight = 'bold';
      this.showInBody(await this.documentationComponents[slug]?.load());
      const backBtn = this.ui.body.addMorphBack(part(BackToDocsButton, {
        name: 'go back to documentation',
        submorphs: [{
          name: 'chapter title', textAndAttributes: [this.documentationComponents[slug].title, null]
        }]
      }));
      this.ui.body.layout.setResizePolicyFor(backBtn, { width: 'fill', height: 'fixed' });
      return;
    }

    this.showErrorPage();
  }

  onMouseDown (evt) {
    if (evt.targetMorphs[0].name === 'blog') this.router.route('blog', true);
    if (evt.targetMorphs[0].name === 'history') this.router.route('history', true);
    if (evt.targetMorphs[0].name === 'documentation' || evt.targetMorphs[0].name === 'go back to documentation') this.router.route('documentation', true);
    if (this.documentationComponents[evt.targetMorphs[0].name]) this.router.route(`documentation/${evt.targetMorphs[0].name}`, true);
    if (evt.targetMorphs[0].name === 'examples') this.router.route('examples', true);
    if (blogEntries.map(e => e.slug).includes(evt.targetMorphs[0].name)) this.router.route(`blog/${evt.targetMorphs[0].name}`, true);
    if (evt.targetMorphs[0].name === 'logo section') this.router.route(null, true);
    if (evt.targetMorphs[0].name === 'try it out button') {
      const ua = bowser.parse(navigator.userAgent);
      const platform = ua.platform.type;
      const os = ua.os.name;
      if (platform === 'mobile' && os === 'iOS') {
        window.location = 'https://github.com/LivelyKernel/lively.next';
      }
      window.open('https://github.com/LivelyKernel/lively.next', '_blank');
    }
  }

  async viewDidLoad () {
    window.LIVELY_PAGE = this.view;
    this.router = new HashRouter();
    window.router = this.router; // to make this available from within the blog
    connect(this.router, 'routed', this, 'route');
    let loadedHash = window.location.hash;
    if (loadedHash.startsWith('#')) loadedHash = loadedHash.replace('#', '');
    this.route(loadedHash, true);
  }
}

const LargeLogoSection = component({
  name: 'aMorph',
  fill: Color.rgba(255, 255, 255, 0),
  nativeCursor: 'pointer',
  borderColor: Color.rgb(23, 160, 251),
  extent: pt(383.5, 109.5),
  layout: new TilingLayout({
    axisAlign: 'center'
  }),
  position: pt(39, 57.5),
  submorphs: [{
    type: Image,
    name: 'logo',
    reactsToPointer: false,
    extent: pt(100, 100)
  }, {
    type: Text,
    reactsToPointer: false,
    name: 'text',
    extent: pt(275, 128),
    fixedWidth: true,
    textAlign: 'right',
    fontColor: Color.lively,
    borderColor: Color.rgb(23, 160, 251),
    dynamicCursorColoring: true,
    fill: Color.rgba(255, 255, 255, 0),
    lineWrapping: 'by-words',
    padding: rect(1, 1, 0, 0),
    position: pt(100, 0),
    textAndAttributes: ['lively', {
      fontFamily: '\"IBM Plex Sans\"',
      fontSize: 30,
      fontWeight: '600'
    }, '.next\n', {
      fontFamily: '\"IBM Plex Sans\"',
      fontSize: 30
    }, 'the ', {
      fontStyle: 'italic'
    }, 'truly', {
      fontStyle: 'italic',
      fontWeight: '600'
    }, ' integrated development environment', {
      fontStyle: 'italic'
    }]
  }]
});

const SmallLogoSection = component(LargeLogoSection, {
  extent: pt(215, 109.5),
  fill: Color.rgba(255, 255, 255, 0),
  submorphs: [{
    name: 'logo',
    extent: pt(50, 50)
  }, {
    name: 'text',
    extent: pt(160.5, 78)
  }]
});

const LogoSection = component(SmallLogoSection, {
  master: {
    breakpoints: [
      [pt(0, 0), SmallLogoSection],
      [pt(375, 0), LargeLogoSection]
    ]
  },
  extent: pt(262.3, 100),
  fill: Color.rgba(255, 255, 255, 0)
});

// page = part(LivelyWebPage)
// page.openInWorld()
// now the page still does not have the correct styling applied
export const LivelyWebPage = component({
  name: 'lively web site',
  defaultViewModel: LivelyWebPageModel,
  layout: new TilingLayout({
    align: 'center',
    axis: 'column',
    axisAlign: 'center',
    justifySubmorphs: 'spaced',
    resizePolicies: [['website header', {
      height: 'fixed',
      width: 'fill'
    }], ['contents wrapper', {
      height: 'fill',
      width: 'fill'
    }]]
  }),
  extent: pt(1189.2, 863.3),
  submorphs: [{
    name: 'website header',
    fill: Color.rgba(255, 255, 255, 0),
    height: 138.5,
    master: {
      breakpoints: [
        [pt(0, 0), component({
          layout: new TilingLayout({
            align: 'center',
            axisAlign: 'center',
            padding: rect(20, 20, -20, -20),
            resizePolicies: [['logo section', {
              height: 'fixed',
              // Takes the value from the moment the breakpoint becomes active
              width: 'fixed'
            }], ['navigation', {
              height: 'fixed',
              width: 'fill'
            }]]
          })
        })],
        [pt(400, 0), component({
          layout: new TilingLayout({
            align: 'center',
            axisAlign: 'center',
            padding: rect(50, 20, -50, -20),
            resizePolicies: [['logo section', {
              height: 'fixed',
              width: 'fill'
            }], ['navigation', {
              height: 'fixed',
              width: 'fill'
            }]]
          })
        })]]
    },
    borderColor: Color.rgb(23, 160, 251),
    submorphs: [
      part(LogoSection, { name: 'logo section' }),
      part(NavBar, {
        name: 'navigation',
        clipMode: 'visible',
        fill: Color.transparent,
        submorphs: [{
          name: 'burger menu',
          layout: new TilingLayout({
            align: 'center',
            axisAlign: 'center',
            hugContentsHorizontally: true,
            hugContentsVertically: true
          })
        }]
      })]
  }, {
    name: 'contents wrapper',
    master: {
      breakpoints: [
        [pt(0, 0), component({
          layout: new TilingLayout({
            align: 'center',
            axis: 'column',
            axisAlign: 'center',
            justifySubmorphs: 'spaced',
            hugContentsVertically: true,
            resizePolicies: [['body', { height: 'fixed', width: 'fill' }], ['footer', {
              height: 'fixed',
              width: 'fill'
            }]]
          })
        })],
        [pt(1200, 0), component({
          layout: new TilingLayout({
            align: 'center',
            axis: 'column',
            axisAlign: 'center',
            justifySubmorphs: 'spaced',
            hugContentsVertically: true,
            resizePolicies: [['body', { height: 'fixed', width: 'fixed' }], ['footer', {
              height: 'fixed',
              width: 'fill'
            }]]
          })
        })]
      ]
    },
    submorphs: [{
      name: 'body',
      borderWidth: 0,
      clipMode: 'hidden',
      width: 1200,
      layout: new TilingLayout({
        align: 'center',
        axis: 'column',
        axisAlign: 'center',
        hugContentsVertically: true,
        padding: rect(20, 20, 0, 0),
        resizePolicies: [['landing page', {
          height: 'fixed',
          width: 'fill'
        }]]
      }),
      submorphs: [
        part(LandingPage, {
          name: 'landing page',
          visible: true
        })
      ],
      borderColor: Color.rgb(251, 23, 26),
      position: pt(0, 173)
    },
    part(Footer, {
      name: 'footer'
    })
    ]
  }
  ]
});
