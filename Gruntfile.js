/* global module:true
 *
 * Gruntfile.js
 * npm install -g grunt-cli
 * npm install grunt-contrib-less grunt-contrib-watch grunt-contrib-connect --save-dev
 */
module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: '9000',
          base: 'www'
        }
      }
    },

    watch: {
      src: {
        files: ['www/css/*.css', 'www/js/*.js', 'www/templates/*.html', 'www/index.html'],
        options: { livereload: 35730 }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Run grunt server to get going
  grunt.registerTask('serve', [
    'connect',
    'watch'
  ]);
};