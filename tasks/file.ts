import { equal } from 'assert';
import { readFile } from 'fs/promises';

/**
 * Task
 *
 * How to use the NodeJS fs module in async promise-based way?
 * 1. Add the returning value type
 * 2. Update the function to read a file by passed name
 */
async function read(filename: string) : Promise<string> {
  // **** Your code goes here ****
  return (await readFile(filename)).toString();
}

async function bootstrap() {
  const file = `${__dirname}/../assets/example.dat`;

  equal(await read(file), 'File content example');

  console.log('OK');
}

bootstrap()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
