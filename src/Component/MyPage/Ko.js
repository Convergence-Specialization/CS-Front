import React from "react";
import { Icons } from "../../assets/Resources";
import styled from "styled-components";

const Wrap = styled.div`
  margin: 30px;
  padding: 50px 20px 20px 50px;
  border-radius: 30px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  @media(max-width:430px){
    padding: 30px 15px 15px 30px;
    margin: 20px;
  }
`;
const Title = styled.div`
 padding-left:10px;
  width: 80%;
  flex-direction: column;
  display: flex;
  justify-content: start;
`;
const Qitle = styled.div`

  width: 100%;
  margin-top:10px;
  display: flex;
`;
const Text = styled.div`
  display: flex;
  margin: 0px 3px 0px 10px;
  font-size: 27px;
  line-height: 1.41;
  @media(max-width:430px){
    font-size:15px;
  }
`;
const Wext = styled.div`
  margin: 2px 0px 0px 5px;
  font-weight: 900;
  font-size: 20px;
  line-height: 1.41;
  @media(max-width:430px){
    font-size:15px;
  }
`;
const Qext = styled.div`
  display: flex;
`;
const Dext = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
const Xext = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:0px;
`;
const Oon = styled.div`
  padding: 10px 20px;
  border-radius: 18px;
  background-color: #d3dae3;
  font-size: 15px;
  line-height: 1.15;
  @media(max-width:430px){
    font-size:8px;
    padding: 8px 18px;
  }
`;

const Ko = () => {
  return (
    <Wrap>
      <Xext>
        <img src={Icons.프로필} alt="프로필" style={{ width: "20%" }}></img>
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
export default Ko;
