import { component, without, add, ViewModel, TilingLayout } from 'lively.morphic';
import { pt, rect } from 'lively.graphics/geometry-2d.js';
import { Color } from 'lively.graphics/color.js';
import { Text } from 'lively.morphic/text/morph.js';
import { HTMLMorph } from 'lively.morphic/html-morph.js';
import { connect } from 'lively.bindings';
import { part } from 'lively.morphic/components/core.js';
import { PaginationNavigator } from './a-morph.cp.js';
import { PolicyApplicator } from 'lively.morphic/components/policy.js';

import { BlogModel } from './blog.js';

const TopSpacer = component({
  name: 'top spacer',
  borderColor: Color.rgb(23, 160, 251),
  master: {
    breakpoints: [
      // TODO: make this viewport dependent?
      [pt(0, 0), new PolicyApplicator({ height: 50 })],
      [pt(550, 0), new PolicyApplicator({ height: 100 })]
    ]
  }
});
const GrowingBlog = component({
  extent: pt(995, 828),
  defaultViewModel: BlogModel,
  layout: new TilingLayout({
    align: 'center',
    axis: 'column',
    axisAlign: 'center',
    resizePolicies: [['top spacer', {
      height: 'fixed',
      width: 'fill'
    }], ['entry area', {
      height: 'fill',
      width: 'fill'
    }]],
    spacing: 20
  }),
  submorphs: [part(TopSpacer, {
    name: 'top spacer'
  }), {
    name: 'entry area',
    borderWidth: 4,
    layout: new TilingLayout({
      axis: 'column',
      spacing: 5
    }),
    borderColor: Color.rgb(0, 96, 160),
    extent: pt(996.5, 748),
    position: pt(-112, 24)
  }, part(PaginationNavigator, {
    name: 'pagination navigator'
  })]
});

export const PreviewPage = component({
  name: 'preview page',
  fill: Color.transparent,
  clipMode: 'hidden',
  layout: new TilingLayout({
    axis: 'column'
  }),
  opcaity: 0
});

export const FixedBlog = component(GrowingBlog, {
  layout: new TilingLayout({
    align: 'center',
    axis: 'column',
    axisAlign: 'center',
    resizePolicies: [['entry area', {
      height: 'fill',
      width: 'fixed'
    }]],
    spacing: 20
  })
});

export const Blog = component(GrowingBlog, {
  master: {
    breakpoints: [
      [pt(0, 0), GrowingBlog],
      [pt(1200, 0), FixedBlog]
    ]
  },
  respondsToVisibleWindow: true,
  borderWidth: 3,
  borderColor: Color.rgb(255, 112, 0),
  clipMode: 'auto'
});

class BlogEntryPreviewModel extends ViewModel {
  static get properties () {
    return {
      blog: {},
      entry: {},
      date: {},
      abstract: {},
      title: {},
      author: {},
      content: {},
      bindings: {
        get () {
          return [
            { target: 'continue reading', signal: 'onMouseDown', handler: 'openEntry' }
          ];
        }
      }
    };
  }

  openEntry () {
    this.blog.openEntry(this.entry);
  }

  viewDidLoad () {
    const { author, date, abstract, title } = this.ui;
    author.textString = this.author;
    // TODO: should this be textandattributes?
    abstract.textString = this.abstract;
    title.textString = this.title;
    date.textString = this.date;
  }
}
class BlogEntryModel extends ViewModel {
  static get properties () {
    return {
      blog: {},
      date: {},
      content: {},
      title: {},
      author: {},
      bindings: {
        get () {
          return [
            { target: 'back button', signal: 'onMouseDown', handler: 'remove' }
          ];
        }

      }
    };
  }

  remove () {
    this.blog.resetURL();
    this.view.remove();
  }

  viewDidLoad () {
    connect(this.blog, 'closeAllEntries', '() => this.blog.closeEntry(this.entry)');
    const { author, date, content } = this.ui;
    author.textString = this.author;
    // TODO: needs to trigger an actual markdown rerender
    // once we have the markdown support fleshed out
    content.html = this.content;
    // FIXME: this is a weird bug regarding the ui getter in frozen worlds
    this.view.get('title').textString = this.title;
    date.textString = this.date;
  }
}
export const BlogEntryPreview = component({
  defaultViewModel: BlogEntryPreviewModel,
  clipMode: 'hidden',
  extent: pt(582, 245.5),
  layout: new TilingLayout({
    axis: 'column',
    axisAlign: 'right',
    hugContentsVertically: true,
    padding: rect(20, 0, 0, 0),
    resizePolicies: [
      [
        'header wrapper',
        {
          height: 'fixed',
          width: 'fill'
        }
      ],
      [
        'seperator',
        {
          height: 'fixed',
          width: 'fill'
        }
      ],
      [
        'abstract',
        {
          height: 'fixed',
          width: 'fill'
        }
      ]
    ]
  }),
  submorphs: [
    {
      name: 'header wrapper',
      clipMode: 'hidden',
      fill: Color.rgba(255, 255, 255, 0),
      layout: new TilingLayout({
        axisAlign: 'center',
        justifySubmorphs: 'spaced',
        padding: rect(0, 0, 0, 20),
        hugContentsVertically: true,
        resizePolicies: [['title', {
          height: 'fixed',
          width: 'fill'
        }]]
      }),
      height: 10,
      position: pt(-1.5, 0.5),
      borderColor: Color.rgb(23, 160, 251),
      submorphs: [
        {
          type: Text,
          name: 'title',
          lineWrapping: 'by-words',
          fixedWidth: true,
          fontSize: 30,
          fontWeight: '700',
          fontFamily: '"Bree Serif"',
          dynamicCursorColoring: true,
          fill: Color.rgba(255, 255, 255, 0),
          position: pt(29, 40),
          textAndAttributes: [
            'Title of the Post',
            null
          ]
        },
        {
          name: 'meta wrapper',
          clipMode: 'hidden',
          layout: new TilingLayout({
            align: 'center',
            axisAlign: 'center',
            padding: rect(0, 2, 0, -2)
          }),
          fill: Color.rgba(152, 152, 152, 0.4049),
          borderRadius: 30,
          borderColor: Color.rgb(23, 160, 251),
          extent: pt(186, 25),
          position: pt(-90, 30),
          submorphs: [
            {
              type: Text,
              name: 'date',
              fontWeight: '600',
              borderColor: Color.rgb(23, 160, 251),
              dynamicCursorColoring: true,
              fill: Color.rgba(255, 255, 255, 0),
              lineWrapping: 'by-words',
              padding: rect(1, 1, 0, 0),
              position: pt(20.5, 36.3),
              textAndAttributes: [
                '05.03.2024',
                null
              ]
            },
            {
              type: Text,
              name: 'aText_2',
              borderColor: Color.rgb(23, 160, 251),
              dynamicCursorColoring: true,
              fill: Color.rgba(255, 255, 255, 0),
              lineWrapping: 'by-words',
              padding: rect(1, 1, 0, 0),
              position: pt(-15, 25),
              textAndAttributes: [
                'by',
                null
              ]
            },
            {
              type: Text,
              name: 'author',
              fontWeight: '600',
              borderColor: Color.rgb(23, 160, 251),
              dynamicCursorColoring: true,
              fill: Color.rgba(255, 255, 255, 0),
              lineWrapping: 'by-words',
              padding: rect(1, 1, 0, 0),
              position: pt(-18, 24),
              textAndAttributes: [
                '@merryman',
                null
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'seperator',
      height: 3,
      borderColor: Color.rgb(23, 160, 251),
      fill: Color.lively,
      position: pt(-126, 28)
    },
    {
      type: Text,
      name: 'abstract',
      extent: pt(540, 90.5),
      clipMode: 'hidden',
      height: 90.5,
      borderColor: Color.rgb(23, 160, 251),
      dynamicCursorColoring: true,
      fill: Color.rgb(255, 255, 255),
      fixedHeight: true,
      fixedWidth: true,
      lineWrapping: 'by-words',
      padding: rect(1, 20, 0, -19),
      position: pt(-198, 22),
      textAndAttributes: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst vestibulum rhoncus est. Tempus iaculis urna id volutpat lacus laoreet. A cras semper auctor neque. Amet massa vitae tortor condimentum. Tellus at urna condimentum mattis pellentesque. Integer eget aliquet nibh praesent tristique magna sit amet purus. Enim nec dui nunc mattis enim ut tellus. Mauris augue neque gravida in fermentum et sollicitudin. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Vivamus arcu felis bibendum ut tristique et egestas quis. Cras pulvinar mattis nunc sed blandit libero volutpat. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Consequat interdum varius sit amet mattis vulputate. At elementum eu facilisis sed odio morbi quis commodo.',
        null
      ]
    },
    {
      name: 'continue reading wrapper',
      layout: new TilingLayout({
        align: 'right',
        axisAlign: 'center',
        hugContentsHorizontally: true
      }),
      borderColor: Color.rgb(23, 160, 251),
      extent: pt(155.5, 20),
      position: pt(-40, 23),
      submorphs: [{
        type: Text,
        name: 'continue reading',
        fontWeight: '600',
        dynamicCursorColoring: true,
        fill: Color.rgba(255, 255, 255, 0),
        position: pt(23.8, 35),
        textAndAttributes: [
          '>> ',
          { textDecoration: 'none' },
          'Continue Reading',
          { textDecoration: 'underline' }
        ]
      }]
    }
  ]
});

export const BlogEntry = component(BlogEntryPreview, {
  name: 'blog entry',
  defaultViewModel: BlogEntryModel,
  extent: pt(654, 688.5),
  layout: new TilingLayout({
    align: 'right',
    axis: 'column',
    padding: rect(20, 0, 0, 20),
    resizePolicies: [['header wrapper', {
      height: 'fixed',
      width: 'fill'
    }], ['seperator', {
      height: 'fixed',
      width: 'fill'
    }], ['content', {
      height: 'fill',
      width: 'fill'
    }]]
  }),
  position: pt(369, 153.8),
  submorphs: [{
    name: 'header wrapper',
    layout: new TilingLayout({
      align: 'center',
      axisAlign: 'center',
      hugContentsVertically: true,
      justifySubmorphs: 'spaced',
      padding: rect(0, 0, 0, 20),
      resizePolicies: [['title wrapper', {
        height: 'fixed',
        width: 'fill'
      }]]
    }),
    submorphs: [without('title'), add({
      name: 'title wrapper',
      borderColor: Color.rgb(23, 160, 251),
      extent: pt(182, 69),
      fill: Color.rgba(200, 74, 74, 0),
      layout: new TilingLayout({
        axisAlign: 'center',
        hugContentsHorizontally: true,
        hugContentsVertically: true,
        resizePolicies: [['title', {
          height: 'fixed',
          width: 'fill'
        }]]
      }),
      submorphs: [{
        type: Text,
        name: 'back button',
        borderColor: Color.rgb(23, 160, 251),
        dynamicCursorColoring: true,
        extent: pt(45, 52),
        fill: Color.rgba(255, 255, 255, 0),
        fixedHeight: true,
        fixedWidth: true,
        fontSize: 36,
        lineWrapping: 'by-words',
        padding: rect(1, 9, 0, -8),
        textAndAttributes: ['', {
          fontFamily: 'Material Icons',
          fontWeight: '900'
        }, ' ', {}]
      }, {
        type: Text,
        name: 'title',
        textAndAttributes: ['undefined', null]
      }]
    }, 'meta wrapper'), {
      name: 'meta wrapper',
      submorphs: [{
        name: 'date',
        textAndAttributes: ['undefined', null]
      }, {
        name: 'author',
        textAndAttributes: ['undefined', null]
      }]
    }]
  }, {
    name: 'seperator',
    height: 3
  }, add({
    // TODO: extract this into a markdown morph
    type: HTMLMorph,
    name: 'content',
    clipMode: 'auto',
    borderColor: Color.rgb(23, 160, 251),
    styleClasses: ['markdown']
  }), without('abstract'), without('continue reading wrapper')]
});
