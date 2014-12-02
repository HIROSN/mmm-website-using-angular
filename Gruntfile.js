'use strict';

module.exports = function(grunt) {
  var srcFiles = [
    '**/*.js',
    '!node_modules/**/*',
    '!bower_components/**/*',
    '!build/**/*',
    '!public/**/*',
    '!test/browser/**/*'
  ];

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-karma');

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
        src: ['build/', 'public/']
      }
    },

    browserify: {
      dev: {
        src: [
          'app/js/**/*.js'
        ],
        dest: 'build/bundle.js',
        options: {
          transform: ['debowerify']
        }
      },

      browsertest: {
        src: [
          'test/browser/unit/**/*.js'
        ],
        dest: 'test/browser/browser_test_bundle.js',
        options: {
          transform: ['debowerify']
        }
      }
    },

    sass: {
      dist: {
        files: {
          'build/stylesheet.css': 'app/css/stylesheet.scss'
        }
      }
    },

    uglify: {
      target: {
        files: {
          'public/bundle.js': ['build/bundle.js']
        }
      }
    },

    htmlmin: {
      dist: {
        files: {
          'public/index.html': 'app/index.html',
          'public/mmm-display.html': 'app/mmm-display.html'
        },
        options: {
          removeComments: true,
          collapseWhitespace: true
        }
      }
    },

    cssmin: {
      target: {
        src: 'build/stylesheet.css',
        dest: 'public/stylesheet.css'
      }
    },

    karma: {
      continuous: {
        configFile: 'karma.config.js',
        singleRun: true,
        browsers: ['PhantomJS']
      }
    }
  });

  grunt.registerTask('default', [
    'jshint',
    'jscs',
    'simplemocha',
    'clean',
    'browserify',
    'sass',
    'uglify',
    'htmlmin',
    'cssmin',
    'karma'
  ]);
};
