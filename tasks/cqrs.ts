import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { deepEqual } from 'assert';

import { Application, DigitsCollector, External } from './cqrs.d';

/**
 * Task
 *
 * Update application in cqrs.d/ to use EventBus from @nestjs/cqrs instead of seft-written
 */

const logger = new Logger();

async function bootstrap() {
  const application = await NestFactory.create(Application);
  await application.init();

  const external = application.get(External);
  const collector = application.get(DigitsCollector);

  const digits = [1, 2, 3, 4, 5];

  digits.forEach((digit) => external.push(digit));

  setTimeout(() => external.end(), 50);

  await collector.waitForEnd();

  logger.log(`Collected: ${collector.digits.join(', ')}`);
  deepEqual(collector.digits, digits);

  logger.log('OK');
}

bootstrap()
  .then(() => process.exit(0))
  .catch((error) => {
    logger.error(error);
    process.exit(1);
  });
