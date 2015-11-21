/**
 * application.js
 */
'use strict';

function Application (ui, dataProvider, engine) {
    this.ui = ui;
    this.dataProvider = dataProvider;
    this.searchEngine = engine;
}

Application.prototype = {
    update: function () {
        this.ui.clear().wait();
        this.dataProvider.getUserRepositories(this.ui.getUsername())
            .then(JSON.parse)
            .then(this.respondToUserData.bind(this))
            .then(this.requestSearchData.bind(this))
            .then(JSON.parse)
            .then(this.respondToSearchData.bind(this))
            .catch(this.handleErrors.bind(this))
            .then(this.ui.unwait.bind(this.ui));
    },
    respondToUserData: function (userRepositories) {
        console.log(userRepositories);
        this.ui.updateUserData(userRepositories);
        return this.searchEngine.getRecommendationParams(userRepositories);
    },
    requestSearchData: function (searchParams) {
        console.log(searchParams);
        return this.dataProvider.searchForRepositories(searchParams);
    },
    respondToSearchData: function (searchResults) {
        console.log(searchResults);
        this.ui.updateRecommendations(searchResults.items);
        return searchResults;
    },
    handleErrors: function (errorData) {
        console.log(errorData);
        this.ui.showError('Could no get recommendations.');
        return errorData;
    }
};

exports.start = function (locator) {
    return new Application(locator.getUi(), locator.getDataProvider(), locator.getEngine());
};
