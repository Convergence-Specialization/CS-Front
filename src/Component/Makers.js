import React from "react";
import styled from "styled-components";
import { horseIcons, Icons } from "../assets/Resources";
import Navbar from "../Component/Navbar";

const Con = styled.div`
  padding: 30px;
  border-radius: 30px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  margin: 30px;
  display: flex;
  @media (max-width: 430px) {
    margin: 15px;
    padding: 30px 10px;
  }
`;

const Title = styled.div`
  font-size: 25px;
  margin-bottom: 10px;
  @media (max-width: 430px) {
    font-size: 20px;
  }
`;
const Title1 = styled.div`
  font-size: 30px;
  margin: 130px 0px 30px 50px;
  @media (max-width: 430px) {
    font-size: 25px;
  }
`;
const Text = styled.div`
  color: #727272;
  line-height: 1.41;
  font-size: 20px;
  @media (max-width: 430px) {
    font-size: 18px;
  }
`;
const TextBox = styled.div`
  margin-top: 30px;
  @media (max-width: 430px) {
    margin-top: 0px;
  }
`;
const HorseImg = styled.img`
  width: 30%;
  margin-right: 30px;
`;
const Makers = () => {
  return (
    <>
      <Navbar isRight1Disabled History IconRight2= {Icons.Home}/>
      <Con>
        <HorseImg src={horseIcons.normal} alt="말머리" />
        <TextBox>
          <Title>천재의정</Title>
          <Text>나는야 개발 천재</Text>
          <Text>보고싶슴다 ㅠㅠ</Text>
        </TextBox>
      </Con>
      <Con>
        <HorseImg src={horseIcons.normal} alt="말머리" />
        <TextBox>
          <Title>빛준하</Title>
          <Text>나는야 개발 천재</Text>
          <Text>css 원툴</Text>
        </TextBox>
      </Con>
      <Con>
        <HorseImg src={horseIcons.normal} alt="말머리" />
        <TextBox>
          <Title>짱은소</Title>
          <Text>나는야 기획 천재?</Text>
          <Text>아니 모든 분야의 천재!!!</Text>
        </TextBox>
      </Con>
      <Con>
        <HorseImg src={horseIcons.normal} alt="말머리" />
        <TextBox>
          <Title>실세우혁</Title>
          <Text>나는야 개발 천재</Text>
          <Text>군대 그냥 3월에 가자</Text>
        </TextBox>
      </Con>
      <Con>
        <HorseImg src={horseIcons.normal} alt="말머리" />
        <TextBox>
          <Title>미래연우</Title>
          <Text>나는야 개발 천재</Text>
          <Text>사실 나는 빵팔이</Text>
        </TextBox>
      </Con>
      <Con>
        <HorseImg src={horseIcons.normal} alt="말머리" />
        <TextBox>
          <Title>대장영현</Title>
          <Text>대장님 믓지다</Text>
          <Text>쉬엄쉬엄 하십쇼ㅠㅠ</Text>
        </TextBox>
      </Con>
      <Title1>🧡도와주신 분🧡</Title1>
      <Con>
        <HorseImg src={horseIcons.normal} alt="말머리" />
        <TextBox>
          <Title>이수정</Title>
          <Text>나는야 디자인 천재</Text>
          <Text>항상 감사합니다 수정님!!!</Text>
        </TextBox>
      </Con>
    </>
  );
};
export default Makers;
