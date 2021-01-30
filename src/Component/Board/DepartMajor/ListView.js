import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { departMajorApi } from "../../../api";

import ko from "date-fns/locale/ko";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import GoUp from "../../SmallComponents/GoUp";
import LoadingComponent from "../../SmallComponents/Loading";
import { message } from "antd";

const Container = styled.div`
  width: 100%;
  padding-bottom: 20px;
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
  padding: 12px;
  font-size: 15px;
  border-bottom: 2.5px solid #f1f1f1;
  position: relative;
`;
const BoardChildTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
`;
const BoardChildContent = styled.div`
  font-size: 15px;
  width: 95%;
  white-space: pre-wrap;
`;
const BoardChildTimeText = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;
const BoardChildMetaText = styled.div`
  text-align: right;
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

const ChangedBoard = () => {
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    departMajorApi
      .getLists({ size: 10 })
      .then((res) => setPosts(res.data.docsArray))
      .catch((error) => message.error(error.message));
  }, []);
  return (
    <Container>
      <BoardContainer>
        {posts.length === 0 ? (
          <LoadingComponent />
        ) : (
          posts.map((item, idx) => (
            <BoardChildWrapper
              key={idx}
              onClick={() =>
                history.push({
                  pathname: `/board/departmajor`,
                  state: { pageName: "read" },
                })
              }>
              <BoardChildTitle>{item.title}</BoardChildTitle>
              <BoardChildContent>{item.content}</BoardChildContent>
              <BoardChildTimeText>
                {formatDistanceToNow(item.timestamp, { locale: ko }).replace(
                  "약 ",
                  ""
                )}{" "}
                전
              </BoardChildTimeText>
              <BoardChildMetaText>{`댓글 ${item.commentCount} | 공감 ${item.likeCount}`}</BoardChildMetaText>
            </BoardChildWrapper>
          ))
        )}
      </BoardContainer>
      <MoreButton onClick={() => {}}>더보기</MoreButton>
      <GoUp />
    </Container>
  );
};
export default ChangedBoard;
