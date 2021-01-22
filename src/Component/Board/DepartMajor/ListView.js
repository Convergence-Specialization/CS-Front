import React from "react";
import styled from "styled-components";

const Con = styled.div`
  width: 100%;
  background-color: #f1f1f1;
  font-family: "Nanum Gothic", sans-serif;
`;
const Wrap = styled.div`
  width: 90%;
  max-width: 1024px;
  margin: 0 auto;
`;
const BoveSmallCon = styled.div`
  width: 80%;
  height: 700px;
  justify-content: space-around;
  position: relative;
        right: 15px;
        left: 15px;
        top: 20px;
        bottom : 430px;
  padding: 15px;
  margin: 25px 25px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (max-width: 1023px) {
    width: 100%;
    margin: 10px 0;
  }
`;
const MoveCon = styled.div`
  font-weight: normal;
  font-size: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
const PostBox = styled.div`
  border: solid #dcdcdc;
  border-width: 0px 0px 1px 0px;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 20px;
`;
const PostTitle = styled.div`
  font-family: NanumSquareRoundEB;
  font-size: 20px;
  letter-spacing: normal;
  text-align: left;

  font-whight: bold;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
const PostTime = styled.div`
  font-whight: normal;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const changedboard = () => {
  return (
    <Con>
      
        <MoveCon>
          <BoveSmallCon>
          <Wrap>컴학 신청한 사람 많음?</Wrap>
          <PostTitle></PostTitle>
          </BoveSmallCon>
        </MoveCon>
    </Con>
  );
};
export default changedboard;

