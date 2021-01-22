import React, { useState } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Profile from "../Routes/Profile";
import Navigation from "./Navigation";

import MainPage from "../Routes/MainPage";
import Board from "./MainPage/Board";
import MyPage from "../Routes/MyPage";
import Change from "../Routes/Change";

import Change3 from "../Routes/Change3";
import Apppage from "../Routes/Apppage";
import Loginpage from "../Routes/Loginpage";
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
          <Loginpage />
        </Route>
        <Route path="/app" exact>
          <Apppage />
        </Route>
        <Route path="/mypage" exact>
          <MyPage />
        </Route>
        <Route path="/change" exact>
          <Change />
        </Route>
       
        <Route path="/change3" exact>
          <Change3 />
        </Route>
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  );
};
const AppRouter= ({isLoggedIn}) =>{
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Apppage />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </>
        ) :( 
          <>
            <Route exact path="/">
              <Loginpage />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  )
};

export default AppRouter;

