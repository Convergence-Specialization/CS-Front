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
  font-size: 18px;
  font-weight: bold;
  line-height: 1.15;
  color: #ffffff;
  @media (max-width: 430px) {
    font-size: 14px;
    padding: 10px 30px;
  }
`;
const Wrap = styled.div`
  width: 43%;
  padding: 15px 20px;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid white;
  margin: 7px 0px;
  font-family: Arial;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  @media (max-width: 430px) {
    font-size: 8px;
    width: 45%;
    padding: 10px 20px 10px 15px;
    margin: 5px 0px;
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
  width: 49%;
  display: flex;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid white;
  margin: 10px 0px;
  @media (max-width: 430px) {
    width: 55%;
    margin: 0px 0px;
  }
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
  font-family: Arial;
  padding: 15px 0px 15px 20px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  @media (max-width: 430px) {
    font-size: 8px;
    padding: 15px 0px 10px 15px;
    margin: 7px 0px 0px 0px;
  }
`;
const Text2 = styled.div`
  font-family: Arial;
  margin: 0px 27px 7px 14px;
  width: 20%;
  padding: 16px 0px 0px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  border-bottom: 2px solid white;
  @media (max-width: 430px) {
    width: 24%;
    padding: 16px 0px 0px;
    margin: 6px 22px 4px 5px;
    font-size: 8px;
  }
`;
const Text1 = styled.div`
  font-family: Arial;
  font-size: 40px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  @media (max-width: 430px) {
    font-size: 30px;
  }
`;
const TextBox2 = styled.div`
  width: 30%;
  display: flex;

  justify-content: flex-end;
  @media (max-width: 430px) {
    width: 19%;
    margin-top: 10px;
  }
`;
const SignUp = () => {
  return (
    <Container>
      <BackgroundImg />
      <BackgroundFilter />
      <NavWrapper>
        <ImgNav src={Icons.menu} />
        <NavText>융특 커뮤니티 슝</NavText>
        <ImgNav src={Icons.화살표} />
      </NavWrapper>
      <Wrap>이메일</Wrap>
      <Wrap>비밀번호</Wrap>
      <Wrap>비밀번호 확인</Wrap>
      <Wrap>이름</Wrap>
      <Wrap>학번</Wrap>
      <TextBox>
        <Text>융합특성화 자유전공학부 학생입니다.</Text>
        <TextBox2>
          <Text1>◻</Text1>
        </TextBox2>
      </TextBox>
      <TextBox>
        <Text>약관에 동의합니다.</Text>
        <Text2>자세히 보기</Text2>
        <TextBox2>
          <Text1>◻</Text1>
        </TextBox2>
      </TextBox>
      <Button>회원가입</Button>
    </Container>
  );
};
export default SignUp;
