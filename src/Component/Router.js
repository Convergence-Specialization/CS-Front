import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Login from "../Routes/Login";
import MainPage from "../Routes/MainPage";
import AppPage from "../Routes/AppPage";
import Board from "./MainPage/Board";
const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/board" exact>
          <Board />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/app" exact>
          <AppPage />
        </Route>
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  );
};
export default RouterComponent;
