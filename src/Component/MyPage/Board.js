import React from "react";
import styled from "styled-components";
import { authService } from "../../firebase";
import { useHistory } from "react-router-dom";
import { message } from "antd";
const Con = styled.div`
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  margin: 30px;
  @media (max-width: 430px) {
    margin: 30px 20px;
    padding: 15px;
  }
`;

const Qrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 20px;
  line-height: 1.13;
  cursor: pointer;
  @media (max-width: 430px) {
    font-size: 12px;
    padding: 0px 10px;
  }
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  border: solid;
  border-width: 0px 0px 1px 0px;
  margin: 0px 0px 10px 0px;
  font-size: 20px;
  line-height: 1.13;
  @media (max-width: 430px) {
    font-size: 12px;
    padding: 10px 20px;
  }
`;
const Jrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  font-size: 20px;
  line-height: 1.13;
  cursor: pointer;
  @media (max-width: 430px) {
    font-size: 12px;
    width: 85%;
    padding: 10px 20px;
  }
`;

const Board = () => {
  const history = useHistory();
  return (
    <>
      <Con>
        <Qrap onClick={() => history.push("/mypage/myposts")}>
          <div>내가 쓴 글</div>
        </Qrap>
      </Con>
      <Con>
        <Qrap onClick={() => history.push("/mypage/changepw")}>
          <div >비밀번호 변경</div>
        </Qrap>
      </Con>
      <Con>
        <Wrap>
          <div>서비스 이용약관</div>
        </Wrap>
        <Jrap>
          <div
            onClick={() => {
              authService.signOut();
              message.success("로그아웃 완료");
              history.push("/")
            }}>
            로그아웃
          </div>
        </Jrap>
      </Con>
    </>
  );
};
export default Board;
