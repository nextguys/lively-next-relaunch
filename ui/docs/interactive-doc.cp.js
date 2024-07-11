import { component, config, ConstraintLayout, TilingLayout, ShadowObject, add, ViewModel } from 'lively.morphic/index.js';
import { pt, rect } from 'lively.graphics/geometry-2d.js';
import { Color } from 'lively.graphics/color.js';
import { Text } from 'lively.morphic/text/morph.js';
import { num } from 'lively.lang';
import { Polygon, Ellipse } from 'lively.morphic/morph.js';
import JavaScriptEditorPlugin from 'lively.ide/js/editor-plugin.js';
import { SystemButton } from 'lively.components/buttons.cp.js';
import { ColorPicker } from 'lively.ide/styling/color-picker.cp.js';
import { createFiles } from 'lively.resources';
import module from 'lively.modules/src/module.js';
import { signal } from 'lively.bindings';

import { part } from 'lively.morphic/components/core.js';
import { SearchField } from 'lively.components/inputs.cp.js';

class PropertyVisualizerModel extends ViewModel {
  static get properties () {
    return {
      expose: { get () { return ['animateProperty']; } },
      bindings: {
        get () {
          return [
            { signal: 'onHoverIn', handler: 'startAnimating' },
            { signal: 'onHoverOut', handler: 'stopAnimating' }
          ];
        }
      }
    };
  }

  reset () { /* revert dummy to original state */ }

  animateProperty () {}

  startAnimating () {
    this.animateProperty();
    // FIXME: that have have to round trip to the view here, is a little strange?
    this.view.startStepping(1200, 'animateProperty');
  }

  stopAnimating () {
    this.view.stopStepping();
    this.reset();
  }
}

class BorderColorVisualizerModel extends PropertyVisualizerModel {
  static get properties () {
    return {
      colorSet: {
        get () { return ['#ffc900', '#33cd5f', '#886aea', '#387ef5', '#ef473a']; }
      }
    };
  }

  reset () {
    this.ui.dummy.borderColor = this.ui.dummyPoly.borderColor = Color.rgbHex(this.colorSet[0]);
  }

  animateProperty () {
    const borderColor = this.getNextColor();
    this.ui.dummy.animate({
      borderColor
    });
    this.ui.dummyPoly.animate({
      borderColor
    });
  }

  getNextColor () {
    return Color.rgbHex(this.colorSet[num.random(0, this.colorSet.length - 1)]);
  }
}

class BorderRadiusVisualizerModel extends PropertyVisualizerModel {
  animateProperty () {
    this.ui.dummy.animate({
      borderRadius: this.ui.dummy.borderRadius == 1 ? 15 : 1
    });
  }

  reset () { this.ui.dummy.borderRadius = 0; }
}

class BorderWidthVisualizerModel extends PropertyVisualizerModel {
  animateProperty () {
    const { dummy, dummyPoly } = this.ui;
    dummy.animate({
      borderWidth: dummy.borderWidth == 1 ? 10 : 1
    });
    dummyPoly.animate({
      borderWidth: dummyPoly.borderWidth == 1 ? 10 : 1
    });
  }
}

class BorderStyleVisualizerModel extends PropertyVisualizerModel {
  static get properties () {
    return {
      styleIdx: { defaultValue: 0 },
      styleSet: {
        defaultValue: ['none', 'solid', 'dotted', 'dashed']
      }
    };
  }

  animateProperty () {
    this.ui.dummy.animate({
      borderStyle: this.getNextStyle()
    });
  }

  getNextStyle () {
    return this.styleSet[this.styleIdx++ % 4];
  }
}

class DropShadowVisualizerModel extends PropertyVisualizerModel {
  animateProperty () {
    this.ui.dummy.animate({
      dropShadow: !this.ui.dummy.dropShadow ? new ShadowObject({ distance: 5 }) : null
    });
    this.ui.shapedDummy.animate({
      dropShadow: !this.ui.shapedDummy.dropShadow ? new ShadowObject({ distance: 5, fast: false }) : null
    });
  }
}

const PropertyVisualizer = component({
  borderColor: Color.rgb(189, 195, 199),
  borderStyle: 'dashed',
  extent: pt(253.7, 130),
  fill: Color.rgb(253, 254, 254),
  submorphs: [{
    type: Text,
    name: 'property name',
    fontFamily: '"Bree Serif"',
    extent: pt(137.3, 34),
    fontColor: Color.rgb(121, 125, 127),
    fontSize: 16,
    lineHeight: 1.5,
    lineWrapping: true,
    position: pt(14.5, 8.5),
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
    textAndAttributes: ['propertyName', null]
  }]
});

const BorderRadiusVisualizer = component(PropertyVisualizer, {
  defaultViewModel: BorderRadiusVisualizerModel,
  submorphs: [{
    name: 'property name',
    textAndAttributes: ['borderRadius', null]
  }, add({
    name: 'dummy',
    borderRadius: 1,
    extent: pt(59.3, 53),
    fill: Color.rgb(52, 152, 219),
    position: pt(173.7, 56)
  })]
});

const BorderColorVisualizer = component(PropertyVisualizer, {
  defaultViewModel: BorderColorVisualizerModel,
  position: pt(823.6, 735.3),
  submorphs: [{
    name: 'property name',
    extent: pt(113, 30),
    textAndAttributes: ['borderColor', null]
  }, add({
    type: Polygon,
    name: 'dummy poly',
    borderColor: Color.rgb(64, 196, 255),
    borderWidth: 5,
    extent: pt(59.9, 55.4),
    fill: Color.rgb(52, 152, 219),
    position: pt(98.2, 52.7),
    rotation: 2.449293598294707e-16,
    vertices: [({ position: pt(46.0394, 27.6816), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(59.918, 44.7898), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(37.1136, 38.4775), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(22.8866, 55.3633), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(22.6713, 34.3538), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(0, 27.6816), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(22.6713, 21.0094), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(22.8866, 0), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(37.1136, 16.8858), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(59.918, 10.5734), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(46.0394, 27.6816), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } })]
  }), add({
    name: 'dummy',
    borderColor: Color.rgb(64, 196, 255),
    borderWidth: 4,
    extent: pt(59.3, 53),
    fill: Color.rgb(52, 152, 219),
    position: pt(188.5, 53.2)
  })]
});

const BorderWidthVisualizer = component(BorderColorVisualizer, {
  defaultViewModel: BorderWidthVisualizerModel,
  position: pt(844.1, 655.7),
  submorphs: [{
    name: 'property name',
    extent: pt(120, 30),
    textAndAttributes: ['borderWidth', null]
  }, {
    name: 'dummy poly',
    borderColor: Color.rgb(179, 229, 252)
  }, {
    name: 'dummy',
    borderColor: Color.rgb(179, 229, 252)
  }]
});

const BorderStyleVisualizer = component(BorderRadiusVisualizer, {
  defaultViewModel: BorderStyleVisualizerModel,
  position: pt(852.5, 673.3),
  submorphs: [{
    name: 'property name',
    extent: pt(111, 30),
    textAndAttributes: ['borderStyle', null]
  }, {
    name: 'dummy',
    extent: pt(70.3, 62.8),
    position: pt(156.4, 46.1),
    borderColor: Color.rgb(179, 229, 252),
    borderWidth: 5
  }]
});

const DropShadowVisualizer = component(BorderRadiusVisualizer, {
  defaultViewModel: DropShadowVisualizerModel,
  position: pt(925.2, 742.1),
  submorphs: [{
    name: 'property name',
    textAndAttributes: ['dropShadow', null]
  }, add({
    type: Text,
    name: 'shaped dummy',
    fontColor: Color.rgb(51, 152, 219),
    fontSize: 46,
    dynamicCursorColoring: true,
    fill: Color.rgba(255, 255, 255, 0),
    position: pt(95, 47.8),
    textAndAttributes: ['', {
      fontFamily: '"Font Awesome 6 Free", "Font Awesome 6 Brands"',
      fontWeight: '900'
    }]
  })]
});

class ExtentVisualizerModel extends PropertyVisualizerModel {
  reset () { this.ui.dummy.extent = pt(100, 100); }

  animateProperty () {
    this.ui.dummy.animate({
      extent: this.ui.dummy.width == 100 ? pt(40, 20) : pt(100, 100)
    });
  }
}

const ExtentVisualizer = component(BorderRadiusVisualizer, {
  defaultViewModel: ExtentVisualizerModel,
  submorphs: [{
    name: 'property name',
    textAndAttributes: ['extent', null]
  }, {
    name: 'dummy',
    extent: pt(100, 100),
    position: pt(138, 16.3)
  }]
});

class FillVisualizerModel extends BorderColorVisualizerModel {
  reset () {
    this.ui.dummy.fill = Color.rgbHex(this.colorSet[0]);
  }

  animateProperty () {
    const fill = this.getNextColor();
    this.ui.dummy.animate({
      fill
    });
    this.ui.dummyPoly.animate({
      fill
    });
  }
}

const FillVisualizer = component(BorderColorVisualizer, {
  defaultViewModel: FillVisualizerModel,
  submorphs: [{
    name: 'property name',
    textAndAttributes: ['fill', null]
  }, {
    name: 'dummy poly',
    borderWidth: 0,
    borderColor: Color.white
  }, {
    name: 'dummy',
    borderWidth: 0,
    borderColor: Color.white
  }]
});

class RotationVisualizerModel extends PropertyVisualizerModel {
  animateProperty () {
    this.ui.dummy.animate({
      rotation: this.ui.dummy.rotation == 0 ? Math.PI * 2.5 : 0
    });
  }
}

const RotationVisualizer = component(BorderRadiusVisualizer, {
  defaultViewModel: RotationVisualizerModel,
  submorphs: [{
    name: 'property name',
    textAndAttributes: ['rotation', null]
  }, {
    name: 'dummy',
    position: pt(194, 80.3),
    origin: pt(29.1, 26)
  }]
});

class OriginVisualizerModel extends PropertyVisualizerModel {
  reset () { this.ui.dummy.origin = pt(0); }

  animateProperty () {
    const { dummy } = this.ui;
    const startOrigin = dummy.origin;
    const targetOrigin = dummy.origin.equals(pt(20, 20)) ? pt(0) : pt(20, 20);
    dummy.animate({
      // due to a bug in the renderer this is the only way to produce the
      // animation without chopping
      customTween: (p) => dummy.origin = startOrigin.interpolate(p, targetOrigin)
    });
  }
}

const OriginVisualizer = component(BorderRadiusVisualizer, {
  defaultViewModel: OriginVisualizerModel,
  submorphs: [{
    name: 'property name',
    extent: pt(54, 30),
    textAndAttributes: ['origin', null]
  }, {
    name: 'dummy',
    rotation: -0.3839724354387525,
    submorphs: [add({
      name: 'sub dummy b',
      extent: pt(28.8, 25.7),
      fill: Color.rgb(125, 206, 160),
      position: pt(24, 14.1)
    }), add({
      name: 'sub dummy a',
      extent: pt(28.8, 25.7),
      fill: Color.rgb(248, 196, 113),
      position: pt(11.6, 20.1)
    })]
  }]
});

class PositionVisualizerModel extends PropertyVisualizerModel {
  reset () { this.ui.dummy.left = 175; }

  animateProperty () {
    this.ui.dummy.animate({
      left: this.ui.dummy.left == 175 ? 50 : 175
    });
  }
}

class ScrollVisualizerModel extends PropertyVisualizerModel {
  reset () {
    this.ui.dummy.scroll = pt(0, 0);
  }

  animateProperty () {
    const { dummy } = this.ui;
    dummy.animate({
      scroll: dummy.scroll.equals(pt(0, 0)) ? pt(0, 30) : pt(0)
    });
  }
}

const ScrollVisualizer = component(OriginVisualizer, {
  defaultViewModel: ScrollVisualizerModel,
  submorphs: [{
    name: 'property name',
    textAndAttributes: ['scroll', null]
  }, {
    name: 'dummy',
    clipMode: 'scroll',
    position: pt(163.9, 56.9),
    rotation: num.toRadians(0.3),
    submorphs: [{
      name: 'sub dummy b',
      position: pt(20.1, 39.4)
    }, {
      name: 'sub dummy a',
      position: pt(7.7, 45.4)
    }]
  }]
});

class ScaleVisualizerModel extends PropertyVisualizerModel {
  reset () { this.ui.dummy.scale = 1; }

  animateProperty () {
    const { dummy } = this.ui;
    dummy.animate({
      scale: dummy.scale == 1 ? 2 : 1
    });
  }
}

const ScaleVisualizer = component(ScrollVisualizer, {
  defaultViewModel: ScaleVisualizerModel,
  submorphs: [{
    name: 'property name',
    textAndAttributes: ['scale', null]
  }, {
    name: 'dummy',
    position: pt(209.2, 92.9),
    origin: pt(45.5, 40.2),
    clipMode: 'visible',
    submorphs: [{
      name: 'sub dummy b',
      position: pt(-24.5, -21.5)
    }, {
      name: 'sub dummy a',
      position: pt(-37, -16.7)
    }]
  }]
});

class VisibilityVisualizerModel extends PropertyVisualizerModel {
  reset () {
    this.ui.dummy.opacity = 1;
    this.ui.dummy.isLayoutable = true;
  }

  animateProperty () {
    const { dummy } = this.ui;
    this.view.withAnimationDo(() => {
      dummy.opacity = dummy.opacity == 0 ? 1 : 0;
      dummy.isLayoutable = !dummy.isLayoutable;
      this.ui.dummyContainer.applyLayoutIfNeeded();
    });
  }
}

const VisibilityVisualizer = component(PropertyVisualizer, {
  defaultViewModel: VisibilityVisualizerModel,
  submorphs: [{
    name: 'property name',
    textAndAttributes: ['visible', null]
  }, add({
    name: 'dummy container',
    extent: pt(156.8, 60.1),
    fill: Color.rgb(248, 196, 113),
    layout: new TilingLayout({
      axisAlign: 'center',
      orderByIndex: true,
      padding: rect(9, 0, -9, 0),
      reactToSubmorphAnimations: true,
      renderViaCSS: false,
      spacing: 11
    }),
    position: pt(81.2, 55.1),
    submorphs: [{
      name: 'dummy',
      extent: pt(50.6, 45.2),
      fill: Color.rgb(52, 152, 219)
    }, {
      name: 'other dummy',
      extent: pt(28.8, 25.7),
      fill: Color.rgb(125, 206, 160)
    }]
  })]
});

const VerticesVisualizerStar = component(PropertyVisualizer, {
  submorphs: [{
    name: 'property name',
    textAndAttributes: ['vertices', null]
  }, add({
    type: Polygon,
    name: 'dummy',
    borderColor: Color.red,
    extent: pt(80.3, 74.3),
    fill: Color.rgb(52, 152, 219),
    position: pt(143.5, 30.2),
    rotation: 2.449293598294707e-16,
    vertices: [({ position: pt(46.0394, 27.6816), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(59.918, 44.7898), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(37.1136, 38.4775), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(22.8866, 55.3633), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(22.6713, 34.3538), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(0, 27.6816), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(22.6713, 21.0094), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(22.8866, 0), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(37.1136, 16.8858), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(59.918, 10.5734), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(46.0394, 27.6816), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } })]
  })]
});

const VerticesVisualizerShape = component(PropertyVisualizer, {
  submorphs: [{
    name: 'property name',
    textAndAttributes: ['vertices', null]
  }, add({
    type: Polygon,
    name: 'dummy',
    borderColor: Color.red,
    extent: pt(84.3, 61.6),
    fill: Color.rgb(52, 152, 219),
    position: pt(145.7, 47.6),
    rotation: 2.449293598294707e-16,
    vertices: [({ position: pt(44.3429, 0), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(62.1148, 41.0033), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(30.8687, 36.7636), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(0, 45.3883), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(7.1436, 13.3871), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } })]
  })]
});

class VerticesVisualizerModel extends PropertyVisualizerModel {
  animateProperty () {
    this.view.master.setState(this.view.master.getState() === 'transformed' ? null : 'transformed');
    this.view.master.applyAnimated();
  }
}

const VerticesVisualizer = component(VerticesVisualizerStar, {
  defaultViewModel: VerticesVisualizerModel,
  master: {
    states: {
      transformed: VerticesVisualizerShape
    }
  }
});

class OpacityVisualizerModel extends PropertyVisualizerModel {
  reset () { this.ui.dummy.opacity = 1; }

  animateProperty () {
    const { dummy } = this.ui;
    dummy.animate({
      opacity: dummy.opacity == 1 ? .2 : 1
    });
  }
}

const OpacityVisualizer = component(BorderRadiusVisualizer, {
  defaultViewModel: OpacityVisualizerModel,
  submorphs: [{
    name: 'property name',
    textAndAttributes: ['opacity', null]
  }, add({
    name: 'other dummy',
    position: pt(151.5, 46.5),
    extent: pt(40.8, 36.4),
    fill: Color.rgb(125, 206, 160)
  }, 'dummy')]
});

const Headline = component({
  type: Text,
  name: 'headline concept',
  fixedHeight: true,
  extent: pt(347.4, 76.8),
  clipMode: 'hidden',
  fill: Color.rgb(255, 255, 255),
  fixedWidth: true,
  fontColor: '#24292e',
  fontSize: 33,
  lineHeight: 1.5,
  lineWrapping: true,
  padding: rect(10, 10, 0, 0),
  position: pt(-114.1, 34),
  textAlign: 'left',
  textAndAttributes: ['Morphic: Concept', {
    fontWeight: 'bold'
  }]
});

const Paragraph = component({
  type: Text,
  name: 'intro',
  extent: pt(297.3, 252),
  textAndAttributes: ['hello linus', null],
  clipMode: 'hidden',
  fill: Color.rgb(255, 255, 255),
  fixedWidth: true,
  fontColor: '#24292e',
  fontSize: 16,
  lineHeight: 1.5,
  lineWrapping: 'by-words',
  padding: rect(20, 16, -10, 4),
  position: pt(24.5, 17.3),
  textAlign: 'left'
});

export const InteractiveDie = component({
  fill: Color.white,
  extent: pt(582.2,304.9),
  layout: new ConstraintLayout({
    lastExtent: {
      x: 582.15703125,
      y: 304.9
    },
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
      position: pt(253.3,112.6),
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

class MorphicPropertyEssayModel extends ViewModel {
  static get properties () {
    return {
      bindings: {
        get () {
          return [
            { target: 'visual prop filter', signal: 'searchInput', handler: 'filterVisualProperties' },
            { target: 'behavioral prop filter', signal: 'searchInput', handler: 'filterBehavioralProperties' }
          ];
        }
      }
    };
  }

  filterVisualProperties () {
    const filter = this.ui.visualPropFilter;
    const visualProps = this.ui.visualPropertyCollection.submorphs;
    visualProps.forEach(prop => {
      prop.visible = filter.matches(prop.name);
    });
  }

  filterBehavioralProperties () {
    const filter = this.ui.behavioralPropFilter;
    const virtualProps = this.ui.behavioralProperties.submorphs;
    virtualProps.forEach(prop => {
      prop.visible = filter.matches(prop.name);
    });
  }
}

const MorphicPropertyEssay = component({
  defaultViewModel: MorphicPropertyEssayModel,
  extent: pt(818.3, 7232),
  fill: Color.rgb(229, 231, 233),
  width: 800,
  layout: new TilingLayout({
    axis: 'column',
    hugContentsVertically: true,
    padding: rect(5, 5, 0, 0),
    resizePolicies: [['visual property intro', {
      height: 'fixed',
      width: 'fill'
    }], ['visual property collection', {
      height: 'fixed',
      width: 'fill'
    }], ['behavioral properties', {
      height: 'fixed',
      width: 'fill'
    }]],
    spacing: 5
  }),
  submorphs: [{
    name: 'visual property intro',
    layout: new TilingLayout({
      axis: 'column',
      hugContentsVertically: true,
      padding: rect(20, 20, 0, 0),
      spacing: 10
    }),
    extent: pt(653.8, 174.8),
    submorphs: [{
      type: Text,
      name: 'aText copy',
      clipMode: 'hidden',
      extent: pt(445.3, 107),
      fixedWidth: true,
      fontColor: '#24292e',
      fontSize: 16,
      lineHeight: 1.5,
      lineWrapping: true,
      position: pt(18.5, 9.5),
      textAlign: 'left',
      textAndAttributes: ['Visual Properties\n', {
        fontSize: 20,
        fontWeight: 'bold'
      }, 'These are properties that directly affect the way the morphs are being rendered and expose themselves without any form of user interaction.', null]
    }, part(SearchField, {
      name: 'visual prop filter',
      extent: pt(189.6, 24.9),
      borderColor: Color.rgb(112, 112, 112),
      position: pt(17.6, 125.3),
      submorphs: [{
        name: 'search input',
        textAndAttributes: ['', null]
      }]
    })]
  }, {
    name: 'visual property collection',
    layout: new TilingLayout({
      hugContentsVertically: true,
      wrapSubmorphs: true
    }),
    extent: pt(351.4, 171.9),
    submorphs: [part(BorderRadiusVisualizer, {
      name: 'border radius tile'
    }), part(BorderColorVisualizer, {
      name: 'border color tile'
    }), part(BorderWidthVisualizer, {
      name: 'border width tile'
    }), part(BorderStyleVisualizer, {
      name: 'border style tile'
    }), part(DropShadowVisualizer, {
      name: 'drop shadow tile'
    }), part(ExtentVisualizer, {
      name: 'extent tile'
    }), part(FillVisualizer, {
      name: 'fill tile'
    }), part(RotationVisualizer, {
      name: 'rotation tile'
    }), part(OriginVisualizer, {
      name: 'origin tile'
    }), part(ScrollVisualizer, {
      name: 'scroll tile'
    }), part(ScaleVisualizer, {
      name: 'scale tile'
    }), part(VisibilityVisualizer, {
      name: 'visibility tile'
    }), part(OpacityVisualizer, {
      name: 'opacity tile'
    })]
  }, {
    name: 'behavioral properties intro',
    extent: pt(794, 0),
    layout: new TilingLayout({
      axis: 'column',
      hugContentsVertically: true,
      padding: rect(20, 20, 0, 0),
      spacing: 10
    }),
    submorphs: [{
      type: Text,
      name: 'aText copy_1',
      textAndAttributes: ['Behavioral Properties\n', {
        fontSize: 20,
        fontWeight: 'bold'
      }, 'These are properties which change the way the morph interacts with the user or its submorphs.', null],
      clipMode: 'hidden',
      extent: pt(445.3, 107),
      fixedWidth: true,
      fontColor: '#24292e',
      fontSize: 16,
      lineHeight: 1.5,
      lineWrapping: 'by-words',
      position: pt(20, 20),
      textAlign: 'left'
    }, part(SearchField, {
      name: 'behavioral prop filter',
      borderColor: Color.rgb(112, 112, 112),
      extent: pt(189.6, 24.9)
    })]
  }, {
    name: 'behavioral properties',
    layout: new TilingLayout({
      axis: 'column',
      hugContentsVertically: true,
      padding: rect(20, 20, 0, 0),
      resizePolicies: [['reactsToPointer prop', {
        height: 'fixed',
        width: 'fill'
      }], ['draggable prop', {
        height: 'fixed',
        width: 'fill'
      }], ['grabbable prop', {
        height: 'fixed',
        width: 'fill'
      }], ['halosEnabled prop', {
        height: 'fixed',
        width: 'fill'
      }], ['aText copy1', {
        height: 'fixed',
        width: 'fill'
      }], ['acceptsDrops prop', {
        height: 'fixed',
        width: 'fill'
      }], ['epiMorph prop', {
        height: 'fixed',
        width: 'fill'
      }]],
      spacing: 20
    }),
    extent: pt(317.5, 324.6),
    submorphs: [{
      type: Text,
      name: 'reactsToPointer prop',
      clipMode: 'hidden',
      extent: pt(774.3, 85),
      fill: Color.rgb(255, 255, 255),
      fixedWidth: true,
      fontColor: Color.rgb(121, 125, 127),
      fontSize: 16,
      lineHeight: 1.5,
      lineWrapping: 'by-words',
      position: pt(46.6, 80.3),
      textAlign: 'left',
      textAndAttributes: ['reactsToPointer', {
        fontColor: Color.rgb(17, 18, 19),
        fontSize: 20,
        fontWeight: 'bold'
      }, ' ', {
        fontSize: 20,
        fontWeight: 'bold'
      }, 'defaultValue:', {
        fontColor: {
          a: 0.51,
          b: 0.4980392156862745,
          g: 0.4901960784313726,
          r: 0.4745098039215686
        },
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'normal'
      }, ' ', {
        fontSize: 20,
        fontWeight: 'bold'
      }, 'true\n', {
        fontColor: Color.rgb(100, 221, 23),
        fontSize: 20,
        fontWeight: 'normal'
      }, 'If set to false, this flag will cause the morph to be completely excluded from the event dispatch of the system. Use this property with caution, since it makes the morph completely inaccesible except for programmatic access.', null]
    }, {
      type: Text,
      name: 'draggable prop',
      clipMode: 'hidden',
      extent: pt(774.3, 85),
      fixedWidth: true,
      fontColor: Color.rgb(121, 125, 127),
      fontSize: 16,
      lineHeight: 1.5,
      lineWrapping: 'by-words',
      textAlign: 'left',
      textAndAttributes: ['draggable', {
        fontColor: Color.rgb(0, 0, 0),
        fontSize: 20,
        fontWeight: 'bold'
      }, ' ', {
        fontSize: 20,
        fontWeight: 'bold'
      }, 'defaultValue:', {
        fontColor: {
          a: 0.55,
          b: 0.5872340425531914,
          g: 0.6,
          r: 0.5884865515857085
        },
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'normal'
      }, ' ', {
        fontColor: {
          a: 1,
          b: 0.05164191087916499,
          g: 0.7584905660377359,
          r: 0.12099309968717566
        },
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'normal'
      }, 'true\n', {
        fontColor: Color.rgb(100, 221, 23),
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'normal'
      }, 'If set to true, this flag will allow the morph to be dragged and placed at a different position, without having to invoke the halo or other inspection tools. ', null]
    }, {
      type: Text,
      name: 'grabbable prop',
      clipMode: 'hidden',
      extent: pt(774.3, 90),
      fixedWidth: true,
      fontColor: Color.rgb(121, 125, 127),
      fontSize: 16,
      lineHeight: 1.5,
      lineWrapping: 'by-words',
      textAlign: 'left',
      textAndAttributes: ['grabbable', {
        fontColor: Color.rgb(0, 0, 0),
        fontSize: 20,
        fontWeight: 'bold'
      }, ' ', {
        fontSize: 20,
        fontWeight: 'bold'
      }, 'defaultValue:', {
        fontColor: {
          a: 0.55,
          b: 0.5872340425531914,
          g: 0.6,
          r: 0.5884865515857085
        },
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'normal'
      }, ' ', {
        fontColor: {
          a: 1,
          b: 0.05164191087916499,
          g: 0.7584905660377359,
          r: 0.12099309968717566
        },
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'normal'
      }, 'false\n', {
        fontColor: Color.rgb(100, 221, 23),
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'normal'
      }, 'If set to true, this flag will allow the morph to be grabbed and removed from its current one to be placed at a different location with different owner, without having to invoke other inspection tools.', null]
    }, {
      type: Text,
      name: 'halosEnabled prop',
      clipMode: 'hidden',
      extent: pt(774.3, 64),
      fixedWidth: true,
      fontColor: Color.rgb(121, 125, 127),
      fontSize: 16,
      lineHeight: 1.5,
      lineWrapping: 'by-words',
      textAlign: 'left',
      textAndAttributes: ['halosEnabled', {
        fontColor: Color.rgb(0, 0, 0),
        fontSize: 20,
        fontWeight: 'bold'
      }, ' ', {
        fontSize: 20,
        fontWeight: 'bold'
      }, 'defaultValue:', {
        fontColor: {
          a: 0.55,
          b: 0.5872340425531914,
          g: 0.6,
          r: 0.5884865515857085
        },
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'normal'
      }, ' ', {
        fontColor: {
          a: 1,
          b: 0.05164191087916499,
          g: 0.7584905660377359,
          r: 0.12099309968717566
        },
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'normal'
      }, 'true\n', {
        fontColor: Color.rgb(100, 221, 23),
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'normal'
      }, 'Defines wether it is possible to open a halo on a rendered morph via cmd + click', null]
    }, {
      type: Text,
      name: 'aText copy1',
      clipMode: 'hidden',
      extent: pt(774.3, 85),
      fixedWidth: true,
      fontColor: Color.rgb(121, 125, 127),
      fontSize: 16,
      lineHeight: 1.5,
      lineWrapping: true,
      textAlign: 'left',
      textAndAttributes: ['tooltip', {
        fontColor: Color.rgb(0, 0, 0),
        fontSize: 20,
        fontWeight: 'bold'
      }, ' ', {
        fontSize: 20,
        fontWeight: 'bold'
      }, 'defaultValue:', {
        fontColor: {
          a: 0.55,
          b: 0.5872340425531914,
          g: 0.6,
          r: 0.5884865515857085
        },
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'normal'
      }, ' false\n', {
        fontColor: Color.rgb(244, 67, 54),
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'normal'
      }, 'If set to true, this flag will allow the morph to be dragged and placed at a different position, without having to invoke the halo or other inspection tools. ', null]
    }, {
      type: Text,
      name: 'acceptsDrops prop',
      clipMode: 'hidden',
      extent: pt(774.3, 111),
      fixedWidth: true,
      fontColor: Color.rgb(121, 125, 127),
      fontSize: 16,
      lineHeight: 1.5,
      lineWrapping: 'by-words',
      textAlign: 'left',
      textAndAttributes: ['acceptsDrops', {
        fontColor: Color.rgb(0, 0, 0),
        fontSize: 20,
        fontWeight: 'bold'
      }, ' ', {
        fontSize: 20,
        fontWeight: 'bold'
      }, 'defaultValue:', {
        fontColor: {
          a: 0.55,
          b: 0.5872340425531914,
          g: 0.6,
          r: 0.5884865515857085
        },
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'normal'
      }, ' ', {
        fontColor: {
          a: 1,
          b: 0.05164191087916499,
          g: 0.7584905660377359,
          r: 0.12099309968717566
        },
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'normal'
      }, 'true\n', {
        fontColor: Color.rgb(100, 221, 23),
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'normal'
      }, 'Defines wether the morph will allow other morphs to be dropped onto it. If set to false, this will override any drop attempt regardless of wether a default user interaction or a halo manipulation tried to initiate the drop.', null]
    }, {
      type: Text,
      name: 'epiMorph prop',
      height: 54,
      clipMode: 'hidden',
      fixedWidth: true,
      fontColor: Color.rgb(121, 125, 127),
      fontSize: 16,
      lineHeight: 1.5,
      lineWrapping: 'by-words',
      textAlign: 'left',
      textAndAttributes: ['epiMorph', {
        fontColor: Color.rgb(0, 0, 0),
        fontSize: 20,
        fontWeight: 'bold'
      }, ' ', {
        fontSize: 20,
        fontWeight: 'bold'
      }, 'defaultValue:', {
        fontColor: Color.rgb(127, 140, 141),
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'normal'
      }, ' ', {
        fontColor: Color.gray,
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'normal'
      }, 'false\n', {
        fontColor: Color.rgb(244, 67, 54),
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'normal'
      }, 'Defines wether or not a given morph is captured in case of ', null, 'reconciliation', {
        fontStyle: 'italic'
      }, ' or ', null, 'serialization', {
        fontStyle: 'italic'
      }, '. Is usually used for morphs that are part of the toolsupport of the system. Note that epiMorphs also do not appear inside the scene graph, which is handy for a various set of tools that live inside the world.', null]
    }]
  }]
});

export {
  Headline,
  Paragraph,
  BorderRadiusVisualizer,
  BorderColorVisualizer,
  BorderWidthVisualizer,
  BorderStyleVisualizer,
  DropShadowVisualizer,
  ExtentVisualizer,
  FillVisualizer,
  RotationVisualizer,
  OriginVisualizer,
  ScrollVisualizer,
  ScaleVisualizer,
  VisibilityVisualizer,
  VerticesVisualizer,
  OpacityVisualizer,
  MorphicPropertyEssay
};
