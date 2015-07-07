var fs = require('fs');
var path = require('path');

var controller = function() {

};

controller.prototype.addThing = function() {
  console.log('adding thing');
};

module.exports = function() {
  return {
    replace: true,
    scope: false,
    template: fs.readFileSync(path.join(__dirname, '/thing-entry.html'), 'utf8')
  };
};
