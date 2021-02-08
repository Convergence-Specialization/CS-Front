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
import Notification from "../Routes/Notification";
import EventPost from "../Routes/EventPost";
import NormalCreate from "../Routes/NormalCreate";
import SignUp from "../Routes/SignUp";
import DepartMajor from "../Routes/Board/DepartMajor";
import Convergence from "../Routes/Board/Convergence";
import Announcement from "../Routes/Board/Announcement";
import ForgotPassword from "../Routes/Login/LostPw";
import IconsSource from "./IconsSource";
import Makers from "./Makers";
import Suggestions from "../Routes/Suggestions";

import NoInformation from "../Routes/Login/NoInformation";
import AddInformation from "../Routes/Login/AddInformation";
import LoginRequire from "../Routes/Login/LoginRequire";
// 임시로 해놓음 ***********
import SignUpGoogle from "../Component/SignUp/signup_google";
import { UseGoogleAnalytics } from "./Watchers";

const RouterComponent = () => {
  UseGoogleAnalytics();
  return (
    <Router basename="/CS-Front">
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/login/lostpw">
          <ForgotPassword />
        </Route>
        <Route path="/login/noinformation">
          <NoInformation />
        </Route>
        <Route path="/login/addinformation">
          <AddInformation />
        </Route>
        <Route path="/login/loginrequire">
          <LoginRequire />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/notification" exact>
          <Notification />
        </Route>
        <Route path="/signup/google">
          <SignUpGoogle />
        </Route>
        <Route path="/board/convergence">
          <Convergence />
        </Route>
        <Route path="/board/event/eventpost">
          <EventPost />
        </Route>
        <Route path="/board/event/normalcreate">
          <NormalCreate />
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
        <Route path="/IconsSource" exact>
          <IconsSource />
        </Route>
        <Route path="/makers" exact>
          <Makers />
        </Route>
        <Route path="/suggestions" exact>
          <Suggestions />
        </Route>
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  );
};
const RouterExporter = () => (
  <Router>
    <RouterComponent />
  </Router>
);

export default RouterExporter;
