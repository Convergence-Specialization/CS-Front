import React from "react";
import AddInformation from "../../Component/Login/AddInformation";
import Navbar from "../../Component/Navbar";

const AddInformationPresenter = () => (
  <>
     <Navbar isTransparent Iconleft isRight2Disabled isRight1Disabled />
    <AddInformation />
  </>
);
export default AddInformationPresenter;
