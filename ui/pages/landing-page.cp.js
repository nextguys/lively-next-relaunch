import { TilingLayout, part, component, Text, Image } from 'lively.morphic';
import { Color, rect, pt } from 'lively.graphics';

const Feature = component({
  name: 'feature',
  layout: new TilingLayout({
    axis: 'column',
    hugContentsVertically: true
  }),
  fill: Color.rgba(255, 255, 255, 0),
  extent: pt(336.5, 176),
  submorphs: [{
    type: Text,
    name: 'title',
    textAlign: 'center',
    height: 20.296875,
    fontColor: Color.rgb(255, 119, 0),
    fontWeight: '600',
    textAndAttributes: ['Building Together', null],
    dynamicCursorColoring: true,
    fill: Color.rgb(255, 255, 255),
    padding: rect(1, 1, 0, 0)
  }, {
    type: Text,
    name: 'description',
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
    extent: pt(236.5, 132),
    fill: Color.rgb(255, 255, 255),
    lineWrapping: 'by-words',
    padding: rect(1, 1, 0, 0),
    position: pt(1124, 644)
  }]
});

const FeatureHolder = component({
  name: 'features shoutout',
  layout: new TilingLayout({
    axis: 'column',
    padding: rect(20, 20, 0, 0),
    resizePolicies: [['top part', {
      height: 'fixed',
      width: 'fill'
    }], ['bottom part', {
      height: 'fixed',
      width: 'fill'
    }]],
    spacing: 20
  }),
  extent: pt(835.5, 387),
  submorphs: [{
    name: 'top part',
    layout: new TilingLayout({}),
    submorphs: [
      part(Feature, {
        name: 'building together',
        extent: pt(237.5, 129),
        submorphs: [
          {
            name: 'title',
            textAndAttributes: ['👪', { fontFamily: 'Noto Emoji Color' }, ' Building Together', null],
            extent: pt(52, 52)
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
        extent: pt(237.5, 0),
        submorphs: [{
          name: 'title',
          textAndAttributes: ['🔁', { fontFamily: 'Noto Emoji Color' }, ' Powerful Component System', null]
        }, {
          name: 'description',
          extent: pt(236.5, 89),
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
        extent: pt(237.5, 129),
        submorphs: [
          {
            name: 'title',
            textAndAttributes: ['🖨️', { fontFamily: 'Noto Emoji Color' }, ' Code Generation That Just Works', null],
            extent: pt(13, 422)
          },
          {
            name: 'description',
            extent: pt(236.5, 72),
            textAndAttributes: ['Components', {
              fontFamily: '\"IBM Plex Mono\"'
            }, ' can be edited visually or by writing code. Both options are equally powerful and ', null, 'code is generated and kept in sync', {
              fontWeight: '600'
            }, ' for all changes made visually. ', null]
          }]
      })
    ]
  }, {
    name: 'bottom part',
    layout: new TilingLayout({}),
    submorphs: [
      part(Feature, {
        name: 'batteries included',
        extent: pt(237.5, 0),
        submorphs: [{
          name: 'title',
          textAndAttributes: ['🔋️', { fontFamily: 'Noto Emoji Color' }, ' Batteries Included', null]
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
        extent: pt(237.5, 0),
        fill: Color.rgba(255, 255, 255, 0),
        layout: new TilingLayout({
          axis: 'column',
          hugContentsVertically: true
        }),
        submorphs: [{
          name: 'title',
          textAndAttributes: ['🎨️', { fontFamily: 'Noto Emoji Color' }, ' Make it Yours', null]
        }, {
          name: 'description',
          extent: pt(236.5, 139),
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
        extent: pt(237.5, 0),
        fill: Color.rgba(255, 255, 255, 0),
        layout: new TilingLayout({
          axis: 'column',
          hugContentsHorizontally: true,
          hugContentsVertically: true
        }),
        submorphs: [{
          name: 'title',
          textAndAttributes: ['🤸', { fontFamily: 'Noto Emoji Color' }, ' Live Programming throughout the whole Stack', null]
        }, {
          name: 'description',
          extent: pt(236.5, 192),
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

export const LandingPage = component({
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
      fill: Color.rgba(244, 37, 37, 0),
      extent: pt(1116, 298),
      master: {
        breakpoints: [
          [pt(0, 0), component({
            layout: new TilingLayout({
              axis: 'column',
              align: 'center',
              axisAlign: 'center',
              padding: rect(20, 20, 0, 0),
              hugContentsVertically: true,
              spacing: 20
            })
          })],
          [pt(1100, 0), component({
            layout: new TilingLayout({
              align: 'center',
              axisAlign: 'center',
              padding: rect(20, 20, 0, 0),
              hugContentsVertically: true,
              spacing: 20
            })
          })]
        ]
      },
      height: 298,
      borderColor: Color.rgba(23, 160, 251, 0),
      borderWidth: {
        bottom: 2,
        left: 1,
        right: 1,
        top: 1
      },
      position: pt(560, 80),
      submorphs: [{
        type: Image,
        name: 'productive lively session',
        borderStyle: 'none',
        borderColor: Color.rgb(23, 160, 251),
        borderWidth: 1,
        extent: pt(551, 364),
        fill: Color.rgba(255, 255, 255, 0),
        imageUrl: 'http://localhost:9011/local_projects/nextguys--lively-next-relaunch/assets/lively_while_working.png',
        position: pt(43.5, 0)
      }, {
        type: Text,
        name: 'hero text',
        textAndAttributes: ['lively.next', {
          fontColor: Color.rgb(255, 119, 0),
          fontWeight: '600'
        }, ' is a personal programming kit.\nIt emphasizes ', null, 'liveness', {
          fontStyle: 'italic'
        }, ', ', null, 'directness', {
          fontStyle: 'italic'
        }, ' and ', null, 'interactivity', {
          fontStyle: 'italic'
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
        extent: pt(487.5, 158.5),
        fill: Color.rgb(255, 255, 255),
        fixedHeight: true,
        fixedWidth: true,
        lineWrapping: 'by-words',
        padding: rect(1, 1, 0, 0),
        position: pt(615.5, 82.5)
      }]
    },
    part(FeatureHolder, {
      name: 'features',
      layout: new TilingLayout({
        axis: 'column',
        axisAlign: 'center',
        padding: rect(20, 20, 0, 0),
        resizePolicies: [['top part', {
          height: 'fixed',
          width: 'fill'
        }], ['bottom part', {
          height: 'fixed',
          width: 'fill'
        }]],
        spacing: 20
      }),
      submorphs: [{
        name: 'top part',
        layout: new TilingLayout({
          align: 'center',
          justifySubmorphs: 'spaced'
        })
      }, {
        name: 'bottom part',
        layout: new TilingLayout({
          align: 'center',
          justifySubmorphs: 'spaced'
        })
      }]
    }), {
      name: 'vision',
      extent: pt(836, 214.5),
      layout: new TilingLayout({
        axis: 'column',
        padding: rect(20, 20, 0, 0),
        resizePolicies: [['content', {
          height: 'fixed',
          width: 'fill'
        }]]
      }),
      submorphs: [{
        type: Text,
        name: 'heading',
        dynamicCursorColoring: true,
        fill: Color.rgb(255, 255, 255),
        fontColor: Color.rgb(255, 119, 0),
        fontSize: 35,
        padding: rect(1, 1, 0, 0),
        position: pt(20, 20),
        textAndAttributes: ['Our Vision', null]
      }, {
        type: Text,
        name: 'content',
        height: 204,
        styleClasses: ['dashed'],
        dynamicCursorColoring: true,
        fill: Color.rgb(255, 255, 255),
        fixedWidth: true,
        lineWrapping: 'by-words',
        padding: rect(1, 1, 0, 0),
        position: pt(20, 71),
        textAndAttributes: ['The lively aims at building a platform to express 🔗', {
          fontColor: Color.rgb(0, 0, 0)
        }, 'powerful ideas', {
          fontColor: Color.rgb(0, 0, 0),
          link: 'https://www.ted.com/talks/alan_kay_a_powerful_idea_about_ideas#t-1110785'
        }, ' much in the tradition of 🔗', null, 'original', {
          fontColor: Color.rgb(0, 0, 0),
          link: 'https://dougengelbart.org/content/view/209/',
          textDecoration: 'none'
        }, ' 🔗 ', {
          fontColor: Color.rgb(0, 0, 0),
          textDecoration: 'none'
        }, 'systems', {
          fontColor: Color.rgb(0, 0, 0),
          link: 'https://worrydream.com/EarlyHistoryOfSmalltalk/',
          textDecoration: 'none'
        }, ' 🔗 ', {
          fontColor: Color.rgb(0, 0, 0),
          textDecoration: 'none'
        }, ',and', {
          fontColor: Color.rgb(0, 0, 0),
          link: 'https://www.youtube.com/watch?v=QQhVQ1UG6aM&t=9s',
          textDecoration: 'none'
        }, ' 🔗 ', {
          fontColor: Color.rgb(0, 0, 0),
          textDecoration: 'none'
        }, 'tools', {
          fontColor: Color.rgb(0, 0, 0),
          link: 'https://en.wikipedia.org/wiki/HyperCard',
          textDecoration: 'none'
        }, ' that defined the meaning of \"personal computing\". We are inspired, among others, by \n- the works and powerful ideas of Alan Kay,\n- Doug Engelbarts mother of all demos,\n- the flexibility of Smalltalk,\n- and original authoring-for-all-tools like Bill Atkinson\'s HyperCard.\nougl Enge  lively.next forms a flexible personal computing environment and construction kit.  Yet we hope, that it will just be a stepping stone towards a medium that truly helps us think, learn, do, and create - in the spirit of what Bret Victor calls Seeing Spaces.\n\nLively might look different from conventional programming systems but it is based on some of the same ideas and mechanisms than Smalltalk systems introduced over 40 years ago.  Its user interface is a variant of Self\'s ', null, 'Morphic', {
          fontColor: Color.rgb(0, 0, 0),
          link: 'http://ftp.squeak.org/docs/Self-4.0-UI-Framework.pdf'
        }, '.  The goal of the Lively project is to evolve those powerful concepts and combine them with novel ideas to make programming less rigid and narrow. ', null]
      }]
    }
  ]
});
