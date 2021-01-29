import React, { useState, useEffect } from "react";

import Read from "../../Component/Board/DepartMajor/Read";
import Create from "../../Component/Board/DepartMajor/Create_API";

import ListView from "../../Component/Board/DepartMajor/ListView";

import { useLocation } from "react-router-dom";
import Navbar from "../../Component/Navbar";

const DepartPresenter = () => {
  const location = useLocation();

  // location에서 받아오는 인자에 따라 렌더링되는 element를 다르게 줄거야! 기본값은 비어있는 div
  const [renderElement, setRenderElement] = useState(<div />);

  useEffect(() => {
    // location.state가 인자값이야 먼저 state가 있는지 확인하고 pageName을 확인해
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
        // 그냥 주소 치고 들어온거면 여기로 오는거야
        setRenderElement(<ListView />);
    }
  }, [location]);
  return (
    <>
      <Navbar Navname = "융특 커뮤니티 슝"/>
      {/* useEffect에서 페이지 어디로 갈지 결정되면 renderElement로 페이지를 뿌려줘! */}
      {renderElement}
    </>
  );
};
export default DepartPresenter;
