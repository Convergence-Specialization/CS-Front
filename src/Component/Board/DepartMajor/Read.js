import React from "react";
import styled from "styled-components";
import { Icons, mainPageIcons } from "../../../assets/Resources";

const WhiteContainer = styled.div`
  width: 90%;
  padding: 9px 15px;
  margin: 10px auto;
  border-radius: 15px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
const SubText = styled.div`
  padding: 8px 0px;
  border-bottom: 2px solid #aca9a9;
  margin-bottom: 10px;
  font-size: 13px;
  line-height: 1.15;
`;
const LikeCountText = styled.div`
  font-size: 14px;
  color: #545454;
`;

const CommentButton = styled.div`
  width: 60px;
  padding: 5px 0;
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;
const CommentButtonText = styled.div`
  font-size: 12px;
`;
const ExtraContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const CommentImg = styled.img`
  width: 12px;
  margin-right: 5px;
`;
const CommentUpperWrapper = styled.div`
  width: 100%;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  padding: 5px 0 10px 3px;
`;
const CommentUpperText = styled.div`
  font-weight: bold;
`;
const CommentChildWrapper = styled.div``;
const CommentChildTitle = styled.span``;
const CommentChildTime = styled.span``;
const CommentChildText = styled.div``;
const CommentChildLikeButton = styled.div``;

const CommentInputContainer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CommentInputSecretButton = styled.img`
  width: 12px;
`;
const CommentInputBox = styled.input`
  width: 80%;
  outline: none;
  border: none;
  border-radius: 12px;
  padding: 5px 10px;
  font-size: 15px;
`;
const CommentInputSubmitButton = styled.div`
  padding: 9px 0;
  font-weight: bold;
  width: 60px;
  font-size: 12px;
  background-color: #d4e6fb;
  color: black;
  border-radius: 10px;
  text-align: center;
`;

const Read = () => {
  return (
    <>
      <WhiteContainer>
        <Title>컴학 신청한 사람 많음?</Title>
        <SubText>배고픈 슝슝이 | 21.01.14</SubText>
        <div>내용</div>
        <ExtraContentWrapper>
          <LikeCountText>공감 7 | 댓글 5</LikeCountText>
          <CommentButton>
            <CommentImg src={mainPageIcons.heart} alt={"공감 이미지"} />
            <CommentButtonText>공감</CommentButtonText>
          </CommentButton>
        </ExtraContentWrapper>
      </WhiteContainer>
      <WhiteContainer>
        <CommentUpperWrapper>
          <CommentUpperText>댓글 5</CommentUpperText>
        </CommentUpperWrapper>
        <CommentChildWrapper>
          <CommentChildTitle>익명의 슝슝이 1</CommentChildTitle>
          <CommentChildTime> 1시간 전</CommentChildTime>
          <CommentChildText>내용</CommentChildText>
          <CommentChildLikeButton />
        </CommentChildWrapper>
      </WhiteContainer>
      <CommentInputContainer>
        <CommentInputBox placeholder={"댓글을 작성하세요"} />
        <CommentInputSubmitButton>작성하기</CommentInputSubmitButton>
      </CommentInputContainer>
    </>
  );
};
export default Read;
