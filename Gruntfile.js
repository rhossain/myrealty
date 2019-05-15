/*
 * grunt-cli
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Tyler Kellen, contributors
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt-init/blob/master/LICENSE-MIT
 */

'use strict';


module.exports = function(grunt) {

    grunt.initConfig({
        imagemin: {
           dist: {
              options: {
                optimizationLevel: 7
              },
              files: [{
                 expand: true,
                 cwd: 'assets/images/',
                 src: ['**/*.{png,jpg,gif}'],
                 dest: 'assets/images/minfied-images/'
              }]
           }
        },
        concat: {
            css: {
                  src: ['assets/stylesheets/animate.min.css',
                      'assets/stylesheets/bootstrap-select.min.css',
                      'assets/stylesheets/bootstrap-slider.css',
                      'assets/stylesheets/font-awesome.min.css',
                      'assets/stylesheets/owl.carousel.css',
                    'assets/stylesheets/main.css'],
                  dest: 'assets/stylesheets/style.css'
                },
            js: {
                  src: ['assets/javascripts/bootstrap.min.js',
                      'assets/javascripts/bootstrap-select.js',
                      'assets/javascripts/bootstrap-slider.js',
                      'assets/javascripts/wow.min.js',
                      'assets/javascripts/jquery.countimator.min.js',
                      'assets/javascripts/jquery.mixitup.min.js',
                      'assets/javascripts/jquery.mobile.custom.min.js',
                      //'assets/javascripts/jquery.mousewheel-3.0.6.pack.js',
                      'assets/javascripts/owl.carousel.min.js',
                      'assets/javascripts/custom.js'],
                  dest: 'assets/javascripts/main.js'
                }
            },
        uglify: {
            js: {
                  src: 'assets/javascripts/main.js',
                  dest: 'assets/javascripts/main.min.js'
                }
            },
        cssmin: {
            css: {
                  src: 'assets/stylesheets/style.css',
                  dest: 'assets/stylesheets/style.min.css'
                }
            }
        });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    //grunt.registerTask('build', ['concat', 'uglify', 'cssmin', 'imagemin']);
    grunt.registerTask('build', ['concat', 'uglify', 'cssmin']);
};
