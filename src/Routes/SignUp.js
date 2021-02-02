import React from "react";
import SignUp from "../Component/SignUp";
import Navbar from "../Component/Navbar";

const SignUpPresenter = () => {
  return (
    <>
      <Navbar isTransparent Iconleft isRight2Disabled isRight1Disabled />
      <SignUp />
    </>
  );
};
export default SignUpPresenter;
