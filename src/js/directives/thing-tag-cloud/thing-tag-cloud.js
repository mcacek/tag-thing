var fs = require('fs');
var path = require('path');
var angular = require('angular');

controller.$inject = ['$log', '$scope', 'thingService'];

function controller($log, $scope, thingService) {
  var vm = this;
  vm.allOfTheTags = {};

  $log.info('starting cloud');

  startup();

  $scope.$on('thing-added', thingAdded);
  $scope.$on('thing-removed', thingRemoved);

  function startup() {
    var newTags = angular.copy(vm.allOfTheTags);

    thingService.getThings()
      .then(function(data) {
        data.forEach(function(thing) {
          thing.tags.forEach(function(tag) {
            if (undefined !== newTags[tag]) { // Updating tag.
              newTags[tag]++;
            }
            else { // New tag.
              newTags[tag] = 1;
            }
          });

          vm.allOfTheTags = newTags;
        });
      });
  }

  function thingAdded(thing) {
    $log.info('thing added:', thing);

    // Lookup tags in map and change counter;
  }

  function thingRemoved(thing) {
    $log.info('thing removed:', thing);

    // Lookup tags in map and change counter;
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
