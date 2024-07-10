import { component, Text, TilingLayout } from 'lively.morphic';

import { part } from 'lively.morphic/components/core.js';
import { VideoLooper } from '../partials.cp.js';
import { projectAsset } from 'lively.project/helpers.js';
import { Color, rect, pt } from 'lively.graphics';

export const ExamplePage = component({
  name: 'hero',
  extent: pt(1028.5, 1437),
  layout: new TilingLayout({
    align: 'center',
    axis: 'column',
    axisAlign: 'center',
    hugContentsVertically: true,
    resizePolicies: [['intro', {
      height: 'fixed',
      width: 'fill'
    }], ['snowfall', {
      height: 'fixed',
      width: 'fill'
    }], ['solar system', {
      height: 'fixed',
      width: 'fill'
    }], ['typeshift', {
      height: 'fixed',
      width: 'fill'
    }], ['qinoq', {
      height: 'fixed',
      width: 'fill'
    }]],
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
    submorphs: [{
      type: Text,
      name: 'intro text',
      height: 178.34375,
      selectionMode: 'native',
      fontSize: 14,
      textAndAttributes: ['lively.next ', {
        fontColor: Color.rgb(255, 119, 0),
        fontFamily: '\"IBM Plex Mono\"'
      }, 'is an IDE for ', null, 'web content', {
        fontWeight: '600'
      }, '. While it is possible to build classic websites using ', null, 'lively.next', {
        fontColor: Color.rgb(255, 119, 0),
        fontFamily: '\"IBM Plex Mono\"'
      }, ' (', null, 'in fact, you are looking at such a site right now!', {
        fontStyle: 'italic'
      }, '), it really shines when building ', null, '🔗', {
        fontFamily: '\"Noto Emoji Color\"',
        link: 'https://media.ccc.de/v/froscon2023-2897-live_programming_and_designing_of_dynamic_web_applications'
      }, ' ', {
        link: 'https://media.ccc.de/v/froscon2023-2897-live_programming_and_designing_of_dynamic_web_applications'
      }, 'highly customized, interactive applications', {
        fontColor: Color.rgb(0, 0, 0),
        link: 'https://media.ccc.de/v/froscon2023-2897-live_programming_and_designing_of_dynamic_web_applications',
        textDecoration: 'underline'
      }, ' - as the support by more traditional tooling for this is poor and ', null, 'lively.next', {
        fontColor: Color.rgb(255, 119, 0),
        fontFamily: '\"IBM Plex Mono\"'
      }, ' allows to bring in designers as first-class citizens while developing the actual application in parallel. Lively\'s self-contained nature also makes it easy to build tailored tooling for custom workflows.\n\nBelow, you can find some examples of different kinds of applications built with lively.next.\n', null],
      dynamicCursorColoring: true,
      fill: Color.rgb(255, 255, 255),
      fixedWidth: true,
      lineWrapping: 'by-words',
      padding: rect(1, 1, 0, 0)
    }]
  }, {
    name: 'snowfall',
    layout: new TilingLayout({
      align: 'center',
      axisAlign: 'center',
      hugContentsVertically: true,
      spacing: 50,
      wrapSubmorphs: true
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
      selectionMode: 'native',
      fontSize: 14,
      textAndAttributes: ['Snowflake - Interactive Web-Content\n', {
        fontSize: 16,
        fontWeight: '600'
      }, '\n', null, 'lively.next', { fontFamily: 'IBM Plex Mono', fontColor: Color.lively }, ' is especially well suited for the development of highly customized, interactive web content. This example is a scrollytelling which takes its readers on a journey to the origins of a snowflake. The content is discovered by use of scrolling while other means of interaction are also included. The scrollytelling is optimized for use on mobile devices.\n\n', null, ' ', {
        fontColor: Color.rgb(0, 0, 0),
        fontFamily: 'Font Awesome',
        fontWeight: '900',
        link: 'https://typeshift.io/snowflakes/'
      }, 'Try it out', {
        fontColor: Color.rgb(0, 0, 0),
        link: 'https://typeshift.io/snowflakes/',
        textDecoration: 'underline'
      }, ' for yourself!', {
        fontColor: Color.rgb(0, 0, 0)
      }],
      dynamicCursorColoring: true,
      extent: pt(487.5, 158.5),
      fill: Color.rgb(255, 255, 255),
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
      hugContentsVertically: true,
      spacing: 50,
      wrapSubmorphs: true
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
      fontSize: 14,
      selectionMode: 'native',
      textAndAttributes: ['Solar System Simulation - Integrating Third-Party Libraries\n', {
        fontWeight: '600',
        fontSize: 16
      }, '\nA simulation of our solar system, showing all orbital tracks and how different celestial bodies interact to create solar eclipses etc. The 3D scene is created using the ', null, 'zdog', { fontFamily: 'IBM Plex Mono', fontColor: Color.black, textDecoration: 'underline', link: 'https://zzz.dog/' }, ' library and is entirely scripted inside of ', null, 'lively.next', { fontFamily: 'IBM Plex Mono', fontColor: Color.lively }, ', showcasing how the entire power of the web as a platform can be leveraged inside of ', null, 'lively.next', { fontFamily: 'IBM Plex Mono', fontColor: Color.lively }, '!\n\n', null, '', {
        fontFamily: 'Tabler Icons',
        fontColor: Color.black,
        link: 'https://www.spektrum.de/news/interaktive-planetengrafik-action-im-sonnensystem/1891840'
      }, ' ', { link: 'https://www.spektrum.de/news/interaktive-planetengrafik-action-im-sonnensystem/1891840' }, 'Find out when the next eclipse is coming', {
        textDecoration: 'underline',
        fontColor: Color.rgb(0, 0, 0),
        link: 'https://www.spektrum.de/news/interaktive-planetengrafik-action-im-sonnensystem/1891840'
      }, '! ', {}],
      dynamicCursorColoring: true,
      extent: pt(487.5, 158.5),
      fill: Color.rgb(255, 255, 255),
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
      hugContentsVertically: true,
      spacing: 50,
      wrapSubmorphs: true
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
      fontSize: 14,
      selectionMode: 'native',
      textAndAttributes: ['typeshift.io - A Classic Business Homepage\n', {
        fontStyle: 'normal',
        fontSize: 16,
        fontWeight: '600'
      }, '\nOf course, ', null, 'lively.next', { fontFamily: 'IBM Plex Mono', fontColor: Color.lively }, ' can also be used for the creation of classic websites, with its design goal being to tear down the wall between the design and implementation phase. typeshift.io is a Potsdam based agency specializing on interactive web content.\n\n', null, ' ', {
        fontFamily: 'Font Awesome',
        link: 'https://typeshift.io/',
        fontWeight: '900',
        fontColor: Color.rgb(0, 0, 0)
      }, 'Visit typeshift.io', {
        fontColor: Color.rgb(0, 0, 0),
        textDecoration: 'underline',
        link: 'https://typeshift.io/'
      }],
      dynamicCursorColoring: true,
      extent: pt(487.5, 158.5),
      fill: Color.rgb(255, 255, 255),
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
      hugContentsVertically: true,
      spacing: 50,
      wrapSubmorphs: true
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
      fontSize: 14,
      selectionMode: 'native',
      textAndAttributes: ['qinoq - An Editor for the Creation of Scrollytellings\n', {
        fontWeight: '600',
        fontSize: 16
      }, '\nThe whole power of ', null, 'lively.next', { fontFamily: 'IBM Plex Mono', fontColor: Color.lively }, ' being a self-contained system becomes apparent when developing custom tooling for specific use cases to foster custom workflows.\n', null, 'qinoq', { fontFamily: 'IBM Plex Mono' }, ' is an example of such a spezialed tool. It\'s aimed at the creation of interactive content in the form of scrollytellings, allowing users to organize content in scenes akin to video cutting programs. Animations coupled to the current scroll position are easy to create in a graphical manner, while more advanced interactions can still be programmed in a way that is easily accessible for programmers.\n\n', null, '', {
        fontFamily: 'Font Awesome Brands',
        fontWeight: '400'
      }, ' Watch the ', {}, 'presentation', {
        fontColor: Color.rgb(0, 0, 0),
        textDecoration: 'underline',
        link: 'https://www.youtube.com/watch?v=O7pdYaSdZ3U'
      }, ' of qinoq (in German)\n', {}, '', {
        fontFamily: 'Font Awesome',
        fontWeight: '900'
      }, ' Read the ', {}, 'technical report\n', {
        fontColor: Color.rgb(0, 0, 0),
        textDecoration: 'underline',
        link: 'https://publishup.uni-potsdam.de/opus4-ubp/frontdoor/deliver/index/docId/51857/file/tbhpi141.pdf'
      }, '', {
        fontFamily: 'Font Awesome Brands',
        fontWeight: '400'
      }, ' Find the source code on ', {}, 'GitHub', {
        fontColor: Color.rgb(0, 0, 0),
        textDecoration: 'underline',
        link: 'https://github.com/hpi-swa-lab/qinoq'
      }],
      dynamicCursorColoring: true,
      extent: pt(487.5, 227.9),
      fill: Color.rgb(255, 255, 255),
      fixedWidth: true,
      lineWrapping: 'by-words',
      padding: rect(1, 1, 0, 0),
      position: pt(-913.2, -79.5)
    }]
  }]
});
