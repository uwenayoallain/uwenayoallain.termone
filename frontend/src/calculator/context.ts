import { createContext, Dispatch } from "react";
import { State, CalculatorActions, initialState } from "./reducer";

export const CalculatorContext = createContext<{
  state: State;
  dispatch: Dispatch<CalculatorActions>;
}>({
  state: initialState,
  dispatch: () => null,
});
