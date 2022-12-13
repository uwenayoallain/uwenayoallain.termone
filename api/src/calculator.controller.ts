import { Controller, Get, Query, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './calculator.service';

@Controller()
export class CalculatorController {
  constructor(private readonly appService: AppService) {}

  @Get('add/:a/:b')
  add(
    @Param('a', new ParseIntPipe()) a: number,
    @Param('b', new ParseIntPipe()) b: number,
  ) {
    return { result: a + b };
  }

  @Get('subtract/:a/:b')
  subtract(
    @Param('a', new ParseIntPipe()) a: number,
    @Param('b', new ParseIntPipe()) b: number,
  ) {
    return { result: a - b };
  }

  @Get('multiply/:a/:b')
  multiply(
    @Param('a', new ParseIntPipe()) a: number,
    @Param('b', new ParseIntPipe()) b: number,
  ) {
    return { result: a * b };
  }

  @Get('divide/:a/:b')
  divide(
    @Param('a', new ParseIntPipe()) a: number,
    @Param('b', new ParseIntPipe()) b: number,
  ) {
    return { result: a / b };
  }
}
