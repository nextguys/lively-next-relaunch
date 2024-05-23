import { component, without, add, ViewModel, TilingLayout } from 'lively.morphic';
import { pt, rect } from 'lively.graphics/geometry-2d.js';
import { Color } from 'lively.graphics/color.js';
import { Text } from 'lively.morphic/text/morph.js';
import { HTMLMorph } from 'lively.morphic/html-morph.js';
import { connect } from 'lively.bindings';
import { part } from 'lively.morphic/components/core.js';
import { PaginationNavigator } from './pagination-navigator.cp.js';

import { entries } from '../assets/articles/entries.js';

const ENTRIES_PER_PAGE = 5;

export const PreviewPage = component({
  name: 'preview page',
  fill: Color.transparent,
  clipMode: 'hidden',
  layout: new TilingLayout({
    axis: 'column',
    hugContentsVertically: true,
    hugContentsHorizontally: true
  }),
  opcaity: 0
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
  borderColor: Color.rgb(166, 166, 166),
  borderWidth: 1,
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
        hugContentsVertically: true,
        justifySubmorphs: 'spaced',
        padding: rect(0, 0, 0, 20),
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
            hugContentsHorizontally: true,
            padding: rect(3, 3, 0, 0)
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

export class BlogModel extends ViewModel {
  static get properties () {
    return {
      page: {
        defaultValue: 1
      },
      pageMorphs: {
        defaultValue: []
      },
      bindings: {
        get () {
          return [
            { target: 'pagination navigator', signal: 'changedPage', handler: 'pageChanged' },
            { signal: 'remove', handler: 'remove' }
          ];
        }
      },
      expose: {
        get () {
          return ['relayout'];
        }
      }
    };
  }

  pageChanged (page) {
    this.ui.paginationNavigator.setPage(page);
    this.ui.entryArea.submorphs = [];
    this.ui.entryArea.addMorph(this.pageMorphs[page - 1]);

    this.ui.entryArea.layout.setResizePolicyFor(this.pageMorphs[page - 1], { width: 'fill', height: 'fixed' });
  }

  remove () {
    this.pageMorphs.forEach(p => p.remove());
  }

  async viewDidLoad () {
    await this.view.whenRendered();
    await this.prepareEntryPreviews();

    this.ui.paginationNavigator.maxNumberOfPages = Math.ceil(entries.length / ENTRIES_PER_PAGE);
  }

  openEntry (entry) {
    const fullArticle = part(BlogEntry, {
      extent: this.view.extent,
      position: this.view.position,
      viewModel: {
        blog: this,
        author: entry.author,
        abstract: entry.abstract,
        title: entry.title,
        date: entry.date,
        content: entry.content
      }
    });
    this.ui.entryArea.submorphs = [];
    this.ui.entryArea.addMorph(fullArticle);
    // TODO
  // this.router.setHash(entry.slug);
  }

  async prepareEntryPreviews () {
    debugger;
    const pages = Math.ceil(entries.length / ENTRIES_PER_PAGE);
    for (let p = 1; p <= pages; p++) {
      const pageMorph = part(PreviewPage, {
        name: `page ${p}`,
        extent: this.ui.entryArea.extent,
        position: this.ui.entryArea.position
      });
      entries/* .slice(p * ENTRIES_PER_PAGE - 1) */.forEach((entry, i) => {
        if ((i + 1) > ENTRIES_PER_PAGE) return;

        const previewItem = part(BlogEntryPreview, {
          name: entry.slug,
          width: pageMorph.width,
          viewModel: {
            entry,
            blog: this,
            author: entry.author,
            title: entry.title,
            date: entry.date,
            abstract: entry.abstract,
            content: entry.content
          }
        });
        pageMorph.addMorph(previewItem);
        pageMorph.layout.setResizePolicyFor(previewItem, { width: 'fill', height: 'fixed' });
      });
      this.pageMorphs.push(pageMorph);
      this.ui.entryArea.addMorph(pageMorph);
      this.ui.entryArea.layout.setResizePolicyFor(pageMorph, { width: 'fill', height: 'fixed' });
    }
  }
}

const GrowingBlog = component({
  defaultViewModel: BlogModel,
  layout: new TilingLayout({
    align: 'center',
    axis: 'column',
    axisAlign: 'center',
    hugContentsVertically: true,
    resizePolicies: [['entry area', {
      height: 'fixed',
      width: 'fill'
    }]],
    spacing: 20
  }),
  submorphs: [{
    name: 'entry area',
    borderStyle: 'none',
    layout: new TilingLayout({
      axis: 'column',
      hugContentsVertically: true,
      spacing: 5
    }),
    borderColor: Color.rgb(0, 96, 160)
  }, part(PaginationNavigator, {
    name: 'pagination navigator'
  })]
});

export const Blog = component(GrowingBlog, {
  clipMode: 'auto'
});
