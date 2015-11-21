/**
 * userinterface/web.js
 */
'use strict';

/**
 * A user interface for use in a web application.
 *
 * @param {Document} document
 * @param {DomElement} usernameField
 * @param {DomElement} submitButton
 * @param {DomElement} resultsList
 * @param {Object} renderer
 * @constructor
 */
function WebInterface(
    document,
    usernameField,
    submitButton,
    resultsList,
    renderer
) {
    this.document = document;
    this.usernameField = usernameField;
    this.submitButton = submitButton;
    this.resultsList = resultsList;
    this.renderer = renderer;
}

WebInterface.prototype = {
    update: function (recommendations) {
        // update the results with the new list
        // of recommendations
    },
    getUsername: function () {
        // read the name in the username field and
        // return it
    },
    wait: function () {
        // signal a waiting period - e.g. while
        // new recommendations are being retrieved
    }
};

exports.bootstrap = function (document, usernameField, submitButton, resultsList, renderer) {
    return WebInterface(document, usernameField, submitButton, resultsList, renderer);
};
