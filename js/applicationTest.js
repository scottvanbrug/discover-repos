/**
 * applicationTest.js
 */

var expect = require('expect.js');
var Application = require('./application.js');

var username = 'theusername';
var submitButton = {
    addEventListener: function () {}
};
var mockUi = {
    userUpdated: false,
    cleared: false,
    isWaiting: false,
    recosUpdated: false,
    errorUpdated: false,
    reset: function () {
        this.userUpdate = false;
        this.cleared = false;
        this.isWaiting = false;
        this.recosUpdated = false;
        this.errorUpdated = false;
    },
    updateUserData: function (data) {
        this.userUpdated = true;
        return this;
    },
    getUsername: function () {
        return username;
    },
    clear: function () {
        this.cleared = true;
        return this;
    },
    wait: function () {
        this.isWaiting = true;
        return this;
    },
    unwait: function () {
        this.isWaiting = false;
        return this;
    },
    updateRecommendations: function (data) {
        this.recosUpdated = true;
        return this;
    },
    showError: function (msg) {
        this.errorUpdated = true;
        return this;
    },
    getSubmitButton: function () {
        return submitButton;
    }
};
var userData = '{}';
var searchResults = '{}';
var errorMessage = 'Error message';
var mockSuccessData = {
    getUserRepositories: function (username) {
        return new Promise(function (res, rej) {
            res(userData);
        })
    },
    searchForRepositories: function (repos) {
        return new Promise(function (res, rej) {
            res(searchResults);
        })
    }
};
var mockFailData = {
    getUserRepositories: function (username) {
        return new Promise(function (res, rej) {
            rej(errorMessage);
        })
    },
    searchForRepositories: function (repos) {
        return new Promise(function (res, rej) {
            rej(errorMessage);
        })
    }
};

describe('Application', function () {

    afterEach(function () {
        mockUi.reset();
    });

    describe('#respondToUserData', function () {
        it('should update the ui with user data', function (done) {
            var app = new Application(mockUi, mockSuccessData);
            app.respondToUserData({});
            expect(mockUi.userUpdated).to.be(true);
            done();
        });
    });

    describe('#requestSearchData', function () {
        it('should request new data from the provider', function (done) {
            var app = new Application(mockUi, mockSuccessData);
            var res = app.requestSearchData({});
            expect(res).to.be.a(Promise);
            res.then(function (data) {
                expect(data).to.be(searchResults);
            });
            done();
        })
    });

    describe('#responseToSearchData', function () {
        it('should update the UI with recommendations', function (done) {
            var app = new Application(mockUi, mockSuccessData);
            app.respondToSearchData({});
            expect(mockUi.recosUpdated).to.be(true);
            done();
        });
    });

    describe('#handleErrors', function () {
        it('sould update the ui with errors', function (done) {
            var app = new Application(mockUi, mockSuccessData);
            app.handleErrors(errorMessage);
            expect(mockUi.errorUpdated).to.be(true);
            done();
        });
    });
});
