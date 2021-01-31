import React from "react";
import LostPw from "../../Component/Login/ForgotPassword";
import Navbar from "../../Component/Navbar";

const LoginPresenter = () => (
  <>
     <Navbar isTransparent Iconleft isRight2Disabled isRight1Disabled />
    <LostPw />
  </>
);
export default LoginPresenter;
