module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        eslint: {
            target: ['js/**/*.js']
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    captureFile: 'results.txt',
                    quite: false,
                    clearRequireCache: false
                },
                src: ['js/**/*Test.js']
            },
        },
        browserify: {
            main: {
                src: ['js/**/*.js', '!js/**/*Test.js'],
                dest: 'media/js/main.js'
            }
        },
        watch: {
            files: 'js/**/*.js',
            tasks: ['browserify']
        }
    });

    grunt.registerTask('default', ['eslint']);
};
