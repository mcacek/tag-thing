var angular = require('angular');

angular.module('tagThing', [])
  .directive('thingEntry', require('./directives/thing-entry/'))
  .directive('thingList', require('./directives/thing-list/'))
  .directive('thingTagCloud', require('./directives/thing-tag-cloud/'))
  .service('thingService', require('./services/thing-service/'))
  .service('tagService', require('./services/tag-service/'));
