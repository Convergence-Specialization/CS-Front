import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { userApi } from "../../../api";
import LoadingSmall from "../../SmallComponents/LoadingSmall";
import message from "antd/lib/message";
import { horseIcons, readDoc } from "../../../assets/Resources";
import { loginFunctions } from "../../Watchers";
import { boardNameDict } from "../../../assets/Dicts";

const Container = styled.div`
  width: 100%;
  padding-bottom: 25px;
`;
const BoardContainer = styled.div`
  width: 93%;
  min-height: 80vh;
  border-radius: 15px;
  margin: 20px auto;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
`;
const BoardChildWrapper = styled.div`
  padding: 8px 12px;
  font-size: 15px;
  position: relative;
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
  display: flex;
  align-items: center;
`;
const BoardChildContent = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 15px;
  width: 93%;
  margin: 0px 0px 8px 2px;
`;
const BoardChildTimeText = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;
const BoardChildMetaText = styled.div`
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
const BoardText = styled.div`
  font-size: 10px;
`;
const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const IconTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 3px;
`;
const BlankPost = styled.div`
  padding: 60px 10px;
  margin: 10px auto;
  font-weight: 300;
  font-size: 14px;
  text-align: center;
  color: #848484;
`;
const SavedDocsListView = () => {
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [noMoreDocs, setNoMoreDocs] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userApi
      .getSavedLists({ size: 10, uid: loginFunctions.getUserInfo().uid })
      .then((docsArray) => {
        setPosts(docsArray);
        if (docsArray.length < 10) {
          setNoMoreDocs(true);
        }
      })
      .catch((error) => message.error(error.message))
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      <Container>
        <BoardContainer>
          {loading ? (
            <LoadingSmall />
          ) : posts.length === 0 ? (
            <BlankPost>※ 저장한 글이 없습니다 ※</BlankPost>
          ) : (
            posts.map((item, idx) =>
              item.boardName === "CONVERGENCE" ? (
                <BoardChildWrapper
                  style={
                    posts.length - 1 === idx
                      ? {}
                      : { borderBottom: "2.5px solid #f1f1f1" }
                  }
                  key={idx}
                  onClick={() =>
                    history.push({
                      pathname: `/board/${
                        boardNameDict[item.boardName].addressName
                      }`,
                      state: {
                        pageName: "read",
                        docItem: item.docItem,
                        isSave: true,
                      },
                    })
                  }>
                  <BoardChildTitle style={{ width: "80%" }}>
                    <img
                      src={horseIcons.newhorse}
                      alt="융슝이"
                      style={{ width: "25px", marginRight: "5px" }}></img>
                    {item.docItem.nickname}
                  </BoardChildTitle>
                  <BoardChildContent>{item.docItem.content}</BoardChildContent>
                  <BoardChildTimeText>
                    {item.docItem.timestampDistance} 전
                  </BoardChildTimeText>
                  <IconTextBox>
                    <BoardText>{boardNameDict[item.boardName].name}</BoardText>
                    <BoardChildMetaText>
                      <img
                        src={readDoc.heart_fill}
                        alt="하트 아이콘"
                        style={{ width: "13px", marginRight: "4px" }}
                      />
                      <div style={{ fontSize: "13px" }}>
                        {item.docItem.likeCount}
                      </div>
                      <div style={{ margin: "0px 2px 0px 4px" }}>|</div>
                      <img
                        src={readDoc.speech_bubble}
                        alt="말풍선 아이콘"
                        style={{ width: "13px", margin: "0px 4px" }}
                      />
                      <div style={{ fontSize: "13px" }}>
                        {item.docItem.commentCount}
                      </div>
                    </BoardChildMetaText>
                  </IconTextBox>
                </BoardChildWrapper>
              ) : (
                <BoardChildWrapper
                  style={
                    posts.length - 1 === idx
                      ? {}
                      : { borderBottom: "2.5px solid #f1f1f1" }
                  }
                  key={`${idx}SAVEDITEM_PREVIEW`}
                  onClick={() =>
                    history.push({
                      pathname: `/board/${
                        boardNameDict[item.boardName].addressName
                      }`,
                      state: {
                        pageName: "read",
                        docItem: item.docItem,
                        isSave: true,
                      },
                    })
                  }>
                  <BoardChildTitle style={{ width: "80%" }}>
                    <img
                      src={horseIcons.newhorse}
                      alt="융슝이"
                      style={{ width: "25px", marginRight: "5px" }}></img>
                    {item.docItem.nickname}
                  </BoardChildTitle>
                  <Title>{item.docItem.title}</Title>
                  <BoardChildContent>{item.docItem.content}</BoardChildContent>
                  <BoardChildTimeText>
                    {item.docItem.timestampDistance} 전
                  </BoardChildTimeText>
                  <IconTextBox>
                    <BoardText>{boardNameDict[item.boardName].name}</BoardText>
                    <BoardChildMetaText>
                      <img
                        src={readDoc.heart_fill}
                        alt="하트 아이콘"
                        style={{ width: "13px", marginRight: " 4px" }}
                      />
                      <div style={{ fontSize: "13px" }}>
                        {item.docItem.likeCount}
                      </div>
                      <div style={{ margin: " 0px 2px 0px 4px" }}>|</div>
                      <img
                        src={readDoc.speech_bubble}
                        alt="말풍선 아이콘"
                        style={{ width: "13px", margin: "0px 4px" }}
                      />
                      <div style={{ fontSize: "13px" }}>
                        {item.docItem.commentCount}
                      </div>
                    </BoardChildMetaText>
                  </IconTextBox>
                </BoardChildWrapper>
              )
            )
          )}
        </BoardContainer>
        {posts.length !== 0 && !noMoreDocs && (
          <MoreButton
            onClick={async () => {
              try {
                if (uploading) return;
                setUploading(true);
                message.loading("더 불러오는 중..");
                let additionalDocsArray = await userApi.getSavedLists({
                  size: 10,
                  uid: loginFunctions.getUserInfo().uid,
                  startAfterDocId: posts[posts.length - 1].savedDocId,
                });
                if (additionalDocsArray.length < 10) {
                  setNoMoreDocs(true);
                }
                setPosts([...posts, ...additionalDocsArray]);
                message.destroy();
              } catch (err) {
                message.error(err.message);
              } finally {
                setUploading(false);
              }
            }}>
            더보기
          </MoreButton>
        )}
      </Container>
    </>
  );
};
export default SavedDocsListView;
