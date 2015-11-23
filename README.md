# Github Repository Recommendations

Get recommendations for repositories to follow based on your Github activity. Well, something like that...

Provide a Github username and get the most popular repositories based on your repositories, or at least the primary language used in your repositories.

Works by querying the Github API for all of the user's repositories. Then, builds search parameters based on the languages used in the user's repositories. Finally, searches Github via the API for repositories using those languages, sorted by the most stars.

This was really just a way to mess around with some new we tools that have appears since I've been largely working on other, non-front-end things. Notably: browserify, modules, mocha, grunt, promises.
