// GitHub Pages has no server-side rewrites: a deep link like /MyPortfolio/about
// is looked up as a file, misses, and serves 404.html. Serving a copy of
// index.html there lets the Angular router take over and resolve the route.
import { copyFileSync } from 'node:fs';

copyFileSync('docs/index.html', 'docs/404.html');
console.log('postbuild: docs/404.html written');
