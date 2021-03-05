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
  border: 2px solid white;
  padding: 10px 30px;
  width: 73%;
  margin: 60px 0px 0px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.15;
  cursor: pointer;
  color: #ffffff;
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
const CorrectAlarm = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.67);
  right: 3px;
  text-align: center;
  padding: 5px 0;
  font-size: 13px;
  color: #eb4b4b;
  width: 50px;
  border-radius: 5px;
  top: 20px;
`;
const InputBoxAndAlarmWrapper = styled.div`
  position: relative;
  width: 73%;
  margin-top: 10px;
`;
const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const InputBoxAndAlarmWrapper1 = styled.div`
  position: relative;
  width: 73%;
  margin-top: 45px;
`;
const InputBox = styled.input`
  width: 73%;
  color: white;
  outline: none;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  border-bottom: 2px solid white;
  padding: 25px 10px 6px;
  font-size: 15px;
  -webkit-border-radius: 0;
  ::placeholder {
    color: #a1a1a1;
  }
`;
const CheckBox = styled.input`
  padding: 10px;
  position: absolute;
  color: white;
  font-size: 15px;
  right: 10px;
  top: 3px;
  zoom: 1.5;
  ::placeholder {
    color: white;
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
    left: 115px;
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
      <Box>
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
          <CorrectAlarm
            style={pw === pwCheck ? { color: "green" } : { color: "#eb4b4b" }}
          >
            {pw === pwCheck ? "일치" : "불일치"}
          </CorrectAlarm>
        </InputBoxAndAlarmWrapper>
        <InputBox id="nameField" placeholder="이름" />
        <InputBox id="studentNumber" placeholder="학번" />
        <InputBoxAndAlarmWrapper>
          <Wrap>융합특성화자유전공학부 학생입니다. (선택)</Wrap>
          <CheckBox id="isConvergence" type="checkbox" />
        </InputBoxAndAlarmWrapper>
        <InputBoxAndAlarmWrapper1>
          <Wrap>약관에 동의합니다.</Wrap>
          <Text
            onClick={() =>
              window.open(
                "https://convergence-specialization.github.io/CS-Front/termsandconditions"
              )
            }
          >
            자세히 보기
          </Text>
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
            if (document.getElementById("studentNumber").value.length !== 8) {
              alert("학번을 정확히 입력해주세요.");
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
                is_convergence: document.getElementById("isConvergence")
                  .checked,
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
                if (err.response.status === 406) {
                  message.destroy();
                  message.error(
                    "회원 탈퇴한 이메일이나 이미 가입한 이메일로는 회원가입이 불가능합니다."
                  );
                }
                setLoading(false);
              });
          }}
          disabled={pw !== pwCheck}
        >
          회원가입
        </Button>
      </Box>
    </Container>
  );
};
export default SignUp;
