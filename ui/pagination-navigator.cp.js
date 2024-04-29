import { TilingLayout, part, ViewModel, component } from 'lively.morphic/index.js';
import { pt } from 'lively.graphics/geometry-2d.js';
import { Color } from 'lively.graphics/color.js';
import { Text } from 'lively.morphic/text/morph.js';
import { PaginationButton } from './pagination-buttons.cp.js';
import { signal } from 'lively.bindings';

class PaginationNavigatorModel extends ViewModel {
  static get properties () {
    return {
      page: {
        defaultValue: 1
      },
      maxNumberOfPages: {
        defaultValue: 5
      },
      bindings: {
        get () {
          return [
            { target: 'backward', signal: 'onMouseDown', handler: 'backwards' },
            { target: 'forward', signal: 'onMouseDown', handler: 'forwards' }
          ];
        }
      },
      expose: {
        get () {
          return ['changedPage', 'maxNumberOfPages', 'setPage'];
        }
      }
    };
  }

  setPage (page) {
    this.page = page;
    this.ui.pageNumber.textString = this.page;
    if (this.page === 2) this.ui.backward.master.setState('disabled');
    else this.ui.backward.master.setState(null);
    if (this.page === this.maxNumberOfPages - 1) this.ui.forward.master.setState('disabled');
    else this.ui.forward.master.setState(null);
  }

  viewDidLoad () {
    this.ui.backward.master.setState('disabled');
  }

  backwards () {
    this.ui.forward.master.setState(null);
    if (this.page === 1) return;
    if (this.page === 2) this.ui.backward.master.setState('disabled');
    else this.ui.backward.master.setState(null);
    this.page = this.page - 1;
    this.ui.pageNumber.textString = this.page;
    signal(this, 'changedPage', this.page);
  }

  forwards () {
    this.ui.backward.master.setState(null);
    if (this.page === this.maxNumberOfPages) return;
    if (this.page === this.maxNumberOfPages - 1) this.ui.forward.master.setState('disabled');
    else this.ui.forward.master.setState(null);
    this.page = this.page + 1;
    this.ui.pageNumber.textString = this.page;
    signal(this, 'changedPage', this.page);
  }
}

const PaginationNavigator = component({
  name: 'pagination navigator',
  defaultViewModel: PaginationNavigatorModel,
  borderColor: Color.rgb(23, 160, 251),
  extent: pt(225, 56.5),
  layout: new TilingLayout({
    align: 'center',
    axisAlign: 'center',
    spacing: 10
  }),
  position: pt(121, 442.5),
  submorphs: [
    part(PaginationButton, {
      name: 'backward',
      textAndAttributes: ['', {
        fontFamily: '"Font Awesome 6 Free", "Font Awesome 6 Brands"',
        fontWeight: '900'
      }, ' ', {}]

    }), {
      type: Text,
      name: 'page number',
      fontWeight: '600',
      fontColor: Color.rgb(255, 108, 0),
      dynamicCursorColoring: true,
      fill: Color.rgba(255, 255, 255, 0),
      fontSize: 20,
      lineHeight: 1,
      position: pt(107, 18),
      textAlign: 'center',
      textAndAttributes: ['1', null]
    }, part(PaginationButton, {
      name: 'forward',
      textAndAttributes: ['', {
        fontFamily: '"Font Awesome 6 Free", "Font Awesome 6 Brands"',
        fontWeight: '900'
      }, ' ', {}]
    })]
});

export { PaginationNavigator };
