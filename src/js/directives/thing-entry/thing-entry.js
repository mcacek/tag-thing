var fs = require('fs');
var path = require('path');
var angular = require('angular');

controller.$inject = ['thingService'];

function controller(thingService) {
  var vm = this;
  vm.thing = {
    description: '',
    tags: ''
  };

  vm.addThing = addThing;

  function addThing() {
    thingService.addThing(angular.copy(vm.thing));
    reset();
  }

  function reset() {
    thingEntryForm.reset();
  }
}

module.exports = function() {
  return {
    restrict: 'E',
    scope: false,
    controller: controller,
    controllerAs: 'thingEntry',
    template: fs.readFileSync(path.join(__dirname, '/thing-entry.html'), 'utf8')
  };
};
