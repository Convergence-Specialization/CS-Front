import React from "react";
import styled from "styled-components";

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

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 15px;
  width: 90%;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 30px 20px;
  @media (max-width: 430px){
    padding: 20px 20px;
  }
`;

const Title = styled.div`
  text-align: center;
  color: #437ecb;
  font-weight: bold;
  font-size: 20px;
  @media (max-width: 430px){
    font-size: 15px;
  }
`;

export const SelectSubjectModal = ({
  onClose,
  visible,
  name
}) => {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper onClick={onMaskClick} tabIndex="-1" visible={visible}>
        <ModalInner onClick={onMaskClick} tabIndex="0" className="modal-inner">
          <Title onClick={onMaskClick}>{!!name ? "이미 공감한 댓글입니다." : "이미 공감한 글입니다."}</Title>
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

export default SelectSubjectModal;
