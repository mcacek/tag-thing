describe('ThingService', function() {
  beforeEach(module('tagThing'));

  var thingService; // eslint-disable-line

  beforeEach(inject(function(_thingService_) {
    thingService = _thingService_;
  }));

  describe('#getThings', function() {

  });

  describe('#addThing', function() {
    it('should split tags by a comma delimiter', function() {
      // given a comma delimited tag string
      var thing = {
        description: 'test item',
        tags: 'tag1, tag2'
      };
      var returnedThing;

      // when addThing is called
      returnedThing = thingService.addThing(thing);

      // the tags string should be split into multiple tags
      returnedThing.tags.should.have.length(2);
    });

    it('spaces should be trimmed from tags', function() {
      // given a string of tags with spaces
      var thing = {
        description: 'test item',
        tags: 'tag1, tag2'
      };
      var returnedThing;

      // when addThing is called
      returnedThing = thingService.addThing(thing);

      // then the resulting thing should not contains tags with leading or trailing spaces
      returnedThing.tags.should.have.length(2);
      returnedThing.tags[0].should.have.length(4);
      returnedThing.tags[1].should.have.length(4);
    });
  });

  describe('#deleteThing', function() {
  });

  describe('#updateThing', function() {
  });
});
