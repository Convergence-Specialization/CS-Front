import React from "react";
import { Icons } from "../../assets/Resources";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useAuth } from "../Watchers";
const Wrap = styled.div`
  margin: 30px;
  padding: 50px 20px 20px 50px;
  border-radius: 30px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  @media(max-width:430px){
    padding: 30px 15px 15px 30px;
    margin: 20px;
  }
`;
const Title = styled.div`
 padding-left:10px;
  width: 80%;
  flex-direction: column;
  display: flex;
  justify-content: start;
`;
const Qitle = styled.div`
  width: 100%;
  margin-top:10px;
  display: flex;
`;
const Text = styled.div`
  display: flex;
  margin: 0px 3px 0px 10px;
  font-size: 27px;
  line-height: 1.41;
  @media(max-width:430px){
    font-size:15px;
  }
`;
const Qext = styled.div`
  display: flex;
`;
const Dext = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
const Xext = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:0px;
`;
const Oon = styled.div`
  padding: 10px 20px;
  border-radius: 18px;
  background-color: #d3dae3;
  font-size: 15px;
  line-height: 1.15;
  cursor: pointer;
  @media(max-width:430px){
    font-size:8px;
    padding: 8px 18px;
  }
`;

const Ko = () => {
  const history = useHistory();
  const user = useAuth();
  return (
    <Wrap>
      <Xext>
        <img src={Icons.프로필} alt="프로필" style={{ width: "20%" }}></img>
        <Title>
          <Qext>
            <Text>
            {!!user
                ? (!!user.displayName ? user.displayName : "융슝이").concat(
                  )
                : ""}
            </Text>
          </Qext>
          <Qext>
            <Text>20201884</Text>
          </Qext>
          <Qext>
            <Text>{!!user
                ? (!!user.email ? user.email : "융슝이").concat(
                  )
                : ""}</Text>
          </Qext>
        </Title>
      </Xext>
      <Xext>
        <Qitle>
          <Dext>
            <Oon onClick={() => history.push("/mypage/changeinformation")}>정보수정</Oon>
          </Dext>
        </Qitle>
      </Xext>
    </Wrap>
  );
};
export default Ko;
