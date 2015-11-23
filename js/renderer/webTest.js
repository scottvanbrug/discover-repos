/**
 * webTest.js
 * Test for the web renderer.
 */

var expect = require('expect.js');
var renderer = require('./web.js');

var repoA = {'html_url': 'https://github.com/some/repo', 'name': 'some/repo', 'language': 'JavaScript', 'stargazers_count': 100, 'forks': 100, 'language': 'JavaScript'};
var repoB = {'html_url': 'https://github.com/other/repo', 'name': 'other/repo', 'language': 'Go', 'stargazers_count': 90, 'forks': 30, 'language': 'Go'};
var repoList = [repoA, repoB];

describe('renderer', function () {

    describe('#renderRepository', function () {
        it('should render a repository as a link to the repo', function (done) {
            var data = repoA;
            var output = renderer.renderRepository(data);
            expect(output).to.eql('<a href="https://github.com/some/repo">some/repo (100 stars and 100 forks). Primary language: JavaScript</a>');
            done();
        });
    });

    describe('#renderRepositoryList', function () {
        it('should render list of recommendations as ul of repos', function (done) {
            var data = repoList;
            var output = renderer.renderRepositoryList(data);
            expect(output).to.eql('<li>' +
                    '<a href="https://github.com/some/repo">some/repo (100 stars and 100 forks). Primary language: JavaScript</a>' +
                '</li>' +
                '<li>' +
                    '<a href="https://github.com/other/repo">other/repo (90 stars and 30 forks). Primary language: Go</a>' +
                '</li>'
            );
            done();
        });
    });

    describe('#renderUserData', function () {
        it('should render number of repositories and languages used', function (done) {
            var data = repoList;
            var output = renderer.renderUserData(data);
            expect(output).to.eql('Loading recommendations based on: repositories - 2 and languages - JavaScript, Go');
            done();
        })
    })
});
