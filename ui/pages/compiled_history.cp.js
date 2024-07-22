import { component, TilingLayout, part, HTMLMorph } from 'lively.morphic';
import { pt } from 'lively.graphics';
import { CompiledHistoryPageDesktopHTML } from './compiled_desktop.js';
import { CompiledHistoryPageMobileHTML } from './compiled_mobile.js';
// We need to import here in order to ensure that the lib is present in the bundle
import liteYouTubeEmbed from 'esm://cache/lite-youtube-embed'; // eslint-disable-line no-unused-vars

// Browsers do not like us importing this in more than once place...

if (!window.liteYouTubeEmbed && !window.liteYoutubeLoading) {
  window.liteYoutubeLoading = true;
  System.import('lite-youtube-embed').then((embed) => {
    window.liteYouTubeEmbed = embed;
    delete window.liteYoutubeLoading;
  });
}

export const CompiledHistoryPageDesktop = component({
  name: 'page',
  type: HTMLMorph,
  extent: pt(684.7,4335),
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
  extent: pt(900, 1400),
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
