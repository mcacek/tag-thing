describe('TagService', function() {
  beforeEach(module('tagThing'));

  var tagService;

  beforeEach(inject(function(_tagService_) {
    tagService = _tagService_;
  }));

  describe('#getTagSalience', function() {
    it('should return 1 if less 1', function() {
      // given an expectation of a less than 1
      var returnedSalience;
      var count = 0;
      var max = 10;

      // when getTagSalience is called
      returnedSalience = tagService.getTagSalience(count, max);

      // then we should expect a value of 1
      returnedSalience.should.equal(1);
    });

    it('should round up', function() {
      // given some values that should not return a whole value (.18)
      var returnedSalience;
      var count = 2;
      var max = 11;

      // when getTagSalience is called
      returnedSalience = tagService.getTagSalience(count, max);

      // then we should expect a rounded up value
      returnedSalience.should.equal(2);
    });

    it('should round down', function() {
      // given some values that should not return a whole value (.14)
      var returnedSalience;
      var count = 2;
      var max = 14;

      // when getTagSalience is called
      returnedSalience = tagService.getTagSalience(count, max);

      // then we should expect a rounded down value
      returnedSalience.should.equal(1);
    });
  });

  describe('getMaxTagCount', function() {
    it('should return 0 if no tags map is empty', function() {
      // given an empty tag map
      var tags = {};
      var returnedTagCount;

      // when getMaxTagCount is called
      returnedTagCount = tagService.getMaxTagCount(tags);

      // then the tag count should be 0
      returnedTagCount.should.equal(0);
    });

    it('should return the appropriate max count', function() {
      // given a tag map with real values
      var tags = {
        tag1: 5,
        tag2: 8,
        tag3: 6
      };
      var returnedTagCount;

      // when getMaxTagCount is called
      returnedTagCount = tagService.getMaxTagCount(tags);

      // then the tag count should be the largest value
      returnedTagCount.should.equal(8);
    });
  });
});
