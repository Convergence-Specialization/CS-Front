import React from "react";
import { Icons } from "../../assets/Resources";
import styled from "styled-components";

const Con = styled.div`
  margin: 0px auto 10px auto;
  padding: 15px;
  width: 78%;
  background-color: #ddd;
  border-radius: 20px;
`;

const Oon = styled.div`
  margin: 10px auto 0px 70px;
  padding: 20px;
  width: 50%;
  display: flex;
  justify-content: start;
`;
const Text = styled.div`
  font-size: 35px;
  margin: 0px 0px;
  padding: 10px;
  background-color: white;
`;
const BoxText = styled.div`
  font-size: 11px;
  margin: 5px 0px;
  text-align: center;
`;

const Wrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 20px;
  margin: 0px 0px 10px 0px;
  padding: 10px 30px;
`;
const Jrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 20px;

  padding: 10px 30px;
`;
const Jon = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 0px;
  padding: 0px 10px;
`;
const Qon = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px;
`;
const Board = () => {
  return (
    <>
      <Oon>
        <img
          src={Icons.Paperplane}
          alt="비행기"
          style={{ height: "60px" }}
        ></img>
        <Text>융특 게시판</Text>
      </Oon>
      <Con>
        
          <Wrap>
            <div>심심해</div>
            <div>더보기</div>
          </Wrap>
          <Wrap>
            <div>힘들어어</div>
            <div>더보기</div>
          </Wrap>
          <Wrap>
            <div>같이 하시이일 부우운</div>
            <div>더보기</div>
          </Wrap>
          <Wrap>
            <div>으아아아</div>
            <div>더보기</div>
          </Wrap>
          <Jrap>
            <div>배고파아아</div>
            <div>더보기</div>
          </Jrap>
      </Con>
      <Oon>
        <img
          src={Icons.Paperplane}
          alt="비행기"
          style={{ height: "60px" }}
        ></img>
        <Text>전과 게시판</Text>
      </Oon>
      <Con>
        
          <Wrap>
            <div>심심해</div>
            <div>더보기</div>
          </Wrap>
          <Wrap>
            <div>힘들어어</div>
            <div>더보기</div>
          </Wrap>
          <Wrap>
            <div>같이 하시이일 부우운</div>
            <div>더보기</div>
          </Wrap>
          <Wrap>
            <div>으아아아</div>
            <div>더보기</div>
          </Wrap>
          <Jrap>
            <div>배고파아아</div>
            <div>더보기</div>
          </Jrap>
      </Con>
    </>
  );
};
export default Board;
