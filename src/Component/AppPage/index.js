import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppShell from "./AppShell";
import Board from "./Board";
import Img from "./Img";
import Ko from "./Ko";
const useStyles = makeStyles({});

export default function AppPage() {
  // const classes = useStyles();
  return (
    <div>
      <AppShell />
      <Ko />
      <Img />
      <Board />
    </div>
  );
}
