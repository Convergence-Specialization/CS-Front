import React from "react";
import { Home, About, Contact } from "../Test";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppShell from "./AppShell";
import Bottomnav from "./Bottomnav";
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
      <Bottomnav />
    </div>
  );
}
