import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { departMajorApi } from "../../../api";
import LoadingSmall from "../../SmallComponents/LoadingSmall";
import message from "antd/lib/message";
import SelectSubjectModal from "./Modal";
import { horseIcons, readDoc } from "../../../assets/Resources";
import { subjectDicts } from "../../../assets/Dicts";

const Container = styled.div`
  width: 100%;
  padding: 10px 0 25px;
`;
const SubjectSelectArea = styled.div`
  width: 93%;
  background-color: white;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  padding: 6px 15px;
  display: flex;
  align-items: center;
  margin: 5px auto;
  margin-top: 5px;
`;
const SubjectSelectImg = styled.img`
  width: 26px;
  margin-right: 9px;
`;
const SubjectSelectText = styled.div`
  color: #646464;
`;
const BoardContainer = styled.div`
  width: 93%;
  min-height: 80vh;
  border-radius: 15px;
  margin: 15px auto;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
`;
const BoardChildWrapper = styled.div`
  padding: 12px;
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
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const MoreButton = styled.div`
  width: 93%;
  margin: 0 auto;
  margin-bottom: 10px;
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

  const [uploading, setUploading] = useState(false);

  const [noMoreDocs, setNoMoreDocs] = useState(false);
  useEffect(() => {
    setPosts([]);
    departMajorApi
      .getLists({ size: 10, subject: subjectSelected })
      .then((docsArray) => {
        setPosts(docsArray);
        if (docsArray.length < 10) {
          setNoMoreDocs(true);
        }
      })
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
                style={subjectSelected === "NONE" ? { marginLeft: "10px" } : {}}
              >
                {subjectDicts[subjectSelected].name}
              </SubjectSelectText>
            </>
          )}
        </SubjectSelectArea>
        <BoardContainer>
          {posts.length === 0 ? (
            <LoadingSmall />
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
                    style={{ width: "13px", marginRight: " 4px" }}
                  />
                  <div style={{ fontSize: "13px" }}>{item.likeCount}</div>
                  <div style={{ margin: " 0px 2px 0px 4px" }}>|</div>
                  <img
                    src={readDoc.speech_bubble}
                    alt="말풍선 아이콘"
                    style={{ width: "13px", margin: "0px 4px" }}
                  />
                  <div style={{ fontSize: "13px" }}>{item.commentCount}</div>
                </BoardChildMetaText>
              </BoardChildWrapper>
            ))
          )}
        </BoardContainer>
        {!noMoreDocs && (
          <MoreButton
            onClick={async () => {
              try {
                if (uploading) return;
                setUploading(true);
                message.loading("더 불러오는 중..");
                let additionalDocsArray = await departMajorApi.getLists({
                  size: 10,
                  startAfterDocId: posts[posts.length - 1].docId,
                  subject: subjectSelected,
                });
                if (additionalDocsArray.length < 10) {
                  setNoMoreDocs(true);
                }
                setPosts([...posts, ...additionalDocsArray]);
                message.destroy();
              } catch (err) {
                message.error(err.message);
              } finally {
                setUploading(false);
              }
            }}
          >
            더보기
          </MoreButton>
        )}
      </Container>
    </>
  );
};
export default ChangedBoard;
