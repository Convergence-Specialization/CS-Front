import React, { useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavOpen,
  IconImg,
  NavLeftMargin,
  NavContainer,
  NavUpperMargin,
  NavOpenUpperContainer,
  NavOpenUpperButtonWrapper,
  NavOpenUpperButton,
  NavOpenUpperDescWrapper,
  NavOpenSingleItemBox,
  NavOpenItemText,
  NavOpenItemImg,
  NavOpenItemMargin,
  NavOpenItemArrowButton,
} from "./NavbarElements";
import { useHistory } from "react-router-dom";
import { useAuth } from "../Watchers";
import { mainPageIcons, sideBarIcons } from "../../assets/Resources";
import { message } from "antd";
import { authService } from "../../firebase";

const Navbar = ({
  Navname,
  isTransparent,
  IconRight1,
  IconNameRight1,
  IconRight2,
  IconNameRight2,
}) => {
  const user = useAuth();
  const history = useHistory();
  const [navClicked, setNavClicked] = useState(false);

  const [announceOpened, setAnnounceOpened] = useState(false);
  const [boardOpened, setBoardOpened] = useState(false);
  const [referSiteOpened, setReferSiteOpened] = useState(false);
  return (
    <>
      <NavContainer>
        <Nav style={isTransparent ? { backgroundColor: "rgba(0,0,0,0)" } : {}}>
          <Bars onClick={() => setNavClicked(!navClicked)} />
          <NavLink to="/">{!!Navname ? Navname : "융특 커뮤니티 슝"}</NavLink>
          <NavLeftMargin />
          <IconImg
            src={IconRight1 || mainPageIcons.notification}
            alt={IconNameRight1 || "아이콘2"}
          />
          <IconImg
            onClick={() => {
              if (user) {
                history.push("/mypage");
              } else {
                history.push("/login");
              }
            }}
            src={IconRight2 || mainPageIcons.profile}
            alt={IconNameRight2 || "아이콘1"}
          />
        </Nav>
        <NavOpen
          style={
            navClicked
              ? { left: "0", opacity: "1" }
              : { left: "-100%", opacity: "0" }
          }>
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
                    }}>
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
                ? user.displayName.concat("님 환영합니다")
                : "로그인을 해주세요"}
            </NavOpenUpperDescWrapper>
          </NavOpenUpperContainer>
          <NavOpenSingleItemBox>
            <NavOpenItemImg src={sideBarIcons.home} alt={"집 아이콘"} />
            <NavOpenItemText>Home</NavOpenItemText>
          </NavOpenSingleItemBox>
          <NavOpenSingleItemBox>
            <NavOpenItemImg src={sideBarIcons.alarm} alt={"알림함 아이콘"} />
            <NavOpenItemText>알림함</NavOpenItemText>
          </NavOpenSingleItemBox>
          <NavOpenSingleItemBox
            onClick={() => setAnnounceOpened(!announceOpened)}>
            <NavOpenItemMargin />
            <NavOpenItemText>학생회 공지사항</NavOpenItemText>
            <NavOpenItemArrowButton
              src={
                announceOpened ? sideBarIcons.upButton : sideBarIcons.downButton
              }
              alt={"화살표 아이콘"}
            />
          </NavOpenSingleItemBox>
          {announceOpened && (
            <>
              <NavOpenSingleItemBox isChild>
                <NavOpenItemMargin />
                <NavOpenItemText>공지사항</NavOpenItemText>
              </NavOpenSingleItemBox>
              <NavOpenSingleItemBox isChild>
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
              <NavOpenSingleItemBox isChild>
                <NavOpenItemMargin />
                <NavOpenItemText>융특게시판</NavOpenItemText>
              </NavOpenSingleItemBox>
              <NavOpenSingleItemBox isChild>
                <NavOpenItemMargin />
                <NavOpenItemText>전과게시판</NavOpenItemText>
              </NavOpenSingleItemBox>
            </>
          )}
          <NavOpenSingleItemBox
            onClick={() => setReferSiteOpened(!referSiteOpened)}>
            <NavOpenItemMargin />
            <NavOpenItemText>관련 사이트</NavOpenItemText>
            <NavOpenItemArrowButton
              src={
                referSiteOpened
                  ? sideBarIcons.downButton
                  : sideBarIcons.upButton
              }
              alt={"화살표 아이콘"}
            />
          </NavOpenSingleItemBox>
          {referSiteOpened && (
            <>
              <NavOpenSingleItemBox isChild>
                <NavOpenItemMargin />
                <NavOpenItemText>숭실대학교 홈페이지</NavOpenItemText>
              </NavOpenSingleItemBox>
              <NavOpenSingleItemBox isChild>
                <NavOpenItemMargin />
                <NavOpenItemText>유세인트</NavOpenItemText>
              </NavOpenSingleItemBox>
              <NavOpenSingleItemBox isChild>
                <NavOpenItemMargin />
                <NavOpenItemText>스마트캠퍼스</NavOpenItemText>
              </NavOpenSingleItemBox>
              <NavOpenSingleItemBox isChild>
                <NavOpenItemMargin />
                <NavOpenItemText>융특 홈페이지</NavOpenItemText>
              </NavOpenSingleItemBox>
            </>
          )}
        </NavOpen>
      </NavContainer>
      <NavUpperMargin style={isTransparent ? { display: "none" } : {}} />
    </>
  );
};

export default Navbar;
