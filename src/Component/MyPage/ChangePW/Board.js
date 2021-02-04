import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { message } from "antd";

const Con = styled.div`
  margin: 0px auto 0px auto;
  padding: 20px;
  width: 82%;
  background-color:white;
  border-radius: 30px;
  box-shadow: 1px 2px 20px 10px rgba(0, 0, 0, 0.1),
    0 2px 4px 1px rgba(0, 0, 0, 0.06);
  margin: 0px auto 30px auto;
  @media (max-width: 430px) {
    padding: 15px 0px 15px 0px;
  }
`;

const Wrap = styled.div`
`;
const Oon = styled.div`
  margin: 50px 0px 15px 90px;
  display: flex;
  justify-content: start;
  @media (max-width: 430px) {
    margin: 50px 0px 10px 50px;
  }
`;
const Jon = styled.div`
  margin: 0px 0px 15px 90px;
  display: flex;
  justify-content: start;
  @media (max-width: 430px) {
    margin: 0px 0px 10px 50px;
  }
`;
const Text = styled.div`
  font-size: 20px;
  line-height: 1.13;
  @media (max-width: 430px) {
    font-size: 15px;
  }
`;
const Kon = styled.div`
  text-align: center;
  padding: 20px 10px 20px 10px;
  margin: 40px auto;
  border-radius: 25px;
  width: 82%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ccd3dc;
  font-size: 20px;
  line-height: 1.14;
  cursor: pointer;
  @media (max-width: 430px) {
    font-size: 15px;
    padding: 15px 0px;
  }
`;
const InputBox = styled.input`
  padding: 0px 20px;
  font-size: 20px;
  line-height: 1.13;
  color: #8e8e8e;
  outline: none;
  border: none;
  font-size: 15px;
  @media (max-width: 430px) {
    font-size: 15px;
    padding: 0px 20px;
  }
  ::placeholder {
  }
`;
const Qrap = styled.div`
  padding: 0px 20px;
  font-size: 20px;
  line-height: 1.13;
  color: #8e8e8e;
  @media (max-width: 430px) {
    font-size: 15px;
    padding: 0px 20px;
  }
`;
const Board = () => {
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const history = useHistory();
  return (
    <>
      <Oon>
        <Text>계정 비밀번호</Text>
      </Oon>
      <Con>
        <Qrap>
       kdkdkdk
        </Qrap>
      </Con>
      <Jon>
        <Text>새 계정 비밀번호</Text>
      </Jon>
      <Con>
      <Wrap>
        <InputBox
        type="password"
        placeholder="비밀번호"
        value={pw}
        onChange={({ target: { value } }) => setPw(value)}
      />
        </Wrap>
      </Con>
      <Jon>
        <Text>새 계정 비밀번호 확인</Text>
      </Jon>
      <Con>
      <Wrap>
        <InputBox
        type="password"
        placeholder="비밀번호 확인"
        value={pwCheck}
        onChange={({ target: { value } }) => setPwCheck(value)}
      />
        </Wrap>
      </Con>
      <Kon
      onClick={() => {
        if (pw !== pwCheck) {
          alert("비밀번호가 일치하지 않습니다.");
          return;
        }
        else  {
          message.success("비밀번호가 변경되었습니다.");
          history.push("/mypage");
        }
      }}
      >비밀번호 변경</Kon>
    </>
  );
};
export default Board;
