import { component, Text, Image, TilingLayout } from 'lively.morphic';
import { pt, Color } from 'lively.graphics';
import { projectAsset } from 'lively.project/helpers.js';
import { rect } from 'lively.graphics/geometry-2d.js';

export const ErrorPage = component({
  name: 'hero',
  clipMode: 'visible',
  extent: pt(830.5,298),
  master: {
    breakpoints: [
      [pt(0, 0), component({
        layout: new TilingLayout({
          align: 'center',
          axisAlign: 'center',
          axis: 'column',
          padding: rect(5, 5, 0, 0),
          resizePolicies: [['wrapper', {
            height: 'fixed',
            width: 'fill'
          }]],
          spacing: 20
        }),
        submorphs: [
          { name: 'dead logo', visible: false }]
      })],
      [pt(660, 0), component({
        layout: new TilingLayout({
          align: 'center',
          axisAlign: 'center',
          axis: 'row',
          padding: rect(5, 5, 0, 0),
          resizePolicies: [['wrapper', {
            height: 'fixed',
            width: 'fixed'
          }]],
          spacing: 20
        })
      })]
    ]
  },
  position: pt(560, 80),
  submorphs: [{
    type: Image,
    name: 'dead logo',
    borderStyle: 'none',
    imageUrl: projectAsset('logo_gray.png'),
    borderColor: Color.blue,
    borderWidth: 1,
    extent: pt(128.5, 128),
    fill: Color.rgb(255, 255, 255)
  }, {
    name: 'wrapper',
    borderWidth: 0,
    width: 510,
    height: 149,
    master: {
      breakpoints: [
        [pt(0, 0), component({
          layout: new TilingLayout({
            align: 'left',
            axis: 'column',
            axisAlign: 'left',
            // hugContentsHorizontally: true,
            // hugContentsVertically: true,
            padding: rect(4, 4, 0, 0),
            resizePolicies: [['number', {
              height: 'fixed',
              width: 'fill'
            }], ['bottom text', {
              height: 'fixed',
              width: 'fill'
            }]]
          })
        })],
        [pt(751, 0), component({
          layout: new TilingLayout({
            align: 'left',
            axis: 'column',
            axisAlign: 'left',
            padding: rect(4, 4, 0, 0)
          })
        })]
      ]
    },
    submorphs: [{
      type: Text,
      master: {
        breakpoints: [
          [pt(0, 0), component({
            fixedWidth: true
          })],
          [pt(500, 0), component({
            fixedWidth: true,
            width: 500
          })]
        ]
      },
      name: 'number',
      textAndAttributes: ['404', {
        fontFamily: '\"IBM Plex Mono\"',
        fontSize: 66,
        fontWeight: '600'
      }],
      borderColor: Color.rgb(23, 160, 251),
      dynamicCursorColoring: true,
      fill: Color.rgba(255, 255, 255, 0)
    }, {
      type: Text,
      master: {
        breakpoints: [
          [pt(0, 0), component({
            fixedWidth: true
          })],
          [pt(500, 0), component({
            fixedWidth: true,
            width: 500
          })]
        ]
      },
      name: 'bottom text',
      borderColor: Color.rgb(23, 160, 251),
      dynamicCursorColoring: true,
      fill: Color.rgba(255, 255, 255, 0),
      lineWrapping: 'by-words',
      textAndAttributes: ['Oh no, it\'s not so alive right now', {
        fontSize: 32
      }, '😢', {
        fontFamily: 'Noto Emoji Color',
        fontSize: 32
      }]
    }]
  }]
});
