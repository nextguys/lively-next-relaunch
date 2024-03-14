import {glob} from 'glob'
import showdown from 'showdown'
import * as fs from 'fs';
import matter from 'gray-matter';

const articleFiles = glob.sync('assets/articles/*.md');

const articles = articleFiles.map(f => {
  const contents = fs.readFileSync(f, { encoding: 'utf8', flag: 'r' });
  const converter = new showdown.Converter({metadata: true});
  converter.setFlavor('github');
  const contentsHTML = converter.makeHtml(contents);
  const metadata = matter(contents).data;
  return {
    ...metadata,
    content: contentsHTML
  };
})

const module = `export const entries = ${JSON.stringify(articles, null, 4)};`

fs.writeFileSync('assets/articles/entries.js', module);
