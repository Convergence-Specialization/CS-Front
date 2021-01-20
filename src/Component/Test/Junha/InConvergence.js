import React from "react";
import styled from "styled-components";
import { Icons, mainPageIcons } from "../../../assets/Resources";
const Con = styled.div`
  width: 85%;
  padding: 20px;
  display: flex;
  margin: 10px auto;
  flex-direction: column;
  border-radius: 30px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  font-family: NanumSquareRoundR;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
`;
const Wrap = styled.div`
  padding: 8px 0px;
  border-bottom: 2px solid #aca9a9;
  margin-bottom: 10px;
  font-size: 15px;
  line-height: 1.15;
  letter-spacing: normal;
  @media (max-width: 430px) {
    font-size: 12px;
  }
`;
const Jrap = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  font-family: NanumSquareRoundR;
  font-size: 20px;
  line-height: 1.7;
  letter-spacing: normal;
  @media (max-width: 430px) {
    font-size: 12px;
    width: 85%;
  }
`;
const Title = styled.div`
  align-self: flex-start;
  font-size: 23px;
  line-height: 1.52;
  letter-spacing: normal;
`;
const TextBox = styled.div`
  font-family: NanumSquareRoundB;
  line-height: 1.75;
  width: 100%;
  display: flex;
  padding: 8px 0px;
  margin-bottom: 8px;
  border-bottom: 2px solid #a2a2a2;
  font-size: 20px;
`;
const TitleWithProps = styled.div`
  color: ${(props) => (props.isBlack ? "black" : "#0b03ff")};
`;

const CommentBox = styled.div`
  width: 90%;
  border-radius: 10px;
  background-color: white;
  display: flex;
  padding: 10px 20px 60px 20px;
  border-radius: 10px;
  opacity: 0.19;
  border: solid 1px #c2c2c2;
  background-color: #d4e6fb;
`;
const CommentText = styled.div`
  width: 90%;
  font-family: NanumSquareRoundR;
  font-size: 19px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.16;
  letter-spacing: normal;
  text-align: left;
  color: #646464;
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
  width: 85%;
`;
const CommentText1 = styled.div`
  width: 90%;
  display: flex;
  padding: 8px 0px;
  margin: 0px 0px 10px 0px;
  font-size: 23px;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  @media (max-width: 430px) {
    font-size: 12px;
    width: 85%;
    padding: 10px 20px;
  }
`;
const Button = styled.div`
  width: 20%;
  padding: 10px;
  border-radius: 10px;
  background-color: #d4e6fb;
  font-family: NanumSquareRoundEB;
  font-size: 17px;
  line-height: 1.12;
  letter-spacing: normal;
  text-align: center;
  color: #545454;
  @media (max-width: 430px) {
    font-size: 8px;
    padding: 8px 18px;
  }
`;
const CommentTitle = styled.div`
  width: 90%;
  font-family: NanumSquareRoundEB;
  font-size: 19px;
  line-height: 1.16;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
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
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const IconImg = styled.img`
  width: 4%;
  padding: 30px 0px 20px 40px;
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
      </Con>
      <Con>
        <TextBox>
          <TitleWithProps isBlack>댓글</TitleWithProps>
          <TitleWithProps>(3)</TitleWithProps>
        </TextBox>
        <CommentBox>
          <CommentText>댓글 작성</CommentText>
          <Button>작성하기</Button>
        </CommentBox>
        <CommentBox1>
          <CommentTitle>익명의 슝슝이 1</CommentTitle>
          <CommentText1>안은소가 제일 천재야</CommentText1>
        </CommentBox1>
        <CommentBox1>
          <CommentTitle>익명의 슝슝이 2</CommentTitle>
          <CommentText1>안은소가 제일 천재야</CommentText1>
          <Box>
            <IconImg src={Icons.댓글화살표} />
            <CommentBox2>
              <CommentTitle1>익명의 슝슝이 4</CommentTitle1>
              <CommentText1>안은소가 제일 천재야 ㅇㅈ</CommentText1>
            </CommentBox2>
          </Box>
          <Box>
            <IconImg src={Icons.댓글화살표} />
            <CommentBox2>
              <CommentTitle2>배고픈 슝슝이</CommentTitle2>
              <CommentText1>안은소가 제일 천재야</CommentText1>
            </CommentBox2>
          </Box>
        </CommentBox1>
        <CommentTitle>익명의 슝슝이 3</CommentTitle>
        <CommentText1>안은소가 제일 천재야</CommentText1>
      </Con>
    </>
  );
};
export default InConvergence;
