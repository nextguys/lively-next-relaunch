import { component, without, add, ViewModel, TilingLayout } from 'lively.morphic';
import { pt, rect } from 'lively.graphics/geometry-2d.js';
import { Color } from 'lively.graphics/color.js';
import { Text } from 'lively.morphic/text/morph.js';
import { HTMLMorph } from 'lively.morphic/html-morph.js';
import { connect, noUpdate } from 'lively.bindings';
import { part } from 'lively.morphic/components/core.js';

import { entries } from '../assets/articles/entries.js';

export const PreviewPage = component({
  name: 'preview page',
  fill: Color.transparent,
  clipMode: 'hidden',
  layout: new TilingLayout({
    axis: 'column',
    hugContentsHorizontally: true,
    hugContentsVertically: true,
    padding: rect(10, 10, 0, 0),
    spacing: 10
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
      slug: {},
      title: {},
      author: {},
      content: {}
    };
  }

  openEntry () {
    this.blog.openEntry(this.entry);
  }

  viewDidLoad () {
    const { author, date, abstract, title, continueReading } = this.ui;
    author.textString = this.author;
    // TODO: should this be textandattributes?
    abstract.textString = this.abstract;
    title.textString = this.title;
    date.textString = new Date(this.date).toLocaleDateString();
    continueReading.name = `${this.slug}`;
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
    this.view.remove();
    this.blog.showList(true);
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
    date.textString = new Date(this.date).toLocaleDateString();
  }
}
export const BlogEntryPreview = component({
  defaultViewModel: BlogEntryPreviewModel,
  borderStyle: {
    bottom: 'solid',
    left: 'none',
    right: 'none',
    top: 'solid'
  },
  borderColor: Color.rgb(166, 166, 166),
  borderWidth: 1,
  clipMode: 'hidden',
  extent: pt(582, 245.5),
  layout: new TilingLayout({
    axis: 'column',
    axisAlign: 'right',
    hugContentsVertically: true,
    padding: rect(20, 0, 0, 0),
    resizePolicies: [['header wrapper', {
      height: 'fixed',
      width: 'fill'
    }], ['seperator', {
      height: 'fixed',
      width: 'fill'
    }], ['abstract', {
      height: 'fixed',
      width: 'fill'
    }]]
  }),
  submorphs: [
    {
      name: 'header wrapper',
      clipMode: 'hidden',
      fill: Color.rgba(255, 255, 255, 0),
      layout: new TilingLayout({
        align: 'right',
        axisAlign: 'center',
        hugContentsVertically: true,
        justifySubmorphs: 'spaced',
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
          selectionMode: 'native',
          padding: rect(0, 5, 0, -5),
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
              selectionMode: 'native',
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
              selectionMode: 'native',
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
              selectionMode: 'native',
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
      fontSize: 14,
      clipMode: 'hidden',
      height: 90.5,
      selectionMode: 'native',
      borderColor: Color.rgb(23, 160, 251),
      dynamicCursorColoring: true,
      fill: Color.rgb(255, 255, 255),
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
  borderStyle: 'none',
  clipMode: 'visible',
  extent: pt(654, 688.5),
  layout: new TilingLayout({
    align: 'right',
    axis: 'column',
    hugContentsVertically: true,
    padding: rect(20, 0, 0, 20),
    resizePolicies: [['header wrapper', {
      height: 'fixed',
      width: 'fill'
    }], ['seperator', {
      height: 'fixed',
      width: 'fill'
    }], ['content', {
      height: 'fixed',
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
        padding: rect(0, 10, 0, -10),
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
    type: HTMLMorph,
    name: 'content',
    fixedHeight: false,
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
      previewPage: { },
      bindings: {
        get () {
          return [
            { signal: 'remove', handler: 'remove' }
          ];
        }
      },
      expose: {
        get () {
          return ['showList', 'openEntry', 'reset'];
        }
      }
    };
  }

  viewDidLoad () {
    this.showList();
  }

  /**
   * Shows a list of articles, also closing all open articles.
   */
  showList (doRoute = false) {
    this.ui.introText.visible = true;
    // Push the URL update to history but do not trigger actual routing flow.
    // Necessary in the case we come here from closing an article.
    if (doRoute) noUpdate(() => window.router.route('blog', true));
    this.ui.entryArea.submorphs = [];
    if (!this.previewPage) this.prepareEntryPreviews();
    this.ui.entryArea.addMorph(this.previewPage);
    this.ui.entryArea.layout.setResizePolicyFor(this.previewPage, { width: 'fill', height: 'fixed' });
  }

  reset () {
    this.ui.entryArea.submorphs = [];
  }

  openEntry (entry) {
    this.ui.introText.visible = false;
    this.reset();
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
    this.ui.entryArea.addMorph(fullArticle);
    this.ui.entryArea.layout.setResizePolicyFor(fullArticle, { width: 'fill', height: 'fixed' });
    this.view.applyLayoutIfNeeded();
  }

  prepareEntryPreviews () {
    const pageMorph = part(PreviewPage, {
      name: 'blog previews',
      extent: this.ui.entryArea.extent,
      position: this.ui.entryArea.position
    });

    entries.forEach((entry) => {
      const previewItem = part(BlogEntryPreview, {
        name: entry.slug,
        viewModel: {
          entry,
          blog: this,
          author: entry.author,
          title: entry.title,
          date: entry.date,
          abstract: entry.abstract,
          content: entry.content,
          slug: entry.slug
        }
      });
      pageMorph.addMorph(previewItem);
      pageMorph.layout.setResizePolicyFor(previewItem, { width: 'fill', height: 'fixed' });
    });

    this.previewPage = pageMorph;
  }
}

export const Blog = component({
  defaultViewModel: BlogModel,
  extent: pt(931, 306),
  styleClasses: ['auto-links'],
  master: {
    breakpoints: [
      [pt(0, 0), component({
        layout: new TilingLayout({
          axis: 'column',
          axisAlign: 'center',
          resizePolicies: [['intro text', {
            height: 'fixed',
            width: 'fill'
          }], ['entry area', {
            height: 'fixed',
            width: 'fill'
          }]]
        })
      })],
      [pt(800, 0), component({
        layout: new TilingLayout({
          axis: 'column',
          axisAlign: 'center',
          resizePolicies: [['intro text', {
            height: 'fixed',
            width: 'fixed'
          }], ['entry area', {
            height: 'fixed',
            width: 'fill'
          }]]
        }),
        submorphs: [{ name: 'intro text', width: 800, alignText: 'justify', fixedWidth: true }]
      })]]
  },
  submorphs: [
    {
      name: 'intro text',
      type: Text,
      padding: rect(0, 0, 0, 30),
      width: 650,
      selectionMode: 'native',
      lineWrapping: 'by-words',
      fontSize: 14,
      textAndAttributes: ['Welcome to the ', {
        fontSize: 16
      }, 'blog', {
        fontSize: 16,
        fontWeight: '600'
      }, ' of the ', {
        fontSize: 16
      }, 'lively.next', {
        fontColor: Color.rgb(255, 119, 0),
        fontFamily: '\"IBM Plex Mono\"',
        fontSize: 16
      }, ' project!\n', {
        fontSize: 16
      }, '\nThis blog serves as a place for us to announce changes and progress on the project, as well as a place to shed some light on ideas and experiments we are working on, or an occasional deep-dive into the technical nitti-gritties of', null, ' lively.next!', {
        fontColor: Color.rgb(255, 119, 0),
        fontFamily: '\"IBM Plex Mono\"'
      }, ' \n\nFor a more synchronous mode of communication, we kindly invite you to our ', null, '🔗', {
        fontFamily: 'Noto Emoji Color Subset'
      }, ' chatroom on matrix ', {
        fontColor: Color.rgb(0, 0, 0),
        link: 'https://matrix.to/#/#lively.next:matrix.org'
      }, '!', null]

    },
    {
      name: 'entry area',
      layout: new TilingLayout({
        axis: 'column',
        hugContentsVertically: true,
        spacing: 5
      })
    }]
});
