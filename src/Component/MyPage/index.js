import React from "react";

import AppShell from "./AppShell";

import Board from "./Board";
import Ko from "./Ko";


export default function MainPage() {
  // const classes = useStyles();
  return (
    <div>
      <AppShell />
      <Ko />
      <Board />
    </div>
  );
}
