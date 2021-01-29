import React from "react";
import styled from "styled-components";
import { mainPageIcons } from "../../assets/Resources";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items:center;
  text-align:center;
  justify-content:start;
  margin-left: 30px;
`;
const TitleWrapper1 = styled.div`
  display: flex;
  align-items:center;
  text-align:center;
  justify-content:start;
  margin: 0px 0px 0px 30px;
`;
const TitleIconImg = styled.img`
  width: 25px;
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
const TitleElement1 = ({ src, name }) => (
  <TitleWrapper1>
    <TitleIconImg src={src} alt={"제목 아이콘"} />
    <Title>{name}</Title>
  </TitleWrapper1>
);
const BoardContainer = styled.div`
  border-radius: 20px;
  background-color: #f1f1f1;
  padding: 0px 10px 10px;
  margin: 10px 20px 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const BoardChildWrapper = styled.div`
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: NanumSquareRoundR;
  font-size: 15px;
  line-height: 1.12;
  letter-spacing: normal;
  text-align: left;
  color: #444444;
  @media (max-width: 430px) {
    font-size: 12px;
  }
`;
const BoardChildTitle = styled.div`
  font-family: NanumSquareRoundR;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.12;
  letter-spacing: normal;
  text-align: left;
  color: #444444;
  @media (max-width: 430px) {
    font-size: 12px;
  }
`;
const BoardAnnounceSubText = styled.div`
  font-size: 14px;
`;
const IntroduceWrapper = styled.div`
  margin-top: 12px;
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const IntroduceBox = styled.div`
  width: 27%;
  padding: 10px;
  margin: 0px 0;
  border-radius: 0px;
  background-color: white;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid;
  border-width: 1px 1px 1px 1px;
`;
const IntroduceBox5 = styled.div`
  width: 27%;
  padding: 10px;
  margin: 0px 0;
  border-radius: 0px;
  background-color: white;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid;
  border-width: 1px 1px 1px 1px;
`;
const IntroduceBox1 = styled.div`
  width: 27%;
  padding: 10px;
  margin: 0px 0;
  border-radius: 20px 0px 0px 0px;
  background-color: white;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid;
  border-width: 1px 1px 1px 1px;
`;
const IntroduceBox2 = styled.div`
  width: 27%;
  padding: 10px;
  margin: 0px 0;
  border-radius: 0px 20px 0px 0px;
  background-color: white;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid;
  border-width: 1px 1px 1px 1px;
`;
const IntroduceBox3 = styled.div`
  width: 27%;
  padding: 10px;
  margin: 0px 0;
  border-radius: 0px 0px 0px 20px;
  background-color: white;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid;
  border-width: 1px 1px 1px 1px;
`;
const IntroduceBox4 = styled.div`
  width: 27%;
  padding: 10px;
  margin: 0px 0;
  border-radius: 0px 0px 20px 0px;
  background-color: white;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid;
  border-width: 1px 1px 1px 1px;
`;
const IntroduceImage = styled.img`
  width: 70%;
`;
const IntroduceText = styled.div`
  margin-top: 10px;
  font-family: NanumGothic;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: normal;
  text-align: center;
  color: #3b3b3b;
  @media (max-width: 430px) {
    font-size: 10px;
  }
`;
const DepartmentSubWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const TitleAndButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top:20px;
  justify-content: space-between;
  width: 94%;
`;
const Button = styled.div`
  text-align: center;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #d4e6fb;
  cursor: pointer;
`;
const MainPage = () => {
  const history = useHistory();
  return (
    <Container>
      <TitleAndButtonWrapper>
        <TitleElement src={mainPageIcons.announce} name={"공지사항"} />
        <Button onClick={() => history.push("/board/announcement")}>
          더보기
        </Button>
      </TitleAndButtonWrapper>
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
          <IntroduceBox1>
            <IntroduceImage src={mainPageIcons.Car} />
            <IntroduceText>스마트 자동차</IntroduceText>
          </IntroduceBox1>
          <IntroduceBox>
            <IntroduceImage src={mainPageIcons.Energy} />
            <IntroduceText>에너지 공학</IntroduceText>
          </IntroduceBox>
          <IntroduceBox2>
            <IntroduceImage src={mainPageIcons.Security} />
            <IntroduceText>정보보안</IntroduceText>
          </IntroduceBox2>
          <IntroduceBox3>
            <IntroduceImage src={mainPageIcons.BigData} />
            <IntroduceText>빅데이터</IntroduceText>
          </IntroduceBox3>
          <IntroduceBox5>
            <IntroduceImage src={mainPageIcons.Ict} />
            <IntroduceText>ICT 유통물류</IntroduceText>
          </IntroduceBox5>
          <IntroduceBox4>
            <IntroduceImage src={mainPageIcons.Unification} />
            <IntroduceText>통일외교 및 개발협력</IntroduceText>
          </IntroduceBox4>
        </IntroduceWrapper>
      </BoardContainer>
      <TitleAndButtonWrapper>
        <TitleElement src={mainPageIcons.airplane} name={"융특 게시판"} />
        <Button onClick={() => history.push("/board/convergence")}>
          더보기
        </Button>
      </TitleAndButtonWrapper>
      <BoardContainer>
        <BoardChildWrapper>12시 기상</BoardChildWrapper>
        <BoardChildWrapper>6시간 코딩</BoardChildWrapper>
        <BoardChildWrapper>30분 치킨</BoardChildWrapper>
        <BoardChildWrapper>4시간 코딩</BoardChildWrapper>
        <BoardChildWrapper>5시간 취침</BoardChildWrapper>
      </BoardContainer>
      <TitleAndButtonWrapper>
        <TitleElement src={mainPageIcons.airplane} name={"전과 게시판"} />
        <Button onClick={() => history.push("/board/departmajor")}>
          더보기
        </Button>
      </TitleAndButtonWrapper>
      <BoardContainer>
        <BoardChildWrapper>
          <BoardChildTitle>ㅎㅇㅎㅇ</BoardChildTitle>
          <DepartmentSubWrapper>
            <img
              style={{ width: "15px", margin: "0 7px" }}
              src={mainPageIcons.heart}
              alt="heart"
            />
            <span>27</span>
            <img
              style={{ width: "15px", margin: "0 7px" }}
              src={mainPageIcons.comment}
              alt="comment"
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
              alt="heart"
            />
            <span>27</span>
            <img
              style={{ width: "15px", margin: "0 7px" }}
              src={mainPageIcons.comment}
              alt="comment"
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
              alt="heart"
            />
            <span>27</span>
            <img
              style={{ width: "15px", margin: "0 7px" }}
              src={mainPageIcons.comment}
              alt="comment"
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
              alt="heart"
            />
            <span>27</span>
            <img
              style={{ width: "15px", margin: "0 7px" }}
              src={mainPageIcons.comment}
              alt="comment"
            />
            <span>27</span>
          </DepartmentSubWrapper>
        </BoardChildWrapper>
      </BoardContainer>
    </Container>
  );
};
export default MainPage;
