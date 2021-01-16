import React from "react";
import styled from "styled-components";
// import Button from "@material-ui/core/Button";

const Con = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 0px;
  background-color: #D3DAE3;
  position: fixed;
  bottom: 110px;
  left: 0;
  right: 0;
`;
const Qon = styled.div`
  margin: 20px auto;
`;

const Jon = styled.div`
  margin: 20px;
`;

const Bottomnav = () => {
  return (
      <div>
          <Con>
            <Qon>
              <div>관련사이트</div>
            </Qon>
            <Jon>|</Jon>
            <Qon>
              <div>숭실대학교 홈페이지</div>
            </Qon>
            <Qon>
              <div>유세인트</div>
            </Qon>
            <Qon>
              <div>스마트캠퍼스</div>
            </Qon>
            <Qon>
              <div>융특 홈페이지</div>
            </Qon>
          </Con>
      </div>
  );
};
export default Bottomnav;
