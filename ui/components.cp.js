import { component, part, ViewModel, TilingLayout } from 'lively.morphic';
import { pt, rect } from 'lively.graphics/geometry-2d.js';
import { Image } from 'lively.morphic/morph.js';
import { Color } from 'lively.graphics/color.js';
import { Text } from 'lively.morphic/text/morph.js';

import { Footer } from './footer.cp.js';
import { HashRouter } from 'lively.components/hash-router.js';
import { Blog } from './blog.cp.js';
import { entries } from '../assets/articles/entries.js';
import { HistoryPage } from './pages/history.cp.js';
import { ImprintPage } from './pages/imprint.cp.js';
import { ExamplePage } from './pages/examples.cp.js';

import { connect } from 'lively.bindings';
import { NavBar } from './navigation.cp.js';
import { LandingPage } from './pages/landing-page.cp.js';

import { ErrorPage } from './pages/error.cp.js';
import { DocumentationPage } from './pages/documentation.cp.js';

class LivelyWebPageModel extends ViewModel {
  static get properties () {
    return {
      expose: {
        get () {
          return ['relayout', 'onMouseDown'];
        }
      }
    };
  }

  hideAllPages () {
    const { examplesPage, documentationPage, landingPage, blogComponent, errorPage, historyPage, imprint } = this.ui;

    examplesPage.visible = documentationPage.visible = landingPage.visible = blogComponent.visible = errorPage.visible = historyPage.visible = imprint.visible = false;

    // reset menu headings
    this.ui.history.fontWeight = 'normal';
    this.ui.documentation.fontWeight = 'normal';
    this.ui.examples.fontWeight = 'normal';
    this.ui.blog.fontWeight = 'normal';
  }

  showErrorPage () {
    const { errorPage } = this.ui;
    this.hideAllPages();
    errorPage.visible = true;
    errorPage.env.forceUpdate();
    errorPage.getSubmorphNamed('bottom text').requestMasterStyling();
    errorPage.getSubmorphNamed('number').requestMasterStyling();
  }

  route (hash) {
    const { examplesPage, documentationPage, landingPage, blogComponent, historyPage, imprint } = this.ui;

    this.hideAllPages();

    // base landing page
    if (!hash || hash === '') {
      landingPage.visible = true;
      return;
    }

    if (hash === 'history') {
      this.ui.history.fontWeight = 'bold';
      historyPage.visible = true;
      return;
    }

    if (hash === 'documentation') {
      this.ui.documentation.fontWeight = 'bold';
      documentationPage.visible = true;
      return;
    }

    if (hash === 'examples') {
      this.ui.examples.fontWeight = 'bold';
      examplesPage.visible = true;
      return;
    }

    if (hash === 'imprint') {
      imprint.visible = true;
      return;
    }

    this.ui.blog.fontWeight = 'bold';
    if (hash === 'blog') {
      this.ui.blog.fontWeight = 'bold';
      blogComponent.visible = true;
      blogComponent.showList();
      return;
    }
    if (hash.startsWith('blog/')) {
      this.ui.blog.fontWeight = 'bold';
      const slug = hash.replace('blog/', '').replaceAll('/', '');
      blogComponent.visible = true;
      const entryToOpen = entries.find(e => e.slug === slug);
      if (!entryToOpen) {
        this.showErrorPage();
        blogComponent.visible = false;
        return;
      }
      blogComponent.openEntry(entryToOpen);
      return;
    }

    this.showErrorPage();
  }

  onMouseDown (evt) {
    if (evt.targetMorphs[0].name === 'blog') this.router.route('blog', true);
    if (evt.targetMorphs[0].name === 'history') this.router.route('history', true);
    if (evt.targetMorphs[0].name === 'documentation') this.router.route('documentation', true);
    if (evt.targetMorphs[0].name === 'examples') this.router.route('examples', true);
    if (entries.map(e => e.slug).includes(evt.targetMorphs[0].name)) this.router.route(`blog/${evt.targetMorphs[0].name}`, true);
    if (evt.targetMorphs[0].name === 'logo section') this.router.route(null, true);
  }

  async viewDidLoad () {
    window.LIVELY_PAGE = this.view;
    this.router = new HashRouter({
      debugMode: !lively.FreezerRuntime
    });
    window.router = this.router; // FIXME:

    this.view.get('try it out button').onMouseDown = () => window.open('https://github.com/LivelyKernel/lively.next', '_blank');
    connect(this.router, 'routed', this, 'route');
    if (lively.FreezerRuntime) this.relayout();
    let loadedHash = window.location.hash;
    if (loadedHash.startsWith('#')) loadedHash = loadedHash.replace('#', '');
    this.route(loadedHash, true);
  }

  relayout () {
    // this.ui.body.width = this.view.width > 1200 ? 1200 : this.view.width;
    // this.view.applyLayoutIfNeeded();
    if (!lively.FreezerRuntime) return;
    this.view.position = pt(0, 0);
    this.view.extent = $world.windowBounds().extent();
  }
}

const LargeLogoSection = component({
  name: 'aMorph',
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
    textAndAttributes: ['lively.next\n', {
      fontFamily: '\"IBM Plex Sans\"',
      fontSize: 30
    }, 'the ', { fontStyle: 'italic' }, 'truly', {
      fontWeight: '600',
      fontStyle: 'italic'
    }, ' integrated development environment', { fontStyle: 'italic' }]
  }]
});

const SmallLogoSection = component(LargeLogoSection, {
  extent: pt(215, 109.5),
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
  extent: pt(223, 109.5),
  submorphs: [{
    name: 'text'
  }]
});

export const LivelyWebPage = component({
  name: 'lively web site',
  defaultViewModel: LivelyWebPageModel,
  respondsToVisibleWindow: true,
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
  extent: pt(474, 863.3),
  submorphs: [{
    name: 'website header',
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
    submorphs: [part(LogoSection, {
      name: 'logo section',
      extent: pt(120, 109.5)
    }), part(NavBar, {
      name: 'navigation',
      fill: Color.transparent,
      master: {
        breakpoints: [
          [pt(0, 0), component({
            fill: Color.rgb(255, 255, 255, 0),
            layout: new TilingLayout({
              align: 'right',
              padding: rect(0, 0, 30, 0)
            })
          })], [
            pt(130, 0), component({
              fill: Color.rgb(255, 255, 255, 0),
              layout: new TilingLayout({
                align: 'right',
                padding: rect(0, 0, 80, 0)
              })
            })]]
      },
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
    height: 539.41796875,
    clipMode: 'visible',
    master: {
      breakpoints: [
        [pt(0, 0), component({
          layout: new TilingLayout({
            align: 'center',
            axis: 'column',
            axisAlign: 'center',
            justifySubmorphs: 'spaced',
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
      borderWidth: 1,
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
        }], ['history page', {
          height: 'fixed',
          width: 'fill'
        }], ['documentation page', {
          height: 'fixed',
          width: 'fill'
        }], ['examples page', {
          height: 'fixed',
          width: 'fill'
        }], ['blog component', {
          height: 'fixed',
          width: 'fill'
        }], ['error page', {
          height: 'fixed',
          width: 'fill'
        }],
        ['imprint', {
          height: 'fixed',
          width: 'fill'
        }]]
      }),
      submorphs: [
        part(LandingPage, {
          name: 'landing page',
          visible: true,
          submorphs: [{
            name: 'features',
            submorphs: [{
              name: 'bottom part',
              submorphs: [{
                name: 'live programming',
                submorphs: [{
                  name: 'description',
                  extent: pt(236, 189.8),
                  width: undefined
                }]
              }, {
                name: 'customize',
                extent: pt(237.5, 159),
                submorphs: [{
                  name: 'description',
                  extent: pt(236, 139.4),
                  width: undefined
                }]
              }, {
                name: 'batteries included',
                extent: pt(237.5, 159),
                submorphs: [{
                  name: 'description',
                  extent: pt(236, 139.4),
                  width: undefined
                }]
              }]
            }, {
              name: 'top part',
              submorphs: [{
                name: 'code generation',
                extent: pt(237.5, 92),
                submorphs: [{
                  name: 'description',
                  extent: pt(236, 72.2),
                  width: undefined
                }]
              }, {
                name: 'components',
                extent: pt(237.5, 109),
                submorphs: [{
                  name: 'description',
                  extent: pt(236, 89),
                  width: undefined
                }]
              }, {
                name: 'building together',
                extent: pt(237.5, 126),
                submorphs: [{
                  name: 'description',
                  extent: pt(236, 105.8),
                  width: undefined
                }]
              }]
            }]
          }]
        }),
        part(HistoryPage, {
          name: 'history page',
          visible: false
        }),
        part(DocumentationPage, {
          name: 'documentation page',
          visible: false
        }),
        part(ExamplePage, {
          name: 'examples page',
          visible: false
        }),
        part(ImprintPage, {
          name: 'imprint',
          visible: false
        }),
        part(ErrorPage, {
          name: 'error page',
          visible: false,
          submorphs: [{
            name: 'wrapper',
            extent: pt(750, 149),
            submorphs: [{
              name: 'number',
              extent: pt(500, 187.4),
              width: undefined
            }, {
              name: 'bottom text',
              extent: pt(500, 1226.9),
              width: undefined
            }]
          }]
        }),
        part(Blog, {
          name: 'blog component',
          visible: false
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
