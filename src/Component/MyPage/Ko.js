import React from "react";
import { Icons, horseIcons } from "../../assets/Resources";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useAuth } from "../Watchers";

const InfoContainer = styled.div`
  margin: 30px;
  padding: 50px 20px 20px 50px;
  border-radius: 30px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  justify-content: space-between;
  @media (max-width: 430px) {
    padding: 25px 25px 15px 23px;
    margin: 25px 20px 20px 20px;
  } ;
`;

const TextWrapper = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: left;
  margin: 20px 60px 0 0;
  @media (max-width: 430px) {
    margin: 10px 25px 0 0;
  }
`;

const Text = styled.div`
  display: flex;
  margin: 0px 3px 0px 10px;
  font-size: 27px;
  line-height: 1.5;
  @media (max-width: 430px) {
    font-size: 16px;
  }
`;
const Text1 = styled.div`
  display: flex;
  font-weight: bold;
  margin: 0px 3px 0px 10px;
  font-size: 30px;
  line-height: 1.5;
  @media (max-width: 430px) {
    font-size: 18px;
  }
`;
const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0px;
`;
const EditWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: start;
  margin-left: 20px;
  @media (max-width: 430px) {
    margin: 2px auto;
  }
`;

const EditIconImg = styled.img`
  width: 16px;
  margin-left: 3px;
  @media (max-width: 430px) {
    width: 13px;
  }
`;

const EditBoxWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const EditBox = styled.div`
  border-radius: 10px;
  margin-top: 5px;
  width: 120px;
  text-align: center;
  background-color: #d3dae3;
  font-size: 13px;
  padding: 5px 9px;
  cursor: pointer;
  @media (max-width: 430px) {
    width: 80px;
  }
`;

const Ko = () => {
  const history = useHistory();
  const user = useAuth();
  return (
    <InfoContainer>
      <InfoWrapper>
        <img
          src={horseIcons.newhorse}
          alt="프로필"
          style={{ width: "30%", height: "30%" }}
        ></img>
        <TextWrapper>
          <Text1>
            {!!user
              ? (!!user.displayName ? user.displayName : "융슝이").concat()
              : ""}
          </Text1>
          <Text>20201884</Text>
          <Text>
            {!!user ? (!!user.email ? user.email : "융슝이").concat() : ""}
          </Text>
        </TextWrapper>
      </InfoWrapper>
      <EditBoxWrapper>
        <EditBox onClick={() => history.push("/mypage/changeinformation")}>
          <EditWrapper>
            정보수정
            <EditIconImg src={Icons.infoEdit} alt={"정보수정"} />
          </EditWrapper>
        </EditBox>
      </EditBoxWrapper>
    </InfoContainer>
  );
};
export default Ko;
