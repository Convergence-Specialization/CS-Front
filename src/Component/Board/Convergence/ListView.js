//import React from "react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { departMajorApi } from "../../../api";

import GoUp from "../../SmallComponents/GoUp";
import LoadingComponent from "../../SmallComponents/Loading";
import message from "antd/lib/message";
import { nameList, nameListLength } from "../Convergence/NameList";
import { horseIcons, readDoc, mainPageIcons } from "../../../assets/Resources";
let a = 5;
const Container = styled.div`
  width: 100%;
  padding: 20px 0;
  padding-top: 0;
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
const BoardChildTitleWrapper = styled.div`
  /* display: flex;
  align-items: center; */
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
const BoardChildContentWrapper = styled.div`
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
const IconImg = styled.img`
  width: 23px;
  margin-right: 13px;
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
  useEffect(() => {
    // TODO: API에서 더보기 구현.
    departMajorApi
      .getLists({ size: 10 })
      .then((docsArray) => setPosts(docsArray))
      .catch((error) => message.error(error.message));
  }, []);
  return (
    <>
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
                    state: {
                      pageName: "read",
                      docItem: item,
                    },
                  })
                }
              >
                <BoardChildTitleWrapper>
                  <BoardChildTitle style={{ width: "80%" }}>
                    <img
                      src={horseIcons.newhorse}
                      alt="융슝이"
                      style={{ width: "25px", marginRight: "5px" }}
                    ></img>
                    {nameList[Math.floor(Math.random() * nameListLength)]}
                  </BoardChildTitle>
                </BoardChildTitleWrapper>
                <BoardChildContent>{item.content}</BoardChildContent>
                <BoardChildTimeText>
                  {item.timestampDistance} 전
                </BoardChildTimeText>
                <BoardChildMetaText>
                  <img
                    src={mainPageIcons.heart}
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
        <MoreButton
          onClick={() => {
            departMajorApi
              .getLists({ size: 10 + a })
              .then((docsArray) => setPosts(docsArray))
              .catch((error) => message.error(error.message));
            a = a + 5;
          }}
        >
          더보기
        </MoreButton>
        <GoUp />
      </Container>
    </>
  );
};
export default ConvergenceListView;
// TODO: 미만이 들어가있는 것들은 모두 방금으로 표기.
