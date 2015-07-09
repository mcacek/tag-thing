var fs = require('fs');
var path = require('path');

controller.$inject = ['thingService'];

function controller(thingService) {
  var vm = this;
  vm.thing = {
    dscription: '',
    tags: ''
  };

  vm.addThing = addThing;

  function addThing() {
    thingService.addThing(vm.thing);
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
