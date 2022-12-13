import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  doMath(operand1: number, operand2: number, operator: string): number {
    if (operator === "/" && operand2 == 0) {
      throw new Error("Cannot divide by 0");
    }
    switch (operator) {
      case "*":
        return operand1 * operand2;
      case "/":
        return operand1 / operand2;
      case "+":
        return operand1 + operand2;
      case "-":
        return operand1 - operand2;
      case "**":
        return Math.pow(operand1, operand2);
      case "log":
        return operand1 * Math.log10(operand2);
      case "ln":
        return operand1 * Math.log(operand2);
      default:
        throw new Error("Unknown Operation");
    }
  }
}
