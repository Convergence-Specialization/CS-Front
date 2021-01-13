import React from "react";
import styled from "styled-components";
// import Button from "@material-ui/core/Button";

const Con = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px;
  background-color: #dfe0df;
`;
const Qon = styled.div`
  margin: 20px auto;
`;

const Jon = styled.div`
  margin: 20px;
`;

const Bottomnav = () => {
  return (
    <nav>
      <div>
        <ul>
          <Con>
            <Qon>
              <li class="a">
                <a href="#">관련사이트</a>
              </li>
            </Qon>
            <Jon>|</Jon>
            <Qon>
              <li class="b">
                <a href="https://ssu.ac.kr/">학교홈페이지</a>
              </li>
            </Qon>
            <Qon>
              <li class="c">
                <a href="#">숭실대학교</a>
              </li>
            </Qon>
            <Qon>
              <li>
                <a href="https://myclass.ssu.ac.kr/login.php">스마트캠퍼스</a>
              </li>
            </Qon>
            <Qon>
              <li>
                <a href="https://saint.ssu.ac.kr/irj/portal">유세인트</a>
              </li>
            </Qon>
            <Qon>
              <li>
                <a href="http://iphak.ssu.ac.kr/">입학처</a>
              </li>
            </Qon>
          </Con>
        </ul>
      </div>
    </nav>
  );
};
export default Bottomnav;
