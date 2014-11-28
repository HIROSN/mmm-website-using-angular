'use strict';

module.exports = function(grunt) {
  var srcFiles = [
    '**/*.js',
    '!node_modules/**/*',
    '!bower_components/**/*',
    '!public/**/*'
  ];

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-sass');

  grunt.initConfig({
    jshint: {
      files: srcFiles,
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: srcFiles,
      options: {
        preset: 'google'
      }
    },

    simplemocha: {
      src: ['test/unit/**/*.js', 'test/api/**/*.js']
    },

    clean: {
      dev: {
        src: ['public/']
      }
    },

    copy: {
      dev: {
        cwd: 'app/',
        src: ['**/*.html'],
        expand: true,
        dest: 'public/'
      },

      map: {
        cwd: 'bower_components/angular/',
        src: ['**/angular.min.js.map'],
        expand: true,
        dest: 'public/'
      }
    },

    browserify: {
      dev: {
        src: [
          'app/js/**/*.js',
          'bower_components/angular/angular.min.js'
        ],
        dest: 'public/bundle.js',
        options: {
          transform: ['debowerify']
        }
      }
    },

    sass: {
      dist: {
        files: {
          'public/stylesheet.css': 'app/css/stylesheet.scss'
        }
      }
    }
  });

  grunt.registerTask('default', [
    'jshint',
    'jscs',
    'simplemocha',
    'clean',
    'copy',
    'browserify',
    'sass'
  ]);
};
