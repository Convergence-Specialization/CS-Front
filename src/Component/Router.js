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
import Change from "../Routes/Change";
import Junha from "../Routes/Junha";
import Change3 from "../Routes/Change3";
import UiJeong from "../Routes/UiJeong";
const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/junha" exact>
          <Junha />
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
        <Route path="/uijeong" exact>
          <UiJeong />
        </Route>  
        <Route path="/change3" exact>
          <Change3 />
        </Route>
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  );
};
export default RouterComponent;
