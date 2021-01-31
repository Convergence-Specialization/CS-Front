import React from "react";
import SignUp from "../Component/SignUp";
import Navbar from "../Component/Navbar";
import { mainPageIcons } from "../assets/Resources";
const SignUpPresenter = () => {
  return (
    <>
      <Navbar isTransparent isRight2Disabled isRight1Disabled />
      <SignUp />
    </>
  );
};
export default SignUpPresenter;
