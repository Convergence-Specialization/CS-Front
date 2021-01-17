import React from "react";
import { Icons } from "../../assets/Resources";
import styled from "styled-components";

const Con = styled.div`
 margin: 0px 0px 10px 26px;
 padding: 13px 15px 13px 15px;
  width: 90%;
  border-radius: 16px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #f1f1f1;
  @media (max-width: 430px){
    width:120%;
    margin: 0px 0px 10px 26px;
    padding: 13px 25px 13px 5px;
  }
`;
const Oon = styled.div`
  margin: 10px auto 0px 50px;
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
  padding: 10px 0px 0px 10px;
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
    padding: 0px 0px 0px 10px;
  }
`;
const BoxText = styled.div`
  margin: 5px 0px;
  font-family: NanumGothic;
  font-size: 13px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: normal;
  text-align: center;
  color: #3b3b3b;
  @media(max-width: 430px){
    font-size: 8px;
  }
`;
const Qon = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px;
  @media(max-width: 430px){
    width: 98%;
    padding: 0px 8px 0px 15px;
  }
`;
const TextBox = styled.div`
  padding: 15px 50px;
  background-color: white;
  border: solid;
  border-width: 1px 1px 1px 1px;
  border-radius: 20px 0px 0px 0px;
  width:20%;
`;
const TextBox1 = styled.div`
  padding: 15px 50px;
  background-color: white;
  border: solid;
  border-width: 1px 1px 1px 1px;
  width:20%;
`;
const TextBox2 = styled.div`
  padding: 15px 50px;
  background-color: white;
  border: solid;
  border-width: 1px 1px 1px 1px;
  border-radius: 0px 20px 0px 0px;
  width:20%;
`;
const TextBox3 = styled.div`
  padding: 15px 50px;
  background-color: white;
  border: solid;
  border-width: 1px 1px 1px 1px;
  border-radius: 0px 0px 20px 0px;
  width:20%;
`;
const TextBox4 = styled.div`
  padding: 15px 50px;
  background-color: white;
  border: solid;
  border-width: 1px 1px 1px 1px;
  border-radius: 0px 0px 0px 20px;
  width:20%;
`;
const Img = () => {
  return (
    <>
      <Oon>
        <img src={Icons.Paperplane} alt="비행기" style={{ width: "19%" }} ></img>
      <Text>융합전공 소개</Text>
      </Oon>
      <Con>
        <Qon>
          <TextBox>
            <img src={Icons.Car} alt="차" style={{  width: "100%" }} />
            <BoxText>스마트 자동차</BoxText>
          </TextBox>
          <TextBox1>
            <img src={Icons.Energy} alt="에너지" style={{ width: "100%" }} />
            <BoxText>에너지 공학</BoxText>
          </TextBox1>
          <TextBox2>
            <img src={Icons.Security} alt="보안" style={{ width: "100%" }} />
            <BoxText>정보 보안</BoxText>
          </TextBox2>
        </Qon>
        <Qon>
          <TextBox4>
            <img src={Icons.BigData} alt="빅데" style={{ width: "100%" }} />
            <BoxText>빅데이터</BoxText>
          </TextBox4>
          <TextBox1>
            <img src={Icons.Ict} alt="아이씨티" style={{ width: "100%" }} />
            <BoxText>ICT 유통물류</BoxText>
          </TextBox1>
          <TextBox3>
            <img
              src={Icons.Unification}
              alt="통일"
              style={{ width: "100%" }}
            />
          <BoxText>통일외교 및 개발 협력</BoxText>
          </TextBox3>
        </Qon>
      </Con>
    </>
  );
};

export default Img;
