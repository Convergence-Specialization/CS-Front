import React from "react";
import styled from "styled-components";

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
  height: 250px;
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
  width: 44%;
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
          <TextSmallBox>안내사항</TextSmallBox>
        </AnnounceCon>
        <MoveCon>
          <MoveSmallCon>전과 정보 게시판</MoveSmallCon>
          <MoveSmallCon>융특 질문 게시판</MoveSmallCon>
        </MoveCon>
        <FreeCon>
          <FreeSmallCon>20학번</FreeSmallCon>
          <FreeSmallCon>21학번</FreeSmallCon>
          <FreeSmallCon>자유게시판</FreeSmallCon>
        </FreeCon>
        <ImgCon></ImgCon>
      </Wrap>
    </Con>
  );
};
export default Proto;
