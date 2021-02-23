import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { timeConverter } from "../../../../assets/Dicts";
import { horseIcons } from "../../../../assets/Resources";

const Container = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;

const BoardContainer = styled.div`
  width: 100%;
  border-radius: 0px;
  background-color: #f1f1f1;
  padding: 0 auto;
  padding-bottom: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const BoardWrapper = styled.div`
  margin-top: 13px;
  padding: 10px;
  width: 93%;
  min-height: 450px;
  border-radius: 15px;
  justify-content: space-between;
  align-items: center;
  line-height: 1.12;
  color: #444444;
  background-color: white;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  @media (max-width: 430px) {
    font-size: 12px;
  }
`;
const BoardTitleWrapper = styled.div`
  margin: 5px 0 10px 5px;
`;
const BoardTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  margin-left: 8px;
  @media (max-width: 430px) {
    font-size: 16px;
  }
`;

const WritterAndDate = styled.div`
  font-size: 13px;
  text-align: center;
  margin-left: 8px;
  padding-top: 10px;

  @media (max-width: 430px) {
  }
`;

const BoardLine = styled.div`
  border: solid 1px #a5a5a5;
  margin: 5px 10px 0px 10px;
`;

const EventTermContainer = styled.div`
  background: #f1f1f1;
  margin: 0 -10px 8px;
  font-size: 13px;
  /* height: 35px; */
  padding: 10px 20px;
`;
const BoardWritterWrapper = styled.div`
  display: flex;
  align-items: left;
  padding-top: 5px;
  justify-content: left;
  width: 94%;
`;
const BoardImgWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const BoardImg = styled.img`
  width: 85%;
  margin: 10px 0;
`;

const BoardText = styled.div`
  margin: 5px;
  font-size: 14px;
  line-height: 2;
  word-break: keep-all;
  white-space: pre-wrap;
`;

const BoardButton = styled.div`
  margin: 0px 10px 0px 290px;
  padding: 5px;
  width: 15%;
  height: 30px;
  background-color: #d4e6fb;
  border-radius: 15px;
  justify-content: space-between;
  align-items: center;
  line-height: 1.12;
  text-align: center;
  color: #444444;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  @media (max-width: 430px) {
    font-size: 15px;
  }
`;

const BoardButtonText = styled.div`
  margin: 5px 0px 5px 0px;
  font-weight: bold;
`;

const HorseImg = styled.img`
  width: 45px;
  margin: 0 5px;
  align-self: flex-start;
`;

const SubBox = styled.div`
  font-size: 14px;
  width: 93%;
  margin: 15px auto;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const SubPre = styled.div`
  display: flex;
  margin: 10px 20px;
`;
const SubFor = styled.div`
  display: flex;
  margin: 10px 20px;
`;

const TitleAndTime = styled.div`
  display: flex;
  align-items: center;
`;
const TitleAndTimeWrapper = styled.div``;

const Announcement = () => {
  const location = useLocation();
  const [docItem, setDocItem] = useState();

  useEffect(() => {
    if (location.state === undefined) return;
    setDocItem(location.state.docItem);
  }, []);

  return (
    <Container>
      {!!docItem && (
        <BoardContainer>
          <BoardWrapper>
            <BoardTitleWrapper>
              <TitleAndTime>
                <BoardWritterWrapper>
                  <HorseImg src={horseIcons.horse} alt="말머리" />
                  <TitleAndTimeWrapper>
                    <BoardTitle>{docItem.title}</BoardTitle>
                    <WritterAndDate>
                      작성일: {timeConverter(docItem.timestampMillis)}
                    </WritterAndDate>
                  </TitleAndTimeWrapper>
                </BoardWritterWrapper>
              </TitleAndTime>
            </BoardTitleWrapper>
            <EventTermContainer>
              이벤트 기간 : {docItem.eventPeriod}
            </EventTermContainer>
            <BoardImgWrapper>
              {docItem.imgArray.map((item, idx) => (
                <BoardImg
                  key={`${idx}IMAGE_ANNOUNCE`}
                  src={item}
                  alt={`${idx}IMAGE_ANNOUNCE`}
                />
              ))}
            </BoardImgWrapper>
            <BoardText>{docItem.content}</BoardText>
          </BoardWrapper>
          <SubBox>
            <SubPre>이전 | '온라인학습법특강' 참여</SubPre>
            <BoardLine />
            <SubFor>이후 | 뭐라고 해야하지</SubFor>
          </SubBox>
          <BoardButton>
            <BoardButtonText>목록</BoardButtonText>
          </BoardButton>
        </BoardContainer>
      )}
    </Container>
  );
};
export default Announcement;
