import { makeStyles } from "@material-ui/core";
import React from "react";

const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles({
    selectButton: {
      border: "1px solid #495DC9",
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: "Montserrat",
      cursor: "pointer",
      backgroundColor: selected ? "#495DC9" : "",
      color: selected ? "black" : "",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "#495DC9",
        color: "black",
      },
      width: "22%",
    },
  });
  const classes = useStyles();
  return (
    <span onClick={onClick} className={classes.selectButton}>
      {children}
    </span>
  );
};

export default SelectButton;
