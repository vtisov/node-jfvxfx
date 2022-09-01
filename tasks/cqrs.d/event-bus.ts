import { EventEmitter } from 'events';

import { Event } from './events';

class EventBusClass extends EventEmitter {
  public publish(event: Event) {
    super.emit('event', event);
  }

  public listen<T extends Event>(listener: (event: T) => void) {
    super.on('event', listener);
  }
}

export const EventBus = new EventBusClass();
