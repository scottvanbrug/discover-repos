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

module.exports.renderRepositoryList = renderRepositoryList;
module.exports.renderRepository = renderRepository;
