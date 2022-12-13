import { Controller, Post, Body} from '@nestjs/common';
import { AppService } from './calculator.service';
import {DoMathDto } from './domath.dto';

@Controller()
export class CalculatorController {
  constructor(private readonly appService: AppService) { }

  @Post()
  operate(@Body() calc: DoMathDto) {
    const result: number = this.appService.doMath(calc.operand1, calc.operand2, calc.operator);
    return { calcResponse: result }
  }
}
