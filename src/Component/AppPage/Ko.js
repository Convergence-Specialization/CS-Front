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
    width: 115%;
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
font-family: Calibri;
  font-weight: 300;
  font-stretch: normal;
  font-style: italic;
  line-height: 1.37;
  letter-spacing: normal;
  text-align: left;
  color: #3d3d3d;
`;
const Wext = styled.div`
font-family: NanumSquareRoundR;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.12;
  letter-spacing: normal;
  text-align: left;
  color: #444444;
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
            <Wext>추석맞이 융병호 게임</Wext>
            <Qext>21.01.14~21.01.20</Qext>
          </Wrap>
          <Jrap>
            <Wext>학부장에게 물어봐!</Wext>
            <Qext>21.01.14~21.01.20</Qext>
          </Jrap>
      </Con>
    </>
  );
};
export default Ko;
