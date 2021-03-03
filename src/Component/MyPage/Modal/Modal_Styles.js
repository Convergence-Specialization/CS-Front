import styled from "styled-components";

export const ModalWrapper = styled.div`
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

export const ModalOverlay = styled.div`
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

export const ModalInner = styled.div`
  outline: none;
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: ${(props) => props.width || "360px"};
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 30px 20px;
`;
export const PWTitleText = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 10px;
`;

export const WithdrawContainer = styled.div``;
export const WithdrawTitle = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 15px;
`;
export const WithdrawSubTitle = styled.div`
  color: #7ab8f3;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  word-break: keep-all;
  line-height: 1.3;
`;
export const WithdrawDesc = styled.div`
  word-break: keep-all;
  line-height: 1.3;
  font-size: 14px;
  margin-bottom: 15px;
`;
export const WithdrawTextarea = styled.textarea`
  padding: 15px;
  width: 100%;
  outline: none;
  height: 100px;
  font-size: 13px;
  margin-bottom: 15px;
`;
export const WithdrawConfirmButton = styled.div`
  width: 100%;
  font-weight: bold;
  color: white;
  background-color: #7ab8f3;
  text-align: center;
  padding: 15px 0;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
  }
`;
export const GreyAlertText = styled.div`
  margin-top: 15px;
  color: grey;
  font-size: 12px;
`;
