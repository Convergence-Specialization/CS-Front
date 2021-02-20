import message from "antd/lib/message";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { globalApi } from "../../api";
import { horseIcons } from "../../assets/Resources";

const Container = styled.div`
  padding: 40px 0px 25px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin: 10px 20px 0px 20px;
  border-radius: 15px;
  @media (max-width: 430px) {
    margin: 10px 10px 0px 10px;
    padding: 30px 0px 15px 0px;
  }
`;
const TitleInput = styled.input`
  width: 90%;
  padding: 20px 25px;
  border-radius: 15px;
  outline: none;
  border: none;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  margin-bottom: 10px;
  background-color: #dff1fb;
  ::placeholder {
    font-size: 15px;
    color: #646464;
    @media (max-width: 430px) {
      font-size: 12px;
    }
  }
  @media (max-width: 430px) {
    padding: 15px 20px;
  }
`;

const ContentTextArea = styled.textarea`
  padding: 20px 25px;
  width: 90%;
  min-height: 60vh;
  border: none;
  background-color: #dff1fb;
  outline: none;
  border-radius: 15px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  line-height: 1.5;
  margin-bottom: 15px;
  ::placeholder {
    font-size: 15px;
    color: #646464;
    @media (max-width: 430px) {
      font-size: 12px;
    }
  }
  @media (max-width: 430px) {
    padding: 15px 20px;
    min-height: 60vh;
  }
`;
const ButtonWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.div`
  padding: 15px 25px;
  border-radius: 15px;
  background-color: #b4d5f5;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  @media (max-width: 430px) {
    padding: 10px 15px;
    font-size: 14px;
  }
`;
const Text = styled.div`
  font-size: 23px;
  font-weight: bold;
  line-height: 1.5;
  margin: 100px 0px 10px 40px;
  @media (max-width: 430px) {
    font-size: 14px;
    margin: 50px 0px 10px 20px;
  }
`;
const Img = styled.img`
  width: 20%;
  border-radius: 50%;
  position: absolute;
  right: 80px;
  top: 70px;
  @media (max-width: 430px) {
    width: 20%;
    border-radius: 50%;
    position: absolute;
    right: 15px;
    top: 60px;
  }
`;

const Suggestions = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [uploading, setUploading] = useState(false);

  const history = useHistory();
  return (
    <>
      <Text>수정할 점과 건의사항을 자유롭게 적어주세요!
      
      </Text>
      <Img src={horseIcons.newhorse} />
      <Container>
        <TitleInput
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ContentTextArea
          placeholder="건의사항을 입력해주세요.
모든 건의사항은 익명으로 처리됩니다."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <ButtonWrapper>
          <Button
            onClick={async () => {
              if (uploading) return;
              if (title === "" || content === "") {
                message.error("제목 또는 글 내용을 작성해주세요.");
                return;
              }
              setUploading(true);
              message.destroy();
              message.loading("건의사항을 보내는 중입니다..", 10);
              await globalApi
                .sendSuggestion({ title, content })
                .catch((err) => {
                  message.destroy();
                  message.error(err.message);
                });
              message.destroy();
              history.push({
                pathname: `suggestions`,
                state: { pageName: "suggested" },
              });
            }}>
            작성하기
          </Button>
        </ButtonWrapper>
      </Container>
    </>
  );
};
export default Suggestions;
