import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Images, navIcons } from "../../assets/Resources";

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
const TextBox = styled.div`
  border: 2px dashed white;
  padding: 20px 0px;
  width: 50%;
  margin-bottom:70px;
  text-align: center;
  color: white;
  font-size: 18px;
  line-height: 1.74;
  @media (max-width: 430px) {
    font-size: 13px;
    width: 70%;
    margin-bottom:50px;
  }
`;
const Text = styled.div``;
const Img = styled.img`
  width: 15%;
  margin-bottom: 50px;
  @media (max-width: 430px) {
    font-size: 12px;
    padding-top: 30px;
    margin: 30px 0px;
  }
`;
const LoginRequir = () => {
  const history = useHistory();

  return (
    <Container>
      <BackgroundImg />
      <BackgroundFilter />
      <Img src={navIcons.profile} />
      <TextBox>
        <Text>이 페이지는 회원 전용이므로</Text>
        <Text>로그인 후 이용하여 주십시오.</Text>
      </TextBox>
      <Button onClick={() => history.push("/login")}>로그인</Button>
      <Button onClick={() => history.push("/signup")}>회원가입</Button>
    </Container>
  );
};
export default LoginRequir;
