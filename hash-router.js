import { signal } from 'lively.bindings';
export class HashRouter {
  constructor (props) {
    const { prefix, debugMode } = props;
    this.prefix = prefix;
    this.debugMode = debugMode;
    window.addEventListener('popstate', () => {
      this.route(document.location.hash);
    });
  }

  setHash (hash) {
    let hashToSet = `/${hash}/`;
    if (this.prefix) hashToSet = `/${this.prefix}${hashToSet}`;
    if (!this.debugMode) window.location.hash = hashToSet;
  }

  route (hash) {
    // Handy to make sure that one gets correctly routed upon page load.
    if (!hash) hash = window.location.hash;
    if (!hash) hash = '';
    if (hash.startsWith('/')) hash = hash.replace('/', '');
    if (hash.endsWith) {
      if (hash.ends) { this.setHash(hash); }
    }
    signal(this, 'routed', hash);
  }
}
