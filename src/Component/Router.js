import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import MainPage from "../Routes/MainPage";
import MyPage from "../Routes/MyPage";
import LoginPage from "../Routes/Login/Login";
import MyPosts from "../Routes/MyPage/MyPostsListView";
import ChangeInformation from "../Routes/MyPage/ChangeInformation";
import ChangePW from "../Routes/MyPage/ChangePW";
import Event from "../Routes/Event";
import SignUp from "../Routes/SignUp";
import DepartMajor from "../Routes/Board/DepartMajor";
import Convergence from "../Routes/Board/Convergence";
import Announcement from "../Routes/Announcement";
import ForgotPassword from "../Routes/Login/LostPw";

const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/login/lostpw" exact>
          <ForgotPassword />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/board/convergence">
          <Convergence />
        </Route>
        <Route path="/board/departmajor">
          <DepartMajor />
        </Route>
        <Route path="/board/event" exact>
          <Event />
        </Route>
        <Route path="/board/announcement" exact>
          <Announcement />
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

        {/* TODO: 얘네는 글쓰는 페이지라서 위에 라우트 연결 하면 됨! */}
        <Route path="/mypage/changepw" exact>
          <ChangePW />
        </Route>
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  );
};

export default RouterComponent;
