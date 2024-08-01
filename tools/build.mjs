/* global process */
import { rollup } from 'rollup';
import jsonPlugin from '@rollup/plugin-json';
import { babel } from '@rollup/plugin-babel';
import { lively } from 'lively.freezer/src/plugins/rollup';
import resolver from 'lively.freezer/src/resolvers/node.cjs';
import PresetEnv from '@babel/preset-env';

const verbose = process.argv[2] === '--verbose';
const minify = process.env.MINIFY;
try {
const build = await rollup({
  input: './index.js',
  shimMissingExports: true,  
  plugins: [
    lively({
      autoRun: {
        title: 'nextguys--lively-next-relaunch',
        head: `
        <script>
          fetch('./assets/prerendered/index.json').then(index => index.json().then(index => {
            let loadedHash = window.location.hash;
            if (loadedHash.startsWith('#')) loadedHash = loadedHash.replace('#', '');
            let availableSizes = index[loadedHash];
            if (!availableSizes) availableSizes = index.error;
            let selectedSize;
            for (let size of availableSizes) {
               if (size < window.innerWidth) {
                 selectedSize = size;
                 break;
               } 
            }
            fetch('./assets/prerendered/' + (loadedHash ? loadedHash + '/' : '') + selectedSize)
              .then(html => html.text())
              .then(html => document.body.insertAdjacentHTML( 'beforeend', html ));
          }))
        </script>`
      },
      minify,
      verbose: true,
      isResurrectionBuild: true,
      asBrowserModule: true,
      excludedModules: [
	'lively.collab',
        'mocha-es6','mocha', // references old lgtg that breaks the build
        'rollup', // has a dist file that cant be parsed by rollup
        '@rollup/plugin-json', 
        '@rollup/plugin-commonjs',
        'rollup-plugin-polyfill-node',
        'babel-plugin-transform-jsx',                                   
        'mermaid-it-markdown'
      ],
      resolver
    }),
    jsonPlugin({ exclude: [/https\:\/\/jspm.dev\/.*\.json/, /esm\:\/\/cache\/.*\.json/]}),
    babel({
     babelHelpers: 'bundled', 
     presets: [PresetEnv]
    })
   ]
});

await build.write({
  format: 'system',
  dir: 'build'
});

} catch (err) {
  console.log(err);
  process.exit(1);
}
