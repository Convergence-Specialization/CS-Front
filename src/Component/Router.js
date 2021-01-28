import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Profile from "../Routes/Profile";
import Navigation from "./Navigation";

import AppPage from "../Routes/AppPage";

import MyPage from "../Routes/MyPage";
import MyAppPage from "../Routes/MyAppPage";
import Loginpage from "../Component/Login";
import MyPosts from "../Routes/MyPage/MyPostsListView";
import ChangeInformation from "../Routes/ChangeInformation";
import ChangePW from "../Routes/ChangePW";
import Event from "../Routes/Event";
import SignUp from "../Routes/SignUp";
import DepartMajor from "../Routes/Board/DepartMajor";
import ChangeMajorBoard from "../Routes/ChangeMajorBoard";
import ConvergenceBoard from "../Routes/ConvergenceBoard";

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
        <Route path="/" exact>
          <AppPage />
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
        {/* TODO: 얘네는 글쓰는 페이지라서 위에 라우트 연결 하면 됨! */}
        <Route path="/mypage/changepw" exact>
          <ChangePW />
        </Route>
        <Route path="/changemajorboard" exact>
          <ChangeMajorBoard />
        </Route>
        <Route path="/convergenceboard" exact>
          <ConvergenceBoard />
        </Route>
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  );
};
const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <MyAppPage userObj={userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/">
              <Loginpage />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default RouterComponent;
