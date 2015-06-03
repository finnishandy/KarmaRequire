Project for a working example of Jasmine test running on Karma with Require.js (AMD) modules.

I had hard time finding proper solutions for testing AMD code so here's a setup I ended up doing. PhantomJS2 is used for IndexedDB as it supports it.

Uses Dexie.js as IndexedDB wrapper, also uses jasmine-jquery.

Install node dependencies:

```bash
$ npm install
```

Run tests:

use karma plugin for Idea.
