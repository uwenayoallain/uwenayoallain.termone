import { MathOperationType } from "../reducer";
type DoubleInputNumericalOperation = (
  a: number,
  b: number
) => Promise<number> | number;

export type CalculatorEngine = {
  [key in MathOperationType]: DoubleInputNumericalOperation;
};

export const ClientCalculatorEngine: CalculatorEngine = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

const serverURL = process.env.REACT_APP_API_URL || "http://localhost:3000";

const calculateOnServer = (
  operation: MathOperationType,
  a: number,
  b: number
) =>
  window
    .fetch(`${serverURL}/${operation}/${a}/${b}`)
    .then((res) => res.json())
    .then(({ result }) => result);

export const ServerCalculatorEngine: CalculatorEngine = {
  add: async (a, b) => calculateOnServer("add", a, b),
  subtract: async (a, b) => calculateOnServer("subtract", a, b),
  multiply: async (a, b) => calculateOnServer("multiply", a, b),
  divide: async (a, b) => calculateOnServer("divide", a, b),
};
