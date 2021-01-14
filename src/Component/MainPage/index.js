import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppShell from "./AppShell";
import Board from "./Board";
import Img from "./Img";
const useStyles = makeStyles({});

export default function MainPage() {
  // const classes = useStyles();
  return (
    <div>
      <AppShell />
      <Img />
      <Board />
    </div>
  );
}
