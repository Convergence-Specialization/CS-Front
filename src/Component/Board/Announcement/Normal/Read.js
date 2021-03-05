import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { timeConverter } from "../../../../assets/Dicts";
import { horseIcons } from "../../../../assets/Resources";
import { useHistory } from "react-router-dom";
import Linkify from "react-linkify";
import { announcementApi } from "../../../../api";
import message from "antd/lib/message";
const Container = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding-bottom: 15px;
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
  margin-left: 8px;
  padding-top: 10px;
`;

const EventTermContainer = styled.div`
  background: #f1f1f1;
  margin: 0 -10px 8px;
  font-size: 13px;
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

const Button = styled.div`
  text-align: center;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #d4e6fb;
  margin-top: -6px;
  cursor: pointer;
  float: right;
`;

const BoardText = styled.div`
  margin: 5px;
  font-size: 14px;
  line-height: 2;
  word-break: keep-all;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const HorseImg = styled.img`
  width: 45px;
  margin: 0 5px;
  align-self: flex-start;
`;

const TitleAndTime = styled.div`
  display: flex;
  align-items: center;
`;

const BoardTitleContainer = styled.div`
  display: flex;
  font-weight: bold;
  padding: 10px 0px 0px 0px;
  width: 90%;
  margin: 10px 3px 0px 3px;
  font-size: 18px;
  position: right;
  align-items: center;
  justify-content: flex-end;
`;

const TitleAndTimeWrapper = styled.div``;
const Announcement = () => {
  const location = useLocation();

  const [docItem, setDocItem] = useState();
  const [secretObject, setSecretObject] = useState({ deleteCount: 0 });

  const history = useHistory();

  useEffect(() => {
    if (location.state === undefined) return;
    setDocItem(location.state.docItem);
  }, [location.state]);

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
                    <BoardTitle
                      onClick={async () => {
                        setSecretObject({
                          deleteCount: secretObject.deleteCount + 1,
                        });
                        if (
                          secretObject.deleteCount === 6 &&
                          window.confirm("이 공지를 삭제하시겠습니까?")
                        ) {
                          try {
                            message.destroy();
                            message.loading("공지를 삭제하는 중입니다..");
                            await announcementApi.requestDeleteDoc({
                              docId: docItem.docId,
                            });
                            message.destroy();
                            message.success("공지가 삭제되었습니다.");
                            history.push("/board/announcement");
                          } catch (err) {
                            message.destroy();
                            message.error(err.message);
                          }
                        }
                      }}>
                      {docItem.title}
                    </BoardTitle>
                    <WritterAndDate>
                      작성일: {timeConverter(docItem.timestampMillis)}
                    </WritterAndDate>
                  </TitleAndTimeWrapper>
                </BoardWritterWrapper>
              </TitleAndTime>
            </BoardTitleWrapper>
            {docItem.eventPeriod ? (
              <EventTermContainer>
                이벤트 기간 : {docItem.eventPeriod}
              </EventTermContainer>
            ) : (
              <EventTermContainer
                style={{ padding: "4px 20px" }}></EventTermContainer>
            )}
            <BoardImgWrapper>
              {docItem.imgArray.map((item, idx) => (
                <BoardImg
                  key={`${idx}IMAGE_ANNOUNCE`}
                  src={item}
                  alt={`${idx}번째 공지 이미지`}
                />
              ))}
            </BoardImgWrapper>
            <BoardText>
              <Linkify>{docItem.content}</Linkify>
            </BoardText>
          </BoardWrapper>
          <BoardTitleContainer>
            <Button
              onClick={() =>
                history.push({
                  pathname: `/board/announcement`,
                  state: {
                    pageName: "listview",
                  },
                })
              }>
              목록
            </Button>
          </BoardTitleContainer>
        </BoardContainer>
      )}
    </Container>
  );
};
export default Announcement;
