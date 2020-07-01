module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Task
    sass: {
      // Target
      dist: {
        // Target options
        options: {
          style: 'expanded',
          sourcemap: 'none',
        },
        // Dictionary of files
        files: {
          // 'destination': 'source'
          'dist/styles.css': 'src/styles.scss',
        },
      },
    },
    postcss: {
      options: {
        map: false, // inline sourcemaps
        processors: [
          require('autoprefixer')(),
          require('cssnano')(), // minify the result
        ],
      },
      dist: {
        src: 'dist/styles.css',
      },
    },
  });

  // Load sass compiler
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.loadNpmTasks('@lodder/grunt-postcss');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'postcss']);
};
