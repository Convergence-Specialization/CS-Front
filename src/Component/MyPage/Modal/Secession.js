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

export const WithdrawalModal = ({ onClose, visible }) => {
  const history = useHistory();
  const confirmClicked = () => {
    message.loading("로딩중입니다.", 10);
    let causeText = document.getElementById("withdrawalTextarea").value;
    if (causeText === null || causeText.trim() === "") {
      message.destroy();
      message.warning("탈퇴 사유를 입력해주세요.");
      document.getElementById("withdrawalTextarea").focus();
      return;
    }
    userApi
      .withdrawal(
        localStorage.getItem("userId"),
        { cause: causeText },
        localStorage.getItem("AccessToken")
      )
      .then(() => {
        message.destroy();
        message.success("탈퇴가 완료되었습니다.");
        localStorage.clear();
        history.push("/");
      })
      .catch(({ response: { status } }) => {
        if (status === 401) {
          message.destroy();
          message.error("인증 토큰에 문제가 있습니다. 다시 로그인해주세요.");
        } else if (status === 404) {
          message.destroy();
          message.error("탈퇴할 사용자가 없습니다.");
        } else if (status === 409) {
          message.destroy();
          message.error("이미 탈퇴한 사용자입니다.");
        } else if (status === 400) {
          message.destroy();
          message.error("요청 형식에 문제가 있습니다.");
        }
      });
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
              2. 회원 탈퇴 시, 슝에 관련된 모든 데이터는 삭제되며, 복구할 수
              없습니다.
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
