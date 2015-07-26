var gulp = require('gulp');
var watch = require('gulp-watch');
//var batch = require('gulp-batch');

function develop(cb) { // eslint-disable-line
  watch('src/**/*.*', function () {
    gulp.start(['scripts:dev', 'styles']);
  });
}

gulp.task('develop', develop);

module.exports = {
  develop: develop
};
