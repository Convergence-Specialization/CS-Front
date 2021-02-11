import styled from "styled-components";
import { mainPageIcons } from "../../assets/Resources";
import { useHistory } from "react-router-dom";
import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import { departMajorApi } from "../../api";

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
  @media (max-width: 430px) {
    font-size: 13px;
  }
`;
const BoardAnnounceSubText = styled.div``;
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
  @media (max-width: 430px) {
  }
`;
const SlickBox1 = styled.div`
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  @media (max-width: 430px) {
  }
`;
const SlickText = styled.div`
  font-size: 13px;
  text-align: center;
  margin-top: 8px;
  @media (max-width: 430px) {
  }
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
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    departMajorApi
      .getLists({ size: 5 })
      .then((docsArray) => setPosts(docsArray))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <Container>
      <TitleAndButtonWrapper>
        <TitleElement src={mainPageIcons.announce} name={"공지사항"} />
        <Button onClick={() => history.push("/board/announcement")}>
          더보기
        </Button>
      </TitleAndButtonWrapper>
      <BoardContainer>
        <BoardChildWrapper>
          <BoardChildTitle>추석맞이 융병호 게임</BoardChildTitle>
          <BoardAnnounceSubText>22.10.24~22.42.12</BoardAnnounceSubText>
        </BoardChildWrapper>
        <BoardChildWrapper>
          <BoardChildTitle>추석맞이 융병호 게임</BoardChildTitle>
          <BoardAnnounceSubText>22.10.24~22.42.12</BoardAnnounceSubText>
        </BoardChildWrapper>
      </BoardContainer>
      <TitleElement src={mainPageIcons.airplane} name={"융합전공 소개"} />
      <Slick>
        <SlickBox1>
          <Slider {...settings}>
            <SlickBox>
              <IntroduceImage
                src={mainPageIcons.Car}
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
                src={mainPageIcons.Energy}
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
                src={mainPageIcons.Security}
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
                src={mainPageIcons.BigData}
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
                src={mainPageIcons.Ict}
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
                src={mainPageIcons.Unification}
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
        <TitleElement src={mainPageIcons.airplane} name={"융특 게시판"} />
        <Button onClick={() => history.push("/board/convergence")}>
          더보기
        </Button>
      </TitleAndButtonWrapper>
      <BoardContainer>
        <BoardChildWrapper>12시 기상</BoardChildWrapper>
        <BoardChildWrapper>6시간 코딩</BoardChildWrapper>
        <BoardChildWrapper>30분 치킨</BoardChildWrapper>
        <BoardChildWrapper>4시간 코딩</BoardChildWrapper>
        <BoardChildWrapper>5시간 취침</BoardChildWrapper>
      </BoardContainer>
      <TitleAndButtonWrapper>
        <TitleElement src={mainPageIcons.airplane} name={"전과 게시판"} />
        <Button onClick={() => history.push("/board/departmajor")}>
          더보기
        </Button>
      </TitleAndButtonWrapper>
      <BoardContainer>
        {posts.length !== 0 &&
          posts.map((item, idx) => (
            <BoardChildWrapper key={`${idx}DEPARTMAJOR_PREVIEW`}>
              <BoardChildTitle>{item.content}</BoardChildTitle>
              <DepartmentSubWrapper>
                <img
                  style={{ width: "15px", margin: "0 7px" }}
                  src={mainPageIcons.heart}
                  alt="heart"
                />
                <span>{item.likeCount}</span>
                <img
                  style={{ width: "15px", margin: "0 7px" }}
                  src={mainPageIcons.comment}
                  alt="comment"
                />
                <span>{item.commentCount}</span>
              </DepartmentSubWrapper>
            </BoardChildWrapper>
          ))}
      </BoardContainer>
    </Container>
  );
};
export default MainPage;
