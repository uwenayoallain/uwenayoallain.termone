import { Controller, Post, Body, Res } from '@nestjs/common';
import { AppService } from './calculator.service';
import { doMathDto } from './domath.dto';

@Controller()
export class CalculatorController {
  constructor(private readonly appService: AppService) { }

  @Post()
  operate(@Body() doMathDto: doMathDto) {
    const result: number = this.appService.doMath(doMathDto.operand1, doMathDto.operand2, doMathDto.operator);
    return { "calcResponse": result }
  }
}
