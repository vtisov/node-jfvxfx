import { equal } from 'assert';

/**
 * Task
 *
 * Calculate factorial (n!) of the passed integer
 * 1. Add the returning value type
 * 2. Complete the function
 *
 * Tip: n! = n * fact(n - 1)
 *      0! = 1
 */

// 1 2 6 24

function factorial(value: number) {
  let dp = [];
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= value; i++) {
    dp[i] = i * dp[i - 1];
  }
return dp[value];
}

equal(factorial(3), 6);
equal(factorial(10), 3628800);
equal(factorial(110), 1.5882455415227421e178);

console.log('OK');
