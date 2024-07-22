import { resource } from 'lively.resources';
import { HistoryPageDesktop, HistoryPageMobile } from './history.cp.js';
import { part } from 'lively.morphic';
import { promise } from 'lively.lang';

import { StatusMessageConfirm } from 'lively.halos/components/messages.cp.js';

const DIR = resource('http://localhost:9011/').join('local_projects').join('nextguys--lively-next-relaunch').join('ui/pages/');

// compileHistory('desktop');
// compileHistory('mobile');
async function compileHistory (type) { // eslint-disable-line no-unused-vars
  const comp = type === 'desktop' ? HistoryPageDesktop : HistoryPageMobile;
  const page = part(comp, { width: (type === 'desktop' ? 500 : 450) }).openInWorld();
  await promise.delay(5000);
  page.relayout();
  await promise.delay(5000);
  const nodeToPreserve = page.env.renderer.getNodeForMorph(page);
  const code = nodeToPreserve.getHTML();
  page.remove();
  const compiledDesktopModule = DIR.join(`compiled_${type === 'desktop' ? 'desktop' : 'mobile'}.js`);
  await compiledDesktopModule.write(`export const ${type === 'desktop' ? 'CompiledHistoryPageDesktopHTML' : 'CompiledHistoryPageMobileHTML'} = '${code}';`);
  $world.setStatusMessage(`${type} component compiled`, StatusMessageConfirm);
}
