import React, { useState } from "react";
import styled from "styled-components";
import { events } from "../../../../assets/Resources";
import message from "antd/lib/message";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  padding: 15px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f1f1;
`;
const InputTitle = styled.input`
  display: flex;
  width: 95%;
  padding: 15px 15px;
  border-radius: 20px;
  outline: none;
  border: none;
  font-size: 20px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  @media (max-width: 430px) {
    font-size: 15px;
    padding: 14px 15px;
    border-radius: 17px;
  }
`;
const InputImg = styled.div`
  width: 95%;
  padding: 13px 15px;
  border-radius: 20px;
  margin: 10px;
  background-color: white;
  color: #757575;

  font-size: 17px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  @media (max-width: 430px) {
    font-size: 13px;
  }
`;
const ContentTextArea = styled.textarea`
  padding: 10px 15px;
  width: 95%;
  min-height: 60vh;
  border: none;
  font-size: 17px;
  outline: none;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  line-height: 1.5;
  margin-bottom: 15px;
  ::placeholder {
    font-size: 13px;
  }
`;
const Img = styled.img`
  width: 18%;
  margin: 10px 10px 0px 10px;
`;
const ButtonWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ImgText = styled.div`
  display: flex;
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
  const [content] = useState("");
  const [uploading, setUploading] = useState(false);
  const history = useHistory();
  return (
    <>
      <Container>
        <InputTitle
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <InputImg>
          <ImgText>
            <div>첨부할 사진을 선택하세요</div>
            <div style={{ cursor: "pointer" }}>추가</div>
          </ImgText>
          <Img src={events.friday} alt="말머리" />
          <Img src={events.friday} alt="말머리" />
          <Img src={events.friday} alt="말머리" />
          <Img src={events.friday} alt="말머리" />
        </InputImg>
        <ContentTextArea placeholder="내용을 입력하세요" />
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
