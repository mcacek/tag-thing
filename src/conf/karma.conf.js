module.exports = function(config) {
  config.set({
    files: [
      '../../src/js/main.js',
      '../../node_modules/angular-mocks/angular-mocks.js',
      '../../src/js/**/*.spec.js'
    ],
    frameworks: ['browserify', 'mocha', 'chai'],
    preprocessors: {
      '../../src/js/main.js': [ 'browserify' ],
      '../../js/**/*.spec.js': [ 'browserify' ]
    },
    browsers: ['PhantomJS'],
    browserify: {
      debug: true,
      transform: [ 'brfs' ]
    }
  });
};
