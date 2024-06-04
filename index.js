import { part } from 'lively.morphic';

import { LivelyWebPage } from './ui/components.cp.js';
import { pt } from 'lively.graphics';

export async function main () {
  // FIXME: Wobbledy Wobbledai
  const website = part(LivelyWebPage, { extent: pt(window.innerWidth, window.innerHeight) });
  website.applyLayoutIfNeeded();
  document.body.style.overflowX = 'hidden';
  document.body.style.overflowY = 'auto';
  website.openInWorld(pt(0, 0));
}
