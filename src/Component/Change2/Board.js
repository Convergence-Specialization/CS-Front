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
  margin: 10px 0px 0px 70px;
  padding: 0px 0px 9px 20px;
  width: 90%;


`;
const Text = styled.div`
  font-size: 20px;
  margin: 10px 0px;
  background-color: white;
`;
const Text1 = styled.div`
  font-size: 20px;
  margin: 5px 0px;
  background-color: white;
`;
const Kon = styled.div`
  border:1px solid black;
  text-align:center;
  padding: 20px 10px 20px 10px;
  margin: 30px auto 0px auto;
  border-radius: 25px;
  width:84%;
  font-Size: 30px;
  background-color: #D3DAE3;
`;
const Board = () => {
  return (
    <>
      <Oon>
        <Text>이메일</Text>
      </Oon>
      <Con>
        <Wrap>
          <div>지여누</div>
        </Wrap>
      </Con>
      <Jon>
        <Text>아이디</Text>
      </Jon>
      <Con>
        <Wrap>
          <div>ywoo121</div>
        </Wrap>
      </Con>
      <Jon>
        <Text1>※계정 분실 시 아이디/ 비밀번호 찾기, 개인정보관련 주요</Text1>
        <Text1>고지사항 안내 등에 사용됩니다.</Text1>
      </Jon>
      <Kon>이메일 변경</Kon>
    </>
  );
};
export default Board;
