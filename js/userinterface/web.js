/**
 * userinterface/web.js
 */
'use strict';

var renderer = require('../renderer/web.js');

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
    error
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
}

/**
 * Clear data currently being displayed.
 *
 * @returns {WebInterface}
 */
WebInterface.prototype.clear = function () {
    return this.clearRecommendations().clearUserData().clearErrors();
};
/**
 * Display the recommendations in the UI.
 *
 * @returns {WebInterface}
 */
WebInterface.prototype.updateRecommendations = function (recommendations) {
    var output = renderer.renderRepositoryList(recommendations);
    this.getResultsList().innerHTML = output;
    return this;
};
/**
 * Clear out existing recommendations.
 *
 * @returns {WebInterface}
 */
WebInterface.prototype.clearRecommendations = function () {
    this.getResultsList().innerHTML = '';
    return this;
};
/**
 * Update data about the user based on their repositories.
 *
 * @param {Object}
 * @returns {WebInterface}
 */
WebInterface.prototype.updateUserData = function (userRepositories) {
    this.getUserData().innerHTML = renderer.renderUserData(userRepositories);
    return this;
};
/**
 * Clear data about the user.
 *
 * @returns {WebInterface}
 */
WebInterface.prototype.clearUserData = function () {
    this.getUserData().innerHTML = '';
    return this;
};
/**
 * Get the username from the UI.
 *
 * @returns {string}
 */
WebInterface.prototype.getUsername = function () {
    return this.getUsernameField().value;
};
/**
 * Update the UI while waiting for data.
 *
 * @returns {WebInterface}
 */
WebInterface.prototype.wait = function () {
    this.getResultsList().classList.add('wait');
    this.getSubmitButton().disabled = true;
    return this;
};
/**
 * Update the UI after receiving data.
 *
 * @returns {WebInterface}
 */
WebInterface.prototype.unwait = function () {
    this.getResultsList().classList.remove('wait');
    this.getSubmitButton().disabled = false;
    return this;
};
/**
 * Show an error message to the user.
 *
 * @param {string}
 * @returns {WebInterface}
 */
WebInterface.prototype.showError = function (message) {
    this.getError().innerHTML = message;
    return this;
};
/**
 * Remove errors from the UI.
 *
 * @returns {WebInterface}
 */
WebInterface.prototype.clearErrors = function () {
    this.getError().innerHTML = '';
    return this;
};
/**
 * Get the UI element for displaying results.
 *
 * @returns {Element}
 */
WebInterface.prototype.getResultsList = function () {
    return this.resultsListElement = this.resultsListElement || this.document.getElementById(this.resultsList);
};
/**
 * Get the UI element for the username.
 *
 * @returns {String}
 */
WebInterface.prototype.getUsernameField = function () {
    return this.usernameFieldElement = this.usernameFieldElement || this.document.getElementById(this.usernameField);
};
/**
 * Get the UI element for displaying user data.
 *
 * @returns {Element}
 */
WebInterface.prototype.getUserData = function () {
    return this.userDataElement = this.userDataElement || this.document.getElementById(this.userData);
};
/**
 * Get the UI element for displaying error messages.
 *
 * @returns {Element}
 */
WebInterface.prototype.getError = function () {
    return this.errorElement = this.errorElement || this.document.getElementById(this.error);
};
/**
 * Get the UI element for submitting the username to get new results.
 *
 * @returns {Element}
 */
WebInterface.prototype.getSubmitButton = function () {
    return this.submitButtonElement = this.submitButtonElement || this.document.getElementById(this.submitButton);
};

exports.bootstrap = function (document, usernameField, submitButton, resultsList, userData, error) {
    return new WebInterface(document, usernameField, submitButton, resultsList, userData, error);
};
