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
  let result = [];
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

function includes(collection, ch) {
  for (let item of collection) {
    if (item === ch) {
      return true;
    }
  }
  return false;
}

function discount(collection, promotionItems) {
  let result = [];
  for (let item of collection) {
    let key = item.key;
    let count = item.count;
    if (includes(promotionItems, key)) {
      count = count - Math.floor(count / 3);
    }
    result.push({key, count});
  }
  return result;
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let expandedArray = expand(collectionA);
  let summarized = summarize(expandedArray);
  return discount(summarized, objectB.value);
}
