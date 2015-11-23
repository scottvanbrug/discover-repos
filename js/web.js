/**
 * web.js
 * Bootstrap the application.
 * Any application context specific configuration
 * should go in here.
 */
'use strict';

var Application = require('./application.js');
var data = require('./data/github.js');
var ui = require('./userinterface/web.js');

var app = new Application(
    ui.bootstrap(
        window.document,
        'username',
        'go',
        'suggested-repositories',
        'user-data',
        'errors'
    ),
    data
);

app.start();
