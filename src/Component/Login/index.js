import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Images, horseIcons } from "../../assets/Resources";
import message from "antd/lib/message";
import { authService, firebaseInstance } from "../../firebase";
import { userApi } from "../../api";
import { loginFunctions } from "../Watchers";

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
    font-size: 13px;
    padding: 10px 30px;
    width: 70%;
  }
`;
const InputBox = styled.input`
  width: 50%;
  margin: 15px 0px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  border-bottom: 2px solid white;
  padding: 0px 0px 10px 10px;
  color: white;
  outline: none;
  font-size: 15px;
  border-radius: 0;
  -webkit-border-radius: 0;
  ::placeholder {
    color: white;
  }
  @media (max-width: 430px) {
    width: 70%;
  }
`;
const Img = styled.img`
  width: 30%;
  margin-bottom: 50px;
  @media (max-width: 430px) {
    width: 40%;
  }
`;
const TextBox = styled.div`
  width: 40%;
  display: flex;
  color: white;
  justify-content: space-between;
  margin-top: 10px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 20px;
`;
const Text = styled.div`
  font-size: 13px;
  cursor: pointer;
`;

const Login = () => {
  const history = useHistory();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [loading, setLoading] = useState(false);

  // 구글 로그인 중에도 message.loading 넣기.
  //  회원가입 할 때에 융특 사람인지 체크하는거 선택인거 강조하기.
  return (
    <Container>
      <BackgroundImg />
      <BackgroundFilter />
      <Box>
        <Img src={horseIcons.horse} />
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
            if (loading) return;
            try {
              if (id === "" || pw === "") {
                message.error("아이디와 비밀번호를 입력해주세요.");
                return;
              }
              message.destroy();
              message.loading("로그인 중..");
              setLoading(true);
              await authService.signInWithEmailAndPassword(id, pw);
              const idToken = await authService.currentUser.getIdToken();
              localStorage.setItem("idToken", idToken);
              message.destroy();
              message.success("로그인 성공");

              // localstorage 이용 상태 저장.
              loginFunctions.onSuccess(authService.currentUser);

              history.push("/");
            } catch (err) {
              message.destroy();
              message.error("아이디 혹은 비밀번호가 일치하지 않습니다.");
            }
            setLoading(false);
          }}
        >
          로그인
        </Button>
        <Button
          onClick={async () => {
            if (loading) return;
            try {
              message.loading("구글 로그인 중..", 20);
              let provider = new firebaseInstance.auth.GoogleAuthProvider();
              await authService.signInWithPopup(provider);
              let { status } = await userApi.checkGoogleSignUped({
                uid: authService.currentUser.uid,
              });
              if (status === 200) {
                message.destroy();
                history.push("/signup/google");
              } else if (status === 201) {
                const idToken = await authService.currentUser.getIdToken();
                localStorage.setItem("idToken", idToken);
                message.destroy();
                message.success("구글 로그인 성공");

                // localstorage 이용 상태 저장.
                loginFunctions.onSuccess(authService.currentUser, true);

                history.push("/");
              }
            } catch (error) {
              message.destroy();
              message.error(error.message);
              message.error("로그인 실패");
            }
          }}
          name="google"
        >
          구글 로그인
        </Button>
        <TextBox>
          <Text onClick={() => history.push("/signup")}>회원가입</Text>
          <Text onClick={() => history.push("/login/lostpw")}>ID/PW찾기</Text>
        </TextBox>
      </Box>
    </Container>
  );
};
export default Login;
