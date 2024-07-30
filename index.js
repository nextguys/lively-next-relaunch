import { part, World, TilingLayout } from 'lively.morphic';
import { LivelyWebPage } from './ui/components.cp.js';
import { pt, Color } from 'lively.graphics';
import { show } from 'lively.halos';

export async function main () {
  const website = part(LivelyWebPage, { name: 'lively webpage', extent: pt(window.innerWidth, window.innerHeight) });
  document.body.style.overflowX = 'hidden';
  document.body.style.overflowY = 'auto';
  website.openInWorld();
  $world.layout = new TilingLayout({
    resizePolicies: [['lively webpage', { width: 'fill', height: 'fill' }]]
  });
}

export class WORLD_CLASS extends World {
  setStatusMessageFor (aMorph, msg) {
    console.log(msg);
  }

  moveIntoVisibleBounds () {
    // just dont do anything
  }

  get commands () {
    return [
      ...super.commands, {
        name: 'show morph',
        exec: (world, { morph, loop = false, color = Color.red }) => {
          return show(morph, loop, color);
        }
      }];
  }
}
