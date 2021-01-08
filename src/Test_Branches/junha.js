import React from "react";
import styled, { keyframes } from "styled-components";

const Con = styled.div`
  width: 100%;
  background-color: #fafafa;
  font-family: "Nanum Gothic", sans-serif;
`;
const NavTemp = styled.div`
  height: 60px;
  width: 100%;
  background-color: #004a7c;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;
const Wrap = styled.div`
  width: 90%;
  max-width: 1024px;
  margin: 0 auto;
`;
const AnnounceCon = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 40px auto;
  padding: 15px;
  width: 95%;
  height: 25px;
  background-color: #e3fdfd;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;
const MoveCon = styled.div`
  font-weight: bold;
  font-size: 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
const MoveSmallCon = styled.div`
  width: 20%;
  position: relative;
        left: 10px;
  height: 500px;
  padding: 15px;
  background-color: #e3fdfd;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (max-width: 1023px) {
    width: 100%;
    margin: 10px 0;
  }
`;
const GoveSmallCon = styled.div`
  width: 70%;
  height: 50px;
  position: relative;
  right: 10px;
  bottom: 224px;
  padding: 15px;
  background-color: #e3fdfd;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (max-width: 1023px) {
    width: 100%;
    margin: 10px 0;
  }
`;
const QoveSmallCon = styled.div`
  width: 20%;
  height: 150px;
  position: relative;
        left: 10px;
        bottom: 205px;
  padding: 15px;
  background-color: #e3fdfd;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (max-width: 1023px) {
    width: 100%;
    margin: 10px 0;
  }
`;
const BoveSmallCon = styled.div`
  width: 70%;
  height: 600px;
  position: relative;
        right: 10px;
        bottom: 430px;
  padding: 15px;
  background-color: #e3fdfd;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (max-width: 1023px) {
    width: 100%;
    margin: 10px 0;
  }
`;

const FreeCon = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
const FreeSmallCon = styled.div`
  width: 26%;
  height: 250px;
  padding: 15px;
  background-color: #e3fdfd;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (max-width: 1023px) {
    width: 100%;
    margin: 10px 0;
  }
`;
const TextSmallBox = styled.div`
  width: 100%;
  height: 20%;
  /* border-bottom: 1px solid black; */
`;
const ImgCon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImgBox = styled.img`
  width: 95%;
`;

const Proto = () => {
  return (
    <Con>
      <NavTemp />
      <Wrap>
        <AnnounceCon>
          <TextSmallBox>공지사항 | 게시판 |&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;...&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;|마이페이지</TextSmallBox>
        </AnnounceCon>
        <MoveCon>
          <MoveSmallCon>게시판<br/><br/><br/>-자유게시판<br/><br/><br/>-21학번 게시판<br/><br/><br/>-20학번 게시판<br/><br/><br/>-등등...?</MoveSmallCon>
          <GoveSmallCon>20학번 게시판</GoveSmallCon>
          <QoveSmallCon>슈케치&emsp;&emsp;씨아이<br/><br/>융특&emsp;&emsp;프로젝트</QoveSmallCon>
          <BoveSmallCon>날짜&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;제목&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;작성자
            <br/><br/>2021/1/8&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;모두 화이팅 하십쇼&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;김준하
            <br/><br/>2021/1/8&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;컴학의 미래 지여누&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;김준하
            <br/><br/>2021/1/8&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;컴학의 천재 아는소&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;김준하
            </BoveSmallCon>
        </MoveCon>
        <FreeCon>
         
        </FreeCon>
        <ImgCon></ImgCon>
      </Wrap>
    </Con>
  );
};
export default Proto;
