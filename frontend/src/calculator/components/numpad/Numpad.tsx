import Box from "@material-ui/core/Box";
import * as React from "react";
import { MathOperationType } from "../../reducer";
import { Button } from "./Button";

type Props = {
  onNumber: (value: number) => void;
  onMathOperation: (operation: MathOperationType) => void;
  onClear: () => void;
  onCalculate: () => void;
};

const Numpad: React.FC<Props> = ({
  onMathOperation,
  onClear,
  onCalculate,
  onNumber,
}) => {
  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" flexDirection="row">
        <Button onClick={() => onNumber(7)}>{7}</Button>
        <Button onClick={() => onNumber(8)}>{8}</Button>
        <Button onClick={() => onNumber(9)}>{9}</Button>
        <Button onClick={() => onMathOperation("divide")} type="operation">
          {"\u00f7"}
        </Button>
      </Box>
      <Box display="flex" flexDirection="row">
        <Button onClick={() => onNumber(4)}>{4}</Button>
        <Button onClick={() => onNumber(5)}>{5}</Button>
        <Button onClick={() => onNumber(6)}>{6}</Button>
        <Button onClick={() => onMathOperation("multiply")} type="operation">
          {"\u00d7"}
        </Button>
      </Box>
      <Box display="flex" flexDirection="row">
        <Button onClick={() => onNumber(1)}>{1}</Button>
        <Button onClick={() => onNumber(2)}>{2}</Button>
        <Button onClick={() => onNumber(3)}>{3}</Button>
        <Button onClick={() => onMathOperation("subtract")} type="operation">
          {"\u2013"}
        </Button>
      </Box>
      <Box display="flex" flexDirection="row">
        <Button onClick={onClear} type="operation">
          {"C"}
        </Button>
        <Button onClick={() => onNumber(0)}>{0}</Button>
        <Button onClick={onCalculate} type="operation">
          {"="}
        </Button>
        <Button onClick={() => onMathOperation("add")} type="operation">
          {"+"}
        </Button>
      </Box>
    </Box>
  );
};

export default Numpad;
