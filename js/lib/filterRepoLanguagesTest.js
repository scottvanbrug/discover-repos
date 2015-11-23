/**
 * lib/filterRepoLanguagesTest.js
 * tests for lib/filterRepoLanguages.js
 */

var expect = require('expect.js');
var filter = require('./filterRepoLanguages.js');

var repoA = {'language': 'JavaScript'};
var repoB = {'language': 'Go'};
var repoC = {'language': 'Go'};
var repoD = {'language': null};
var repoList = [repoA, repoB, repoC, repoD];

describe('filterRepoLanguages', function () {
    it('should filter a list of repositories down to a unique list of languages used', function (done) {
        var results = filter(repoList);
        expect(results).to.eql(['JavaScript', 'Go']);
        done();
    });
});
