import React from "react";
import styled from "styled-components";
import { Icons } from "../../assets/Resources";

const Con = styled.div`
  display: flex;
  margin: 0px;
  background-color: #D4E6FB;
  height: 30px;
`;
const Qon = styled.div`
  margin: 10px auto;
 
`;


const Oon = styled.div`
  display: flex;
  text-align:center;
  justify-content:space-between;
`;

const BBtop = () => {
  return (
      <div>
          <Con>
            <Qon>
              <Oon>
                <img 
                src={Icons.화살표} 
                alt="화살표" 
                style={{ height: "20px" }} >
              </img>
              TOP</Oon>
            </Qon>
          </Con>
      </div>
  );
};
export default BBtop;
