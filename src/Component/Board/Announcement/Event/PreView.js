import styled from "styled-components";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { announcementApi } from "../../../../api";
import LoadingSmall from "../../../SmallComponents/LoadingSmall";
import { timeConverter } from "../../../../assets/Dicts";
import Slider from "react-slick";
import { events } from "../../../../assets/Resources";

const Container = styled.div`
  background-color: white;
  margin: 20px 0px;
  width: 93%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
`;
const Con = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const BoardText = styled.div`
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const TitleTextBox = styled.div`
  width: 100%;
  font-size: 10px;
  display: flex;
  margin: 3px 0px;
  flex-direction: column;
  justify-content: space-between;
`;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const BoardTitleContainer = styled.div`
  display: flex;
  border-bottom: 1px solid;
  justify-content: space-between;
  margin: 0px 10px;
  padding: 15px 10px 10px;
  font-size: 18px;
  align-items: center;
  font-weight: bold;
`;
const BoardChildWrapper = styled.div`
  border-bottom: 2.5px solid #f1f1f1;
  padding: 10px 15px 10px 15px;
  justify-content: space-between;
  height: 12vh;
  width: 100%;
  display: flex;
`;
const BoardChildTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const BoardImg = styled.img`
  width: 20%;
  border-radius: 10px;
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
`;
const Text = styled.div`
  margin-top: 3px;
`;
const BlankPost = styled.div`
  padding: 60px 10px;
  margin: 10px auto;
  font-weight: 300;
  font-size: 14px;
  text-align: center;
  color: #848484;
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
  font-weight: bold;
  text-align: center;
  margin-top: 5px;
  @media (max-width: 430px) {
  }
`;

const SlickDate = styled.div`
  font-size: 12px;
  text-align: center;
  margin-top: 2px;
  @media (max-width: 430px) {
  }
`;
const EventImage = styled.img`
  margin-left: 20px;
  width: 130px;
`;
const SlickCustomLeftButton = styled.div`
  position: absolute;
  top: 32%;
  left: 20px;
  font-size: 14px;
  z-index: 98;
`;
const SlickCustomRightButton = styled.div`
  position: absolute;
  top: 32%;
  right: 20px;
  font-size: 14px;
  z-index: 98;
`;
const PreView = () => {
  const history = useHistory();
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    swipeToSlide: true,
    arrows: false,
  };
  const SlickRef = React.createRef();
  const [announcementPosts, setAnnouncementPosts] = useState([]);

  useEffect(() => {
    announcementApi
      .getLists({ size: 4 })
      .then((docsArray) => setAnnouncementPosts(docsArray))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <Con>
      <Container>
        <BoardTitleContainer>
          <Text>진행 중인 행사</Text>
          <Button onClick={() => history.push("/board/announcement")}>
            더보기
          </Button>
        </BoardTitleContainer>
        {announcementPosts.length === 0 ? (
          <BlankPost>※ 작성한 글이 없습니다 ※</BlankPost>
        ) : (
          <>
            <SlickCustomLeftButton onClick={() => SlickRef.current.slickPrev()}>
              {"<"}
            </SlickCustomLeftButton>
            <SlickCustomRightButton
              onClick={() => SlickRef.current.slickNext()}
            >
              {">"}
            </SlickCustomRightButton>
            <SlickBox1>
              <Slider {...settings} ref={SlickRef}>
                <SlickBox>
                  <EventImage
                    src={events.esports}
                    onClick={() => history.push("/board/event/eventpost")}
                  />
                  <SlickText>융특 E-Sports</SlickText>
                  <SlickDate>20.02.03~ 20.02.04</SlickDate>
                </SlickBox>
                <SlickBox>
                  <EventImage src={events.graduate} />
                  <SlickText>융퀴즈 온 더 전과</SlickText>
                  <SlickDate>20.02.03~ 20.02.04</SlickDate>
                </SlickBox>
                <SlickBox>
                  <EventImage src={events.ssuevent} />
                  <SlickText>SSU 캐슬</SlickText>
                  <SlickDate>20.02.03~ 20.02.04</SlickDate>
                </SlickBox>
              </Slider>
            </SlickBox1>
          </>
        )}
      </Container>
      <Container>
        <BoardTitleContainer>
          <Text>공지 사항</Text>
          <Button
            onClick={() =>
              history.push({
                pathname: `/board/announcement`,
                state: {
                  pageName: "listview",
                },
              })
            }
          >
            더보기
          </Button>
        </BoardTitleContainer>
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
                  }
                >
                  <TitleTextBox>
                    <BoardChildTitle>{item.title}</BoardChildTitle>
                    <BoardText>{item.content}</BoardText>
                    {timeConverter(item.timestampMillis)}
                  </TitleTextBox>
                  {!!item.imgArray[0] && (
                    <BoardImg
                      src={item.imgArray[0]}
                      alt={`${idx}IMAGE_ANNOUNCE`}
                    />
                  )}
                </BoardChildWrapper>
              ))}
            </>
          )}
        </BoardContainer>
      </Container>
    </Con>
  );
};
export default PreView;
