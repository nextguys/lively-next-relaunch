import { component, part, ViewModel, TilingLayout } from 'lively.morphic';
import { pt, rect } from 'lively.graphics/geometry-2d.js';
import { Image } from 'lively.morphic/morph.js';
import { Color } from 'lively.graphics/color.js';
import { Text } from 'lively.morphic/text/morph.js';
import { HTMLMorph } from 'lively.morphic/html-morph.js';
import { without } from 'lively.morphic/components/core.js';
import { add } from 'lively.morphic/components/policy.js';
import { Footer } from './footer.cp.js';
import { HashRouter } from 'lively.components/hash-router.js';
import { Blog } from './blog.cp.js';

import { connect } from 'lively.bindings';
import { NavBar } from './header.cp.js';
import { LandingPage } from './pages/landing-page.cp.js';
import { CommunityPage } from './pages/community.cp.js';
class VideoLooperModel extends ViewModel {
  static get properties () {
    return {
      srcURL: {},
      height: {},
      width: {}
    };
  }

  viewDidLoad () {
    const { height, width, srcURL } = this;
    this.view.html = `<video autoplay='true' loop='true' disablepictureinpicture='true' playsinline='true' height='${height}' width='${width}'>
  <source src="${srcURL}">
</video>`;
  }
}

const VideoLooper = component({
  type: HTMLMorph,
  name: 'video looper',
  defaultViewModel: VideoLooperModel
});

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

  route (hash) {
    const { communityPage, landingPage, blogComponent } = this.ui;
    communityPage.visible = landingPage.visible = blogComponent.visible = false;
    // base landing page
    if (!hash || hash === '') landingPage.visible = true;
    if (hash === 'community') communityPage.visible = true;
    if (hash === 'blog') blogComponent.visible = true;
  }

  onMouseDown (evt) {
    if (evt.targetMorphs[0].name === 'blog') this.router.route('blog', true);
    if (evt.targetMorphs[0].name === 'community') this.router.route('community', true);
    if (evt.targetMorphs[0].name === 'examples') this.router.route('examples', true);
    if (evt.targetMorphs[0].name === 'documentation') this.router.route('documentation', true);
    if (evt.targetMorphs[0].name === 'history') this.router.route('history', true);
    if (evt.targetMorphs[0].name === 'logo section') this.router.route(null, true);
  }

  async viewDidLoad () {
    window.LIVELY_PAGE = this.view;
    this.router = new HashRouter({
      debugMode: !lively.FreezerRuntime
    });
    window.router = this.router; // FIXME:

    connect(this.router, 'routed', this, 'route');
    if (lively.FreezerRuntime) this.relayout();
    let loadedHash = window.location.hash;
    if (loadedHash.startsWith('#')) loadedHash = loadedHash.replace('#', '');
    this.route(loadedHash, true);
  }

  relayout () {
    this.ui.body.width = this.view.width > 1200 ? 1200 : this.view.width;
    this.view.applyLayoutIfNeeded();
    if (!lively.FreezerRuntime) return;
    this.view.position = pt(0, 0);
    this.view.extent = $world.visibleBounds().extent();
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
    }, 'the ', {}, 'truly', {
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
  extent: pt(266.5, 109.5),
  submorphs: [{
    name: 'text'
  }]
});

export const SellingPointCallOutVideoRight = component({
  name: 'skalier den usp junge',
  layout: new TilingLayout({
    align: 'center',
    axisAlign: 'center',
    hugContentsHorizontally: true,
    hugContentsVertically: true,
    padding: rect(10, 10, 0, 0)
  }),
  extent: pt(533, 267),
  submorphs: [{
    name: 'text',
    layout: new TilingLayout({
      axis: 'column',
      padding: rect(30, 30, 0, 0),
      spacing: 10
    }),
    borderColor: Color.rgb(23, 160, 251),
    borderWidth: 1,
    extent: pt(241, 206.5),
    position: pt(25.5, 102),
    submorphs: [{
      type: Text,
      name: 'header',
      dynamicCursorColoring: true,
      fill: Color.rgb(255, 255, 255),
      position: pt(80, 80.5),
      textAndAttributes: ['building together!', null]
    }, {
      type: Text,
      name: 'description',
      borderColor: Color.rgb(23, 160, 251),
      borderWidth: 1,
      dynamicCursorColoring: true,
      extent: pt(183.5, 133),
      fill: Color.rgb(255, 255, 255),
      fixedHeight: true,
      fixedWidth: true,
      lineWrapping: 'by-words',
      padding: rect(1, 1, 0, 0),
      position: pt(-58, 17)
    }]
  }, part(VideoLooper, {
    name: 'looper',
    position: pt(219, 17.5),
    extent: pt(284.5, 261),
    viewModel: {
      height: 200,
      width: 150,
      srcURL: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm'
    }
  })]
});

export const SellingPointCallOutVideoLeft = component(SellingPointCallOutVideoRight, {
  name: 'callout video left',
  submorphs: [without('text'), add({
    name: 'text',
    layout: new TilingLayout({
      axis: 'column',
      padding: rect(30, 30, 0, 0),
      spacing: 10
    }),
    borderColor: Color.rgb(23, 160, 251),
    borderWidth: 1,
    extent: pt(241, 206.5),
    position: pt(25.5, 102),
    submorphs: [{
      type: Text,
      name: 'header',
      dynamicCursorColoring: true,
      fill: Color.rgb(255, 255, 255),
      position: pt(80, 80.5),
      textAndAttributes: ['building together!', null]
    }, {
      type: Text,
      name: 'description',
      borderColor: Color.rgb(23, 160, 251),
      borderWidth: 1,
      dynamicCursorColoring: true,
      extent: pt(183.5, 133),
      fill: Color.rgb(255, 255, 255),
      fixedHeight: true,
      fixedWidth: true,
      lineWrapping: 'by-words',
      padding: rect(1, 1, 0, 0),
      position: pt(-58, 17)
    }]
  })]
});

export const LivelyWebPage = component({
  name: 'lively web site',
  styleClasses: ['website'],
  defaultViewModel: LivelyWebPageModel,
  respondsToVisibleWindow: true,
  clipMode: 'auto',
  layout: new TilingLayout({
    axis: 'column',
    axisAlign: 'center',
    resizePolicies: [['website header', {
      height: 'fixed',
      width: 'fill'
    }], ['footer', {
      height: 'fixed',
      width: 'fill'
    }]]
  }),
  extent: pt(1128, 701),
  submorphs: [{
    name: 'website header',
    layout: new TilingLayout({
      align: 'center',
      axisAlign: 'center',
      padding: rect(50, 0, -50, 0),
      resizePolicies: [['logo section', {
        height: 'fixed',
        width: 'fill'
      }], ['navigation', {
        height: 'fixed',
        width: 'fill'
      }]]
    }),
    borderColor: Color.rgb(23, 160, 251),
    extent: pt(1261, 175),
    submorphs: [part(LogoSection, {
      name: 'logo section',
      position: pt(-321, -70),
      extent: pt(693.5, 109.5)
    }), part(NavBar, {
      name: 'navigation',
      clipMode: 'visible',
      layout: new TilingLayout({
        align: 'right',
        padding: rect(0, 0, 20, 0)
      })
    })]
  }, {
    name: 'body',
    clipMode: 'hidden',
    layout: new TilingLayout({
      align: 'center',
      axis: 'column',
      axisAlign: 'center',
      hugContentsVertically: true,
      resizePolicies: [['landing page', {
        height: 'fixed',
        width: 'fill'
      }], ['community page', {
        height: 'fixed',
        width: 'fill'
      }], ['blog component', {
        height: 'fixed',
        width: 'fill'
      }]]
    }),
    submorphs: [
      part(LandingPage, {
        name: 'landing page'
      }),
      part(CommunityPage, {
        name: 'community page',
        visible: false
      }),
      part(Blog, {
        name: 'blog component',
        visible: false
      })
    ],
    borderColor: Color.rgb(23, 160, 251),
    position: pt(0, 173)
  }, part(Footer, {
    name: 'footer',
    layout: new TilingLayout({
      align: 'center',
      axisAlign: 'center',
      hugContentsVertically: true,
      padding: rect(20, 20, 0, 0),
      spacing: 30,
      wrapSubmorphs: true
    })
  })]
});
