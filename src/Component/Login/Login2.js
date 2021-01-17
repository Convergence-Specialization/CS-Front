import React from "react";
import styled from "styled-components";
import { Icons, Images } from "../../assets/Resources";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: -3;
`;
const BackgroundImg = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${Images.Background3});
  background-size: cover;
  position: absolute;
  /* transform: scale(1.03); */
  /* filter: blur(5px); */
  z-index: -2;
`;
const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 50%);
  z-index: -1;
`;
const InputBox = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid white;
  height: 30px;
  width: 50%;
  color: rgba(255, 255, 255, 0.5);
  z-index: 99;
  margin: 14px 0;
  font-size: 15px;
`;
const Button = styled.div`
  border: 2px solid white;
  padding: 10px 20px;
  width: 150px;
  margin: 10px 0;
  color: white;
  text-align: center;
`;

const Img = styled.img`
  width: 140px;
  margin-bottom: 100px;
`;
const AImg = styled.img`
  position: absolute;
  align-self: flex-start;
  justify-self: start;
  margin: 10px;
  width: 60px;
  top: 0px;
`;
const NavWrapper = styled.div`
  position: absolute;
  top: 0;
  color: white;
  padding: 15px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
`;
const NavText = styled.div``;
const Wrapper = styled.div``;
const Text = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 50px;
  color: white;
  margin-bottom: 100px;
`;

const Login2 = () => {
  return (
    <Container>
      <BackgroundImg />
      <BackgroundFilter />
      <NavWrapper>
        <NavText></NavText>
        {/* <NavText>숭실대 숭</NavText> */}
        <NavText></NavText>
      </NavWrapper>
      <Img src={Icons.LOGO} />
      {/* <Text>환영합니다</Text> */}
      <InputBox placeholder={"아이디"} defaultValue="아이디" />
      <InputBox placeholder={"비밀번호"} defaultValue="비밀번호" />
      <Button>로그인</Button>
      <Button>회원가입</Button>
    </Container>
  );
};
export default Login2;
