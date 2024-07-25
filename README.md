# lively-next-relaunch

This repository contains the code for the [homepage](lively-next.org) of the `lively.next` project.

## Build Processes

Changes to specific parts of the website require you to run explicit build steps before committing.

### Emoji Usage

To ensure perfect availability of all used emojis, we ship our website with a subset of the "Noto Emoji" font. When a new emoji is first used, add it to the list in `tools/subset_emoji_font.py` and execute the script. Make sure to copy the resulting file back into the `assets` directory.

### Blog

After making changes to blog articles, run `node ./tools/create_entries.mjs` from the base of the repository.

Run `python3 tools/fix_asset_links.py` **before** running `npm run build`! After `npm run build`, execute `cp "assets"/*.{jpg,jpeg,png,gif} "build/assets/"` from the root of the project.

### History Page

After changing the history page, you will need to go into the `compile_history.js` module in lively and execute the following two function calls therein:

```js
compileHistory('desktop');
compileHistory('mobile');
```

These will precompile the necessary components in order to significantly speed up the loading time of the page.

Run `python3 tools/fix_asset_links.py` **before** running `npm run build`! After `npm run build`, execute `cp "assets"/*.{jpg,jpeg,png,gif} "build/assets/"` from the root of the project.

### Documentation Sub-Pages

After changes, execute `await compileAllMarkdown()` from within the `explanation/compile-markdown.js` in `lively.next`.

Run `python3 tools/fix_asset_links.py` **before** running `npm run build`! After `npm run build`, execute `cp "assets"/*.{jpg,jpeg,png,gif} "build/assets/"` from the root of the project.

## Deploy

You will need to run the necessary compilation steps as mentioned above. You will not need to run `npm run build`. That will be taken care of by CI. The pipeline will also make sure that all assets are present in the bundle. You will need to trigger the GitHub Action **Enhanced Deployment to GitHub Pages** manually.

### Use latest `lively.next` version

At this time, it is necessary to update the hash of the `lively.next` version to use inside of `.github/workflows/custom-deploy.yml` manually.

## License

MIT. © Linus Hagemann, Robin Schreiber. 2024 onwards.
Licenses for the [Noto Emoji Font](https://fonts.google.com/noto/specimen/Noto+Emoji/about), [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans/about), and [Bree Serif](https://fonts.google.com/specimen/Bree+Serif/about).