var _ = require('lodash');

// #TagService
function service() {
  var methods = {
    getTagSalience: getTagSalience,
    getMaxTagCount: getMaxTagCount
  };

  // ##getTagSalience
  // Given a current tag count as well as min and max count, determine salience
  // value ranging from 1-10.
  function getTagSalience(count, max) {
    var salience = Math.round( (count / max) * 10 );

    return (salience < 1) ? 1 : salience;
  }

  // #getMaxTagCount
  // Determine the max tag use count given a map of tags.
  function getMaxTagCount(tags) {
    var tagCounts = _.map(tags);

    if (tagCounts.length === 0) {
      return 0;
    }

    return Math.max.apply(null, tagCounts);
  }

  return methods;
}

module.exports = service;
