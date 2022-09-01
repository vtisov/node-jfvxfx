import { Injectable } from '@nestjs/common';

import { EventBus } from './event-bus';
import { DataEvent, EndEvent } from './events';

@Injectable()
export class External {
  public push(value: number) {
    EventBus.publish(new DataEvent(value));
  }

  public end() {
    EventBus.publish(new EndEvent());
  }
}
