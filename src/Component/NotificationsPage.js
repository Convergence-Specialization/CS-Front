import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { globalApi, userApi } from "../api";
import { boardNameDict, NOTIFICATION_TYPES } from "../assets/Dicts";
import { loginFunctions } from "./Watchers";
import message from "antd/lib/message";
import LoadingSmall from "./SmallComponents/LoadingSmall";

const Container = styled.div`
  width: 100%;
  padding-bottom: 20px;
`;
const SubjectSelectImg = styled.img`
  width: 26px;
  margin-right: 9px;
`;
const BoardContainer = styled.div`
  width: 93%;
  border-radius: 15px;
  margin: 0px auto 20px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
`;
const BoardChildWrapper = styled.div`
  padding: 12px 0px;
  width: 90%;
  font-size: 15px;
  margin: 0 auto;
  position: relative;
`;
const BoardChildTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Text = styled.div`
  font-weight: bold;
  font-size: 18px;
`;
const BoardChildTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 90px;
  font-weight: bold;
  width: 72%;
  font-size: 16px;
  margin-bottom: 10px;
  @media (max-width: 430px) {
    font-size: 14px;
  }
`;

const BoardChildContent = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 15px;
  width: 93%;
  margin-bottom: 8px;
  @media (max-width: 430px) {
    font-size: 13px;
  }
`;

export const NotificationAlarm = styled.div`
  color: gray;
  padding: 110px 0;
  font-size: 15px;
  text-align: center;
`;
const Button = styled.div`
  text-align: center;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #d4e6fb;
  cursor: pointer;
`;
const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 94%;
  padding: 20px 5px 10px 25px;
`;
const NotificationsPage = () => {
  const history = useHistory();

  const [unreadNotifications, setUnreadNotifications] = useState([]);
  const [readNotifications, setReadNotifications] = useState([]);

  const [unreadLoading, setUnreadLoading] = useState(true);
  const [readLoading, setReadLoading] = useState(true);

  const [docLoading, setDocLoading] = useState(false);

  const getNotifications = useCallback(() => {
    const userInfo = loginFunctions.getUserInfo();
    if (!userInfo) return;
    // 아직 안읽은 알림들 가져오기
    userApi
      .getUnreadNotifications({
        uid: userInfo.uid,
        size: 20,
      })
      .then((notificationArray) => {
        setUnreadNotifications(notificationArray);
        setUnreadLoading(false);
      })
      .catch((err) => console.log(err.message));

    // 이미 읽은 알림들 가져오기
    userApi
      .getReadNotifications({
        uid: userInfo.uid,
        size: 10,
      })
      .then((notificationArray) => {
        setReadNotifications(notificationArray);
        setReadLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    getNotifications();
  }, [getNotifications]);
  return (
    <Container>
      <ButtonBox style={{ marginTop: "15px" }}>
        <Text>읽지 않은 알림</Text>
        {!unreadLoading && (
          <Button
            onClick={async () => {
              if (unreadNotifications.length === 0) {
                return;
              }
              setUnreadLoading(true);
              setReadLoading(true);
              await Promise.all(
                unreadNotifications.map(async (item) => {
                  await globalApi.checkNotification({
                    notificationId: item.notificationId,
                    uid: loginFunctions.getUserInfo().uid,
                  });
                })
              );
              getNotifications();
            }}>
            모두 읽기
          </Button>
        )}
      </ButtonBox>
      <BoardContainer>
        {unreadLoading ? (
          <LoadingSmall />
        ) : unreadNotifications.length === 0 ? (
          <NotificationAlarm>※ 읽지 않은 알림이 없습니다 ※</NotificationAlarm>
        ) : (
          unreadNotifications.map((item, idx) => (
            <BoardChildWrapper
              key={`${idx}UNREAD`}
              style={
                unreadNotifications.length - 1 === idx
                  ? {}
                  : { borderBottom: "2.0px solid #f1f1f1" }
              }
              onClick={async () => {
                if (docLoading) return;
                setDocLoading(true);
                message.loading("불러오는 중..");
                try {
                  let docData = await globalApi.getSingleDoc({
                    boardName: boardNameDict[item.boardName].dbName,
                    docId: item.docId,
                  });
                  message.destroy();
                  history.push({
                    pathname: `/board/${
                      boardNameDict[item.boardName].addressName
                    }`,
                    state: {
                      pageName: "read",
                      docItem: docData,
                    },
                  });
                } catch (err) {
                  if (err instanceof TypeError) {
                    message.destroy();
                    message.error("삭제된 글입니다.");
                  }
                }
                globalApi.checkNotification({
                  notificationId: item.notificationId,
                  uid: loginFunctions.getUserInfo().uid,
                });
                setDocLoading(false);
              }}>
              <BoardChildTitleWrapper>
                <SubjectSelectImg
                  style={{ width: "23px", marginTop: "-5px" }}
                  src={NOTIFICATION_TYPES[item.type].img}
                  alt={"공감 아이콘"}
                />
                <BoardChildTitle style={{ width: "80%" }}>
                  {boardNameDict[item.boardName].name}
                </BoardChildTitle>
              </BoardChildTitleWrapper>
              {!!item.preview ? (
                <BoardChildContent>{`${item.notificationBody}: ${item.preview}`}</BoardChildContent>
              ) : (
                <BoardChildContent>{item.notificationBody}</BoardChildContent>
              )}
            </BoardChildWrapper>
          ))
        )}
      </BoardContainer>
      <ButtonBox>
        <Text>읽은 알림</Text>
        {!readLoading && (
          <Button
            onClick={async () => {
              if (readNotifications.length === 0) {
                return;
              }
              setReadLoading(true);
              await Promise.all(
                readNotifications.map(async (item) => {
                  return await userApi.deleteNotification({
                    notificationId: item.notificationId,
                    uid: loginFunctions.getUserInfo().uid,
                  });
                })
              );
              getNotifications();
            }}>
            모두 삭제
          </Button>
        )}
      </ButtonBox>
      <BoardContainer>
        {readLoading ? (
          <LoadingSmall />
        ) : readNotifications.length === 0 ? (
          <NotificationAlarm>※ 읽은 알림이 없습니다 ※</NotificationAlarm>
        ) : (
          readNotifications.map((item, idx) => (
            <BoardChildWrapper
              style={
                readNotifications.length - 1 === idx
                  ? {}
                  : { borderBottom: "2.0px solid #f1f1f1" }
              }
              key={`${idx}READ`}
              onClick={async () => {
                if (docLoading) return;
                setDocLoading(true);
                message.loading("불러오는 중..");
                try {
                  let docData = await globalApi.getSingleDoc({
                    boardName: boardNameDict[item.boardName].dbName,
                    docId: item.docId,
                  });
                  message.destroy();
                  history.push({
                    pathname: `/board/${
                      boardNameDict[item.boardName].addressName
                    }`,
                    state: {
                      pageName: "read",
                      docItem: docData,
                    },
                  });
                } catch (err) {
                  if (err instanceof TypeError) {
                    message.destroy();
                    message.error("삭제된 글입니다.");
                  }
                }
                setDocLoading(false);
              }}>
              <BoardChildTitleWrapper>
                <SubjectSelectImg
                  style={{ width: "23px", marginTop: "-5px" }}
                  src={NOTIFICATION_TYPES[item.type].img}
                  alt={"공감 아이콘"}
                />
                <BoardChildTitle style={{ width: "80%" }}>
                  {boardNameDict[item.boardName].name}
                </BoardChildTitle>
              </BoardChildTitleWrapper>
              {!!item.preview ? (
                <BoardChildContent>{`${item.notificationBody}: ${item.preview}`}</BoardChildContent>
              ) : (
                <BoardChildContent>{item.notificationBody}</BoardChildContent>
              )}
            </BoardChildWrapper>
          ))
        )}
      </BoardContainer>
    </Container>
  );
};
export default NotificationsPage;
