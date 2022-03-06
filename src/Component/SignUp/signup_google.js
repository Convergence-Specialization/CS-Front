import React from "react";
import styled from "styled-components";
import { Images } from "../../assets/Resources";
import message from "antd/lib/message";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { userApi } from "../../api";
import { authService } from "../../firebase";
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
  position: relative;
  top: 90px;
  border: 2px solid white;
  padding: 10px 20px;
  width: 73%;
  margin: 10px 0;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.15;
  cursor: pointer;
  color: #ffffff;
  @media (max-width: 430px) {
    font-size: 14px;
    padding: 10px 30px;
    top: 70px;
  }
`;
const Wrap = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
  border-bottom: 2px solid white;
  padding: 10px;
  color: white;
  position: absolute;
  font-size: 20px;
  @media (max-width: 430px) {
    font-size: 13px;
  }
`;
const Basic = styled.div`
  width: 73%;
  background-color: rgba(0, 0, 0, 0);
  border-bottom: 2px solid white;
  padding: 10px;
  color: white;
  margin: 10px;
  font-size: 20px;
  @media (max-width: 430px) {
    font-size: 15px;
  }
`;
const InputBoxAndAlarmWrapper = styled.div`
  position: relative;
  width: 73%;
  margin: 10px 20px 10px;
`;
const InputBoxAndAlarmWrapper1 = styled.div`
  position: relative;
  width: 60%;
  top: 50px;
  margin-bottom: 30px;
  @media (max-width: 430px) {
    top: 40px;
    width: 73%;
  }
`;
const InputBox = styled.input`
  width: 73%;
  color: white;
  outline: none;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  border-bottom: 2px solid white;
  padding: 10px;
  font-size: 20px;
  margin: 10px;
  ::placeholder {
    color: #ffffff;
  }
  @media (max-width: 430px) {
    font-size: 15px;
  }
`;
const CheckBox = styled.input`
  padding: 10px;
  position: absolute;
  color: white;
  zoom: 1.5;
  font-size: 50px;
  right: 10px;
  top: 20px;
  ::placeholder {
    color: white;
  }
  @media (max-width: 430px) {
    top: 3px;
  }
`;
const Text = styled.div`
  width: 20%;
  padding: 10px 0px 0px;
  font-size: 17px;
  text-align: center;
  line-height: 1.14;
  color: #ffffff;
  border-bottom: 2px solid white;
  position: absolute;
  left: 170px;
  @media (max-width: 430px) {
    font-size: 13px;
    width: 22%;
    left: ${(props) => props.left || "115px"};
  }
`;
const TextBox = styled.div`
  border: 2px dashed white;
  padding: 25px 10px;
  width: 73%;
  margin-bottom: 70px;
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.15;
  cursor: pointer;
  @media (max-width: 430px) {
    font-size: 13px;
    padding: 20px 10px;
    margin-bottom: 50px;
  }
`;

const Title = styled.div`
  color: #ffffff;
  width: 70%;
  font-size: 25px;
  font-weight: bold;
  margin: 15px;
  @media (max-width: 430px) {
    font-size: 18px;
    margin: 5px;
  }
`;
const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
`;
const AddInformation = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  return (
    <Container>
      <BackgroundImg />
      <BackgroundFilter />
      <Box>
        <TextBox>추가 정보를 입력해주십시오.</TextBox>
        <Title>[ 기본 정보 ]</Title>
        <Basic>{authService.currentUser.email}</Basic>
        <Basic>{authService.currentUser.displayName}</Basic>
        <Title style={{ marginTop: "30px" }}>[ 추가 정보 ]</Title>
        <InputBox id={"studentId"} placeholder="학번" />
        <InputBoxAndAlarmWrapper>
          <Wrap>융합특성화자유전공학부 학생입니다. (선택)</Wrap>
          <CheckBox id="isConvergence" type="checkbox" />
        </InputBoxAndAlarmWrapper>
        <InputBoxAndAlarmWrapper1 style={{ marginBottom: "50px" }}>
          <Wrap>약관에 동의합니다.</Wrap>
          <Text
            onClick={() =>
              window.open("https://convergence-specialization.github.io/CS-Front/termsandconditions")
            }>
            자세히 보기
          </Text>
          <CheckBox id="didAgree" type="checkbox" />
        </InputBoxAndAlarmWrapper1>
        <InputBoxAndAlarmWrapper1>
          <Wrap>개인정보 처리방침에 동의</Wrap>
          <Text
            left="160px"
            onClick={() =>
              window.open("https://convergence-specialization.github.io/CS-Front/privacy")
            }>
            자세히 보기
          </Text>
          <CheckBox id="didAgree2" type="checkbox" />
        </InputBoxAndAlarmWrapper1>
        <Button
          onClick={() => {
            if (loading) return;
            if (document.getElementById("didAgree").checked === false) {
              alert("약관에 동의해주세요");
              return;
            }
            if (document.getElementById("didAgree2").checked === false) {
              alert("개인정보 처리방침에 동의해주세요");
              return;
            }
            if (document.getElementById("studentId").value === "") {
              alert("학번을 입력해주세요");
              return;
            }
            if (document.getElementById("studentId").value.length !== 8) {
              alert("학번을 정확히 입력해주세요.");
              return;
            }
            setLoading(true);
            message.loading("회원가입 중..", 10);
            userApi
              .signUp({
                method: "GOOGLE",
                uid: authService.currentUser.uid,
                email: authService.currentUser.email,
                name: authService.currentUser.displayName,
                student_id: document.getElementById("studentId").value,
                is_convergence: document.getElementById("isConvergence")
                  .checked,
              })
              .then(async () => {
                const idToken = await authService.currentUser.getIdToken();
                localStorage.setItem("idToken", idToken);
                message.destroy();
                message.success("구글 회원가입 성공.");
                localStorage.setItem("firstSignUp", "ok");
                // localstorage 이용 상태 저장.
                loginFunctions.onSuccess(authService.currentUser, true);

                history.push("/");
              })
              .catch((err) => {
                message.destroy();
                message.error(err.message);
                setLoading(false);
              });
          }}>
          회원가입 하기
        </Button>
      </Box>
    </Container>
  );
};
export default AddInformation;
