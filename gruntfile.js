'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'assets/images/',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: 'assets/images/'
        }]
      }
    },
    imgcompress: {
      dist: {
        options: {
          optimizationLevel: 7,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'assets/images/',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: 'assets/images/'
        }]
      }
    },
    uncss: {
      dist: {
        options: {
          ignore: [
            '.navbar-solid',
            '.in',
            '.leftauto',
            '.left-side',
            '.open',
            '.disabled',
            '.binded',
            '.is-checked',
            '.og-expanded',
            '.placeholder',
            '.ie',
            '.flex-direction-nav',
            '.flex-direction-nav .flex-prev',
            '.flex-next',
            '.flex-direction-nav .flex-next',
            '.flex-active-slide',
            '.flex-direction-nav a',
            '.flex-direction-nav a.flex-prev',
            '.flex-direction-nav a.flex-next'
          ],
          htmlroot: '_site'
        },
        files: {
          '_site/css/style.min.css': ['_site/index.html', '_site/404.html', '_site/portfolio.html', '_site/projects/sat/index.html']
        }
      }
    },
    cssmin: {
       dist: {
          files: {
              '_site/css/style.min.css': [
                '_site/assets/lib/bootstrap/dist/css/bootstrap.css',
                '_site/assets/lib/fontawesome/css/font-awesome.min.css',
                '_site/assets/lib/ionicons/css/ionicons.css',
                '_site/assets/lib/owlcarousel/owl-carousel/owl.carousel.css',
                '_site/assets/lib/owlcarousel/owl-carousel/owl.theme.css',
                '_site/assets/lib/FlexSlider/flexslider.css',
                '_site/assets/lib/magnific-popup/dist/magnific-popup.css',
                '_site/css/main.css'
              ]
          }
      }
    },
    processhtml: {
      dist: {
        files: {
          '_includes/head.html': ['_includes/head.html']
        }
      }
    },
    critical: {
      dist: {
        options: {
          base: './_site',
          width: 320,
          height: 70,
          css: ['_site/css/style.min.css'],
          minify: true
        },
        files: [{
            expand: true,
            cwd: '_site/',
            src: ['**/*.html'],
            dest: '_site/'
        }]
      }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-imgcompress');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-critical');

  // Register tasks
  grunt.registerTask('images', ['newer:imgcompress']);
  grunt.registerTask('pre-build', ['processhtml']);
  grunt.registerTask('min', ['cssmin', 'uncss', 'critical']);
};