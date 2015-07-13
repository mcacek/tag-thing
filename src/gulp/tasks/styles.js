var gulp = require('gulp');
var less = require('gulp-less');

var options = {
  paths: ['src/js/directives']
};

function buildStyles() {
  gulp.src('src/less/main.less')
    .pipe(less(options))
    .pipe(gulp.dest('assets/css'));
}

gulp.task('build-styles', buildStyles);

module.exports = {
  buildStyles: buildStyles
};
