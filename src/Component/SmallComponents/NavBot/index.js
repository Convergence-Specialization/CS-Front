import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { navbotIcons } from "../../../assets/Resources";

const Container = styled.div`
  font-family: "NanumSquareRound";
  padding: 10px 15px;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  width: 100%;
  max-width: 768px;
  position: fixed;
  z-index: 99;
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

const MarginBox = styled.div`
  width: 1px;
  height: 45px;
  background-color: #f1f1f1;
`;

const NavBot = ({ Name, Icon, postButtonRef }) => {
  const history = useHistory();
  const location = useLocation();

  const [realName, setRealName] = useState(null);
  const [realIcon, setRealIcon] = useState(null);

  const handleLinkClick = () => {
    if (realName === "인기많은 융슝이들") {
      history.push("/board/hot");
      return;
    } else if (realName === "저장한 글") {
      history.push("/mypage/save");
      return;
    }

    if (Name === "내가 쓴 글") {
      history.push("/mypage/myposts");
    } else if (Name === "전과 게시판") {
      history.push("/board/departmajor");
    } else if (Name === "융특 게시판") {
      history.push("/board/convergence");
    } else if (Name === "공지 사항") {
      history.push("/board/announcement");
    } else if (Name === "홍보 게시판") {
      history.push("/board/marketing");
    }
  };

  useEffect(() => {
    if (!location.state) return;

    if (!!location.state.isHot) {
      setRealName("인기많은 융슝이들");
      setRealIcon(navbotIcons.hot);
    }
    if (!!location.state.isSave) {
      setRealName("저장한 글");
      setRealIcon(navbotIcons.save);
    }
  }, [location]);
  return (
    <>
      <Container>
        <IconImg src={realIcon || Icon} onClick={handleLinkClick} />
        <Text onClick={handleLinkClick}>{realName || Name}</Text>
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
      <MarginBox />
    </>
  );
};

export default NavBot;
