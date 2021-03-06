import Navbar from "../Component/Navbar";
import NotificationsPage from "../Component/NotificationsPage";
import React from "react";
import { navIcons } from "../assets/Resources";

const NotificationPresenter = () => {
  return (
    <>
      <Navbar
        Navname="알림함"
        isRight1Disabled
        History
        IconRight2={navIcons.Home}
      />
      <NotificationsPage />
    </>
  );
};
export default NotificationPresenter;
