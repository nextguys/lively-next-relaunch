import { component, TilingLayout } from 'lively.morphic';
import { pt, rect } from 'lively.graphics/geometry-2d.js';
import { Color } from 'lively.graphics/color.js';
import { Text } from 'lively.morphic/text/morph.js';

const WideFooter = component({
  name: 'footer',
  clipMode: 'hidden',
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
    hugContentsVertically: true,
    justifySubmorphs: 'spaced',
    padding: rect(30, 0, 0, 0),
    spacing: 30
  }),
  extent: pt(1078.5, 40),
  submorphs: [{
    name: 'left',
    width: 299.5,
    layout: new TilingLayout({
      axisAlign: 'center',
      padding: rect(30, 0, -30, 0)
    }),
    submorphs: [{
      type: Text,
      name: 'aText',
      selectionMode: 'native',
      fontStyle: 'italic',
      dynamicCursorColoring: true,
      fill: Color.rgb(255, 255, 255),
      fontColor: Color.rgb(255, 119, 0),
      textAndAttributes: ['the ', null, 'truly', {
        fontWeight: '600'
      }, ' integrated development environment', null]
    }]
  }, {
    name: 'center',
    layout: new TilingLayout({
      align: 'right',
      axisAlign: 'center',
      justifySubmorphs: 'spaced',
      spacing: 20
    }),
    extent: pt(116.5, 44),
    submorphs: [{
      type: Text,
      name: 'matrix',
      selectionMode: 'native',
      dynamicCursorColoring: true,
      fill: Color.rgb(255, 255, 255),
      textAndAttributes: ['🗨️', { fontFamily: 'Noto Emoji Color' }, ' Talk to us on Matrix!', { fontColor: Color.rgb(0, 0, 0), link: 'https://matrix.to/#/#lively.next:matrix.org' }]
    }, {
      type: Text,
      name: 'github',
      selectionMode: 'native',
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
      selectionMode: 'native',
      name: 'imprint',
      dynamicCursorColoring: true,
      fill: Color.rgb(255, 255, 255),
      position: pt(344.3, 71),
      textAndAttributes: ['Imprint', {
        fontColor: Color.rgb(0, 0, 0),
        link: '#imprint'
      }]
    }]
  }, {
    name: 'right',
    extent: pt(320, 10),
    width: 372,
    layout: new TilingLayout({
      axisAlign: 'center',
      padding: rect(0, 0, 16, 0)
    }),
    submorphs: [{
      type: Text,
      selectionMode: 'native',
      name: 'funding',
      padding: rect(0, 0, 30, 0),
      dynamicCursorColoring: true,
      fill: Color.rgb(255, 255, 255),
      position: pt(-107, 23.5),
      textAndAttributes: ['We are looking for funding! ', null, '💌', { fontFamily: 'Noto Emoji Color', link: 'mailto:hello@example.com' }, ' funding@lively-next.org', {
        fontColor: Color.rgb(0, 0, 0),
        link: 'mailto:hello@example.com'
      }]

    }]
  }]
});

const NarrowFooter = component(WideFooter, {
  layout: new TilingLayout({
    align: 'right',
    axis: 'column',
    axisAlign: 'center',
    hugContentsVertically: true,
    justifySubmorphs: 'spaced',
    padding: rect(0, 5, 0, 0)
  }),
  submorphs: [{
    name: 'right',
    extent: pt(372, 10),
    layout: new TilingLayout({
      axisAlign: 'center',
      hugContentsHorizontally: true
    }),
    submorphs: [{
      name: 'funding',
      padding: rect(0, 0, 0, 0)
    }]
  }]
});

export const Footer = component(NarrowFooter, {
  name: 'footer',
  master: {
    breakpoints: [
      [pt(0, 0), NarrowFooter],
      [pt(950, 0), WideFooter]
    ]
  },
  extent: pt(906.2, 44)
});
