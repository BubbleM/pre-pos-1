'use strict';

function find(collection, ch) {
  for (let item of collection) {
    if (item.key === ch) {
      return item;
    }
  }
  return null;
}

module.exports = function countSameElements(collection) {
  var result = []; // [{key: 'a', count: 2}]
  for (let item of collection) {
    let obj = find(result, item);
    if (obj) {
      obj.count++;
    } else {
      result.push({key: item, count: 1});
    }
  }
  return result;
}
