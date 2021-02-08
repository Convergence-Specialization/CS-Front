import Navbar from "../../Component/Navbar";
import MyPosts from "../../Component/MyPage/MyPosts/ListView";
import ConvergenceListView from "../../Component/MyPage/MyPosts/ConvergenceListView";
import DepartMajorListView from "../../Component/MyPage/MyPosts/DepartMajorListView";
import NavBot from "../../Component/SmallComponents/NavBot";
import { Icons } from "../../assets/Resources";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
export default () => {
  const location = useLocation();
  const [renderElement, setRenderElement] = useState(<div />);

  useEffect(() => {
    switch (!!location.state && location.state.pageName) {
      case "convergencelistview":
        setRenderElement(<ConvergenceListView />);
        break;
        case "departmajorlistview":
        setRenderElement(<DepartMajorListView />);
        break;
      default:
        setRenderElement(
            <MyPosts />
        );
    }
  }, [location]);
  return (
    <>
        <Navbar Navname="마이페이지" />
      <NavBot Name="내가 쓴 글" Icon={Icons.check} />
      {renderElement}
    </>
  );
};
