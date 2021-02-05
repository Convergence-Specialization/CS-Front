import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { departMajorApi } from "../../../api";

import GoUp from "../../SmallComponents/GoUp";
import LoadingComponent from "../../SmallComponents/Loading";
import { message } from "antd";
import SelectSubjectModal from "./Modal";
import { horseIcons } from "../../../assets/Resources";
import { subjectDicts } from "../../../assets/Dicts";

const Container = styled.div`
  width: 100%;
  padding: 20px 0;
`;
const SubjectSelectArea = styled.div`
  width: 95%;
  background-color: white;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  padding: 6px 15px;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
const SubjectSelectImg = styled.img`
  width: 26px;
  margin-right: 9px;
`;
const SubjectSelectText = styled.div`
  color: #646464;
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
  font-weight: bold;
  width:72%;
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
  const [subjectSelected, setSubjectSelected] = useState("");
  const [subjectModalVisible, setSubjectModalVisible] = useState(false);
  useEffect(() => {
    departMajorApi
      .getLists({ size: 10 })
      .then((docsArray) => setPosts(docsArray))
      .catch((error) => message.error(error.message));
  }, []);
  return (
    <>
      <SelectSubjectModal
        visible={subjectModalVisible}
        onClose={() => setSubjectModalVisible(false)}
        subjectSelected={subjectSelected}
        setSubjectSelected={setSubjectSelected}
        isListView
      />
      <Container>
        <SubjectSelectArea onClick={() => setSubjectModalVisible(true)}>
          <SubjectSelectImg src={horseIcons.normal} alt="말머리" />
          {subjectSelected === "" ? (
            <SubjectSelectText>▶{` `}말머리를 선택해주세요</SubjectSelectText>
          ) : (
            <>
              <SubjectSelectText>▶</SubjectSelectText>
              {subjectSelected !== "NONE" && (
                <SubjectSelectImg
                  style={{ marginLeft: "10px" }}
                  src={subjectDicts[subjectSelected].img}
                  alt="말머리 선택 아이콘"
                />
              )}
              <SubjectSelectText
                style={
                  subjectSelected === "NONE" ? { marginLeft: "10px" } : {}
                }>
                {subjectDicts[subjectSelected].name}
              </SubjectSelectText>
            </>
          )}
        </SubjectSelectArea>
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
                <BoardChildTitleWrapper>
                  {item.subject !== "NONE" && (
                    <SubjectSelectImg
                      style={{ width: "23px", marginTop: "-5px" }}
                      src={subjectDicts[item.subject].img}
                      alt={"asdf"}
                    />
                  )}
                  {item.subject === "NONE" && (
            <BoardChildTitle
            style={{ width:"80%"}}
            >{item.title}</BoardChildTitle>
          )}
          {item.subject !== "NONE" && (
            <BoardChildTitle
            style={{ width:"72%"}}
            >{item.title}</BoardChildTitle>
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
        <MoreButton onClick={() => {}}>더보기</MoreButton>
        <GoUp />
      </Container>
    </>
  );
};
export default ChangedBoard;
// TODO: 미만이 들어가있는 것들은 모두 방금으로 표기.
