import * as React from "react";
import { default as MuiButton } from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

type Props = {
  type?: "value" | "operation";
  onClick: () => void;
};

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    minWidth: 80,
    minHeight: 60,
    fontSize: 24,
    [theme.breakpoints.down("sm")]: {
      minWidth: 60,
      minHeight: 45,
      fontSize: 18,
    },
  },
  paper: {
    "&:active": {
      boxShadow: "none",
    },
  },
}));

export const Button: React.FC<Props> = ({
  type = "value",
  onClick,
  children,
}) => {
  const classes = useStyles();

  return (
    <Box m={0.5}>
      <Paper elevation={7} className={classes.paper}>
        <MuiButton
          disableTouchRipple
          disableElevation
          className={classes.button}
          variant="contained"
          color={type === "value" ? "primary" : "secondary"}
          onClick={onClick}
        >
          {children}
        </MuiButton>
      </Paper>
    </Box>
  );
};
