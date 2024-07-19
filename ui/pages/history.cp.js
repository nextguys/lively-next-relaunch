import { component, add, without, ViewModel, ConstraintLayout, TilingLayout } from 'lively.morphic';
import { pt, rect, Color } from 'lively.graphics';
import { Ellipse, Image } from 'lively.morphic/morph.js';
import { Text } from 'lively.morphic/text/morph.js';
import { part } from 'lively.morphic/components/core.js';
import { YouTubeEmbed } from 'lively.components/youtube-morph.cp.js';
import { projectAsset } from 'lively.project/helpers.js';
import { obj } from 'lively.lang';

// 2007: The first version of LivelyKernel is released
// 2008: Dan Ingalls presents the LivelyKernel at Google TechTalks
// 2009: Dan Ingalls and the Software Architecture Group start Collaborating on LivelyKernel. Work on Lively Wiki is stared.
// 2009: Sun gets acquired by Oracle, Dan Ingalls moves the Project over to SAP Research in Palo Alto.
// 2010: LivelyKernel moves from a SVG/XML document based scripting system to a HTML5 development environemnt (Lively-Web). Persistence of modules and documents is implemented, the lively server is moved from Apache to NPMJS.
// 2010 (date??): Collaboration with Daimler to utilize LivelyKernel for in car interactive maps.
// 2011: Lively Fabrik is implemented and presented on top of Lively Web.

const historyData = [
  {
    date: '2007',
    title: ['The first version of ', null, 'LivelyKernel', { fontFamily: 'IBM Plex Mono' }, ' is released to the public. Development happened at SUN Labs.', null],
    pictures: [
      {
        img: projectAsset('lively_kernel.png')
      }
    ]
  },
  {
    date: '2008',
    title: ['Dan Ingalls', { fontWeight: 600 }, ' presents the first version of ', null, 'LivelyKernel', { fontFamily: 'IBM Plex Mono' }, ' at "Google TechTalks". First implementation of ', null, 'Fabrik', { link: 'https://ieeexplore.ieee.org/abstract/document/5350243', fontColor: Color.black, textDecoration: 'underline', fontFamily: 'IBM Plex Mono' }, ' for ', null, 'Lively', { fontFamily: 'IBM Plex Mono' }, '.', null],
    pictures: [
      {
        yt: 'gGw09RZjQf8',
        caption: 'Dan\\\'s TechTalk at Google'
      }
    ]
  },
  {
    date: '2009',
    title: ['Dan Ingalls', { fontWeight: 600 }, ' and the ', null, 'HPI Software Architecture Group', { fontWeight: 600, textDecoration: 'underline', fontColor: Color.black, link: 'https://www.hpi.uni-potsdam.de/hirschfeld/' }, ' start Collaborating on ', null, 'LivelyKernel', { fontFamily: 'IBM Plex Mono' }, '. Work on ', null, 'Lively Wiki', { fontFamily: 'IBM Plex Mono', fontStyle: 'italic' }, ' and ', null, 'Lively Webwerkstatt', { fontStyle: 'italic', fontFamily: 'IBM Plex Mono' }, ' is started.', null],
    pictures: [
      {
        img: projectAsset('hpi-lake.jpg'),
        copyright: ['© Jonas Witt', null],
        caption: 'The campus of the Hasso Plattner Institute in Potsdam, Germany.'
      }
    ]
  },
  {
    date: '2010',
    title: ['After the acquisition of SUN by Oracle the future of ', null, 'LivelyKernel', { fontFamily: 'IBM Plex Mono' }, ' is in limbo. Funding for ', null, 'LivelyKernel', { fontFamily: 'IBM Plex Mono' }, ' is moved over to SAP Research in Palo Alto.'],
    pictures: [
      {
        img: projectAsset('palo-alto-labs.jpg'),
        copyright: ['© Robert Krahn', null],
        caption: 'View from the hills behind the office buildings of (at that time) SAP Research Labs in Palo Alto.'
      }
    ]
  },
  {
    date: '2011',
    title: ['Development of a debugger inside of the ', null, 'LivelyKernel', { fontFamily: 'IBM Plex Mono' }, ' is underway with major contributions from ', null, 'Marko Röder, Christopher Schuster and Robert Krahn', { fontWeight: 600 }, '.', null]
  },
  {
    date: '2012',
    title: ['The server side of ', null, 'LivelyKernel', { fontFamily: 'IBM Plex Mono' }, ' is now fully implemented in ', null, 'NodeJS', { fontFamily: 'IBM Plex Mono' }, ', allowing for flexibel server as well as client side scripting. This fullstack version of ', null, 'LivelyKernel', { fontFamily: 'IBM Plex Mono' }, ' is named ', null, 'Lively-Web.', { fontFamily: 'IBM Plex Mono', fontStyle: 'italic' }],
    pictures: [
      {
        yt: 'QTJRwKOFddc',
        caption: 'Dan Ingalls presents Lively-Web at JsConf 2012'
      }
    ]
  },
  {
    date: '2013',
    title: ['LivelyKernel', { fontFamily: 'IBM Plex Mono' }, ' Development moves over to the newly formed CDG (Communication Design Group) at SAP.', null],
    height: 400,
    pictures: [
      {
        img: projectAsset('IMG_0466.png'),
        caption: ['The office space of the ', null, 'LivelyKernel', {
          fontStyle: 'normal',
          fontWeight: '600'
        }, ' ', {
          fontWeight: '600'
        }, 'team at South Park, SF around Summer of 2014. Still funded by SAP at the time, the lively team relocated to San Francisco to pursue the project within the newly established Communications Design Group.', null]
      }
    ]
  }, {
    date: '2014',
    title: ['Lively4', { fontStyle: 'italic', fontFamily: 'IBM Plex Mono', fontColor: Color.black, textDecoration: 'underline', link: 'https://github.com/LivelyKernel/lively4-core' }, ' development is started at HPI by ', null, 'Jens Lincke', { fontWeight: 600 }, '. ', null, 'LivelyKernel', { fontFamily: 'IBM Plex Mono' }, ' collaborates with University of Victoria to teach students coding in ', null, 'LivelyKernel.', { fontFamily: 'IBM Plex Mono' }],
    height: 425,
    pictures: [
      {
        img: projectAsset('IMG_1378.png'),
        copyright: ['© Robert Krahn', null],
        caption: ['Snapshot of the team at South Park during lunch break. This was just before redevelopment took place around San Francisco\\\'s oldest public area in 2016. People from left to right: Astrid Thomschke, Felix Wolff, Robin Schreiber, Marco Röder, Lars Wassermann and Dan Ingalls. (Robert Krahn taking picture, unfortunately not depicted).', null]
      }
    ]
  },
  {
    date: '2015',
    title: ['CDG becomes part of ', null, 'HARC', { fontWeight: 600 }, ' moving ', null, 'LivelyKernel', { fontFamily: 'IBM Plex Mono' }, ' development under the umbrella of ', null, 'Y-Combinator Research', { fontWeight: 600, link: 'https://www.ycombinator.com/blog/harc/', textDecoration: 'underline', fontColor: Color.black }, '. ', null, 'Robert Krahn', { fontWeight: 600 }, ' starts developing ', null, 'Cloxp', { fontStyle: 'italic', fontFamily: 'IBM Plex Mono', fontColor: Color.black, textDecoration: 'underline', link: 'https://cloxp.github.io/cloxp-intro.html' }, ' a ', null, 'LivelyKernel', { fontFamily: 'IBM Plex Mono' }, ' that revolves around ', null, 'Closure', { fontFamily: 'IBM Plex Mono' }, ' instead of ', null, 'Javascript', { fontFamily: 'IBM Plex Mono' }, ' as its primary language environment.', null],
    pictures: [
      {
        img: projectAsset('cloxp-logo.png'),
        copyright: ['© Robert Krahn', null]
      }
    ]
  },
  {
    date: '2016',
    title: ['Development of ', null, 'lively.next', { fontFamily: 'IBM Plex Mono', fontColor: Color.lively }, ' is started. The idea is to simplify ', null, 'LivelyKernel', { fontFamily: 'IBM Plex Mono' }, ' into modular packages and embrace the ', null, 'ECMAScript', { fontFamily: 'IBM Plex Mono' }, ' Module Syntax.', null],
    pictures: [{
      img: projectAsset('lively-next-logo.png')
    }]
  },
  {
    date: '2017',
    title: ['Funding for HARC and consequently ', null, 'lively.next', { fontFamily: 'IBM Plex Mono', fontColor: Color.lively }, ' stops. Past members of the project proceed to contribute to ', null, 'lively.next', { fontFamily: 'IBM Plex Mono', fontColor: Color.lively }, ' in their spare time.', null]
  },
  {
    date: '2018',
    title: ['Typeshift', { link: 'https://typeshift.io', fontColor: Color.black, textDecoration: 'underline', fontWeight: 600 }, ' and ', null, 'EngageLively', { fontWeight: 600 }, ' try to commercialize ', null, 'lively.next', { fontFamily: 'IBM Plex Mono', fontColor: Color.lively }, ' and support the continued development financially.', null]
  },
  {
    date: '2019',
    title: ['Development of the ', null, 'lively.freezer', { fontFamily: 'IBM Plex Mono' }, '. It\\\'s goal is to provide a bundler for projects in ', null, 'lively.next', { fontFamily: 'IBM Plex Mono', fontColor: Color.lively }, ' that allow users to ship applications and make them load fast.', null]
  },
  {
    date: '2020',
    title: ['Bachelor project between ', null, 'Typeshift', { fontWeight: 600 }, ' and ', null, 'HPI Software Architecture Group', { fontWeight: 600 }, ' develops ', null, 'qinoq', { fontFamily: 'IBM Plex Mono' }, ', an interactive tool built on top of ', null, 'lively.next', { fontFamily: 'IBM Plex Mono', fontColor: Color.lively }, ' that allows for non-programmers and programmers to collaborate when building Scrollytelling interactives.', null],
    pictures: [
      {
        yt: 'O7pdYaSdZ3U',
        caption: 'The final presentation of the scrollytelling editor (German)'
      }
    ]
  },
  {
    date: '2022',
    title: ['New Funding for ', null, 'lively.next', { fontFamily: 'IBM Plex Mono', fontColor: Color.lively }, ' is secured, allowing ', null, 'Linus Hagemann', { fontWeight: 600 }, ' to join the project full time, alongside ', null, 'Robin Schreiber', { fontWeight: 600 }, '. The new focus of ', null, 'lively.next', { fontFamily: 'IBM Plex Mono', fontColor: Color.lively }, ' is to 1.) build a solid versioning system integration, 2.) implement a fully working version of the new component architecture including reconciliation, and 3.) make the core stable enough for producitive work.', null]
  },
  {
    date: '2023',
    title: ['Linus Hagemann', { fontWeight: 600 }, ' presents the latest version of ', null, 'lively.next', { fontFamily: 'IBM Plex Mono', fontColor: Color.lively }, ' at FrOSCon \\\'23 in Germany.', null],
    pictures: [
      {
        yt: 'XaMYx-OCaYo'
      }
    ]
  },
  {
    date: '2024',
    title: ['The new ', null, 'lively.next', { fontFamily: 'IBM Plex Mono', fontColor: Color.lively }, ' website launches, written entirely in ', null, 'lively.next', { fontFamily: 'IBM Plex Mono', fontColor: Color.lively }, ' itself.', null]
  }
];

export const ChronoPicture = component({
  extent: pt(767.7, 386.7),
  layout: new TilingLayout({
    axis: 'column',
    axisAlign: 'center',
    resizePolicies: [['picture', {
      height: 'fill',
      width: 'fill'
    }], ['caption', {
      height: 'fixed',
      width: 'fill'
    }]],
    spacing: 5
  }),
  fill: Color.rgba(255, 255, 255, 0),
  submorphs: [{
    type: Image,
    name: 'picture',
    layout: new TilingLayout({
      axisAlign: 'right'
    }),
    ageUrl: projectAsset('IMG_0466.png'),
    position: pt(-41.1, 32.2),
    submorphs: [{
      type: Text,
      name: 'copyright',
      visible: false,
      borderRadius: 29,
      padding: rect(7, 3, -1, 0),
      fontColor: Color.rgb(255, 255, 255),
      dynamicCursorColoring: true,
      fill: Color.rgba(0, 0, 0, 0.5006),
      position: pt(266.2, 226.1),
      textAndAttributes: ['© Robin Schreiber', null]
    }]
  }, {
    type: Text,
    name: 'caption',
    padding: rect(0, 0, 10, 0),
    extent: pt(200, 33.6),
    textAlign: 'center',
    dynamicCursorColoring: true,
    fill: Color.rgba(255, 255, 255, 0),
    fixedWidth: true,
    fontStyle: 'italic',
    lineWrapping: 'by-words',
    selectionMode: 'native',
    position: pt(-8.5, 46.6),
    textAndAttributes: ['The office space of the ', null, 'LivelyKernel', {
      fontStyle: 'normal',
      fontWeight: '600'
    }, ' ', {
      fontWeight: '600'
    }, 'team at South Park, SF around Summer of 2014. Still funded by SAP at the time, the lively team relocated to San Francisco to pursue the project within the newly established Communications Design Group.', null]
  }]
});

const createChronoPicture = ({ src, caption, copyright }) => part(ChronoPicture, {
  fill: Color.transparent,
  submorphs: [
    {
      name: 'picture',
      imageUrl: src,
      submorphs: [
        {
          name: 'copyright',
          visible: !!copyright,
          textAndAttributes: copyright || ['', null]
        }
      ]
    },
    {
      name: 'caption',
      visible: !!caption,
      textAndAttributes: caption ? obj.isString(caption) ? [caption, null] : caption : ['', null]
    }
  ]
});

const ChronoVideo = component(ChronoPicture, {
  layout: new TilingLayout({
    axis: 'column',
    axisAlign: 'center',
    resizePolicies: [['video', {
      height: 'fill',
      width: 'fill'
    }], ['caption', {
      height: 'fixed',
      width: 'fill'
    }]]
  }),
  submorphs: [
    without('picture'),
    add(part(YouTubeEmbed, {
      name: 'video',
      viewModel: { videoID: 'gGw09RZjQf8', maxWidth: '400px' },
      extent: pt(400, 225),
      position: pt(13.1, 265)
    }), 'caption')
  ]
});

const createChronoVideo = ({ src, caption }) => part(ChronoVideo, {
  fill: Color.transparent,
  submorphs: [
    {
      name: 'video',
      viewModel: { videoID: src }
    },
    {
      name: 'caption',
      visible: !!caption,
      textAndAttributes: caption ? obj.isString(caption) ? [caption, null] : caption : ['', null]
    }
  ]
});

class EntryModel extends ViewModel {
  static get properties () {
    return {
      timestamp: {}, // the timestamp data
      align: { defaultValue: 'right' }
    };
  }

  viewDidLoad () {
    const { date: dateView, description, stepPictures, stepPicturesWrapper } = this.ui;
    const { date, title, pictures, height } = this.timestamp;
    dateView.textString = date;
    description.textAndAttributes = title;
    if (pictures) {
      if (height) stepPicturesWrapper.height = height;
      stepPictures.submorphs = pictures.map(({ img, yt, caption, copyright }) => {
        if (img) return createChronoPicture({ caption, src: img, copyright });
        if (yt) return createChronoVideo({ caption, src: yt });
      });
      stepPictures.submorphs.forEach(m => stepPictures.layout.setResizePolicyFor(m, { width: 'fill', height: 'fill' }));
    } else {
      stepPicturesWrapper.height = 10;
    }
  }
}

export const ChronologicalEntry = component({
  defaultViewModel: EntryModel,
  name: 'chronological entry',
  fill: Color.rgba(255, 255, 255, 0),
  layout: new TilingLayout({
    align: 'center',
    axisAlign: 'center',
    hugContentsVertically: true,
    padding: rect(0, 10, 0, 0),
    resizePolicies: [['step pictures wrapper', {
      height: 'fixed',
      width: 'fill'
    }], ['step description wrapper', {
      height: 'fixed',
      width: 'fill'
    }]],
    spacing: 20
  }),
  position: pt(53.8, -2.9),
  extent: pt(1070, 289),
  submorphs: [{
    // this is needed to fix a current rendering bug in the css layouts
    name: 'step pictures wrapper',
    fill: Color.transparent,
    layout: new TilingLayout({
      align: 'right',
      resizePolicies: [['step pictures', {
        height: 'fill',
        width: 'fill'
      }]],
      spacing: 5
    }),
    extent: pt(428, 252.5),
    submorphs: [{
      name: 'step pictures',
      layout: new TilingLayout({
        align: 'center',
        spacing: 10
      }),
      fill: Color.rgba(255, 255, 255, 0)
    }]
  }, {
    type: Ellipse,
    name: 'step marker',
    extent: pt(20, 20),
    fill: Color.rgb(255, 119, 0),
    position: pt(-5, 75)
  }, {
    name: 'step description wrapper',
    layout: new TilingLayout({
      align: 'center',
      axisAlign: 'center',
      hugContentsVertically: true,
      justifySubmorphs: 'spaced'
    }),
    fill: Color.transparent,
    submorphs: [
      {
        type: Ellipse,
        name: 'mobile step marker',
        visible: false,
        extent: pt(20, 20),
        fill: Color.rgb(255, 119, 0),
        position: pt(-5, 75)
      },
      {
        name: 'step description',
        extent: pt(215.4, 69),
        clipMode: 'hidden',
        fill: Color.rgba(255, 255, 255, 0),
        height: 66.5,
        layout: new TilingLayout({
          axis: 'column',
          hugContentsVertically: true
        }),
        position: pt(-692.8, -664.5),
        submorphs: [
          {
            type: Text,
            name: 'date',
            fontFamily: '"Bree Serif"',
            fixedWidth: true,
            extent: pt(203.2, 21.6),
            dynamicCursorColoring: true,
            fill: Color.rgba(255, 255, 255, 0),
            fontSize: 16,
            selectionMode: 'native',
            fontWeight: '700',
            lineWrapping: 'by-words',
            padding: rect(1, 1, 0, 0),
            position: pt(20, 20),
            textAndAttributes: ['1. October 2007', null]
          }, {
            type: Text,
            name: 'description',
            fontSize: 14,
            selectionMode: 'native',
            dynamicCursorColoring: true,
            extent: pt(203.2, 47.3),
            fill: Color.rgba(255, 255, 255, 0),
            fixedWidth: true,
            lineWrapping: 'by-words',
            padding: rect(1, 1, 0, 0),
            position: pt(20, 44),
            textAndAttributes: ['The first version of the Lively Kernel is released to the public.', null]
          }]
      }]
  }]
});

const ChronologicalEntryReverse = component({
  defaultViewModel: EntryModel,
  name: 'chronological entry',
  fill: Color.rgba(255, 255, 255, 0),
  clipMode: 'hidden',
  layout: new TilingLayout({
    align: 'center',
    axisAlign: 'center',
    hugContentsVertically: true,
    padding: rect(0, 10, 0, 0),
    resizePolicies: [['step pictures wrapper', {
      height: 'fixed',
      width: 'fill'
    }], ['step description wrapper', {
      height: 'fixed',
      width: 'fill'
    }]],
    spacing: 20
  }),
  position: pt(53.8, -2.9),
  extent: pt(1070, 289),
  submorphs: [{
    name: 'step description wrapper',
    layout: new TilingLayout({
      align: 'right',
      axisAlign: 'center',
      hugContentsVertically: true
    }),
    fill: Color.transparent,
    submorphs: [
      {
        type: Ellipse,
        name: 'mobile step marker',
        visible: false,
        extent: pt(20, 20),
        fill: Color.rgb(255, 119, 0),
        position: pt(-5, 75)
      },
      {
        name: 'step description',
        extent: pt(215.4, 69),
        clipMode: 'hidden',
        fill: Color.rgba(255, 255, 255, 0),
        height: 66.5,
        layout: new TilingLayout({
          axis: 'column',
          hugContentsVertically: true
        }),
        position: pt(-692.8, -664.5),
        submorphs: [
          {
            type: Text,
            name: 'date',
            fontFamily: '"Bree Serif"',
            fixedWidth: true,
            extent: pt(203.2, 21.6),
            dynamicCursorColoring: true,
            fill: Color.rgba(255, 255, 255, 0),
            fontSize: 16,
            selectionMode: 'native',
            fontWeight: '700',
            lineWrapping: 'by-words',
            padding: rect(1, 1, 0, 0),
            position: pt(20, 20),
            textAndAttributes: ['1. October 2007', null]
          }, {
            type: Text,
            name: 'description',
            fontSize: 14,
            selectionMode: 'native',
            dynamicCursorColoring: true,
            extent: pt(203.2, 47.3),
            fill: Color.rgba(255, 255, 255, 0),
            fixedWidth: true,
            lineWrapping: 'by-words',
            padding: rect(1, 1, 0, 0),
            position: pt(20, 44),
            textAndAttributes: ['The first version of the Lively Kernel is released to the public.', null]
          }]
      }]
  }, {
    type: Ellipse,
    name: 'step marker',
    extent: pt(20, 20),
    fill: Color.rgb(255, 119, 0),
    position: pt(-5, 75)
  }, {
    // this is needed to fix a current rendering bug in the css layouts
    name: 'step pictures wrapper',
    position: pt(-505.5, -24.2),
    fill: Color.transparent,
    layout: new TilingLayout({
      resizePolicies: [['step pictures', {
        height: 'fill',
        width: 'fill'
      }]],
      spacing: 5
    }),
    extent: pt(428, 252.5),
    submorphs: [{
      name: 'step pictures',
      layout: new TilingLayout({
        spacing: 10
      }),
      fill: Color.rgba(255, 255, 255, 0)
    }]
  }]
});

const ChronologicalEntryMobile = component(ChronologicalEntryReverse, {
  rotation: 0,
  layout: new TilingLayout({
    align: 'right',
    axis: 'column',
    axisAlign: 'center',
    hugContentsVertically: true,
    padding: rect(15, 10, -15, 0),
    resizePolicies: [['step pictures wrapper', {
      height: 'fixed',
      width: 'fill'
    }], ['step description wrapper', {
      height: 'fixed',
      width: 'fill'
    }]],
    spacing: 20
  }),
  extent: pt(300, 358.1),
  submorphs: [{
    name: 'step description wrapper',
    layout: new TilingLayout({
      axisAlign: 'center',
      hugContentsVertically: true,
      spacing: 20
    }),
    extent: pt(10, 57),
    submorphs: [{
      name: 'mobile step marker',
      visible: true
    }]
  }, {
    name: 'step pictures wrapper',
    visible: true,
    layout: new TilingLayout({
      align: 'right',
      padding: rect(30, 0, -20, 0),
      resizePolicies: [['step pictures', {
        height: 'fill',
        width: 'fill'
      }]]
    })
  }, {
    name: 'step marker',
    visible: false
  }]
});

class HistoryPageModel extends ViewModel {
  static get properties () {
    return {
      expose: { get () { return ['relayout']; } },
      bindings: {
        get () {
          return [{ signal: 'extent', handler: 'relayout' }];
        }
      },
      mobile: { defaultValue: false }
    };
  }

  viewDidLoad () {
    this.ui.chronoStepContainer.submorphs = historyData.map((timestamp, i) => {
      let cpt;
      if (this.mobile) cpt = ChronologicalEntryReverse;
      else cpt = i % 2 === 0 ? ChronologicalEntry : ChronologicalEntryReverse;
      return part(cpt, {
        master: {
          breakpoints: [
            [pt(0, 0), ChronologicalEntryMobile],
            [pt(500, 0), cpt]
          ]
        },
        viewModel: { timestamp }
      });
    });
    this.ui.chronoStepContainer.submorphs.forEach(m => {
      this.ui.chronoStepContainer.layout.setResizePolicyFor(m, { width: 'fill', height: 'fixed' });
    });
    // determine height of hero based on the height of the chronological entries
    this.relayout();
  }

  relayout () {
    this.ui.hero.height = this.ui.chronoStepContainer.submorphBounds().height;
  }
}

export const HistoryPageDesktop = component({
  name: 'page',
  defaultViewModel: HistoryPageModel,
  extent: pt(900, 4002),
  master: {
    auto: component({
      layout: new TilingLayout({
        axis: 'column',
        axisAlign: 'center',
        hugContentsVertically: true,
        resizePolicies: [
          ['hero', { width: 'fill', height: 'fixed' }]
        ]
      })
    }),
    breakpoints: [
      [pt(1000, 0), component({
        layout: new TilingLayout({
          axis: 'column',
          axisAlign: 'center',
          hugContentsVertically: true
        })
      })]
    ]
  },
  submorphs: [
    {
      name: 'hero',
      extent: pt(900, 4000),
      layout: new ConstraintLayout({
        lastExtent: {
          x: 900,
          y: 4000
        },
        reactToSubmorphAnimations: false,
        submorphSettings: [['timeline container', {
          x: 'resize',
          y: 'resize'
        }], ['chrono step container', {
          x: 'resize',
          y: 'fixed'
        }]]
      }),
      submorphs: [
        {
          name: 'timeline container',
          layout: new TilingLayout({
            axis: 'column',
            axisAlign: 'center',
            resizePolicies: [['timeline', {
              height: 'fill',
              width: 'fixed'
            }]]
          }),
          extent: pt(900, 4000),
          submorphs: [
            {
              name: 'timeline',
              position: pt(445.2, -4.7),
              borderRadius: 10,
              extent: pt(9.5, 4000),
              fill: Color.rgb(0, 0, 0)
            }]
        }, {
          name: 'chrono step container',
          layout: new TilingLayout({
            axis: 'column',
            axisAlign: 'right'
          }),
          extent: pt(900, 2000),
          fill: Color.rgba(255, 255, 255, 0)
        }
      ]
    }
  ]
});

export const HistoryPageMobile = component(HistoryPageDesktop, {
  extent: pt(320, 5110),
  viewModel: { mobile: true },
  submorphs: [{
    name: 'hero',
    submorphs: [{
      name: 'timeline container',
      layout: new TilingLayout({
        hugContentsVertically: true,
        axis: 'column',
        padding: rect(20, 0, -20, 0),
        resizePolicies: [['timeline', {
          height: 'fill',
          width: 'fixed'
        }]]
      })
    }]
  }]
});

// part(HistoryPage).openInWorld()
export const HistoryPage = component(HistoryPageDesktop, {
  clipMode: 'hidden',
  master: {
    breakpoints: [
      [pt(0, 0), HistoryPageMobile],
      [pt(500, 0), HistoryPageDesktop]
    ]
  },
  submorphs: [{
    name: 'hero'
  }]
});
