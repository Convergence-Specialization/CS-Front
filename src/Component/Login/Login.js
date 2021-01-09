import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Images, Icons } from "../../assets/Resources";
// import * as firebaseui from "firebaseui";
// import firebase from "firebase";

const Container = styled.div`
  font-family: "Nanum-round", sans-serif;
  width: 100%;
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
  /* text-align: center; */
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
  /* align-items: center; */
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
    // var ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return true;
        },
        uiShown: function () {
          // The widget is rendered.
          // Hide the loader.
          // document.getElementById('loader').style.display = 'none';
        },
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: "popup",
      signInSuccessUrl: "/",
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      // Terms of service url.
      tosUrl: "<your-tos-url>",
      // Privacy policy url.
      privacyPolicyUrl: "<your-privacy-policy-url>",
    };
    // ui.start("#firebaseui-auth", uiConfig);
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
