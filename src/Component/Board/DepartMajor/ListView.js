import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { departMajorApi } from "../../../api";

import GoUp from "../../SmallComponents/GoUp";
import LoadingComponent from "../../SmallComponents/Loading";
import message from "antd/lib/message";
import SelectSubjectModal from "./Modal";
import { mainPageIcons, horseIcons, readDoc } from "../../../assets/Resources";
import { subjectDicts } from "../../../assets/Dicts";

let a = 5;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 90px;
  font-weight: bold;
  width: 72%;
  font-size: 16px;
  margin-bottom: 10px;
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
const ChangedBoard = () => {
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  const [subjectSelected, setSubjectSelected] = useState("");
  const [subjectModalVisible, setSubjectModalVisible] = useState(false);
  useEffect(() => {
    // TODO: API에서 더보기 구현.
    setPosts([]);
    departMajorApi
      .getLists({ size: 10, subject: subjectSelected })
      .then((docsArray) => setPosts(docsArray))
      .catch((error) => console.log(error.message));
  }, [subjectSelected]);
  return (
    <>
      <SelectSubjectModal
        visible={subjectModalVisible}
        onClose={(tempChecked) => {
          setSubjectSelected(tempChecked);
          setSubjectModalVisible(false);
        }}
        subjectSelected={subjectSelected}
        setSubjectSelected={setSubjectSelected}
        isListView
      />
      <Container>
        <SubjectSelectArea onClick={() => setSubjectModalVisible(true)}>
          <SubjectSelectImg src={horseIcons.newhorse} alt="말머리" />
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
          }}>
          더보기
        </MoreButton>
        <GoUp />
      </Container>
    </>
  );
};
export default ChangedBoard;
