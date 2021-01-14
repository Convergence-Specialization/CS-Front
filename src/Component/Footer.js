import React, { useState } from "react";
import styled from "styled-components";
import { Icons } from "./../assets/Resources";

const Container = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  width: 100%;
  text-align: start;
  display: flex;
  margin: 0px 0px 10px 20px;
  padding: 50px 0;
  background-color: white;
  color: white;
  line-height: 1.66;
  @media (max-width: 768px) {
    padding: 25px 0;
  }
`;
const Title = styled.div`
  font-size: 25px;
  margin-bottom: 12px;
  @media (max-width: 768px) {
    font-size: 19px;
  }
`;
const Text = styled.div`
  font-size: 20px;
  color: grey;
  margin: 10px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
const Qext = styled.div`
  font-size: 14px;
  color: grey;
  margin: 10px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Footer = () => {
  const [count, setCount] = useState(0);
  return (
    <Container>
      <img src={Icons.숭실} alt="숭실" style={{ height: "100px" }}></img>
      <Title>
        <Text>융합특성화자유전공학부 커뮤니티</Text>
        <Qext>서울특별시 동작구 상도로 309 숭실대학교 문화관 302호 융합특성화자유전공학부,</Qext>
        <Qext>서울특별시 06978 TEL) 02-829-8220</Qext>
      </Title>
    </Container>
  );
};
export default Footer;
