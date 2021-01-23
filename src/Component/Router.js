import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Login from "../Routes/Login";
import AppPage from "../Routes/AppPage";
import MyPage from "../Routes/MyPage";
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
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/board/departmajor">
          <DepartMajor />
        </Route>
        <Route path="/app" exact>
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
        <Route path="/mypage/changepw" exact>
          <ChangePW />
        </Route>
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  );
};
export default RouterComponent;
