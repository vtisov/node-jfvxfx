import 'reflect-metadata';
import { equal } from 'assert';

/**
 * Task
 *
 * Write a decorator, marking field as hidden
 *    and preventing its serialization
 * 1. Implement @Hidden decorator
 * 2. Update serialize method to hide marked fields
 */

function Hidden(): PropertyDecorator {
  return () => {};
}

abstract class Serializable {
  public serialize(): string {
    return JSON.stringify(this);
  }
}

class Object1 extends Serializable {
  @Hidden()
  public field1 = 'field1';

  public field2 = 'field2';
}

class Object2 extends Serializable {
  @Hidden()
  public field1 = 'field1';

  @Hidden()
  public field2 = 'field2';
}

class Object3 extends Serializable {
  public field1 = 'field1';

  public field2 = 'field2';
}

equal(new Object1().serialize(), '{"field2":"field2"}');
equal(new Object2().serialize(), '{}');
equal(new Object3().serialize(), '{"field1":"field1","field2":"field2"}');

console.log('OK');
