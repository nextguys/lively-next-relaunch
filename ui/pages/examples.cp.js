import { component, Text, TilingLayout } from 'lively.morphic';

import { part } from 'lively.morphic/components/core.js';
import { VideoLooper } from '../partials.cp.js';
import { projectAsset } from 'lively.project/helpers.js';
import { Color, rect, pt } from 'lively.graphics';

export const ExamplePage = component({
  name: 'hero',
  styleClasses: ['dashed'],
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
    name: 'intro',
    layout: new TilingLayout({
      resizePolicies: [['intro text', {
        height: 'fixed',
        width: 'fill'
      }]]
    }),
    borderColor: Color.rgb(23, 160, 251),
    borderWidth: 1,
    extent: pt(1027, 100.6),
    position: pt(357.2, 115),
    submorphs: [{
      type: Text,
      name: 'intro text',
      textAndAttributes: ['lively.next ', {
        fontColor: Color.rgb(255, 119, 0),
        fontFamily: '\"IBM Plex Mono\"'
      }, 'is an IDE for ', null, 'web content', {
        fontWeight: '600'
      }, '. While it is possible to build classic websites using lively.next (', null, 'in fact, you are looking at such a site right now!', {
        fontStyle: 'italic'
      }, '), it really shines when building ', null, '🔗', {
        fontFamily: '\"Noto Emoji Color\"'
      }, ' ', null, 'highly customized, interactive applications', {
        fontColor: Color.rgb(0, 0, 0),
        link: 'https://media.ccc.de/v/froscon2023-2897-live_programming_and_designing_of_dynamic_web_applications'
      }, ' - as the support by more traditional tooling for this is poor and ', null, 'lively.next', {
        fontColor: Color.rgb(255, 119, 0),
        fontFamily: '\"IBM Plex Mono\"'
      }, ' allows to bring in designers as first-class citizens while developing the actual application in parallel. Lively\'s self-contained nature also makes it easy to build tailored tooling for custom workflows.\n\nBelow, you can find some examples of different kinds of applications built with lively.next.', null],
      dynamicCursorColoring: true,
      extent: pt(902.2, 106.1),
      fill: Color.rgb(255, 255, 255),
      fixedHeight: true,
      fixedWidth: true,
      lineWrapping: 'by-words',
      padding: rect(1, 1, 0, 0),
      position: pt(-203.1, 343.4)
    }]
  }, {
    name: 'snowfall',
    layout: new TilingLayout({
      align: 'center',
      axisAlign: 'center',
      spacing: 50
    }),
    extent: pt(320.5, 167.5),
    position: pt(402, 667.5),
    submorphs: [part(VideoLooper, {
      name: 'snowfall video',
      extent: pt(472.8, 320.6),
      fill: Color.rgb(224, 224, 224),
      viewModel: {

        height: 400,
        srcURL: projectAsset('snowfall.mp4')
      },
      submorphs: [{
        name: 'video player',
        extent: pt(450, 253),
        html: '\n\
<div style=\"display: flex;\n\
            align-items: center;\n\
            justify-content: center;\n\
            height: 100%;\n\
            background: -webkit-gradient(linear, 0% 0%, 0% 100%, color-stop(0%, rgba(242,243,244,1)),color-stop(100%, rgba(229,231,233,1)))\">\n\
  <p style=\"font: bold 40pt Inconsolata, monospace; color: lightgray;\">&lt;HTML/&gt;</p>\n\
</div>'
      }]
    }), {
      type: Text,
      name: 'hero text',
      textAndAttributes: ['Snowflake - interactive web-content\n', {
        fontWeight: '600'
      }, '\nlively.next is especially well suited for the development of highly customized, interactive web content. This example is a scrollytelling which takes its reader on a journey through the origins of a snowflake. The content is discovered by use of scrolling while other means of interaction are also included. The scrollytelling is optimized for use on mobile devices.\n\n', null, '', {
        fontFamily: 'Font Awesome',
        fontWeight: '900'
      }, ' ', {}, 'Try it out', {
        fontColor: Color.rgb(0, 0, 0),
        link: 'https://typeshift.io/snowflakes/'
      }, ' for yourself!', {}],
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
    name: 'solar system',
    layout: new TilingLayout({
      align: 'center',
      axisAlign: 'center',
      spacing: 50
    }),
    extent: pt(320.5, 167.5),
    position: pt(402, 667.5),
    submorphs: [part(VideoLooper, {
      name: 'solar system video',
      fill: Color.rgb(224, 224, 224),
      viewModel: {

        height: 400,
        srcURL: projectAsset('solarsystem.mp4')
      },
      submorphs: [{
        name: 'video player',
        extent: pt(450, 253),
        html: '\n\
<div style=\"display: flex;\n\
            align-items: center;\n\
            justify-content: center;\n\
            height: 100%;\n\
            background: -webkit-gradient(linear, 0% 0%, 0% 100%, color-stop(0%, rgba(242,243,244,1)),color-stop(100%, rgba(229,231,233,1)))\">\n\
  <p style=\"font: bold 40pt Inconsolata, monospace; color: lightgray;\">&lt;HTML/&gt;</p>\n\
</div>'
      }]
    }), {
      type: Text,
      name: 'hero text',
      textAndAttributes: ['Solar System Simulation - integrating third pary libraries\n', {
        fontWeight: '600'
      }, '\nA simulation of our solar system, showing all orbital tracks and how different celestial bodies interact to create solar eclipses etc. The 3D scene is created using the zdog library and is entirely scripted inside of lively.next, showcasing how the entire power of the web as a platform can be leveraged inside of lively.next!\n\n', null, '', {
        fontFamily: 'Tabler Icons'
      }, ' ', {}, 'Find out when the next eclipse is coming', {
        fontColor: Color.rgb(0, 0, 0),
        link: 'https://www.spektrum.de/news/interaktive-planetengrafik-action-im-sonnensystem/1891840'
      }, '! ', {}],
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
    name: 'typeshift',
    layout: new TilingLayout({
      align: 'center',
      axisAlign: 'center',
      spacing: 50
    }),
    extent: pt(320.5, 167.5),
    position: pt(402, 667.5),
    submorphs: [part(VideoLooper, {
      name: 'typeshift video',
      fill: Color.rgb(224, 224, 224),
      viewModel: {

        height: 400,
        srcURL: projectAsset('typeshift.mp4')
      },
      submorphs: [{
        name: 'video player',
        extent: pt(450, 253),
        html: '\n\
<div style=\"display: flex;\n\
            align-items: center;\n\
            justify-content: center;\n\
            height: 100%;\n\
            background: -webkit-gradient(linear, 0% 0%, 0% 100%, color-stop(0%, rgba(242,243,244,1)),color-stop(100%, rgba(229,231,233,1)))\">\n\
  <p style=\"font: bold 40pt Inconsolata, monospace; color: lightgray;\">&lt;HTML/&gt;</p>\n\
</div>'
      }]
    }), {
      type: Text,
      name: 'hero text',
      textAndAttributes: ['typeshift.io - a classic business homepage\n', {
        fontStyle: 'normal',
        fontWeight: '600'
      }, '\nOf course, lively.next can also be used for the creation of classic websites, with its design goal being to tear down the wall between the design and implementation phase. typeshift.io is a Potsdam based agency specializing on interactive web content. Their website is entirely created in lively.next\n\n', null, '', {
        fontFamily: 'Font Awesome',
        fontWeight: '900'
      }, '  Visit ', {}, 'typeshift.io', {
        fontColor: Color.rgb(0, 0, 0),
        link: 'https://typeshift.io/'
      }],
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
    name: 'qinoq',
    layout: new TilingLayout({
      align: 'center',
      axisAlign: 'center',
      spacing: 50
    }),
    extent: pt(320.5, 167.5),
    position: pt(-1083.6, -1434.8),
    submorphs: [part(VideoLooper, {
      name: 'qinoq video',
      fill: Color.rgb(224, 224, 224),
      viewModel: {
        height: 400,
        srcURL: projectAsset('qinoq.mp4')
      },
      submorphs: [{
        name: 'video player',
        extent: pt(450, 253),
        html: '\n\
<div style=\"display: flex;\n\
            align-items: center;\n\
            justify-content: center;\n\
            height: 100%;\n\
            background: -webkit-gradient(linear, 0% 0%, 0% 100%, color-stop(0%, rgba(242,243,244,1)),color-stop(100%, rgba(229,231,233,1)))\">\n\
  <p style=\"font: bold 40pt Inconsolata, monospace; color: lightgray;\">&lt;HTML/&gt;</p>\n\
</div>'
      }]
    }), {
      type: Text,
      name: 'hero text',
      textAndAttributes: ['qinoq - An editor for the creation of Scrollytelling\n', {
        fontWeight: '600'
      }, '\nThe whole power of lively being a self-contained system becomes apparent when developing custom tooling for specific use cases to foster custom workflows.\nqinoq is an example of such a spezialed tool inside of lively.next. It\'s aimed the creation of interactive content in the form of Scrollytellings, allowing users to organize content in scenes akin to video cutting programs. Animations coupled to the current scroll position are easy to create in a graphical manner while more advanced interactions can still be programmed in a way that is easily accessible for programmers.\n\n', null, '', {
        fontFamily: 'Font Awesome Brands',
        fontWeight: '400'
      }, ' Watch the ', {}, 'presentation', {
        fontColor: Color.rgb(0, 0, 0),
        link: 'https://www.youtube.com/watch?v=O7pdYaSdZ3U'
      }, ' of qinoq (in German)\n', {}, '', {
        fontFamily: 'Font Awesome',
        fontWeight: '900'
      }, ' Read the ', {}, 'technical report\n', {
        fontColor: Color.rgb(0, 0, 0),
        link: 'https://publishup.uni-potsdam.de/opus4-ubp/frontdoor/deliver/index/docId/51857/file/tbhpi141.pdf'
      }, '', {
        fontFamily: 'Font Awesome Brands',
        fontWeight: '400'
      }, ' Find the source code on ', {}, 'GitHub', {
        fontColor: Color.rgb(0, 0, 0),
        link: 'https://github.com/hpi-swa-lab/qinoq'
      }],
      dynamicCursorColoring: true,
      extent: pt(487.5, 227.9),
      fill: Color.rgb(255, 255, 255),
      fixedHeight: true,
      fixedWidth: true,
      lineWrapping: 'by-words',
      padding: rect(1, 1, 0, 0),
      position: pt(-913.2, -79.5)
    }]
  }]
});
