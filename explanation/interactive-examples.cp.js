import { ViewModel, Ellipse, part, config, TilingLayout, component } from 'lively.morphic';
import { pt, Color, rect } from 'lively.graphics';
import { SystemButton } from 'lively.components/buttons.cp.js';
import { ColorPicker } from 'lively.ide/styling/color-picker.cp.js';
import { signal } from 'lively.bindings';
import module from 'lively.modules/src/module.js';
import JavaScriptEditorPlugin from 'lively.ide/js/editor-plugin.js';
import { createFiles } from 'lively.resources';
import { obj } from 'lively.lang';

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
    const { InteractiveComponentDescriptor } = await System.import('lively.ide/components/editor.js');
    obj.adoptObject(Die, InteractiveComponentDescriptor);
    component.DescriptorClass = InteractiveComponentDescriptor;
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
