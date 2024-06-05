import { component, TilingLayout } from 'lively.morphic';
import { pt, rect, Color } from 'lively.graphics';
import { Text } from 'lively.morphic/text/morph.js';

export const ImprintPage = component({
  name: 'imprint',
  extent: pt(1339.5, 929.5),
  layout: new TilingLayout({
    align: 'center',
    axis: 'column',
    axisAlign: 'center',
    hugContentsVertically: true
  }),
  submorphs: [{
    type: Text,
    name: 'contact details',
    dynamicCursorColoring: true,
    extent: pt(284.5, 136.4),
    fill: Color.rgb(255, 255, 255),
    padding: rect(1, 1, 0, 0),
    position: pt(431.5, 81.5),
    textAndAttributes: ['This site is operated by\n', {
      fontColor: Color.rgb(255, 119, 0),
      fontWeight: '600'
    }, '\nRobin Schreiber & Linus Hagemann\nKemperplatz 1\nc/o WeWork\n10785 Berlin, Germany\n\nYou can contact us via 📧: ', null, 'mail @ lively-next.org', {
      fontColor: Color.rgb(255, 119, 0),
      fontWeight: '600'
    }]
  }]
});
