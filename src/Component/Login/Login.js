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
  @media(max-width:430px){
    font-size:14px;
    padding: 10px 30px;
  }
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
  @media(max-width:430px){
    font-size:12px;
    width: 45%;
  padding: 10px 25px;
  }
`;
const Img = styled.img`
  width: 15%;
  margin-bottom: 50px;
  @media(max-width:430px){
    font-size:12px;
    padding-top:30px;
    margin: 30px 0px;
  }

`;
const ImgNav = styled.img`
  width: 7%;
  margin-bottom: 50px;
`;
const NavWrapper = styled.div`
  position: absolute;
  top: 0;
  padding: 20px;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;
const TextBox = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`;
const NavText = styled.div`
  font-family: NanumGothic;
  padding:10px;
  font-size: 32px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  @media(max-width:430px){
    font-size:20px;
    padding: 3px;
  }
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
  @media(max-width:430px){
    font-size:10px;
  }
`;

const Login2 = () => {
  return (
    <Container>
      <BackgroundImg />
      <BackgroundFilter />
      <NavWrapper>
        <ImgNav src={Icons.menu} />
        <NavText>융특 커뮤니티 슝</NavText>
        <ImgNav src={Icons.화살표} />
      </NavWrapper>
      <Img src={mainPageIcons.profile} />
      <Wrap>아이디</Wrap>
      <Wrap>비밀번호</Wrap>
      <Button>로그인</Button>
      <Button>Google in with ⚽</Button>
      <TextBox>
        <Text>회원가입</Text>
        <Text>ID/PW찾기</Text>
      </TextBox>
    </Container>
  );
};
export default Login2;
