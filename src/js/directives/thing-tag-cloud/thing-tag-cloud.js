var fs = require('fs');
var path = require('path');
var angular = require('angular');

controller.$inject = ['$log', '$scope', 'thingService', 'tagService'];

function controller($log, $scope, thingService, tagService) {
  var vm = this;
  vm.allOfTheTags = {};
  vm.theTags = theTags();

  $log.info('starting cloud');

  startup();

  function startup() {
    thingService.getThings()
      .then(function(data) {
        vm.allOfTheTags = addAllThings(data, vm.allOfTheTags);
      })
      .then(function() {
        $log.debug('max tag count:', tagService.getMaxTagCount(vm.allOfTheTags));
        $scope.$on('thing-added', thingAdded);
        $scope.$on('thing-removed', thingRemoved);
      });
  }

  function theTags() {
    return vm.allOfTheTags;
  }

  function addThing(thing, tags) {
    tags = angular.copy(tags);

    angular.forEach(thing.tags, function(tag) {
      if (tags[tag]) { // Updating tag.
        tags[tag]++;
      }
      else { // New tag.
        tags[tag] = 1;
      }
    });

    return tags;
  }

  function addAllThings(things, tags) {
    tags = angular.copy(tags);

    angular.forEach(things, function(thing) {
      tags = addThing(thing, tags);
    });

    return tags;
  }

  function removeThing(thing) { // eslint-disable-line

  }

  function thingAdded(event, thing) {
    $log.info('thing added:', thing);
    vm.allOfTheTags = addThing(thing, vm.allOfTheTags);
  }

  function thingRemoved(thing) {
    $log.info('thing removed:', thing);
    removeThing(thing);
    $scope.$apply();
  }
}

module.exports = function() {
  return {
    restrict: 'E',
    scope: false,
    controller: controller,
    controllerAs: 'thingTagCloud',
    template: fs.readFileSync(path.join(__dirname, '/thing-tag-cloud.html'), 'utf8')
  };
};
