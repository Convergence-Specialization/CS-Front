import React, { useState } from "react";
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
  background-color: #e3fdfd;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TextSmallBox = styled.div`
  border: 1px solid black;
  text-align: center;
  padding: 10px 20px;
  border-radius: 30px;
  background-color: #f88f01;
  box-shadow: 0 6px 12px -1px rgba(0, 0, 0, 0.12);
  transition: all 0.2s ease;
  &:hover {
    margin-top: -10px;
    cursor: pointer;
  }
`;
const MoveCon = styled.div`
  font-weight: bold;
  font-size: 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
const SidebarContainer = styled.div`
  position: fixed;
  margin-left: -150px;
`;
const MoveSmallCon = styled.div`
  /* width: 20%; */
  padding: 15px;
  background-color: #e3fdfd;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (max-width: 1023px) {
    width: 100%;
    margin: 10px 0;
  }
`;
const LinkButton = styled.div`
  border: 1px solid black;
  background-color: white;
  margin: 10px 0;
`;
const GoveSmallCon = styled.div`
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
  margin-top: 20px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #e3fdfd;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (max-width: 1023px) {
    width: 100%;
    margin: 10px 0;
  }
`;
const QoveText = styled.div`
  margin: 20px 0;
`;
const BoveSmallCon = styled.div`
  width: 70%;
  margin: 10px auto;
  padding: 15px;
  background-color: #e3fdfd;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (max-width: 1023px) {
    width: 100%;
    margin: 10px 0;
  }
`;
const ChildWrapper = styled.div`
  display: flex;
  background-color: pink;
  margin: 10px 0;
`;
const ChildText = styled.div``;

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
const ImgCon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImgBox = styled.img`
  width: 95%;
`;

const DUMMY_list = [
  {
    title: "준하 안녕",
    author: "준하",
    time: "2020/12/31",
  },
  {
    title: "준하 안녕",
    author: "준하",
    time: "2020/12/31",
  },
  {
    title: "준하 안녕",
    author: "준하",
    time: "2020/12/31",
  },
  {
    title: "준하 안녕",
    author: "준하",
    time: "2020/12/31",
  },
  {
    title: "준하 안녕",
    author: "준하",
    time: "2020/12/31",
  },
  {
    title: "준하 안녕",
    author: "준하",
    time: "2020/12/31",
  },
  {
    title: "준하 안녕",
    author: "준하",
    time: "2020/12/31",
  },
  {
    title: "준하 안녕",
    author: "준하",
    time: "2020/12/31",
  },
  {
    title: "준하 안녕",
    author: "준하",
    time: "2020/12/31",
  },
  {
    title: "준하 안녕",
    author: "준하",
    time: "2020/12/31",
  },
  {
    title: "준하 안녕",
    author: "준하",
    time: "2020/12/31",
  },
  {
    title: "준하 안녕",
    author: "준하",
    time: "2020/12/31",
  },
  {
    title: "준하 안녕",
    author: "준하",
    time: "2020/12/31",
  },
  {
    title: "준하 안녕",
    author: "준하",
    time: "2020/12/31",
  },
  {
    title: "준하 안녕",
    author: "준하",
    time: "2020/12/31",
  },
];

const Proto = () => {
  const [number, setNumber] = useState(0);
  return (
    <Con>
      <NavTemp />
      <Wrap>
        {/* 상단바 구역 */}
        <AnnounceCon>
          <TextSmallBox
            onClick={() => {
              window.location.href = "/About";
            }}>
            공지사항
          </TextSmallBox>
          <TextSmallBox
            onClick={() => {
              setNumber(number + 1);
            }}>
            게시판
          </TextSmallBox>
          <TextSmallBox>{number}</TextSmallBox>
          <TextSmallBox>마이페이지</TextSmallBox>
          <TextSmallBox>마이페이지</TextSmallBox>
        </AnnounceCon>
        {/* 밑 구역 */}
        <MoveCon>
          {/* 사이드 바 구역 */}
          <SidebarContainer>
            <MoveSmallCon>
              <LinkButton>20학번 게시판</LinkButton>
              <LinkButton>20학번 게시판</LinkButton>
              <LinkButton>20학번 게시판</LinkButton>
              <LinkButton>20학번 게시판</LinkButton>
            </MoveSmallCon>
            <QoveSmallCon>
              <QoveText>슈케치</QoveText>
              <QoveText>슈케치</QoveText>
              <QoveText>슈케치</QoveText>
              <QoveText>슈케치</QoveText>
            </QoveSmallCon>
          </SidebarContainer>
          {/* 메인 구역 */}
          <BoveSmallCon>
            <ChildWrapper>
              <ChildText style={{ width: "50%" }}>제목</ChildText>
              <ChildText style={{ width: "25%" }}>작성자</ChildText>
              <ChildText style={{ width: "25%" }}>작성 시간</ChildText>
            </ChildWrapper>
            {DUMMY_list.map((item, idx) => (
              <ChildWrapper key={idx}>
                <ChildText style={{ width: "50%" }}>{item.title}</ChildText>
                <ChildText style={{ width: "25%" }}>{item.author}</ChildText>
                <ChildText style={{ width: "25%" }}>{item.time}</ChildText>
              </ChildWrapper>
            ))}
          </BoveSmallCon>
        </MoveCon>
        <FreeCon></FreeCon>
        <ImgCon></ImgCon>
      </Wrap>
    </Con>
  );
};
export default Proto;
