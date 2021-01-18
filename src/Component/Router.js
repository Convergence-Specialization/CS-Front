import React, { useState } from "react";
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
import MyPage from "../Routes/MyPage";
import Change from "../Routes/Change";

import Change3 from "../Routes/Change3";
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
export default () =>{
  const [isLoggedin, setisLoggedin] = useState(false);
  return(
    <Router>
      <Switch>
        {isLoggedin ?
        <>
        <Route>
          <AppPage/>
        </Route>
        </> : <Route><Login/></Route>}
      </Switch>
    </Router>
  )
};

