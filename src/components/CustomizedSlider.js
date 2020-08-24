import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200 + theme.spacing(3) * 2
  },
  margin: {
    height: theme.spacing(3)
  },
  label: {
    fontFamily: '"Montserrat", "Odoo Unicode Support Noto", sans-serif',
    fontWeight: "normal",
    lineHeight: 1.5
  }
}));

const PrettySlider = withStyles({
  root: {
    color: "#20c4cc",
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);

export default function CustomizedSlider({
  label,
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 20,
  onchangeValue
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.label} gutterBottom>
        {label}
      </Typography>
      <PrettySlider
        step={step}
        marks
        min={min}
        max={max}
        valueLabelDisplay="auto"
        defaultValue={defaultValue}
        onChange={(e, newValue) => {
          onchangeValue(newValue);
        }}
      />
    </div>
  );
}
