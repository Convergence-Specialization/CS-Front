import React, { useState } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Profile from "../Routes/Profile";
import Navigation from "./Navigation";

import MyPage from "../Routes/MyPage";
import Change from "../Routes/Change";
import Change3 from "../Routes/Change3";
<<<<<<< HEAD
import MyAppPage from "../Routes/MyAppPage";
import Loginpage from "../Routes/Loginpage";
=======
import Event from "../Routes/Event";
import SignUp from "../Routes/SignUp";
import DepartMajor from "../Routes/Board/DepartMajor";
>>>>>>> bb450d218e458aa2e11368885a8ebd6f290a9cf6
const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <Loginpage />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/board/departmajor">
          <DepartMajor />
        </Route>
        <Route path="/app" exact>
          <MyAppPage />
        </Route>
        <Route path="/mypage" exact>
          <MyPage />
        </Route>
        <Route path="/mypage/myposts">
          <MyPage />
        </Route>
        <Route path="/change" exact>
          <Change />
        </Route> 
        <Route path="/event" exact>
          <Event />
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
              <MyAppPage />
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

