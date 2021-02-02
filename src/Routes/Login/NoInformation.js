import React from "react";
import NoInformation from "../../Component/Login/NoInformation";
import Navbar from "../../Component/Navbar";

const NoInformationPresenter = () => (
  <>
     <Navbar isTransparent Iconleft isRight2Disabled isRight1Disabled />
    <NoInformation />
  </>
);
export default NoInformation;
