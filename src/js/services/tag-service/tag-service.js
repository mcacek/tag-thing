var _ = require('lodash');

// #TagService
function service() {
  var methods = {
    getTagSalenience: getTagSalenience,
    getMaxTagCount: getMaxTagCount
  };

  // ##getSalience
  // Given a current tag count as well as min and max count, determine salience
  // value ranging from 1-10.
  function getTagSalenience(count, max) {
    return Math.round( (count / max) * 10 );
  }

  // #getMaxTagCount
  // Determine the max tag use count given a map of tags.
  function getMaxTagCount(tags) {
    if (tags.length === 0) {
      return 0;
    }

    var tagCounts = _.map(tags, function(count) {
      return count;
    });

    return Math.max.apply(null, tagCounts);
  }

  return methods;
}

module.exports = service;
