import { part } from 'lively.morphic';
import { Blog } from './ui/blog.cp.js';
import { LivelyWebPage } from './ui/components.cp.js';

export async function main () {
  // const blog = part(Blog);
  // blog.openInWorld();
  const website = part(LivelyWebPage);
  website.openInWorld();
}
