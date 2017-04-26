module.exports = function(grunt) {
  require('jit-grunt');

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-string-replace');

  // Read values from package
  var pkg = grunt.file.readJSON('package.json');

  // ===========================================================================
  // Grunt Configurition
  // ===========================================================================
  grunt.initConfig({

    // Less compiler
    less: {
      // development profile
      development: {
        options: {
          compress: false,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "source/resources/css/style.css": "source/resources/less/style.less" // destination file and source file
        }
      },
      // production profile
      production: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "source/resources/css/style.css": "source/resources/less/style.less", // destination file and source file
          "source/resources/css/skeleton.css": "source/resources/css/skeleton.css", // destination file and source file
          "source/resources/css/normalize.css": "source/resources/css/normalize.css" // destination file and source file
        }
      }
    },
    uglify: {
      production: {
        files: {
          "source/resources/js/dangoslen-me.js": ["source/resources/js/dangoslen-me.js"]
        }
      }
    },
    copy: {
        default: {
          files: [ //Copy javascript
            { expand: true, flatten: true, cwd: 'source/resources/css/', src: '**', filter: 'isFile', dest: 'build/resources/css' },
            { expand: true, flatten: true, cwd: 'source/resources/js/', src: '**', filter: 'isFile',dest: 'build/resources/js' },
            { expand: true, flatten: true, cwd: 'source/resources/img/', src: '**', filter: 'isFile',dest: 'build/resources/img' }
          ]
        }
    },
    'string-replace': {
      inline: {
        files: {
          'build/index.html' : 'source/index.html'
        },
        options: {
          replacements: [
            { pattern: '{{ VERSION }}', replacement: pkg.version },
            { pattern: '{{ TIMESTAMP }}', replacement: grunt.template.date(new Date().getTime(), 'yyyy-mm-dd hh:mm') } // '1996-11-10'
          ]
        }
      }
    },
    watch: {
      styles: {
        files: ['source/resources/less/style.less', 'source/resources/js/*.js', 'source/index.html'], // which files to watch
        tasks: ['less', 'copy', 'string-replace'],
        options: {
          nospawn: true
        }
      }
    }
  });

  // ===========================================================================
  // Declare and Register our tasks
  // ===========================================================================
  grunt.registerTask('default', ['less', 'copy', 'string-replace', 'watch'])
  grunt.registerTask('development', ['less', 'copy', 'string-replace'])
  grunt.registerTask('production', ['less:production', 'uglify:production', 'copy', 'string-replace'])
};
