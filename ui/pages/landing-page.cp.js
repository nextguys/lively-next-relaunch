import { TilingLayout, ShadowObject, part, component, Text } from 'lively.morphic';
import { Color, rect, pt } from 'lively.graphics';
import { LinearGradient } from 'lively.graphics/color.js';
import { VideoLooper } from '../partials.cp.js';
import { projectAsset } from 'lively.project/helpers.js';

const Feature = component({
  name: 'feature',
  layout: new TilingLayout({
    axis: 'column',
    hugContentsVertically: true
  }),
  selectionMode: 'native',
  fill: Color.rgba(255, 255, 255, 0),
  extent: pt(300, 124.6),
  submorphs: [{
    type: Text,
    name: 'title',
    lineWrapping: 'by-words',
    selectionMode: 'native',
    extent: pt(300, 21.6),
    fixedWidth: true,
    fontSize: 14,
    textAlign: 'left',
    height: 20.296875,
    fontColor: Color.rgb(255, 119, 0),
    fontWeight: '600',
    textAndAttributes: ['Building Together', null],
    dynamicCursorColoring: true,
    fill: Color.rgb(255, 255, 255)
  }, {
    type: Text,
    selectionMode: 'native',
    name: 'description',
    fontSize: 14,
    fixedWidth: true,
    textAndAttributes: ['No need to \"quickly grab the new color codes from the mockup\" - ', null, 'lively.next ', {
      fontColor: Color.rgb(255, 119, 0),
      fontFamily: '\"IBM Plex Mono\"'
    }, 'allows ', null, 'designers', {
      fontWeight: '600'
    }, ' and ', null, 'programmers', {
      fontWeight: '600'
    }, ' to seamlessly work together on the ', null, 'same artifacts', {
      fontWeight: '600'
    }, '. Spend more time doing your best work, instead of redoing someone elses.', null],
    borderStyle: {
      bottom: 'none',
      left: 'none',
      right: 'none',
      top: 'solid'
    },
    borderColor: Color.rgb(255, 119, 0),
    borderWidth: {
      bottom: 1,
      left: 1,
      right: 1,
      top: 2
    },
    dynamicCursorColoring: true,
    extent: pt(300, 132),
    fill: Color.rgb(255, 255, 255),
    lineWrapping: 'by-words',
    padding: rect(1, 1, 0, 0),
    position: pt(1124, 644)
  }]
});

const FeatureHolder = component({
  name: 'features shoutout',
  master: {
    breakpoints: [
      [pt(0, 0), component({
        layout: new TilingLayout({
          axis: 'column',
          axisAlign: 'center',
          hugContentsVertically: true,
          padding: rect(20, 20, 0, 0),
          resizePolicies: [['all parts', {
            height: 'fixed',
            width: 'fill'
          }]],
          spacing: 20
        })
      })],
      [pt(1000, 0), component({
        layout: new TilingLayout({
          axis: 'column',
          axisAlign: 'center',
          hugContentsVertically: true,
          padding: rect(20, 20, 0, 0),
          spacing: 20
        })
      })]
    ]
  },
  extent: pt(1000, 402),
  submorphs: [{
    name: 'all parts',
    layout: new TilingLayout({
      align: 'center',
      spacing: 20,
      wrapSubmorphs: true
    }),
    extent: pt(1000, 380),
    submorphs: [
      part(Feature, {
        name: 'building together',
        submorphs: [
          {
            name: 'title',
            textAndAttributes: ['👪', { fontFamily: 'Noto Emoji Color Subset' }, ' Building Together', null]
          },
          {
            name: 'description',
            textAndAttributes: ['No need to \"quickly grab the new color codes from the mockup\" - ', null, 'lively.next ', {
              fontColor: Color.rgb(255, 119, 0),
              fontFamily: '\"IBM Plex Mono\"'
            }, 'allows ', null, 'designers', {
              fontWeight: '600'
            }, ' and ', null, 'programmers', {
              fontWeight: '600'
            }, ' to seamlessly work together on the ', null, 'same artifacts', {
              fontWeight: '600'
            }, '. Spend more time doing your best work, instead of redoing someone elses.', null]
          }
        ]
      }), part(Feature, {
        name: 'components',
        submorphs: [{
          name: 'title',
          textAndAttributes: ['🔁', { fontFamily: 'Noto Emoji Color Subset' }, ' Powerful Component System', null]
        }, {
          name: 'description',
          textAndAttributes: ['lively.next', {
            fontColor: Color.rgb(255, 119, 0),
            fontFamily: '\"IBM Plex Mono\"'
          }, '\'s ', {}, 'component', {
            fontFamily: '\"IBM Plex Mono\"',
            fontWeight: '600'
          }, ' system allows you to build fast!. Import components build by others via the public ', {}, 'partsbin', {
            fontFamily: '\"IBM Plex Mono\"'
          }, ' ', {}, 'component library', {
            fontWeight: '600'
          }, ' or make and reuse your own building blocks.', {}],
          width: undefined
        }]
      }), part(Feature, {
        name: 'code generation',
        submorphs: [
          {
            name: 'title',
            textAndAttributes: ['🖨️', { fontFamily: 'Noto Emoji Color Subset' }, ' Code Generation That Just Works', null]
          },
          {
            name: 'description',
            textAndAttributes: ['Components', {
              fontFamily: '\"IBM Plex Mono\"'
            }, ' can be edited visually or by writing code. Both options are equally powerful and ', null, 'code is generated and kept in sync', {
              fontWeight: '600'
            }, ' for all changes made visually. ', null]
          }]
      }),
      part(Feature, {
        name: 'batteries included',
        submorphs: [{
          name: 'title',
          textAndAttributes: ['🔋️', { fontFamily: 'Noto Emoji Color Subset' }, ' Batteries Included', null]
        }, {
          name: 'description',
          textAndAttributes: ['lively.next ', {
            fontColor: Color.rgb(255, 119, 0),
            fontFamily: '\"IBM Plex Mono\"'
          }, 'comes with a basic set of often-used ', {
            fontColor: Color.rgb(0, 0, 0),
            fontFamily: '\"IBM Plex Sans\"'
          }, 'GUI components', {
            fontColor: Color.rgb(0, 0, 0),
            fontFamily: '\"IBM Plex Sans\"',
            fontWeight: '600'
          }, ', a v', {
            fontColor: Color.rgb(0, 0, 0),
            fontFamily: '\"IBM Plex Sans\"'
          }, 'ersion control system', {
            fontColor: Color.rgb(0, 0, 0),
            fontFamily: '\"IBM Plex Sans\"',
            fontWeight: '600'
          }, ' build on top of ', {
            fontColor: Color.rgb(0, 0, 0),
            fontFamily: '\"IBM Plex Sans\"'
          }, 'git', {
            fontColor: Color.rgb(0, 0, 0),
            fontFamily: '\"IBM Plex Mono\"',
            fontWeight: '400'
          }, ' that hides all the complicated internals while allowing experts to stick to their accustomed workflows, and a custom ', {
            fontColor: Color.rgb(0, 0, 0),
            fontFamily: '\"IBM Plex Sans\"'
          }, 'bundler', {
            fontColor: Color.rgb(0, 0, 0),
            fontFamily: '\"IBM Plex Sans\"',
            fontWeight: '600'
          }, ', that allows you to easily host your work as static webpages.', {
            fontColor: Color.rgb(0, 0, 0),
            fontFamily: '\"IBM Plex Sans\"'
          }],
          width: undefined
        }]
      }), part(Feature, {
        name: 'customize',
        fill: Color.rgba(255, 255, 255, 0),
        layout: new TilingLayout({
          axis: 'column',
          hugContentsVertically: true
        }),
        submorphs: [{
          name: 'title',
          textAndAttributes: ['🎨️', { fontFamily: 'Noto Emoji Color Subset' }, ' Make it Yours', null]
        }, {
          name: 'description',
          textAndAttributes: ['lively.next', {
            fontColor: Color.rgb(255, 119, 0),
            fontFamily: '\"IBM Plex Mono\"'
          }, ' is a (mostly) ', null, 'self-contained', {
            fontWeight: '600'
          }, ' development environment. We develop ', null, 'lively.next', {
            fontColor: Color.rgb(255, 119, 0),
            fontFamily: '\"IBM Plex Mono\"'
          }, ' inside of ', null, 'lively.next', {
            fontColor: Color.rgb(255, 119, 0),
            fontFamily: '\"IBM Plex Mono\"'
          }, '. What does that mean for your? Everything is ', null, 'inspectable', {
            fontWeight: '600'
          }, ', ', null, 'hackable', {
            fontWeight: '600'
          }, ', and ', null, 'customizable', {
            fontWeight: '600'
          }, ' - allowing you to quickly build extremely powerful ', null, 'tools', {
            fontWeight: '600'
          }, ', perfectly fitting your workflow and needs.', null],
          width: undefined
        }]
      }), part(Feature, {
        name: 'live programming',
        fill: Color.rgba(255, 255, 255, 0),
        layout: new TilingLayout({
          axis: 'column',
          hugContentsVertically: true
        }),
        submorphs: [{
          name: 'title',
          textAndAttributes: ['🤸', { fontFamily: 'Noto Emoji Color Subset' }, ' Full Stack Live Programming', null]
        }, {
          name: 'description',
          textAndAttributes: ['lively.next', {
            fontColor: Color.rgb(255, 119, 0),
            fontFamily: '\"IBM Plex Mono\"'
          }, ' is...well, ', null, 'alive', {
            fontWeight: '600'
          }, '! We take live programming seriously - ', null, 'evaluate statements anywhere', {
            fontWeight: '600'
          }, ', observe their effect and act accordingly! We provide you with tooling to quickly ', null, 'inspect', {
            fontWeight: '600'
          }, ' the state of objects and patch behavior - ', null, 'all time is runtime', {
            fontWeight: '600'
          }, '. While running in the browser, all of this also works for', null, ' backend scripting', {
            fontWeight: '600'
          }, ' in ', null, 'Node.js', {
            fontFamily: '\"IBM Plex Mono\"'
          }, ' - of course also from within ', null, 'lively.next', {
            fontColor: Color.rgb(255, 119, 0),
            fontFamily: '\"IBM Plex Mono\"'
          }, '.\n', null],
          width: undefined
        }]
      })
    ]
  }]
});
// part(LandingPage).openInWorld()
export const LandingPage = component({
  name: 'page',
  extent: pt(1075, 1461.1),
  layout: new TilingLayout({
    align: 'center',
    axis: 'column',
    axisAlign: 'center',
    hugContentsVertically: true,
    padding: rect(20, 10, 0, 0),
    resizePolicies: [['hero', {
      height: 'fixed',
      width: 'fill'
    }], ['button section', {
      height: 'fixed',
      width: 'fill'
    }], ['features', {
      height: 'fixed',
      width: 'fill'
    }], ['vision', {
      height: 'fixed',
      width: 'fill'
    }]]
  }),
  submorphs: [
    {
      name: 'hero',
      fill: Color.rgba(244, 37, 37, 0),
      extent: pt(1116, 298),
      master: {
        breakpoints: [
          [pt(0, 0), component({
            layout: new TilingLayout({
              align: 'center',
              axisAlign: 'center',
              hugContentsVertically: true,
              axis: 'column',
              padding: rect(20, 20, 0, 0),
              resizePolicies: [['hero wrapper', {
                height: 'fixed',
                width: 'fill'
              }],
              ['productive lively session', { height: 'fixed', width: 'fill' }]],
              spacing: 20
            }),
            submorphs: [
              {
                name: 'hero text wrapper',
                layout: new TilingLayout({
                  axisAlign: 'center',
                  align: 'center'
                }),
                submorphs: [{ name: 'hero text', width: 300 }]
              }
            ]
          })],
          [pt(780, 0), component({
            layout: new TilingLayout({
              align: 'center',
              axisAlign: 'center',
              hugContentsVertically: true,
              padding: rect(20, 20, 0, 0),
              resizePolicies: [['hero text wrapper', {
                height: 'fixed',
                width: 'fill'
              }], ['productive lively session', { height: 'fixed', width: 'fill' }]],
              spacing: 20
            }),
            submorphs: [
              {
                name: 'hero text wrapper',
                layout: new TilingLayout({
                  axisAlign: 'center'
                }),
                submorphs: [{ name: 'hero text', width: 400 }]
              }
            ]
          })]
        ]
      },
      fill: Color.rgba(244, 37, 37, 0),
      extent: pt(1116, 298),
      height: 298,
      borderColor: Color.rgba(23, 160, 251, 0),
      borderWidth: {
        bottom: 2,
        left: 1,
        right: 1,
        top: 1
      },
      position: pt(560, 80),
      submorphs: [part(VideoLooper, {
        name: 'productive lively session',
        layout: new TilingLayout({
          align: 'center',
          hugContentsVertically: true,
          padding: rect(20, 20, 0, 0)
        }),
        viewModel: {
          srcURL: projectAsset('lively_working.mp4')
        },
        master: {
          breakpoints: [
            [pt(0, 0), component({
              submorphs: [
                {
                  name: 'video player',
                  extent: pt(310, 174)
                }
              ]
            })],
            [pt(455, 0), component({
              submorphs: [
                {
                  name: 'video player',
                  extent: pt(450, 253)
                }
              ]
            })]
          ]
        }
      }), {
        name: 'hero text wrapper',
        height: 300,
        fill: Color.transparent,
        submorphs: [{
          type: Text,
          name: 'hero text',
          textAlign: 'justify',
          fontSize: 14,
          selectionMode: 'native',
          textAndAttributes: ['lively.next', {
            fontColor: Color.rgb(255, 119, 0),
            fontWeight: '600',
            fontSize: 16
          }, ' is a personal programming kit.\nIt emphasizes ', { fontSize: 16 }, 'liveness', {
            fontStyle: 'italic',
            fontSize: 16
          }, ', ', null, 'directness', {
            fontStyle: 'italic', fontSize: 16
          }, ' and ', { fontSize: 16 }, 'interactivity', {
            fontStyle: 'italic', fontSize: 16
          }, '. \n\n It combines rich ', null, 'live programming capabilities', {
            fontStyle: 'italic'
          }, ', in the spirit of Smalltalk, with a graphical ', null, 'direct manipulation', {
            fontStyle: 'italic'
          }, ' workflow from current design tools. It seamlessly brigdes these two, allowing for ', null, 'rapid prototyping', {
            fontStyle: 'italic'
          }, ' and', null, ' efficient collaboration', {
            fontStyle: 'italic'
          }, '. \n\nWe aim to bring you an ', null, 'innovative programming experience', {
            fontStyle: 'italic',
            fontWeight: '600'
          }, ' while building an integrated system that brings designer and programmers ', null, 'together', {
            fontColor: Color.rgb(255, 119, 0),
            fontWeight: '600'
          }, '.', null],
          borderColor: Color.rgb(23, 160, 251),
          dynamicCursorColoring: true,
          fill: Color.rgb(255, 255, 255),
          fixedWidth: true,
          lineWrapping: 'by-words'
        }]
      }]
    },
    {
      name: 'button section',
      master: {
        breakpoints: [
          [pt(0, 0), component({
            submorphs: [{
              name: 'try it out button',

              extent: pt(300, 52.8)
            }, {
              name: 'license',
              fontSize: 12
            }]
          })],
          [pt(390, 0), component({
            submorphs: [{
              name: 'try it out button',
              extent: pt(335.5, 52.8)
            }, {
              name: 'license',
              fontSize: 14
            }]
          })]
        ]
      },
      layout: new TilingLayout({
        align: 'center',
        axis: 'column',
        axisAlign: 'center',
        hugContentsVertically: true,
        padding: rect(5, 5, 0, 0),
        spacing: 5
      }),
      submorphs: [{
        name: 'try it out button',
        fill: new LinearGradient({ stops: [{ offset: 0.1473074248342803, color: Color.rgb(255, 119, 0) }, { offset: 1, color: Color.rgba(255, 119, 0, 0.4538) }], vector: rect(0.49999999999999994, 0, 6.123233995736766e-17, 1) }),
        nativeCursor: 'pointer',
        layout: new TilingLayout({
          align: 'center',
          axisAlign: 'center'
        }),
        borderRadius: 5,
        dropShadow: new ShadowObject({ distance: 4.242640687119285, color: Color.rgba(0, 0, 0, 0.62), blur: 8 }),
        submorphs: [{
          type: Text,
          name: 'button label',
          fontWeight: '600',
          fontSize: 32,
          fontColor: Color.rgb(255, 255, 255),
          textAlign: 'center',
          textAndAttributes: ['Try it out!', null],
          reactsToPointer: false,
          dynamicCursorColoring: true,
          fill: Color.rgba(255, 255, 255, 0),
          padding: rect(1, 1, 0, 0),
          position: pt(126.7, 64.9)
        }]
      }, {
        type: Text,
        name: 'license',
        extent: pt(354, 19.6),
        dynamicCursorColoring: true,
        fill: Color.rgba(255, 255, 255, 0),
        textAndAttributes: ['lively.next', {
          fontColor: Color.rgb(255, 119, 0),
          fontFamily: 'IBM Plex Mono'
        }, ' is and always will be free and MIT licensed.', null]

      }]
    }, part(FeatureHolder, {
      name: 'features'
    }), {
      name: 'vision',
      master: {
        breakpoints: [
          [pt(0, 0), component({
            submorphs: [{
              name: 'spacer',
              width: 300
            }]
          })],
          [pt(661, 0), component({
            submorphs: [{
              name: 'spacer',
              width: 620
            }]
          })], [pt(981, 0), component({
            submorphs: [{
              name: 'spacer',
              width: 940
            }]
          })]
        ]
      },
      layout: new TilingLayout({
        axis: 'column',
        axisAlign: 'center',
        hugContentsVertically: true,
        padding: rect(2, 2, 0, 0)
      }),
      submorphs: [{
        name: 'spacer',
        layout: new TilingLayout({
          axis: 'column',
          hugContentsVertically: true,
          resizePolicies: [['content', {
            height: 'fixed',
            width: 'fill'
          }]]
        }),
        submorphs: [{
          type: Text,
          name: 'heading',
          selectionMode: 'native',
          dynamicCursorColoring: true,
          fill: Color.rgb(255, 255, 255),
          fontColor: Color.rgb(255, 119, 0),
          fontSize: 35,
          padding: rect(1, 1, 0, 0),
          position: pt(118, 0),
          textAndAttributes: ['Our Vision', null]
        }, {
          type: Text,
          name: 'content',
          selectionMode: 'native',
          fontSize: 14,
          dynamicCursorColoring: true,
          fill: Color.rgb(255, 255, 255),
          fixedWidth: true,
          lineWrapping: 'by-words',
          position: pt(120, 400),
          textAndAttributes: ['\nThe lively team aims to build a platform to express ', null, '🔗', {
            fontFamily: 'Noto Emoji Color Subset',
            link: 'https://www.ted.com/talks/alan_kay_a_powerful_idea_about_ideas#t-1110785'
          }, ' ', {
            fontFamily: '\"IBM Plex Sans\"',
            link: 'https://www.ted.com/talks/alan_kay_a_powerful_idea_about_ideas#t-1110785'
          }, 'powerful ideas', {
            fontColor: Color.rgb(0, 0, 0),
            link: 'https://www.ted.com/talks/alan_kay_a_powerful_idea_about_ideas#t-1110785',
            textDecoration: 'underline'
          }, ' much in the tradition of original systems and tools that defined the meaning of \"personal computing\". We are inspired, among others, by \n\n- the works and powerful ideas of ', null, '🔗', {
            fontFamily: 'Noto Emoji Color Subset',
            link: 'https://www.youtube.com/watch?v=QQhVQ1UG6aM&t=9s'
          }, ' ', {
            fontFamily: '\"IBM Plex Sans\"',
            link: 'https://www.youtube.com/watch?v=QQhVQ1UG6aM&t=9s'
          }, 'Alan Kay,\n', {
            fontColor: Color.rgb(0, 0, 0),
            link: 'https://www.youtube.com/watch?v=QQhVQ1UG6aM&t=9s',
            textDecoration: 'underline'
          }, '- Doug Engelbarts ', null, '🔗', {
            fontFamily: 'Noto Emoji Color Subset',
            link: 'https://dougengelbart.org/content/view/209/'
          }, ' ', {
            fontFamily: '\"IBM Plex Sans\"',
            link: 'https://dougengelbart.org/content/view/209/'
          }, 'mother of all demos', {
            fontColor: Color.rgb(0, 0, 0),
            link: 'https://dougengelbart.org/content/view/209/',
            textDecoration: 'underline'
          }, ',\n- the flexibility of ', null, '🔗', {
            fontFamily: 'Noto Emoji Color Subset',
            link: 'https://worrydream.com/EarlyHistoryOfSmalltalk/'
          }, ' ', {
            fontFamily: '\"IBM Plex Sans\"',
            link: 'https://worrydream.com/EarlyHistoryOfSmalltalk/'
          }, 'Smalltalk', {
            fontColor: Color.rgb(0, 0, 0),
            link: 'https://worrydream.com/EarlyHistoryOfSmalltalk/',
            textDecoration: 'underline'
          }, ',\n- and original authoring-for-all-tools like Bill Atkinson\'s ', null, '🔗', {
            fontFamily: 'Noto Emoji Color Subset',
            link: 'https://en.wikipedia.org/wiki/HyperCard'
          }, ' ', {
            fontFamily: '\"IBM Plex Sans\"',
            link: 'https://en.wikipedia.org/wiki/HyperCard'
          }, 'HyperCard', {
            fontColor: Color.rgb(0, 0, 0),
            link: 'https://en.wikipedia.org/wiki/HyperCard',
            textDecoration: 'underline'
          }, '.\n\n', null, 'lively.next', {
            fontColor: Color.rgb(255, 119, 0),
            fontFamily: '\"IBM Plex Mono\"'
          }, ' forms a flexible personal computing environment and construction kit.  Yet we hope, that it will just be a stepping stone towards a medium that truly helps us think, learn, do, and create - in the spirit of what Bret Victor calls ', null, '🔗', {
            fontFamily: 'Noto Emoji Color Subset',
            link: 'https://worrydream.com/SeeingSpaces/'
          }, ' ', {
            fontFamily: '\"IBM Plex Sans\"',
            link: 'https://worrydream.com/SeeingSpaces/'
          }, 'Seeing Spaces', {
            fontColor: Color.rgb(0, 0, 0),
            link: 'https://worrydream.com/SeeingSpaces/',
            textDecoration: 'underline'
          }, '.\n\nLively might look different from conventional programming systems but it is based on some of the same ideas and mechanisms than Smalltalk systems introduced over 40 years ago.  Its user interface is a variant of Self\'s ', null, '🔗', {
            fontFamily: 'Noto Emoji Color Subset',
            link: 'http://ftp.squeak.org/docs/Self-4.0-UI-Framework.pdf'
          }, ' ', {
            fontFamily: '\"IBM Plex Sans\"',
            link: 'http://ftp.squeak.org/docs/Self-4.0-UI-Framework.pdf'
          }, 'Morphic', {
            fontColor: Color.rgb(0, 0, 0),
            link: 'http://ftp.squeak.org/docs/Self-4.0-UI-Framework.pdf',
            textDecoration: 'underline'
          }, '.  The goal of the Lively project is to evolve those powerful concepts and combine them with novel ideas to make programming less rigid and narrow. ', null]

        }]
      }]
    }
  ]
});
