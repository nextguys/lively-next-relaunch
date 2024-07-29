import { resource } from 'lively.resources';
import { MarkdownPreviewMorph } from 'lively.ide/md/morphs.js';
import { defaultMarkdownOptions } from 'lively.ide/md/editor-plugin.js';
import { insertComponentDefinition } from 'lively.ide/components/reconciliation.js';
import { module } from 'lively.modules/index.js';
import { string, obj } from 'lively.lang';
import { HTMLMorph, Morph } from 'lively.morphic';

// run this module and it will convert all the markdown files into component modules that can be included into the website
// await compileAllMarkdown()
async function compileAllMarkdown () { // eslint-disable-line no-unused-vars
  const markdownFiles = await resource($world.openedProject.url).join('explanation').dirList(1, { exclude: /.js/ });
  const markdownOptions = { ...defaultMarkdownOptions, linkedCSS: null };
  for (let mdFile of markdownFiles) {
    // mdFile = markdownFiles[1]
    const markdownSource = await mdFile.read();
    const renderedMorph = new MarkdownPreviewMorph({ disableInternalScroll: true, clipMode: 'visible', markdownSource, markdownOptions: markdownOptions }).openInWorld();
    await renderedMorph.renderMarkdown();
    obj.adoptObject(renderedMorph, HTMLMorph);
    if (renderedMorph.submorphs.length > 0) {
      obj.adoptObject(renderedMorph, Morph);
      renderedMorph.layout.hugContentsVertically = true;
      renderedMorph.submorphs[0].layout.hugContentsVertically = true;
      renderedMorph.layout.setResizePolicyFor(renderedMorph.submorphs[0], { width: 'fill', height: 'fixed' });
    } else {
      renderedMorph.fixedHeight = false;
    }
    // write the component definition to a file that is named the same as the
    const componentMod = module($world.openedProject.package.name + '/explanation/' + mdFile.nameWithoutExt() + '.cp.js');
    await componentMod.changeSource(''); // clear the module
    await insertComponentDefinition(renderedMorph, string.camelize(mdFile.nameWithoutExt()), componentMod);
    renderedMorph.remove();
  }
}
