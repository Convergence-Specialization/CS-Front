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
const Board = () => {
  return (
    <>
      <Oon>
        <img
          src={Icons.공지}
          alt="비행기"
          style={{ height: "55px" }}
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
export default Board;
