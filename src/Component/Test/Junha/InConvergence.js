import React from "react";
import styled from "styled-components";
import { Icons, mainPageIcons } from "../../../assets/Resources";
const Con = styled.div`
  width: 82%;
  display: flex;
  padding: 20px 0px;
  margin: 30px auto;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
`;
const Wrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 8px 0px;
  padding-left: 10px;
  border: solid #aca9a9;
  border-width: 0px 0px 2px 0px;
  margin: 0px 0px 10px 0px;
  font-family: NanumSquareRoundR;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  @media (max-width: 430px) {
    font-size: 10px;
    padding-left: 10px;
    margin: 0px 0px 5px 0px;
  }
`;
const Qrap = styled.div`
  font-family: NanumSquareRoundR;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: normal;
  text-align: left;
  color: #545454;
  @media (max-width: 430px) {
    font-size: 12px;
    padding: 0px 10px;
  }
`;
const Jrap = styled.div`
  width: 88%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 10px 0px;
  font-family: NanumSquareRoundR;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.83;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  @media (max-width: 430px) {
    width: 85%;
    font-size: 12px;
    padding: 9px 0px;
  }
`;
const Title = styled.div`
  width: 90%;
  font-family: NanumSquareRoundR;
  font-size: 23px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.52;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  @media (max-width: 430px) {
    font-size: 20px;
    padding-left: 10px;
  }
`;
const Title2 = styled.div`
  font-family: NanumSquareRoundB;
  font-size: 20px;
  padding-left: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  @media (max-width: 430px) {
    font-size: 16px;
  }
`;
const Title3 = styled.div`
  font-family: NanumSquareRoundB;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
  text-align: left;
  color: #0b03ff;
  @media (max-width: 430px) {
    font-size: 16px;
  }
`;
const TextBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: start;
  padding: 8px 0px;
  margin: 0px 0px 10px 0px;
  border: solid #a2a2a2;
  border-width: 0px 0px 2px 0px;
`;
const CommentBox = styled.div`
  width: 80%;
  border-radius: 10px;
  margin-bottom: 15px;
  background-color: white;
  display: flex;
  padding: 10px 20px 90px 20px;
  border-radius: 10px;
 
  border: solid 1px #c2c2c2;
  background-color: #d4e6fb;
  background-color: rgba( 0, 0, 255, 0.08);
  @media (max-width: 430px) {
    padding: 10px 20px 60px 20px;
  }
`;
const CommentText = styled.div`

  width: 90%;
  font-family: NanumSquareRoundR;
  font-size: 19px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  color: #646464;
  @media (max-width: 430px) {
    font-size: 14px;
    width: 80%;
  }
`;
const CommentBox1 = styled.div`
  border: solid #dcdcdc;
  border-width: 0px 0px 1px 0px;
  background-color: white;
  width: 90%;
  margin-bottom: 10px;
`;
const CommentBox2 = styled.div`
  background-color: #f9f9f9;
  margin-bottom: 10px;
  padding: 15px;
  width: 80%;
  @media (max-width: 430px) {
    padding: 0px 5px 0px 5px;
    margin-bottom: 30px;
  }
`;
const CommentText1 = styled.div`
  width: 85%;
  display: flex;
  padding: 8px 0px;
  margin: 0px 0px 10px 0px;
  font-family: NanumSquareRoundR;
  font-size: 23px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  @media (max-width: 430px) {
    font-size: 10px;
    width: 75%;
    padding: 5px 5px;
  }
`;
const Button = styled.div`
  width:20%;
  padding: 10px 10px;
  border-radius: 10px;
  background-color: rgba( 0, 0, 255, 0.1);
  font-family: NanumSquareRoundEB;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.12;
  letter-spacing: normal;
  text-align: center;
  color: #545454;
  @media (max-width: 430px) {
    font-size: 12px;
    padding: 5px 10px;
  }
`;
const CommentButton = styled.div`
  width: 20%;
  padding: 15px 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 20px;
  border: solid 0.5px #707070;
  @media (max-width: 430px) {
    width: 20%;
    padding: 10px 8px;
  }
`;
const CommentButtonText = styled.div`
  font-family: NanumSquareRoundR;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: normal;
  text-align: center;
  color: #545454;
  @media (max-width: 430px) {
    font-size: 8px;
  }
`;
const CommentTitle = styled.div`
  width: 90%;
  font-family: NanumSquareRoundEB;
  font-size: 19px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.16;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  @media (max-width: 430px) {
    font-size: 13px;
    padding: 6px 4px;
  }
`;
const CommentTitle1 = styled.div`
  width: 90%;
  font-family: NanumSquareRoundEB;
  font-size: 19px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.16;
  letter-spacing: normal;
  text-align: left;
  color: #212121;
  @media (max-width: 430px) {
    width: 88%;
    font-size: 13px;
    padding: 6px 4px;
  }
`;
const CommentTitle2 = styled.div`
  font-family: NanumSquareRoundEB;
  font-size: 19px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.16;
  letter-spacing: normal;
  text-align: left;
  color: #5ac6b9;
  @media (max-width: 430px) {
    font-size: 13px;
    padding: 8px 0px;
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Box2 = styled.div`
  width:100%;
  display: flex;
  justify-content: space-between;
`;
const Box1 = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  margin: 20px 0px 0px 0px;
  @media (max-width: 430px) {
    margin: 20px 0px 0px 0px;
  }
`;
export const IconImg = styled.img`
  width: 8%;
  padding: 20px 0px 50px 40px;
`;
export const CommentImg = styled.img`
  width: 20%;
  padding: 0px 8px 0px 0px;
  @media (max-width: 430px) {
    width: 20%;
  }
`;
export const Time = styled.div`
  padding: 20px 0px 0px 0px;
  font-family: NanumSquareRoundR;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  color: #646464;
  @media (max-width: 430px) {
    font-size: 8px;
    padding: 8px 0px 0px 0px;
  }
`;
export const Time1 = styled.div`
  padding: 20px 14px 0px 0px;
  font-family: NanumSquareRoundR;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  color: #646464;
  @media (max-width: 430px) {
    font-size: 8px;
    padding: 8px 5px 0px 0px;
  }
`;
const InConvergence = () => {
  return (
    <>
      <Con>
        <Title>컴학 신청한 사람 많음?</Title>
        <Wrap>배고픈 슝슝이 | 21.01.14</Wrap>
        <Jrap>지금은 2021 1월 20일입니다.</Jrap>
        <Jrap>새벽 1시 25분이 지나고 있습니다.</Jrap>
        <Jrap>힘이 들어요오오</Jrap>
        <Jrap>회의는 9시 30분입니다</Jrap>
        <Jrap>맞죠?</Jrap>
        <Jrap>배고파요오</Jrap>
        <Jrap>저의 역할은 끝나갑니다.</Jrap>
        <Jrap>오늘은 언제 잘까요?</Jrap>
        <Jrap>언제 일어날까요?</Jrap>
        <Jrap>치킨 먹고 싶어요오</Jrap>
        <Jrap>머지 부탁합니다.</Jrap>
        <Box1>
          <Qrap>공감7 | 댓글5</Qrap>
          <CommentButton>
            <CommentImg src={mainPageIcons.heart} />
            <CommentButtonText>공감</CommentButtonText>
          </CommentButton>
        </Box1>
      </Con>
      <Con>
        <TextBox>
          <Title2>댓글</Title2>
          <Title3>(3)</Title3>
        </TextBox>
        <CommentBox>
          <Box2>
            <CommentText>댓글 작성</CommentText>
            <Button>작성하기</Button>
          </Box2>
        </CommentBox>
        <CommentBox1>
          <CommentTitle>익명의 슝슝이 1</CommentTitle>
          <Box>
            <CommentText1>안은소가 제일 천재야!!!!!!</CommentText1>
            <Time1>1시간 전</Time1>
          </Box>
        </CommentBox1>
        <CommentBox1>
          <CommentTitle>익명의 슝슝이 2</CommentTitle>
          <Box>
            <CommentText1>안은소가 제일 천재야!!!!!!</CommentText1>
            <Time1>39분 전</Time1>
          </Box>
          <Box>
            <IconImg src={Icons.댓글화살표} />
            <CommentBox2>
              <CommentTitle1>익명의 슝슝이 4</CommentTitle1>
              <Box>
                <CommentText1>안은소가 제일 천재야 ㅇㅈ</CommentText1>
                <Time>5분 전</Time>
              </Box>
            </CommentBox2>
          </Box>
          <Box>
            <IconImg src={Icons.댓글화살표} />
            <CommentBox2>
              <CommentTitle2>배고픈 슝슝이</CommentTitle2>
              <Box>
                <CommentText1>안은소가 제일 천재야 ㅇㅈ</CommentText1>
                <Time>3분 전</Time>
              </Box>
            </CommentBox2>
          </Box>
        </CommentBox1>
        <CommentBox1>
          <CommentTitle1>익명의 슝슝이 3</CommentTitle1>
          <Box>
            <CommentText1>안은소가 제일 천재야!!!!!!</CommentText1>
            <Time1>20분 전</Time1>
          </Box>
        </CommentBox1>
      </Con>
    </>
  );
};
export default InConvergence;
