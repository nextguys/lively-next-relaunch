import { component, ViewModel, ConstraintLayout, TilingLayout } from 'lively.morphic';
import { pt, rect } from 'lively.graphics/geometry-2d.js';
import { Image } from 'lively.morphic/morph.js';
import { Color } from 'lively.graphics/color.js';
import { Text } from 'lively.morphic/text/morph.js';

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
    this.view.position = pt(0, 0);
    this.view.extent = $world.visibleBounds().extent();
  }
}

export const LivelyWebPage = component({
  name: 'lively web site',
  respondsToVisibleWindow: true,
  defaultViewModel: LivelyWebPageModel,
  layout: new ConstraintLayout({
    lastExtent: undefined,
    reactToSubmorphAnimations: false,
    submorphSettings: [['aMorph_1', {
      x: 'resize',
      y: 'resize'
    }]]
  }),
  extent: pt(1260.5, 670),
  submorphs: [{
    name: 'aMorph',
    borderColor: Color.rgb(23, 160, 251),
    extent: pt(593.5, 176.5),
    layout: new TilingLayout({
      axisAlign: 'center',
      hugContentsHorizontally: true,
      hugContentsVertically: true
    }),
    position: pt(39, 57.5),
    submorphs: [{
      type: Image,
      name: 'anImage',
      extent: pt(100, 100)
    }, {
      type: Text,
      name: 'aText',
      extent: pt(275, 128),
      fixedWidth: true,
      textAlign: 'right',
      fontColor: Color.lively,
      borderColor: Color.rgb(23, 160, 251),
      dynamicCursorColoring: true,
      fill: Color.rgb(255, 255, 255),
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
  }, {
    name: 'aMorph_1',
    borderColor: Color.rgb(23, 160, 251),
    extent: pt(1180, 473.5),
    position: pt(38.5, 172.3)
  }]

});
