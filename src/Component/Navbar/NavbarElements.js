import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  font-family: "Noto Sans KR", sans-serif;
  background: #a2c8f3;
  height: 60px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;
export const NavLeftMargin = styled.div`
  flex: 1;
`;

export const NavLink = styled(Link)`
  position: absolute;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
  padding: 0 1rem;
  cursor: pointer;
`;
export const NavOpen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 55px;
  background: rgba(0, 0, 0, 80%);
  z-index: 1;
  opacity: 1;
  transition: all 0.2s ease;
`;
export const NavLinkOpen = styled(Link)`
  color: white;
  font-size: 25px;
  text-align: center;
  padding: 2.2rem;
  cursor: pointer;
  text-decoration: none;
  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  @media (max-width: 1023px) {
    color: white;
    display: block;
    margin: auto 0 auto 13.1px;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const IconImg = styled.img`
  width: 27px;
  margin-right: 13px;
  justify-self: self-end;
`;
