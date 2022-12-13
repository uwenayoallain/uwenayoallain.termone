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
      expect(calculatorController.add(2, 2)).toBe(4);
    });
  });

  describe('subtraction', () => {
    it('should return the difference of two numbers', () => {
      expect(calculatorController.subtract(2, 2)).toBe(0);
    });
  });

  describe('multiplication', () => {
    it('should return the product of two numbers', () => {
      expect(calculatorController.multiply(2, 2)).toBe(4);
    });
  });

  describe('division', () => {
    it('should return the quotient of two numbers', () => {
      expect(calculatorController.divide(2, 2)).toBe(1);
    });
  });
});
