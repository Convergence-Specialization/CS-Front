import React, { useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavOpen,
  NavLinkOpen,
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

import { mainPageIcons } from "../../assets/Resources";

const Navbar = ({ Navname }) => {
  const [navClicked, setNavClicked] = useState(false);
  return (
    <>
      <NavContainer>
        <Nav>
          <Bars onClick={() => setNavClicked(!navClicked)} />
          <NavLink to="/">{Navname}</NavLink>
          <NavLeftMargin />
          <IconImg src={mainPageIcons.notification} alt={"알림 아이콘"} />
          <IconImg src={mainPageIcons.profile} alt={"프로필 아이콘"} />
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
            <NavOpenUpperDescWrapper>asdfasdf</NavOpenUpperDescWrapper>
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
      <NavUpperMargin />
    </>
  );
};

export default Navbar;
