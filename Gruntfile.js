'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: ['Gruntfile.js', 'bin/*']
      },
    },
    watch: {
      all: {
        files: '<%= jshint.all.src %>',
        tasks: ['jshint']
      },
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint']);

};
