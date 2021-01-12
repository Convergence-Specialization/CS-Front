import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Login from "../Routes/Login";
import MainPage from "../Routes/MainPage";
import Made from "../Routes/Made";
const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
        <Login />
        </Route>
        <Route path="/mainpage" exact>
          <MainPage />
        </Route>
        <Route path="/made" exact>
          <Made />
        </Route>
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  );
};
export default RouterComponent;
