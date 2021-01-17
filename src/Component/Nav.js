import React from "react";
import styled from "styled-components";
import { Icons } from "./../assets/Resources";

const Con = styled.div`
  display: flex;
  align-items:center;
  justify-content:space-between;
  width: 100%;
  padding: 20px 24px 17px 8px;
  background-color: #a2c8f3;
  @media(max-width: 430px){
      width:120%;
      padding: 20px 20px 17px 80px;
    margin:0px 0px 0px 0px;
    
  },
`;
const Qon = styled.div`
  text-align: center;
  display: flex;
  margin: 0px 5% 0px 5%;
  @media(max-width: 430px){
    width:100%;
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 0px 0px;
  }`
  ;
  const Oon = styled.div`
  text-align: center;
  display: flex;
  margin: 0px 5% 0px 5%;
  @media(max-width: 430px){
    width:100%;
    padding: 0px 120px 0px 60px;
    margin: 0px 0px 0px 0px;
  }`
  ;

const Jon = styled.div`
  text-align: center;
  font-family: NanumGothic;
  font-size: 34px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  @media(max-width: 430px){
    font-size: 15px;
  }
`;

const Nav = () => {
  return (
    <div>
      <Con>
        <Qon>
          <img src={Icons.menu} alt="메뉴" style={{ width: "40px" }}></img>
        </Qon>
        <Oon>
          <Jon>융특 커뮤니티 슝</Jon>
        </Oon>
        <Qon>
          <img src={Icons.person} alt="사람" style={{ width: "40px" }}></img>
        </Qon>
      </Con>
    </div>
  );
};
export default Nav;
