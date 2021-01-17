import React from "react";
import styled from "styled-components";
import { mainPageIcons } from "../../assets/Resources";

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
`;
const Title = styled.div`
  margin-left: 6px;
  font-weight: bold;
  font-size: 20px;
`;
const TitleElement = ({ src, name }) => (
  <TitleWrapper>
    <TitleIconImg src={src} alt={"제목 아이콘"} />
    <Title>{name}</Title>
  </TitleWrapper>
);
const BoardContainer = styled.div`
  width: 90%;
  border-radius: 15px;
  background-color: #f1f1f1;
  padding: 0 auto;
  padding-bottom: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const BoardChildWrapper = styled.div`
  margin-top: 10px;
  padding: 10px;
  width: 90%;
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BoardChildTitle = styled.div``;
const BoardAnnounceSubText = styled.div`
  font-size: 14px;
`;
const IntroduceWrapper = styled.div`
  margin-top: 10px;
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const IntroduceBox = styled.div`
  width: 27%;
  padding: 10px;
  margin: 3px 0;
  border-radius: 10px;
  background-color: white;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const IntroduceImage = styled.img`
  width: 70%;
`;
const IntroduceText = styled.div`
  margin-top: 10px;
`;
const DepartmentSubWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MainPage = () => {
  return (
    <Container>
      <TitleElement src={mainPageIcons.announce} name={"학생회공지"} />
      <BoardContainer>
        <BoardChildWrapper>
          <BoardChildTitle>추석맞이 융병호 게임</BoardChildTitle>
          <BoardAnnounceSubText>22.10.24~22.42.12</BoardAnnounceSubText>
        </BoardChildWrapper>
        <BoardChildWrapper>
          <BoardChildTitle>추석맞이 융병호 게임</BoardChildTitle>
          <BoardAnnounceSubText>22.10.24~22.42.12</BoardAnnounceSubText>
        </BoardChildWrapper>
      </BoardContainer>
      <TitleElement src={mainPageIcons.airplane} name={"융합전공 소개"} />
      <BoardContainer>
        <IntroduceWrapper>
          <IntroduceBox>
            <IntroduceImage src={mainPageIcons.airplane} />
            <IntroduceText>스마트 자동차</IntroduceText>
          </IntroduceBox>
          <IntroduceBox>
            <IntroduceImage src={mainPageIcons.airplane} />
            <IntroduceText>스마트 자동차</IntroduceText>
          </IntroduceBox>
          <IntroduceBox>
            <IntroduceImage src={mainPageIcons.airplane} />
            <IntroduceText>스마트 자동차</IntroduceText>
          </IntroduceBox>
          <IntroduceBox>
            <IntroduceImage src={mainPageIcons.airplane} />
            <IntroduceText>스마트 자동차</IntroduceText>
          </IntroduceBox>
          <IntroduceBox>
            <IntroduceImage src={mainPageIcons.airplane} />
            <IntroduceText>스마트 자동차</IntroduceText>
          </IntroduceBox>
          <IntroduceBox>
            <IntroduceImage src={mainPageIcons.airplane} />
            <IntroduceText>스마트 자동차</IntroduceText>
          </IntroduceBox>
        </IntroduceWrapper>
      </BoardContainer>
      <TitleElement src={mainPageIcons.airplane} name={"융특 게시판"} />
      <BoardContainer>
        <BoardChildWrapper>12시 기상</BoardChildWrapper>
        <BoardChildWrapper>6시간 코딩</BoardChildWrapper>
        <BoardChildWrapper>30분 치킨</BoardChildWrapper>
        <BoardChildWrapper>4시간 코딩</BoardChildWrapper>
        <BoardChildWrapper>5시간 취침</BoardChildWrapper>
      </BoardContainer>
      <TitleElement src={mainPageIcons.airplane} name={"전과 게시판"} />
      <BoardContainer>
        <BoardChildWrapper>
          <BoardChildTitle>ㅎㅇㅎㅇ</BoardChildTitle>
          <DepartmentSubWrapper>
            <img
              style={{ width: "15px", margin: "0 7px" }}
              src={mainPageIcons.heart}
            />
            <span>27</span>
            <img
              style={{ width: "15px", margin: "0 7px" }}
              src={mainPageIcons.comment}
            />
            <span>27</span>
          </DepartmentSubWrapper>
        </BoardChildWrapper>
        <BoardChildWrapper>
          <BoardChildTitle>ㅎㅇㅎㅇ</BoardChildTitle>
          <DepartmentSubWrapper>
            <img
              style={{ width: "15px", margin: "0 7px" }}
              src={mainPageIcons.heart}
            />
            <span>27</span>
            <img
              style={{ width: "15px", margin: "0 7px" }}
              src={mainPageIcons.comment}
            />
            <span>27</span>
          </DepartmentSubWrapper>
        </BoardChildWrapper>
        <BoardChildWrapper>
          <BoardChildTitle>ㅎㅇㅎㅇ</BoardChildTitle>
          <DepartmentSubWrapper>
            <img
              style={{ width: "15px", margin: "0 7px" }}
              src={mainPageIcons.heart}
            />
            <span>27</span>
            <img
              style={{ width: "15px", margin: "0 7px" }}
              src={mainPageIcons.comment}
            />
            <span>27</span>
          </DepartmentSubWrapper>
        </BoardChildWrapper>
        <BoardChildWrapper>
          <BoardChildTitle>ㅎㅇㅎㅇ</BoardChildTitle>
          <DepartmentSubWrapper>
            <img
              style={{ width: "15px", margin: "0 7px" }}
              src={mainPageIcons.heart}
            />
            <span>27</span>
            <img
              style={{ width: "15px", margin: "0 7px" }}
              src={mainPageIcons.comment}
            />
            <span>27</span>
          </DepartmentSubWrapper>
        </BoardChildWrapper>
      </BoardContainer>
    </Container>
  );
};
export default MainPage;
