import React from "react";
import styled from "styled-components";
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

const BigData = () => {
  return (
    <Container id="BIG_DATA_DIV">
      <NavBot Icon={mainPageIcons.BigData} Name="빅데이터" />
      <BoardContainer>
        <BoardWrapper>
          <BoardTitle>- 융합전공 소개</BoardTitle>
          <BoardText>
            센서네트워크와 빅데이터는 기업의 가치 창출에 필요한 핵심기술로, 그
            시장 규모가 폭발적으로 성장하는 가운데 빅데이터 융합전공은 주목을
            받고 있음.
          </BoardText>
          <BoardTitle>- 참여 학과</BoardTitle>
          <BoardText>
            소프트웨어학과, 정보통계∙보험수리학과, 스마트시스템소프트웨어학과
          </BoardText>
          <ImageWrapper>
            <Image src={majorIntroduce.BIGDATA}></Image>
          </ImageWrapper>
        </BoardWrapper>
      </BoardContainer>
    </Container>
  );
};
export default BigData;
