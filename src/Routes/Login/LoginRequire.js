import React from "react";
import LoginRequire from "../../Component/Login/LoginRequire";
import Navbar from "../../Component/Navbar";

const LoginRequirePresenter = () => (
  <>
     <Navbar isTransparent Iconleft isRight2Disabled isRight1Disabled />
    <LoginRequire />
  </>
);
export default LoginRequirePresenter ;
