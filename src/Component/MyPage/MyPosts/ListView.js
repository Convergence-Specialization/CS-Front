import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mainPageIcons, horseIcons, readDoc } from "../../../assets/Resources";
import { useHistory } from "react-router-dom";
import { message } from "antd";
import { departMajorApi } from "../../../api";
import LoadingComponent from "../../SmallComponents/Loading";
import { subjectDicts } from "../../../assets/Dicts";

const Box = styled.div`
  border-bottom: 2px solid #aca9a9;
  display: flex;
  padding: 10px 0px;
  width: 90%;
  margin: 0 auto;
  font-size: 15px;
  position: relative;
  align-items: center;
  justify-content: space-between;
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
  width: 95%;
  min-height: 80vh;
  border-radius: 15px;
  margin: 20px auto;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
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
`;

const MyPost = () => {
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // TODO: API에서 더보기 구현.
    departMajorApi
      .getLists({ size: 3 })
      .then((docsArray) => setPosts(docsArray))
      .catch((error) => message.error(error.message));
  }, []);
  return (
    <>
      <BoardContainer>
        <Box>
          <Text>융특 게시판</Text>
          <Button>더보기</Button>
        </Box>
        {posts.length === 0 ? (
          <LoadingComponent />
        ) : (
          posts.map((item, idx) => (
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
                  src={mainPageIcons.heart}
                  alt="하트 아이콘"
                  style={{ width: "15px", marginRight: " 2px" }}
                />
                <div>{item.commentCount}</div>
                <img
                  src={readDoc.speech_bubble}
                  alt="말풍선 아이콘"
                  style={{ width: "15px", margin: "0px 4px" }}
                />
                <div>{item.likeCount}</div>
              </BoardChildMetaText>
            </BoardChildWrapper>
          ))
        )}
      </BoardContainer>
      <BoardContainer>
        <Box>
          <Text>전과 게시판</Text>
          <Button>더보기</Button>
        </Box>
        {posts.length === 0 ? (
          <LoadingComponent />
        ) : (
          posts.map((item, idx) => (
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
                  src={mainPageIcons.heart}
                  alt="하트 아이콘"
                  style={{ width: "15px", marginRight: " 2px" }}
                />
                <div>{item.commentCount}</div>
                <img
                  src={readDoc.speech_bubble}
                  alt="말풍선 아이콘"
                  style={{ width: "15px", margin: "0px 4px" }}
                />
                <div>{item.likeCount}</div>
              </BoardChildMetaText>
            </BoardChildWrapper>
          ))
        )}
      </BoardContainer>
    </>
  );
};

export default MyPost;
