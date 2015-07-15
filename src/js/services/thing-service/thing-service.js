module.exports = thingService;

thingService.$inject = ['$log', '$q', '$rootScope'];

function thingService($log, $q, $rootScope) {
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
    thing.tags = thing.tags.split(',');
    things.push(thing);

    $rootScope.$emit('thing-added', thing);
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
