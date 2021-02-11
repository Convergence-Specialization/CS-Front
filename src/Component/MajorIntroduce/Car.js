import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import NavBot from "../SmallComponents/NavBot";
import { mainPageIcons, majorIntroduce } from "../../assets/Resources";

const Container = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;

const BoardContainer = styled.div`
  width: 100%;
  border-radius: 0px;
  background-color: #f1f1f1;
  padding: 0 auto;
  padding-bottom: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const BoardWrapper = styled.div`
  margin-top: 13px;
  padding: 10px;
  width: 90%;
  height: 700px;
  border-radius: 15px;
  justify-content: space-between;
  align-items: center;
  line-height: 1.12;
  color: #444444;
  background-color: white;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  @media (max-width: 430px) {
    font-size: 12px;
  }
`;

const BoardTitle = styled.div`
  font-size: 15px;
  margin: 8px 5px 5px 10px;
  font-weight: bold;
  line-height: 1.17;
  color: #000000;
  @media (max-width: 430px) {
    font-size: 15px;
  }
`;

const BoardText = styled.div`
  margin-left: 5px;
  font-size: 14px;
  line-height: 1.7;
  word-break: keep-all;
`;

const ImageWrapper = styled.div`
  justify-content: center;
  padding-top: 15px;
`;

const Image = styled.img`
  width: 100%;
  padding: 10px;
  border-radius: 20px;
`;

const Car = () => {
  const history = useHistory();
  return (
    <Container id="SMART_CAR_DIV">
      <NavBot Icon={mainPageIcons.Car} Name="스마트 자동차" />
      <BoardContainer>
        <BoardWrapper>
          <BoardTitle>- 융합전공 소개</BoardTitle>
          <BoardText>
            기계 장치, hw, 센서, 반도체, 통신, 전기전자장비, sw 등의 통합 시습의
            교육을 통한 다양한 분야에 활용 가능한 능력을 함양하기 위한 융합전공
          </BoardText>
          <BoardTitle>- 참여 학과</BoardTitle>
          <BoardText>
            기계공학과, 유기신소재∙파이버공학과, 전자정보공학부,
            스마트시스템소프트웨어학과
          </BoardText>
          <ImageWrapper>
            <Image src={majorIntroduce.SMART_CAR}></Image>
          </ImageWrapper>
        </BoardWrapper>
      </BoardContainer>
    </Container>
  );
};
export default Car;
