'use strict';

var isArrayLike = require('is-array-like');
var toLength    = require('to-length');

module.exports = function (arr, n) {

  if (!arr || !isArrayLike(arr)) {
    throw new TypeError('Argument error: an array or array-like object is expected.');
  }

  var length = arr.length;
  if (!length) {
    return [];
  }

  n = n === undefined ? 1 : toLength(n);
  n = length - n;

  var result = [];

  for (var i = 0; i < n; i++) {
    result.push(arr[i]);
  }

  return result;
};
