import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { readDoc } from "../../../assets/Resources";
import { useHistory } from "react-router-dom";
import message from "antd/lib/message";
import { userApi } from "../../../api";
import { subjectDicts } from "../../../assets/Dicts";
import LoadingSmall from "../../SmallComponents/LoadingSmall";
import { loginFunctions } from "../../Watchers";

const Text = styled.div`
  font-weight: bold;
  font-size: 18px;
  padding-left: 25px;
  padding-top: 20px;
`;
const SubjectSelectImg = styled.img`
  width: 26px;
  margin-right: 9px;
`;
const BoardContainer = styled.div`
  width: 93%;
  border-radius: 15px;
  margin: 20px auto;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
  min-height: 30vh;
`;
const BoardChildWrapper = styled.div`
  padding: 12px 12px;
  font-size: 15px;
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
  padding: 110px 10px 10px 10px;
  margin: 10px auto;
  font-size: 15px;
  text-align: center;
  color: #848484;
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
const DepartMajorListView = () => {
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
        boardName: "departmajor",
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
      <Text>전과 게시판</Text>
      <BoardContainer>
        {loading ? (
          <LoadingSmall />
        ) : posts.length === 0 ? (
          <BlankPost>※ 작성한 글이 없습니다 ※</BlankPost>
        ) : (
          posts.map((item, idx) => (
            <BoardChildWrapper
              style={
                posts.length - 1 === idx
                  ? {}
                  : { borderBottom: "2.5px solid #f1f1f1" }
              }
              key={idx}
              onClick={() =>
                history.push({
                  pathname: `/board/departmajor`,
                  state: {
                    pageName: "read",
                    docItem: item,
                  },
                })
              }
            >
              <BoardChildTitleWrapper>
                {item.subject !== "NONE" && (
                  <SubjectSelectImg
                    style={{ width: "23px", marginTop: "-5px" }}
                    src={subjectDicts[item.subject].img}
                    alt={"asdf"}
                  />
                )}
                {item.subject === "NONE" && (
                  <BoardChildTitle style={{ width: "80%" }}>
                    {item.title}
                  </BoardChildTitle>
                )}
                {item.subject !== "NONE" && (
                  <BoardChildTitle style={{ width: "72%" }}>
                    {item.title}
                  </BoardChildTitle>
                )}
              </BoardChildTitleWrapper>
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
  );
};

export default DepartMajorListView;
