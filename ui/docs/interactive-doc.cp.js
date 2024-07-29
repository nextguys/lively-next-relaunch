import { component, ConstraintLayout, TilingLayout, ShadowObject, add, ViewModel } from 'lively.morphic/index.js';
import { pt, rect } from 'lively.graphics/geometry-2d.js';
import { Color } from 'lively.graphics/color.js';
import { Text } from 'lively.morphic/text/morph.js';
import { num } from 'lively.lang';
import { Polygon } from 'lively.morphic/morph.js';
import { part } from 'lively.morphic/components/core.js';
import { InteractiveDelayModel } from '../../explanation/examples.cp.js';

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
      borderRadius: this.ui.dummy.borderRadius.bottomLeft === 1 ? 15 : 1
    });
  }

  reset () { this.ui.dummy.borderRadius = 1; }
}

class BorderWidthVisualizerModel extends PropertyVisualizerModel {
  animateProperty () {
    const { dummy, dummyPoly } = this.ui;
    dummy.animate({
      borderWidth: dummy.borderWidth === 1 ? 10 : 1
    });
    dummyPoly.animate({
      borderWidth: dummyPoly.borderWidth === 1 ? 10 : 1
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
      dropShadow: !this.ui.dummy.dropShadow ? new ShadowObject({ distance: 5, fast: false }) : null
    });
  }
}

const PropertyVisualizer = component({
  borderColor: Color.rgb(189, 195, 199),
  borderStyle: 'dashed',
  extent: pt(240, 130),
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
    position: pt(81.2, 52.7),
    rotation: 2.449293598294707e-16,
    vertices: [({ position: pt(46.0394, 27.6816), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(59.918, 44.7898), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(37.1136, 38.4775), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(22.8866, 55.3633), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(22.6713, 34.3538), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(0, 27.6816), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(22.6713, 21.0094), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(22.8866, 0), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(37.1136, 16.8858), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(59.918, 10.5734), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(46.0394, 27.6816), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } })]
  }), add({
    name: 'dummy',
    borderColor: Color.rgb(64, 196, 255),
    borderWidth: 4,
    extent: pt(59.3, 53),
    fill: Color.rgb(52, 152, 219),
    position: pt(162.5, 53.7)
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
  }]
});

class ExtentVisualizerModel extends PropertyVisualizerModel {
  reset () { this.ui.dummy.extent = pt(100, 100); }

  animateProperty () {
    this.ui.dummy.animate({
      extent: this.ui.dummy.width === 100 ? pt(40, 20) : pt(100, 100)
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
      rotation: this.ui.dummy.rotation === 0 ? Math.PI * 2.5 : 0
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
    position: pt(136, 56),
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
      left: this.ui.dummy.left === 175 ? 50 : 175
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
    extent: pt(67.3, 53),
    clipMode: 'auto',
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
      scale: dummy.scale === 1 ? 2 : 1
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
    extent: pt(61, 53),
    position: pt(151.3, 92.9),
    origin: pt(41.2, 40.2),
    clipMode: 'visible',
    submorphs: [{
      name: 'sub dummy b',
      clipMode: 'visible',
      position: pt(-24.5, -21.5)
    }, {
      name: 'sub dummy a',
      clipMode: 'visible',
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
      dummy.opacity = dummy.opacity === 0 ? 1 : 0;
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
      opacity: dummy.opacity === 1 ? .2 : 1
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
  extent: pt(582.2, 304.9),
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
      position: pt(253.3, 112.6),
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

class MorphicPropertyEssayModel extends InteractiveDelayModel {
  static get properties () {
    return { isLoaded: { get () { return true; } } };
  }

  get bindings () {
    return [
      ...super.bindings
    ];
  }
}

const MorphicPropertyEssay = component({
  defaultViewModel: MorphicPropertyEssayModel,
  extent: pt(280, 812),
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
    }]],
    spacing: 5
  }),
  submorphs: [{
    name: 'visual property intro',
    layout: new TilingLayout({
      axis: 'column',
      hugContentsVertically: true,
      padding: rect(20, 20, 0, 0),
      resizePolicies: [['aText copy', {
        height: 'fixed',
        width: 'fill'
      }]],
      spacing: 10
    }),
    extent: pt(653.8, 174.8),
    submorphs: [{
      type: Text,
      name: 'aText copy',
      clipMode: 'hidden',
      extent: pt(656.3, 107),
      fixedWidth: true,
      fontColor: '#24292e',
      fontSize: 16,
      lineHeight: 1.5,
      lineWrapping: 'by-words',
      position: pt(18.5, 9.5),
      textAlign: 'left',
      textAndAttributes: ['Visual Properties\n', {
        fontSize: 20,
        fontWeight: 'bold'
      }, 'These are properties that directly affect the way the morphs are being rendered and expose themselves without any form of user interaction.', null]
    }]
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
