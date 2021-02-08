import React from "react";
import styled from "styled-components";
import { Icons } from "../../../assets/Resources";

const Back = styled.div`
  background-color: #f5f5f5;
  padding: 10px 0px;
`;

const Board = styled.div`
  width: 90%;
  height: 250px;
  padding: 5px 15px;
  display: flex;
  margin: 10px auto;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
`;

const Box = styled.div`
  border-bottom: 2px solid #aca9a9;
  display: flex;
  padding: 5px 0px;
  align-items: center;
  justify-content: space-between;
`;
const Text = styled.div`
  font-weight: bold;
  font-size: 17px;
`;
const Button = styled.div`
  text-align: center;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #d4e6fb;
  cursor: pointer;
  @media (max-width: 430px) {
    font-size: 12px;
  }
`;
const BlankPost = styled.div`
  padding: 70px 10px 10px 10px;
  margin: 10px auto;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: #c8c8c8;
`;

const MyPost = () => {
  return (
    <>
      <Back>
        <Board>
          <Box>
            <Text>융특 게시판</Text>
            <Button>더보기</Button>
          </Box>
          <BlankPost>⁕작성한 내용이 없습니다⁕</BlankPost>
        </Board>
        <Board>
          <Box>
            <Text>전과 게시판</Text>
            <Button>더보기</Button>
          </Box>
          <BlankPost>⁕작성한 내용이 없습니다⁕</BlankPost>
        </Board>
      </Back>
    </>
  );
};

export default MyPost;
