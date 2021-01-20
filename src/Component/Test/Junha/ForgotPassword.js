import React, { useState } from "react";
import styled from "styled-components";
import { Icons, Images, mainPageIcons } from "../../../assets/Resources";
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
  width: 70%;
  display:flex;
  flex-direction:column;
  margin:70px 0px 10px;
`;
const NavText = styled.div`
  font-family: NanumGothic;
  padding: 10px;
  font-size: 32px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  @media (max-width: 430px) {
    font-size: 20px;
    padding: 3px;
  }
`;
const Text = styled.div`
  width:100%;
   font-family: NanumSquareRoundR;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.74;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  @media (max-width: 430px) {
    width:100%;
    font-size: 15px;
  }
`;
const Title = styled.div`
  width:100%;
  font-family: NanumSquareRoundEB;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  @media (max-width: 430px) {
    font-size: 20px;
  }
`;

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <Container>
      <BackgroundImg />
      <BackgroundFilter />
      <NavWrapper>
        <ImgNav src={Icons.menu} />
        <NavText>융특 커뮤니티 슝</NavText>
        <ImgNav src={Icons.화살표} />
      </NavWrapper>
      <Title>이메일 주소로 비밀번호 찾기</Title>
      <TextBox>
        <Text>비밀번호는 가입 시 등록한 메일 주소로</Text>
        <Text>알려드립니다. 가입할 때 등록한 메일주소를</Text>
        <Text>입력하고 버튼을 클릭해주세요</Text>
      </TextBox>

      <InputBox
        type="email"
        placeholder="이메일"
        value={email}
        disabled={false}
        onChange={({ target: { value } }) => setEmail(value)}
      />
      <Button>메일 발송</Button>
    </Container>
  );
};
export default ForgotPassword;
