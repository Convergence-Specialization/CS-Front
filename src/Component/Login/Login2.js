import React from "react";
import styled from "styled-components";
import { Icons, Images } from "../../assets/Resources";
import { mainPageIcons } from "../../assets/Resources";
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
  border-bottom: 2px solid white;
  height: 4%;
  width: 50%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  color: white;
  z-index: 99;
  margin: 14px 0px 14px 0px;
  font-size: 15px;
`;
const Button = styled.div`
  border: 2px solid white;
  padding: 10px 20px;
  width: 42%;
  margin: 10px 0;
  text-align: center;
  font-family: Arial;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: normal;
  color: #ffffff;
`;
const Wrap = styled.div`
  width: 43%;
  padding: 15px 20px;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid white;
  margin: 10px 0px;
  font-family: Arial;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`;
const Img = styled.img`
  width: 15%;
  margin-bottom: 50px;
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
const TextBox = styled.div`
  width:30%;
  display:flex;
  justify-content:space-between;
`;
const Nav = styled.div`
  width:100%;
  
`;
const Text = styled.div`
  font-family: NanumGothic;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`;

const Login2 = () => {
  return (
    <Container>
      <BackgroundImg />
      <BackgroundFilter />
      <NavWrapper>
      </NavWrapper>
      <Img src={mainPageIcons.profile} />
      {/* <Text>환영합니다</Text> */}
      <Wrap>아이디</Wrap>
      <Wrap>비밀번호</Wrap>
      <Button>로그인</Button>
      <Button>Google in with ⚽</Button>
      <TextBox>
        <Text>회원가입</Text>
        <Text>회원가입</Text>
      </TextBox>
    </Container>
  );
};
export default Login2;
