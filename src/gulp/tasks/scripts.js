var gulp = require('gulp');
var browserify = require('browserify');
var plumber = require('gulp-plumber');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');

module.exports = {
  buildScripts: buildScripts
};

gulp.task('scripts', buildScripts);

var vendorDir = 'bower_components';

var options = {
  debug: true,
  paths: [vendorDir]
};

function buildScripts() {
  browserify('src/js/main.js', options)
    .bundle()
    .on('error', function(err) {
      gutil.log(gutil.colors.bgRed('Browserify error:'), gutil.colors.red(err.message));
    })
    .pipe(plumber())
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(gulp.dest('public/assets/js'));
}
