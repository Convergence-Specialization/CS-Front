import React from "react";
import styled from "styled-components";

const Con = styled.div`
  padding: 20px;
  width: 82%;
  border-radius: 54px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
    margin: 30px auto;
`;

const Qrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 10px 30px;
  font-family: NanumSquareRoundR;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;
const Wrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 15px 30px;
  border: solid;
  border-width: 0px 0px 1px 0px;
  margin: 0px 0px 20px 0px;
  font-family: NanumSquareRoundR;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;
const Jrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 10px 30px;
  font-family: NanumSquareRoundR;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;


const Board = () => {
  return (
    <>
      <Con>
        <Qrap>
          <div>내가 쓴 글</div>
        </Qrap>
      </Con>
      <Con>
        <Qrap>
          <div>비밀번호 변경</div>
        </Qrap>
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
