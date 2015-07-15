var gulp = require('gulp');
var watch = require('gulp-watch');
//var batch = require('gulp-batch');

function develop(cb) { // eslint-disable-line
  watch('src/**/*.*', function (events, done) {
    gulp.start('build');
  });
}

gulp.task('develop', ['build'], develop);

module.exports = {
  develop: develop
};
