import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Images, mainPageIcons } from "../../assets/Resources";


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
  padding: 30px 10px;
  width: 60%;
  margin-bottom:70px;
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.15;
  cursor: pointer;
  @media (max-width: 430px) {
    font-size: 13px;
    width: 80%;
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
const AddInformation = () => {
  const history = useHistory();

  return (
    <Container>
      <BackgroundImg />
      <BackgroundFilter />
      <Img src={mainPageIcons.profile} />
      <TextBox>
        <Text>회원정보가 없습니다!</Text>
        <Text>입력된 정보가 맞는지 확인해주시기 바랍니다.</Text>
      </TextBox>
      <Button onClick={() => history.push("/login")}>로그인</Button>
      <Button onClick={() => history.push("/signup")}>회원가입</Button>
      <Button onClick={() => history.push("/login/lostpw")}>PW 찾기</Button>
    </Container>
  );
};
export default AddInformation;
