import styled from "styled-components";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { announcementApi } from "../../../../api";
import LoadingSmall from "../../../SmallComponents/LoadingSmall";
import { timeConverter } from "../../../../assets/Dicts";
import message from "antd/lib/message";
import { loginFunctions } from "../../../Watchers";

const Container = styled.div`
  background-color: white;
  margin: 20px 0px;
  width: 93%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;
const Con = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const BoardText = styled.div`
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const TitleTextBox = styled.div`
  width: 80%;
  font-size: 10px;
  display: flex;
  margin: 3px 0px;
  flex-direction: column;
  justify-content: space-between;
`;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const BoardChildWrapper = styled.div`
  padding: 10px 15px 10px 15px;
  justify-content: space-between;
  height: 12vh;
  width: 100%;
  display: flex;
  
`;
const BoardChildTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const MoreButton = styled.div`
  width: 93%;
  margin: 0 auto;
  text-align: center;
  font-weight: bold;
  border-radius: 15px;
  padding: 10px 0;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
`;
const BoardImg = styled.img`
  width: 20%;
  border-radius: 10px;
`;

const ListView = () => {
  const history = useHistory();
  const [announcementPosts, setAnnouncementPosts] = useState([]);
  const [showMoreButtonVisible, setShowMoreButtonVisible] = useState(true);
  const [numToGetList, setNumToGetList] = useState(10);

  useEffect(() => {
    const userInfo = loginFunctions.getUserInfo();
    if (!userInfo) return;
    announcementApi
      .getLists({ size: numToGetList })
      .then((docsArray) => {
        if (docsArray.length < numToGetList) {
          setShowMoreButtonVisible(false);
        }
        setAnnouncementPosts(docsArray);
      })
      .catch((error) => message.error(error.message));
  }, [numToGetList]);

  return (
    <Con>
      <button
        onClick={() =>
          history.push({
            pathname: `/board/announcement`,
            state: {
              pageName: "create",
            },
          })
        }
      >
        글 작성
      </button>
      <Container>
        <BoardContainer>
          {announcementPosts.length === 0 ? (
            <LoadingSmall />
          ) : (
            <>
              {announcementPosts.map((item, idx) => (
                <BoardChildWrapper
                style={announcementPosts.length-1 === idx ? {} : {borderBottom:'2.5px solid #f1f1f1'}}
                  key={`${idx}ANNOUNCEMENT_PREVIEW`}
                  onClick={() =>
                    history.push({
                      pathname: `/board/announcement`,
                      state: {
                        pageName: "read",
                        docItem: item,
                      },
                    })
                  }
                >
                  <TitleTextBox>
                    <BoardChildTitle>{item.title}</BoardChildTitle>
                    <BoardText>{item.content}</BoardText>
                    {timeConverter(item.timestampMillis)}
                  </TitleTextBox>
                  {!!item.imgArray[0] && (
                    <BoardImg
                      src={item.imgArray[0]}
                      alt={`${idx}IMAGE_ANNOUNCE`}
                    />
                  )}
                </BoardChildWrapper>
              ))}
            </>
          )}
        </BoardContainer>
      </Container>
      {showMoreButtonVisible && (
        <MoreButton onClick={() => setNumToGetList((num) => num + 5)}>
          더보기
        </MoreButton>
      )}
    </Con>
  );
};
export default ListView;
