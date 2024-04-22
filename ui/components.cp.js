import { component, ConstraintLayout, part, ViewModel, TilingLayout } from 'lively.morphic';
import { pt, rect } from 'lively.graphics/geometry-2d.js';
import { Image } from 'lively.morphic/morph.js';
import { Color } from 'lively.graphics/color.js';
import { Text } from 'lively.morphic/text/morph.js';
import { HTMLMorph } from 'lively.morphic/html-morph.js';
import { without } from 'lively.morphic/components/core.js';
import { add } from 'lively.morphic/components/policy.js';
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
          return ['relayout'];
        }
      }
    };
  }

  viewDidLoad () {
    if (lively.FreezerRuntime) this.relayout();
  }

  relayout () {
    if (!lively.FreezerRuntime) return;
    this.view.position = pt(0, 0);
    this.view.extent = $world.visibleBounds().extent();
  }
}

const LargeLogoSection = component({
  name: 'aMorph',
  borderColor: Color.rgb(23, 160, 251),
  extent: pt(383.5, 109.5),
  layout: new TilingLayout({
    axisAlign: 'center'
  }),
  position: pt(39, 57.5),
  submorphs: [{
    type: Image,
    name: 'logo',
    extent: pt(100, 100)
  }, {
    type: Text,
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
      fontFamily: '"IBM Plex Sans"',
      fontSize: 30
    }, 'the truly integrated development environment', {
      fontStyle: 'italic'
    }]
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
  extent: pt(220, 109.5),
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
  defaultViewModel: LivelyWebPageModel,
  layout: new ConstraintLayout({
    lastExtent: {
      x: 1260.5,
      y: 670
    },
    reactToSubmorphAnimations: false,
    submorphSettings: [['aMorph_1', {
      x: 'resize',
      y: 'resize'
    }]]
  }),
  extent: pt(900.5, 670),
  submorphs: [part(LogoSection), {
    name: 'aMorph_1',
    layout: new TilingLayout({}),
    borderColor: Color.rgb(23, 160, 251),
    extent: pt(1180, 473.5),
    position: pt(38.5, 172.3),
    submorphs: [part(VideoLooper, {
      viewModel: {
        height: 200,
        width: 150,
        srcURL: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm'
      }
    })]
  }]

});
