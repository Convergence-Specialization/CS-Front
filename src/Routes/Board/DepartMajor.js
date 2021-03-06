import React, { useState, useEffect } from "react";

import Read from "../../Component/Board/DepartMajor/Read";
import Create from "../../Component/Board/DepartMajor/Create";

import ListView from "../../Component/Board/DepartMajor/ListView";

import { useLocation } from "react-router-dom";
import Navbar from "../../Component/Navbar";
import NavBot from "../../Component/SmallComponents/NavBot";
import { navbotIcons, navIcons } from "../../assets/Resources";

const DepartPresenter = () => {
  const location = useLocation();
  const [renderElement, setRenderElement] = useState(<div />);

  useEffect(() => {
    switch (!!location.state && location.state.pageName) {
      case "read":
        setRenderElement(
          <>
            <NavBot
              Name="전과 게시판"
              Icon={navbotIcons.airplane}
            />
            <Read />
          </>
          );
        break;
      case "create":
        setRenderElement(
          <>
            <NavBot Name="전과 게시판" Icon={navbotIcons.airplane} />
            <Create />
          </>
        );
        break;
      case "update":
        break;
      default:
        setRenderElement(
          <>
            <NavBot
              Name="전과 게시판"
              Icon={navbotIcons.airplane}
              postButtonRef={"departmajor"}
            />
            <ListView />
          </>
        );
    }
  }, [location]);
  return (
    <>
      <Navbar isRight1Disabled History IconRight2= {navIcons.Home}/>
      {renderElement}
    </>
  );
};
export default DepartPresenter;
