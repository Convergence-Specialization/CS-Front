import React, { useState } from "react";
import styled from "styled-components";
import message from "antd/lib/message";
import { authInstance, authService } from "../../../firebase";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
  width: 85%;
  border-radius: 30px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
  margin: 0px auto 30px auto;
  @media (max-width: 430px) {
    padding: 15px;
  }
`;
const Title = styled.div`
  margin-left: 40px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 16px;
`;

const Text = styled.div`
  font-size: 15px;
`;

const InputBox = styled.input`
  padding-left: 5px;
  font-size: 20px;
  line-height: 1.13;
  outline: none;
  border: none;
  font-size: 15px;
  @media (max-width: 430px) {
    font-size: 16px;
  }
  ::placeholder {
  }
`;

const Board = () => {
  const history = useHistory();
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [uploading, setUploading] = useState(false);

  return (
    <>
      <Title style={{ marginTop: "40px" }}>계정 비밀번호</Title>
      <Container>
        <InputBox type="password" placeholder="계정 비밀번호" id="previousPw" />
      </Container>
      <Title>새 계정 비밀번호</Title>
      <Container>
        <InputBox
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={({ target: { value } }) => setPw(value)}
        />
      </Container>
      <Title>새 계정 비밀번호 확인</Title>
      <Container style={{ marginBottom: "0px" }}>
        <InputBox
          type="password"
          placeholder="비밀번호 확인"
          value={pwCheck}
          onChange={({ target: { value } }) => setPwCheck(value)}
        />
      </Container>
      <Container
        onClick={async () => {
          if (uploading) return;
          if (pw !== pwCheck) {
            message.destroy();
            message.error("새 비밀번호 확인이 일치하지 않습니다.");
            return;
          }
          setUploading(true);
          message.destroy();
          message.loading("비밀번호 변경 중..");
          try {
            let user = authService.currentUser;
            let credential = authInstance.EmailAuthProvider.credential(
              user.email,
              document.getElementById("previousPw").value
            );
            await user.reauthenticateWithCredential(credential);
            await user.updatePassword(pw);
            message.destroy();
            message.success("비밀번호가 변경되었습니다.");
            history.goBack();
          } catch (err) {
            console.log(err);
            message.destroy();
            message.error("기존 비밀번호가 일치하지 않습니다.");
          } finally {
            setUploading(false);
          }
        }}
        style={{ backgroundColor: "lightgray", marginTop: "35px" }}>
        <Text
          style={{ textAlign: "center", fontSize: "16px", fontWeight: "bold" }}>
          비밀번호 변경
        </Text>
      </Container>
    </>
  );
};
export default Board;
