/**
 * webTest.js
 * Test for the web renderer.
 */

var expect = require('expect.js');
var renderer = require('./web.js');

var repoA = {'html_url': 'https://github.com/some/repo', 'name': 'some/repo'};
var repoB = {'html_url': 'https://github.com/other/repo', 'name': 'other/repo'};
var recommendations = [repoA, repoB];

describe('renderer', function () {

    describe('#renderRepository', function () {
        it('should render a repository as a link to the repo', function (done) {
            var data = repoA;
            var output = renderer.renderRepository(data);
            expect(output).to.eql('<a href="https://github.com/some/repo">some/repo</a>');
            done();
        });
    });

    describe('#renderRepositoryList', function () {
        it('should render list of recommendations as ul of repos', function (done) {
            var data = recommendations;
            var output = renderer.renderRepositoryList(data);
            expect(output).to.eql('<li>' +
                    '<a href="https://github.com/some/repo">some/repo</a>' +
                '</li>' +
                '<li>' +
                    '<a href="https://github.com/other/repo">other/repo</a>' +
                '</li>'
            );
            done();
        });
    });
});
