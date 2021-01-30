import { message } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { userApi } from "../../api";
import { Images } from "../../assets/Resources";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const BackgroundImg = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${Images.Background3});
  background-size: cover;
  position: absolute;
  z-index: -2;
`;
const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 50%);
  z-index: -1;
`;
const Button = styled.div`
  border: 2px solid white;
  padding: 10px 20px;
  width: 60%;
  margin: 10px 0;
  text-align: center;
  font-size: 14px;
  color: white;
  cursor: pointer;
`;
const InputBox = styled.input`
  width: 60%;
  margin: 15px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  border-bottom: 2px solid white;
  padding: 10px;
  color: white;
  outline: none;
  font-size: 15px;
  ::placeholder {
    color: white;
  }
`;
const Text = styled.div`
  width: 75%;
  font-size: 20px;
  line-height: 1.74;
  text-align: center;
  color: #ffffff;
  @media (max-width: 430px) {
    font-size: 15px;
  }
`;
const Title = styled.div`
  font-size: 30px;
  color: #ffffff;
  margin-bottom: 20px;
  @media (max-width: 430px) {
    font-size: 20px;
  }
`;

const ForgotPassword = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <BackgroundImg />
      <BackgroundFilter />
      <Title>이메일 주소로 계정 찾기</Title>
      <Text>
        비밀번호는 가입 시 등록한 메일 주소로 알려드립니다. 가입할 때 등록한
        메일주소를 입력하고 *PW 찾기* 버튼을 클릭해주세요
      </Text>
      <InputBox
        id="emailInputBox"
        type="email"
        placeholder="이메일"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
      />
      <Button
        onClick={() => {
          if (loading) return;
          let email = document.getElementById("emailInputBox").value;
          if (email === "") {
            message.error("이메일을 입력해주세요");
            return;
          }
          message.loading("발송 중입니다..", 10);
          setLoading(true);
          userApi
            .lostPw({ email })
            .then(() => {
              message.destroy();
              message.success("재설정 이메일을 발송했습니다.");
              history.push("/login");
            })
            .catch((error) => {
              message.destroy();
              message.error(error.message);
            });
        }}>
        PW 찾기
      </Button>
    </Container>
  );
};
export default ForgotPassword;
