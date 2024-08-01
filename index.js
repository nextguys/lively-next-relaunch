import { part, World, TilingLayout } from 'lively.morphic';
import { LivelyWebPage } from './ui/components.cp.js';
import { pt, Color } from 'lively.graphics';
import { show } from 'lively.halos';
import { arr, obj } from 'lively.lang';
import { projectAsset } from 'lively.project/helpers.js';
import { resource, createFiles } from 'lively.resources';
import { once } from 'lively.bindings';

// const res = await generatePrerenderedBits()
async function generatePrerenderedBits () { // eslint-disable-line no-unused-vars
  const minWidth = 320;
  const maxWidth = 1800;
  const defaultHeight = 1000;

  const website = part(LivelyWebPage, { name: 'lively webpage', extent: pt(minWidth, defaultHeight) }).openInWorld();
  const routesToRender = website.getAllRoutes();
  const routeToPrerender = {};

  for (let route of routesToRender) {
    website.width = minWidth;
    website.route(route);
    website.env.forceUpdate();
    await website.whenRendered();
    routeToPrerender[route] = {};
    const createPrerender = () => {
      const prerenderedNode = website.env.renderer.getNodeForMorph(website).cloneNode(true);
      prerenderedNode.style.width = '100%';
      prerenderedNode.style.height = 'unset';
      prerenderedNode.style.top = 'unset';
      prerenderedNode.style.left = 'unset';
      prerenderedNode.style.display = 'block';
      prerenderedNode.style['z-index'] = 9;
      prerenderedNode.id = '__prerenderedNode__';
      routeToPrerender[route][website.width] = prerenderedNode.outerHTML;
    };
    while (website.width < maxWidth) {
      let last = JSON.stringify(arr.compact(website.withAllSubmorphsDo(m => m._lastIndex)));
      website.width += 100;
      website.env.forceUpdate();
      await website.whenRendered();
      let curr = JSON.stringify(arr.compact(website.withAllSubmorphsDo(m => m._lastIndex)));
      if (curr !== last) {
        createPrerender();
      }
    }
    website.width = maxWidth;
    website.env.forceUpdate();
    await website.whenRendered();
    createPrerender();
  }
  const index = obj.deepCopy(routeToPrerender);
  for (let k in index) {
    index[k] = Object.keys(index[k]).map(Number).sort((a, b) => b - a);
  }
  routeToPrerender['index.json'] = JSON.stringify(index);
  const r = await resource(System.baseURL).join(projectAsset('prerendered/'));
  if (await r.exists()) await r.remove(); // empty if exists
  await createFiles(r, routeToPrerender);
  // write the prerenders to the assets directory (this gets copied anyways, so it easy to do right now)
  website.remove();
}

export async function main () {
  const website = part(LivelyWebPage, { name: 'lively webpage', extent: pt(window.innerWidth, window.innerHeight) });
  once(website, 'route finished', () => {
    document.getElementById('__prerenderedNode__')?.remove();
  });
  document.body.style.overflowX = 'hidden';
  document.body.style.overflowY = 'auto';
  website.openInWorld();
  $world.layout = new TilingLayout({
    resizePolicies: [['lively webpage', { width: 'fill', height: 'fill' }]]
  });
}

export class WORLD_CLASS extends World {
  setStatusMessageFor (aMorph, msg) {
    console.log(msg); // eslint-disable-line no-console
  }

  moveIntoVisibleBounds () {
    // just dont do anything
  }

  halos () { return []; }

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
