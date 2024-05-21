import { TilingLayout, component, Text, Image } from 'lively.morphic';
import { Color, rect, pt } from 'lively.graphics';

export const LandingPage = component({
  name: 'hero',
  layout: new TilingLayout({
    align: 'center',
    axisAlign: 'center',
    spacing: 20
  }),
  height: 298,
  borderStyle: 'none',
  borderColor: Color.rgb(23, 160, 251),
  borderWidth: 1,
  position: pt(560, 80),
  submorphs: [{
    type: Image,
    name: 'productive lively session',
    borderStyle: 'none',
    borderColor: Color.rgb(23, 160, 251),
    borderWidth: 1,
    extent: pt(341, 250.5),
    fill: Color.rgb(255, 255, 255),
    imageUrl: 'http://localhost:9011/local_projects/nextguys--lively-next-relaunch/assets/lively_while_working.png',
    position: pt(43.5, 0)
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
    position: pt(615.5, 82.5)
  }]
});
