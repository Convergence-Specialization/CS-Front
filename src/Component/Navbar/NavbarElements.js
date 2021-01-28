import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  position: fixed;
  z-index: 99;
`;
export const NavUpperMargin = styled.div`
  width: 100%;
  height: 60px;
`;
export const Nav = styled.nav`
  width: 100%;
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
  width: 50%;
  height: 100vh;
  position: absolute;
  top: 55px;
  background: white;
  z-index: 1;
  opacity: 1;
  transition: all 0.2s ease;
`;
export const NavLinkOpen = styled(Link)`
  color: black;
  border-bottom: 1px solid #a2c8f3;
  font-size: 25px;
  text-align: center;
  margin: 20px 0;
  cursor: pointer;
  text-decoration: none;
`;
export const NavOpenUpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #a2c8f3;
`;
export const NavOpenUpperButtonWrapper = styled.div`
  width: 90%;
  padding-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavOpenUpperButton = styled.div`
  background-color: white;
  border-radius: 10px;
  color: black;
  width: 35%;
  padding: 10px;
  font-size: 15px;
  text-align: center;
`;
export const NavOpenUpperDescWrapper = styled.div`
  margin-top: 15px;
  width: 70%;
  color: white;
  border: 1px solid white;
  padding: 10px;
`;
export const NavOpenSingleItemBox = styled.div`
  /* flex: 1; */
  align-self: stretch;
  padding: 10px;
  border: 1px solid black;
`;
export const NavOpenItemImg = styled.img``;
export const NavOpenItemText = styled.div``;

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
  cursor: pointer;
`;
