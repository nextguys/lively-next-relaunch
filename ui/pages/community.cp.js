import { TilingLayout, component, Text, Image } from 'lively.morphic';
import { Color, rect, pt } from 'lively.graphics';

export const CommunityPage = component({
  name: 'hero',
  layout: new TilingLayout({
    align: 'center',
    axis: 'column',
    axisAlign: 'center',
    spacing: 20
  }),
  height: 298,
  borderStyle: 'none',
  borderColor: Color.rgb(23, 160, 251),
  borderWidth: 1,
  position: pt(560, 80),
  submorphs: [{
    name: 'partsbin',
    layout: new TilingLayout({
      align: 'center',
      axisAlign: 'center'
    }),
    borderColor: Color.rgb(23, 160, 251),
    borderWidth: 1,
    extent: pt(320.5, 167.5),
    position: pt(402, 667.5),
    submorphs: [{
      type: Image,
      name: 'productive lively session',
      borderStyle: 'none',
      borderColor: Color.rgb(23, 160, 251),
      borderWidth: 1,
      extent: pt(341, 250.5),
      fill: Color.rgb(255, 255, 255),
      position: pt(-560.2, -125.5)
    }, {
      type: Text,
      name: 'hero text',
      textAndAttributes: ['lively.next is a personal programming kit.\nIt emphasizes liveness, directness and interactivity. \n\nlively.next combines rich live programming capabilities, in the spirit of Smalltalk Systems, with a graphical direct manipulation workflow from current design tools. It seamlessly brigdes these two, allowing for rapid prototyping and efficient collaboration. ', null],
      borderColor: Color.rgb(23, 160, 251),
      dynamicCursorColoring: true,
      extent: pt(487.5, 158.5),
      fill: Color.rgb(255, 255, 255),
      fixedHeight: true,
      fixedWidth: true,
      lineWrapping: 'by-words',
      padding: rect(1, 1, 0, 0),
      position: pt(-913.2, -79.5)
    }]
  },
  {
    name: 'open source',
    layout: new TilingLayout({
      align: 'center',
      axisAlign: 'center'
    }),
    borderColor: Color.rgb(23, 160, 251),
    borderWidth: 1,
    extent: pt(320.5, 167.5),
    position: pt(402, 667.5),
    submorphs: [{
      type: Image,
      name: 'productive lively session',
      borderStyle: 'none',
      borderColor: Color.rgb(23, 160, 251),
      borderWidth: 1,
      extent: pt(341, 250.5),
      fill: Color.rgb(255, 255, 255),
      position: pt(-560.2, -125.5)
    }, {
      type: Text,
      name: 'hero text',
      textAndAttributes: ['lively.next is a personal programming kit.\nIt emphasizes liveness, directness and interactivity. \n\nlively.next combines rich live programming capabilities, in the spirit of Smalltalk Systems, with a graphical direct manipulation workflow from current design tools. It seamlessly brigdes these two, allowing for rapid prototyping and efficient collaboration. ', null],
      borderColor: Color.rgb(23, 160, 251),
      dynamicCursorColoring: true,
      extent: pt(487.5, 158.5),
      fill: Color.rgb(255, 255, 255),
      fixedHeight: true,
      fixedWidth: true,
      lineWrapping: 'by-words',
      padding: rect(1, 1, 0, 0),
      position: pt(-913.2, -79.5)
    }]
  }, {
    name: 'element',
    layout: new TilingLayout({
      align: 'center',
      axisAlign: 'center'
    }),
    borderColor: Color.rgb(23, 160, 251),
    borderWidth: 1,
    extent: pt(320.5, 167.5),
    position: pt(402, 667.5),
    submorphs: [{
      type: Image,
      name: 'productive lively session',
      borderStyle: 'none',
      borderColor: Color.rgb(23, 160, 251),
      borderWidth: 1,
      extent: pt(341, 250.5),
      fill: Color.rgb(255, 255, 255),
      position: pt(-560.2, -125.5)
    }, {
      type: Text,
      name: 'hero text',
      textAndAttributes: ['lively.next is a personal programming kit.\nIt emphasizes liveness, directness and interactivity. \n\nlively.next combines rich live programming capabilities, in the spirit of Smalltalk Systems, with a graphical direct manipulation workflow from current design tools. It seamlessly brigdes these two, allowing for rapid prototyping and efficient collaboration. ', null],
      borderColor: Color.rgb(23, 160, 251),
      dynamicCursorColoring: true,
      extent: pt(487.5, 158.5),
      fill: Color.rgb(255, 255, 255),
      fixedHeight: true,
      fixedWidth: true,
      lineWrapping: 'by-words',
      padding: rect(1, 1, 0, 0),
      position: pt(-913.2, -79.5)
    }]
  }]
});