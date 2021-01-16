import React from "react";
import styled from "styled-components";

const Con = styled.div`
  margin: 0px auto 0px auto;
  padding: 20px;
  width: 82%;
  background-color: white;
  border-radius: 30px;
  box-shadow: 1px 2px 20px 10px rgba(0, 0, 0, 0.1),
    0 2px 4px 1px rgba(0, 0, 0, 0.06);
  margin: 0px auto 30px auto;
`;

const Wrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 0px 20px;
`;
const Oon = styled.div`
  margin: 10px auto 0px 70px;
  padding: 50px 0px 9px 20px;
  width: 50%;
  display: flex;
  justify-content: start;
`;
const Jon = styled.div`
  margin: 10px auto 0px 70px;
  padding: 0px 0px 9px 20px;
  width: 50%;
  display: flex;
  justify-content: start;
`;
const Text = styled.div`
  font-size: 20px;
  margin: 0px 0px;
  background-color: white;
`;
const Text1 = styled.div`
  font-size: 20px;
  color: #cdd0cb;
`;
const Kon = styled.div`
  border:1px solid black;
  text-align:center;
  padding: 20px 10px 20px 10px;
  margin: 40px auto;
  border-radius: 25px;
  width:84%;
  background-color: #D3DAE3;
`;
const Board = () => {
  return (
    <>
      <Oon>
        <Text>계정 비밀번호</Text>
      </Oon>
      <Con>
        <Wrap>
          <Text1>기존 계정 비밀번호</Text1>
        </Wrap>
      </Con>
      <Jon>
        <Text>새 계정 비밀번호</Text>
      </Jon>
      <Con>
        <Wrap>
          <Text1>새 계정 비밀번호</Text1>
        </Wrap>
      </Con>
      <Jon>
        <Text>새 계정 비밀번호</Text>
      </Jon>
      <Con>
        <Wrap>
          <Text1>새 계정 비밀번호</Text1>
        </Wrap>
      </Con>
      <Kon>비밀번호 변경</Kon>
    </>
  );
};
export default Board;
