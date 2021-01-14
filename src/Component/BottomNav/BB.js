import React from "react";
import styled from "styled-components";


const Con = styled.div`
  display: flex;
  margin: 0px;
  background-color: #A2C8F3;
  height: 80px;
`;
const Qon = styled.div`
  margin: 20px auto;
  display: flex;
`;


const Oon = styled.div`
  border:1px solid black;
  text-align:center;
  padding:10px 10px 30px 10px;
  margin: 0px 30px 0px 0px;
  align-items:center;
  border-radius:10px;
  width:80px;
  background-color: #D4E6FB;
`;

const BB = () => {
  return (
      <div>
          <Con>
            <Qon>
              <Oon>로그인</Oon>
              <Oon>회원가입</Oon>
              <Oon>PC버전</Oon>
            </Qon>
          </Con>
      </div>
  );
};
export default BB;
