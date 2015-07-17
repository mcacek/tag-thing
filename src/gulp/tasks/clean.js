var gulp = require('gulp');
var del = require('del');

function cleanAll() {
  del(['public/assets']);
}

function cleanScripts() {
  del(['public/assets/js']);
}

function cleanStyles() {
  del(['public/assets/css']);
}

gulp.task('clean', cleanAll);
gulp.task('clean:scripts', cleanScripts);
gulp.task('clean:styles', cleanStyles);

module.exports = {
  cleanAll: cleanAll,
  cleanScripts: cleanScripts,
  cleanStyles: cleanStyles
};
