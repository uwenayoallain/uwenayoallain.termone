import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorController } from './calculator.controller';
import { AppService } from './calculator.service';

describe('CalculatorController', () => {
  let calculatorController: CalculatorController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CalculatorController],
      providers: [AppService],
    }).compile();

    calculatorController = app.get<CalculatorController>(CalculatorController);
  });

  describe('addition', () => {
    it('should return the sum of two numbers', () => {
      expect(calculatorController.operate({ operand1: 2, operand2: 2, operator: "+" })).toBe({ "calcResponse": 4 });
    });
  });

  describe('subtraction', () => {
    it('should return the difference of two numbers', () => {
      expect(calculatorController.operate({ operand1: 4, operand2: 2, operator: "-" })).toBe({ "calcResponse": 2 });
    });
  });

  describe('multiplication', () => {
    it('should return the product of two numbers', () => {
      expect(calculatorController.operate({ operand1: 4, operand2: 2, operator: "*" })).toBe({ "calcResponse": 8 });
    });
  });

  describe('division', () => {
    it('should return the quotient of two numbers', () => {
      expect(calculatorController.operate({ operand1: 4, operand2: 2, operator: "/" })).toBe({ "calcResponse": 2 });
    });
  });

  describe("power", () => {
    it('should return the power multiplication of two numbers', () => {
      expect(calculatorController.operate({ operand1: 2, operand2: 3, operator: "**" })).toBe({ "calcResponse": 8 });
    });
  })

  describe("log 10", () => {
    it('should return the logarithmn of two numbers', () => {
      expect(calculatorController.operate({ operand1: 2, operand2: 1, operator: "log" })).toBe({ "calcResponse": 0 });
    });
  })
  describe("ln", () => {
    it('should return the natural log(log(e)) of two numbers', () => {
      expect(calculatorController.operate({ operand1: 2, operand2: 1, operator: "ln" })).toBe({ "calcResponse": 0 });
    });
  })
});
