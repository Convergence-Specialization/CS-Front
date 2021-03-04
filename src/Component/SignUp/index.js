import React from "react";
import styled from "styled-components";
import { Images } from "../../assets/Resources";
import message from "antd/lib/message";
import { useState } from "react";
import { useHistory } from "react-router-dom";
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
  position: relative;
  top: 90px;
  border: 2px solid white;
  padding: 10px 20px;
  width: 60%;
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
    font-size: 11px;
  }
`;
const CorrectAlarm = styled.div`
  position: absolute;
  width: 30px;
  background-color: rgba(255, 255, 255, 0.67);
  right: 10px;
  text-align: center;
  padding: 5px 0;
  font-size: 10px;
  color: #eb4b4b;
  top: 10px;
`;
const InputBoxAndAlarmWrapper = styled.div`
  position: relative;
  width: 60%;
`;
const InputBoxAndAlarmWrapper1 = styled.div`
  position: relative;
  width: 60%;
  top: 50px;
  @media (max-width: 430px) {
    top: 40px;
  }
`;
const InputBox = styled.input`
  width: 60%;
  color: white;
  outline: none;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  border-bottom: 2px solid white;
  padding: 10px;
  font-size: 20px;
  -webkit-border-radius: 0;
  ::placeholder {
    color: #a1a1a1;
  }
  @media (max-width: 430px) {
    font-size: 15px;
  }
`;
const CheckBox = styled.input`
  padding: 10px;
  position: absolute;
  color: white;
  font-size: 15px;
  right: 10px;
  top: 20px;
  ::placeholder {
    color: white;
  }
  @media (max-width: 430px) {
    top: 15px;
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
    font-size: 10px;
    width: 22%;
    left: 100px;
  }
`;
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  return (
    <Container>
      <BackgroundImg />
      <BackgroundFilter />
      <InputBox
        placeholder="이메일"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
      />
      <InputBox
        type="password"
        placeholder="비밀번호"
        value={pw}
        onChange={({ target: { value } }) => setPw(value)}
      />
      <InputBoxAndAlarmWrapper>
        <InputBox
          type="password"
          placeholder="비밀번호 확인"
          value={pwCheck}
          onChange={({ target: { value } }) => setPwCheck(value)}
          style={{ width: "100%" }}
        ></InputBox>
        <CorrectAlarm>{pw === pwCheck ? "일치" : "불일치"}</CorrectAlarm>
      </InputBoxAndAlarmWrapper>
      <InputBox id="nameField" placeholder="이름" />
      <InputBox id="studentNumber" placeholder="학번" />
      <InputBoxAndAlarmWrapper>
        <Wrap>융합특성화자유전공학부 학생입니다.(선택)</Wrap>
        <CheckBox id="isConvergence" type="checkbox" />
      </InputBoxAndAlarmWrapper>
      <InputBoxAndAlarmWrapper1>
        <Wrap>약관에 동의합니다.</Wrap>
        <Text>자세히 보기</Text>
        <CheckBox id="didAgree" type="checkbox" />
      </InputBoxAndAlarmWrapper1>
      <Button
        onClick={() => {
          if (loading) return;
          if (document.getElementById("didAgree").checked === false) {
            alert("약관에 동의해주세요");
            return;
          }
          if (email === "") {
            alert("이메일을 입력해주세요");
            return;
          }
          if (
            document.getElementById("nameField").value === "" ||
            document.getElementById("studentNumber").value === ""
          ) {
            alert("이름과 학번을 입력해주세요");
            return;
          }
          if (pw !== pwCheck) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
          }
          setLoading(true);
          message.loading("회원가입 중..", 10);
          userApi
            .signUp({
              method: "EMAIL",
              name: document.getElementById("nameField").value,
              email: email,
              student_id: document.getElementById("studentNumber").value,
              is_convergence: document.getElementById("isConvergence").checked,
              password: pw,
            })
            .then(() => {
              message.destroy();
              message.success("회원가입 성공. 로그인 해주세요.");
              history.push("/login");
              localStorage.setItem("firstSignUp", "ok");
            })
            .catch((err) => {
              message.destroy();
              message.error(err.message);
              setLoading(false);
            });
        }}
        disabled={pw !== pwCheck}
      >
        회원가입
      </Button>
    </Container>
  );
};
export default SignUp;
