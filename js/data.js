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

// just some test data until I get the HTTP requests
// going
var testUserData = [
    {
        "id": 30982264,
        "name": "composer",
        "full_name": "scottvanbrug/composer",
        "owner": {
            "login": "scottvanbrug",
            "id": 682843,
            "avatar_url": "https://avatars.githubusercontent.com/u/682843?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/scottvanbrug",
            "html_url": "https://github.com/scottvanbrug",
            "followers_url": "https://api.github.com/users/scottvanbrug/followers",
            "following_url": "https://api.github.com/users/scottvanbrug/following{/other_user}",
            "gists_url": "https://api.github.com/users/scottvanbrug/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/scottvanbrug/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/scottvanbrug/subscriptions",
            "organizations_url": "https://api.github.com/users/scottvanbrug/orgs",
            "repos_url": "https://api.github.com/users/scottvanbrug/repos",
            "events_url": "https://api.github.com/users/scottvanbrug/events{/privacy}",
            "received_events_url": "https://api.github.com/users/scottvanbrug/received_events",
            "type": "User",
            "site_admin": false
        },
        "private": false,
        "html_url": "https://github.com/scottvanbrug/composer",
        "description": "Dependency Manager for PHP",
        "fork": true,
        "url": "https://api.github.com/repos/scottvanbrug/composer",
        "forks_url": "https://api.github.com/repos/scottvanbrug/composer/forks",
        "keys_url": "https://api.github.com/repos/scottvanbrug/composer/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/scottvanbrug/composer/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/scottvanbrug/composer/teams",
        "hooks_url": "https://api.github.com/repos/scottvanbrug/composer/hooks",
        "issue_events_url": "https://api.github.com/repos/scottvanbrug/composer/issues/events{/number}",
        "events_url": "https://api.github.com/repos/scottvanbrug/composer/events",
        "assignees_url": "https://api.github.com/repos/scottvanbrug/composer/assignees{/user}",
        "branches_url": "https://api.github.com/repos/scottvanbrug/composer/branches{/branch}",
        "tags_url": "https://api.github.com/repos/scottvanbrug/composer/tags",
        "blobs_url": "https://api.github.com/repos/scottvanbrug/composer/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/scottvanbrug/composer/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/scottvanbrug/composer/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/scottvanbrug/composer/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/scottvanbrug/composer/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/scottvanbrug/composer/languages",
        "stargazers_url": "https://api.github.com/repos/scottvanbrug/composer/stargazers",
        "contributors_url": "https://api.github.com/repos/scottvanbrug/composer/contributors",
        "subscribers_url": "https://api.github.com/repos/scottvanbrug/composer/subscribers",
        "subscription_url": "https://api.github.com/repos/scottvanbrug/composer/subscription",
        "commits_url": "https://api.github.com/repos/scottvanbrug/composer/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/scottvanbrug/composer/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/scottvanbrug/composer/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/scottvanbrug/composer/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/scottvanbrug/composer/contents/{+path}",
        "compare_url": "https://api.github.com/repos/scottvanbrug/composer/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/scottvanbrug/composer/merges",
        "archive_url": "https://api.github.com/repos/scottvanbrug/composer/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/scottvanbrug/composer/downloads",
        "issues_url": "https://api.github.com/repos/scottvanbrug/composer/issues{/number}",
        "pulls_url": "https://api.github.com/repos/scottvanbrug/composer/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/scottvanbrug/composer/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/scottvanbrug/composer/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/scottvanbrug/composer/labels{/name}",
        "releases_url": "https://api.github.com/repos/scottvanbrug/composer/releases{/id}",
        "created_at": "2015-02-18T19:24:44Z",
        "updated_at": "2015-02-18T19:24:45Z",
        "pushed_at": "2015-02-17T21:55:44Z",
        "git_url": "git://github.com/scottvanbrug/composer.git",
        "ssh_url": "git@github.com:scottvanbrug/composer.git",
        "clone_url": "https://github.com/scottvanbrug/composer.git",
        "svn_url": "https://github.com/scottvanbrug/composer",
        "homepage": "http://getcomposer.org/",
        "size": 10416,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "PHP",
        "has_issues": false,
        "has_downloads": true,
        "has_wiki": false,
        "has_pages": false,
        "forks_count": 0,
        "mirror_url": null,
        "open_issues_count": 0,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master"
    },
    {
        "id": 32341648,
        "name": "devdocs",
        "full_name": "scottvanbrug/devdocs",
        "owner": {
            "login": "scottvanbrug",
            "id": 682843,
            "avatar_url": "https://avatars.githubusercontent.com/u/682843?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/scottvanbrug",
            "html_url": "https://github.com/scottvanbrug",
            "followers_url": "https://api.github.com/users/scottvanbrug/followers",
            "following_url": "https://api.github.com/users/scottvanbrug/following{/other_user}",
            "gists_url": "https://api.github.com/users/scottvanbrug/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/scottvanbrug/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/scottvanbrug/subscriptions",
            "organizations_url": "https://api.github.com/users/scottvanbrug/orgs",
            "repos_url": "https://api.github.com/users/scottvanbrug/repos",
            "events_url": "https://api.github.com/users/scottvanbrug/events{/privacy}",
            "received_events_url": "https://api.github.com/users/scottvanbrug/received_events",
            "type": "User",
            "site_admin": false
        },
        "private": false,
        "html_url": "https://github.com/scottvanbrug/devdocs",
        "description": "Magento developer resources",
        "fork": true,
        "url": "https://api.github.com/repos/scottvanbrug/devdocs",
        "forks_url": "https://api.github.com/repos/scottvanbrug/devdocs/forks",
        "keys_url": "https://api.github.com/repos/scottvanbrug/devdocs/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/scottvanbrug/devdocs/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/scottvanbrug/devdocs/teams",
        "hooks_url": "https://api.github.com/repos/scottvanbrug/devdocs/hooks",
        "issue_events_url": "https://api.github.com/repos/scottvanbrug/devdocs/issues/events{/number}",
        "events_url": "https://api.github.com/repos/scottvanbrug/devdocs/events",
        "assignees_url": "https://api.github.com/repos/scottvanbrug/devdocs/assignees{/user}",
        "branches_url": "https://api.github.com/repos/scottvanbrug/devdocs/branches{/branch}",
        "tags_url": "https://api.github.com/repos/scottvanbrug/devdocs/tags",
        "blobs_url": "https://api.github.com/repos/scottvanbrug/devdocs/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/scottvanbrug/devdocs/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/scottvanbrug/devdocs/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/scottvanbrug/devdocs/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/scottvanbrug/devdocs/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/scottvanbrug/devdocs/languages",
        "stargazers_url": "https://api.github.com/repos/scottvanbrug/devdocs/stargazers",
        "contributors_url": "https://api.github.com/repos/scottvanbrug/devdocs/contributors",
        "subscribers_url": "https://api.github.com/repos/scottvanbrug/devdocs/subscribers",
        "subscription_url": "https://api.github.com/repos/scottvanbrug/devdocs/subscription",
        "commits_url": "https://api.github.com/repos/scottvanbrug/devdocs/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/scottvanbrug/devdocs/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/scottvanbrug/devdocs/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/scottvanbrug/devdocs/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/scottvanbrug/devdocs/contents/{+path}",
        "compare_url": "https://api.github.com/repos/scottvanbrug/devdocs/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/scottvanbrug/devdocs/merges",
        "archive_url": "https://api.github.com/repos/scottvanbrug/devdocs/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/scottvanbrug/devdocs/downloads",
        "issues_url": "https://api.github.com/repos/scottvanbrug/devdocs/issues{/number}",
        "pulls_url": "https://api.github.com/repos/scottvanbrug/devdocs/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/scottvanbrug/devdocs/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/scottvanbrug/devdocs/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/scottvanbrug/devdocs/labels{/name}",
        "releases_url": "https://api.github.com/repos/scottvanbrug/devdocs/releases{/id}",
        "created_at": "2015-03-16T17:32:37Z",
        "updated_at": "2015-03-16T17:32:39Z",
        "pushed_at": "2015-03-16T00:20:51Z",
        "git_url": "git://github.com/scottvanbrug/devdocs.git",
        "ssh_url": "git@github.com:scottvanbrug/devdocs.git",
        "clone_url": "https://github.com/scottvanbrug/devdocs.git",
        "svn_url": "https://github.com/scottvanbrug/devdocs",
        "homepage": "http://www.magento.com",
        "size": 50097,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "HTML",
        "has_issues": false,
        "has_downloads": true,
        "has_wiki": false,
        "has_pages": true,
        "forks_count": 0,
        "mirror_url": null,
        "open_issues_count": 0,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "develop"
    }
];
var testSearchData = {
  "total_count": 2952053,
  "incomplete_results": false,
  "items": [
    {
      "id": 460078,
      "name": "angular.js",
      "full_name": "angular/angular.js",
      "owner": {
        "login": "angular",
        "id": 139426,
        "avatar_url": "https://avatars.githubusercontent.com/u/139426?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/angular",
        "html_url": "https://github.com/angular",
        "followers_url": "https://api.github.com/users/angular/followers",
        "following_url": "https://api.github.com/users/angular/following{/other_user}",
        "gists_url": "https://api.github.com/users/angular/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/angular/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/angular/subscriptions",
        "organizations_url": "https://api.github.com/users/angular/orgs",
        "repos_url": "https://api.github.com/users/angular/repos",
        "events_url": "https://api.github.com/users/angular/events{/privacy}",
        "received_events_url": "https://api.github.com/users/angular/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "private": false,
      "html_url": "https://github.com/angular/angular.js",
      "description": "HTML enhanced for web apps",
      "fork": false,
      "url": "https://api.github.com/repos/angular/angular.js",
      "forks_url": "https://api.github.com/repos/angular/angular.js/forks",
      "keys_url": "https://api.github.com/repos/angular/angular.js/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/angular/angular.js/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/angular/angular.js/teams",
      "hooks_url": "https://api.github.com/repos/angular/angular.js/hooks",
      "issue_events_url": "https://api.github.com/repos/angular/angular.js/issues/events{/number}",
      "events_url": "https://api.github.com/repos/angular/angular.js/events",
      "assignees_url": "https://api.github.com/repos/angular/angular.js/assignees{/user}",
      "branches_url": "https://api.github.com/repos/angular/angular.js/branches{/branch}",
      "tags_url": "https://api.github.com/repos/angular/angular.js/tags",
      "blobs_url": "https://api.github.com/repos/angular/angular.js/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/angular/angular.js/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/angular/angular.js/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/angular/angular.js/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/angular/angular.js/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/angular/angular.js/languages",
      "stargazers_url": "https://api.github.com/repos/angular/angular.js/stargazers",
      "contributors_url": "https://api.github.com/repos/angular/angular.js/contributors",
      "subscribers_url": "https://api.github.com/repos/angular/angular.js/subscribers",
      "subscription_url": "https://api.github.com/repos/angular/angular.js/subscription",
      "commits_url": "https://api.github.com/repos/angular/angular.js/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/angular/angular.js/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/angular/angular.js/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/angular/angular.js/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/angular/angular.js/contents/{+path}",
      "compare_url": "https://api.github.com/repos/angular/angular.js/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/angular/angular.js/merges",
      "archive_url": "https://api.github.com/repos/angular/angular.js/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/angular/angular.js/downloads",
      "issues_url": "https://api.github.com/repos/angular/angular.js/issues{/number}",
      "pulls_url": "https://api.github.com/repos/angular/angular.js/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/angular/angular.js/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/angular/angular.js/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/angular/angular.js/labels{/name}",
      "releases_url": "https://api.github.com/repos/angular/angular.js/releases{/id}",
      "created_at": "2010-01-06T00:34:37Z",
      "updated_at": "2015-11-21T21:54:48Z",
      "pushed_at": "2015-11-21T16:21:37Z",
      "git_url": "git://github.com/angular/angular.js.git",
      "ssh_url": "git@github.com:angular/angular.js.git",
      "clone_url": "https://github.com/angular/angular.js.git",
      "svn_url": "https://github.com/angular/angular.js",
      "homepage": "http://angularjs.org",
      "size": 140214,
      "stargazers_count": 44448,
      "watchers_count": 44448,
      "language": "JavaScript",
      "has_issues": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 20285,
      "mirror_url": null,
      "open_issues_count": 1258,
      "forks": 20285,
      "open_issues": 1258,
      "watchers": 44448,
      "default_branch": "master",
      "score": 1.0
    },
    {
      "id": 943149,
      "name": "d3",
      "full_name": "mbostock/d3",
      "owner": {
        "login": "mbostock",
        "id": 230541,
        "avatar_url": "https://avatars.githubusercontent.com/u/230541?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/mbostock",
        "html_url": "https://github.com/mbostock",
        "followers_url": "https://api.github.com/users/mbostock/followers",
        "following_url": "https://api.github.com/users/mbostock/following{/other_user}",
        "gists_url": "https://api.github.com/users/mbostock/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/mbostock/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/mbostock/subscriptions",
        "organizations_url": "https://api.github.com/users/mbostock/orgs",
        "repos_url": "https://api.github.com/users/mbostock/repos",
        "events_url": "https://api.github.com/users/mbostock/events{/privacy}",
        "received_events_url": "https://api.github.com/users/mbostock/received_events",
        "type": "User",
        "site_admin": false
      },
      "private": false,
      "html_url": "https://github.com/mbostock/d3",
      "description": "A JavaScript visualization library for HTML and SVG.",
      "fork": false,
      "url": "https://api.github.com/repos/mbostock/d3",
      "forks_url": "https://api.github.com/repos/mbostock/d3/forks",
      "keys_url": "https://api.github.com/repos/mbostock/d3/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/mbostock/d3/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/mbostock/d3/teams",
      "hooks_url": "https://api.github.com/repos/mbostock/d3/hooks",
      "issue_events_url": "https://api.github.com/repos/mbostock/d3/issues/events{/number}",
      "events_url": "https://api.github.com/repos/mbostock/d3/events",
      "assignees_url": "https://api.github.com/repos/mbostock/d3/assignees{/user}",
      "branches_url": "https://api.github.com/repos/mbostock/d3/branches{/branch}",
      "tags_url": "https://api.github.com/repos/mbostock/d3/tags",
      "blobs_url": "https://api.github.com/repos/mbostock/d3/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/mbostock/d3/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/mbostock/d3/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/mbostock/d3/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/mbostock/d3/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/mbostock/d3/languages",
      "stargazers_url": "https://api.github.com/repos/mbostock/d3/stargazers",
      "contributors_url": "https://api.github.com/repos/mbostock/d3/contributors",
      "subscribers_url": "https://api.github.com/repos/mbostock/d3/subscribers",
      "subscription_url": "https://api.github.com/repos/mbostock/d3/subscription",
      "commits_url": "https://api.github.com/repos/mbostock/d3/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/mbostock/d3/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/mbostock/d3/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/mbostock/d3/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/mbostock/d3/contents/{+path}",
      "compare_url": "https://api.github.com/repos/mbostock/d3/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/mbostock/d3/merges",
      "archive_url": "https://api.github.com/repos/mbostock/d3/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/mbostock/d3/downloads",
      "issues_url": "https://api.github.com/repos/mbostock/d3/issues{/number}",
      "pulls_url": "https://api.github.com/repos/mbostock/d3/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/mbostock/d3/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/mbostock/d3/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/mbostock/d3/labels{/name}",
      "releases_url": "https://api.github.com/repos/mbostock/d3/releases{/id}",
      "created_at": "2010-09-27T17:22:42Z",
      "updated_at": "2015-11-21T22:11:14Z",
      "pushed_at": "2015-11-16T16:33:55Z",
      "git_url": "git://github.com/mbostock/d3.git",
      "ssh_url": "git@github.com:mbostock/d3.git",
      "clone_url": "https://github.com/mbostock/d3.git",
      "svn_url": "https://github.com/mbostock/d3",
      "homepage": "https://d3js.org",
      "size": 110647,
      "stargazers_count": 43662,
      "watchers_count": 43662,
      "language": "JavaScript",
      "has_issues": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": true,
      "forks_count": 11605,
      "mirror_url": null,
      "open_issues_count": 246,
      "forks": 11605,
      "open_issues": 246,
      "watchers": 43662,
      "default_branch": "master",
      "score": 1.0
    }
  ]
};

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
    return new Promise(function (resolve, reject) {
        resolve(JSON.stringify(testUserData));
    });
}

/**
 * Search for repositories based on the provided search params.
 *
 * @param {Object} searchParams
 * @return {Promise} Will resolve with repositories found for search params
 */
exports.searchForRepositories = function (searchParams) {
    return new Promise(function (resolve, reject) {
        resolve(JSON.stringify(testSearchData));
    });
}
