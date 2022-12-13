import { Module } from '@nestjs/common';
import { CalculatorController } from './calculator.controller';
import { AppService } from './calculator.service';

@Module({
  imports: [],
  controllers: [CalculatorController],
  providers: [AppService],
})
export class AppModule {}
