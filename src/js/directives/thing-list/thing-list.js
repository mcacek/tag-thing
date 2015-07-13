var fs = require('fs');
var path = require('path');

controller.$inject = ['thingService'];

function controller(thingService) {
  var vm = this;

  startup();

  function startup() {
    thingService.getThings()
      .then(function(data) {
        vm.allOfTheThings = data;
      });
  }
}

var thingList = function() {
  return {
    restrict: 'E',
    controller: controller,
    controllerAs: 'thingList',
    template: fs.readFileSync(path.join(__dirname, '/thing-list.html'), 'utf8')
  };
};

module.exports = thingList;
