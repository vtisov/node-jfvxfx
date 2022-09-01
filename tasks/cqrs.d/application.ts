import { Module } from '@nestjs/common';

import { External } from './external';
import { DigitsCollector } from './digits-collector';

@Module({
  providers: [DigitsCollector, External],
})
export class Application {}
