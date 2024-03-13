import { part } from 'lively.morphic';
import { Blog } from './ui/blog.cp.js';

export async function main () {
  const blog = part(Blog);
  blog.openInWorld();
}
