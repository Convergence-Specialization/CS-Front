import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #f1f1f1;
  padding: 5px 0px 20px 0px;
  font-family: NanumSquareRoundR;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  flex-direction: column;
`;
const MainBox = styled.div`
  width: 90%;
  height: 400px;
  margin: 20px auto;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const Title = styled.div`
  align-self: flex-start;
  padding: 15px 15px 5px 15px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.52;
  letter-spacing: normal;
`;

const Writter = styled.div`
  padding: 8px 0px;
  margin: 0 0 10px 15px;
  font-size: 15px;
  line-height: 1.15;
  letter-spacing: normal;
  text-align: left;
  color: #545454;
  @media (max-width: 430px) {
    font-size: 12px;
  }
`;

const Line = styled.div`
  width: 95%;
  margin: 5px auto;
  border: solid 1px #aca9a9;
`;

const MainText = styled.div`
  padding: 3px;
  margin-left: 10px;
  font-size: 15px;
`;

const SubBox = styled.div`
  width: 90%;
  height: 50px;
  margin: 0px auto;
  padding: 10px 0;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const SubPre = styled.div`
  font-size: 15px;
  display: flex;
  margin: 0 0 10px 20px;
`;
const SubFor = styled.div`
  font-size: 15px;
  display: flex;
  margin: 10px 0 0 20px;
`;

const ListButton = styled.div`
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

const ListButtonText = styled.div`
  margin: 5px 0px 5px 0px;
  font-weight: bold;
`;

const Announcement = () => {
  return (
    <>
      <Container>
        <MainBox>
          <Title>전과 신청 결과는 1월 18일에 발표됩니다.</Title>
          <Writter>관리자 융슝이 | 20.12.11</Writter>
          <Line></Line>
          <MainText>뭐하죠</MainText>
          <MainText>몰라요</MainText>
          <MainText>하하ㅏ하하하하하하ㅏㅎ</MainText>
        </MainBox>
        <SubBox>
          <SubPre>이전 | '온라인학습법특강' 참여</SubPre>
          <Line></Line>
          <SubFor>이후 | 뭐라고 해야하지</SubFor>
        </SubBox>
        <ListButton>
          <ListButtonText>목록</ListButtonText>
        </ListButton>
      </Container>
    </>
  );
};
export default Announcement;
