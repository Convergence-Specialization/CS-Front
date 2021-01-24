import React, { useState } from "react";
import styled from "styled-components";
import { boardApi } from "../../../api";
import { auth } from "../../../firebase";

const Container = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const InputBox = styled.input`
  margin: 20px 0;
`;
const SubmitButton = styled.div`
  width: 100px;
  height: 50px;
  border: 1px solid black;
`;

const Create = () => {
  const [text, setText] = useState("");

  return (
    <Container>
      <div>제목은 그냥 강제로 정함</div>
      <InputBox
        placeholder="글 내용 작성"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <SubmitButton
        onClick={async () => {
          let resultObject = await boardApi.departMajor.create("강제", text);
          alert(resultObject.result);
          setText("");
        }}>
        저장
      </SubmitButton>
    </Container>
  );
};

export default Create;
