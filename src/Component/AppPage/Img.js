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
  margin:5px 0px;
  text-align:center;

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
const TextBox = styled.div`
  padding: 15px 50px;
  background-color: white;
  border: solid;
  border-width: 1px 1px 1px 1px;
  border-radius: 20px 0px 0px 0px;
`;
const TextBox1 = styled.div`
  padding: 15px 50px;
  background-color: white;
  border: solid;
  border-width: 1px 1px 1px 1px;
`;
const TextBox2 = styled.div`
  padding: 15px 50px;
  background-color: white;
  border: solid;
  border-width: 1px 1px 1px 1px;
  border-radius: 0px 20px 0px 0px;
`;
const TextBox3 = styled.div`
  padding: 15px 50px;
  background-color: white;

  border: solid;
  border-width: 1px 1px 1px 1px;
  border-radius: 0px 0px 20px 0px;
`;
const TextBox4 = styled.div`
  padding: 15px 50px;
  background-color: white;
  border: solid;
  border-width: 1px 1px 1px 1px;
  border-radius: 0px 0px 0px 20px;

`;
const Img = () => {
  return (
    <>
      <Oon>
        <img src={Icons.Paperplane} alt="비행기" style={{ height: "60px" }} ></img>
      <Text>융합전공 소개</Text>
      </Oon>
      <Con>
        <Jon>
          <TextBox>
            <img src={Icons.Car} alt="차" style={{ height: "100px" }} />
            <BoxText>스마트 자동차</BoxText>
          </TextBox>
          <TextBox1>
            <img src={Icons.Energy} alt="에너지" style={{ height: "100px" }} />
            <BoxText>에너지 공학</BoxText>
          </TextBox1>
          <TextBox2>
            <img src={Icons.Security} alt="보안" style={{ height: "100px" }} />
            <BoxText>정보 보안</BoxText>
          </TextBox2>
        </Jon>
        <Qon>
          <TextBox4>
            <img src={Icons.BigData} alt="빅데" style={{ height: "100px" }} />
            <BoxText>빅데이터</BoxText>
          </TextBox4>
          <TextBox1>
            <img src={Icons.Ict} alt="아이씨티" style={{ height: "100px" }} />
            <BoxText>ICT 유통물류</BoxText>
          </TextBox1>
          <TextBox3>
            <img
              src={Icons.Unification}
              alt="통일"
              style={{ height: "100px" }}
            />
          <BoxText>통일외교 및 개발 협력</BoxText>
          </TextBox3>
        </Qon>
      </Con>
    </>
  );
};

export default Img;
