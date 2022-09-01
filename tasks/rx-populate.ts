import { deepEqual } from 'assert';
import { Observable } from 'rxjs';
import { toArray } from 'rxjs/operators';

import { DataBase, expected } from '../assets/rx-populate';

/**
 * Task
 * Update the function to populate authors and comments for posts stream
 */
async function posts() {
  const stream = await DataBase.getPosts();

  // *** your code goes here ***

  return stream;
}

// *** bootstrap section, don't change it ***
function collect<T>(observable: Observable<T>): Promise<Array<T>> {
  return new Promise((next, error) => {
    observable.pipe(toArray()).subscribe({ next, error });
  });
}

async function bootstrap() {
  const populated = await collect(await posts());

  deepEqual(populated, expected);
}

bootstrap()
  .then(() => console.log('OK'))
  .catch(console.error);
