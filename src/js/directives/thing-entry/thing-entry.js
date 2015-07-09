var fs = require('fs');
var path = require('path');

controller.$inject = ['$log'];

function controller($log) {
  var vm = this;
  vm.thing = {
    dscription: '',
    tags: ''
  };

  vm.addThing = addThing;

  function addThing() {
    $log.info('adding thing', vm.thing);
  }
}

module.exports = function() {
  return {
    scope: false,
    controller: controller,
    controllerAs: 'thingEntry',
    template: fs.readFileSync(path.join(__dirname, '/thing-entry.html'), 'utf8')
  };
};
