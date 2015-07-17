var gulp = require('gulp');
var karma = require('karma');
var path = require('path');

module.exports = {
  testSingleRun: testSingleRun,
  testWatch: testWatch
};

gulp.task('test:unit', testSingleRun);
gulp.task('test:unit-watch', testWatch);
gulp.task('test', ['test:unit']);
gulp.task('test:watch', ['test:unit-watch']);

function testUnit(cb, singleRun) {
  new karma.Server({
    configFile: path.join(__dirname, '../../conf/karma.conf.js'),
    singleRun: singleRun
  }, cb).start();
}

function testSingleRun(cb) {
  testUnit(cb, true);
}

function testWatch(cb) {
  testUnit(cb, false);
}
