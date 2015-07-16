module.exports = function(config) {
  config.set({
    files: ['../../js/**/*.spec.js'],
    frameworks: ['browserify', 'jasmine'],
    preprocessors: {
      '../../js/**/*.spec.js': [ 'browserify' ]
    },
    browserify: {
      debug: true,
      transform: [ 'brfs' ]
    }
  });
};
