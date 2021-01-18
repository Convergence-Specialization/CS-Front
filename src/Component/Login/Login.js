import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Images, Icons } from "../../assets/Resources";
import {ui, firebaseInstance} from "../../fbase";
// import * as firebaseui from "firebaseui";
// import firebase from "firebase";

const Container = styled.div`
  font-family: "Nanum-round", sans-serif;
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;
const ImageFilter = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Images.Background});
  background-size: cover;
  background-position: center center;
  transform: scale(1.02);
  filter: blur(7px);
  position: absolute;
  /* background-color: rgba(0, 0, 0, 0.5); */
`;
const LoginContainer = styled.div`
  width: 800px;
  min-height: 600px;
  background-color: white;
  margin: 150px auto;
  position: relative;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  box-shadow: 0 5px 6px -1px rgba(0, 0, 0, 0.5);
`;
const LoginImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3b6978;
  box-shadow: 0 5px 6px 3px rgba(0, 0, 0, 0.5);
`;
const LoginImage = styled.img`
  width: 60%;
`;
const LoginBox = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: #00fff5; */
`;
const LoginBoxWrapper = styled.div`
  padding: 35px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  transition: all 0.1s ease;
`;
const LoginBoxSubTitle = styled.div`
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 12px;
`;
const LoginBoxTitle = styled.div`
  font-weight: bold;
  font-size: 57px;
  align-self: flex-start;
  margin-bottom: 15px;
`;
const InputBox = styled.input`
  width: 90%;
  height: 40px;
  padding-left: 15px;
  margin: 15px 0;
  border: none;
  box-shadow: 0 5px 6px -1px rgba(0, 0, 0, 0.5);
`;
const ButtonWrapper = styled.div`
  margin-top: 30px;
  width: 80%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
`;
const SignUpButton = styled.div`
  padding: 10px 20px;
  color: black;
  background-color: white;
  box-shadow: 0 5px 6px -1px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
`;
const SubmitButton = styled.div`
  padding: 10px 20px;
  color: black;
  background-color: white;
  box-shadow: 0 5px 6px -1px rgba(0, 0, 0, 0.5);
  &:hover {
    cursor: pointer;
  }
`;
const SignUpWrapper = styled.div``;

export default () => {
  const [signUpClicked, setSignUpClicked] = useState(false);
  useEffect(() => {
    const uiConfig = {
      callbacks: {
        // Called when the user has been successfully signed in.
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          if (authResult.user) {
            console.log(authResult.user);
            // handleSignedInUser(authResult.user);
          }
          if (authResult.additionalUserInfo) {
            console.log("새로운 유저인가?", authResult.additionalUserInfo);
          }
          return false;
        },
      },
      // Opens IDP Providers sign-in flow in a popup.
      signInFlow: "popup",
      signInOptions: [
        {
          provider: firebaseInstance.auth.GoogleAuthProvider.PROVIDER_ID,
          // Required to enable ID token credentials for this provider.
          // clientId: CLIENT_ID,
        },

        firebaseInstance.auth.GithubAuthProvider.PROVIDER_ID,
      ],
      tosUrl: "https://www.google.com",
      privacyPolicyUrl: "https://www.google.com",
    };
    ui.start("#firebaseAuth", uiConfig);
  }, []);
  return (
    <Container>
      <ImageFilter />
      <LoginContainer>
        <LoginImageContainer>
          <LoginImage src={Icons.LOGO} />
        </LoginImageContainer>
        <LoginBox>
          <LoginBoxWrapper
            style={
              signUpClicked
                ? {
                    opacity: "0",
                  }
                : {}
            }>
            <LoginBoxSubTitle>
              융합특성화자유전공학부에 오신 것을
            </LoginBoxSubTitle>
            <LoginBoxTitle>환영합니다</LoginBoxTitle>
            <div className={"firebaseAuth"} id={"firebaseAuth"} />
            {/* <InputBox placeholder={"아이디"} />
            <InputBox placeholder={"비밀번호"} />
            <ButtonWrapper>
              <SignUpButton
                onClick={() => {
                  setSignUpClicked(true);
                }}>
                회원가입
              </SignUpButton>
              <SubmitButton>로그인</SubmitButton>
              <div id="firebaseui-auth" />
            </ButtonWrapper> */}
          </LoginBoxWrapper>
          <SignUpWrapper></SignUpWrapper>
        </LoginBox>
      </LoginContainer>
    </Container>
  );
};
