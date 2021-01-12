import React from "react";
import styled from "styled-components";

const Con = styled.div`
  width: 100%;
  background-color: #fafafa;
`;

const Wrap = styled.div`
  width: 90%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const Jrap = styled.div`
  width: 90%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
`;
const AnnounceCon = styled.div`
  margin: 40px auto;
  padding: 15px;
  width: 30%;
  height: 300px;
  background-color: white;
`;
const MoveCon = styled.div`
  margin: 30px auto;
  padding: 15px;
  width: 90%;
  height: 300px;
  background-color: white;
`;
const TextBox = styled.div`
   {
    font-size: 18px;
    margin: 0px 0px;
    padding:10px;
    background-color: white;
    border: solid;
    border-width: 0px 1px 1px 1px;
  }
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 1000;
  padding: 10px;
  background-color: #cadefc;
  border-radius  :5px 5px 0px 0px;
  border: solid;
  border-width: 1px 1px;
`;
const Board = () => {
  return (
    <Con>
      <Wrap>
        <AnnounceCon>
          <Title>20게시판</Title>
          <TextBox>안녕</TextBox>
          <TextBox>안녕</TextBox>
          <TextBox>안녕</TextBox>
        </AnnounceCon>
        <AnnounceCon>
          <Title>21게시판</Title>
          <TextBox>안녕</TextBox>
          <TextBox>안녕</TextBox>
          <TextBox>안녕</TextBox>
        </AnnounceCon>
      </Wrap>
      <Jrap>
        <MoveCon>
          <Title>21게시판</Title>
          <TextBox>안녕</TextBox>
          <TextBox>안녕</TextBox>
          <TextBox>안녕</TextBox>
        </MoveCon>
      </Jrap>
    </Con>
  );
};
export default Board;
