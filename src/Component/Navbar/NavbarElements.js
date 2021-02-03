import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  max-width: 768px;
  position: fixed;
  z-index: 99;
`;
export const NavUpperMargin = styled.div`
  width: 100%;
  height: 60px;
  @media (max-width: 430px) {
    height: 45px;
  }
`;
export const Nav = styled.nav`
  width: 100%;
  background: #7ab8f3;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  @media (max-width: 430px) {
    height: 45px;
  }
`;
export const NavLeftMargin = styled.div`
  flex: 1;
`;

export const NavLink = styled(Link)`
  font-family: "Jal_Onuel";
  position: absolute;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 25px;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 1rem;
  cursor: pointer;
  @media (max-width: 430px) {
    font-size: 17px;
  }
`;
export const NavOpen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100vh;
  position: absolute;
  top: 45px;
  border-right: 1px solid grey;
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
  border-radius: 10px;
  color: black;
  cursor: pointer;
  width: 48%;
  padding: 10px;
  font-size: 12px;
  text-align: center;
  background-color: white;
`;
export const NavOpenUpperDescWrapper = styled.div`
  font-size: 12px;
  margin-top: 15px;
  width: 90%;
  color: white;
  border: 1px solid white;
  padding: 10px;
`;
export const NavOpenSingleItemBox = styled.div`
  align-self: stretch;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid grey;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${(props) => (props.isChild ? "#EFEFEF" : "white")};
  font-weight: ${(props) => (props.isChild ? "normal" : "bold")};
`;
export const NavOpenItemMargin = styled.div`
  width: 22px;
  height: 10px;
`;
export const NavOpenItemImg = styled.img`
  width: 16px;
  margin-right: 6px;
`;
export const NavOpenItemText = styled.div`
  font-size: 13px;
`;
export const NavOpenItemArrowButton = styled.img`
  position: absolute;
  right: 10px;
  width: 15px;
`;

export const Bars = styled(FaBars)`
  color: white;
  display: block;
  margin: auto 0 auto 13.1px;
  font-size: 1.8rem;
  cursor: pointer;
  @media (max-width: 430px) {
    font-size: 1.5rem;
  }
`;
export const IconImg = styled.img`
  width: 27px;
  margin-right: 13px;
  justify-self: self-end;
  cursor: pointer;
  @media (max-width: 430px) {
    width: 20px;
  }
`;
