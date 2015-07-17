module.exports = function(config) {
  config.set({
    files: [
      '../../src/js/main.js',
      '../../node_modules/angular-mocks/angular-mocks.js',
      '../../src/js/**/*.spec.js'
    ],
    frameworks: ['browserify', 'jasmine'],
    preprocessors: {
      '../../src/js/main.js': [ 'browserify' ],
      '../../js/**/*.spec.js': [ 'browserify' ]
    },
    singleRun: true,
    browsers: ['PhantomJS'],
    browserify: {
      debug: true,
      transform: [ 'brfs' ]
      // configure: function(bundle) {
      //   bundle.on('prebundle', function() {
      //     // prebundle and stuff
      //   });
      // }
    },
    reporters: ['nyan'],

    // reporter options
    nyanReporter: {
      // suppress the error report at the end of the test run
      suppressErrorReport: true
    }
  });
};
