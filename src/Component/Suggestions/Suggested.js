import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { horseIcons } from "../../assets/Resources";

const Con = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 15px;
  padding: 10px 0px 10px 20px;
  @media (max-width: 430px) {
    padding: 10px;
  }
`;
const Box = styled.div`
  width: 70%;
  padding: 20px 25px;
  border-radius: 15px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  margin-bottom: 10px;
  background-color: #dff1fb;
  text-align: center;
  line-height: 1.5;
  @media (max-width: 430px) {
    padding: 15px 20px;
    width: 80%;
  }
`;
const Speechbubble = styled.div`
  border-bottom: 10px solid white;
  border-top: 10px solid white;
  border-left: 35px solid #dff1fb;
  height: 10px;
  margin-top: 100px;
  @media (max-width: 430px) {
    border-bottom: 8px solid white;
    border-top: 8px solid white;
    border-left: 25px solid #dff1fb;
    height: 10px;
    margin-top: 50px;
  }
`;
const Text = styled.div`
  font-size: 23px;
  @media (max-width: 430px) {
    font-size: 12px;
  }
`;
const Img = styled.img`
  width: 20%;
  @media (max-width: 430px) {
    width: 20%;
  }
`;

const Suggested = () => {
  const history = useHistory();
  return (
    <Con>
      <Container>
        <Box>
          <Text>
            건의사항을 보내주셔서 감사합니다! <br />
            보내주신 건의사항으로 더 나은 커뮤니티를
            <br />
            만들 수 있도록 노력하겠습니다 :)
          </Text>
        </Box>
        <Speechbubble />
        <Img src={horseIcons.newhorse} />
      </Container>
    </Con>
  );
};
export default Suggested;
