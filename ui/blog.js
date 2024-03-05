import { ViewModel, part } from 'lively.morphic';
import { BlogEntryPreview } from './blog.cp.js';
import { newUUID } from 'lively.lang/string.js';

const entries = [
  {
    title: 'The first entry on the lively.next blog!',
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
  viewDidLoad () {
    entries.forEach(entry => {
      const previewItem = part(BlogEntryPreview, {
        // FIXME:
        name: newUUID(),
        viewModel: {
          author: entry.author,
          title: entry.title,
          date: entry.date,
          abstract: entry.abstract,
          content: entry.content

        }
      });
      this.view.layout.setResizePolicyFor(previewItem, { width: 'fill', height: 'fixed' });
      this.view.addMorph(previewItem);
    });
  }
}
