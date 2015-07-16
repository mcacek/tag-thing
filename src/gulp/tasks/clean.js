var gulp = require('gulp');
var del = require('del');

function clean() {
  del(['public/assets']);
}

gulp.task('clean', clean);

module.exports = {
  clean: clean
};
