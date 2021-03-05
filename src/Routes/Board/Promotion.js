import React, { useState, useEffect } from "react";
import Read from "../../Component/Board/Promotion/Read";
import Create from "../../Component/Board/Promotion/Create";
import ListView from "../../Component/Board/Promotion/ListView";

// import EventPost from "../../Component/Board/Announcement/Event/EventPost";
import { navbotIcons, navIcons } from "../../assets/Resources";
import { useLocation } from "react-router-dom";
import Navbar from "../../Component/Navbar";
import NavBot from "../../Component/SmallComponents/NavBot";

const AnnouncePresenter = () => {
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
      default:
        setRenderElement(<ListView />);
    }
  }, [location]);
  return (
    <>
      <Navbar isRight1Disabled History IconRight2={navIcons.Home} />
      <NavBot Icon={navbotIcons.airplane} Name="홍보 게시판" />
      {renderElement}
    </>
  );
};
export default AnnouncePresenter;
