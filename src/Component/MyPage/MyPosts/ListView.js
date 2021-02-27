import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { readDoc } from "../../../assets/Resources";
import { useHistory } from "react-router-dom";
import message from "antd/lib/message";
import { userApi } from "../../../api";
import { subjectDicts } from "../../../assets/Dicts";
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
const Button = styled.div`
  text-align: center;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #d4e6fb;
  cursor: pointer;
  @media (max-width: 430px) {
    font-size: 12px;
  }
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
  min-height: 20vh;
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
  padding: 60px 10px;
  margin: 10px auto;
  font-weight: 300;
  font-size: 14px;
  text-align: center;
  color: #848484;
`;
const MyPost = () => {
  const history = useHistory();
  const [convergencePosts, setConvergencePosts] = useState([]);
  const [departmajorPosts, setDepartmajorPosts] = useState([]);

  const [loadingConvergence, setLoadingConvergence] = useState(true);
  const [loadingDepartMajor, setLoadingDepartMajor] = useState(true);

  useEffect(() => {
    const userInfo = loginFunctions.getUserInfo();
    if (!userInfo) return;
    userApi
      .getMyPosts({
        boardName: "convergence",
        size: 4,
        uid: userInfo.uid,
      })
      .then((docsArray) => setConvergencePosts(docsArray))
      .catch((error) => message.error(error.message))
      .finally(() => setLoadingConvergence(false));
    userApi
      .getMyPosts({
        boardName: "departmajor",
        size: 4,
        uid: userInfo.uid,
      })
      .then((docsArray) => setDepartmajorPosts(docsArray))
      .catch((error) => message.error(error.message))
      .finally(() => setLoadingDepartMajor(false));
  }, []);
  return (
    <>
      <BoardContainer>
        <Box>
          <Text>융특 게시판</Text>
          <Button
            onClick={() => {
              history.push({
                pathname: `myposts`,
                state: { pageName: "convergencelistview" },
              });
            }}>
            더보기
          </Button>
        </Box>
        {loadingConvergence ? (
          <LoadingSmall />
        ) : convergencePosts.length === 0 ? (
          <BlankPost>※ 작성한 글이 없습니다 ※</BlankPost>
        ) : (
          convergencePosts.map((item, idx) => (
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
              <BoardChildTitleWrapper>
                <BoardChildTitle style={{ width: "80%" }}>
                  {item.content}
                </BoardChildTitle>
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
      <BoardContainer style={{ marginBottom: "40px" }}>
        <Box>
          <Text>전과 게시판</Text>
          <Button
            onClick={() => {
              history.push({
                pathname: `myposts`,
                state: { pageName: "departmajorlistview" },
              });
            }}>
            더보기
          </Button>
        </Box>
        {loadingDepartMajor ? (
          <LoadingSmall />
        ) : departmajorPosts.length === 0 ? (
          <BlankPost>※ 작성한 글이 없습니다 ※</BlankPost>
        ) : (
          departmajorPosts.map((item, idx) => (
            <BoardChildWrapper
              key={idx}
              onClick={() =>
                history.push({
                  pathname: `/board/departmajor`,
                  state: {
                    pageName: "read",
                    docItem: item,
                  },
                })
              }>
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
    </>
  );
};

export default MyPost;
