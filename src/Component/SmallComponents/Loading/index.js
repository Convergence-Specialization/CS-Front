import React from "react";
import "./index.css";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingComponent = () => (
  <Container>
    <div class="loadingio-spinner-double-ring-lbugqr9lyo">
      <div class="ldio-evw2difor6q">
        <div></div>
        <div></div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  </Container>
);
export default LoadingComponent;
