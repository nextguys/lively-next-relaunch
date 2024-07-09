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
    hugContentsVertically: true,
    resizePolicies: [['contact details', {
      height: 'fixed',
      width: 'fill'
    }]]
  }),
  submorphs: [{
    type: Text,
    selectionMode: 'native',
    name: 'contact details',
    lineWrapping: 'by-words',
    textAlign: 'left',
    fixedWidth: true,
    fontSize: 14,
    dynamicCursorColoring: true,
    fill: Color.rgb(255, 255, 255),
    padding: rect(1, 1, 0, 0),
    position: pt(431.5, 81.5),
    textAndAttributes: ['This site is operated by\n', {
      fontColor: Color.rgb(255, 119, 0),
      fontWeight: '600',
      fontSize: 16
    }, '\nRobin Schreiber & Linus Hagemann\nKemperplatz 1\nc/o WeWork\n10785 Berlin, Germany\n\nYou can contact us via 📧: ', null, 'mail @ lively-next.org\n', {
      fontColor: Color.rgb(255, 119, 0),
      fontWeight: '600'
    }, '\n', null, 'Privacy notice\n', {
      fontColor: Color.rgb(255, 119, 0),
      fontSize: 16,
      fontWeight: '600'
    }, '\nWe limit the amount of personal data that we process as much as possible. We process personal information only when it’s necessary to provide this service for technical reasons. The legal basis for this is Article 6(1)(f) GDPR.\n\nWe reserve the right to change this privacy notice at any time in compliance with legal requirements.', null]

  }]
});
