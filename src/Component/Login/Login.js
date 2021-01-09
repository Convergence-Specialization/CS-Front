import React from "react";
import styled from "styled-components";
import { Images, Icons } from "../../assets/Resources";

const Container = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  width: 100%;
  position: relative;
  background-image: url(${Images.Background});
  /* filter: blur(5px); */
  background-size: cover;
  background-position: center center;
  overflow: hidden;
  /* z-index: -99; */
`;
const ImageFilter = styled.div`
  width: 100%;
  height: 100%;
  filter: blur(5px);
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
`;
const LoginContainer = styled.div`
  width: 800px;
  height: 350px;
  background-color: white;
  margin: 200px auto;
  border: 1px solid black;
  border-radius: 20px;
  position: relative;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;
const LoginImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginImage = styled.img`
  width: 60%;
`;
const LoginBox = styled.div`
  width: 50%;
  height: 100%;
  background-color: #65d6ce;
  box-shadow: 0 5px 6px -1px rgba(0, 0, 0, 0.5);
`;
const LoginBoxWrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoginBoxTitle = styled.div`
  font-family: "Nanum-round", sans-serif;
  margin: 20px 0;
  font-weight: bold;
  font-size: 40px;
  text-align: center;
`;
const InputBox = styled.input`
  width: 80%;
  height: 40px;
  padding-left: 15px;
  border-radius: 40px;
  margin: 15px 0;
  border: none;
  box-shadow: 0 5px 6px -1px rgba(0, 0, 0, 0.5);
`;
const ButtonWrapper = styled.div`
  margin-top: 20px;
  width: 62%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
`;
const SignUpButton = styled.div`
  /* border: 1px solid black; */
  border-radius: 10px;
  padding: 10px 20px;
  color: black;
  background-color: #e3fdfd;
  box-shadow: 0 5px 6px -1px rgba(0, 0, 0, 0.5);
`;
const SubmitButton = styled.div`
  /* border: 1px solid black; */
  border-radius: 10px;
  padding: 10px 20px;
  color: black;
  background-color: #e3fdfd;
  box-shadow: 0 5px 6px -1px rgba(0, 0, 0, 0.5);
`;
export default () => (
  <Container>
    <ImageFilter />
    <LoginContainer>
      <LoginImageContainer>
        <LoginImage src={Icons.LOGO} />
      </LoginImageContainer>
      <LoginBox>
        <LoginBoxWrapper>
          <LoginBoxTitle>환영합니다!</LoginBoxTitle>
          <InputBox placeholder={"아이디"} />
          <InputBox placeholder={"비밀번호"} />
          <ButtonWrapper>
            <SignUpButton>회원가입</SignUpButton>
            <SubmitButton>로그인</SubmitButton>
          </ButtonWrapper>
        </LoginBoxWrapper>
      </LoginBox>
    </LoginContainer>
  </Container>
);
