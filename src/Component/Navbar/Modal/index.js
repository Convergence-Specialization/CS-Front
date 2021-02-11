import styled from "styled-components";
import React, { useState } from "react";
import {
  NavOpen,
  NavOpenUpperContainer,
  NavOpenUpperButtonWrapper,
  NavOpenUpperButton,
  NavOpenUpperDescWrapper,
  NavOpenSingleItemBox,
  NavOpenItemText,
  NavOpenItemImg,
  NavOpenItemMargin,
  NavOpenItemArrowButton,
  NavSingleMarginBetween,
} from "../../Navbar/NavbarElements";
import { sideBarIcons } from "../../../assets/Resources";
import { message } from "antd";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../Watchers";
import { authService } from "../../../firebase";

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
  z-index: 999;
`;
const ModalInner = styled.div`
  box-sizing: border-box;
  position: fixed;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: ${(props) => props.width || "375px"};
  transform: translateY(-50%);
`;
export const SelectSubjectModal = ({ onClose, visible, navClicked }) => {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const history = useHistory();
  const user = useAuth();
  const [announceOpened, setAnnounceOpened] = useState(false);
  const [boardOpened, setBoardOpened] = useState(false);
  const [referSiteOpened, setReferSiteOpened] = useState(false);
  return (
    <>
     <ModalOverlay visible={visible} />
      <ModalWrapper onClick={onMaskClick} tabIndex="-1" visible={visible}>
        <ModalInner tabIndex="0" className="modal-inner">
          <NavOpen>
            <NavOpenUpperContainer>
              <NavOpenUpperButtonWrapper>
                {!!user ? (
                  <>
                    <NavOpenUpperButton
                      onClick={() => {
                        authService
                          .signOut()
                          .then(() => {
                            message.success("로그아웃 완료");
                            history.push("/");
                          })
                          .catch((error) => {
                            message.error(error.message);
                          });
                      }}
                    >
                      로그아웃
                    </NavOpenUpperButton>
                    <NavOpenUpperButton onClick={() => history.push("/mypage")}>
                      마이페이지
                    </NavOpenUpperButton>
                  </>
                ) : (
                  <>
                    <NavOpenUpperButton onClick={() => history.push("/login")}>
                      로그인
                    </NavOpenUpperButton>
                    <NavOpenUpperButton onClick={() => history.push("/signup")}>
                      회원가입
                    </NavOpenUpperButton>
                  </>
                )}
              </NavOpenUpperButtonWrapper>
              <NavOpenUpperDescWrapper>
                {!!user
                  ? (!!user.displayName ? user.displayName : "융슝이").concat(
                      "님 환영합니다"
                    )
                  : "로그인을 해주세요"}
              </NavOpenUpperDescWrapper>
            </NavOpenUpperContainer>
            <NavOpenSingleItemBox onClick={() => history.push("/")}>
              <NavOpenItemImg src={sideBarIcons.home} alt={"집 아이콘"} />
              <NavOpenItemText>Home</NavOpenItemText>
            </NavOpenSingleItemBox>
            <NavOpenSingleItemBox onClick={() => history.push("/notification")}>
              <NavOpenItemImg src={sideBarIcons.alarm} alt={"알림함 아이콘"} />
              <NavOpenItemText>알림함</NavOpenItemText>
            </NavOpenSingleItemBox>
            <NavOpenSingleItemBox
              onClick={() => setAnnounceOpened(!announceOpened)}
            >
              <NavOpenItemMargin />
              <NavOpenItemText>학생회 공지사항</NavOpenItemText>
              <NavOpenItemArrowButton
                src={
                  announceOpened
                    ? sideBarIcons.upButton
                    : sideBarIcons.downButton
                }
                alt={"화살표 아이콘"}
              />
            </NavOpenSingleItemBox>
            {announceOpened && (
              <>
                <NavOpenSingleItemBox
                  isChild
                  onClick={() => history.push("/board/announcement")}
                >
                  <NavOpenItemMargin />
                  <NavOpenItemText
                    onClick={() => history.push("/board/announcement")}
                  >
                    공지사항
                  </NavOpenItemText>
                </NavOpenSingleItemBox>
                <NavOpenSingleItemBox
                  isChild
                  onClick={() => history.push("/board/event")}
                >
                  <NavOpenItemMargin />
                  <NavOpenItemText>학부 행사</NavOpenItemText>
                </NavOpenSingleItemBox>
              </>
            )}
            <NavOpenSingleItemBox onClick={() => setBoardOpened(!boardOpened)}>
              <NavOpenItemMargin />
              <NavOpenItemText>게시판</NavOpenItemText>
              <NavOpenItemArrowButton
                src={
                  boardOpened ? sideBarIcons.upButton : sideBarIcons.downButton
                }
                alt={"화살표 아이콘"}
              />
            </NavOpenSingleItemBox>
            {boardOpened && (
              <>
                <NavOpenSingleItemBox
                  isChild
                  onClick={() => history.push("/board/convergence")}
                >
                  <NavOpenItemMargin />
                  <NavOpenItemText
                    onClick={() => history.push("/board/convergence")}
                  >
                    융특게시판
                  </NavOpenItemText>
                </NavOpenSingleItemBox>
                <NavOpenSingleItemBox
                  isChild
                  onClick={() => history.push("/board/departmajor")}
                >
                  <NavOpenItemMargin />
                  <NavOpenItemText
                    onClick={() => history.push("/board/departmajor")}
                  >
                    전과게시판
                  </NavOpenItemText>
                </NavOpenSingleItemBox>
              </>
            )}
            <NavOpenSingleItemBox
              onClick={() => setReferSiteOpened(!referSiteOpened)}
            >
              <NavOpenItemMargin />
              <NavOpenItemText>관련 사이트</NavOpenItemText>
              <NavOpenItemArrowButton
                src={
                  referSiteOpened
                    ? sideBarIcons.upButton
                    : sideBarIcons.downButton
                }
                alt={"화살표 아이콘"}
              />
            </NavOpenSingleItemBox>
            {referSiteOpened && (
              <>
                <NavOpenSingleItemBox
                  isChild
                  onClick={() => window.open("https://ssu.ac.kr/")}
                >
                  <NavOpenItemMargin />
                  <NavOpenItemText
                    onClick={() => window.open("https://ssu.ac.kr/")}
                  >
                    숭실대학교 홈페이지
                  </NavOpenItemText>
                </NavOpenSingleItemBox>
                <NavOpenSingleItemBox
                  isChild
                  onClick={() =>
                    window.open("https://saint.ssu.ac.kr/irj/portal")
                  }
                >
                  <NavOpenItemMargin />
                  <NavOpenItemText
                    onClick={() =>
                      window.open("https://saint.ssu.ac.kr/irj/portal")
                    }
                  >
                    유세인트
                  </NavOpenItemText>
                </NavOpenSingleItemBox>
                <NavOpenSingleItemBox
                  isChild
                  onClick={() => window.open("http://myclass.ssu.ac.kr/")}
                >
                  <NavOpenItemMargin />
                  <NavOpenItemText
                    onClick={() => window.open("http://myclass.ssu.ac.kr/")}
                  >
                    스마트캠퍼스
                  </NavOpenItemText>
                </NavOpenSingleItemBox>
                <NavOpenSingleItemBox
                  isChild
                  onClick={() =>
                    window.open("http://pre.ssu.ac.kr/web/convergence")
                  }
                >
                  <NavOpenItemMargin />
                  <NavOpenItemText
                    onClick={() =>
                      window.open("http://pre.ssu.ac.kr/web/convergence")
                    }
                  >
                    융특 홈페이지
                  </NavOpenItemText>
                </NavOpenSingleItemBox>
              </>
            )}
            <NavOpenSingleItemBox
              onClick={() => history.push("/suggestions")}
            >
              <NavOpenItemMargin />
              <NavOpenItemText>건의사항</NavOpenItemText>
            </NavOpenSingleItemBox>
            <NavOpenSingleItemBox onClick={() => history.push("/makers")}>
              <NavOpenItemMargin />
              <NavOpenItemText>만든 사람들</NavOpenItemText>
            </NavOpenSingleItemBox>
          </NavOpen>
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

export default SelectSubjectModal;
