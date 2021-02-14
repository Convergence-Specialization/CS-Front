import React, { useState } from "react";
import styled from "styled-components";
import message from "antd/lib/message";
import { departMajorApi } from "../../../../api";

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
  top: 80%;
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
  docId,
  isDeleteState,
}) => {
  const [uploading, setUploading] = useState();

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper onClick={onMaskClick} tabIndex="-1" visible={visible}>
        <ModalInnerTop tabIndex="0" className="modal-inner">
          {isDeleteState ? (
            <WhiteArea
              onClick={async () => {
                if (uploading) return;
                setUploading(true);
                message.loading("글 삭제중..", 10);
                try {
                  await departMajorApi.delete({ docId });
                  message.destroy();
                  history.push("/board/departmajor");
                } catch (err) {
                  message.destroy();
                  message.error(err.message);
                }
                setUploading(false);
              }}>
              삭제
            </WhiteArea>
          ) : (
            <WhiteArea
              onClick={async () => {
                if (uploading) return;
                setUploading(true);
                message.loading("글 신고중..", 10);
                try {
                  await departMajorApi.report({ docId });
                  message.destroy();
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
              }}>
              신고
            </WhiteArea>
          )}
          <WhiteArea onClick={onClose}>취소</WhiteArea>
        </ModalInnerTop>
      </ModalWrapper>
    </>
  );
};

export default ReportOrDelete;
