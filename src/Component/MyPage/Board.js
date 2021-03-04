import React, { useState } from "react";
import styled from "styled-components";
import { authService } from "../../firebase";
import { useHistory } from "react-router-dom";
import message from "antd/lib/message";
import { loginFunctions } from "../Watchers";
import Secession from "./Modal/Secession";

const Container1 = styled.div`
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  margin: 30px;
  @media (max-width: 430px) {
    margin: 20px;
    padding: 18px;
  }
`;
const Container2 = styled.div`
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  margin: 30px;
  @media (max-width: 430px) {
    margin: 20px;
    padding: 0 18px;
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 18px 10px;
  cursor: pointer;
  @media (max-width: 430px) {
    font-size: 15px;
  }
`;

const Text1 = styled.div`
  padding: 15px 10px;
  line-height: 1.13;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  border: solid #c4c1c1;
  border-width: 0px 0px 1px 0px;
  @media (max-width: 430px) {
    font-size: 15px;
    padding: 18px 10px;
  }
`;

const Board = () => {
  const history = useHistory();
  const [ModalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Secession
        visible={ModalVisible}
        onClose={() => setModalVisible(false)}
      />
      <Container2>
        <Text1 onClick={() => history.push("/mypage/myposts")}>
          내가 쓴 글
        </Text1>
        <Text onClick={() => history.push("/mypage/save")}>저장한 글</Text>
      </Container2>
      {!loginFunctions.getUserInfo().isGoogle && (
        <Container1>
          <Text
            onClick={() => history.push("/mypage/changepw")}
            style={{ padding: "3px 10px" }}
          >
            비밀번호 변경
          </Text>
        </Container1>
      )}
      <Container2>
        <Text1 onClick={() => history.push("/termsandconditions")}>
          서비스 이용약관
        </Text1>
        <Text1 onClick={() => setModalVisible(true)}>회원 탈퇴</Text1>
        <Text
          onClick={() => {
            authService.signOut().then(() => {
              loginFunctions.onLogout();
              message.success("로그아웃 완료");
              history.push("/");
            });
          }}
        >
          로그아웃
        </Text>
      </Container2>
    </>
  );
};
export default Board;
