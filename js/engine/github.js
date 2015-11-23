/**
 * engine.js
 * The thing that takes repositories and returns
 * params to use in searching for recommendations.
 */
'use strict';

var filterRepoLanguages = require('../lib/filterRepoLanguages.js');

/**
 * Get the query for the language of the repository.
 *
 * @param {Object.language} repo
 * @returns {string}
 */
function getLanguageQuery(language) {
    return 'language:' + language;
}

/**
 * Get search params based on a set of repositories.
 *
 * @param {array} repositories
 * @returns {Object}
 */
exports.getRecommendationParams = function (repositories) {
    var params = {};
    if (repositories.length) {
        params.q = filterRepoLanguages(repositories)
            .map(getLanguageQuery)
            .join(' ');
        params.sort = 'stars';
    }

    return params;
};
