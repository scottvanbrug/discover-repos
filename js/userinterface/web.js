/**
 * userinterface/web.js
 */
'use strict';

/**
 * A user interface for use in a web application.
 *
 * @param {Document} document
 * @param {string} usernameField
 * @param {string} submitButton
 * @param {string} resultsList
 * @param {string} userData
 * @param {string} error
 * @param {Object} renderer
 * @constructor
 */
function WebInterface(
    document,
    usernameField,
    submitButton,
    resultsList,
    userData,
    error,
    renderer
) {
    this.document = document;
    this.usernameField = usernameField;
    this.usernameFieldElement = null;
    this.submitButton = submitButton;
    this.submitButtonElement = null;
    this.resultsList = resultsList;
    this.resultsListElement = null;
    this.userData = userData;
    this.userDataElement = null;
    this.error = error;
    this.errorElement = null;
    this.renderer = renderer;
}

WebInterface.prototype = {
    clear: function () {
        return this.clearRecommendations().clearUserData().clearErrors();
    },
    updateRecommendations: function (recommendations) {
        this.getResultsList().innerHTML = this.renderer.renderRepositoryList(recommendations);
        return this;
    },
    clearRecommendations: function () {
        this.getResultsList().innerHTML = '';
        return this;
    },
    updateUserData: function (userRepositories) {
        this.getUserData().innerHTML = this.renderer.renderUserData(userRepositories);
        return this;
    },
    clearUserData: function () {
        this.getUserData().innerHTML = '';
        return this;
    },
    getUsername: function () {
        return this.getUsernameField().value;
    },
    wait: function () {
        this.getResultsList().classList.add('wait');
        return this;
    },
    unwait: function () {
        this.getResultsList().classList.remove('wait');
        return this;
    },
    showError: function (message) {
        this.getError().innerHTML = message;
        return this;
    },
    clearErrors: function () {
        this.getError().innerHTML = '';
        return this;
    },
    getResultsList: function () {
        return this.resultsListElement = this.resultsListElement || this.document.getElementById(this.resultsList);
    },
    getUsernameField: function () {
        return this.usernameFieldElement = this.usernameFieldElement || this.document.getElementById(this.usernameField);
    },
    getUserData: function () {
        return this.userDataElement = this.userDataElement || this.document.getElementById(this.userData);
    },
    getError: function () {
        return this.errorElement = this.errorElement || this.document.getElementById(this.error);
    }
};

exports.bootstrap = function (document, usernameField, submitButton, resultsList, userData, error, renderer) {
    return new WebInterface(document, usernameField, submitButton, resultsList, userData, error, renderer);
};
