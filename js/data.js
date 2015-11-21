/**
 * data.js
 */
'use strict';

// DI https so loading of data via https can be circumvented
// while testing
var https = require('https');
var querystring = require('querystring');
var util = require('util');

// think this should be configuration somewhere else
var hostname = 'github.com';
var userReposFormat = '/users/%s/repos';
var languageSearchFormat = '/search/repositories?%s';

/**
 * Get the path for a user's repositories.
 *
 * @param {string} user
 * @return string
 */
function getUserRepoPath(user) {
    return util.format(userReposFormat, user);
}

/**
 * Get the path to search for repositories based on a
 * list of languages.
 *
 * @param {Object} searchParams
 * @return string
 */
function getRepoSearchPath(searchParams) {
    return util.format(languageSearchFormat, querystring.stringify(searchParams));
}

/**
 * Get the user's repositories.
 *
 * @param {string} user
 * @return {Promise} Will resolve with repository data
 */
exports.getUserRepositories = function (user) {

}

/**
 * Search for repositories based on the provided search params.
 *
 * @param {Object} searchParams
 * @return {Promise} Will resolve with repositories found for search params
 */
exports.searchForRepositories = function (searchParams) {

}
