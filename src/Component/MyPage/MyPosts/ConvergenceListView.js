import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { readDoc } from "../../../assets/Resources";
import { useHistory } from "react-router-dom";
import message from "antd/lib/message";
import { departMajorApi, userApi } from "../../../api";
import { loginFunctions } from "../../Watchers";
import LoadingSmall from "../../SmallComponents/LoadingSmall";

const Box = styled.div`
  border-bottom: 2px solid #aca9a9;
  display: flex;
  padding: 15px 0px;
  width: 95%;
  margin: 0 auto;
  font-size: 15px;
  position: relative;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 430px) {
    padding: 10px 0px;
    width: 93%;
  }
`;
const Text = styled.div`
  font-weight: bold;
  font-size: 20px;
`;
const BoardContainer = styled.div`
  width: 95%;
  border-radius: 15px;
  margin: 20px auto;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
  min-height: 30vh;
`;
const BoardChildWrapper = styled.div`
  padding: 12px 12px;
  font-size: 15px;
  border-bottom: 2.5px solid #f1f1f1;
  position: relative;
`;
const BoardChildTitleWrapper = styled.div`
  display: flex;
  align-items: center;
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
  justify-content: flex-end;
  display: flex;
  align-items: center;
`;
const BlankPost = styled.div`
  padding: 70px 10px 10px 10px;
  margin: 10px auto;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: #c8c8c8;
`;
const MoreButton = styled.div`
  width: 95%;
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
  const [loading, setLoading] = useState(true);
  const [showMoreButtonVisible, setShowMoreButtonVisible] = useState(true);
  const [numToGetList, setNumToGetList] = useState(5);
  useEffect(() => {
    const userInfo = loginFunctions.getUserInfo();
    if (!userInfo) return;
    userApi
      .getMyPosts({
        boardName: "convergence",
        size: numToGetList,
        uid: userInfo.uid,
      })
      .then((docsArray) => {
        if (docsArray.length < numToGetList) {
          setShowMoreButtonVisible(false);
        }
        setPosts(docsArray);
      })
      .catch((error) => message.error(error.message))
      .finally(() => setLoading(false));
  }, [numToGetList]);
  return (
    <>
      {loading ? (
        <LoadingSmall />
      ) : (
        <>
          <BoardContainer>
            <Box>
              <Text>융특 게시판</Text>
            </Box>
            {posts.length === 0 ? (
              <BlankPost>⁕작성한 내용이 없습니다⁕</BlankPost>
            ) : (
              posts.map((item, idx) => (
                <BoardChildWrapper
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
          {showMoreButtonVisible && (
            <MoreButton onClick={() => setNumToGetList((num) => num + 5)}>
              더보기
            </MoreButton>
          )}
        </>
      )}
    </>
  );
};

export default ConvergenceListView;
