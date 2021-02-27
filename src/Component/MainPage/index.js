import styled from "styled-components";
import { major, navbotIcons, readDoc } from "../../assets/Resources";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { announcementApi, convergenceApi, departMajorApi } from "../../api";
import LoadingSmall from "../SmallComponents/LoadingSmall";

const Container = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  background-color: white;
  padding-bottom: 3px;
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: start;
  margin-left: 30px;
  @media (max-width: 430px) {
    margin-left: 20px;
  }
`;
const TitleIconImg = styled.img`
  width: 25px;
  @media (max-width: 430px) {
    width: 20px;
  }
`;
const Title = styled.div`
  margin-left: 6px;
  font-weight: bold;
  font-size: 20px;
  line-height: 1.17;
  color: #242323;
  @media (max-width: 430px) {
    font-size: 15px;
  }
`;
const TitleElement = ({ src, name }) => (
  <TitleWrapper>
    <TitleIconImg src={src} alt={"제목 아이콘"} />
    <Title>{name}</Title>
  </TitleWrapper>
);
const BoardContainer = styled.div`
  border-radius: 20px;
  background-color: #f1f1f1;
  padding: 0px 10px 10px;
  margin: 10px 20px 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 430px) {
    margin: 10px 10px 30px 10px;
  }
`;
const BoardChildWrapper = styled.div`
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  line-height: 1.12;
  color: #444444;
  background-color: white;
  @media (max-width: 430px) {
    font-size: 13px;
  }
`;
const BoardChildTitle = styled.div`
  line-height: 1.12;
  color: #444444;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 200px;
  @media (max-width: 430px) {
    font-size: 13px;
  }
`;
const DepartmentSubWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const TitleAndButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  justify-content: space-between;
  width: 94%;
`;
const Button = styled.div`
  text-align: center;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #d4e6fb;
  cursor: pointer;
  @media (max-width: 430px) {
    font-size: 12px;
  }
`;
const Slick = styled.div`
  background-color: #f1f1f1;
  margin: 10px 20px 30px 20px;
  padding: 10px;
  border-radius: 20px;
  @media (max-width: 430px) {
    margin: 10px 10px 30px 10px;
  }
`;
const SlickBox = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SlickBox1 = styled.div`
  padding: 10px;
  position: relative;
  background-color: white;
  border-radius: 10px;
`;
const SlickText = styled.div`
  font-size: 13px;
  text-align: center;
  margin-top: 8px;
  @media (max-width: 430px) {
  }
`;
const SlickCustomLeftButton = styled.div`
  position: absolute;
  top: 40%;
  left: 5px;
  font-size: 14px;
  z-index: 98;
`;
const SlickCustomRightButton = styled.div`
  position: absolute;
  top: 40%;
  right: 5px;
  font-size: 14px;
  z-index: 98;
`;
const IntroduceImage = styled.img`
  margin: 0 auto;
  width: 40px;
`;

const MainPage = () => {
  const history = useHistory();
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [announcementPosts, setAnnouncementPosts] = useState([]);
  const [departmajorPosts, setDepartmajorPosts] = useState([]);
  const [convergencePosts, setConvergencePosts] = useState([]);

  useEffect(() => {
    // TEST
    console.log("테스트", process.env.REACT_APP_TEST);

    announcementApi
      .getLists({ size: 2 })
      .then((docsArray) => setAnnouncementPosts(docsArray))
      .catch((error) => console.log(error.message));
    convergenceApi
      .getLists({ size: 5 })
      .then((docsArray) => setConvergencePosts(docsArray))
      .catch((error) => console.log(error.message));
    departMajorApi
      .getLists({ size: 5 })
      .then((docsArray) => setDepartmajorPosts(docsArray))
      .catch((error) => console.log(error.message));
  }, []);

  const SlickRef = React.createRef();

  return (
    <Container>
      <TitleAndButtonWrapper>
        <TitleElement src={navbotIcons.announce} name={"공지사항"} />
        <Button onClick={() => history.push("/board/announcement")}>
          더보기
        </Button>
      </TitleAndButtonWrapper>
      <BoardContainer>
        {announcementPosts.length === 0 ? (
          <LoadingSmall />
        ) : (
          <>
            {announcementPosts.map((item, idx) => (
              <BoardChildWrapper
                key={`${idx}ANNOUNCEMENT_PREVIEW`}
                onClick={() =>
                  history.push({
                    pathname: `/board/announcement`,
                    state: {
                      pageName: "read",
                      docItem: item,
                    },
                  })
                }>
                <BoardChildTitle>{item.title}</BoardChildTitle>
              </BoardChildWrapper>
            ))}
          </>
        )}
      </BoardContainer>
      <TitleElement src={navbotIcons.airplane} name={"융합전공 소개"} />
      <Slick>
        <SlickBox1>
          <SlickCustomLeftButton onClick={() => SlickRef.current.slickPrev()}>
            {"<"}
          </SlickCustomLeftButton>
          <SlickCustomRightButton onClick={() => SlickRef.current.slickNext()}>
            {">"}
          </SlickCustomRightButton>
          <Slider {...settings} ref={SlickRef}>
            <SlickBox>
              <IntroduceImage
                src={major.Car}
                onClick={() =>
                  history.push({
                    pathname: "/board/majorintroduce",
                    state: { whichClicked: "SMART_CAR" },
                  })
                }
              />
              <SlickText>스마트 자동차</SlickText>
            </SlickBox>
            <SlickBox>
              <IntroduceImage
                src={major.Energy}
                onClick={() =>
                  history.push({
                    pathname: "/board/majorintroduce",
                    state: { whichClicked: "ENERGY_SCIENCE" },
                  })
                }
              />
              <SlickText>에너지 공학</SlickText>
            </SlickBox>
            <SlickBox>
              <IntroduceImage
                src={major.Security}
                onClick={() =>
                  history.push({
                    pathname: "/board/majorintroduce",
                    state: { whichClicked: "SECURITY" },
                  })
                }
              />
              <SlickText>정보보호</SlickText>
            </SlickBox>
            <SlickBox>
              <IntroduceImage
                src={major.BigData}
                onClick={() =>
                  history.push({
                    pathname: "/board/majorintroduce",
                    state: { whichClicked: "BIG_DATA" },
                  })
                }
              />
              <SlickText>빅데이터</SlickText>
            </SlickBox>
            <SlickBox>
              <IntroduceImage
                src={major.Ict}
                onClick={() =>
                  history.push({
                    pathname: "/board/majorintroduce",
                    state: { whichClicked: "ICT" },
                  })
                }
              />
              <SlickText>ICT 유통물류</SlickText>
            </SlickBox>
            <SlickBox>
              <IntroduceImage
                src={major.Unification}
                onClick={() =>
                  history.push({
                    pathname: "/board/majorintroduce",
                    state: { whichClicked: "KOREA" },
                  })
                }
              />
              <SlickText>통일외교</SlickText>
            </SlickBox>
          </Slider>
        </SlickBox1>
      </Slick>
      <TitleAndButtonWrapper>
        <TitleElement src={navbotIcons.airplane} name={"융특 게시판"} />
        <Button onClick={() => history.push("/board/convergence")}>
          더보기
        </Button>
      </TitleAndButtonWrapper>
      <BoardContainer>
        {convergencePosts.length === 0 ? (
          <LoadingSmall />
        ) : (
          convergencePosts.map((item, idx) => (
            <BoardChildWrapper
              key={`${idx}CONVERGENCE_PREVIEW`}
              onClick={() =>
                history.push({
                  pathname: `/board/convergence`,
                  state: {
                    pageName: "read",
                    docItem: item,
                  },
                })
              }>
              <BoardChildTitle>{item.content}</BoardChildTitle>
              <DepartmentSubWrapper>
                <img
                  style={{ width: "15px", margin: "0 7px" }}
                  src={readDoc.heart_fill}
                  alt="heart"
                />
                <span>{item.likeCount}</span>
                <img
                  style={{ width: "15px", margin: "0 7px" }}
                  src={readDoc.speech_bubble}
                  alt="comment"
                />
                <span>{item.commentCount}</span>
              </DepartmentSubWrapper>
            </BoardChildWrapper>
          ))
        )}
      </BoardContainer>
      <TitleAndButtonWrapper>
        <TitleElement src={navbotIcons.airplane} name={"전과 게시판"} />
        <Button onClick={() => history.push("/board/departmajor")}>
          더보기
        </Button>
      </TitleAndButtonWrapper>
      <BoardContainer>
        {convergencePosts.length === 0 ? (
          <LoadingSmall />
        ) : (
          departmajorPosts.map((item, idx) => (
            <BoardChildWrapper
              key={`${idx}DEPARTMAJOR_PREVIEW`}
              onClick={() =>
                history.push({
                  pathname: `/board/departmajor`,
                  state: {
                    pageName: "read",
                    docItem: item,
                  },
                })
              }>
              <BoardChildTitle>{item.title}</BoardChildTitle>
              <DepartmentSubWrapper>
                <img
                  style={{ width: "15px", margin: "0 7px" }}
                  src={readDoc.heart_fill}
                  alt="heart"
                />
                <span>{item.likeCount}</span>
                <img
                  style={{ width: "15px", margin: "0 7px" }}
                  src={readDoc.speech_bubble}
                  alt="comment"
                />
                <span>{item.commentCount}</span>
              </DepartmentSubWrapper>
            </BoardChildWrapper>
          ))
        )}
      </BoardContainer>
    </Container>
  );
};
export default MainPage;
