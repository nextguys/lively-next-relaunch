import { component, TilingLayout } from 'lively.morphic';
import { pt, rect } from 'lively.graphics/geometry-2d.js';
import { Color } from 'lively.graphics/color.js';
import { Image } from 'lively.morphic/morph.js';
import { Text } from 'lively.morphic/text/morph.js';

export const LivelyFooter = component({
  extent: pt(707.2, 108.7),
  layout: new TilingLayout({
    axisAlign: 'center',
    padding: rect(20, 0, -20, 0),
    spacing: 20
  }),
  submorphs: [{
    type: Image,
    name: 'lively logo',
    extent: pt(77.6, 80.6),
    fill: Color.rgb(255, 255, 255),
    position: pt(36.9, 34)
  }, {
    type: Text,
    name: 'impressum',
    fontColor: Color.rgb(81, 90, 90),
    fontFamily: 'Roboto',
    fontSize: 19,
    dynamicCursorColoring: true,
    fill: Color.rgb(255, 255, 255),
    position: pt(143.2, 62.8),
    textAndAttributes: ['This is the ', null, 'lively.next', {
      fontWeight: '500'
    }, ' impressum. Or shall we drop it alltogether? I do not really know...', null]

  }]
});
