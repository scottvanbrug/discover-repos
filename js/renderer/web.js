/**
 * renderer.js
 */
'use strict';

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
    return util.format('<a href="%s">%s</a>', repository.html_url, repository.name);
};

/**
 * Render data about a user's repositories.
 *
 * @param {array} repositories
 * @return {string}
 */
var renderUserData = function (repositories) {
    return util.format(
        'Repositories: %d; Languages Used: %s',
        repositories.length,
        repositories.map(function (repo) { return repo.language; }).join(', ')
    );
};

exports.renderRepositoryList = renderRepositoryList;
exports.renderRepository = renderRepository;
exports.renderUserData = renderUserData;
