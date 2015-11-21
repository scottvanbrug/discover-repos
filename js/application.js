/**
 * application.js
 */
'use strict';

function Application (ui, dataProvider) {
    this.ui = ui;
    this.dataProvider = dataProvider;
}

Application.prototype = {

};

exports.start = function (locator) {
    return new Application(locator.getUi(), locator.getDataProvider());
};
