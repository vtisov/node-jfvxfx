import { Injectable, Logger, OnModuleInit } from '@nestjs/common';

import { EventBus } from './event-bus';
import { DataEvent, EndEvent } from './events';

@Injectable()
export class DigitsCollector implements OnModuleInit {
  private readonly logger = new Logger(this.constructor.name);

  public readonly digits: Array<number> = [];

  public onModuleInit() {
    EventBus.listen((event: unknown) => {
      if (event instanceof DataEvent) {
        this.logger.log(`Got digit ${event.digit}`);

        this.digits.push(event.digit);
      }
    });
  }

  public waitForEnd() {
    return new Promise<void>((resolve) => {
      EventBus.listen((event: unknown) => {
        if (event instanceof EndEvent) {
          resolve();
        }
      });
    });
  }
}
