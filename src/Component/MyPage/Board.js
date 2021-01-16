import React from "react";
import styled from "styled-components";

const Con = styled.div`
  margin: 0px auto 10px auto;
  padding: 20px;
  width: 82%;
  background-color: white;
  border-radius: 30px;
  box-shadow: 1px 2px 20px 5px rgba(0, 0, 0, 0.1),
    0 2px 4px 1px rgba(0, 0, 0, 0.06);
    margin: 20px auto 30px auto;
`;


const Wrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 10px 30px;
  border: solid;
  border-width: 0px 0px 1px 0px;
  margin: 10px 0px 20px 0px;
`;
const Jrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 20px;
  margin: 10px 0px 0px 0px;
  padding: 10px 30px;
`;


const Board = () => {
  return (
    <>
      <Con>
        <Wrap>
          <div>이메일 변경</div>
        </Wrap>
        <Jrap>
          <div>비밀번호 변경</div>
        </Jrap>
      </Con>
      <Con>
        <Wrap>
          <div>서비스 이용약관</div>
        </Wrap>
        <Wrap>
          <div>회원탈퇴</div>
        </Wrap>
        <Jrap>
          <div>로그아웃</div>
        </Jrap>
      </Con>
    </>
  );
};
export default Board;
