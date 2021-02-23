import React, { useState, useEffect } from "react";
import Read from "../../Component/Board/Announcement/Normal/Read";
import Create from "../../Component/Board/Announcement/Normal/Create";
import ListView from "../../Component/Board/Announcement/Event/ListView";
import EventPost from "../../Component/Board/Announcement/Event/EventPost";
import { navbotIcons } from "../../assets/Resources";
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
      case "eventpost":
        setRenderElement(<EventPost />);
        break;
      default:
        setRenderElement(<ListView />);
    }
  }, [location]);
  return (
    <>
      <Navbar />
      <NavBot Icon={navbotIcons.announce} Name="학부행사" />
      {renderElement}
    </>
  );
};
export default AnnouncePresenter;
