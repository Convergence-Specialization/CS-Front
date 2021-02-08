import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { departMajorApi } from "../../../api";
import { Icons, mainPageIcons, readDoc } from "../../../assets/Resources";
import LoadingComponent from "../../SmallComponents/Loading";

const WhiteContainer = styled.div`
  width: 90%;
  padding: 12px 15px;
  margin: 10px auto;
  border-radius: 15px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
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
const ContentText = styled.div``;
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
const CommentChildWrapper = styled.div`
  margin: 5px 0;
  padding: 5px 0;
  position: relative;
`;
const CommentChildTitle = styled.span`
  font-weight: bold;
`;
const CommentChildTime = styled.span`
  margin-left: 10px;
  color: grey;
  font-size: 12px;
`;
const CommentChildText = styled.div`
  margin-top: 12px;
  font-size: 14px;
`;
const CommentButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 5px;
  bottom: 5px;
`;
const CommentChildNewSubButton = styled.img`
  width: 13px;
  margin: 0 7px;
`;
const CommentChildLikeWrapper = styled.div`
  padding: 3px 5px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
`;
const CommentChildLikeImg = styled.img`
  width: 13px;
`;
const CommentChildLikeCount = styled.div`
  margin-left: 5px;
  font-size: 13px;
`;

const CommentInputContainer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 768px;
  background-color: white;
`;
const CommentInputSecretButton = styled.img`
  width: 12px;
`;
const CommentInputBox = styled.input`
  width: 80%;
  outline: none;
  border: none;
  border-radius: 12px;
  padding: 10px 10px;
  background-color: #f6fafe;
  font-size: 15px;
`;
const CommentInputSubmitButton = styled.div`
  padding: 10px 0;
  font-weight: bold;
  width: 60px;
  font-size: 12px;
  background-color: #b4d5f5;
  color: black;
  border-radius: 10px;
  text-align: center;
`;

const Read = () => {
  const location = useLocation();
  const [content, setContent] = useState({});

  const [subCommentFocusedId, setSubCommentFocusedId] = useState("");

  const [commentLoading, setCommentLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    setContent(location.state.docItem);
    // 이 과정 함수로 빼서 완료될 때 마다 재실행.
    departMajorApi.comment
      .getLists({
        docId: location.state.docItem.docId,
      })
      .then((commentsArr) => {
        setComments(commentsArr);
        setCommentLoading(false);
      })
      .catch((err) => {
        message.error(err.message);
      });
  }, []);
  return (
    <>
      {content.title !== undefined && (
        <WhiteContainer>
          <Title>{content.title}</Title>
          <SubText>배고픈 슝슝이 | {`${content.timestampDistance} 전`}</SubText>
          <ContentText>{content.content}</ContentText>
          <ExtraContentWrapper>
            <LikeCountText>
              공감 {content.likeCount} | 댓글 {content.commentCount}
            </LikeCountText>
            <CommentButton
              onClick={() => {
                if (uploading) return;
                setUploading(true);
                message.loading("좋아요 누르는 중..", 10);
                departMajorApi
                  .like({ docId: content.docId, like: "LIKE" })
                  .then(() => {
                    message.destroy();
                  })
                  .catch((err) => {
                    message.destroy();
                    message.error(err.message);
                  })
                  .finally(() => {
                    setUploading(false);
                  });
              }}>
              <CommentImg src={mainPageIcons.heart} alt={"공감 이미지"} />
              <CommentButtonText>공감</CommentButtonText>
            </CommentButton>
          </ExtraContentWrapper>
        </WhiteContainer>
      )}
      <WhiteContainer>
        <CommentUpperWrapper>
          <CommentUpperText>댓글</CommentUpperText>
        </CommentUpperWrapper>
        {commentLoading ? (
          <LoadingComponent />
        ) : (
          comments.map((item, idx) => (
            <React.Fragment key={`${idx}Child`}>
              <CommentChildWrapper
                key={`${idx}COMMENT`}
                style={
                  subCommentFocusedId === item.commentId
                    ? { backgroundColor: "#f6fafe" }
                    : {}
                }>
                <CommentChildTitle>익명의 슝슝이 1</CommentChildTitle>
                <CommentChildTime>
                  {item.timestampDistance + " 전"}
                </CommentChildTime>
                <CommentChildText>{item.content}</CommentChildText>
                <CommentButtonWrapper>
                  <CommentChildLikeWrapper
                    onClick={() => {
                      if (subCommentFocusedId !== item.commentId) {
                        document.getElementById("commentInputBox").focus();
                        setSubCommentFocusedId(item.commentId);
                      } else {
                        setSubCommentFocusedId("");
                      }
                    }}>
                    <CommentChildNewSubButton
                      src={readDoc.speech_bubble}
                      alt="말풍선 아이콘"
                    />
                  </CommentChildLikeWrapper>
                  <CommentChildLikeWrapper>
                    <CommentChildLikeImg
                      src={readDoc.heart_empty}
                      alt="하트 아이콘"
                    />
                    <CommentChildLikeCount>
                      {item.likeCount}
                    </CommentChildLikeCount>
                  </CommentChildLikeWrapper>
                </CommentButtonWrapper>
              </CommentChildWrapper>
              {item.subComments.map((subItem, idx) => (
                <CommentChildWrapper
                  key={`${idx}SubComment`}
                  style={{ backgroundColor: "#f9f9f9" }}>
                  <CommentChildTitle>대댓글 슝슝이</CommentChildTitle>
                  <CommentChildTime>
                    {subItem.timestampDistance + " 전"}
                  </CommentChildTime>
                  <CommentChildText>{subItem.content}</CommentChildText>
                </CommentChildWrapper>
              ))}
            </React.Fragment>
          ))
        )}
      </WhiteContainer>
      <CommentInputContainer>
        <CommentInputBox
          placeholder={
            subCommentFocusedId === ""
              ? "댓글을 작성하세요"
              : "대댓글을 작성하세요"
          }
          id="commentInputBox"
        />
        <CommentInputSubmitButton
          onClick={() => {
            if (uploading) return;
            let commentContent = document.getElementById("commentInputBox")
              .value;
            if (commentContent === "") {
              return message.error("댓글을 입력하세요.");
            }
            message.loading("댓글 작성중입니다..");
            if (subCommentFocusedId === "") {
              departMajorApi.comment
                .create({
                  docId: content.docId,
                  content: commentContent,
                })
                .then(() => {
                  message.destroy();
                  window.location.reload();
                })
                .catch((err) => {
                  message.destroy();
                  message.error(err.message);
                })
                .finally(() => setUploading(false));
            } else {
              departMajorApi.comment
                .createSubComment({
                  originalDocId: content.docId,
                  commentId: subCommentFocusedId,
                  content: commentContent,
                })
                .then(() => {
                  message.destroy();
                  window.location.reload();
                })
                .catch((err) => {
                  message.destroy();
                  message.error(err.message);
                })
                .finally(() => setUploading(false));
            }
          }}>
          작성하기
        </CommentInputSubmitButton>
      </CommentInputContainer>
    </>
  );
};
export default Read;
