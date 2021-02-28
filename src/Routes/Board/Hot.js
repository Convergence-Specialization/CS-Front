import React from "react";
import ListView from "../../Component/Board/Hot/ListView";
import Navbar from "../../Component/Navbar";
import NavBot from "../../Component/SmallComponents/NavBot";
import { navbotIcons, navIcons } from "../../assets/Resources";

const DepartPresenter = () => {
  return (
    <>
      <Navbar isRight1Disabled History IconRight2= {navIcons.Home}/>
      <NavBot Name="인기많은 융슝이들" Icon={navbotIcons.hot} />
      <ListView/>
    </>
  );
};
export default DepartPresenter;
