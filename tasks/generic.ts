import { equal } from 'assert';

/**
 * Task
 *
 * Complete the function typings to allow it extend any object type
 *   with keys count and returned typed object
 */
function keysCount(value) {
  return {
    ...value,
    keysCount: Object.keys(value).length,
  };
}

const counted1 = keysCount({ a: 1 }); // counted1 should be typed (not any)
equal(counted1.keysCount, 1);
equal(counted1.a, 1);
equal(counted1.b, 2); // should throw typings error

const counted2 = keysCount({ a: 1, b: 2 }); // counted2 should be typed (not any)
equal(counted2.keysCount, 1);
equal(counted2.c, 1); // should throw typings error

keysCount(3); // should throw typings error
keysCount(true); // should throw typings error
