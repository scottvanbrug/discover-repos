/**
 * engine.js
 * The thing that takes repositories and returns
 * params to use in searching for recommendations.
 */

/**
 * Get the query for the language of the repository.
 *
 * @param {Object.language} repo
 * @returns {string}
 */
function getLanguageQueryForRepository(repo) {
    return 'language:' + repo.language;
}

/**
 * Get search params based on a set of repositories.
 *
 * @param {array} repositories
 * @return {Object}
 */
exports.getRecommendationParams = function (repositories) {
    var params = {};
    if (repositories.length) {
        params.q = repositories.map(getLanguageQueryForRepository).join(' ');
        params.sort = 'stars';
    }
    return params;
};
