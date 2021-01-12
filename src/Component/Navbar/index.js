import React, { useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavOpen,
  NavLinkOpen,
} from "./NavbarElements";

import { Icons } from "../../assets/Resources";

const Navbar = () => {
  const [navClicked, setNavClicked] = useState(false);
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={Icons.LOGO} alt="융특 로고" style={{ height: "50px" }} />
        </NavLink>
        <Bars onClick={() => setNavClicked(!navClicked)} />
        <NavOpen
          style={
            navClicked
              ? { left: "0", opacity: "1" }
              : { left: "-100%", opacity: "0" }
          }>
          <NavLinkOpen to="/about">20학번</NavLinkOpen>
          <NavLinkOpen to="/ServiceOverview">21학번</NavLinkOpen>
          <NavLink to="/Login">로그인</NavLink>
        </NavOpen>
        <NavMenu>
          <NavLink to="/about">게시판</NavLink>
          <div>|</div>
          <NavLink to="/Login">로그인</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
