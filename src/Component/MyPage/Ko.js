import React from "react";
import { Icons } from "../../assets/Resources";
import styled from "styled-components";

const Wrap = styled.div`
  width: 80%;
 
  background-color: white;
  border-radius: 20px;
  margin: 30px auto;
  padding: 40px 10px 10px 30px;
  box-shadow: 1px 2px 20px 5px rgba(0, 0, 0, 0.1),
    0 2px 4px 1px rgba(0, 0, 0, 0.06);
`;
const Title = styled.div`
 
  width: 80%;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
`;
const Qitle = styled.div`

  width: 100%;
  
  display: flex;
  justify-content: flex-end;
`;
const Text = styled.div`
  display: flex;
  margin: 0px 3px 10px 10px;
  font-weight: 900;
  font-family: NanumSquareRoundR;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;
const Wext = styled.div`
  margin: 0px 0px 0px 5px;
  font-weight: 900;
  font-family: NanumSquareRoundR;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;
const Qext = styled.div`
  display: flex;
  margin: 0px 0px 0px 0px;
`;
const Dext = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
const Xext = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Oon = styled.div`
  text-align: center;
  padding: 10px 20px;
  border-radius: 18px;
  background-color: #d3dae3;
  font-family: NanumSquareRoundR;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;

const Board = () => {
  return (
    <Wrap>
      <Xext>
        <img src={Icons.프로필} alt="프로필" style={{ width: "18%" }}></img>
        <Title>
          <Qext>
            <Text>지여누</Text>
            <Wext>|</Wext>
            <Text>ywo121</Text>
          </Qext>
          <Qext>
            <Text>20201884</Text>
          </Qext>
          <Qext>
            <Text>ywoo121@naver.com</Text>
          </Qext>
        </Title>
      </Xext>
      <Xext>
        <Qitle>
          <Dext>
            <Oon>정보수정</Oon>
          </Dext>
        </Qitle>
      </Xext>
    </Wrap>
  );
};
export default Board;
