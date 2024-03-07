import { part } from 'lively.morphic';
import { Blog } from './ui/blog.cp.js';

export async function main () {
  const blog = part(Blog);
  blog.respondsToVisibleWindow = true;
  blog.openInWorld();
  blog.center = $world.center;
}
