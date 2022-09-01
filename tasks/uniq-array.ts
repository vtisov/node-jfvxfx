import { deepEqual } from 'assert';

/**
 * Task
 *
 * Make all array elements unique
 *  - without external libraries
 *  - at least 2 ways
 */
const nonUnuqArray = ['a', 'b', 'a', 'c', 'b', 'b'];

function unique1(value) {
  let result = [];
  let set = new Set();
  for (let i = 0; i < value.length; i++) {
    if (!set.has(value[i])) {
      set.add(value[i]);
      result.push(value[i]);
    }
  }
  return result;
}

function unique2(value) {
  if (value.length == 0) return [];
  value.sort();
  let result = [];
  result[0] = value[0];
  for (let i = 1; i < value.length; i++) {
    if (value[i] != value[i - 1]) result.push(value[i]);
  }
  return result;
}

deepEqual(unique1(nonUnuqArray), ['a', 'b', 'c']);
deepEqual(unique2(nonUnuqArray), ['a', 'b', 'c']);

console.log('OK');
