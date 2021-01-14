import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppShell from "./AppShell";
import Bottomnav from "./Bottomnav";
import Board from "./Board";

import Ko from "./Ko";
const useStyles = makeStyles({});

export default function MainPage() {
  // const classes = useStyles();
  return (
    <div>
      <AppShell />
      <Ko />
      <Board />
      <Bottomnav />
    </div>
  );
}
