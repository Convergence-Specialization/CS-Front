import React from "react";
import ListView from "../../Component/MyPage/Save/ListView";
import Navbar from "../../Component/Navbar";
import NavBot from "../../Component/SmallComponents/NavBot";
import { navbotIcons, navIcons } from "../../assets/Resources";

const DepartPresenter = () => {
  return (
    <>
      <Navbar isRight1Disabled History IconRight2= {navIcons.Home}/>
      <NavBot Name="저장한 글" Icon={navbotIcons.save} />
      <ListView/>
    </>
  );
};
export default DepartPresenter;
