import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Images, mainPageIcons } from "../../assets/Resources";
import { message } from "antd";
import { authService, firebaseInstance } from "../../firebase";
import { userApi } from "../../api";

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
  width: 50%;
  margin: 10px 0;
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.15;
  cursor: pointer;
  @media (max-width: 430px) {
    font-size: 14px;
    padding: 10px 30px;
  }
`;
const InputBox = styled.input`
  width: 45%;
  margin: 15px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  border-bottom: 2px solid white;
  padding: 10px;
  color: white;
  outline: none;
  font-size: 15px;
  ::placeholder {
    color: white;
  }
  @media (max-width: 430px) {
    width: 52%;
  }
`;
const Img = styled.img`
  width: 15%;
  margin-bottom: 50px;
  @media (max-width: 430px) {
    font-size: 12px;
    padding-top: 30px;
    margin: 30px 0px;
  }
`;
const TextBox = styled.div`
  width: 30%;
  display: flex;
  color: white;
  justify-content: space-between;
`;
const Text = styled.div`
  font-size: 14px;
  @media (max-width: 430px) {
    font-size: 10px;
  }
`;

const Login = () => {
  const history = useHistory();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <Container>
      <BackgroundImg />
      <BackgroundFilter />
      <Img src={mainPageIcons.profile} />
      <InputBox
        type="id"
        placeholder="아이디"
        value={id}
        disabled={false}
        onChange={({ target: { value } }) => setId(value)}
      />
      <InputBox
        type="password"
        placeholder="비밀번호"
        value={pw}
        onChange={({ target: { value } }) => setPw(value)}
      />
      <Button
        onClick={async () => {
          if (id === "" || pw === "") {
            message.error("아이디와 비밀번호를 입력해주세요.");
            return;
          }
          message.destroy();
          message.loading("로그인 중..");
          await authService.signInWithEmailAndPassword(id, pw).catch(() => {
            message.error("아이디 혹은 비밀번호가 일치하지 않습니다.");
          });
          const idToken = await authService.currentUser
            .getIdToken()
            .catch(() => {
              message.error("토큰 실패. 개발자에게 문의해주세요.");
            });
          localStorage.setItem("idToken", idToken);
          message.destroy();
          message.success("로그인 성공");
          history.push("/");
        }}>
        로그인
      </Button>
      <Button
        onClick={async () => {
          try {
            let provider = new firebaseInstance.auth.GoogleAuthProvider();
            await authService.signInWithPopup(provider);
            let { status } = await userApi.checkGoogleSignUped({
              uid: authService.currentUser.uid,
            });
            if (status === 200) {
              history.push("/signup/google");
            } else if (status === 201) {
              const idToken = await authService.currentUser.getIdToken();
              localStorage.setItem("idToken", idToken);
              console.log(authService.currentUser);
              message.success("로그인 성공");
              history.push("/");
            }
          } catch (error) {
            message.error(error.message);
            message.error("로그인 실패");
          }
        }}
        name="google">
        구글 로그인
      </Button>
      {/* TODO: 구글 로그인을 했는데, firestore의 유저 컬렉션에 본인 정보가 없을 경우 idToken 발급안하고 
      이름, 이메일, uid 등 가져올 수 있는 정보를 가져온 후, 회원가입 페이지 텍스트 박스 disable 처리하고
       로그아웃 후 회원가입으로 넘기면 된다!! 
      그럼 토큰이 없는 것이므로 로그인이 안된거랑 마찬가지! */}
      <TextBox>
        <Text onClick={() => history.push("/signup")}>회원가입</Text>
        <Text onClick={() => history.push("/login/lostpw")}>ID/PW찾기</Text>
      </TextBox>
    </Container>
  );
};
export default Login;
