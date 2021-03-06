import React from "react";
import Login from "../../Component/Login";
import Navbar from "../../Component/Navbar";

const LoginPresenter = () => (
  <>
    <Navbar isTransparent Iconleft isRight2Disabled isRight1Disabled isPage />
    <Login />
  </>
);
export default LoginPresenter;
