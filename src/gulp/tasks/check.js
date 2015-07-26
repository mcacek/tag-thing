var gulp = require('gulp');
var eslint = require('gulp-eslint');
var cached = require('gulp-cached');

module.exports = {
  checkScripts: checkScripts
};

gulp.task('check:scripts', checkScripts);
gulp.task('check', ['check:scripts']);

function checkScripts() {
  return gulp.src('src/js/**/*.js')
    .pipe(cached('check-scripts'))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
}
