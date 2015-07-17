var gulp = require('gulp');
var plumber = require('gulp-plumber');
var eslint = require('gulp-eslint');
var cached = require('gulp-cached');

module.exports = {
  checkScripts: checkScripts
};

gulp.task('check:scripts', checkScripts);
gulp.task('check', ['check:scripts']);

function checkScripts() {
  return gulp.src('src/js/**/*.js')
    .pipe(plumber())
    .pipe(cached('check-scripts'))
    .pipe(eslint())
    .pipe(eslint.format());
}
