import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { convergenceApi } from "../../../api";
import LoadingSmall from "../../SmallComponents/LoadingSmall";
import message from "antd/lib/message";
import { horseIcons, readDoc } from "../../../assets/Resources";

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
  margin-bottom: 8px;
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
const ConvergenceListView = () => {
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [noMoreDocs, setNoMoreDocs] = useState(false);

  useEffect(() => {
    convergenceApi
      .getLists({ size: 10 })
      .then((docsArray) => {
        setPosts(docsArray);
        if (docsArray.length < 10) {
          setNoMoreDocs(true);
        }
      })
      .catch((error) => message.error(error.message));
  }, []);
  return (
    <>
      <Container>
        <BoardContainer>
          {posts.length === 0 ? (
            <LoadingSmall />
          ) : (
            posts.map((item, idx) => (
              <BoardChildWrapper
                style={posts.length-1 === idx ? {} : {borderBottom:'2.5px solid #f1f1f1'}}
                key={idx}
                onClick={() =>
                  history.push({
                    pathname: `/board/convergence`,
                    state: {
                      pageName: "read",
                      docItem: item,
                    },
                  })
                }>
              
                <BoardChildTitle style={{ width: "80%" }}>
                  <img
                    src={horseIcons.newhorse}
                    alt="융슝이"
                    style={{ width: "25px", marginRight: "5px" }}></img>
                  {item.nickname}
                </BoardChildTitle>
                <BoardChildContent>{item.content}</BoardChildContent>
                <BoardChildTimeText>
                  {item.timestampDistance} 전
                </BoardChildTimeText>
                <BoardChildMetaText>
                  <img
                    src={readDoc.heart_fill}
                    alt="하트 아이콘"
                    style={{ width: "18px", marginRight: " 4px" }}
                  />
                  <div>{item.likeCount}</div>
                  <div style={{ margin: " 0px 2px 0px 4px" }}>|</div>
                  <img
                    src={readDoc.speech_bubble}
                    alt="말풍선 아이콘"
                    style={{ width: "18px", margin: "0px 4px" }}
                  />
                  <div>{item.commentCount}</div>
                </BoardChildMetaText>
              </BoardChildWrapper>
            ))
          )}
        </BoardContainer>
        {!noMoreDocs && (
          <MoreButton
            onClick={async () => {
              try {
                if (uploading) return;
                setUploading(true);
                message.loading("더 불러오는 중..");
                let additionalDocsArray = await convergenceApi.getLists({
                  size: 10,
                  startAfterDocId: posts[posts.length - 1].docId,
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
export default ConvergenceListView;
