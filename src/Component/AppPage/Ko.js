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
  @media (max-width: 430px) {
    /* width: 120%; */
    margin: 0px 10px 0px 30px;
    padding: 12px 15px 12px 15px;
  }
`;

const Oon = styled.div`
  /* margin: 10px auto 0px 50px; */
  padding: 20px 0px 10px 0px;
  width: 50%;
  display: flex;
  justify-content: start;
  background-color: red;

  @media (max-width: 430px) {
    margin: 0px 0px 0px 50px;
  }
`;
const Text = styled.div`
  font-size: 30px;
  padding: 0px 0px 0px 10px;
  font-family: NanumSquareRoundB;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #242323;
  @media (max-width: 430px) {
    font-size: 23px;
    margin: 0px 0px;
    padding: 0px 0px 0px 10px;
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

  @media (max-width: 430px) {
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
  @media (max-width: 430px) {
    width: 95%;
    padding: 10px 6px 10px 20px;
  }
`;
const Qext = styled.div`
  font-family: Calibri;
  font-size: 19px;
  font-weight: 300;
  font-stretch: normal;
  font-style: italic;
  line-height: 1.37;
  letter-spacing: normal;
  text-align: left;
  color: #3d3d3d;
  @media (max-width: 430px) {
    font-size: 15px;
  }
`;
const Wext = styled.div`
  font-family: NanumSquareRoundR;
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.12;
  letter-spacing: normal;
  text-align: left;
  color: #444444;
  @media (max-width: 430px) {
    font-size: 18px;
  }
`;
const Ko = () => {
  return (
    <>
      <Oon>
        <img src={Icons.공지} alt="비행기" style={{ width: "15%" }}></img>
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
