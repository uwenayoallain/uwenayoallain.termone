import { Controller, Post, Body, Get, HttpCode } from '@nestjs/common';
import { AppService } from './calculator.service';
import { DoMathDto } from './domath.dto';

@Controller()
export class CalculatorController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @HttpCode(200)
  getHello() {
    return "Hello World!"
  }

  @Post("domath")
  operate(@Body() calc: DoMathDto) {
    const result: number = this.appService.doMath(calc.operand1, calc.operand2, calc.operator);
    return { calcResponse: result }
  }

  @Get("domath")
  getDoMath(){
    return "This is the api for calculating maths, usage: postdata= {operand1:number,operand2:number,operator:string}"
  }
}
