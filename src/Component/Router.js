import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Navigation from "./Navigation";

import Profile from "../Routes/Profile";
import MainPage from "../Routes/MainPage";
import MyPage from "../Routes/MyPage";
// import MyMainPage from "../Routes/MyMainPage";
import Loginpage from "../Routes/Loginpage";
import MyPosts from "../Routes/MyPage/MyPostsListView";
import ChangeInformation from "../Routes/ChangeInformation";
import ChangePW from "../Routes/ChangePW";
import Event from "../Routes/Event";
import SignUp from "../Routes/SignUp";
import DepartMajor from "../Routes/Board/DepartMajor";
const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/login" exact>
          <Loginpage />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/board/departmajor">
          <DepartMajor />
        </Route>
        <Route path="/mypage" exact>
          <MyPage />
        </Route>
        <Route path="/mypage/myposts">
          <MyPosts />
        </Route>
        <Route path="/mypage/changeinformation" exact>
          <ChangeInformation />
        </Route>
        <Route path="/event" exact>
          <Event />
        </Route>
        <Route path="/mypage/changepw" exact>
          <ChangePW />
        </Route>
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  );
};

export default RouterComponent;
