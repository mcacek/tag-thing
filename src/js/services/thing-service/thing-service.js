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

  [1, 2, 3, 4, 5].forEach(function(num) {
    addThing({
      description: "Thing #" +num,
      tags: 'tag1, tag2, tag3'
    });
  });

  function getThings() {
    $log.info('Getting things');
    return $q.resolve(things);
  }

  function addThing(thing) {
    $log.info('Adding thing:', thing);
    thing.id = getId();
    thing.tags = thing.tags.split(',');
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
