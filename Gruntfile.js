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
                    clearRequireCache: true
                },
                src: ['js/**/*Test.js']
            },
        },
        browserify: {
            main: {
                src: ['js/web.js'],
                dest: 'media/js/main.js'
            }
        },
        concat: {
            main: {
                src: ['css/reset.css', 'css/main.css'],
                dest: 'media/css/main.css'
            }
        },
        watch: {
            buildjs: {
                files: 'js/**/*.js',
                tasks: ['browserify']
            },
            buildcss: {
                files: 'css/*.css',
                tasks: ['concat']
            },
            test: {
                files: 'js/**/*.js',
                tasks: ['default']
            }
        }
    });

    grunt.registerTask('default', ['eslint', 'mochaTest']);
};
