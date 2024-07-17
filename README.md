# lively-next-relaunch

This repository contains the code for the lively-next.org homepage of the `lively.next` project.

## Build Processes

Changes to specific parts of the website require you to run explicit build steps before commiting.

### Blog

After making changes to blog articles, run `node ./tools/create_entries.mjs` from the base of the repository.

### History Page

After changing the history page, you will need to go into the `compile_history.js` module in lively and execute the following two function calls therein:

```js
compileHistory('desktop');
compileHistory('mobile');
```

These will precompile the necessary components in order to significantly speed up the loading time of the page.


## License

MIT. © Linus Hagemann, Robin Schreiber. 2024 onwards.