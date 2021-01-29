import React, { useState, useEffect } from "react";

import Read from "../../Component/Board/DepartMajor/Read";
import Create from "../../Component/Board/DepartMajor/Create";

import ListView from "../../Component/Board/DepartMajor/ListView";

import { useLocation } from "react-router-dom";
import Navbar from "../../Component/Navbar";
import NavBot from "../../Component/SmallComponents/NavBot";
import { mainPageIcons } from "../../assets/Resources";

const DepartPresenter = () => {
  const location = useLocation();
  const [renderElement, setRenderElement] = useState(<div />);

  useEffect(() => {
    switch (!!location.state && location.state.pageName) {
      case "read":
        setRenderElement(<Read />);
        break;
      case "create":
        setRenderElement(
          <NavBot Name="전과 게시판" Icon={mainPageIcons.airplane}>
            <Create />
          </NavBot>
        );
        break;
      case "update":
        break;
      default:
        setRenderElement(<ListView />);
    }
  }, [location]);
  return (
    <>
      <Navbar Navname="융특 커뮤니티 슝" />
      {renderElement}
    </>
  );
};
export default DepartPresenter;
