import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mainPageIcons, horseIcons, readDoc } from "../../../assets/Resources";
import { useHistory } from "react-router-dom";
import { ArrowRight } from "@material-ui/icons";

const Back = styled.div`
  background-color: #f5f5f5;
  padding: 10px 0px;
`;

const Board = styled.div`
  width: 90%;
  min-height: 50vh;
  padding: 5px 0px;
  display: flex;
  margin: 10px auto;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
  align-items: center;
`;

const Box = styled.div`
  border-bottom: 2px solid #aca9a9;
  display: flex;
  padding: 5px 0px;
  width: 90%;
  align-items: center;
  justify-content: space-between;
`;
const Text = styled.div`
  font-weight: bold;
  font-size: 17px;
`;
const Button = styled.div`
  text-align: center;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #d4e6fb;
  cursor: pointer;
  @media (max-width: 430px) {
    font-size: 12px;
  }
`;
const BlankPost = styled.div`
  padding: 70px 10px 10px 10px;
  margin: 10px auto;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: #c8c8c8;
`;
const Img = styled.img`
  width: 30px;
`;
const TextBox = styled.div`
  border-bottom: 1px solid #aca9a9;
  display: flex;
  padding: 5px 20px;
  width: 100%;
  flex-direction: column;
`;
const Time = styled.div`
  font-size: 10px;
`;
const LineBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const Name = styled.div`
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
  white-space: nowrap;
`;
const NameTimeBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 88%;
  align-items: center;
`;
const Contents = styled.div`
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
  white-space: nowrap;
`;
const HeartComment = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  font-size: 10px;
`;
const MyPost = () => {
  const history = useHistory();
  const [posts] = useState([]);
  return (
    <>
      <Back>
        <Board>
          <Box>
            <Text>융특 게시판</Text>
            <Button>더보기</Button>
          </Box>
          {posts.length === 1 ? (
            <BlankPost>⁕작성한 내용이 없습니다⁕</BlankPost>
          ) : (
            <TextBox>
              <LineBox>
                <Img src={horseIcons.normal} alt={"horse"} />
                <NameTimeBox>
                  <Name>배고픈 융슝이</Name>
                  <Time>1분 전</Time>
                </NameTimeBox>
              </LineBox>
              <LineBox>
                <Contents>
                  졸리다아 빨리 출시출시 기대가 됩니다!!!!!!! 다들
                  화이팅!!!!!!!!!
                </Contents>
              </LineBox>
              <HeartComment>
                <img
                  src={mainPageIcons.heart}
                  alt="하트 아이콘"
                  style={{ width: "10px", marginRight: " 2px" }}
                />
                <div>7 |</div>
                <img
                  src={readDoc.speech_bubble}
                  alt="말풍선 아이콘"
                  style={{ width: "10px", margin: "0px 4px" }}
                />
                <div>5</div>
              </HeartComment>
            </TextBox>
          )}
        </Board>
        <Board>
          <Box>
            <Text>전과 게시판</Text>
            <Button>더보기</Button>
          </Box>
          {posts.length === 1 ? (
            <BlankPost>⁕작성한 내용이 없습니다⁕</BlankPost>
          ) : (
            <TextBox>
              <LineBox>
                <Img src={mainPageIcons.Car} alt={"horse"} />
                <NameTimeBox>
                  <Name>배고픈 융슝이</Name>
                  <Time>1분 전</Time>
                </NameTimeBox>
              </LineBox>
              <LineBox>
                <Contents>
                  졸리다아 빨리 출시출시 기대가 됩니다!!!!!!! 다들
                  화이팅!!!!!!!!!
                </Contents>
              </LineBox>
              <HeartComment>
                <img
                  src={mainPageIcons.heart}
                  alt="하트 아이콘"
                  style={{ width: "10px", marginRight: " 2px" }}
                />
                <div>7 |</div>
                <img
                  src={readDoc.speech_bubble}
                  alt="말풍선 아이콘"
                  style={{ width: "10px", margin: "0px 4px" }}
                />
                <div>5</div>
              </HeartComment>
            </TextBox>
          )}
        </Board>
      </Back>
    </>
  );
};

export default MyPost;
