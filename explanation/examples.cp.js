import { component, ShadowObject, config, ViewModel, ConstraintLayout, without, add, part, TilingLayout, Ellipse } from 'lively.morphic';
import { Color, RadialGradient, rect, LinearGradient, pt } from 'lively.graphics';
import { num } from 'lively.lang';
import { SystemButton } from 'lively.components/buttons.cp.js';
import { ColorPicker } from 'lively.ide/styling/color-picker.cp.js';
import { signal } from 'lively.bindings';
import module from 'lively.modules/src/module.js';
import JavaScriptEditorPlugin from 'lively.ide/js/editor-plugin.js';
import { createFiles } from 'lively.resources';
import { Path } from 'lively.morphic/morph.js';
import { Text } from 'lively.morphic/text/morph.js';
import { UserFlap } from 'lively.user/user-flap.cp.js';
import { projectAsset } from 'lively.project/helpers.js';

export const ExampleFlap = component(UserFlap, {
  defaultViewModel: null,
  borderColor: Color.rgb(215, 215, 215),
  borderWidth: 1,
  borderWidth: 1,
  extent: pt(141, 52.3),
  fill: new LinearGradient({ stops: [{ offset: 0, color: Color.white }, { offset: 1, color: Color.rgb(225, 225, 225) }], vector: rect(0.49999999999999994, 0, 6.123233995736766e-17, 1) }),
  position: pt(45.7, 494.3),
  submorphs: [{
    tooltip: '',
    name: 'left user label',
    nativeCursor: 'text',
    textAndAttributes: ['justin', null]
  }, {
    tooltip: 'Logout',
    name: 'right user label',
    nativeCursor: 'pointer',
    textAndAttributes: ['', {
      fontFamily: 'Font Awesome',
      fontWeight: '900'
    }]
  }, {
    name: 'avatar',
    extent: pt(30, 30),
    imageUrl: projectAsset('justin.jpeg')
  }, {
    name: 'spinner',
    html: '<div class=\"spinner black-spinner\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'
  }, {
    name: 'login button',
    extent: pt(230, 40),
    nativeCursor: 'pointer'
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

class CodeEditorModel extends ViewModel {
  static get properties () {
    return {
      initCode: { defaultValue: '' },
      targetModule: { defaultValue: null },
      knownGlobals: { defaultValue: [] },
      expose: { get () { return ['targetModule', 'runEval']; } },
      bindings: {
        get () {
          return [{
            target: 'eval button', signal: 'fire', handler: 'runEval'
          }];
        }
      }
    };
  }

  async runEval () {
    await this.ui.editor.editorPlugin.runEval(this.ui.editor.textString);
    signal(this, 'runEval');
  }

  async refreshEditor () {
    const ed = this.ui.editor;
    const targetModule = this.targetModule || 'lively://lively.next-workspace/' + ed.id + '.cp.js';
    ed.editorPlugin.evalEnvironment = {
      knownGlobals: this.knownGlobals,
      targetModule,
      context: ed,
      format: 'esm'
    };
    if (this.initCode) {
      await this.ui.editor.editorPlugin.runEval(this.initCode);
    } else ed.textString = await module(System, targetModule).source();
    setTimeout(() => ed.editorPlugin.highlight());
  }

  onRefresh (change) {
    if (change === 'targetModule') this.refreshEditor();
  }

  async viewDidLoad () {
    this.ui.editor.plugins = [new JavaScriptEditorPlugin()];
    this.refreshEditor();
  }
}

export const CodeEditor = component({
  defaultViewModel: CodeEditorModel,
  extent: pt(438.6, 270.6),
  layout: new TilingLayout({
    axis: 'column',
    axisAlign: 'right',
    padding: rect(7, 7, 0, 0),
    resizePolicies: [['editor', {
      height: 'fill',
      width: 'fill'
    }]],
    spacing: 7
  }),
  fill: Color.rgb(229, 231, 233),
  submorphs: [{
    type: 'text',
    name: 'editor',
    fixedWidth: true,
    fixedHeight: true,
    readOnly: false,
    lineWrapping: 'by-chars',
    fill: Color.white,
    ...config.codeEditor.defaultStyle
  }, part(SystemButton, {
    name: 'eval button',
    extent: pt(91.3, 25),
    nativeCursor: 'pointer',
    submorphs: [{
      name: 'label',
      extent: pt(76, 20),
      textAndAttributes: ['run code ', null, '', {
        fontFamily: 'Font Awesome',
        fontWeight: '900'
      }, ' ', {}]

    }]
  })]
});

export const EditorSample1 = component(CodeEditor, {
  viewModel: {
    initCode: 'let aMorph = $world.get(\'movable die 1\'); import { Color, pt } from "lively.graphics";',
    knownGlobals: ['aMorph', 'Color']
  },
  submorphs: [{
    name: 'editor',
    textString: 'aMorph.show()'
  }]
});

const demoDir = 'local://component-reconciliation-demo/';
let testResources = {
  die: {
    'demo.cp.js': `
import { component } from 'lively.morphic';
import { pt, Color} from 'lively.graphics';
  
export const Die = component({
    extent: pt(78.5, 78.7),
    borderRadius: 13,
    fill: Color.rgb(255, 0, 0),
    submorphs: [{
      type: 'ellipse',
      name: 'eye',
      extent: pt(15.9, 16.6),
      position: pt(30.6, 31.5)
    }]
  })
  `,
    'package.json': '{"name": "die", "main": "demo.cp.js"}'
  }
};

class ReconciliationSampleModel extends ViewModel {
  static get properties () {
    return {
      bindings: {
        get () {
          return [{
            target: 'color picker', signal: 'value', handler: 'updateColor'
          }, {
            target: 'code editor recon', signal: 'runEval', handler: 'updateTarget'
          }];
        }
      }
    };
  }

  updateColor (newColor) {
    const [die] = this.ui.hFloater.submorphs;
    die.withMetaDo({ reconcileChanges: true }, () => {
      die.fill = newColor;
    });
  }

  updateTarget () {
    const [EditableComponent] = this.ui.hFloater.submorphs;
    this.ui.colorPicker.focusOnMorph(EditableComponent, EditableComponent.fill);
  }

  async prepareEnv () {
    let Die;
    const modId = demoDir + 'die/demo.cp.js';
    await createFiles(demoDir, testResources);
    const mod = module(System, modId);
    ({ Die } = await mod.load());
    this.ui.codeEditorRecon.targetModule = modId;
    Die.previouslyRemovedMorphs = new WeakMap();
    const EditableComponent = await Die.edit();
    this.ui.hFloater.submorphs = [EditableComponent];
    // somehow connect the change tracker to the editor so it reconciles correctly
    // FIXME: also implement a backwards propagation mechanism for the color picker
    this.updateTarget();
  }

  viewDidLoad () {
    this.prepareEnv();
  }
}

// the reconciliation needs to be setup within the viewModel
export const ReconciliationSample = component({
  defaultViewModel: ReconciliationSampleModel,
  fill: Color.rgb(229, 231, 233),
  extent: pt(679.4, 933.1),
  layout: new TilingLayout({
    axis: 'column',
    padding: rect(10, 10, 0, 0),
    resizePolicies: [['h floater', {
      height: 'fixed',
      width: 'fill'
    }], ['b floater', {
      height: 'fill',
      width: 'fill'
    }]],
    spacing: 10
  }),
  submorphs: [{
    name: 'h floater',
    layout: new TilingLayout({
      align: 'center',
      axisAlign: 'center'
    }),
    height: 117.68359375,
    position: pt(86.1, 72.1),
    submorphs: [{
      name: 'reconcilable die',
      borderRadius: 13,
      extent: pt(78.5, 78.7),
      fill: Color.rgb(255, 0, 0),
      position: pt(175.8, 15),
      submorphs: [{
        type: Ellipse,
        name: 'eye',
        extent: pt(15.9, 16.6),
        position: pt(30.6, 31.5)
      }]
    }]
  }, {
    name: 'b floater',
    layout: new TilingLayout({
      align: 'center',
      axisAlign: 'center',
      padding: rect(0, 0, 10, 0),
      resizePolicies: [['code editor recon', {
        height: 'fill',
        width: 'fill'
      }]],
      spacing: 10
    }),
    fill: Color.rgba(255, 255, 255, 0),
    extent: pt(397.7, 128.9),
    position: pt(48, 193.1),
    submorphs: [
      part(CodeEditor, {
        name: 'code editor recon',
        viewModel: { initCode: null },
        submorphs: [{
          name: 'eval button',
          extent: pt(117.6, 25),
          submorphs: [{
            name: 'label',
            extent: pt(99, 20),
            textAndAttributes: ['save module', null, ' ', {
              fontColor: Color.rgb(0, 200, 83)
            }, '', {
              fontColor: Color.rgb(0, 200, 83),
              fontFamily: 'Font Awesome',
              fontWeight: '900'
            }, ' ', {}]

          }]
        }]
      }),
      part(ColorPicker, { viewModel: { embedded: true }, name: 'color picker' })
    ]
  }]
});

const FocusBlurDiagram = component({
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
