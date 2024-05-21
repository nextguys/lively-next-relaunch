import { ViewModel, part } from 'lively.morphic';
import { BlogEntryPreview, PreviewPage, BlogEntry } from './blog.cp.js';
import { signal, connect } from 'lively.bindings';
import { pt } from 'lively.graphics';
import { HashRouter } from 'lively.components/hash-router.js';

import { entries } from '../assets/articles/entries.js';

const ENTRIES_PER_PAGE = 1;

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
    debugger;
    this.ui.paginationNavigator.setPage(page);
    this.ui.entryArea.submorphs = [];
    this.ui.entryArea.addMorph(this.pageMorphs[page - 1]);
    this.ui.entryArea.layout.setResizePolicyFor(this.pageMorphs[page - 1], { width: 'fill', height: 'fixed' });
    this.router.setHash(page);
  }

  relayout () {
    this.view.extent = $world.visibleBounds().extent();
    this.view.position = pt(0, 0);
  }

  remove () {
    this.pageMorphs.forEach(p => p.remove());
  }

  async viewDidLoad () {
    this.router = new HashRouter({
      prefix: 'blog',
      debugMode: !lively.FreezerRuntime
    });
    connect(this.router, 'routed', this, 'route');
    await this.view.whenRendered();
    await this.prepareEntryPreviews();

    this.ui.paginationNavigator.maxNumberOfPages = Math.ceil(entries.length / ENTRIES_PER_PAGE);
    debugger;
    this.router.route();
    if (lively.FreezerRuntime) this.relayout();
  }

  route (hash) {
    if (hash === '') {
      signal(this, 'closeAllEntries');
      this.pageChanged(1);
    }
    const calledArticle = entries.find(e => e.hash === hash.replace('#', '').replaceAll('/', ''));
    if (calledArticle) this.openEntry(calledArticle);
  }

  resetURL () {
    // TODO: add history button navigation
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
    this.router.setHash(entry.slug);
  }

  async prepareEntryPreviews () {
    const pages = Math.ceil(entries.length / ENTRIES_PER_PAGE);
    for (let p = 1; p <= pages; p++) {
      const pageMorph = part(PreviewPage, {
        name: `page ${p}`,
        extent: this.ui.entryArea.extent,
        position: this.ui.entryArea.position
      });
      entries.slice(p * ENTRIES_PER_PAGE - 1).forEach((entry, i) => {
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

        // await pageMorph.whenRendered();
      });
      this.pageMorphs.push(pageMorph);
      // this.ui.entryArea.addMorph(pageMorph);
    }
  }
}
