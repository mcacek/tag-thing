module.exports = thingService;

thingService.$inject = ['$log', '$q'];

function thingService($log, $q) {
  var service = {
    getThings: getThings,
    addThing: addThing,
    deleteThing: deleteThing,
    updateThing: updateThing
  };

  var idCount = 1;

  var things = [];

  function getThings() {
    $log.info('Getting things');
    return $q.resolve(things);
  }

  function addThing(thing) {
    $log.info('Adding thing:', thing);
    thing.id = getId();
    things.push(thing);
  }

  function deleteThing(thing) {
    $log.info('Deleting thing:', thing);
  }

  function updateThing(thing) {
    $log.info('Updating thing:', thing);
  }

  function getId() {
    return idCount++;
  }

  return service;
}
