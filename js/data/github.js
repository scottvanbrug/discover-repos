/**
 * data.js
 */
'use strict';

var querystring = require('querystring');
var util = require('util');
var httppromise = require('../lib/httppromise.js');
var engine = require('../engine/github.js');

// think this should be configuration somewhere else
var hostname = 'api.github.com';
var userReposFormat = '/users/%s/repos';
var languageSearchFormat = '/search/repositories?%s';

/**
 * Get the path for a user's repositories.
 *
 * @param {string} user
 * @returns string
 */
function getUserRepoPath(user) {
    return util.format(userReposFormat, user);
}

/**
 * Get the path to search for repositories based on a
 * list of languages.
 *
 * @param {Object} searchParams
 * @returns string
 */
function getRepoSearchPath(searchParams) {
    return util.format(languageSearchFormat, querystring.stringify(searchParams));
}

/**
 * Get the user's repositories.
 *
 * @param {string} user
 * @returns {Promise} Will resolve with repository data
 */
exports.getUserRepositories = function (user) {
    return httppromise.get(hostname, getUserRepoPath(user));
};

/**
 * Search for repositories based on the provided search params.
 *
 * @param {Object} searchParams
 * @returns {Promise} Will resolve with repositories found for search params
 */
exports.searchForRepositories = function (userData) {
    return httppromise.get(hostname, getRepoSearchPath(engine.getRecommendationParams(userData)));
};
