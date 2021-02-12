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
    <div class="loadingio-spinner-spinner-5r3w0oiswac">
      <div class="ldio-nullx5aydum">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </Container>
);
export default LoadingComponent;
