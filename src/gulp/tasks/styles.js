var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');

var options = {
  paths: [
    'src/js/directives',
    'node_modules'
  ]
};

function buildStyles() {
  gulp.src('src/less/main.less')
    .pipe(plumber())
    .pipe(less(options))
    .pipe(gulp.dest('public/assets/css'));
}

gulp.task('build-styles', buildStyles);

module.exports = {
  buildStyles: buildStyles
};
