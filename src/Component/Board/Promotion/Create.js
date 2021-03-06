import React, { useState } from "react";
import styled from "styled-components";
import message from "antd/lib/message";
import { useHistory } from "react-router-dom";
import { storageService } from "../../../firebase";
import uuid from "uuid-random";
import { loginFunctions } from "../../Watchers";
import LoadingSmall from "../../SmallComponents/LoadingSmall";
import { promotionApi } from "../../../api";

const Container = styled.div`
  padding: 15px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f1f1;
`;
const InputTitle = styled.input`
  display: flex;
  width: 93%;
  padding: 15px 15px;
  border-radius: 20px;
  outline: none;
  border: none;
  font-size: 20px;
  margin-bottom: 15px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  @media (max-width: 430px) {
    font-size: 15px;
    padding: 14px 15px;
    border-radius: 17px;
  }
`;
const InputImg = styled.div`
  width: 93%;
  padding: 13px 15px;
  border-radius: 20px;
  background-color: white;
  color: #757575;
  margin-bottom: 15px;
  font-size: 17px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  @media (max-width: 430px) {
    font-size: 13px;
  }
`;
const ContentTextArea = styled.textarea`
  padding: 10px 15px;
  width: 93%;
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
const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const PreviewImg = styled.img`
  align-self: flex-start;
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

const CustomInputLabel = styled.label`
  cursor: pointer;
`;

const CustomInput = styled.input`
  display: none;
`;

const LoadingDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  padding: 15px 15px;
  border-radius: 20px;
  outline: none;
  border: none;
  background-color: white;
  font-size: 20px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  margin: 15px 0;
`;

const Create = () => {
  const [uploading, setUploading] = useState(false);
  const history = useHistory();

  const [attachmentArray, setAttachmentArray] = useState([]);

  const [uploadingStatus, setUploadingStatus] = useState("");

  // Input에서 파일 선택되면 호출 됨.
  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    if (!theFile) return;
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachmentArray([...attachmentArray, result]);
    };
    reader.readAsDataURL(theFile);
  };

  return (
    <Container>
      <CustomInput
        type="file"
        id="fileInput"
        accept="image/*"
        onChange={onFileChange}
      />
      {uploadingStatus === "" && (
        <InputTitle placeholder="제목" id="titleInput" />
      )}
      {uploadingStatus === "" && (
        <InputTitle
          placeholder="기간을 입력하세요. 2020.10.20 ~ 2020.11.01"
          id="periodInput"
        />
      )}
      {uploadingStatus === "" && (
        <InputImg>
          <ImgText>
            <div>첨부할 사진을 선택하세요</div>
            <CustomInputLabel htmlFor="fileInput">추가</CustomInputLabel>
          </ImgText>
          <ImgWrapper>
            {attachmentArray.map((item, idx) => (
              <PreviewImg
                key={`${idx}PREVIEW_IMAGE`}
                src={item}
                alt={`미리보기 이미지 ${idx}`}
                onClick={() => {
                  if (window.confirm("이 이미지를 제외할까요?")) {
                    let tempArray = [...attachmentArray];
                    tempArray.splice(idx, 1);
                    setAttachmentArray(tempArray);
                  }
                }}
              />
            ))}
          </ImgWrapper>
        </InputImg>
      )}
      {uploadingStatus === "" ? (
        <ContentTextArea placeholder="내용을 입력하세요" id="contentTextarea" />
      ) : (
        <LoadingDisplayContainer>
          <div>{uploadingStatus}</div>
          <LoadingSmall />
        </LoadingDisplayContainer>
      )}
      <ButtonWrapper>
        <Button onClick={() => history.goBack()}>취소</Button>
        <Button
          onClick={async () => {
            if (uploading) return;
            if (
              document.getElementById("titleInput").value === "" ||
              document.getElementById("contentTextarea").value === ""
            ) {
              message.destroy();
              message.error("제목 또는 글 내용을 작성해주세요.");
              return;
            }
            setUploading(true);
            let reqBody = {
              title: document.getElementById("titleInput").value,
              imgArray: [],
              content: document.getElementById("contentTextarea").value,
              eventPeriod: document.getElementById("periodInput").value,
            };
            let userInfo = loginFunctions.getUserInfo();
            let uploadingIndex = 1;
            setUploadingStatus(
              `이미지를 업로드하는 중.. (${uploadingIndex}/${attachmentArray.length})`
            );
            let targetImgUrlArray = await Promise.all(
              attachmentArray.map(async (item, _idx) => {
                try {
                  const attachmentRef = storageService
                    .ref()
                    .child(`${userInfo.uid}/${uuid()}`);
                  const response = await attachmentRef.putString(
                    item,
                    "data_url"
                  );
                  let url = await response.ref.getDownloadURL();
                  setUploadingStatus(
                    `이미지를 업로드하는 중.. (${++uploadingIndex}/${
                      attachmentArray.length
                    })`
                  );
                  return url;
                } catch (err) {
                  message.error(err.message);
                }
              })
            );
            setUploadingStatus("홍보게시글을 등록하는 중..");
            reqBody.imgArray = targetImgUrlArray;
            try {
              await promotionApi.create(reqBody);
              message.success("홍보게시글이 등록되었습니다");
              history.goBack();
            } catch (err) {
              setUploadingStatus(
                `홍보게시글을 등록하는 중에 오류가 났습니다.\n${err.message}`
              );
            }
          }}
        >
          완료
        </Button>
      </ButtonWrapper>
    </Container>
  );
};
export default Create;
