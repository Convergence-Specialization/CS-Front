import React from "react";
import styled from "styled-components";
import "./index.css";
const Container = styled.div`
  width: 100%;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-top: 10px;
  border-radius: 15cpx;
`;
const LoadingSmall = () => (
  <Container>
    <div className="loadingio-spinner-rolling-z4n3msyncw">
      <div className="ldio-hukxw033oc">
        <div></div>
      </div>
    </div>
  </Container>
);

export default LoadingSmall;
