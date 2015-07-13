var gulp = require('gulp');
var browserify = require('browserify');
var plumber = require('gulp-plumber');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var eslint = require('gulp-eslint');

var vendorDir = 'bower_components';

var options = {
  debug: true,
  paths: [vendorDir]
};

function buildScripts() {
  browserify('src/js/main.js', options)
    .bundle()
    .pipe(plumber())
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(gulp.dest('assets/js'));
}

function checkScripts() {
  return gulp.src('src/js/**/*.js')
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format());
}

gulp.task('build-scripts', ['check-scripts'], buildScripts);
gulp.task('check-scripts', buildScripts);

module.exports = {
  buildScripts: buildScripts,
  checkScripts: checkScripts
};
