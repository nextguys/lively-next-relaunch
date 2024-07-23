import { part, TilingLayout } from 'lively.morphic';
import { LivelyWebPage } from './ui/components.cp.js';
import { pt } from 'lively.graphics';

export async function main () {
  const website = part(LivelyWebPage, { name: 'lively webpage', extent: pt(window.innerWidth, window.innerHeight) });
  document.body.style.overflowX = 'hidden';
  document.body.style.overflowY = 'auto';
  website.openInWorld();
  $world.layout = new TilingLayout({
    resizePolicies: [['lively webpage', { width: 'fill', height: 'fill' }]]
  });
}
