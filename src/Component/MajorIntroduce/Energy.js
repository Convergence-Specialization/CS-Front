import React from "react";
import styled from "styled-components";
import NavBot from "./NavBot";
import { major, majorIntroduce } from "../../assets/Resources";

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
  min-height: 700px;
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

const Energy = () => {
  return (
    <Container id="ENERGY_SCIENCE_DIV">
      <NavBot Icon={major.Energy} Name="에너지 공학" />
      <BoardContainer>
        <BoardWrapper>
          <BoardTitle>- 융합전공 소개</BoardTitle>
          <BoardText>
            저탄소 녹색 성장의 국가 발전 패러다임에 따라 에너지 산업 분야의
            고용인원 및 기업체수의 급격한 증가를 배경으로 만들어진 융합 전공.
            신산업 도입 등에 따른 다양한 민간 분야에서 에너지 융합 분야 투자가
            증가함으로써 에너지 공학 전공의 가치가 더욱 커지고 있음.
          </BoardText>
          <BoardTitle style={{ marginTop: "20px" }}>- 참여 학과</BoardTitle>
          <BoardText>
            화학공학과, 유기신소재∙파이버공학과, 전기공학부, 기계공학과,
            건축학부
          </BoardText>
          <BoardTitle style={{ marginTop: "20px" }}>- 필수 교과목</BoardTitle>
          <BoardText>
            1. 융합전공을 위한 심화수학 <br />
            2. 물리학 기초 및 융합
          </BoardText>
          <ImageWrapper>
            <Image src={majorIntroduce.ENERGY_SCIENCE}></Image>
          </ImageWrapper>
        </BoardWrapper>
      </BoardContainer>
    </Container>
  );
};
export default Energy;
