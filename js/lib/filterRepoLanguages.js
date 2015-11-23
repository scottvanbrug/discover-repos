/**
 * lib/filterRepoLanguages.js
 */
'use strict';

module.exports = function filterRepoLanguages(arr) {
    // As everything in arr will be a string, can use an
    // object to store seen values for faster lookups while
    // checking for seen values.
    var seen = {};
    var results = [];
    var curr;
    for (var i = 0; i < arr.length; i++) {
        curr = arr[i];
        if (curr.language && !seen[curr.language]) {
            results.push(curr.language);
            seen[curr.language] = true;
        }
    }
    return results;
}
