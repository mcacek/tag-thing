var angular = require('angular');

angular.module('tagThing', [])
  .directive('thingEntry', require('./directives/thing-entry/'))
  .directive('thingList', require('./directives/thing-list/'))
  .service('thingService', require('./services/thing-service/'));
