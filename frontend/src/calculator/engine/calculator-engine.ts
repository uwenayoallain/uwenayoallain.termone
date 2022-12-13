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
  log: (a, b) => a * Math.log10(b),
  ln: (a, b) => a * Math.log(b),
  power: (a, b) => Math.pow(a, b)
};

const serverURL = process.env.REACT_APP_API_URL || "http://localhost:3000";

const calculateOnServer = async (
  operand1: number,
  operand2: number,
  operator: "-" | "+" | "/" | "*" | "**" | "ln" | "log"
) => {
  const response = await fetch(`${serverURL}/domath`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ calc: { operand1, operand2, operator } })
  });
  const result = await response.json();
  return result.calcResponse
}
export const ServerCalculatorEngine: CalculatorEngine = {
  add: (a, b) => calculateOnServer(a, b, "+"),
  subtract: (a, b) => calculateOnServer(a, b, "-"),
  multiply: (a, b) => calculateOnServer(a, b, "*"),
  divide: (a, b) => calculateOnServer(a, b, "/"),
  log: (a, b) => calculateOnServer(a, b, "log"),
  ln: (a, b) => calculateOnServer(a, b, "ln"),
  power: (a, b) => calculateOnServer(a, b, "**")
};
