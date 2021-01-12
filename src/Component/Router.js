import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Login from "../Routes/Login";
import MainPage from "../Routes/MainPage";
<<<<<<< HEAD
=======
import Board from "./MainPage/Board";
>>>>>>> 828695bb95b6663bef456d3e097d50885522c738
const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
<<<<<<< HEAD
=======
        <Route path="/board" exact>
          <Board />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/made" exact>
          {/* <Made /> */}
        </Route>
>>>>>>> 828695bb95b6663bef456d3e097d50885522c738
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  );
};
export default RouterComponent;
