'use strict';

function split(item) {
  let array = item.split('-');
  return {key: array[0], count: parseInt(array[1], 10)}
}

function push(result, key, count) {
  for (let i = 0; i < count; i++) {
    result.push(key);
  }
}

function expand(collection) {
  var result = [];
  for (let item of collection) {
    if (item.length === 1) {
      result.push(item);
    } else {
      let {key, count} = split(item);
      push(result, key, count);
    }
  }
  return result;
}

function find(collection, ch) {
  for (let item of collection) {
    if (item.key === ch) {
      return item;
    }
  }
  return null;
}

function summarize(collection) {
  var result = [];
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

module.exports = function countSameElements(collection) {
  let expandedArray = expand(collection);
  return summarize(expandedArray);
}
