import { component, ViewModel, Image, Label, ShadowObject, ConstraintLayout, without, add, part, replace, TilingLayout, Ellipse } from 'lively.morphic';
import { Color, RadialGradient, rect, LinearGradient, pt } from 'lively.graphics';
import { num, promise } from 'lively.lang';
import { Path } from 'lively.morphic/morph.js';
import { Text } from 'lively.morphic/text/morph.js';
import { projectAsset } from 'lively.project/helpers.js';
import { TiktokButton } from '../ui/pages/landing-page.cp.js';
import { Spinner } from 'lively.components/loading-indicator.cp.js';

export class InteractiveDelayModel extends ViewModel {
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
    if (!System.global.babel) await System.import('esm://cache/@babel/standalone@7.18.3').then(({ default: babel }) => System.global.babel = babel);
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
  extent: pt(430.2, 344),
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

class ThrowableDieModel extends ViewModel {
  static get properties () {
    return {
      faceValue: { defaultValue: 1 }
    };
  }

  get bindings () {
    return [
      {
        signal: 'onMouseDown', handler: 'throw'
      }
    ];
  }

  get expose () {
    return ['faceValue'];
  }

  viewDidLoad () {
    this.showFace(1); // default to face 1
  }

  showFace (face) {
    this.view.master.setState(face);
    this.faceValue = face;
  }

  async throw () {
    // we access the morph from the viewmodel via the view property
    this.view.animate({ rotation: 16 * Math.PI, duration: 2000 }).then(() => {
      this.view.rotation = 0;
    });
    await promise.delay(1000);
    this.showFace(num.random(1, 6));
  }
}

const UniversalDie = component({
  origin: pt(38.5, 37.1),
  fill: Color.rgb(255, 0, 0),
  extent: pt(78.5, 78.7),
  borderRadius: 13,
  nativeCursor: 'grab',
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
  dropShadow: null,
  dropShadow: null,
  reactsToPointer: true,
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

const ThrowableDie = component(Die1, {
  defaultViewModel: ThrowableDieModel,
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

export const AllFaces = component({
  extent: pt(725.1, 337.8),
  borderWidth: 7,
  borderColor: Color.rgb(229, 231, 233),
  layout: new TilingLayout({
    align: 'center',
    axisAlign: 'center',
    padding: rect(10, 10, 0, 0),
    spacing: 23,
    wrapSubmorphs: true
  }),
  // the wrapping below is due to a layout margin rendering bug that is not yet fixed
  submorphs: [
    {
      fill: Color.transparent,
      submorphs: [part(Die1, {
        name: 'die1'
      })]
    }, {
      fill: Color.transparent,
      submorphs: [part(Die2, {
        name: 'die2'
      })]
    }, {
      fill: Color.transparent,
      submorphs: [part(Die3, {
        name: 'die3'
      })]
    }, {
      fill: Color.transparent,
      submorphs: [part(Die4, {
        name: 'die4'
      })]
    }, {
      fill: Color.transparent,
      submorphs: [part(Die5, {
        name: 'die5'
      })]
    }, {
      fill: Color.transparent,
      submorphs: [part(Die6, {
        name: 'die6'
      })]
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

export const WrappedThrowableDie = component({
  extent: pt(490, 304.1),
  borderWidth: 7,
  borderColor: Color.rgb(229, 231, 233),
  layout: new TilingLayout({
    align: 'center',
    axisAlign: 'center'
  }),
  submorphs: [{
    name: 'wrapper',
    extent: pt(205.8, 100.2),
    submorphs: [part(ThrowableDie, {
      name: 'die1',
      position: pt(102, 49.6)
    })]
  }]
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

const DynamicPokerTable = component(PokerTable, {
  defaultViewModel: DynamicPokerTableModel,
  submorphs: [
    replace('die1', part(ThrowableDie, {
      name: 'die1',
      position: pt(72.4, 96.9)
    })),
    replace('die2', part(ThrowableDie, {
      name: 'die2',
      rotation: num.toRadians(77.0),
      position: pt(398.1, 137.6)
    })),
    replace('die3', part(ThrowableDie, {
      name: 'die3',
      rotation: num.toRadians(20.0),
      position: pt(202.9, 259.2)
    })), add({
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

export const WrappedDynamicPokerTable = component({
  extent: pt(482.1, 453.8),
  borderWidth: 7,
  borderColor: Color.rgb(229, 231, 233),
  layout: new TilingLayout({
    align: 'center',
    axisAlign: 'center'
  }),
  submorphs: [part(DynamicPokerTable, {
    name: 'poker table'
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
