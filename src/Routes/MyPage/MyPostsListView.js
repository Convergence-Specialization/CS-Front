import Navbar from "../../Component/Navbar";
import MyPosts from "../../Component/MyPage/MyPosts/ListView";
import ConvergenceListView from "../../Component/MyPage/MyPosts/ConvergenceListView";
import DepartMajorListView from "../../Component/MyPage/MyPosts/DepartMajorListView";
import NavBot from "../../Component/SmallComponents/NavBot";
import { navbotIcons, Icons } from "../../assets/Resources";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const MyPostsListView = () => {
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
        setRenderElement(<MyPosts />);
    }
  }, [location]);
  return (
    <>
      <Navbar
        Navname="마이페이지"
        isRight1Disabled
        History
        IconRight2={Icons.Home}
      />
      <NavBot Name="내가 쓴 글" Icon={navbotIcons.check} />
      {renderElement}
    </>
  );
};
export default MyPostsListView;
