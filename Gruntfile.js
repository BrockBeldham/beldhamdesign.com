module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' + '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>; */',

        static_folder: 'static/',

        clean: {
            js: {
                src: [
                    '<%= static_folder %>dist/js/**/*.js'
                ]
            },
            css: {
                src: [
                    '<%= static_folder %>dist/**/*.css',
                    '<%= static_folder %>css/**/*.css'
                ]
            }
        },

        less: {
            production: {
                files: {
                    '<%= static_folder %>dist/css/core.min.css' : [
                        // Base
                        '<%= static_folder %>less/base/reset.less',
                        '<%= static_folder %>less/base/base.less',
                        '<%= static_folder %>less/base/layout.less',

                        // Modules
                        '<%= static_folder %>less/modules/utilities.less',
                        '<%= static_folder %>less/modules/header.less',
                        '<%= static_folder %>less/modules/home.less',
                        '<%= static_folder %>less/modules/work.less',
                        '<%= static_folder %>less/modules/about.less',

                        // States
                        '<%= static_folder %>less/states/state.less'
                    ]
                }
            },
            development: {
                expand: true,
                cwd: '<%= static_folder %>less/',
                src: [
                    'base/*.less',
                    'modules/*.less',
                    'states/state.less',
                ],
                dest: '<%= static_folder %>css/',
                ext: ".css"
            }
        },

        jshint: {
            options: {
                jshintrc: '<%= static_folder %>js/.jshintrc'
            },
            gruntfile: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: 'Gruntfile.js'
            },
            project : {
                src: '<%= static_folder %>js/**/*.js'
            }
        },

        uglify: {
            production : {
                files: {
                    '<%= static_folder %>dist/js/core.min.js' : [
                        // Components
                        '<%= static_folder %>js/initialize.js'
                    ]
                }
            }
        },

        watch: {
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: 'jshint:gruntfile'
            },
            js: {
                files: '<%= static_folder %>js/**/*.js',
                tasks: [
                    'clean:js',
                    'uglify'
                ]
            },
            less: {
                files: '<%= static_folder %>less/**/*.less',
                tasks: 'build-css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'jshint',
        'build-css',
        'build-js'
    ]);

    grunt.registerTask('build-css', [
        'clean:css',
        'less'
    ]);

    grunt.registerTask('build-js', [
        'clean:js',
        'uglify'
    ]);
};