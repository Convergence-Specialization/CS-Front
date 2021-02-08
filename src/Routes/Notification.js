import Navbar from "../Component/Navbar";
import NotificationsPage from "../Component/NotificationsPage";
import React from "react";
import { Icons } from "../assets/Resources";

const NotificationPresenter = () => {
  return (
    <>
         <Navbar Navname="알림페이지" 
      isRight1Disabled History IconRight2= {Icons.Home}/>
      <NotificationsPage />
    </>
  );
};
export default NotificationPresenter;
