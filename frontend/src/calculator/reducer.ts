import { ServerCalculatorEngine } from "./engine/calculator-engine";
export type MathOperationType = "add" | "subtract" | "multiply" | "divide";

export type Mode = "first" | "second";

export type State = {
  firstInput: number;
  secondInput?: number;
  mode: Mode;
  operation?: MathOperationType;
};

export const initialState: State = {
  mode: "first",
  firstInput: 0,
};

export type Action = {
  type: ActionTypes;
  payload: number;
};

type Actions<M extends { [key: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum ActionTypes {
  SET_NUMBER = "SET_NUMBER",
  SET_OPERATION = "SET_OPERATION",
  CALCULATE = "CALCULATE",
  CLEAR = "CLEAR",
}

export type ActionPayload = {
  [ActionTypes.SET_OPERATION]: {
    first?: number;
    operation: MathOperationType;
  };
  [ActionTypes.SET_NUMBER]: {
    first: number;
    second?: number;
  };
  [ActionTypes.CALCULATE]: {
    value: number;
  };
  [ActionTypes.CLEAR]: {};
};

export type CalculatorActions = Actions<ActionPayload>[keyof Actions<
  ActionPayload
>];

export const calculatorReducer = (
  state: State,
  action: CalculatorActions
): State => {
  switch (action.type) {
    case ActionTypes.SET_OPERATION:
      return {
        ...state,
        operation: action.payload.operation,
        firstInput: action.payload.first || state.firstInput,
        secondInput: undefined,
        mode: "second",
      };
    case ActionTypes.SET_NUMBER:
      return {
        ...state,
        firstInput: action.payload.first,
        secondInput: action.payload.second,
      };
    case ActionTypes.CALCULATE:
      return {
        ...state,
        firstInput: action.payload.value,
        mode: "first",
      };
    case ActionTypes.CLEAR:
      return {
        ...state,
        firstInput: 0,
        secondInput: undefined,
        operation: undefined,
        mode: "first",
      };
  }
  return state;
};
