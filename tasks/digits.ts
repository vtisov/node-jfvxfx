import { equal } from 'assert';

/**
 * Task
 *
 * Calculate the sum of digits of passed integer
 * 1. Add a returning value type
 * 2. Complete the function
 */
function sum(value: number) : number {
  // **** Your code goes here ****
  let sum = 0;
  const str = value.toString();
  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
  }
  return sum;
}

equal(sum(0), 0);
equal(sum(101), 2);
equal(sum(10199999), 47);
equal(sum(1019999900000234), 56);

console.log('OK');
