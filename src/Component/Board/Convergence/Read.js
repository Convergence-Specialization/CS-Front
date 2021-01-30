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
`;
const Wrap = styled.div`
  color: #545454;
  font-size: 20px;
  line-height: 1.85;
  margin-left: 10px;
  @media (max-width: 430px) {
    font-size: 15px;
  }
`;
const Qrap = styled.div`
  text-align: end;
  margin-top: 20px;
  font-size: 20px;
  line-height: 1.15;
  color: #545454;
  @media (max-width: 430px) {
    font-size: 12px;
  }
`;
const Jrap = styled.div`
  font-size: 20px;
  line-height: 1.7;
  @media (max-width: 430px) {
    font-size: 15px;
  }
`;
const Title = styled.div`
  font-size: 23px;
  line-height: 1.52;
  @media (max-width: 430px) {
    font-size: 18px;
  }
`;
const TextBox = styled.div`
  line-height: 1.75;
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
  border-radius: 10px;
  margin-bottom: 15px;
  display: flex;
  padding: 10px 20px 90px 20px;
  border-radius: 10px;
  border: solid 1px #c2c2c2;
  background-color: #d4e6fb;
  @media (max-width: 430px) {
    padding: 10px 20px 60px 20px;
  }
`;
const CommentText = styled.div`
  width: 90%;
  font-size: 19px;
  line-height: 1.56;
  color: #646464;
  @media (max-width: 430px) {
    font-size: 14px;
    width: 80%;
  }
`;
const CommentBox1 = styled.div`
  border: solid #dcdcdc;
  border-width: 0px 0px 1px 0px;
  margin-bottom: 10px;
`;
const CommentBox2 = styled.div`
  background-color: #f9f9f9;
  margin-bottom: 10px;
  width: 85%;
  padding: 10px 0px 0px 10px;
  @media (max-width: 430px) {
    margin-bottom: 5px;
  }
`;
const CommentText1 = styled.div`
  display: flex;
  padding: 8px 0px;
  margin: 0px 0px 10px 0px;
  font-size: 23px;
  line-height: 1.17;
  @media (max-width: 430px) {
    font-size: 10px;

    padding: 5px 5px;
  }
`;
const Button = styled.div`
  width: 20%;
  padding: 15px 10px;
  border-radius: 10px;
  background-color: #b0d0f2;
  font-size: 17px;
  line-height: 1.12;
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
  font-size: 20px;
  line-height: 1.15;
  text-align: center;
  color: #545454;
  @media (max-width: 430px) {
    font-size: 8px;
  }
`;
const CommentTitle = styled.div`
  font-size: 19px;
  line-height: 1.16;
  color: #000000;
  @media (max-width: 430px) {
    font-size: 12px;
    padding: 6px 4px;
  }
`;
const CommentTitle1 = styled.div`
  font-size: 19px;
  line-height: 1.16;
  color: #212121;
  @media (max-width: 430px) {
    width: 88%;
    font-size: 12px;
    padding: 6px 4px;
  }
`;
const CommentTitle2 = styled.div`
  font-size: 19px;
  line-height: 1.16;
  color: #5ac6b9;
  @media (max-width: 430px) {
    font-size: 12px;
    padding: 8px 0px;
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HorseBox = styled.div`
  display: flex;
`;
const Box2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Box1 = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 100px 0px 0px 0px;
`;
export const IconImg = styled.img`
  width: 8%;
  padding: 10px 0px 30px 0px;
  margin-left: 25px;
`;
export const CommentImg = styled.img`
  width: 20%;
  padding: 0px 8px 0px 0px;
  @media (max-width: 430px) {
    width: 20%;
  }
`;
export const MenuImg = styled.img`
  width: 3%;
  height: 17px;
  @media (max-width: 430px) {
    width: 3%;
    height: 12px;
  }
`;
export const HorseImg = styled.img`
  width: 10%;
  border-radius: 40px;

  @media (max-width: 430px) {
    width: 10%;
    border-radius: 40px;
  }
`;
export const Time = styled.div`
  padding: 20px 0px 0px 0px;
  font-size: 13px;
  line-height: 1.13;
  color: #646464;
  @media (max-width: 430px) {
    font-size: 8px;
    padding: 8px 0px 0px 0px;
  }
`;
export const Time1 = styled.div`
  padding: 20px 0px 0px 0px;
  font-size: 13px;
  line-height: 1.13;
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
        <Box>
          <HorseBox>
            <HorseImg src={Icons.horse} />
            <Title>배고픈 슝슝이</Title>
            <Wrap> 2021.01.14 1:31</Wrap>
          </HorseBox>
          <MenuImg src={Icons.verticalmenu} />
        </Box>

        <Jrap>지금은 2021 1월 20일입니다.</Jrap>
        <Jrap>새벽 1시 25분이 지나고 있습니다.</Jrap>
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
          <TitleWithProps isBlack>댓글</TitleWithProps>
          <TitleWithProps>(3)</TitleWithProps>
        </TextBox>
        <CommentBox>
          <Box2>
            <CommentText>댓글 작성</CommentText>
            <Button>작성하기</Button>
          </Box2>
        </CommentBox>
        <CommentBox1>
          <Box>
            <CommentTitle>익명의 슝슝이 1</CommentTitle>
            <MenuImg src={Icons.verticalmenu} />
          </Box>
          <Box>
            <CommentText1>안은소가 제일 천재야!!!!!!</CommentText1>
            <Time1>1시간 전</Time1>
          </Box>
        </CommentBox1>
        <CommentBox1>
          <Box>
            <CommentTitle>익명의 슝슝이 2</CommentTitle>
            <MenuImg src={Icons.verticalmenu} />
          </Box>
          <Box>
            <CommentText1>안은소가 제일 천재야!!!!!!</CommentText1>
            <Time1>39분 전</Time1>
          </Box>
          <Box>
            <IconImg src={Icons.댓글화살표} />
            <CommentBox2>
              <Box>
                <CommentTitle1>익명의 슝슝이 4</CommentTitle1>
                <MenuImg src={Icons.verticalmenu} />
              </Box>
              <Box>
                <CommentText1>안은소가 제일 천재야 ㅇㅈ</CommentText1>
                <Time>5분 전</Time>
              </Box>
            </CommentBox2>
          </Box>
          <Box>
            <IconImg src={Icons.댓글화살표} />
            <CommentBox2>
              <Box>
                <CommentTitle2>배고픈 슝슝이</CommentTitle2>
                <MenuImg src={Icons.verticalmenu} />
              </Box>
              <Box>
                <CommentText1>안은소가 제일 천재야 ㅇㅈ</CommentText1>
                <Time>3분 전</Time>
              </Box>
            </CommentBox2>
          </Box>
        </CommentBox1>
        <CommentBox1>
          <Box>
            <CommentTitle1>익명의 슝슝이 3</CommentTitle1>
            <MenuImg src={Icons.verticalmenu} />
          </Box>
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
