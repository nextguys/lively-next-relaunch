import { component, ShadowObject, Text, TilingLayout } from 'lively.morphic';
import { part, add } from 'lively.morphic/components/core.js';
import { projectAsset } from 'lively.project/helpers.js';
import { Color, rect, pt } from 'lively.graphics';
import { Image, Polygon } from 'lively.morphic/morph.js';
import { TiktokButton } from './landing-page.cp.js';
import { LinearGradient } from 'lively.graphics/color.js';

export const DocumentationEntry = component({
  name: 'example',
  master: {
    breakpoints: [
      [pt(0, 0), component({
        layout: new TilingLayout({
          align: 'center',
          axisAlign: 'center',
          axis: 'column',
          hugContentsVertically: true,
          resizePolicies: [['example video', {
            height: 'fixed',
            width: 'fill'
          }], ['description wrapper', {
            height: 'fixed',
            width: 'fill'
          }]],
          spacing: 20
        })
      })],
      [pt(890, 0), component({
        layout: new TilingLayout({
          align: 'center',
          axisAlign: 'center',
          axis: 'row',
          spacing: 50,
          hugContentsVertically: true,
          resizePolicies: [['example video', {
            height: 'fixed',
            width: 'fill'
          }],

          ['description wrapper', {
            height: 'fixed',
            width: 'fixed'
          }]]
        }),
        submorphs: [
          { name: 'description wrapper', width: 500 }
        ]
      })]
    ]
  },
  extent: pt(1053, 913.1),
  position: pt(402, 667.5),
  submorphs: [{
    type: Image,
    name: 'example video',
    extent: pt(335, 250),
    fill: Color.rgb(255, 255, 255),
    position: pt(-103.5, 23.5)
  }, {
    name: 'description wrapper',
    layout: new TilingLayout({
      axis: 'column',
      hugContentsVertically: true,
      padding: rect(20, 0, -20, 0),
      resizePolicies: [['hero text', {
        height: 'fixed',
        width: 'fill'
      }]],
      spacing: 15
    }),
    extent: pt(615.3, 137.6),
    submorphs: [{
      type: Text,
      name: 'hero text',
      position: pt(-879.3, -505.5),
      fontSize: 14,
      selectionMode: 'native',
      textAndAttributes: ['Sample description', null],
      dynamicCursorColoring: true,
      extent: pt(487.5, 158.5),
      fill: Color.rgb(255, 255, 255),
      fixedWidth: true,
      lineWrapping: 'by-words',
      padding: rect(0, 1, 20, 0)
    }]
  }]
});

export const BackToDocsButton = component({
  extent: pt(256.9, 61.9),
  layout: new TilingLayout({
    axisAlign: 'center',
    spacing: 18
  }),
  submorphs: [
    {
      type: Text,
      name: 'go back to documentation',
      nativeCursor: 'pointer',
      borderColor: Color.rgb(23, 160, 251),
      dynamicCursorColoring: true,
      extent: pt(46, 52),
      fill: Color.rgba(255, 255, 255, 0),
      fontSize: 36,
      lineWrapping: 'by-words',
      padding: rect(1, 9, 0, -8),
      textAndAttributes: ['', {
        fontFamily: 'Material Icons',
        fontWeight: '900'
      }]
    }, {
      type: Text,
      name: 'chapter title',
      fontWeight: '600',
      fontSize: 30,
      dynamicCursorColoring: true,
      fill: Color.rgb(255, 255, 255),
      padding: rect(1, 4, 0, -3),
      position: pt(117.2, 55.5),
      textAndAttributes: ['Chapter Title', null]
    }
  ]
});

// part(DocumentationPage).openInWorld()
export const DocumentationPage = component({
  name: 'hero',
  extent: pt(1734, 1895.7),
  layout: new TilingLayout({
    align: 'center',
    axis: 'column',
    axisAlign: 'center',
    hugContentsVertically: true,
    resizePolicies: [
      ['intro', {
        height: 'fixed',
        width: 'fill'
      }], ['morphic entry', {
        height: 'fixed',
        width: 'fill'
      }], ['studio entry', {
        height: 'fixed',
        width: 'fill'
      }], ['projects entry', {
        height: 'fixed',
        width: 'fill'
      }], ['modules entry', {
        height: 'fixed',
        width: 'fill'
      }]],
    spacing: 20
  }),
  height: 350,
  borderStyle: 'none',
  borderColor: Color.rgb(23, 160, 251),
  borderWidth: 1,
  position: pt(560, 80),
  submorphs: [{
    name: 'intro',
    master: {
      breakpoints: [
        [pt(0, 0), component({
          layout: new TilingLayout({
            align: 'center',
            axisAlign: 'center',
            resizePolicies: [['intro text', {
              height: 'fixed',
              width: 'fill'
            }]]
          })
        })],
        [pt(800, 0), component({
          layout: new TilingLayout({
            align: 'center',
            axisAlign: 'center',
            resizePolicies: [['intro text', {
              height: 'fixed',
              width: 'fixed'
            }]]
          }),
          submorphs: [{ name: 'intro text', width: 800, textAlign: 'justify' }]
        })]]
    },
    submorphs: [{
      type: Text,
      name: 'intro text',
      extent: pt(800, 238),
      selectionMode: 'native',
      fontSize: 14,
      textAndAttributes: ['Here, we provide multiple different ', null, 'resources', {
        fontWeight: '600'
      }, ' to learn more about ', null, 'lively.next', {
        fontColor: Color.rgb(255, 119, 0),
        fontFamily: 'IBM Plex Mono'
      }, ' and quickstart your journey to ', null, 'build your own applications ', {
        fontWeight: '600'
      }, 'with it. \nFor more information about the ideas and concepts behind ', null, 'lively.next', {
        fontColor: Color.rgb(255, 119, 0),
        fontFamily: 'IBM Plex Mono'
      }, ', we recommend a talk we held at FrOSCon \'23, titled ', null, '🔗 ', {
        fontFamilye: 'Noto Emoji Color Subset'
      }, '\"Live Programming and Designing of Dynamic Web Applications\"', {
        fontColor: Color.rgb(0, 0, 0),
        link: 'https://media.ccc.de/v/froscon2023-2897-live_programming_and_designing_of_dynamic_web_applications',
        textDecoration: 'underline'
      }, '. In there, we also give a quick overview over the multiple ', null, 'building blocks', {
        fontWeight: '600'
      }, ' that make up ', null, 'lively.next', {
        fontColor: Color.rgb(255, 119, 0),
        fontFamily: '\"IBM Plex Mono\"'
      }, ' internally. Some of those are also explained further below. \n\nSome of the explanations make intensive use of ', null, 'lively.next', {
        fontColor: Color.rgb(255, 119, 0),
        fontFamily: 'IBM Plex Mono'
      }, 's capabilities and provide ', null, 'interactive', {
        fontWeight: '600'
      }, ' elements that are best enjoyed on ', null, 'desktop', {
        fontWeight: '600'
      }, ' devices for the complete experience.\n\n', null, '🏗️', {
        fontFamily: 'Noto Emoji Color Subset',
        fontSize: 14,
        quote: 1
      }, ' We are working on expanding this list! If some things are unclear or yoare missing information, we appreciate you reaching out via ', {
        fontSize: 14,
        quote: 1
      }, '📧', {
        fontFamily: 'Noto Emoji Color Subset',
        fontSize: 14,
        quote: 1
      }, ' E-Mail!\n', {
        fontSize: 14,
        quote: 1
      }, '\n', null],

      dynamicCursorColoring: true,
      fill: Color.rgb(255, 255, 255),
      fixedWidth: true,
      lineWrapping: 'by-words',
      padding: rect(1, 1, 0, 0)
    }]
  },
  part(DocumentationEntry, {
    name: 'morphic entry',
    submorphs: [
      {
        name: 'example video',
        imageUrl: projectAsset('morphic.png'),
        viewModel: {
          srcURL: projectAsset('snowfall.mp4')
        }
      },
      {
        name: 'description wrapper',
        submorphs: [{
          name: 'hero text',
          textAndAttributes: ['Interactive Tutorial on our GUI Framework morphic and lively.nexts Component System\n', {
            fontSize: 16,
            fontWeight: '600'
          }, '\n', null, 'lively.next', {
            fontColor: Color.lively,
            fontFamily: 'IBM Plex Mono'
          }, ' is especially well suited for the development of highly customized, interactive web content. This example is a scrollytelling which takes its readers on a journey to the origins of a snowflake. The content is discovered by use of scrolling while other means of interaction are also included. The scrollytelling is optimized for use on mobile devices.\n\n', null, ' ', {
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
          }]
        }, add(part(TiktokButton, {
          name: 'morphic',
          extent: pt(129.1, 36.3),
          dropShadow: new ShadowObject({ distance: 4.242640687119285, color: Color.rgba(0, 0, 0, 0.62), blur: 8 }),
          submorphs: [{
            name: 'button label',
            textAndAttributes: ['Read more', null],
            extent: pt(102, 30),
            fontSize: 20
          }]
        }))]
      }
    ]
  }),

  part(DocumentationEntry, {
    name: 'studio entry',
    submorphs: [
      {
        name: 'example video',
        imageUrl: projectAsset('lively-desktop.png')
      }, {
        name: 'description wrapper',
        submorphs: [{
          name: 'hero text',
          textAndAttributes: ['Showcase of the Tooling available in the lively.next IDE\n', {
            fontSize: 16,
            fontWeight: '600'
          }, '\nA simulation of our solar system, showing all orbital tracks and how different celestial bodies interact to create solar eclipses etc. The 3D scene is created using the ', null, 'zdog', {
            fontColor: Color.black,
            fontFamily: 'IBM Plex Mono',
            link: 'https://zzz.dog/',
            textDecoration: 'underline'
          }, ' library and is entirely scripted inside of ', null, 'lively.next', {
            fontColor: Color.lively,
            fontFamily: 'IBM Plex Mono'
          }, ', showcasing how the entire power of the web as a platform can be leveraged inside of ', null, 'lively.next', {
            fontColor: Color.lively,
            fontFamily: 'IBM Plex Mono'
          }, '!\n\n', null, '', {
            fontColor: Color.black,
            fontFamily: 'Tabler Icons',
            link: 'https://www.spektrum.de/news/interaktive-planetengrafik-action-im-sonnensystem/1891840'
          }, ' ', {
            link: 'https://www.spektrum.de/news/interaktive-planetengrafik-action-im-sonnensystem/1891840'
          }, 'Find out when the next eclipse is coming', {
            fontColor: Color.rgb(0, 0, 0),
            link: 'https://www.spektrum.de/news/interaktive-planetengrafik-action-im-sonnensystem/1891840',
            textDecoration: 'underline'
          }, '! ', {}]
        }, add(part(TiktokButton, {
          name: 'studio',
          extent: pt(129, 36),
          submorphs: [{
            name: 'button label',
            fontSize: 20,
            textAndAttributes: ['Read more', null]
          }]
        }))]
      }
    ]
  }),
  part(DocumentationEntry, {
    name: 'projects entry',
    submorphs: [
      {
        name: 'example video',
        imageUrl: projectAsset('projects.png')
      },
      {
        name: 'description wrapper',
        submorphs: [{
          name: 'hero text',
          textAndAttributes: ['Explanation of ', {
            fontWeight: '600'
          }, 'lively.project', {
            fontFamily: '\"IBM Plex Mono\"',
            fontWeight: '600'
          }, 's\n', {
            fontWeight: '600'
          }, '\nFind out how work in lively.next is managed and organized, how to collaborate with designers, programmers, and other stakeholders and what lively.next supports you with when it comes to deploying and developing your application!', null]
        }, add(part(TiktokButton, {
          name: 'projects',
          extent: pt(129, 36),
          submorphs: [{
            name: 'button label',
            fontSize: 20,
            textAndAttributes: ['Read more', null]
          }]
        }))]
      }
    ]
  }),
  part(DocumentationEntry, {
    name: 'modules entry',
    master: {
      breakpoints: [
        [pt(0, 0), component({
          layout: new TilingLayout({
            align: 'center',
            axisAlign: 'center',
            axis: 'column',
            hugContentsVertically: true,
            resizePolicies: [['example video', {
              height: 'fixed',
              width: 'fill'
            }], ['description wrapper', {
              height: 'fixed',
              width: 'fill'
            }]],
            spacing: 50
          })
        })],
        [pt(890, 0), component({
          layout: new TilingLayout({
            axisAlign: 'left',
            axis: 'row',
            align: 'top',
            hugContentsVertically: true,
            resizePolicies: [['example video', {
              height: 'fixed',
              width: 'fill'
            }],
            ['description wrapper', {
              height: 'fixed',
              width: 'fixed'
            }]],
            spacing: 50
          }),
          submorphs: [
            { name: 'hero text', width: 500 }
          ]
        })]
      ]
    },
    submorphs: [

      {
        name: 'example video',
        imageUrl: 'http://localhost:9011/local_projects/nextguys--lively-next-relaunch/assets/architecture.png'
      }, {
        name: 'description wrapper',
        extent: pt(500, 381.2),
        submorphs: [{
          name: 'hero text',
          textAndAttributes: ['Learn about lively.modules and our Approach to Live Programming in the Browser \n', {
            fontSize: 16,
            fontWeight: '600'
          }, '\nThe whole power of ', null, 'lively.next', {
            fontColor: Color.lively,
            fontFamily: 'IBM Plex Mono'
          }, ' being a self-contained system becomes apparent when developing custom tooling for specific use cases to foster custom workflows.\n', null, 'qinoq', {
            fontFamily: 'IBM Plex Mono'
          }, ' is an example of such a spezialed tool. It\'s aimed at the creation of interactive content in the form of scrollytellings, allowing users to organize content in scenes akin to video cutting programs. Animations coupled to the current scroll position are easy to create in a graphical manner, while more advanced interactions can still be programmed in a way that is easily accessible for programmers.\n\n', null, '', {
            fontFamily: 'Font Awesome Brands',
            fontWeight: '400'
          }, ' Watch the ', {}, 'presentation', {
            fontColor: Color.rgb(0, 0, 0),
            link: 'https://www.youtube.com/watch?v=O7pdYaSdZ3U',
            textDecoration: 'underline'
          }, ' of qinoq (in German)\n', {}, '', {
            fontFamily: 'Font Awesome',
            fontWeight: '900'
          }, ' Read the ', {}, 'technical report\n', {
            fontColor: Color.rgb(0, 0, 0),
            link: 'https://publishup.uni-potsdam.de/opus4-ubp/frontdoor/deliver/index/docId/51857/file/tbhpi141.pdf',
            textDecoration: 'underline'
          }, '', {
            fontFamily: 'Font Awesome Brands',
            fontWeight: '400'
          }, ' Find the source code on ', {}, 'GitHub', {
            fontColor: Color.rgb(0, 0, 0),
            link: 'https://github.com/hpi-swa-lab/qinoq',
            textDecoration: 'underline'
          }]
        }, add(part(TiktokButton, {
          name: 'modules',
          extent: pt(129, 36),
          submorphs: [{
            name: 'button label',
            fontSize: 20,
            textAndAttributes: ['Read more', null]
          }]
        }))]
      }
    ]
  })]
});
