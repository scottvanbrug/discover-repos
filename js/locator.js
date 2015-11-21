/**
 * services.js
 * Service locator for the pieces of the application.
 * The goal here is to extract dependencies from the
 * application layers, inject the locator to the application
 * and have the application use the locator to find and
 * inject further dependencies. So far, not all of the
 * necessary dependencies have been extracted, most
 * notably the dependency on 'https' in the data provider.
 */
'use strict';

var locator = {
    ui: null,
    dataProvider: null,
    engine: null,

    initialize: function (args) {
        this.ui = args.ui;
        this.dataProvider = args.dataSource;
        this.engine = args.searchEngine;
    },
    /**
     * Get the source of data for the application.
     *
     * @TODO this should be more configurable, get more
     * data injected by the locator but as of yet, that is
     * not yet available.
     *
     * @returns {Object}
     * @returns {Object.getUserRepositories}
     * @returns {Object.getRepositoriesForLanguages}
     */
    getDataProvider: function () {
        return this.dataProvider;
    },
    /**
     * Get the UI instance for the application.
     *
     * @TODO Configurable for web or cli?
     * @TODO Fix up the return doc to include
     * interface of returned object
     *
     * @return {Object}
     */
    getUi: function () {
        return this.ui;
    },
    /**
     * Get the engine used to build search queries
     * based on user/repository data.
     *
     * @return {Object}
     */
    getEngine: function () {
        return this.engine;
    }
};

module.exports = locator;
