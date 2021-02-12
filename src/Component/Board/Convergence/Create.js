import styled from "styled-components";
import { message } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {departMajorApi} from "../../../api";
// TODO: convergenceApi생성 후 : departMajarApi -> convergenceApi로 수정
//import { convergenceApi } from "../../../api";

const Container = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f1f1;
`;
const ContentTextArea = styled.textarea`
  padding: 10px 15px;
  width: 90%;
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
  const [content, setContent] = useState("");
  const [uploading, setUploading] = useState(false);

  const history = useHistory();
  return (
    <>
      <Container>
        <ContentTextArea
          placeholder={`여기를 눌러서 글을 작성하실 수 있습니다.

게시물 작성 전에 커뮤니티 이용 규칙 전문을 반드시 확인하시기 바랍니다. 이용규칙을 위반한 경우 작성한 게시글이 삭제되거나, 글쓰기 제한 등의 제재가 가해질 수 있습니다.

[융특 슝 이용 규칙]
- 정치·사회 관련 행위 금지
- 홍보 및 판매 관련 행위 금지
- 범죄, 불법 행위등 법령을 위반하는 행위 금지
- 음란물, 성적 수치심을 유발하는 행위 금지
- 타인의 개인정보가 포함된 게시물 게시 금지
- 특정인이나 단체·지역을 비방하는 행위 금지
- 욕설, 자살, 폭력, 혐오가 포함된 게시물 게시 금지


`}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <ButtonWrapper>
          <Button onClick={() => history.goBack()}>취소</Button>
          <Button
            onClick={() => {
              if (uploading) return;
              if (content === "") {
                message.error("글 내용을 작성해주세요.");
                return;
              }
              // TODO: login 상태에서 새로운 토큰을 가져오는게 가능하다!! 이거로 하자.
              setUploading(true);
              message.loading("업로드 중...");
              const requestBody = {
                content,
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
