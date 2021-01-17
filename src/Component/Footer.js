import React, { useState } from "react";
import styled from "styled-components";
import { Icons } from "./../assets/Resources";

const Container = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  width: 100%;
  text-align: start;
  display: flex;
  padding: 5px 0px 10px 70px;
  background-color: white;
  color: white;
  line-height: 1.16;
  
  @media (max-width: 430px) {
    margin: 0px 0px 0px 0px;
    padding: 5px 0px 10px 70px;
    width: 140%;
  }
`;
const Title = styled.div`
  
  padding:8px;
  margin:0px 0px 0px 0px;
  @media (max-width: 430px) {
    padding:8px 0px 8px 8px;
  }
`;
const Text = styled.div`
  opacity: 0.7;
  font-family: H2hdrM;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: normal;
  text-align: left;
  color: #616161;
  @media (max-width: 430px) {
    font-size: 13px;
    padding:0px 0px 1px 0px;
    margin:0px 5px;
  }
`;
const Qext = styled.div`
  font-family: MalgunGothic;
  font-size: 12px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  letter-spacing: normal;
  text-align: left;
  color: #616161;
  @media (max-width: 430px) {
    font-size: 9px;
    padding:0px 0px px 0px;
    margin:0px 5px;
`;

const Footer = () => {
  return (
    <Container>
      <img class= "btn" src={Icons.숭실} alt="숭실" style={{ width: "11%" }}></img>
      <Title>
        <Text>융합특성화자유전공학부</Text>
        <Qext>서울특별시 동작구 상도로 309 숭실대학교 문화관 302호 융합특성화자유전공학부,</Qext>
        <Qext>서울특별시 06978 TEL) 02-829-8220</Qext>
      </Title>
    </Container>
  );
};
export default Footer;
