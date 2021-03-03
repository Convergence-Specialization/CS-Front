import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  max-width: 768px;
  position: fixed;
  z-index: 999;
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

export const NavLink = styled.div`
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
  width: 70%;
  height: 100vh;
  position: absolute;
  border-right: 1px solid #dedede;
  background: white;
  z-index: 1;
  opacity: 1;
  transition: all 0.2s ease;
`;
export const NavLinkOpen = styled(Link)`
  color: black;
  border-bottom: 1px solid #7ab8f3;
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
  background-color: #7ab8f3;
`;
export const NavOpenUpperButtonWrapper = styled.div`
  width: 90%;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
`;
export const NavOpenUpperButton = styled.div`
  color: black;
  font-size: 14px;
  text-align: center;
  width: 45%;
  padding: 15px 0px;
  border-radius: 10px;
  background-color: white;
`;
export const NavBotBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  position: fixed;
  bottom: 20px;
  width: 70%;
  background-color: white;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;
export const NavBotTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 45%;
`;
export const NavBotText = styled.div`
  font-size: 12px;
  font-family: "양진체";
  color: #cccccc;
`;
export const NavTopText = styled.div`
  font-size: 12px;
  margin-top: 20px;
`;
export const NavOpenUpperButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0px;
`;
export const NavOpenUpperButtonBoxs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavOpenUpperDescWrapper = styled.div`
  font-size: 18px;
  color: white;
  margin-bottom: 15px;
  font-weight: bold;
  display: flex;
`;
export const InformationWrapper = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  padding: 15px 20px;
  width: 100%;
  background-color: white;
`;
export const InformationText = styled.div`
  font-size: 15px;
  line-height: 1.5;
`;
export const NavOpenSingleItemBox = styled.div`
  align-self: stretch;
  padding: 15px 10px;
  cursor: pointer;
  border-bottom: 1px solid #dedede;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${(props) => (props.isChild ? "#EFEFEF" : "white")};
  font-weight: ${(props) => (props.isChild ? "normal" : "bold")};
`;
export const NavOpenSingleChildItemBox = styled.div`
  align-self: stretch;
  padding: 13px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${(props) => (props.isChild ? "#f1f1f1" : "white")};
  font-weight: ${(props) => (props.isChild ? "normal" : "bold")};
`;
export const NavSingleMarginBetween = styled.div`
  width: 1px;
`;
export const NavSingleBottomItemBox = styled.div`
  align-self: stretch;
  padding: 10px;
  cursor: pointer;
  border-top: 1px solid grey;
  display: flex;
  align-items: center;
  position: relative;
`;
export const NavOpenItemMargin = styled.div`
  width: 22px;
  height: 10px;
`;
export const Margin = styled.div`
  width: 100%;
  height: 5px;
  background-color: #ececec;
`;
export const NavOpenItemImg = styled.img`
  width: 16px;
  margin-right: 6px;
`;
export const NavImg = styled.img`
  width: 38px;
`;
export const CancelImg = styled.img`
  width: 15px;
  position: absolute;
  top: 15px;
  right: 140px;
  z-index: 99;
`;
export const NavImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 10px 0px;
`;
export const NavImgTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  align-items: center;
  text-align: center;
`;
export const NavText = styled.div`
  font-size: 14px;
  margin-top: 10px;
`;
export const NavOpenItemText = styled.div`
  font-size: 15px;
  margin-left: 10px;
`;
export const NavOpenchildItemText = styled.div`
  font-size: 13px;
  margin-left: 10px;
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
