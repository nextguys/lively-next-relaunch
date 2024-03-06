import { TilingLayout, ViewModel, component } from 'lively.morphic/index.js';
import { pt, rect } from 'lively.graphics/geometry-2d.js';
import { Color } from 'lively.graphics/color.js';
import { Text } from 'lively.morphic/text/morph.js';

class PaginationNavigatorModel extends ViewModel {
  static get properties () {

  }
}

const PaginationNavigator = component({
  name: 'pagination navigator',
  borderColor: Color.rgb(23, 160, 251),
  extent: pt(225, 56.5),
  layout: new TilingLayout({
    align: 'center',
    axisAlign: 'center',
    spacing: 10
  }),
  position: pt(121, 442.5),
  submorphs: [{
    type: Text,
    name: 'back',
    borderColor: Color.rgb(23, 160, 251),
    dynamicCursorColoring: true,
    fill: Color.rgb(255, 255, 255),
    lineWrapping: 'by-words',
    padding: rect(1, 1, 0, 0),
    position: pt(80, 18),
    textAndAttributes: ['', {
      fontFamily: '"Font Awesome 6 Free", "Font Awesome 6 Brands"',
      fontWeight: '900'
    }, ' ', {}]
  }, {
    type: Text,
    name: 'page number',
    fontWeight: '600',
    fontColor: Color.rgb(255, 108, 0),
    dynamicCursorColoring: true,
    fill: Color.rgba(255, 255, 255, 0),
    fontSize: 20,
    lineHeight: 1,
    position: pt(107, 18),
    textAlign: 'center',
    textAndAttributes: ['1', null]
  }, {
    type: Text,
    name: 'forward',
    borderColor: Color.rgb(23, 160, 251),
    dynamicCursorColoring: true,
    fill: Color.rgb(255, 255, 255),
    lineWrapping: 'by-words',
    padding: rect(1, 1, 0, 0),
    position: pt(129, 18),
    textAndAttributes: ['', {
      fontFamily: '"Font Awesome 6 Free", "Font Awesome 6 Brands"',
      fontWeight: '900'
    }, ' ', {}]
  }]
});

export { PaginationNavigator };
