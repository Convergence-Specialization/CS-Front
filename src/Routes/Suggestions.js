import React, { useState, useEffect } from "react";
import Create from "../Component/Suggestions/Create";
import Suggested from "../Component/Suggestions/Suggested";
import { useLocation } from "react-router-dom";
import Navbar from "../Component/Navbar";
import { navIcons } from "../assets/Resources";
const SuggestionsPresenter = () => {
  const location = useLocation();
  const [renderElement, setRenderElement] = useState(<div />);

  useEffect(() => {
    switch (!!location.state && location.state.pageName) {
      case "suggested":
        setRenderElement(<Suggested />);
        break;
      default:
        setRenderElement(
            <Create />
        );
    }
  }, [location]);
  return (
    <>
        <Navbar Navname="건의사항" 
      isRight1Disabled History IconRight2= {navIcons.Home}
       />
      {renderElement}
    </>
  );
};
export default SuggestionsPresenter;

