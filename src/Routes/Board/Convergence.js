import React, { useState, useEffect } from "react";

import Read from "../../Component/Board/Convergence/Read";
import Create from "../../Component/Board/Convergence/Create";
import ListView from "../../Component/Board/Convergence/ListView";

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
        setRenderElement(
          <>
            <NavBot Name="융특 게시판" Icon={mainPageIcons.airplane} />
            <Read />
          </>
        );
        break;
      case "create":
        setRenderElement(
          <>
            <NavBot Name="융특 게시판" Icon={mainPageIcons.airplane} />
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
              Name="융특 게시판"
              Icon={mainPageIcons.airplane}
              postButtonRef={"convergence"}
            />
            <ListView />
          </>
        );
    }
  }, [location]);
  return (
    <>
      <Navbar />
      {renderElement}
    </>
  );
};
export default DepartPresenter;
