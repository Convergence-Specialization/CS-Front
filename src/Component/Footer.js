import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  width: 100%;
  text-align: center;
  padding: 50px 0;
  background-color: #484848;
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
  font-size: 15px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Footer = () => {
  const [count, setCount] = useState(0);
  const clicked = () => {
    if (count === 3) {
      document.location = "/secretlogin";
    }
    setCount(count + 1);
  };
  return (
    <Container>
      <Text>융합특성화자유전공학부 커뮤니티</Text>
    </Container>
  );
};
export default Footer;
