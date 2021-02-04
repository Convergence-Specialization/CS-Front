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
  NavSingleBottomItemBox,
  NavSingleBottomTopItemBox,
} from "./NavbarElements";
import { useHistory } from "react-router-dom";
import { useAuth } from "../Watchers";
import { mainPageIcons, sideBarIcons } from "../../assets/Resources";
import { message } from "antd";
import { authService } from "../../firebase";

const Navbar = ({
  Navname,
  isTransparent,
  isRight1Disabled,
  isRight2Disabled,
  IconRight1,
  Iconleft,
  IconNameRight1,
  IconRight2,
  IconNameRight2,
  History,
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
          {!Iconleft && <Bars onClick={() => setNavClicked(!navClicked)} />}
          <NavLink to="/">{!!Navname ? Navname : "융특 커뮤니티 슝"}</NavLink>
          <NavLeftMargin />
          {!isRight1Disabled && (
            <IconImg
              src={IconRight1 || mainPageIcons.notification}
              alt={IconNameRight1 || "아이콘2"}
            />
          )}
          {!isRight2Disabled && (
            <IconImg
              onClick={() => {
                if (user) {
                  history.push("/");
                  if (!History) {
                    history.push("/mypage");
                  } 
                } else {
                  history.push("/login");
                }
              }}
              src={IconRight2 || mainPageIcons.profile}
              alt={IconNameRight2 || "아이콘1"}
            />
          )}
        </Nav>
        <NavOpen
          style={
            navClicked
              ? { left: "0", opacity: "1" }
              : { left: "-100%", opacity: "0" }
          }
        >
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
          <NavOpenSingleItemBox onClick={() => history.push("/")}>
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
                announceOpened ? sideBarIcons.upButton : sideBarIcons.downButton
              }
              alt={"화살표 아이콘"}
            />
          </NavOpenSingleItemBox>
          {announceOpened && (
            <>
              <NavOpenSingleItemBox isChild>
                <NavOpenItemMargin />
                <NavOpenItemText
                  onClick={() => history.push("/board/announcement")}
                >
                  공지사항
                </NavOpenItemText>
              </NavOpenSingleItemBox>
              <NavOpenSingleItemBox isChild>
                <NavOpenItemMargin />
                <NavOpenItemText onClick={() => history.push("/board/event")}>
                  학부 행사
                </NavOpenItemText>
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
                <NavOpenItemText
                  onClick={() => history.push("/board/convergence")}
                >
                  융특게시판
                </NavOpenItemText>
              </NavOpenSingleItemBox>
              <NavOpenSingleItemBox isChild>
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
                <NavOpenItemText
                  onClick={() => window.open("https://ssu.ac.kr/")}
                >
                  숭실대학교 홈페이지
                </NavOpenItemText>
              </NavOpenSingleItemBox>
              <NavOpenSingleItemBox isChild>
                <NavOpenItemMargin />
                <NavOpenItemText
                  onClick={() =>
                    window.open("https://saint.ssu.ac.kr/irj/portal")
                  }
                >
                  유세인트
                </NavOpenItemText>
              </NavOpenSingleItemBox>
              <NavOpenSingleItemBox isChild>
                <NavOpenItemMargin />
                <NavOpenItemText
                  onClick={() => window.open("http://myclass.ssu.ac.kr/")}
                >
                  스마트캠퍼스
                </NavOpenItemText>
              </NavOpenSingleItemBox>
              <NavOpenSingleItemBox isChild>
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
          <NavSingleBottomTopItemBox isChild>
            <NavOpenItemMargin />
            <NavOpenItemText onClick={() => history.push("/")}>
              건의사항
            </NavOpenItemText>
          </NavSingleBottomTopItemBox>
          <NavSingleBottomItemBox isChild>
            <NavOpenItemMargin />
            <NavOpenItemText onClick={() => history.push("/makers")}>
              만든 사람들
            </NavOpenItemText>
          </NavSingleBottomItemBox>
        </NavOpen>
      </NavContainer>
      <NavUpperMargin style={isTransparent ? { display: "none" } : {}} />
    </>
  );
};

export default Navbar;
