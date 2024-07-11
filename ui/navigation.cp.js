import { component, easings, ViewModel, part, Text, TilingLayout } from 'lively.morphic';
import { pt, rect, Color } from 'lively.graphics';
import { connect } from 'lively.bindings';
import { add } from 'lively.morphic/components/core.js';
import { Ellipse } from 'lively.morphic/morph.js';

export const NavItemBase = component({
  type: Text,
  name: 'nav item',
  textAndAttributes: ['sddss', null],
  fontSize: 14,
  // in order to not have a wiggle effect when activating the border on hvoerborderStyle: 'solid',
  borderColor: Color.rgba(255, 255, 255, 0)
});

export const NavItemHovered = component(NavItemBase, {
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
  fill: Color.rgba(255, 255, 255, 0),
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
      padding: rect(1, 1, 0, 0),
      position: pt(106, -308.5),
      textAndAttributes: ['History', null]
    }), part(NavItem, {
      type: Text,
      name: 'documentation',
      dynamicCursorColoring: true,
      padding: rect(1, 1, 0, 0),
      position: pt(-113, -309.5),
      textAndAttributes: ['Documentation', null]
    }), part(NavItem, {
      type: Text,
      name: 'examples',
      extent: pt(54.5, 19),
      dynamicCursorColoring: true,
      padding: rect(1, 1, 0, 0),
      position: pt(80, 76),
      textAndAttributes: ['Examples', null]
    }),
    part(NavItem, {
      type: Text,
      name: 'blog',
      extent: pt(54.5, 19),
      dynamicCursorColoring: true,
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
  extent: pt(101, 110),
  fill: Color.rgb(255, 255, 255),
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

const BurgerNavBarItemsSmall = component(BurgerNavBarItems, {
  name: 'small screen burger nav items',
  extent: pt(220.5, 271.5),
  submorphs: [{
    name: 'history',
    textAlign: 'center',
    fontSize: 30
  }, {
    name: 'documentation',
    textAlign: 'center',
    fontSize: 30
  }, {
    name: 'examples',
    textAlign: 'center',
    fontSize: 30
  }, {
    name: 'blog',
    textAlign: 'center',
    fontSize: 30
  }, add({
    name: 'close wrapper',
    layout: new TilingLayout({
      align: 'center',
      axisAlign: 'center'
    }),
    extent: pt(160.5, 50.5),
    position: pt(879.8, 436.8),
    submorphs: [{
      type: Ellipse,
      name: 'close button',
      nativeCursor: 'pointer',
      borderColor: Color.rgb(0, 0, 0),
      borderWidth: 3,
      extent: pt(30, 30),
      layout: new TilingLayout({
        align: 'center',
        axisAlign: 'center'
      }),
      position: pt(41, 42.8),
      submorphs: [{
        type: Text,
        reactsToPointer: false,
        name: 'aText',
        dynamicCursorColoring: true,
        fill: Color.rgba(255, 255, 255, 0),
        padding: rect(3, 0, -3, 0),
        position: pt(8, 7),
        textAndAttributes: ['', {
          fontFamily: 'Font Awesome',
          fontWeight: '900'
        }, ' ', {}]
      }]
    }]
  })]
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
    this.burgerItems = $world.width > 1024
      ? part(BurgerNavBarItems, { opacity: 0, name: 'burger items' })
      : part(BurgerNavBarItemsSmall, { opacity: 0, name: 'burger items', hasFixedPosition: true });
    const items = this.burgerItems;
    // A trick to compensate for the small items not being submorph of the page but of the world
    if ($world.width <= 1024) items.withAllSubmorphsDo((item) => { if (item !== items) connect(item, 'onMouseDown', window.LIVELY_PAGE, 'onMouseDown', { converter: '() => {return {targetMorphs: [source]}}' }); });
    connect(items, 'onMouseDown', this, 'fadeOut');
    const page = window.LIVELY_PAGE;
    const burgerButton = this.view.owner;
    if ($world.width > 1024) page.addMorph(items);
    else this.burgerItems.openInWorld();
    items.applyLayoutIfNeeded();
    if ($world.width > 1024) {
      items.topRight = page.localizePointFrom(burgerButton.bottomRight, burgerButton.owner);
      items.onHoverOut = () => this.fadeOut();
    } else {
      window.LIVELY_PAGE.animate({
        duration: 300,
        blur: 2
      });
      items.center = $world.visibleBounds().center();
    }
    items.visible = true;
    items.animate({
      opacity: 1,
      duration: 300,
      easing: easings.inOutSine
    });
  }

  fadeOut () {
    window.LIVELY_PAGE.animate({
      duration: 300,
      blur: 0
    });
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
  fill: Color.rgba(255, 255, 255, 0),
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
    visible: false,
    layoutable: false
  }]
});

export const NavBar = component(BaseNavBar, {
  master: {
    auto: SmallNavBar,
    breakpoints: [
      [pt(0, 0), component(SmallNavBar, {
        layout: new TilingLayout({
          align: 'right',
          padding: rect(0, 0, 30, 0)
        })
      })], [
        pt(130, 0), component(SmallNavBar, {

          layout: new TilingLayout({
            align: 'right',
            padding: rect(0, 0, 80, 0)
          })
        })],
      [pt(465, 0), component(LargeNavBar, {
        layout: new TilingLayout({
          align: 'right',
          padding: rect(0, 0, 80, 0)
        })
      })]
    ]
  },
  fill: Color.rgb(255, 255, 255, 0),
  extent: pt(85.9, 53),
  clipMode: 'hidden'
});
