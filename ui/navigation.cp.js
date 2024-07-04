import { component, easings, ViewModel, part, Text, TilingLayout } from 'lively.morphic';
import { pt, rect, Color } from 'lively.graphics';
import { connect } from 'lively.bindings';

export const NavItemBase = component({
  type: Text,
  name: 'nav item',
  textAndAttributes: ['sddss', null],
  // in order to not have a wiggle effect when activating the border on hvoerborderStyle: 'solid',
  borderColor: Color.rgba(255, 255, 255, 0)
});

export const NavItemHovered = component(NavItemBase, {
  // This is not a good solution as the edges are cutoff
  borderColor: {
    bottom: Color.rgb(245, 124, 0)
  },
  borderStyle: {
    bottom: 'solid',
    left: 'none',
    right: 'none',
    top: 'none'
  },
  borderWidth: {
    bottom: 2,
    left: 0,
    right: 0,
    top: 0
  }
});

export const NavItem = component(NavItemBase, {
  master: {
    hover: NavItemHovered
  }
});

export const SpacedNavBarItems = component({
  name: 'spaced nav bar items',
  layout: new TilingLayout({
    align: 'center',
    axisAlign: 'center',
    justifySubmorphs: 'spaced',
    spacing: 10
  }),
  borderColor: Color.rgb(23, 160, 251),
  extent: pt(464, 43),
  submorphs: [
    part(NavItem, {
      type: Text,
      name: 'history',
      dynamicCursorColoring: true,
      fill: Color.rgb(255, 255, 255),
      padding: rect(1, 1, 0, 0),
      position: pt(106, -308.5),
      textAndAttributes: ['History', null]
    }), part(NavItem, {
      type: Text,
      name: 'documentation',
      dynamicCursorColoring: true,
      fill: Color.rgb(255, 255, 255),
      padding: rect(1, 1, 0, 0),
      position: pt(-113, -309.5),
      textAndAttributes: ['Documentation', null]
    }), part(NavItem, {
      type: Text,
      name: 'examples',
      extent: pt(54.5, 19),
      dynamicCursorColoring: true,
      fill: Color.rgb(255, 255, 255),
      padding: rect(1, 1, 0, 0),
      position: pt(80, 76),
      textAndAttributes: ['Examples', null]
    }),
    part(NavItem, {
      type: Text,
      name: 'blog',
      extent: pt(54.5, 19),
      dynamicCursorColoring: true,
      fill: Color.rgb(255, 255, 255),
      padding: rect(1, 1, 0, 0),
      position: pt(80, 76),
      textAndAttributes: ['Blog', null]
    })]
});

export const BurgerNavBarItems = component(SpacedNavBarItems, {
  layout: new TilingLayout({
    align: 'center',
    axis: 'column',
    axisAlign: 'center',
    resizePolicies: [['history', {
      height: 'fixed',
      width: 'fill'
    }], ['documentation', {
      height: 'fixed',
      width: 'fill'
    }], ['examples', {
      height: 'fixed',
      width: 'fill'
    }], ['blog', {
      height: 'fixed',
      width: 'fill'
    }]],
    spacing: 10
  }),
  isLayoutable: false,
  extent: pt(85, 105),
  submorphs: [{
    name: 'history',
    textAlign: 'right',
    fixedWidth: true
  }, {
    name: 'documentation',
    textAlign: 'right',
    fixedWidth: true
  }, {
    name: 'examples',
    textAlign: 'right',
    fixedWidth: true
  }, {
    name: 'blog',
    textAlign: 'right',
    fixedWidth: true
  }]
});

class BurgerMenuModel extends ViewModel {
  static get properties () {
    return {
      bindings: {
        get () {
          return [
            {
              signal: 'onMouseDown', handler: 'fadeIn'
            }
          ];
        }
      }
    };
  }

  fadeIn () {
    if (this.burgerItems) return;
    this.burgerItems = part(BurgerNavBarItems, { opacity: 0, name: 'burger items' });
    const items = this.burgerItems;
    connect(items, 'onMouseDown', this, 'fadeOut');
    const page = window.LIVELY_PAGE;
    const burgerButton = this.view.owner;
    page.addMorph(items);
    items.applyLayoutIfNeeded();
    items.topRight = page.localizePointFrom(burgerButton.bottomRight, burgerButton.owner);
    items.onHoverOut = () => this.fadeOut();
    items.visible = true;
    items.animate({
      opacity: 1,
      duration: 300,
      easing: easings.inOutSine
    });
  }

  fadeOut () {
    const items = this.burgerItems;
    items.animate({
      opacity: 0,
      duration: 300,
      easing: easings.inOutSine
    });
    items.remove();
    delete this.burgerItems;
  }
}

export const BurgerMenu = component(
  {
    name: 'burger menu',
    layout: new TilingLayout({
      align: 'center',
      axisAlign: 'center',
      hugContentsHorizontally: true,
      hugContentsVertically: true
    }),
    fill: Color.transparent,
    submorphs: [
      {
        type: Text,
        defaultViewModel: BurgerMenuModel,
        name: 'burger',
        extent: pt(36, 61),
        fixedWidth: true,
        textAlign: 'right',
        borderColor: Color.rgb(23, 160, 251),
        dynamicCursorColoring: true,
        fill: Color.rgba(255, 255, 255, 0),
        fontSize: 40,
        nativeCursor: 'pointer',
        padding: rect(1, 1, 0, 0),
        position: pt(-12, 21),
        textAndAttributes: ['', {
          fontFamily: 'Font Awesome',
          fontWeight: '900'
        }, ' ', {}]
      }]
  });

export const BaseNavBar = component({
  extent: pt(554, 84),
  layout: new TilingLayout({
    align: 'center',
    axisAlign: 'center'
  }),
  submorphs: [part(SpacedNavBarItems,
    { name: 'spaced menu items' }), part(BurgerMenu, {
    name: 'burger menu'
  })]
});

export const LargeNavBar = component(BaseNavBar, {
  submorphs: [{
    name: 'burger menu',
    visible: false
  }, {
    name: 'spaced menu items',
    visible: true
  }]
});

export const SmallNavBar = component(BaseNavBar, {
  submorphs: [{
    name: 'spaced menu items',
    visible: false
  }]
});

export const NavBar = component(BaseNavBar, {
  master: {
    auto: SmallNavBar,
    breakpoints: [
      [pt(500, 0), LargeNavBar]
    ]
  },
  extent: pt(500.5, 53),
  clipMode: 'hidden'
});
