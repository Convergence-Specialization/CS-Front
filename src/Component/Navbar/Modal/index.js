import styled from "styled-components";
import React, { useState, useEffect } from "react";
import {
  NavOpen,
  NavOpenUpperContainer,
  NavOpenUpperButtonWrapper,
  NavOpenUpperButton,
  NavOpenUpperDescWrapper,
  NavOpenSingleItemBox,
  NavOpenItemText,
  NavInItemText,
  NavOpenItemMargin,
  NavOpenItemArrowButton,
  InformationWrapper,
  InformationText,
  NavOpenUpperButtonBox,
  NavImg,
  NavImgBox,
  NavText,
  NavImgTextBox,
  NavOpenSingleChildItemBox,
  Margin,
  NavBotBox,
  NavBotText,
  NavBotTextBox,
  NavTopText,
  CancelImg,
} from "../../Navbar/NavbarElements";
import { sideBarIcons, navIcons } from "../../../assets/Resources";
import message from "antd/lib/message";
import { useHistory } from "react-router-dom";
import { loginFunctions, useAuth } from "../../Watchers";
import { authService } from "../../../firebase";
import { userApi } from "../../../api";

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
  z-index: 1000;
`;
const ModalInner = styled.div`
  box-sizing: border-box;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  outline: none;
  width: ${(props) => props.width || "375px"};
  z-index: 999;
`;

export const NavModal = ({ onClose, visible, navClicked }) => {
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
  const [myInfo, setMyInfo] = useState(null);
  useEffect(() => {
    const userInfo = loginFunctions.getUserInfo();
    if (!userInfo) return;
    userApi
      .getMyInfo({ uid: userInfo.uid })
      .then((info) => setMyInfo(info))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper onClick={onMaskClick} tabIndex="-1" visible={visible}>
        <ModalInner tabIndex="0" className="modal-inner">
          <CancelImg onClick={onMaskClick} src={navIcons.cancel} alt={"엑스"} />
          <NavOpen>
            <NavOpenUpperContainer>
              <NavOpenUpperButtonWrapper>
                <NavOpenUpperDescWrapper>
                  {!!user
                    ? (user.displayName || "융슝이").concat(" 님")
                    : "로그인 후 이용해주세요."}
                </NavOpenUpperDescWrapper>
                {!!user ? (
                  <>
                    <InformationWrapper>
                      <InformationText style={{ marginBottom: "10px" }}>
                        학번 : {!!myInfo ? myInfo.student_id : "학번을 불러오는 중입니다."}
                      </InformationText>
                      <InformationText>
                        이메일 : {!!myInfo ? myInfo.email : "이메일을 불러오는 중입니다."}
                      </InformationText>
                    </InformationWrapper>
                  </>
                ) : (
                  <NavOpenUpperButtonBox>
                    <NavOpenUpperButton onClick={() => history.push("/login")}>
                      로그인
                    </NavOpenUpperButton>
                    <NavOpenUpperButton onClick={() => history.push("/signup")}>
                      회원가입
                    </NavOpenUpperButton>
                  </NavOpenUpperButtonBox>
                )}
              </NavOpenUpperButtonWrapper>
            </NavOpenUpperContainer>
            <NavImgBox>
              <NavImgTextBox onClick={() => history.push("/mypage")}>
                <NavImg src={navIcons.myPage} alt={"마이페이지"} />
                <NavText>마이페이지</NavText>
              </NavImgTextBox>
              <NavImgTextBox onClick={() => history.push("/makers")}>
                <NavImg src={navIcons.team} alt={"마이페이지"} />
                <NavText>팀 소개</NavText>
              </NavImgTextBox>
              <NavImgTextBox onClick={() => history.push("/suggestions")}>
                <NavImg src={navIcons.suggestions} alt={"건의사항"} />
                <NavText>건의사항</NavText>
              </NavImgTextBox>
            </NavImgBox>
            <Margin />
            <NavOpenSingleItemBox onClick={() => history.push("/")}>
              <NavOpenItemText>Home</NavOpenItemText>
            </NavOpenSingleItemBox>
            <NavOpenSingleItemBox onClick={() => history.push("/notification")}>
              <NavOpenItemText>알림함</NavOpenItemText>
            </NavOpenSingleItemBox>
            <NavOpenSingleItemBox onClick={() => history.push("/howtouse")}>
              <NavOpenItemText>슝 사용법</NavOpenItemText>
            </NavOpenSingleItemBox>
            <Margin />
            <NavOpenSingleItemBox
              onClick={() => {
                setAnnounceOpened(!announceOpened);
                setBoardOpened(false);
                setReferSiteOpened(false);
              }}>
              <NavOpenItemText>공지사항</NavOpenItemText>
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
                <NavOpenSingleChildItemBox
                  isChild
                  onClick={() => history.push("/board/announcement")}>
                  <NavOpenItemMargin />
                  <NavInItemText
                    onClick={() => history.push("/board/announcement")}>
                    - 진행 중인 행사
                  </NavInItemText>
                </NavOpenSingleChildItemBox>
                <NavOpenSingleChildItemBox
                  isChild
                  onClick={() => history.push("/board/event")}>
                  <NavOpenItemMargin />
                  <NavInItemText> - 공지사항</NavInItemText>
                </NavOpenSingleChildItemBox>
              </>
            )}
            <NavOpenSingleItemBox
              onClick={() => {
                setBoardOpened(!boardOpened);
                setAnnounceOpened(false);
                setReferSiteOpened(false);
              }}>
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
                <NavOpenSingleChildItemBox
                  isChild
                  onClick={() => history.push("/board/convergence")}>
                  <NavOpenItemMargin />
                  <NavInItemText>- 융특게시판</NavInItemText>
                </NavOpenSingleChildItemBox>
                <NavOpenSingleChildItemBox
                  isChild
                  onClick={() => history.push("/board/departmajor")}>
                  <NavOpenItemMargin />
                  <NavInItemText>- 전과게시판</NavInItemText>
                </NavOpenSingleChildItemBox>
                <NavOpenSingleChildItemBox
                  isChild
                  onClick={() => history.push("/board/hot")}>
                  <NavOpenItemMargin />
                  <NavInItemText>- 인기 많은 융슝이들</NavInItemText>
                </NavOpenSingleChildItemBox>
                <NavOpenSingleChildItemBox
                  isChild
                  onClick={() => history.push("/board/promotion")}>
                  <NavOpenItemMargin />
                  <NavInItemText>- 홍보게시판</NavInItemText>
                </NavOpenSingleChildItemBox>
              </>
            )}
            <NavOpenSingleItemBox
              onClick={() => {
                setReferSiteOpened(!referSiteOpened);
                setBoardOpened(false);
                setAnnounceOpened(false);
              }}>
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
                <NavOpenSingleChildItemBox
                  isChild
                  onClick={() => window.open("https://ssu.ac.kr/")}>
                  <NavOpenItemMargin />
                  <NavInItemText>- 숭실대학교 홈페이지</NavInItemText>
                </NavOpenSingleChildItemBox>
                <NavOpenSingleChildItemBox
                  isChild
                  onClick={() =>
                    window.open("https://saint.ssu.ac.kr/irj/portal")
                  }>
                  <NavOpenItemMargin />
                  <NavInItemText>- 유세인트</NavInItemText>
                </NavOpenSingleChildItemBox>
                <NavOpenSingleChildItemBox
                  isChild
                  onClick={() => window.open("http://myclass.ssu.ac.kr/")}>
                  <NavOpenItemMargin />
                  <NavInItemText>- 스마트캠퍼스</NavInItemText>
                </NavOpenSingleChildItemBox>
                <NavOpenSingleChildItemBox
                  isChild
                  onClick={() =>
                    window.open("http://pre.ssu.ac.kr/web/convergence")
                  }>
                  <NavOpenItemMargin />
                  <NavInItemText>- 융특 홈페이지</NavInItemText>
                </NavOpenSingleChildItemBox>
              </>
            )}
            <NavBotBox>
              <Margin />
              <NavBotTextBox>
                {!!user ? (
                  <NavTopText
                    onClick={() => {
                      authService
                        .signOut()
                        .then(() => {
                          loginFunctions.onLogout();
                          message.success("로그아웃 완료");
                          history.push("/");
                        })
                        .catch((error) => {
                          message.error(error.message);
                        });
                    }}>
                    로그아웃
                  </NavTopText>
                ) : (
                  <NavTopText onClick={() => history.push("/login")}>
                    로그인
                  </NavTopText>
                )}
                <NavTopText>|</NavTopText>
                <NavTopText onClick={() => history.push("/termsandconditions")}>
                  이용약관
                </NavTopText>
              </NavBotTextBox>
              <NavBotText>SSYUNG</NavBotText>
            </NavBotBox>
          </NavOpen>
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

export default NavModal;
