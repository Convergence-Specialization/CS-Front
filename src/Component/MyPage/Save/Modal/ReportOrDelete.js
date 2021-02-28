import React, { useState } from "react";
import styled from "styled-components";
import message from "antd/lib/message";
import { convergenceApi } from "../../../../api";

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInnerTop = styled.div`
  box-sizing: border-box;
  position: relative;
  border-radius: 10px;
  width: ${(props) => props.width || "360px"};
  top: 85%;
  outline: none;
  margin: 0 auto;
`;
const WhiteArea = styled.div`
  width: 95%;
  margin: 10px auto;
  border-radius: 20px;
  padding: 12px 0;
  text-align: center;
  color: #437ecb;
  background-color: white;
  font-size: 17px;
`;

export const ReportOrDelete = ({
  onClose,
  visible,
  history,
  modalType,
  docId,
  isDeleteState,
  reloadComments,
}) => {
  const [uploading, setUploading] = useState();

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const actionByTypes = {
    DOC: {
      delete: async () => {
        if (uploading) return;
        setUploading(true);
        message.loading("글 삭제중..", 10);
        try {
          await convergenceApi.delete({ docId: docId.docId });
          message.destroy();
          history.push("/board/convergence");
        } catch (err) {
          message.destroy();
          message.error(err.message);
        }
        setUploading(false);
      },
      report: async () => {
        if (uploading) return;
        setUploading(true);
        message.loading("글 신고중..", 10);
        try {
          await convergenceApi.report({ docId: docId.docId });
          message.destroy();
          message.success("신고가 완료되었습니다.");
          onClose();
        } catch (err) {
          message.destroy();
          if (err.response.status === 400) {
            message.error("이미 신고한 글입니다.");
          } else {
            message.error(err.message);
          }
        }
        setUploading(false);
      },
    },
    COMMENT: {
      delete: async () => {
        if (uploading) return;
        setUploading(true);
        message.loading("댓글 삭제중..", 10);
        try {
          await convergenceApi.comment.delete({
            originalDocId: docId.docId,
            commentId: docId.commentId,
          });
          message.destroy();
          reloadComments();
          onClose();
        } catch (err) {
          message.destroy();
          message.error(err.message);
        }
        setUploading(false);
      },
      report: async () => {
        if (uploading) return;
        setUploading(true);
        message.loading("댓글 신고중..", 10);
        try {
          await convergenceApi.comment.report({
            originalDocId: docId.docId,
            commentId: docId.commentId,
          });
          message.destroy();
          message.success("신고가 완료되었습니다.");
          onClose();
        } catch (err) {
          message.destroy();
          if (err.response.status === 400) {
            message.error("이미 신고한 댓글입니다.");
          } else {
            message.error(err.message);
          }
        }
        setUploading(false);
      },
    },
    SUBCOMMENT: {
      delete: async () => {
        if (uploading) return;
        setUploading(true);
        message.loading("댓글 삭제중..", 10);
        try {
          await convergenceApi.comment.deleteSubComment({
            originalDocId: docId.docId,
            commentId: docId.commentId,
            subcommentId: docId.subcommentId,
          });
          message.destroy();
          reloadComments();
          onClose();
        } catch (err) {
          message.destroy();
          message.error(err.message);
        }
        setUploading(false);
      },
      report: async () => {
        if (uploading) return;
        setUploading(true);
        message.loading("댓글 신고중..", 10);
        try {
          await convergenceApi.comment.reportSubComment({
            originalDocId: docId.docId,
            commentId: docId.commentId,
            subcommentId: docId.subcommentId,
          });
          message.destroy();
          message.success("신고가 완료되었습니다.");
          onClose();
        } catch (err) {
          message.destroy();
          if (err.response.status === 400) {
            message.error("이미 신고한 댓글입니다.");
          } else {
            message.error(err.message);
          }
        }
        setUploading(false);
      },
    },
  };

  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper onClick={onMaskClick} tabIndex="-1" visible={visible}>
        <ModalInnerTop tabIndex="0" className="modal-inner">
          <WhiteArea
            onClick={
              isDeleteState
                ? actionByTypes[modalType].delete
                : actionByTypes[modalType].report
            }
          >
            {isDeleteState ? "삭제" : "신고"}
          </WhiteArea>
          <WhiteArea style={{ fontWeight: "bold" }} onClick={onClose}>
            취소
          </WhiteArea>
        </ModalInnerTop>
      </ModalWrapper>
    </>
  );
};

export default ReportOrDelete;
