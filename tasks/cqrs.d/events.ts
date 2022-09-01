export class Event {}

export class DataEvent extends Event {
  constructor(public readonly digit: number) {
    super();
  }
}

export class EndEvent extends Event {}
