import React from "react";
import styled from "styled-components";
import { mainPageIcons } from "../../../assets/Resources";

const Con = styled.div`
  width: 100%;
  background-color: #f1f1f1;
  margin : 0px;
`;
const TitleBox = styled.div`
  background-color: #ffffff;
  padding : 10px;
  margin-bottom:15px;
  display: flex;
  justify-content: space-between;
`;
const TitleWrap = styled.div`
  display: flex;
  align-items: center;
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
const PostButton = styled.div`
  width: 15%;
  padding: 5px 7px;
  border-radius: 13px;
  background-color: #D4E6FB;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  text-align: center;
  line-height: 1.12;
  letter-spacing: normal;
  font-size: 13px;
  color: #000000;
  padding: 5px 7px;
  font-family: NanumSquareRoundEB;
  font-weight: bold;
  @media (max-width: 430px) {
    font-size: 13px;
    padding: 5px 7px;
  }
`;
const TitleElement = ({ src, name}) => (
  <TitleWrap>
    <TitleIconImg src={src} />
    <Title>{name}</Title>
  </TitleWrap>
);

const BoardCon = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 0 auto;
  padding-bottom: 50px;
  margin: 0 20px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const changedboard = () => {
  return (
    <Con>
      <TitleBox>
         <TitleElement src={mainPageIcons.airplane} name={"전과 게시판"} />
         <PostButton>글 작성</PostButton>
      </TitleBox>
      <BoardCon>
      </BoardCon>
    </Con>
  );
};
export default changedboard;
/*
const MoveCon = styled.div`
  font-weight: normal;
  font-size: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
const PostBox = styled.div`
  border: solid #dcdcdc;
  border-width: 0px 0px 1px 0px;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 20px;
`;
const PostTitle = styled.div`
  font-family: NanumSquareRoundEB;
  font-size: 20px;
  letter-spacing: normal;
  text-align: left;

  font-whight: bold;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
const Wrap = styled.div`
  width: 90%;
  max-width: 1024px;
  margin: 0 auto;
`;
const BoveSmallCon = styled.div`
  width: 80%;
  height: 700px;
  justify-content: space-around;
  position: relative;
        right: 15px;
        left: 15px;
        top: 20px;
        bottom : 430px;
  padding: 15px;
  margin: 25px 25px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (max-width: 1023px) {
    width: 100%;
    margin: 10px 0;
  }
`; */

