import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: "NanumSquareRound";
  padding: 10px 15px;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  position: relative;
`;
export const IconImg = styled.img`
  width: 23px;
  margin-right: 13px;
`;
export const Text = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const NavBot = ({ Name, Icon }) => {
  return (
    <Container>
      <IconImg src={Icon} />
      <Text>{Name}</Text>
    </Container>
  );
};

export default NavBot;
