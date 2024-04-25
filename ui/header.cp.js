import { component, easings, ViewModel, ShadowObject, part, Text, TilingLayout, Image } from 'lively.morphic';
import { pt, rect, Color } from 'lively.graphics';

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
      name: 'aText3',
      dynamicCursorColoring: true,
      fill: Color.rgb(255, 255, 255),
      lineWrapping: 'by-words',
      padding: rect(1, 1, 0, 0),
      position: pt(106, -308.5),
      textAndAttributes: ['History', null]
    }), part(NavItem, {
      type: Text,
      name: 'aText2',
      dynamicCursorColoring: true,
      fill: Color.rgb(255, 255, 255),
      lineWrapping: 'by-words',
      padding: rect(1, 1, 0, 0),
      position: pt(-113, -309.5),
      textAndAttributes: ['Documentation', null]
    }), part(NavItem, {
      type: Text,
      name: 'aText_1',
      dynamicCursorColoring: true,
      fill: Color.rgb(255, 255, 255),
      lineWrapping: 'by-words',
      padding: rect(1, 1, 0, 0),
      position: pt(-24, -286),
      textAndAttributes: ['Community', null]
    }), part(NavItem, {
      type: Text,
      name: 'aText',
      dynamicCursorColoring: true,
      fill: Color.rgb(255, 255, 255),
      position: pt(-179.5, -315.5),
      textAndAttributes: ['About', null]
    }), part(NavItem, {
      type: Text,
      name: 'aText1',
      extent: pt(54.5, 19),
      dynamicCursorColoring: true,
      fill: Color.rgb(255, 255, 255),
      lineWrapping: 'by-words',
      padding: rect(1, 1, 0, 0),
      position: pt(80, 76),
      textAndAttributes: ['Examples', null]
    })]
});

export const BurgerNavBarItems = component(SpacedNavBarItems, {
  layout: new TilingLayout({
    align: 'center',
    axis: 'column',
    axisAlign: 'center',
    hugContentsHorizontally: true,
    hugContentsVertically: true,
    spacing: 10
  }),
  isLayoutabe: false
});

class BurgerMenuModel extends ViewModel {
  static get properties () {
    return {
      bindings: {
        get () {
          return [
            {
              signal: 'onMouseDown', handler: 'fadeIn'
            },
            {
              target: 'spaced nav bar items_1',
              signal: 'onHoverOut',
              handler: 'fadeOut'
            }
          ];
        }
      }
    };
  }

  fadeIn () {
    const { spacedNavBarItems_1: items } = this.ui;
    items.visible = true;
    items.animate({
      opacity: 1,
      duration: 300,
      easing: easings.inOutSine
    });
  }

  fadeOut () {
    const { spacedNavBarItems_1: items } = this.ui;
    items.animate({
      opacity: 0,
      duration: 300,
      easing: easings.inOutSine
    });
    items.visible = false;
  }
}

export const BurgerMenu = component(
  {
    type: Text,
    defaultViewModel: BurgerMenuModel,
    name: 'aText_2',
    extent: pt(30, 30),
    borderColor: Color.rgb(23, 160, 251),
    dynamicCursorColoring: true,
    fill: Color.rgba(255, 255, 255, 0),
    fontSize: 40,
    lineWrapping: 'by-words',
    padding: rect(1, 1, 0, 0),
    position: pt(-12, 21),
    textAndAttributes: ['', {
      fontFamily: 'Font Awesome',
      fontWeight: '900'
    }, ' ', {}],
    submorphs: [part(BurgerNavBarItems, {
      name: 'spaced nav bar items_1',
      visible: false,
      layoutable: false,
      opacity: 0,
      dropShadow: new ShadowObject({ color: Color.rgba(0, 0, 0, 0.6), blur: 40, fast: false }),
      extent: pt(89, 43),
      position: pt(-22.5, 49)
    })]
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
  extent: pt(500.5,53),
  clipMode: 'hidden'
});

export const ResponsiveHeader = component({
  extent: pt(205.5,137),
  layout: new TilingLayout({
    justifySubmorphs: 'spaced',
    resizePolicies: [
      ['navigation', { width: 'fill', height: 'fixed' }]]
  }),
  submorphs: [{
    type: Image,
    name: 'anImage',
    extent: pt(124.5, 137),
    position: pt(4.5, 0.5)
  }, part(NavBar, {
    name: 'navigation',
    height: 84
  })]
});
