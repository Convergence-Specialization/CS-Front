import React from "react";
import styled from "styled-components";

const Con = styled.div`
  padding: 20px;
  width: 82%;
  background-color: white;
  border-radius: 30px;
  box-shadow: 1px 2px 20px 10px rgba(0, 0, 0, 0.1),
    0 2px 4px 1px rgba(0, 0, 0, 0.06);
  margin: 0px auto 30px auto;
  @media(max-width:430px){
    padding: 15px;
  }
`;
const Con1 = styled.div`
  margin: 0px auto 10px auto;
  padding: 20px;
  width: 82%;
  background-color: white;
  border-radius: 30px;
  box-shadow: 1px 2px 20px 10px rgba(0, 0, 0, 0.1),
    0 2px 4px 1px rgba(0, 0, 0, 0.06);
  @media(max-width:430px){
    padding: 15px;
  }
`;

const Wrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 0px 20px;
  font-family: NanumSquareRoundR;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  @media(max-width:430px){
    font-size:15px;
    padding: 0px 20px ;
  }
`;
const Oon = styled.div`
  margin-left: 70px;
  padding: 50px 0px 9px 20px;
  width: 50%;
  display: flex;
  @media(max-width:430px){
    margin-left: 50px;
  }
`;
const Jon = styled.div`
  margin-left: 70px;
  padding: 0px 0px 9px 20px;
  display: flex;
  @media(max-width:430px){
    margin-left: 50px;
  }
`;
const Text = styled.div`
  font-family: NanumSquareRoundR;
  font-size: 20px;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  @media(max-width:430px){
    font-size:15px;
    
  }
`;
const Kon = styled.div`
  text-align:center;
  padding: 20px 10px 20px 10px;
  margin: 10px auto;
  border-radius: 25px;
  width:82%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ccd3dc;
  font-family: NanumSquareRoundR;
  font-size: 20px;
  line-height: 1.14;
  letter-spacing: normal;
  color: #000000;
  @media(max-width:430px){
    font-size:15px;
    padding: 15px 0px ;
  }
`;
const Board = () => {
  return (
    <>
      <Oon>
        <Text>이름</Text>
      </Oon>
      <Con>
        <Wrap>
          <div>지여누</div>
        </Wrap>
      </Con>
      <Jon>
        <Text>학번</Text>
      </Jon>
      <Con>
        <Wrap>
          <div>20201884</div>
        </Wrap>
      </Con>
      <Jon>
        <Text>이메일</Text>
      </Jon>
      <Con1>
        <Wrap>
          <div>ywoo121@naver.com</div>
        </Wrap>
      </Con1>
      <Jon>
        <Text>※이메일은 수정되지 않습니다.</Text>
      </Jon>
      <Kon>정보 수정 완료</Kon>
    </>
  );
};
export default Board;
