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
import ChangePW from "../Routes/MyPage/ChangePW";
import Event from "../Routes/Event";
import Notification from "../Routes/Notification";
import NormalCreate from "../Routes/NormalCreate";
import SignUp from "../Routes/SignUp";
import HowToUse from "../Routes/HowToUse";
import MajorIntroduce from "../Routes/MajorIntroduce";
import DepartMajor from "../Routes/Board/DepartMajor";
import Hot from "../Routes/Board/Hot";
import Save from "../Routes/MyPage/Save";
import Convergence from "../Routes/Board/Convergence";
import Announcement from "../Routes/Board/Announcement";
import Marketing from "../Routes/Board/Marketing";
import ForgotPassword from "../Routes/Login/LostPw";
import IconsSource from "./IconsSource";
import Makers from "./Makers";
import Suggestions from "../Routes/Suggestions";
import TermsAndConditions from "../Routes/TermsAndConditions";
import NoInformation from "../Routes/Login/NoInformation";
import LoginRequire from "../Routes/Login/LoginRequire";
import SignUpGoogle from "../Component/SignUp/signup_google";
import { UseGoogleAnalytics } from "./Watchers";

const RouterComponent = () => {
  UseGoogleAnalytics();
  return (
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/login" exact>
        <LoginPage />
      </Route>
      <Route path="/termsandconditions" exact>
        <TermsAndConditions />
      </Route>
      <Route path="/login/lostpw">
        <ForgotPassword />
      </Route>
      <Route path="/login/noinformation">
        <NoInformation />
      </Route>
      <Route path="/login/loginrequire">
        <LoginRequire />
      </Route>
      <Route path="/signup" exact>
        <SignUp />
      </Route>
      <Route path="/howtouse" exact>
        <HowToUse />
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
      <Route path="/board/hot">
        <Hot />
      </Route>
      <Route path="/TermsAndConditions" exact>
        <TermsAndConditions />
      </Route>
      <Route path="/board/majorintroduce">
        <MajorIntroduce />
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
      <Route path="/board/marketing" exact>
        <Marketing />
      </Route>
      <Route path="/mypage" exact>
        <MyPage />
      </Route>
      <Route path="/mypage/myposts">
        <MyPosts />
      </Route>
      <Route path="/mypage/save">
        <Save />
      </Route>
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
  );
};
const RouterExporter = () => (
  <Router basename="/CS-Front">
    <RouterComponent />
  </Router>
);

export default RouterExporter;
