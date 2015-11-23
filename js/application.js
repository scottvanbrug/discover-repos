/**
 * application.js
 */
'use strict';

var networkErrorMessage = 'Could not get recommendations.';

function Application (ui, dataProvider) {
    this.ui = ui;
    this.dataProvider = dataProvider;
}

Application.prototype.update = function () {
    this.ui.clear().wait();
    this.dataProvider.getUserRepositories(this.ui.getUsername())
        .then(JSON.parse)
        .then(this.respondToUserData.bind(this))
        .then(this.requestSearchData.bind(this))
        .then(JSON.parse)
        .then(this.respondToSearchData.bind(this))
        .catch(this.handleErrors.bind(this))
        .then(this.ui.unwait.bind(this.ui));
};
Application.prototype.respondToUserData = function (userRepositories) {
    this.ui.updateUserData(userRepositories);
    return userRepositories;
};
Application.prototype.requestSearchData = function (userRepositories) {
    return this.dataProvider.searchForRepositories(userRepositories);
};
Application.prototype.respondToSearchData = function (searchResults) {
    this.ui.updateRecommendations(searchResults.items);
    return searchResults;
};
Application.prototype.handleErrors = function (errorData) {
    this.ui.showError(networkErrorMessage);
    return errorData;
};
Application.prototype.start = function () {
    this.ui.getSubmitButton().addEventListener('click', (function (evt) {
        evt.preventDefault();
        this.update();
    }).bind(this));
};

module.exports = Application;
