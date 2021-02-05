import { message } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { departMajorApi } from "../api";
import { Icons, horseIcons } from "../assets/Resources";
import Navbar from "../Component/Navbar";
const Container = styled.div`
  padding: 40px 0px 25px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
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
  font-size:23px;
  font-weight: bold;
  margin:100px 0px 10px 40px;
  @media (max-width: 430px) {
    font-size:14px;
    margin:50px 0px 10px 20px;
  }
`;
const Img = styled.img`
  width: 20%;
  border-radius:50%;
  position:absolute;
  right: 80px;
  top: 70px;
  @media (max-width: 430px) {
    width: 20%;
  border-radius:50%;
  position:absolute;
  right: 15px;
  top: 60px;
  }
`;

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [uploading, setUploading] = useState(false);
  const [subjectSelected] = useState("NONE");

  const history = useHistory();
  return (
    <>
     <Navbar isRight1Disabled History IconRight2= {Icons.Home} Navname="건의사항" />
      <Text>수정할 점과 건의사항을 자유롭게 적어주세요!</Text>
      <Img src={horseIcons.normal}/>
      <Container>
        <TitleInput
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ContentTextArea
          placeholder="건의사항을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <ButtonWrapper>
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
            작성하기
          </Button>
        </ButtonWrapper>
      </Container>
    </>
  );
};
export default Create;
