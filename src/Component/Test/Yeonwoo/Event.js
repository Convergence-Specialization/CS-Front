import React from "react";
import styled from "styled-components";
import { mainPageIcons } from "../../../assets/Resources";

const Container = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const TitleIconImg = styled.img`
  width: 25px;
  margin-left: 10px;
`;
const Title = styled.div`
  margin-left: 6px;
  font-weight: bold;
  font-size: 20px;
  font-family: NanumSquareRoundB;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #242323;
  @media (max-width: 430px) {
    font-size: 17px;
  }
`;

const TitleElement = ({ src, name }) => (
  <TitleWrapper>
    <TitleIconImg src={src} alt={"제목 아이콘"} />
    <Title>{name}</Title>
  </TitleWrapper>
);
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

const BoardChildWrapper = styled.div`
  margin-top: 13px;
  padding: 10px;
  width: 90%;
  height: 250px;
  background-color: white;
  border-radius: 15px;

  justify-content: space-between;
  align-items: center;
  font-family: NanumSquareRoundR;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.12;
  letter-spacing: normal;
  text-align: left;
  color: #444444;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  @media (max-width: 430px) {
    font-size: 12px;
  }
`;

const BoardLine = styled.div`
  border: solid 1px #a5a5a5;
  margin: 5px 10px 5px 10px;
`;
const BoardChildTitle = styled.div`
  font-family: NanumSquareRoundR;
  font-size: 18px;
  margin: 5px 5px 10px 10px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  @media (max-width: 430px) {
    font-size: 18px;
  }
`;
const BoardChildMain = styled.div`
  margin-left: 10px;
  margin-top: 15px;
  font-family: NanumSquareRoundR;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;

const Square1 = styled.div`
  background-color: black;
  width: 30%;
  height: 100px;
`;

const BoardButton = styled.div`
  margin: 13px 0 0 310px;
  padding: 5px;
  width: 15%;
  height: 25px;
  background-color: #d4e6fb;
  border-radius: 15px;
  justify-content: space-between;
  align-items: center;
  font-family: NanumSquareRoundR;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.12;
  letter-spacing: normal;
  text-align: center;
  color: #444444;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  @media (max-width: 430px) {
    font-size: 15px;
  }
`;

const BoardButtonText = styled.div`
  margin: 5px 0px 5px 0px;
  font-weight: bold;
`;
const Button1 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 94%;
`;
const Button = styled.div`
  text-align: center;
  padding: 10px 20px 0px 20px;
  margin: 10px 0px 5px 0px;
  border-radius: 20px;
  font-size: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #d4e6fb;
`;

const Event = () => {
  return (
    <Container>
      <TitleElement src={mainPageIcons.announce} name={"학부 행사"} />
      <BoardContainer>
        <BoardChildWrapper>
          <BoardChildTitle>진행 중인 행사</BoardChildTitle>
          <BoardLine></BoardLine>
          <BoardChildMain></BoardChildMain>
          <Square1></Square1>
        </BoardChildWrapper>
        <BoardChildWrapper>
          <BoardChildTitle>종료된 행사</BoardChildTitle>
          <BoardLine></BoardLine>
          <BoardChildMain></BoardChildMain>
        </BoardChildWrapper>

        <BoardButton>
          <BoardButtonText>목록</BoardButtonText>
        </BoardButton>
      </BoardContainer>
    </Container>
  );
};
export default Event;
