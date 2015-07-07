var angular = require('angular');
var thingEntry = require('./directives/thing-entry/');

angular.module('tagThing', [])
  .directive('thingEntry', thingEntry);
