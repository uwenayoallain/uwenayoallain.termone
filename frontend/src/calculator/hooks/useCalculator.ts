import { CalculatorContext } from "../context";
import { useContext } from "react";
import { ActionTypes, MathOperationType, ActionPayload } from "../reducer";
import {
  CalculatorEngine,
  ClientCalculatorEngine,
  ServerCalculatorEngine,
} from "../engine/calculator-engine";

const MAX_DIGITS = 12;

const engine: CalculatorEngine =
  (process.env.REACT_APP_CALC_ENGINE || "client") === "client"
    ? ClientCalculatorEngine
    : ServerCalculatorEngine;

export const useCalculator = () => {
  const { state, dispatch } = useContext(CalculatorContext);

  const handleNumber = (value: number) => {
    const getNewNumber = (current?: number) =>
      parseInt(
        ((current ? current.toString() : "") + value).substring(0, MAX_DIGITS)
      );

    const payload: ActionPayload[ActionTypes.SET_NUMBER] = {
      first: state.firstInput,
      second: undefined,
    };

    if (state.mode === "first") {
      payload.first = getNewNumber(state.firstInput);
    } else if (state.mode === "second") {
      payload.second = getNewNumber(state.secondInput);
    }

    dispatch({ type: ActionTypes.SET_NUMBER, payload });
  };

  const handleOperation = async (operation: MathOperationType) => {
    if (state.mode === "first" && state.firstInput) {
      dispatch({
        type: ActionTypes.SET_OPERATION,
        payload: { operation },
      });
    } else if (state.operation) {
      const { firstInput, secondInput, operation: stateOperation } = state;

      if (stateOperation && secondInput) {
        const result = await engine[operation](firstInput, secondInput);
        dispatch({
          type: ActionTypes.SET_OPERATION,
          payload: { operation, first: result },
        });
      }
    }
  };

  const handleClear = () => {
    dispatch({ type: ActionTypes.CLEAR, payload: {} });
  };

  const handleCalculate = async () => {
    const { firstInput, secondInput, operation } = state;

    if (operation && secondInput) {
      const result = await engine[operation](firstInput, secondInput);

      dispatch({
        type: ActionTypes.CALCULATE,
        payload: {
          value: result,
        },
      });
    }
  };

  return { handleNumber, handleOperation, handleClear, handleCalculate };
};
