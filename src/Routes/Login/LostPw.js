import React from "react";
import LostPw from "../../Component/Login/ForgotPassword";
import Navbar from "../../Component/Navbar";

const LoginPWPresenter = () => (
  <>
     <Navbar isTransparent Iconleft isRight2Disabled isRight1Disabled />
    <LostPw />
  </>
);
export default LoginPWPresenter;
