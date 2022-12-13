import TextField from "@material-ui/core/TextField";
import * as React from "react";
import { useContext } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { CalculatorContext } from "../context";

const useStyles = makeStyles((theme: Theme) => ({
  textField: {
    backgroundColor: "#feffdb",
  },
  input: {
    textAlign: "right",
    color: "black",
    fontSize: 26,
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
}));

const useDisplay = () => {
  const {
    state: { mode, firstInput, secondInput },
  } = useContext(CalculatorContext);

  const format = (number: number) => +number.toPrecision(12);

  if (mode === "first") {
    return format(firstInput);
  } else if (mode === "second") {
    return format(secondInput !== undefined ? secondInput : firstInput);
  }
};

const Display: React.FC = () => {
  const display = useDisplay();
  const classes = useStyles();

  return (
    <Box m={0.5} mb={2} display="inline-block">
      <TextField
        id="calculatorDisplay"
        fullWidth
        className={classes.textField}
        variant="outlined"
        value={display}
        disabled={true}
        inputProps={{
          className: classes.input,
        }}
      />
    </Box>
  );
};

export default Display;
