import React, { useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavOpen,
  IconImg,
  NavLeftMargin,
  NavContainer,
  NavUpperMargin,
  NavOpenUpperContainer,
  NavOpenUpperButtonWrapper,
  NavOpenUpperButton,
  NavOpenUpperDescWrapper,
  NavOpenSingleItemBox,
  NavOpenItemText,
} from "./NavbarElements";
import { useHistory } from "react-router-dom";
import { useAuth } from "../Watchers";
import { mainPageIcons } from "../../assets/Resources";

const Navbar = ({
  Navname,
  isTransparent,
  IconRight1,
  IconNameRight1,
  IconRight2,
  IconNameRight2,
}) => {
  const user = useAuth();
  const history = useHistory();
  const [navClicked, setNavClicked] = useState(false);
  return (
    <>
      <NavContainer>
        <Nav style={isTransparent ? { backgroundColor: "rgba(0,0,0,0)" } : {}}>
          <Bars onClick={() => setNavClicked(!navClicked)} />
          <NavLink to="/">{!!Navname ? Navname : "융특 커뮤니티 슝"}</NavLink>
          <NavLeftMargin />
          <IconImg
            src={IconRight1 || mainPageIcons.notification}
            alt={IconNameRight1 || "아이콘2"}
          />
          <IconImg
            onClick={() => {
              if (user) {
                history.push("/mypage");
              } else {
                history.push("/login");
              }
            }}
            src={IconRight2 || mainPageIcons.profile}
            alt={IconNameRight2 || "아이콘1"}
          />
        </Nav>
        <NavOpen
          style={
            navClicked
              ? { left: "0", opacity: "1" }
              : { left: "-100%", opacity: "0" }
          }>
          <NavOpenUpperContainer>
            <NavOpenUpperButtonWrapper>
              <NavOpenUpperButton>로그인</NavOpenUpperButton>
              <NavOpenUpperButton>회원가입</NavOpenUpperButton>
            </NavOpenUpperButtonWrapper>
            <NavOpenUpperDescWrapper>
              회원정보가 없습니다.
            </NavOpenUpperDescWrapper>
          </NavOpenUpperContainer>
          <NavOpenSingleItemBox>
            <NavOpenItemText>Home</NavOpenItemText>
          </NavOpenSingleItemBox>
          <NavOpenSingleItemBox>
            <NavOpenItemText>마이페이지</NavOpenItemText>
          </NavOpenSingleItemBox>
          <NavOpenSingleItemBox>
            <NavOpenItemText>알림함</NavOpenItemText>
          </NavOpenSingleItemBox>
          <NavOpenSingleItemBox>
            <NavOpenItemText>학생회 공지사항</NavOpenItemText>
          </NavOpenSingleItemBox>
          <NavOpenSingleItemBox>
            <NavOpenItemText>Home</NavOpenItemText>
          </NavOpenSingleItemBox>
        </NavOpen>
      </NavContainer>
      <NavUpperMargin style={isTransparent ? { display: "none" } : {}} />
    </>
  );
};

export default Navbar;
