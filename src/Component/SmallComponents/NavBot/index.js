import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-family: "NanumSquareRound";
  padding: 10px 15px;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  position: relative;
`;
export const IconImg = styled.img`
  width: 23px;
  margin-right: 13px;
`;
export const Text = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
const PostButton = styled.div`
  position: absolute;
  padding: 5px 10px;
  right: 10px;
  border-radius: 13px;
  background-color: #d4e6fb;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  text-align: center;
  font-size: 15px;
  font-weight: bold;
`;

const NavBot = ({ Name, Icon, postButtonRef }) => {
  const history = useHistory();
  return (
    <Container>
      <IconImg src={Icon} />
      <Text
      onClick={() => {
        if (Name == "내가 쓴 글") {
          history.push("/mypage/myposts");
        } else if (Name == "전과 게시판") {
          history.push("/board/departmajor");
        } else if (Name == "융특 게시판") {
          history.push("/board/convergence");
        }
      }}
      >{Name}</Text>
      {!!postButtonRef && (
        <PostButton
          onClick={() => {
            history.push({
              pathname: `/board/${postButtonRef}`,
              state: { pageName: "create" },
            });
          }}
        >
          글 작성
        </PostButton>
      )}
    </Container>
  );
};

export default NavBot;
