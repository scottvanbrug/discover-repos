/**
 * web.js
 * Bootstrap the application.
 * Any application context specific configuration
 * should go in here.
 */
'use strict';

// Ideally, the bootstrapping shouldn't need to know how the
// application fits together, just what needs to be provided
// to bootstrap it for the specific context - in this case, a
// web app. Should be primarilly concerned with configuring
// the service locator and starting the application.
var application = require('./application.js');
var data = require('./data.js');
var locator = require('./locator.js');
var renderer = require('./renderer/web.js');
var ui = require('./userinterface/web.js');

locator.initialize({
    'ui': ui.bootstrap(
        document,
        'username',
        'go',
        'suggested-repositories',
        renderer
    ),
    'dataSource': data
});

var app = application.start(locator);
