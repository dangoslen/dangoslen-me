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
          "resources/css/style.css": "resources/less/style.less" // destination file and source file
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
          "resources/css/style.css": "resources/less/style.less" // destination file and source file
        }
      }
    },
    uglify: {
      production: {
        files: {
          "resources/js/dangoslen-me.js": ["resources/js/dangoslen-me.js"]
        }
      }
    },
    copy: {
        default: {
          files: [ //Copy javascript
            {expand: true, src: ['resources/js/**'], dest: 'build/'},
            {expand: true, src: ['resources/css/**'], dest: 'build/'}
          ]
        }
    },
    watch: {
      styles: {
        files: ['resources/less/style.less', 'resources/js/*.js'], // which files to watch
        tasks: ['less', 'copy'],
        options: {
          nospawn: true
        }
      }
    }
  });

  // ===========================================================================
  // Declare and Register our tasks
  // ===========================================================================
  grunt.registerTask('default', ['less', 'copy', 'watch'])
  grunt.registerTask('production', ['less:production', 'uglify:production', 'copy'])
};
