import React from "react";
import { Icons } from "../../assets/Resources";
import styled from "styled-components";

const Con = styled.div`
  margin: 0px auto 10px auto;
  padding: 15px;
  width: 78%;
  background-color: #ddd;
  border-radius: 20px;
  @media(max-width: 430px){
    width: 105%;
    margin: 0px 0px 0px 24px;
  }
`;

const Oon = styled.div`
  margin: 10px auto 0px 70px;
  padding: 20px;
  width: 50%;
  display: flex;
  justify-content: start;
  @media(max-width: 430px){
    margin: 0px 0px 0px 30px;
  }
`;
const Text = styled.div`
  font-size: 30px;
  margin: 0px 0px;
  padding: 0px;
  font-family: NanumSquareRoundB;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #242323;
`;


const Wrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 20px;
  margin: 0px 0px 10px 0px;
  padding: 10px 30px;
  font-family: NanumSquareRoundR;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.12;
  letter-spacing: normal;
  text-align: left;
  color: #444444;
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
  background-color: white;
  border-radius: 20px;
  font-family: NanumSquareRoundR;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.12;
  letter-spacing: normal;
  text-align: left;
  color: #444444;
  padding: 10px 30px;
  @media(max-width: 430px){
    width: 95%;
    padding: 10px 6px 10px 20px;
  }
`;

const Ko = () => {
  return (
    <>
      <Oon>
        <img
          src={Icons.공지}
          alt="비행기"
          style={{ height: "39px" }}
        ></img>
        <Text>학생회 공지</Text>
      </Oon>
      <Con>
          <Wrap>
            <div>추석맞이 융병호 게임</div>
            <div>21.01.14~21.01.20</div>
          </Wrap>
          <Jrap>
            <div>학부장에게 물어봐!</div>
            <div>21.01.14~21.01.20</div>
          </Jrap>
      </Con>
    </>
  );
};
export default Ko;
