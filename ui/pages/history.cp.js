import { component, TilingLayout } from 'lively.morphic';
import { pt, rect, Color } from 'lively.graphics';
import { Ellipse, Image } from 'lively.morphic/morph.js';
import { Text } from 'lively.morphic/text/morph.js';
import { part } from 'lively.morphic/components/core.js';
import { YouTubeEmbed } from 'lively.components/youtube-morph.cp.js';

export const HistoryPage = component({
  name: 'page',
  extent: pt(1339.5, 929.5),
  layout: new TilingLayout({
    align: 'center',
    axis: 'column',
    axisAlign: 'center',
    hugContentsVertically: true,
    resizePolicies: [['hero', {
      height: 'fixed',
      width: 'fill'
    }]]
  }),
  submorphs: [
    {
      name: 'hero',
      layout: new TilingLayout({
        align: 'center',
        axisAlign: 'center',
        hugContentsVertically: true,
        padding: rect(20, 20, 0, 0),
        resizePolicies: [['left', {
          height: 'fill',
          width: 'fixed'
        }], ['right', {
          height: 'fill',
          width: 'fixed'
        }]],
        spacing: 20
      }),
      fill: Color.rgba(244, 37, 37, 0),
      height: 658,
      borderColor: Color.rgb(23, 160, 251),
      borderWidth: {
        bottom: 2,
        left: 1,
        right: 1,
        top: 1
      },
      position: pt(560, 80),
      submorphs: [{
        name: 'left',
        extent: pt(346, 149.5),
        submorphs: [{
          type: Image,
          name: 'lively kernel',
          extent: pt(400, 277),
          fill: Color.rgba(255, 255, 255, 0),
          imageUrl: 'http://localhost:9011/local_projects/nextguys--lively-next-relaunch/assets/lively_kernel.png',
          position: pt(60, 12)
        }, {
          name: 'aMorph1',
          extent: pt(267, 99.5),
          layout: new TilingLayout({
            axis: 'column',
            axisAlign: 'right',
            padding: rect(20, 20, 0, 0)
          }),
          position: pt(195.5, 310),
          submorphs: [{
            type: Text,
            name: 'date_1',
            extent: pt(150, 22),
            textAlign: 'right',
            dynamicCursorColoring: true,
            fill: Color.rgb(255, 255, 255),
            fixedWidth: true,
            fontFamily: '\"Bree Serif\"',
            fontSize: 14,
            fontWeight: '700',
            lineWrapping: 'by-words',
            padding: rect(1, 1, 0, 0),
            position: pt(20, 20),
            textAndAttributes: ['24. Janury 2008', null],
            width: undefined
          }, {
            type: Text,
            name: 'description_1',
            textAlign: 'right',
            dynamicCursorColoring: true,
            extent: pt(203.2, 47.3),
            fill: Color.rgb(255, 255, 255),
            fixedHeight: true,
            fixedWidth: true,
            lineWrapping: 'by-words',
            padding: rect(1, 1, 0, 0),
            position: pt(20, 22),
            textAndAttributes: ['Dan Ingnalls presents the Lively Kernel at Google TechTalks.', null]

          }]
        }]
      }, {
        name: 'timeline',
        borderRadius: 10,
        extent: pt(9.5, 600),
        fill: Color.rgb(0, 0, 0),
        submorphs: [{
          type: Ellipse,
          name: 'anEllipse2',
          position: pt(-5, 350),
          extent: pt(20, 20),
          fill: Color.rgb(255, 119, 0)
        }, {
          type: Ellipse,
          name: 'anEllipse',
          extent: pt(20, 20),
          fill: Color.rgb(255, 119, 0),
          position: pt(-5, 75)
        }]
      }, {
        name: 'right',
        width: 333.5,
        submorphs: [{
          name: 'aMorph',
          extent: pt(267, 99.5),
          layout: new TilingLayout({
            axis: 'column',
            padding: rect(20, 20, 0, 0)
          }),
          position: pt(-3.5, 45),
          submorphs: [{
            type: Text,
            name: 'date',
            fontFamily: '"Bree Serif"',
            fixedWidth: true,
            extent: pt(169.5, 25.1),
            dynamicCursorColoring: true,
            fill: Color.rgb(255, 255, 255),
            fontSize: 14,
            fontWeight: '700',
            lineWrapping: 'by-words',
            padding: rect(1, 1, 0, 0),
            position: pt(20, 20),
            textAndAttributes: ['1. October 2007', null]
          }, {
            type: Text,
            name: 'description',
            dynamicCursorColoring: true,
            extent: pt(203.2, 47.3),
            fill: Color.rgb(255, 255, 255),
            fixedHeight: true,
            fixedWidth: true,
            lineWrapping: 'by-words',
            padding: rect(1, 1, 0, 0),
            position: pt(20, 44),
            textAndAttributes: ['The first version of the Lively Kernel was released to the public.', null]
          }]
        }, part(YouTubeEmbed, {
          name: 'you tube embed1',
          viewModel: { videoURL: 'https://www.youtube.com/watch?v=gGw09RZjQf8' },
          extent: pt(400, 225),
          position: pt(16, 257)
        })]
      }]
    }
  ]
});
