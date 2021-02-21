import React, { useEffect, useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  IconImg,
  NavLeftMargin,
  NavContainer,
  NavUpperMargin,
} from "./NavbarElements";
import { useHistory } from "react-router-dom";
import { loginFunctions, useAuth } from "../Watchers";
import { navIcons } from "../../assets/Resources";
import SelectSubjectModal from "./Modal";
import { userApi } from "../../api";
const Navbar = ({
  Navname,
  isTransparent,
  isRight1Disabled,
  isRight2Disabled,
  IconRight1,
  Iconleft,
  IconNameRight1,
  IconRight2,
  IconNameRight2,
  History,
}) => {
  const user = useAuth();
  const history = useHistory();
  const [subjectModalVisible, setSubjectModalVisible] = useState(false);
  const [unreadNotificationExist, setUnreadNotificationsExist] = useState(
    false
  );

  useEffect(() => {
    const userInfo = loginFunctions.getUserInfo();
    if (!userInfo) return;

    // 아직 안읽은 알림들 가져오기
    userApi
      .getUnreadNotifications({
        uid: userInfo.uid,
        size: 1,
      })
      .then((notificationArray) => {
        setUnreadNotificationsExist(notificationArray.length === 1);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <SelectSubjectModal
        visible={subjectModalVisible}
        onClose={() => setSubjectModalVisible(false)}
      />
      <NavContainer>
        <Nav style={isTransparent ? { backgroundColor: "rgba(0,0,0,0)" } : {}}>
          {!Iconleft && <Bars onClick={() => setSubjectModalVisible(true)} />}
          <NavLink onClick={() => history.push("/")}>
            {Navname || "융특 커뮤니티 슝"}
          </NavLink>
          <NavLeftMargin />
          {!isRight1Disabled && (
            <IconImg
              onClick={() => {
                if (user) {
                  history.push("/");
                  if (!History) {
                    history.push("/notification");
                  }
                } else {
                  history.push("/login");
                }
              }}
              src={
                unreadNotificationExist
                  ? navIcons.notificationOn
                  : navIcons.notification
              }
              alt={"알림 아이콘"}
            />
          )}
          {!isRight2Disabled && (
            <IconImg
              onClick={() => {
                if (user) {
                  history.push("/");
                  if (!History) {
                    history.push("/mypage");
                  }
                } else {
                  history.push("/login");
                }
              }}
              src={IconRight2 || navIcons.profile}
              alt={IconNameRight2 || "아이콘1"}
            />
          )}
        </Nav>
      </NavContainer>
      <NavUpperMargin style={isTransparent ? { display: "none" } : {}} />
    </>
  );
};

export default Navbar;
