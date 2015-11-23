/**
 * renderer.js
 */
'use strict';

var filterRepoLanguages = require('../lib/filterRepoLanguages.js');
var util = require('util');

/**
 * Render a list of recommended repositories as
 * a string of HTML
 *
 * @param {array} repositories
 * @returns {string}
 */
var renderRepositoryList = function (repositories) {
    return repositories.length
        ? '<li>' + repositories.map(renderRepository).join('</li><li>') + '</li>'
        : '';
};

/**
 * Render a repository as a string of HTML
 *
 * @param {Object} repository
 * @param {Object.html_url} repository
 * @param {Object.name} repository
 * @returns {string}
 */
var renderRepository = function (repository) {
    return util.format(
        '<a href="%s">%s (%d stars and %d forks). Primary language: %s</a>',
        repository.html_url,
        repository.name,
        repository.stargazers_count,
        repository.forks,
        repository.language
    );
};

/**
 * Render data about a user's repositories.
 *
 * @param {array} repositories
 * @returns {string}
 */
var renderUserData = function (repositories) {
    return util.format(
        'Loading recommendations based on: repositories - %d and languages - %s',
        repositories.length,
        filterRepoLanguages(repositories).join(', ')
    );
};

exports.renderRepositoryList = renderRepositoryList;
exports.renderRepository = renderRepository;
exports.renderUserData = renderUserData;
