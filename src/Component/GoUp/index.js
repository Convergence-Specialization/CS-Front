import React, { useState } from "react";
import styled from "styled-components";
import { Icons } from "../../assets/Resources";

const IconImg = styled.img`
  width: 27px;
  /* margin-right: 13px; */
  /* justify-self: self-end; */
`;
const GoUpButton = styled.div`
  width: 35px;
  height: 35px;
  background-color : #D4E6FB;
  border-radius: 50px;
  padding : 10px;
  
  align-items: center;
  justify-content: center;
  display:flex;
  position : fixed;
  right: 25px;
  bottom: 60px;
`;

const GoUp = () => {
    return (
        <>
            <GoUpButton>
            <IconImg src={Icons.UpArrow} alt={"위쪽 화살표"} />
            </GoUpButton>
        </>
    )
}
export default GoUp;