import { deepEqual } from 'assert';

/**
 * Task
 *
 * Swap the two variables without third variable
 */
let a: object = { foo: 'foo' };
let b: object = { bar: 'bar' };

// **** Your code goes here ****

deepEqual(a, { bar: 'bar' });
deepEqual(b, { foo: 'foo' });

console.log('OK');
