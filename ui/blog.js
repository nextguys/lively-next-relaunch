import { ViewModel, part } from 'lively.morphic';
import { BlogEntryPreview, BlogEntry } from './blog.cp.js';
import { signal } from 'lively.bindings';
import { pt } from 'lively.graphics';

const ENTRIES_PER_PAGE = 1;

const entries = [
  {
    title: 'The first entry on the lively.next blog!',
    slug: 'first-lively-blog-post',
    date: '03.05.2024',
    author: '@linusha',
    abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec tempor ante. Aenean consequat gravida odio, quis tempor nisl efficitur a. In risus neque, fermentum a aliquet non, semper sed ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque malesuada egestas sem, nec blandit libero viverra ut. Pellentesque feugiat tristique metus et sagittis. Cras ut tortor vehicula, tincidunt sem pretium, scelerisque sem. Aenean volutpat semper nulla, vel dictum ipsum ornare molestie. Suspendisse volutpat eget augue eget maximus. Aliquam turpis eros, facilisis sed neque vitae, interdum congue lorem. Fusce viverra, mauris quis dignissim suscipit, lectus ligula tincidunt leo, eu auctor nisl sapien eu orci. Praesent turpis lorem, ornare vel dignissim et, tempor eu libero. Quisque congue leo in fermentum aliquam.',
    content: `# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.`
  },
  {
    title: 'Why the ipad is for infants',
    slug: 'why-the-ipad-is-for-infants',
    date: '03.05.1988',
    author: '@alan',
    abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec tempor ante. Aenean consequat gravida odio, quis tempor nisl efficitur a. In risus neque, fermentum a aliquet non, semper sed ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque malesuada egestas sem, nec blandit libero viverra ut. Pellentesque feugiat tristique metus et sagittis. Cras ut tortor vehicula, tincidunt sem pretium, scelerisque sem. Aenean volutpat semper nulla, vel dictum ipsum ornare molestie. Suspendisse volutpat eget augue eget maximus. Aliquam turpis eros, facilisis sed neque vitae, interdum congue lorem. Fusce viverra, mauris quis dignissim suscipit, lectus ligula tincidunt leo, eu auctor nisl sapien eu orci. Praesent turpis lorem, ornare vel dignissim et, tempor eu libero. Quisque congue leo in fermentum aliquam.',
    content: `# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.`
  }
];

export class BlogModel extends ViewModel {
  static get properties () {
    return {
      page: {
        defaultValue: 1
      },
      bindings: {
        get () {
          return [
            { target: 'pagination navigator', signal: 'changedPage', handler: 'pageChanged' }
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
    // TODO: think about how pagination should affect the urls!
    this.prepareEntryPreviews(page * ENTRIES_PER_PAGE);
  }

  relayout () {
    this.view.extent = $world.visibleBounds().extent();
    this.view.position = pt(0, 0);
  }

  viewDidLoad () {
    window.addEventListener('popstate', (event) => {
      this.route(event.state);
    });

    this.prepareEntryPreviews();

    this.ui.paginationNavigator.maxNumberOfPages = Math.ceil(entries.length / ENTRIES_PER_PAGE);
    this.route('home');
  }

  route (slug) {
    if (slug === 'home') signal(this, 'closeAllEntries');
    const calledArticle = entries.find(e => e.slug === slug);
    if (calledArticle) this.openEntry(calledArticle);
  }

  resetURL () {
    // TODO: add history button navigation
    window.history.pushState('home', null, '/');
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
    fullArticle.openInWorld();
    window.history.pushState(entry.slug, null, entry.slug);
  }

  prepareEntryPreviews (offset) {
    // TODO: maybe cache the morphs?
    // Instead, we do even better: we construct all pages in the background and then just exchange the pages upon navigation
    this.ui.entryArea.submorphs = [];
    this.ui.entryArea.layout = this.ui.entryArea.layout.copy();
    entries.slice(offset - 1).forEach((entry, i) => {
      if ((i + 1) > ENTRIES_PER_PAGE) return;
      const previewItem = part(BlogEntryPreview, {
        name: entry.slug,
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
      this.ui.entryArea.addMorph(previewItem);
      this.ui.entryArea.layout.setResizePolicyFor(previewItem, { width: 'fill', height: 'fixed' });
    });
  }
}
