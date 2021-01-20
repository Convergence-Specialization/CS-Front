import React, { useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavOpen,
  NavLinkOpen,
  IconImg,
  NavLeftMargin,
} from "./NavbarElements";
import { Link } from "react-router-dom";

import { mainPageIcons } from "../../assets/Resources";

const Navbar = ({ Navname }) => {
  const [navClicked, setNavClicked] = useState(false);
  return (
    <>
      <Nav>
        <Bars onClick={() => setNavClicked(!navClicked)} />
        <NavLink to="/">{Navname}</NavLink>
        <NavLeftMargin />
        <Link to="">
          <IconImg src={mainPageIcons.notification} alt={"알림 아이콘"} />
        </Link>
        <Link to="/login">
          <IconImg src={mainPageIcons.profile} alt={"프로필 아이콘"} />
        </Link>
      </Nav>
      <NavOpen
        style={
          navClicked
            ? { left: "0", opacity: "1" }
            : { left: "-100%", opacity: "0" }
        }>
        <NavLinkOpen to="/about">20학번</NavLinkOpen>
        <NavLinkOpen to="/ServiceOverview">21학번</NavLinkOpen>
      </NavOpen>
    </>
  );
};

export default Navbar;
