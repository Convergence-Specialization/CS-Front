import React from "react";
import { useHistory } from "react-router-dom";
import {
  ModalWrapper,
  ModalOverlay,
  ModalInner,
  WithdrawTitle,
  WithdrawContainer,
  WithdrawDesc,
  WithdrawTextarea,
  WithdrawConfirmButton,
  WithdrawSubTitle,
} from "./Modal_Styles";
import message from "antd/lib/message";
import { userApi } from "../../../api";
import { loginFunctions } from "../../Watchers";
import { authService } from "../../../firebase";

export const WithdrawalModal = ({ onClose, visible }) => {
  const history = useHistory();
  const confirmClicked = async () => {
    message.loading("탈퇴 처리중입니다..", 10);
    try {
      await userApi.withdraw({
        reason: document.getElementById("withdrawalTextarea").value,
      });
      await authService.signOut();
      history.push("/");
      message.destroy();
      message.success("탈퇴가 완료되었습니다.");
      loginFunctions.onLogout();
      onClose();
    } catch (err) {
      message.destroy();
      message.error(err.message);
    }
  };

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper onClick={onMaskClick} tabIndex="-1" visible={visible}>
        <ModalInner tabIndex="0" className="modal-inner" width={"350px"}>
          <WithdrawContainer>
            <WithdrawTitle>회원탈퇴</WithdrawTitle>
            <WithdrawSubTitle>
              탈퇴하시기 전 아래 안내 사항을 다시 한번 확인해주세요.
            </WithdrawSubTitle>
            <WithdrawDesc>
              1. 회원 탈퇴 시, 현재 로그인된 아이디는 즉시 탈퇴 처리됩니다.
              <br />
              2. 회원 탈퇴 시, 슝에 작성한 게시글 및 댓글은 자동 삭제되지
              않습니다. 삭제를 원하실 경우, 직접 삭제 후 탈퇴를 진행해 주세요.
            </WithdrawDesc>
            <WithdrawTextarea
              id="withdrawalTextarea"
              placeholder={"슝 탈퇴 사유를 알려주세요."}
            />
            <WithdrawConfirmButton onClick={confirmClicked}>
              탈퇴하기
            </WithdrawConfirmButton>
          </WithdrawContainer>
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

export default WithdrawalModal;
