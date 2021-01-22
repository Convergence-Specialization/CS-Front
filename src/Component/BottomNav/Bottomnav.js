import React from "react";
import styled from "styled-components";
// import Button from "@material-ui/core/Button";

const Con = styled.div`
  display: flex;

  justify-content: space-between;
  padding: 0px 26px 0px 20px;
  align-items:center;
  background-color: #d3dae3;
  @media(max-width: 430px){
    /* width: 130%; */
    margin: 30px 0px 0px 0px;
  padding: 0px 30px 0px 20px;
  }
`;
const Qon = styled.div`
  margin: 0px 5px 0px 0px;
  padding: 3px 10px 0px 20px;
  font-family: NanumSquareRoundR;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: #3d3d3d;
  @media(max-width: 430px){
    font-size: 7px;
    margin: 0px 15px 0px 0px;
    padding: 12px 10px 10px 10px;
  }
`;
const Won = styled.div`
  margin: 0px 10px 0px 0px;
  padding: 3px 0px 0px 20px;
  font-family: NanumGothic;
  font-size: 17px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.24;
  letter-spacing: normal;
  text-align: left;
  color: #3d3d3d;
  @media(max-width: 430px){
    font-size:10px;
    margin: 0px 15px 0px 10px;
    padding: 12px 0px 10px 0px;
  }
`;

const Jon = styled.div`
  margin: 20px 10px;
  font-size: 15px;
  @media(max-width: 430px){
    font-size:11px;
    margin: 10px 10px;
  }
`;

const Bottomnav = () => {
  return (
      <div>
          <Con>
            <Won>
              관련사이트
            </Won>
            <Jon>|</Jon>
            <Qon>
              숭실대학교 홈페이지
            </Qon>
            <Qon>
              유세인트
            </Qon>
            <Qon>
             스마트캠퍼스
            </Qon>
            <Qon>
              융특 홈페이지
            </Qon>
          </Con>
      </div>
  );
};
export default Bottomnav;
