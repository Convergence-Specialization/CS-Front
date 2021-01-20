import React from "react";
import styled from "styled-components";
import { Icons, mainPageIcons } from "../../assets/Resources";
const Container = styled.div`
  padding: 20px;
  height: 10px;
  display: flex;
  position: relative;
  align-items: center;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
`;
export const IconImg = styled.img`
  width: 23px;
  margin-right: 13px;
`;

export const Text = styled.div`
  font-family: NanumSquareRoundB;
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.64;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;

const NavBot = ({ Name, Icon }) => {
  return (
    <>
      <Container>
        <IconImg src={Icon}/>
        <Text>{Name}</Text>
      </Container>
    </>
  );
};

export default NavBot;
