var gulp = require('gulp');
var karma = require('karma');
var path = require('path');

module.exports = {
  testUnit: testUnit
};

gulp.task('test:unit', testUnit);
gulp.task('test', ['test:unit']);

function testUnit(cb) {
  new karma.Server({
    configFile: path.join(__dirname, '../../conf/karma.conf.js')
  }, cb).start();
}
