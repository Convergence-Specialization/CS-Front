import React from "react";
import { Icons } from "../../assets/Resources";
import styled from "styled-components";

const Wrap = styled.div`
  width: 80%;
  display: flex;
  background-color: white;
  border-radius: 20px;
  margin: 20px auto 30px auto;
  padding: 70px 0px 20px 60px;
  box-shadow: 1px 2px 20px 5px rgba(0, 0, 0, 0.1),
    0 2px 4px 1px rgba(0, 0, 0, 0.06);
`;
const Title = styled.div`
  font-size: 25px;
  padding:0px 0px 0px 0px;
`;
const Text = styled.div`
  display: flex;
  font-size: 20px;
  margin: 0px 3px 10px 10px;
  font-weight: 900;
`;
const Wext = styled.div`
  font-size: 18px;
  margin: 0px 0px 0px 0px;
  font-weight: 900;
`;
const Qext = styled.div`
  display: flex;
  margin: 0px 0px 0px 15px;
`;
const Oon = styled.div`
  border:1px solid black;
  text-align:center;
  padding:10px 10px 20px 10px;
  margin: 40px 30px 0px 400px;
  border-radius: 25px;
  width:100px;
  background-color: #D3DAE3;
`;

const Board = () => {
  return (
    <Wrap>
      <img src={Icons.프로필} alt="프로필" style={{ height: "70px" }}></img>
      <Title>
        <Qext>
          <Text>지여누</Text>
          <Wext>|</Wext>
          <Text>ywo121</Text>
        </Qext>
        <Qext>
          <Text>20201884</Text>
        </Qext>
        <Qext>
          <Text>ywoo121@naver.com</Text>
        </Qext>
        <Qext>
          <Oon>정보수정</Oon>
        </Qext>
      </Title>
    </Wrap>
  );
};
export default Board;
