/**
 * engineTest.js
 * tests for the recommendation engine
 */

var engine = require('./github.js');
var expect = require('expect.js');

var repoA = {'language': 'JavaScript'};
var repoB = {'language': 'Go'};
var repoC = {'language': null};
var repoD = {'language': 'Go'};

describe('engine', function () {

    describe('#getRecommendationParams', function () {
        it('should get URI params based on repository languages', function (done) {
            var repositories = [repoA, repoB, repoC, repoD];
            var params = engine.getRecommendationParams(repositories);
            expect(params).to.eql({q: 'language:JavaScript language:Go', sort: 'stars'});
            done();
        });

        it('should return no params for when given no repositories', function (done) {
            var repositories = [];
            var params = engine.getRecommendationParams(repositories);
            expect(params).to.eql({});
            done();
        });
    });
});
