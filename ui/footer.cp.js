import { component, TilingLayout } from 'lively.morphic';
import { pt } from 'lively.graphics/geometry-2d.js';
import { Color } from 'lively.graphics/color.js';
import { Text } from 'lively.morphic/text/morph.js';
export const Footer = component({
  name: 'footer',
  borderColor: Color.rgb(57, 57, 57),
  borderWidth: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 4
  },
  layout: new TilingLayout({
    align: 'center',
    axisAlign: 'center',
    spacing: 30,
    wrapSubmorphs: true
  }),
  extent: pt(920.5, 119),
  submorphs: [{
    type: Text,
    name: 'github',
    extent: pt(52, 17),
    dynamicCursorColoring: true,
    fill: Color.rgb(255, 255, 255),
    position: pt(116.3, 72.5),
    textAndAttributes: ['', { fontFamily: 'Font Awesome Brands' }, ' GitHub', {
      fontColor: Color.rgb(0, 0, 0),
      link: 'https://www.github.com/LivelyKernel/lively.next'
    }]
  }, {
    type: Text,
    name: 'imprint',
    dynamicCursorColoring: true,
    fill: Color.rgb(255, 255, 255),
    position: pt(344.3, 71),
    textAndAttributes: ['Imprint', {
      fontColor: Color.rgb(0, 0, 0),
      link: '#/imprint'
    }]
  }]
});
