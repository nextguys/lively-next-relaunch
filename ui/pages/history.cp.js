import { component, add, without, ViewModel, ConstraintLayout, TilingLayout } from 'lively.morphic';
import { pt, rect, Color } from 'lively.graphics';
import { Ellipse, Image } from 'lively.morphic/morph.js';
import { Text } from 'lively.morphic/text/morph.js';
import { part } from 'lively.morphic/components/core.js';
import { YouTubeEmbed } from 'lively.components/youtube-morph.cp.js';
import { projectAsset } from 'lively.project/helpers.js';
import { num } from 'lively.lang/index.js';

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
    title: 'The first version of LivelyKernel is released to the public. This version is still developed within the context of SUN Labs.',
    pictures: [
      {
        img: projectAsset('lively_kernel.png')
      }
    ]
  },
  {
    date: '2008',
    title: 'Dan Ingalls present the first version of LivelyKernel at Google TechTalks. First implementation of Fabrik for Lively.',
    pictures: [
      {
        yt: 'gGw09RZjQf8'
      }
    ]
  },
  {
    date: '2009',
    title: 'Dan Ingalls and the HPI Software Architecture Group start Collaborating on LivelyKernel. Work on Lively Wiki and Lively Webwerkstatt is started.',
    pictures: [
      {
        img: projectAsset('hpi-lake.jpg'),
        caption: 'The campus of the Hasso Plattner Institute in Potsdam, Germany.'
      }
    ]
  },
  {
    date: '2010',
    title: 'After the acquisition of SUN by Oracle the future of LivelyKernel is in limbo. Funding for LivelyKernel is moved over to SAP Research in Palo Alto.'
  },
  {
    date: '2011',
    title: 'Development of the Lively Debugger is underway with major support from Marko Röder, Christopher Schuster and Robert Krahn.'
  },
  {
    date: '2012',
    title: 'The server side of LivelyKernel is now fully implemented in NodeJS, allowing for flexibel server as well as client side scripting. This fullstack version of LivelyKernel is named Lively-Web.',
    pictures: [
      {
        yt: 'QTJRwKOFddc',
        caption: 'Dan Ingalls presents Lively-Web at JsConf 2012'
      }
    ]
  },
  {
    date: '2013',
    title: 'LivelyKernel Development moves over to the newly formed CDG (Communication Design Group) at SAP. '
  }, {
    date: '2014',
    title: 'Lively4 development is started at HPI by Jens Lincke. LivelyKernel collaborates with University of Victoria to teach students coding in LivelyKernel.'
  },
  {
    date: '2015',
    title: 'CDG becomes part of HARC moving LivelyKernel development under the umbrella of Y-Combinator Research. Robert Krahn starts developing Clopxp a LivelyKernel that revolves around Closure instead of Javascript as its primary language environment.'
  },
  {
    date: '2016',
    title: 'Development for lively.next is started. The idea is to simplify LivelyKernel into modular packages and embrace the ECMAScript Module Syntax.',
    pictures: [{
      img: projectAsset('lively-next-logo.png')
    }]
  },
  {
    date: '2017',
    title: 'Funding for HARC and consequently lively.next stops. Past members of the project proceed to contribute to lively.next in their spare time.'
  },
  {
    date: '2018',
    title: 'Typeshift and EngageLively try to commercialize lively.next and support the continued development financially.'
  },
  {
    date: '2019',
    title: 'Development of the lively.freezer commences. Primariy focus is to provide a bundler for projects in lively.next that allow users to ship applications and make them load fast.'
  },
  {
    date: '2020',
    title: 'BachelorProject between Typeshift and HPI Software Architecture Group develops Qinoq, and interactive tool built ontop of lively.next that allows for non programmers and programmers to collaborate on building Scrollytelling interactives.',
    pictures: [
      {
        yt: 'O7pdYaSdZ3U',
        caption: 'The final presentation of the scrollytelling editor (German)'
      }
    ]
  },
  {
    date: '2021',
    title: ['Typeshift builds a ', null, 'Solar System Interactive', { link: 'https://www.spektrum.de/news/interaktive-planetengrafik-action-im-sonnensystem/1891840', fontWeight: 'bold', fontColor: Color.black }, ' in lively.next for the Science Magazine "Spektrum der Wissenschaft".', null]
  },
  {
    date: '2022',
    title: 'New Funding for lively.next is secured, allowing Linus Hagemann to join the project full time. The new focus of lively.next is to 1.) build a solid versioning system integration. 2.) Create a more rigorous Pull Request based development process and 3.) To implement a fully working version of the new component architecture including reconciliation.'
  },
  {
    date: '2023',
    title: 'Linus Hagemann presents the latest version of lively.next at Froscon in Germany.',
    pictures: [
      {
        yt: 'XaMYx-OCaYo'
      }
    ]
  },
  {
    date: '2024',
    title: 'The new lively.next website launches, written entirely in lively.next itself.'
  }
];

export const ChronoPicture = component({
  extent: pt(429.7, 359.7),
  layout: new TilingLayout({
    axis: 'column',
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
    extent: pt(331.7, 248.6),
    imageUrl: projectAsset('IMG_0466.png'),
    position: pt(-41.1, 32.2)
  }, {
    type: Text,
    name: 'caption',
    textAlign: 'center',
    dynamicCursorColoring: true,
    fill: Color.rgba(255, 255, 255, 0),
    fixedWidth: true,
    fontStyle: 'italic',
    lineWrapping: 'by-words',
    position: pt(-8.5, 46.6),
    textAndAttributes: ['The office space of the ', null, 'LivelyKernel', {
      fontStyle: 'normal',
      fontWeight: '600'
    }, ' ', {
      fontWeight: '600'
    }, 'team at South Park, SF around Summer of 2014. Still funded by SAP at the time, the lively team relocated to San Francisco to pursue the project within the newly established Communications Design Group.', null]
  }]
});

const createChronoPicture = ({ src, caption }) => part(ChronoPicture, {
  fill: Color.transparent,
  submorphs: [
    {
      name: 'picture',
      imageUrl: src
    },
    {
      name: 'caption',
      visible: !!caption,
      textAndAttributes: caption ? [caption, null] : ['', null]
    }
  ]
});

const ChronoVideo = component(ChronoPicture, {
  master: {
    auto: component({
      layout: new TilingLayout({
        axisAlign: 'center',
        axis: 'column',
        resizePolicies: [['video', {
          height: 'fill',
          width: 'fill'
        }], ['caption', {
          height: 'fixed',
          width: 'fill'
        }]]
      })
    }),
    breakpoints: [
      [pt(400, 0), component({
        layout: new TilingLayout({
          axisAlign: 'center',
          axis: 'column',
          resizePolicies: [['video', {
            height: 'fill',
            width: 'fixed'
          }], ['caption', {
            height: 'fixed',
            width: 'fill'
          }]]
        })
      })]
    ]
  },
  submorphs: [
    without('picture'),
    add(part(YouTubeEmbed, {
      name: 'video',
      viewModel: { videoID: 'gGw09RZjQf8' },
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
      textAndAttributes: caption ? [caption, null] : ['', null]
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
    const { date, title, pictures } = this.timestamp;
    dateView.textString = date;
    description.textString = title;
    if (pictures) {
      stepPictures.submorphs = pictures.map(({ img, yt, caption }) => {
        if (img) return createChronoPicture({ caption, src: img });
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
    // this is needed to fix a current rendering bug in the css layouts
    name: 'step pictures wrapper',
    fill: Color.transparent,
    layout: new TilingLayout({
      resizePolicies: [
        ['step pictures', { width: 'fill', height: 'fill' }]
      ]
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

const ChronologicalEntryReverse = component(ChronologicalEntry, {
  rotation: num.toRadians(180.0),
  submorphs: [
    {
      name: 'step pictures wrapper',
      rotation: -num.toRadians(180.0)
    },
    {
      name: 'step description wrapper',
      submorphs: [{
        name: 'step description',
        layout: new TilingLayout({
          axis: 'column',
          axisAlign: 'right',
          hugContentsVertically: true
        }),
        rotation: num.toRadians(180.0)
      }]
    }]
});

const ChronologicalEntryMobile = component(ChronologicalEntry, {
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
  submorphs: [{
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
  }, {
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
  }]
});

class HistoryPageModel extends ViewModel {
  static get properties () {
    return {
      bindings: {
        get () {
          return [{ signal: 'extent', handler: 'relayout' }];
        }
      }
    };
  }

  viewDidLoad () {
    this.ui.chronoStepContainer.submorphs = historyData.map((timestamp, i) => {
      const cpt = i % 2 == 0 ? ChronologicalEntry : ChronologicalEntryReverse;
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

const HistoryPageMobile = component(HistoryPageDesktop, {
  submorphs: [{
    name: 'hero',
    submorphs: [{
      name: 'timeline container',
      layout: new TilingLayout({
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
