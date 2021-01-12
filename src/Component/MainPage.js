import AppShell from "./AppShell";
import React from "react";
import {Home, About, Contact} from './Test';
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Bottomnav from "./Bottomnav";
import Board from "./Board";
import Img from "./Img";
const useStyles = makeStyles({});

export default function MainPage() {
  const classes = useStyles();
  return (
    <div>
      <AppShell />
      <Switch>
        <Route exact path="/home" render={props => <Home {...props} />} />
        <Route exact path="/contact" render={props => <Contact {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} />
        <Route exact path="/마이페이지" render={props => <About {...props} />} />
      </Switch>
      <Img></Img>
      <Board></Board>
      <Bottomnav/>
    </div>
  );
}

