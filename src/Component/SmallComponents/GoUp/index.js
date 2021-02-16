import React from "react";
import styled from "styled-components";
import { etc } from "../../../assets/Resources";

const GoUpButton = styled.div`
  width: 35px;
  height: 35px;
  background-color: #d4e6fb;
  border-radius: 50px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 25px;
  bottom: 60px;
`;
const IconImg = styled.img`
  width: 27px;
`;

const GoUpComponent = () => (
  <GoUpButton>
    <IconImg
      src={etc.UpArrow}
      alt={"위쪽 화살표"}
      onClick={() => window.scrollTo(0, 0)}
    />
  </GoUpButton>
);

export default GoUpComponent;
