import Navbar from "../Component/Navbar";
import HowToUsePage from "../Component/HowToUsePage";
import React from "react";
import { navIcons } from "../assets/Resources";

const HowToUsePresenter = () => {
  return (
    <>
         {/* <Navbar Navname="슝 사용법" 
      isRight1Disabled History IconRight2= {navIcons.Home}/> */}
      <HowToUsePage />
    </>
  );
};
export default HowToUsePresenter;