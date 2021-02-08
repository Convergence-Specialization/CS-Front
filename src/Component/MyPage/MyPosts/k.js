import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { departMajorApi } from "../../../api";
import LoadingComponent from "../../SmallComponents/Loading";
import { message } from "antd";
import { subjectDicts } from "../../../assets/Dicts";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  padding: 20px 0;
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
  padding: 12px;
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
  text-align: right;
`;

const ChangedBoard = () => {
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
                <BoardChildMetaText>{`댓글 ${item.commentCount} | 공감 ${item.likeCount}`}</BoardChildMetaText>
              </BoardChildWrapper>
            ))
          )}
        </BoardContainer>
      </Container>
    </>
  );
};
export default ChangedBoard;
