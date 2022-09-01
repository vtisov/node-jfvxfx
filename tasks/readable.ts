import { equal } from 'assert';
import { Readable } from 'stream';

/**
 * Task
 * Convert Readable to Buffer
 *
 * 1. Add a returning type
 * 2. Complete the convert readable stream to buffer function
 */
async function readableToBuffer(readable: Readable) {
  // *** your code goes here ***
}

async function bootstrap() {
  function* generate() {
    yield 'A';
    yield 'B';
    yield 'C';
  }

  let readable = Readable.from(generate());

  const buffer: unknown = await readableToBuffer(readable);
  equal(buffer instanceof Buffer, true);
  equal(buffer.toString(), 'ABC');

  function* generateError() {
    throw new Error('A stream error');
  }

  readable = Readable.from(generateError());

  let error: Error | undefined;

  try {
    await readableToBuffer(readable);
  } catch (e) {
    error = e as Error;
  }

  equal(error?.message, 'A stream error');

  console.log('OK');
}

bootstrap()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
