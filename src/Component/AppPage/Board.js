import React from "react";
import { Icons } from "../../assets/Resources";
import styled from "styled-components";

const Con = styled.div`
  margin: 0px 0px 10px 26px;
  padding: 13px 5px 13px 15px;
  width: 90%;
  border-radius: 16px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #f1f1f1;
  @media(max-width: 430px){
    width: 120%;
    margin: 0px 10px 0px 30px;
    padding: 12px 15px 12px 15px;
  }
`;

const Oon = styled.div`
  margin: 10px auto 0px 70px;
  padding: 20px 0px 10px 0px;
  width: 50%;
  display: flex;
  justify-content: start;
  @media(max-width: 430px){
    margin: 0px 0px 0px 50px;
  }
`;
const Text = styled.div`
  font-size: 30px;
  margin: 0px 0px;
  padding: 5px 0px 0px 0px;
  font-family: NanumSquareRoundB;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #242323;
  @media (max-width:430px){
    font-size: 23px;
    margin: 0px 0px;
    padding: 4px 0px 0px 10px;
  }
`;


const Wrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  border-radius: 21px;
  background-color: #ffffff;
  margin: 0px 0px 10px 0px;
  padding: 10px 30px;
  
  @media(max-width: 430px){
    width: 95%;
    margin: 0px 0px 10px 0px;
    padding: 10px 6px 10px 20px;
  }
`;

const Jrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  border-radius: 21px;
  background-color: #ffffff;
  padding: 10px 30px;
  @media(max-width: 430px){
    width: 95%;
    padding: 10px 6px 10px 20px;
  }
`;
const Qext = styled.div`
font-family: NanumSquareRoundR;
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.12;
  letter-spacing: normal;
  text-align: left;
  color: #444444;
  @media (max-width:430px){
    font-size: 18px;
  }
`;
const Wext = styled.div`
font-family: NanumSquareRoundB;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: left;
  color: #242323;
  @media (max-width:430px){
    font-size: 13px;
    padding:0px 20px 0px 0px;
  }
`;
const Board = () => {
  return (
    <>
      <Oon>
        <img
          src={Icons.Paperplane}
          alt="비행기"
          style={{ width: '19%' }}
        ></img>
        <Text>융특 게시판</Text>
      </Oon>
      <Con>
        
          <Wrap>
            <Qext>심심해</Qext>
            <Wext>더보기</Wext>
          </Wrap>
          <Wrap>
            <Qext>힘들어어</Qext>
            <Wext>더보기</Wext>
          </Wrap>
          <Wrap>
            <Qext>같이 하시이일 부우운</Qext>
            <Wext>더보기</Wext>
          </Wrap>
          <Wrap>
            <Qext>으아아아</Qext>
            <Wext>더보기</Wext>
          </Wrap>
          <Jrap>
            <Qext>배고파아아</Qext>
            <Wext>더보기</Wext>
          </Jrap>
      </Con>
      <Oon>
        <img
          src={Icons.Paperplane}
          alt="비행기"
          style={{ width:'19%' }}
        ></img>
        <Text>전과 게시판</Text>
      </Oon>
      <Con>
        
          <Wrap>
            <Qext>심심해</Qext>
            <Wext>더보기</Wext>
          </Wrap>
          <Wrap>
            <Qext>힘들어어</Qext>
            <Wext>더보기</Wext>
          </Wrap>
          <Wrap>
            <Qext>같이 하시이일 부우운</Qext>
            <Wext>더보기</Wext>
          </Wrap>
          <Wrap>
            <Qext>으아아아</Qext>
            <Wext>더보기</Wext>
          </Wrap>
          <Jrap>
            <Qext>배고파아아</Qext>
            <Wext>더보기</Wext>
          </Jrap>
      </Con>
    </>
  );
};
export default Board;
