import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { departMajorApi } from "../api";
import LoadingComponent from "./SmallComponents/Loading";
import message from "antd/lib/message";
import { subjectDicts } from "../assets/Dicts";

let a = 0;
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
  margin: 0px auto 20px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
`;
const BoardChildWrapper = styled.div`
  padding: 12px 0px;
  width: 90%;
  font-size: 15px;
  margin: 0 auto;
  border-bottom: 2.5px solid #f1f1f1;
  position: relative;
`;
const BoardChildTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Text = styled.div`
  margin: 50px 0px 10px 40px;
  font-weight: bold;
  font-size: 20px;
  @media (max-width: 430px) {
    margin: 30px 0px 10px 30px;
    font-size: 18px;
  }
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
  @media (max-width: 430px) {
    font-size: 14px;
  }
`;

const BoardChildContent = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 15px;
  width: 93%;
  margin-bottom: 8px;
  @media (max-width: 430px) {
    font-size: 13px;
  }
`;

const NotificationsPage = () => {
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  const [ readOpened] = useState(false);
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
      <Text>읽지 않음</Text>
        <BoardContainer>
          {posts.length === 0 ? (
            <LoadingComponent />
          ) : (
            posts.map((item, idx) => (
              <BoardChildWrapper
                key={idx}
                onClick={() => {
                  history.push({
                    pathname: `/board/departmajor`,
                    state: {
                      pageName: "read",
                      docItem: item,
                    },
                  });
                  readOpened(true);
                }}
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
              </BoardChildWrapper>
            ))
          )}
        </BoardContainer>
        <Text>읽음</Text>
        <BoardContainer>
          {posts.length === 0 ? (
            <LoadingComponent />
          ) : (
            posts.map((item, idx) => (
              <BoardChildWrapper
                key={idx}
                onClick={() => {
                  history.push({
                    pathname: `/board/departmajor`,
                    state: {
                      pageName: "read",
                      docItem: item,
                    },
                  });
                  readOpened(true);
                }}
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
              </BoardChildWrapper>
            ))
          )}
        </BoardContainer>
      </Container>
    </>
  );
};
export default NotificationsPage;
