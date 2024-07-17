import { component, ViewModel, Image, Label, ShadowObject, ConstraintLayout, without, add, part, TilingLayout, Ellipse } from 'lively.morphic';
import { Color, RadialGradient, rect, LinearGradient, pt } from 'lively.graphics';
import { num } from 'lively.lang';
import { Path } from 'lively.morphic/morph.js';
import { Text } from 'lively.morphic/text/morph.js';
import { projectAsset } from 'lively.project/helpers.js';
import { TiktokButton } from '../ui/pages/landing-page.cp.js';
import { Spinner } from 'lively.components/loading-indicator.cp.js';

class InteractiveDelayModel extends ViewModel {
  static get properties () {
    return {
      loader: {
        get () {
          return ({
            reconciliation: async () => {
              const { ReconciliationSample } = await System.import('nextguys--lively-next-relaunch/explanation/interactive-examples.cp.js');
              return part(ReconciliationSample);
            },
            'editor example 1': async () => {
              const { EditorSample1 } = await System.import('nextguys--lively-next-relaunch/explanation/interactive-examples.cp.js');
              return part(EditorSample1);
            }
          })[this.getProperty('loader')];
        }
      },
      bindings: {
        get () {
          return [
            { signal: 'onHoverIn', handler: 'onHoverIn' },
            { signal: 'onHoverOut', handler: 'onHoverOut' },
            { signal: 'onMouseMove', handler: 'repositionTextNode' },
            { target: 'start btn', signal: 'onMouseDown', handler: 'loadInteractive' }
          ];
        }
      }
    };
  }

  __serialize__ () {
    return {
      __expr__: `{ loader: "${this.getProperty('loader')}" }`,
      bindings: {}
    };
  }

  repositionTextNode (evt) {
    $world.env.eventDispatcher.keyInputHelper.setPosition(evt.positionIn($world));
  }

  onHoverIn () {
    if (!this.isLoaded) return;
    if (lively.FreezerRuntime) { $world.env.eventDispatcher.keyInputHelper.domState.textareaNode.removeAttribute('disabled'); }
  }

  onHoverOut (evt) {
    if (evt.state.hover.hoveredOverMorphs.includes(this.view)) return;
    if (lively.FreezerRuntime) { $world.env.eventDispatcher.keyInputHelper.domState.textareaNode.setAttribute('disabled', true); }
  }

  async prepareSystemIfNeeded () {
    if (!System.global.babel) await System.import('esm://cache/@babel/standalone').then(({ default: babel }) => System.global.babel = babel);
    if (System.transpiler !== 'lively.transpiler') {
      await System.import('lively.modules/systemjs-init.js');
      const { module } = await System.import('lively.modules');
      System.trace = false;
      System._fileCheckMap = {}; // populate this in order to populate
      for (const mod in lively.FreezerRuntime.registry) {
        if (!mod.startsWith('lively.')) continue;
        const exports = lively.FreezerRuntime.exportsOf(mod); // for this to work, we need a resurrection build
        System.set(System.baseURL + mod, System.newModule(exports));
        const m = module(System.baseURL + mod);
        m._recorder = exports;
        // denote the exports
        m._frozenModule = true;
        System._fileCheckMap[System.baseURL + mod] = true;
      }
    }
  }

  async loadInteractive () {
    this.view.submorphs = [part(Spinner, { viewModel: { color: 'black' }, fixedWidth: false, fixedHeight: false })];
    await this.prepareSystemIfNeeded();

    let interactive;
    this.view.submorphs = [interactive = await this.loader()];
    this.view.layout.setResizePolicyFor(interactive, { width: 'fill', height: 'fixed' });
    this.view.layout.hugContentsVertically = true;
    this.isLoaded = true;
    if (lively.FreezerRuntime) { $world.env.eventDispatcher.keyInputHelper.domState.textareaNode.removeAttribute('disabled'); }
  }
}

export const InteractiveDelay = component({
  defaultViewModel: InteractiveDelayModel,
  fill: Color.rgb(229, 231, 233),
  extent: pt(430.2,344),
  layout: new TilingLayout({
    reactToSubmorphAnimations: false,
    align: 'center',
    axisAlign: 'center'
  }),
  submorphs: [part(TiktokButton, {
    name: 'start btn',
    position: pt(73.5, 241.9),
    submorphs: [{
      name: 'button label',
      extent: pt(170, 47),
      textAndAttributes: ['Start Demo', null]
    }]
  })]
});

export const ExampleFlap = component({
  borderColor: Color.rgb(215, 215, 215),
  borderRadius: 7,
  borderWidth: 1,
  clipMode: 'hidden',
  extent: pt(141, 52.3),
  fill: new LinearGradient({ stops: [{ offset: 0, color: Color.white }, { offset: 1, color: Color.rgb(225, 225, 225) }], vector: rect(0.49999999999999994, 0, 6.123233995736766e-17, 1) }),
  layout: new TilingLayout({
    align: 'right',
    axisAlign: 'center',
    hugContentsHorizontally: true,
    padding: rect(10, 10, 0, 0),
    spacing: 10
  }),
  position: pt(1501, 1226.5),
  submorphs: [{
    name: 'network-indicator',
    borderRadius: 5,
    extent: pt(5, 5),
    fill: Color.rgb(0, 204, 0),
    position: pt(10, 24),
    reactsToPointer: false
  }, {
    type: Label,
    tooltip: '',
    name: 'left user label',
    draggable: true,
    fontColor: Color.rgb(102, 102, 102),
    fontSize: 16,
    nativeCursor: 'text',
    position: pt(25, 15),
    textAndAttributes: ['justin', null]
  }, {
    type: Label,
    tooltip: 'Logout',
    name: 'right user label',
    fontColor: Color.rgb(102, 102, 102),
    fontSize: 16,
    nativeCursor: 'pointer',
    position: pt(75, 15),
    textAndAttributes: ['', {
      fontFamily: 'Font Awesome',
      fontWeight: '900'
    }]
  }, {
    type: Image,
    name: 'avatar',
    borderRadius: 25,
    clipMode: 'hidden',
    dropShadow: new ShadowObject({ rotation: 72, color: Color.rgba(0, 0, 0, 0.47), blur: 5 }),
    extent: pt(30, 30),
    imageUrl: projectAsset('justin.jpeg'),
    position: pt(101, 11)
  }]
});

const Die = component({
  fill: Color.rgb(255, 0, 0),
  extent: pt(78.5, 78.7),
  borderRadius: 13,
  submorphs: [
    {
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

export const WrappedDie = component({
  extent: pt(490, 304.1),
  borderWidth: 7,
  borderColor: Color.rgb(229, 231, 233),
  layout: new TilingLayout({
    align: 'center',
    axisAlign: 'center'
  }),
  submorphs: [part(Die, {
    name: 'die1',
    position: pt(194.3, 115.4)
  })]
});

const FiveDie = component(Die, {
  submorphs: [add({
    type: Ellipse,
    name: 'eye5',
    extent: pt(15.9, 16.6),
    position: pt(30.3, 29.3)
  })]
});

const ThreeDie = component(Die, {
  submorphs: [
    without('eye2'), {
      name: 'eye1',
      position: pt(30.8, 31)
    }]
});

export const EmeraldDie = component(Die, {
  fill: Color.rgb(56, 142, 60)
});

export const GoldenDie = component(Die, {
  fill: Color.black,
  submorphs: [{
    name: 'eye',
    fill: new LinearGradient({ stops: [{ offset: 0, color: Color.rgb(244, 171, 4) }, { offset: 1, color: Color.rgb(246, 138, 9) }], vector: rect(0.49999999999999994, 0, 6.123233995736766e-17, 1) })
  }, {
    name: 'eye1',
    fill: new LinearGradient({ stops: [{ offset: 0, color: Color.rgb(244, 171, 4) }, { offset: 1, color: Color.rgb(246, 138, 9) }], vector: rect(0.49999999999999994, 0, 6.123233995736766e-17, 1) })
  }, {
    name: 'eye2',
    fill: new LinearGradient({ stops: [{ offset: 0, color: Color.rgb(244, 171, 4) }, { offset: 1, color: Color.rgb(246, 138, 9) }], vector: rect(0.49999999999999994, 0, 6.123233995736766e-17, 1) })
  }, {
    name: 'eye3',
    fill: new LinearGradient({ stops: [{ offset: 0, color: Color.rgb(244, 171, 4) }, { offset: 1, color: Color.rgb(246, 138, 9) }], vector: rect(0.49999999999999994, 0, 6.123233995736766e-17, 1) })
  }]
});

const PokerTable = component({
  extent: pt(475.7, 360.9),
  borderWidth: 21,
  borderColor: Color.rgb(147, 81, 22),
  borderRadius: 37,
  fill: new LinearGradient({ stops: [{ offset: 0, color: Color.rgb(46, 125, 50) }, { offset: 1, color: Color.rgb(27, 94, 32) }], vector: rect(0.49999999999999994, 0, 6.123233995736766e-17, 1) }),
  clipMode: 'hidden',
  submorphs: [part(Die, {
    name: 'die1',
    position: pt(49.8, 49.4)
  }), part(Die, {
    name: 'die2',
    rotation: num.toRadians(77.0),
    position: pt(375.5, 90.1)
  }), part(Die, {
    name: 'die3',
    rotation: num.toRadians(20.0),
    position: pt(180.3, 211.7)
  })]
});

export const WrappedPokerTable = component({
  extent: pt(482.1, 453.8),
  borderWidth: 7,
  borderColor: Color.rgb(229, 231, 233),
  layout: new TilingLayout({
    align: 'center',
    axisAlign: 'center'
  }),
  submorphs: [part(PokerTable, {
    name: 'poker table1'
  })]
});

const PokerTableLarge = component(PokerTable, {
  layout: new TilingLayout({
    align: 'center',
    axisAlign: 'center',
    justifySubmorphs: 'spaced',
    padding: rect(46, 46, 0, 0)
  })
});
const PokerTableMedium = component(PokerTable, {
  layout: new TilingLayout({
    align: 'center',
    axisAlign: 'center',
    justifySubmorphs: 'spaced',
    padding: rect(46, 46, 0, 0)
  }),
  submorphs: [{
    name: 'die2',
    visible: false
  }]
});
const PokerTableSmall = component(PokerTable, {
  layout: new TilingLayout({
    align: 'center',
    axisAlign: 'center',
    justifySubmorphs: 'spaced',
    padding: rect(46, 46, 0, 0)
  }),
  submorphs: [{
    name: 'die2',
    visible: false
  }, {
    name: 'die3',
    visible: false
  }]
});

const ResponsivePokerTable = component(PokerTable, {
  extent: pt(680.3, 316.9),
  master: {
    auto: PokerTableSmall,
    breakpoints: [
      [pt(300, 0), PokerTableMedium],
      [pt(600, 0), PokerTableLarge]
    ]
  }
});

const DiversePokerTable = component(PokerTable, {
  submorphs: [{
    name: 'die2',
    master: GoldenDie
  }, {
    name: 'die3',
    master: EmeraldDie
  }]
});

export const WrappedDiversePokerTable = component({
  extent: pt(490, 465.7),
  borderWidth: 7,
  borderColor: Color.rgb(229, 231, 233),
  layout: new TilingLayout({
    align: 'center',
    axisAlign: 'center'
  }),
  submorphs: [part(DiversePokerTable, {
    name: 'diverse poker table1'
  })]
});

export const InteractiveDie = component({
  fill: Color.white,
  extent: pt(590.7, 304.9),
  layout: new ConstraintLayout({
    reactToSubmorphAnimations: false,
    submorphSettings: [['movable die 1', {
      x: 'center',
      y: 'center'
    }]]
  }),
  borderWidth: 7,
  borderColor: Color.rgb(229, 231, 233),
  clipMode: 'hidden',
  submorphs: [
    {
      name: 'movable die 1',
      position: pt(248.8, 111.4),
      extent: pt(78.5, 78.7),
      borderRadius: 13,
      fill: Color.rgb(255, 0, 0),
      submorphs: [{
        type: 'ellipse',
        name: 'eye',
        extent: pt(15.9, 16.6),
        position: pt(30.6, 31.5)
      }]
    }
  ]
});

export const FocusBlurDiagram = component({
  fill: Color.rgb(229, 231, 233),
  extent: pt(567.5, 353.3),
  layout: new TilingLayout({
    padding: rect(10, 10, 0, 0),
    resizePolicies: [['diagram', {
      height: 'fill',
      width: 'fill'
    }]]
  }),
  submorphs: [{
    name: 'diagram',
    extent: pt(523.2, 348.7),
    position: pt(12.2, 11.5),
    submorphs: [{
      name: 'alice',
      dropShadow: new ShadowObject({ distance: 7.071067811865476, rotation: 44.99999999999999, color: Color.rgba(0, 0, 0, 0.5), blur: 30 }),
      fill: Color.rgb(229, 57, 53),
      extent: pt(111.6, 88.8),
      position: pt(111.1, 60.9)
    }, {
      name: 'bob',
      dropShadow: new ShadowObject({ distance: 7.071067811865476, rotation: 44.99999999999999, color: Color.rgba(0, 0, 0, 0.5), blur: 30 }),
      extent: pt(111.6, 88.8),
      fill: Color.rgb(33, 150, 243),
      position: pt(303.2, 178.6)
    }, {
      type: Path,
      name: 'event 1',
      endMarker: { tagName: 'marker', id: 'end-marker', viewBox: '0 0 10 10', refX: '5', refY: '5', markerWidth: '5', markerHeight: '5', orient: 'auto', children: [{ tagName: 'path', d: 'M0,0 L10,5 L0,10 z' }] },
      borderColor: Color.rgb(67, 67, 67),
      borderStyle: 'dotted',
      borderWidth: 2,
      draggable: true,
      extent: pt(101, 24.6),
      fill: Color.rgba(255, 255, 255, 0),
      position: pt(2.1, 106.1),
      vertices: [({ position: pt(0.0000, 27.4961), isSmooth: true, controlPoints: { next: pt(39.0664, 5.2227), previous: pt(0.0000, 0.0000) } }), ({ position: pt(121.8633, 0.0000), isSmooth: true, controlPoints: { next: pt(1.4053, 0.1586), previous: pt(-57.9805, -6.5430) } })]
    }, {
      type: Path,
      name: 'event 2',
      endMarker: { tagName: 'marker', id: 'end-marker', viewBox: '0 0 10 10', refX: '5', refY: '5', markerWidth: '5', markerHeight: '5', orient: 'auto', children: [{ tagName: 'path', d: 'M0,0 L10,5 L0,10 z' }] },
      borderColor: Color.rgb(67, 67, 67),
      borderStyle: 'dotted',
      borderWidth: 2,
      extent: pt(96.7, 54.9),
      fill: Color.rgba(255, 255, 255, 0),
      position: pt(229.7, 118),
      vertices: [({ position: pt(0.0000, 0.0000), isSmooth: true, controlPoints: { next: pt(35.0389, 4.6726), previous: pt(0.0000, 0.0000) } }), ({ position: pt(96.7453, 57.4937), isSmooth: true, controlPoints: { next: pt(-0.1858, 1.2547), previous: pt(6.9696, -47.0647) } })]
    }, {
      type: Text,
      name: 'focus call 1',
      fixedWidth: true,
      textAlign: 'right',
      extent: pt(81, 42),
      fontSize: 15,
      dynamicCursorColoring: true,
      fill: Color.rgba(255, 255, 255, 0),
      fontFamily: '\"IBM Plex Mono\"',
      position: pt(26.4, 58.8),
      textAndAttributes: ['focus()\nonFocus()', null]
    }, {
      type: Text,
      name: 'focus call 2',
      extent: pt(81, 42),
      dynamicCursorColoring: true,
      fill: Color.rgba(255, 255, 255, 0),
      fontFamily: '\"IBM Plex Mono\"',
      fontSize: 15,
      position: pt(336.9, 134.8),
      textAndAttributes: ['focus()\nonFocus()', null]
    }, {
      type: Text,
      name: 'blur call',
      dynamicCursorColoring: true,
      fill: Color.rgba(255, 255, 255, 0),
      fontFamily: '\"IBM Plex Mono\"',
      fontSize: 15,
      position: pt(229.6, 89.5),
      textAndAttributes: ['onBlur()', null]
    }]
  }]
});

export const Shortcut = component({
  type: Ellipse,
  nativeCursor: 'pointer',
  clipMode: 'hidden',
  dropShadow: new ShadowObject({ color: Color.rgba(0, 0, 0, 0.84), blur: 44 }),
  extent: pt(93, 90.8),
  fill: new RadialGradient({ stops: [{ offset: 0, color: Color.rgb(255, 224, 178) }, { offset: 1, color: Color.rgb(255, 145, 0) }], bounds: rect(0, 0, 96.45703125, 136.69240622312338), focus: pt(0.2956, 0.2772) }),
  layout: new TilingLayout({
    align: 'center',
    axisAlign: 'center'
  }),
  position: pt(1354.9, 113.2),
  submorphs: [{
    type: Text,
    name: 'number holder',
    nativeCursor: 'pointer',
    dropShadow: new ShadowObject({ distance: 0, rotation: 0, color: Color.rgba(112, 48, 0, 0.95), blur: 20, fast: false }),
    dynamicCursorColoring: true,
    fill: Color.rgba(255, 255, 255, 0),
    fontColor: Color.rgb(255, 255, 255),
    fontFamily: 'Roboto',
    fontSize: 65,
    fontWeight: '900',
    padding: rect(0, 0, 0, 6),
    position: pt(28, -3),
    textAndAttributes: ['1', null]
  }]
});

export const StudioOverview = component({
  type: 'image',
  imageUrl: projectAsset('lively-desktop.png'),
  extent: pt(1057.9, 587.8),
  submorphs: [part(Shortcut, {
    name: 'top bar shortcut',
    position: pt(496.1, 7.1)
  }), part(Shortcut, {
    name: 'prop panel shortcut',
    position: pt(946.9, 241.6),
    submorphs: [{
      name: 'number holder',
      textAndAttributes: ['2', null]
    }]
  }), part(Shortcut, {
    name: 'world zoom shortcut',
    position: pt(812.4, 469.2),
    submorphs: [{
      name: 'number holder',
      extent: pt(38, 97),
      textAndAttributes: ['3', null]

    }]
  }), part(Shortcut, {
    name: 'version viewer shortcut',
    position: pt(207.8, 489.2),
    submorphs: [{
      name: 'number holder',
      textAndAttributes: ['4', null]
    }]
  }), part(Shortcut, {
    name: 'scene graph shortcut',
    position: pt(19.3, 217.8),
    submorphs: [{
      name: 'number holder',
      textAndAttributes: ['5', null]
    }]
  })]
});
