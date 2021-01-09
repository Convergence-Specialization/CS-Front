import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Login from "../Routes/Login";
import MainPage from "../Routes/MainPage";
const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/Login" exact>
          <Login />
        </Route>
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  );
};
export default RouterComponent;
