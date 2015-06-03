var tests = [];
for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/src',

    paths: {
        'jquery': '../lib/jquery-2.1.3',
        'underscore': '../lib/underscore',
        'pubsub': '../lib/pubsub',
        'dexie': '../lib/Dexie.min',
        'jasmine-jquery': '../lib/jasmine-jquery',
        'crud-consumer': '../src/events/crud-consumer',
        'crud-producer': '../src/events/crud-producer',
        'dexie-adapter': '../src/db/dexie-adapter',
        'db-adapter': '../src/db/db-adapter',
        'query-module': '../src/db/query-module',
        'db-module': '../src/db/db-module',
        'promise': '../lib/Promise'
    },

    shim: {
        'underscore': {
            exports: '_'
        },
        'jasmine-jquery': {
            deps: ['jquery']
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});

