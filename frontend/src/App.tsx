import React from "react";
import { Calculator } from "./calculator/containers/Calculator";
import Box from "@material-ui/core/Box";
import { CalculatorContext } from "./calculator/context";
import { useReducer } from "react";
import { calculatorReducer, initialState } from "./calculator/reducer";

function App() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      <Box
        style={{ height: "100vh" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
      >
        <Calculator />
      </Box>
    </CalculatorContext.Provider>
  );
}

export default App;
