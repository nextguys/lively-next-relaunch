import { component, ShadowObject, Text, TilingLayout } from 'lively.morphic';
import { part, add } from 'lively.morphic/components/core.js';
import { projectAsset } from 'lively.project/helpers.js';
import { Color, rect, pt } from 'lively.graphics';
import { Image } from 'lively.morphic/morph.js';
import { TiktokButton } from './landing-page.cp.js';

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
  extent: pt(1892, 1482.6),
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
      }, ' We are working on expanding this list! If some things are unclear or you are missing information, we appreciate you reaching out via ', {
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
        imageUrl: projectAsset('morphic.png')
      },
      {
        name: 'description wrapper',
        submorphs: [{
          name: 'hero text',
          height: 125,
          textAndAttributes: ['Interactive Tutorial on our GUI Framework morphic and ', {
            fontSize: 16,
            fontWeight: '600'
          }, 'lively.next', {
            fontColor: Color.rgb(255, 119, 0),
            fontFamily: '\"IBM Plex Mono\"',
            fontSize: 16,
            fontWeight: '600'
          }, '\'s Component System\n', {
            fontSize: 16,
            fontWeight: '600'
          }, '\nLearn about ', null, 'lively.next', {
            fontColor: Color.rgb(255, 119, 0),
            fontFamily: '\"IBM Plex Mono\"'
          }, '\'s GUI framework ', null, 'morphic', {
            fontFamily: '\"IBM Plex Mono\"'
          }, ' and how to use it compose your own GUI elements, create reuasable components and add custom behavior to them via a View-ViewModel-Architecture.', null]
        }, add(part(TiktokButton, {
          name: 'morphic',
          extent: pt(129.1, 36.3),
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
          height: 64,
          textAndAttributes: ['Showcase of the Tooling available in the ', {
            fontSize: 16,
            fontWeight: '600'
          }, 'lively.next', {
            fontColor: Color.rgb(255, 119, 0),
            fontFamily: '\"IBM Plex Mono\"',
            fontSize: 16,
            fontWeight: '600'
          }, ' ', {
            fontFamily: '\"IBM Plex Sans\"',
            fontSize: 16,
            fontWeight: '600'
          }, 'IDE\n', {
            fontFamily: '\"IBM Plex Mono\"',
            fontSize: 16,
            fontWeight: '600'
          }, '\n', null, 'Get to know the tools that comprise the', {}, ' ', {
            fontColor: Color.rgb(255, 119, 0),
            fontFamily: '\"IBM Plex Sans\"'
          }, 'lively.next', {
            fontColor: Color.rgb(255, 119, 0),
            fontFamily: '\"IBM Plex Mono\"'
          }, ' IDE! ', {}]
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
          }, '\nFind out how work in ', null, 'lively.next', {
            fontColor: Color.rgb(255, 119, 0),
            fontFamily: '\"IBM Plex Mono\"'
          }, ' is managed and organized, how to collaborate with designers, programmers, and other stakeholders and how', null, ' lively.next', {
            fontColor: Color.rgb(255, 119, 0),
            fontFamily: '\"IBM Plex Mono\"'
          }, ' supports you when it comes to deploying and developing your application!', null]
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
          height: 166,
          textAndAttributes: ['Learn about ', {
            fontSize: 16,
            fontWeight: '600'
          }, 'lively.modules', {
            fontFamily: '\"IBM Plex Mono\"',
            fontSize: 16,
            fontWeight: '600'
          }, ' and our Approach to Live Programming in the Browser \n', {
            fontSize: 16,
            fontWeight: '600'
          }, '\nLearn about how ', null, 'lively.next', {
            fontColor: Color.rgb(255, 119, 0),
            fontFamily: '\"IBM Plex Mono\"'
          }, ' works under the hood.\nThis is an advanced topic that is of special interest to readers that want to dive deeper into the technical details of ', null, 'lively.next', {
            fontColor: Color.rgb(255, 119, 0),
            fontFamily: '\"IBM Plex Mono\"'
          }, '. It is not necessary to read (or understand) this to use ', null, 'lively.next', {
            fontColor: Color.rgb(255, 119, 0),
            fontFamily: '\"IBM Plex Mono\"'
          }, '!', null]
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
