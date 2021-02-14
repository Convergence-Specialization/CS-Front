import message from "antd/lib/message";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { departMajorApi, globalApi } from "../../../api";
import { mainPageIcons, readDoc, Icons } from "../../../assets/Resources";
import { db } from "../../../firebase";
import LoadingComponent from "../../SmallComponents/Loading";
import SelectSubjectModal from "./Modal/Read";
import { useHistory } from "react-router-dom";
import ReportOrDelete from "./Modal/ReportOrDelete";
const WhiteContainer = styled.div`
  width: 90%;
  padding: 12px 15px;
  margin: 10px auto;
  border-radius: 15px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
  position: relative;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-right: 25px;
`;
const SubText = styled.div`
  padding: 8px 0px;
  border-bottom: 2px solid #aca9a9;
  margin-bottom: 10px;
  font-size: 13px;
  line-height: 1.15;
`;
const ContentText = styled.div`
  line-height: 1.5;
  min-height: 90px;
  white-space: pre-wrap;
`;
const LikeCountText = styled.div`
  color: #545454;
  display: flex;
  align-items: center;
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
  margin: 5px 0px;
  padding: 5px 0px;
  position: relative;
  border-bottom: 1px solid #aca9a9;
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
  line-height: 1.5;
  font-size: 14px;
  white-space: pre-wrap;
`;
const CommentButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
const CommentArrow = styled.img`
  width: 15px;
  margin: 30px 20px 30px 10px;
`;
const CommentChildLikeCount = styled.div`
  margin-left: 5px;
  font-size: 13px;
`;
const Box = styled.div`
  display: flex;
  padding-bottom: 5px;
`;
const CommentInputMargin = styled.div`
  width: 1px;
  height: 58px;
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
const CommentInputBox = styled.input`
  width: 100%;
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
const DocDeleteButton = styled.img`
  position: absolute;
  top: 12px;
  right: 19px;
  height: 15px;
`;
const CommentDeleteButton = styled.img`
  position: absolute;
  top: 7px;
  right: 9px;
  height: 12px;
`;
const BlankPost = styled.div`
  padding: 70px 10px;
  margin: 10px auto;
  font-weight: 300;
  font-size: 14px;
  text-align: center;
  color: #848484;
`;

const Read = () => {
  const history = useHistory();
  const location = useLocation();
  const [content, setContent] = useState({});

  const [subCommentFocusedId, setSubCommentFocusedId] = useState("");

  const [myEncryptedUid, setMyEncryptedUid] = useState("");
  const [didILikedThisDoc, setDidILikedThisDoc] = useState(null);

  const [commentLoading, setCommentLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [subjectModalVisible, setSubjectModalVisible] = useState(false);
  const [isCommentWarning, setIsCommentWarning] = useState(false);

  const [reportOrDeleteModalVisible, setReportOrDeleteModalVisible] = useState(
    false
  );
  const [reportOrDeleteModalDocId, setReportOrDeleteModalDocId] = useState({});
  const [reportOrDeleteModalType, setReportOrDeleteModalType] = useState("DOC");
  const [
    reportOrDeleteModalDeleteState,
    setReportOrDeleteModalDeleteState,
  ] = useState(true);

  const Modal_Type = {
    DOC: "DOC",
    COMMENT: "COMMENT",
    SUBCOMMENT: "SUBCOMMENT",
  };

  const getComments = useCallback(async (myEncryptedUid, docItem) => {
    try {
      const commentsArr = await departMajorApi.comment.getLists({
        docId: docItem.docId,
        myEncryptedUid,
      });
      setComments(commentsArr);
      setCommentLoading(false);
    } catch (err) {
      message.error(err.message);
    }
  }, []);

  const getMyEncryptedUid = useCallback(async (docItem) => {
    try {
      const res = await departMajorApi.myEncryptedUid({
        docId: docItem.docId,
      });
      return res.data.encryptedUid;
    } catch (err) {
      message.error(err.message);
    }
  }, []);

  const didILikedDoc = useCallback(async (myEncryptedUid, docItem) => {
    try {
      const querySnapshot = await db
        .collection("departMajor")
        .doc(docItem.docId)
        .collection("likes")
        .where("encryptedUid", "==", myEncryptedUid)
        .get();
      return querySnapshot.size !== 0;
    } catch (err) {
      return await message.error(err);
    }
  }, []);

  const reloadComments = () => {
    setCommentLoading(true);
    setSubCommentFocusedId("");
    globalApi
      .getSingleDoc({ boardName: "departMajor", docId: content.docId })
      .then((obj) => setContent(obj));
    getComments(myEncryptedUid, content);
  };

  useEffect(() => {
    if (location.state === undefined) return;
    const { docItem } = location.state;
    setContent(docItem);
    getMyEncryptedUid(docItem).then((myEncryptedUid) => {
      getComments(myEncryptedUid, docItem);
      setMyEncryptedUid(myEncryptedUid, docItem);
      if (myEncryptedUid !== undefined) {
        didILikedDoc(myEncryptedUid, docItem).then((liked) =>
          setDidILikedThisDoc(liked)
        );
      }
    });
  }, [getComments, location.state]);
  return (
    <>
      <SelectSubjectModal
        visible={subjectModalVisible}
        onClose={() => setSubjectModalVisible(false)}
        isCommentWarning={isCommentWarning}
      />
      <ReportOrDelete
        visible={reportOrDeleteModalVisible}
        onClose={() => setReportOrDeleteModalVisible(false)}
        history={history}
        docId={reportOrDeleteModalDocId}
        isDeleteState={reportOrDeleteModalDeleteState}
        modalType={reportOrDeleteModalType}
        reloadComments={reloadComments}
      />
      {content.title !== undefined && (
        <WhiteContainer>
          <Title>{content.title}</Title>
          <SubText>
            {content.nickname} | {`${content.timestampDistance} 전`}
          </SubText>
          <ContentText>{content.content}</ContentText>
          {myEncryptedUid !== "" && (
            <DocDeleteButton
              src={readDoc.three_dots}
              onClick={() => {
                setReportOrDeleteModalVisible(true);
                setReportOrDeleteModalDocId({ docId: content.docId });
                setReportOrDeleteModalType(Modal_Type.DOC);
                setReportOrDeleteModalDeleteState(
                  myEncryptedUid === content.encryptedUid
                );
              }}
            />
          )}
          <ExtraContentWrapper>
            <LikeCountText>
              <img
                src={mainPageIcons.heart}
                alt="하트 아이콘"
                style={{ width: "13px", marginRight: " 4px" }}
              />
              <div>{content.likeCount}</div>
              <div style={{ margin: " 0px 2px 0px 4px", fontSize: "13px" }}>
                |
              </div>
              <img
                src={readDoc.speech_bubble}
                alt="말풍선 아이콘"
                style={{ width: "14px", margin: "0px 4px" }}
              />
              <div>{content.commentCount}</div>
            </LikeCountText>
            {didILikedThisDoc !== null && (
              <CommentButton
                onClick={() => {
                  if (uploading) return;
                  if (didILikedThisDoc) {
                    setSubjectModalVisible(true);
                    setIsCommentWarning(false);
                    return;
                  }
                  message.loading("좋아요 누르는 중..", 10);
                  setUploading(true);
                  departMajorApi
                    .like({ docId: content.docId, like: "LIKE" })
                    .then(() => {
                      message.destroy();
                      setDidILikedThisDoc(true);
                    })
                    .catch(() => {
                      message.destroy();
                    })
                    .finally(() => {
                      setUploading(false);
                    });
                }}>
                <CommentImg
                  src={didILikedThisDoc ? mainPageIcons.heart : Icons.heart}
                  alt={"공감 이미지"}
                />
                <CommentButtonText>공감</CommentButtonText>
              </CommentButton>
            )}
          </ExtraContentWrapper>
        </WhiteContainer>
      )}
      <WhiteContainer>
        <CommentUpperWrapper>
          <CommentUpperText>댓글</CommentUpperText>
        </CommentUpperWrapper>
        {commentLoading ? (
          <LoadingComponent />
        ) : content.commentCount == 0 ? (
          <BlankPost>※ 작성된 댓글이 없습니다. 댓글을 작성해 주세요.</BlankPost>
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
                <CommentDeleteButton
                  src={readDoc.three_dots}
                  alt="더 보기"
                  onClick={() => {
                    setReportOrDeleteModalVisible(true);
                    setReportOrDeleteModalDocId({
                      docId: content.docId,
                      commentId: item.commentId,
                    });
                    setReportOrDeleteModalType(Modal_Type.COMMENT);
                    setReportOrDeleteModalDeleteState(
                      myEncryptedUid === item.encryptedUid
                    );
                  }}
                />
                <CommentChildTitle
                  style={
                    content.encryptedUid === item.encryptedUid
                      ? { color: "#5ac6b9" }
                      : {}
                  }>
                  {content.encryptedUid === item.encryptedUid
                    ? content.nickname
                    : `익명의 슝슝이 ${item.uidIndex}`}
                </CommentChildTitle>
                <CommentChildTime>
                  {item.timestampDistance + " 전"}
                </CommentChildTime>
                <CommentChildText style={{ width: "72%" }}>
                  {item.content}
                </CommentChildText>
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
                  <CommentChildLikeWrapper
                    onClick={() => {
                      if (uploading) return;
                      if (item.didILiked) {
                        setSubjectModalVisible(true);
                        setIsCommentWarning(true);
                        return;
                      }
                      message.loading("좋아요 누르는 중..", 10);
                      setUploading(true);
                      departMajorApi.comment
                        .like({
                          originalDocId: content.docId,
                          commentId: item.commentId,
                        })
                        .then(() => {
                          message.destroy();
                          let tempComments = [...comments];
                          tempComments[idx].likeCount++;
                          tempComments[idx].didILiked = true;
                          setComments(tempComments);
                        })
                        .catch(() => {
                          message.destroy();
                        })
                        .finally(() => {
                          setUploading(false);
                        });
                    }}>
                    <CommentChildLikeImg
                      src={item.didILiked ? mainPageIcons.heart : Icons.heart}
                      alt="하트 아이콘"
                    />
                    <CommentChildLikeCount>
                      {item.likeCount}
                    </CommentChildLikeCount>
                  </CommentChildLikeWrapper>
                </CommentButtonWrapper>
              </CommentChildWrapper>
              {item.subComments.map((subItem, subIdx) => (
                <Box key={`${subIdx}SubComment${idx}`}>
                  <CommentArrow src={Icons.commentarrow} />
                  <CommentChildWrapper
                    style={{
                      backgroundColor: "#f9f9f9",
                      padding: "5px ",
                      marginTT: "5px",
                      width: "90%",
                    }}>
                    <CommentDeleteButton
                      src={readDoc.three_dots}
                      alt="더 보기"
                      onClick={() => {
                        setReportOrDeleteModalVisible(true);
                        setReportOrDeleteModalDocId({
                          docId: content.docId,
                          commentId: item.commentId,
                          subcommentId: subItem.subcommentId,
                        });
                        setReportOrDeleteModalType(Modal_Type.SUBCOMMENT);
                        setReportOrDeleteModalDeleteState(
                          myEncryptedUid === subItem.encryptedUid
                        );
                      }}
                    />
                    <CommentChildTitle
                      style={
                        content.encryptedUid === subItem.encryptedUid
                          ? { color: "#5ac6b9" }
                          : {}
                      }>
                      {content.encryptedUid === subItem.encryptedUid
                        ? content.nickname
                        : `익명의 슝슝이 ${subItem.uidIndex}`}
                    </CommentChildTitle>
                    <CommentChildTime>
                      {subItem.timestampDistance + " 전"}
                    </CommentChildTime>
                    <CommentChildText>{subItem.content}</CommentChildText>
                    <CommentButtonWrapper>
                      <CommentChildLikeWrapper
                        onClick={() => {
                          if (uploading) return;
                          if (subItem.didILiked) {
                            setSubjectModalVisible(true);
                            setIsCommentWarning(true);
                            return;
                          }
                          message.loading("좋아요 누르는 중..", 10);
                          setUploading(true);
                          departMajorApi.comment
                            .likeSubComment({
                              originalDocId: content.docId,
                              commentId: item.commentId,
                              subcommentId: subItem.subcommentId,
                              like: "LIKE",
                            })
                            .then(() => {
                              message.destroy();
                              let tempComments = [...comments];
                              tempComments[idx].subComments[subIdx].likeCount++;
                              tempComments[idx].subComments[
                                subIdx
                              ].didILiked = true;
                              setComments(tempComments);
                            })
                            .catch(() => {
                              message.destroy();
                            })
                            .finally(() => {
                              setUploading(false);
                            });
                        }}>
                        <CommentChildLikeImg
                          src={
                            subItem.didILiked
                              ? mainPageIcons.heart
                              : Icons.heart
                          }
                          alt="하트 아이콘"
                        />
                        <CommentChildLikeCount>
                          {subItem.likeCount}
                        </CommentChildLikeCount>
                      </CommentChildLikeWrapper>
                    </CommentButtonWrapper>
                  </CommentChildWrapper>
                </Box>
              ))}
            </React.Fragment>
          ))
        )}
      </WhiteContainer>
      <CommentInputMargin />
      <CommentInputContainer>
        <form
          autoComplete="off"
          style={{ width: "80%" }}
          onKeyDown={(e) => {
            if (e.key === "Enter") e.preventDefault();
          }}>
          <CommentInputBox
            placeholder={
              subCommentFocusedId === ""
                ? "댓글을 작성하세요"
                : "대댓글을 작성하세요"
            }
            id="commentInputBox"
          />
        </form>
        <CommentInputSubmitButton
          onClick={() => {
            if (uploading) return;
            let commentContent = document.getElementById("commentInputBox")
              .value;
            if (commentContent === "") {
              return message.error("댓글을 입력하세요.");
            }
            setUploading(true);
            message.loading("댓글 작성중입니다..");
            if (subCommentFocusedId === "") {
              departMajorApi.comment
                .create({
                  docId: content.docId,
                  content: commentContent,
                })
                .then(() => {
                  getComments(myEncryptedUid, content).then(() => {
                    let tempContent = { ...content };
                    tempContent.commentCount++;
                    setContent(tempContent);
                    message.destroy();
                    document.getElementById("commentInputBox").value = "";
                  });
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
                  getComments(myEncryptedUid, content).then(() => {
                    let tempContent = { ...content };
                    tempContent.commentCount++;
                    setContent(tempContent);
                    message.destroy();
                    document.getElementById("commentInputBox").value = "";
                  });
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
