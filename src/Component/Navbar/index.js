import React, { useState } from "react";
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
import { useAuth } from "../Watchers";
import { mainPageIcons } from "../../assets/Resources";
import SelectSubjectModal from "./Modal";
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

  return (
    <>
     <SelectSubjectModal
        visible={subjectModalVisible}
        onClose={() => setSubjectModalVisible(false)}
      />
      <NavContainer>
        <Nav style={isTransparent ? { backgroundColor: "rgba(0,0,0,0)" } : {}}>
          {!Iconleft && <Bars onClick={() => setSubjectModalVisible(true)} />}
          <NavLink to="/">{!!Navname ? Navname : "융특 커뮤니티 슝"}</NavLink>
          <NavLeftMargin />
          {!isRight1Disabled && (
            <IconImg
              src={IconRight1 || mainPageIcons.notification}
              alt={IconNameRight1 || "아이콘2"}
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
              src={IconRight2 || mainPageIcons.profile}
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
