module.exports = thingService;

thingService.$inject = ['$log', '$q'];

function thingService($log, $q) {
  var service = {
    getThings: getThings,
    addThing: addThing,
    deleteThing: deleteThing,
    updateThing: updateThing
  };

  var things = [
    {
      description: 'thing #1',
      tags: ['tag1', 'tag2', 'tag3']
    }
  ];

  function getThings() {
    $log.info('Getting things');
    return $q.resolve(things);
  }

  function addThing(thing) {
    $log.info('Adding thing:', thing);
  }

  function deleteThing(thing) {
    $log.info('Deleting thing:', thing);
  }

  function updateThing(thing) {
    $log.info('Updating thing:', thing);
  }

  return service;
}
