import { part } from 'lively.morphic';
import { Blog } from './ui/blog.cp.js';
import { LivelyWebPage } from './ui/components.cp.js';
import { pt } from 'lively.graphics';

export async function main () {
  // FIXME: Wobbledy Wobbledai
  const website = part(LivelyWebPage, { extent: pt(window.innerWidth, window.innerHeight) });
  website.applyLayoutIfNeeded();

  website.openInWorld();
}
