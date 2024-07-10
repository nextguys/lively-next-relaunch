import { component, Text, TilingLayout } from 'lively.morphic';
import { Image } from 'lively.morphic/morph.js';

import { part, add, without } from 'lively.morphic/components/core.js';
import { VideoLooper } from '../partials.cp.js';
import { projectAsset } from 'lively.project/helpers.js';
import { Color, rect, pt } from 'lively.graphics';

export const DocumentationPage = component({
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
      textAndAttributes: ['On this page we provide multiple different resources to learn more about lively.next and quickstart your journey to build your own application with it. For more information about the ideas and concepts behind lively.next, we recomment a talk we held at FrOSCon \'23, titled \"Live Programming and Designing of Dynamic Web Applications\". In there, we also give a quick overview over the multiple building blocks that make up lively.next internally. Some of those are also explained further below. \nSome of the explanations make intensive use of livelys capabilities and provide interactive elements that are best enjoyed on desktop devices for the complete experience.\n\n🏗️ We are working on expanding this list! If some things are unclear or you are missing information, we appreciate you reaching out via 📧 E-Mail!', null],
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
      }, without('video player'), add({
        type: Image,
        name: 'anImage',
        extent: pt(455, 333.3),
        imageUrl: 'http://localhost:9011/local_projects/nextguys--lively-next-relaunch/assets/dog.jpg',
        position: pt(81, 165.5)
      })]
    }), {
      type: Text,
      name: 'hero text',
      textAndAttributes: ['Explanation of ', {
        fontWeight: '600'
      }, 'lively.project', {
        fontFamily: '\"IBM Plex Mono\"',
        fontWeight: '600'
      }, 's\n', {
        fontWeight: '600'
      }, '\nFind out how work in lively.next is managed and organized, how to collaborate with designers, programmers, and other stakeholders and what lively.next supports you with when it comes to deploying and developing your application!', null],
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
      textAndAttributes: ['qinoq - An editor for the creation of Scrollytellings\n', {
        fontWeight: '600'
      }, '\nThe whole power of lively being a self-contained system becomes apparent when developing custom tooling for specific use cases to foster custom workflows.\nqinoq is an example of such a spezialed tool inside of lively.next. It\'s aimed at the creation of interactive content in the form of Scrollytellings, allowing users to organize content in scenes akin to video cutting programs. Animations coupled to the current scroll position are easy to create in a graphical manner while more advanced interactions can still be programmed in a way that is easily accessible for programmers.\n\n', null, '', {
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
