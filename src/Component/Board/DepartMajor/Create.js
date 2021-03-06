import message from "antd/lib/message";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { departMajorApi } from "../../../api";
import { subjectDicts } from "../../../assets/Dicts";
import { horseIcons } from "../../../assets/Resources";
import SelectSubjectModal from "./Modal";

const Container = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleInput = styled.input`
  width: 93%;
  padding: 14px 15px;
  border-radius: 10px;
  outline: none;
  border: none;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  margin-bottom: 10px;
`;

const SubjectSelectArea = styled.div`
  width: 93%;
  background-color: white;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  padding: 6px 15px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;
const SubjectSelectImg = styled.img`
  width: 26px;
  margin-right: 9px;
`;
const SubjectSelectText = styled.div`
  color: #646464;
`;
const ContentTextArea = styled.textarea`
  padding: 10px 15px;
  width: 93%;
  min-height: 60vh;
  border: none;
  outline: none;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  line-height: 1.5;
  margin-bottom: 15px;
  ::placeholder {
    font-size: 13px;
  }
`;
const ButtonWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.div`
  padding: 10px 40px;
  border-radius: 15px;
  background-color: #d4e6fb;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [uploading, setUploading] = useState(false);
  const [subjectSelected, setSubjectSelected] = useState("NONE");
  const [subjectModalVisible, setSubjectModalVisible] = useState(false);

  const history = useHistory();
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
      />
      <Container>
        <TitleInput
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
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
        <ContentTextArea
          placeholder={`여기를 눌러서 글을 작성하실 수 있습니다.                                       
          ㅤ                                                                                           
게시물 작성 전에 커뮤니티 이용 규칙 전문을 반드시 확인하시기 바랍니다. 이용규칙을 위반한 경우 작성한 게시글이 삭제되거나, 글쓰기 제한 등의 제재가 가해질 수 있습니다.
                                                                 
ㅤ                                                                                                                                                                           
[융특 슝 이용 규칙]                                                                
ㅤ                                                                                       
- 정치·사회 관련 행위 금지                                                                
- 홍보 및 판매 관련 행위 금지                                                                
- 범죄, 불법 행위등 법령을 위반하는 행위 금지                                       
- 음란물, 성적 수치심을 유발하는 행위 금지                                                                
- 타인의 개인정보가 포함된 게시물 게시 금지                                                                
- 특정인이나 단체·지역을 비방하는 행위 금지                                                                
- 욕설, 자살, 폭력, 혐오가 포함된 게시물 게시 금지`}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <ButtonWrapper>
          <Button onClick={() => history.goBack()}>취소</Button>
          <Button
            onClick={() => {
              if (uploading) return;
              if (title === "" || content === "") {
                message.error("제목 또는 글 내용을 작성해주세요.");
                return;
              }
              // TODO: login 상태에서 새로운 토큰을 가져오는게 가능하다!! 이거로 하자.
              setUploading(true);
              message.loading("업로드 중...");
              const requestBody = {
                title,
                content,
                subject: subjectSelected,
              };
              departMajorApi
                .create(requestBody)
                .then(() => {
                  message.destroy();
                  history.goBack();
                })
                .catch((err) => {
                  message.destroy();
                  message.error(err.message);
                  setUploading(false);
                });
            }}
          >
            완료
          </Button>
        </ButtonWrapper>
      </Container>
    </>
  );
};
export default Create;
