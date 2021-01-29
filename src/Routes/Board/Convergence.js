import React, { useState, useEffect } from "react";

import Read from "../../Component/Board/Convergence/Read";
import Create from "../../Component/Board/Convergence/Create_API";
import ListView from "../../Component/Board/Convergence/ListView";

import { useLocation } from "react-router-dom";
import Navbar from "../../Component/Navbar";

const DepartPresenter = () => {
  const location = useLocation();
  const [renderElement, setRenderElement] = useState(<div />);

  useEffect(() => {
    switch (!!location.state && location.state.pageName) {
      case "read":
        setRenderElement(<Read />);
        break;
      case "create":
        setRenderElement(<Create />);
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
