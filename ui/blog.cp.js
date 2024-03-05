import { component, TilingLayout } from 'lively.morphic';
import { pt, rect } from 'lively.graphics/geometry-2d.js';
import { Color } from 'lively.graphics/color.js';
import { Text } from 'lively.morphic/text/morph.js';

export const Blog = component({
  extent: pt(995, 828)
});

export const BlogEntryPreview = component({
  extent: pt(582, 245.5),
  layout: new TilingLayout({
    axis: 'column',
    axisAlign: 'right',
    padding: rect(20, 0, 0, 0),
    resizePolicies: [['header wrapper', {
      height: 'fixed',
      width: 'fill'
    }], ['seperator', {
      height: 'fixed',
      width: 'fill'
    }], ['preview', {
      height: 'fill',
      width: 'fill'
    }]]
  }),
  submorphs: [{
    name: 'header wrapper',
    fill: Color.rgba(255, 255, 255, 0),
    layout: new TilingLayout({
      axisAlign: 'center',
      justifySubmorphs: 'spaced',
      padding: rect(0, 0, 0, 20),
      wrapSubmorphs: true
    }),
    height: 10,
    position: pt(-1.5, 0.5),
    borderColor: Color.rgb(23, 160, 251),
    submorphs: [{
      type: Text,
      name: 'title',
      fontSize: 30,
      fontWeight: '700',
      fontFamily: '"Bree Serif"',
      dynamicCursorColoring: true,
      fill: Color.rgba(255, 255, 255, 0),
      position: pt(29, 40),
      textAndAttributes: ['Title of the Post', null]
    }, {
      name: 'meta wrapper',
      layout: new TilingLayout({
        align: 'center',
        axisAlign: 'center',
        padding: rect(0, 2, 0, -2)
      }),
      fill: Color.rgba(152, 152, 152, 0.4049),
      borderRadius: 30,
      borderColor: Color.rgb(23, 160, 251),
      extent: pt(186, 25),
      position: pt(-90, 30),
      submorphs: [{
        type: Text,
        name: 'date',
        fontWeight: '600',
        borderColor: Color.rgb(23, 160, 251),
        dynamicCursorColoring: true,
        fill: Color.rgba(255, 255, 255, 0),
        lineWrapping: 'by-words',
        padding: rect(1, 1, 0, 0),
        position: pt(20.5, 36.3),
        textAndAttributes: ['05.03.2024', null]
      }, {
        type: Text,
        name: 'aText_2',
        borderColor: Color.rgb(23, 160, 251),
        dynamicCursorColoring: true,
        fill: Color.rgba(255, 255, 255, 0),
        lineWrapping: 'by-words',
        padding: rect(1, 1, 0, 0),
        position: pt(-15, 25),
        textAndAttributes: ['by', null]
      }, {
        type: Text,
        name: 'author',
        fontWeight: '600',
        borderColor: Color.rgb(23, 160, 251),
        dynamicCursorColoring: true,
        fill: Color.rgba(255, 255, 255, 0),
        lineWrapping: 'by-words',
        padding: rect(1, 1, 0, 0),
        position: pt(-18, 24),
        textAndAttributes: ['@merryman', null]
      }]
    }]
  }, {
    name: 'seperator',
    height: 3,
    borderColor: Color.rgb(23, 160, 251),
    fill: Color.lively,
    position: pt(-126, 28)
  }, {
    type: Text,
    name: 'preview',
    clipMode: 'hidden',
    height: 90.5,
    borderColor: Color.rgb(23, 160, 251),
    dynamicCursorColoring: true,
    fill: Color.rgb(255, 255, 255),
    fixedHeight: true,
    fixedWidth: true,
    lineWrapping: 'by-words',
    padding: rect(1, 20, 0, -19),
    position: pt(-198, 22),
    textAndAttributes: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst vestibulum rhoncus est. Tempus iaculis urna id volutpat lacus laoreet. A cras semper auctor neque. Amet massa vitae tortor condimentum. Tellus at urna condimentum mattis pellentesque. Integer eget aliquet nibh praesent tristique magna sit amet purus. Enim nec dui nunc mattis enim ut tellus. Mauris augue neque gravida in fermentum et sollicitudin. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Vivamus arcu felis bibendum ut tristique et egestas quis. Cras pulvinar mattis nunc sed blandit libero volutpat. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Consequat interdum varius sit amet mattis vulputate. At elementum eu facilisis sed odio morbi quis commodo.', null]
  }, {
    name: 'continue reading wrapper',
    layout: new TilingLayout({
      align: 'right',
      axisAlign: 'center',
      hugContentsHorizontally: true
    }),
    borderColor: Color.rgb(23, 160, 251),
    extent: pt(155.5, 20),
    position: pt(-40, 23),
    submorphs: [{
      type: Text,
      name: 'aText_5',
      fontWeight: '600',
      dynamicCursorColoring: true,
      fill: Color.rgba(255, 255, 255, 0),
      position: pt(23.8, 35),
      textAndAttributes: ['>> ', {
        textDecoration: 'none'
      }, 'Continue Reading', {
        textDecoration: 'underline'
      }]

    }]
  }]

});
