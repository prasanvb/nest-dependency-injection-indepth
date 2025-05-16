import { Module } from '@nestjs/common';
import { PowerService } from './power.service';
import { RegulatorService } from './regulator/regulator.service';

@Module({
  providers: [PowerService, RegulatorService],
})
export class PowerModule {}
