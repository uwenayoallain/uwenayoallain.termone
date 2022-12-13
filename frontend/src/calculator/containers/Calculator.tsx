import { Paper } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import React, { useReducer } from "react";
import Display from "../components/Display";
import Numpad from "../components/numpad/Numpad";
import { CalculatorContext } from "../context";
import { useCalculator } from "../hooks/useCalculator";
import { calculatorReducer, initialState } from "../reducer";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#f0f0f0",
    padding: 16,
    border: "2px solid black",
    borderRadius: 8,
  },
});

export const Calculator: React.FC = () => {
  const classes = useStyles();

  const { handleCalculate, handleClear, handleNumber, handleOperation } =
    useCalculator();

  return (
    <Paper elevation={10} className={classes.root}>
      <Box display="inline-block">
        <Box display="flex" flexDirection="column">
          <Display />
          <Numpad
            onNumber={handleNumber}
            onCalculate={handleCalculate}
            onMathOperation={handleOperation}
            onClear={handleClear}
          />
        </Box>
      </Box>
    </Paper>
  );
};
