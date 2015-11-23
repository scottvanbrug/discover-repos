/**
 * xhrpromise.js
 * Promise wrapper around XMLHttpRequest
 *
 * Largely ripped from http://www.html5rocks.com/en/tutorials/es6/promises/
 */

https = require('https');

/**
 * Make a new Http request, returning a promise that will be resolved with
 * the request response.
 *
 * @param {string} url
 * @param {Object} options
 * @returns {Promise}
 */
function get(host, path) {
    return new Promise(function (resolve, reject) {
        var opts = {
            hostname: host,
            path: path
        };

        var req = https.request(opts, function (res) {
            var body = '';
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                body += chunk;
            });
            res.on('end', function () {
                resolve(body);
            });
        });
        req.on('error', function (e) {
            reject(new Error('Network error.'));
        });
        req.end();
    });
}

exports.get = get;
