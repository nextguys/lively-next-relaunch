import { component, TilingLayout, part, HTMLMorph } from 'lively.morphic';
import { pt } from 'lively.graphics';
import { CompiledHistoryPageDesktopHTML } from './compiled_desktop.js';
import { CompiledHistoryPageMobileHTML } from './compiled_mobile.js';
import liteYouTubeEmbed from 'lite-youtube-embed'; // eslint-disable-line no-unused-vars

// Browsers do not like us importing this in more than once place...
// We need to import here in order to ensure that the lib is present in the bundle
window.liteYouTubeEmbed = liteYouTubeEmbed;

export const CompiledHistoryPageDesktop = component({
  name: 'page',
  type: HTMLMorph,
  html: CompiledHistoryPageDesktopHTML,
  fixedHeight: false
});

const CompiledHistoryPageMobile = component({
  name: 'page',
  type: HTMLMorph,
  html: CompiledHistoryPageMobileHTML,
  fixedHeight: false
});

// part(CompiledHistoryPage).openInWorld()
export const CompiledHistoryPage = component({
  master: {
    breakpoints: [
      [pt(0, 0), component({
        submorphs: [
          {
            name: 'wrapper',
            submorphs: [{ name: 'mobile wrapper', visible: true }, { name: 'desktop wrapper', visible: false }]
          }
        ]
      })],
      [pt(500, 0), component({
        submorphs: [
          {
            name: 'wrapper',
            submorphs: [{ name: 'mobile wrapper', visible: false }, { name: 'desktop wrapper', visible: true }]
          }
        ]
      })]]
  },
  // FIXME:
  // This is a bit weird. Somehow, the HTML of the rendered HistoryPageHTML contains a hardcoded height of 2000.
  // It is unclear where this comes from, as opening the HistoryPage as a plain Morph yields the correct height.
  // However, putting a really high height here does resolve the issue. Otherwise, content of the history is cut-off.
  extent: pt(900, 20000),
  layout: new TilingLayout({
    hugContentsVertically: true,
    resizePolicies: [['wrapper', {
      height: 'fixed',
      width: 'fill'
    }]]
  }),
  // extent: pt(450, 2000),
  submorphs: [{
    name: 'wrapper',
    layout: new TilingLayout({
      hugContentsVertically: true,
      align: 'center',
      resizePolicies: [['mobile wrapper', {
        height: 'fixed',
        width: 'fill'
      }], ['desktop wrapper', {
        height: 'fixed',
        width: 'fill'
      }]]
    }),
    submorphs: [
      {
        name: 'mobile wrapper',
        layout: new TilingLayout({
          align: 'center',
          hugContentsVertically: true,
          resizePolicies: [['mobile', {
            height: 'fixed',
            width: 'fill'
          }]]
        }),
        submorphs: [part(CompiledHistoryPageMobile, {
          name: 'mobile'
        })]
      },
      {
        name: 'desktop wrapper',
        layout: new TilingLayout({
          align: 'center',
          hugContentsVertically: true,
          resizePolicies: [['desktop', {
            height: 'fixed',
            width: 'fill'
          }]]
        }),
        submorphs: [part(CompiledHistoryPageDesktop, { name: 'desktop' })]
      }
    ]
  }]
});
