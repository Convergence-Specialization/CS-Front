import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mainPageIcons } from "../../../assets/Resources";
import { useHistory } from "react-router-dom";
import { boardApi } from "../../../api";

import GoUp from "../../SmallComponents/GoUp";

const Con = styled.div`
  width: 100%;
  background-color: #f1f1f1;
  padding-bottom: 20px;
`;
const TitleBox = styled.div`
  background-color: #ffffff;
  padding: 10px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
`;
const TitleWrap = styled.div`
  display: flex;
  align-items: center;
`;
const TitleIconImg = styled.img`
  width: 25px;
  margin-left: 10px;
`;
const Title = styled.div`
  margin-left: 8px;
  font-weight: bold;
  font-size: 20px;
  font-family: NanumSquareRoundB;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #242323;
  @media (max-width: 430px) {
    font-size: 17px;
  }
`;
const PostButton = styled.div`
  width: 15%;
  padding: 5px 7px;
  border-radius: 13px;
  background-color: #d4e6fb;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  text-align: center;
  line-height: 1.12;
  letter-spacing: normal;
  font-size: 15px;
  color: #000000;
  padding: 5px 7px;
  font-family: NanumSquareRoundEB;
  font-weight: bold;
  @media (max-width: 430px) {
    font-size: 14px;
    padding: 5px 7px;
  }
`;
const TitleElement = ({ src, name }) => (
  <TitleWrap>
    <TitleIconImg src={src} />
    <Title>{name}</Title>
  </TitleWrap>
);

const BoardCon = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  padding: 5px 10px;
  margin: 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;
const MoreButton = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  margin: 0px 10px;
  margin-top: 13px;
  padding: 5px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 5px 7px;
  }
`;


const ChangedBoard = () => {
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    boardApi.departMajor.readList().then(({ result, body }) => {
      if (result === "success") {
        setPosts(
          body.map((item) => {
            return {
              ...item,
              timestamp: item.timestamp.toDate().toString(),
            };
          })
        );
      } else {
        alert("오류발생");
      }
    });
  }, []);
  return (
    <Con>
      <TitleBox>
        <TitleElement src={mainPageIcons.airplane} name={"전과 게시판"} />
        <PostButton
          onClick={() => {
            history.push({
              pathname: "/board/departmajor",
              state: { pageName: "create" },
            });
          }}>
          글 작성
        </PostButton>
      </TitleBox>
      <BoardCon>
        {posts.length !== 0 &&
          posts.map((item, idx) => (
            <div
              key={idx}
              style={{ margin: "8px 0" }}
              onClick={() => {
                alert(item.id);
              }}>
              <div>제목: {item.title}</div>
              <div>글 내용: {item.body}</div>
              <div>쓴 시간: {item.timestamp}</div>
            </div>
          ))}
      </BoardCon>
      <MoreButton
        onClich={()=>{
        }}>
        더보기
      </MoreButton>
      <GoUp/>
    </Con>
  );
};
export default ChangedBoard;