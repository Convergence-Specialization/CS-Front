import styled from "styled-components";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { announcementApi } from "../../../../api";
import LoadingSmall from "../../../SmallComponents/LoadingSmall";
import { timeConverter } from "../../../../assets/Dicts";
import Slider from "react-slick";

const Container = styled.div`
  background-color: white;
  margin: 13px 0px;
  width: 93%;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 15px;
  padding: 3px auto;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;
const Con = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 20px;
`;
const BoardText = styled.div`
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const TitleTextBox = styled.div`
  width: 80%;
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
  font-weight: bold;
  padding: 10px 0px 0px 0px;
  width: 90%;
  margin: 10px 3px 0px 3px;
  font-size: 18px;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;
const BoardChildWrapper = styled.div`
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
  margin-top: -6px;
  cursor: pointer;
`;
const Text = styled.div`
  margin-top: 3px;
  margin-left: 5px;
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
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SlickBox1 = styled.div`
  padding: 20px 10px;
  background-color: white;
  border-radius: 10px;
`;

const SlickText = styled.div`
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  width: 50%;
  line-height: 1.3;
  margin: 10px auto;
`;

const SlickDate = styled.div`
  font-size: 12px;
  text-align: center;
  margin-top: 5px;
  @media (max-width: 430px) {
  }
`;
const EventImage = styled.img`
  margin: 0 auto;
  width: 130px;
  height: 130px;
  background-color: black;
`;
const SlickCustomLeftButton = styled.div`
  position: absolute;
  top: 32%;
  left: 10px;
  font-size: 25px;
  z-index: 98;
`;
const SlickCustomRightButton = styled.div`
  position: absolute;
  top: 32%;
  right: 10px;
  font-size: 25px;
  z-index: 98;
`;
const PreView = () => {
  const history = useHistory();
  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 2,
    swipeToSlide: true,
    arrows: false,
  };
  const SlickRef = React.createRef();
  const [announcementPosts, setAnnouncementPosts] = useState([]);
  const [
    announcementOngoingPostExist,
    setAnnouncementOngoingPostExist,
  ] = useState(false);

  const [loading, setLoading] = useState(true);
  const [secretObject, setSecretObject] = useState({
    upperCount: 0,
    lowerCount: 0,
  });

  useEffect(() => {
    announcementApi
      .getLists({ size: 4 })
      .then((docsArray) => {
        setAnnouncementPosts(docsArray);
        docsArray.forEach((item) => {
          if (item.ongoing) {
            setAnnouncementOngoingPostExist(true);
          }
        });
      })
      .catch((error) => console.log(error.message))
      .finally(() => setLoading(false));
  }, []);
  useEffect(() => {
    if (
      secretObject.upperCount >= 4 &&
      secretObject.lowerCount >= 4 &&
      window.confirm("공지사항을 작성하시겠습니까?")
    ) {
      history.push({
        pathname: `/board/announcement`,
        state: {
          pageName: "create",
        },
      });
    }
  }, [secretObject, history]);
  return (
    <Con>
      <BoardTitleContainer>
        <Text
          onClick={async () =>
            setSecretObject({
              ...secretObject,
              upperCount: secretObject.upperCount + 1,
            })
          }>
          진행 중인 행사
        </Text>
      </BoardTitleContainer>
      <Container>
        {loading ? (
          <LoadingSmall />
        ) : !announcementOngoingPostExist ? (
          <BlankPost>※ 진행 중인 행사가 없습니다 ※</BlankPost>
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
                {announcementPosts.map(
                  (item, idx) =>
                    item.ongoing && (
                      <SlickBox key={idx}>
                        <EventImage
                          src={item.imgArray[0]}
                          alt={`이벤트 이미지 ${idx}`}
                          onClick={() =>
                            history.push({
                              pathname: `/board/announcement`,
                              state: {
                                pageName: "read",
                                docItem: item,
                              },
                            })
                          }
                        />
                        <SlickText>{item.title}</SlickText>
                        <SlickDate>{item.eventPeriod}</SlickDate>
                      </SlickBox>
                    )
                )}
              </Slider>
            </SlickBox1>
          </>
        )}
      </Container>
      <BoardTitleContainer>
        <Text
          onClick={async () =>
            setSecretObject({
              ...secretObject,
              lowerCount: secretObject.lowerCount + 1,
            })
          }>
          공지 사항
        </Text>
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
      <Container>
        <BoardContainer>
          {announcementPosts.length === 0 ? (
            <LoadingSmall />
          ) : (
            <>
              {announcementPosts.map((item, idx) => (
                <BoardChildWrapper
                  style={
                    announcementPosts.length - 1 === idx
                      ? {}
                      : { borderBottom: "2.5px solid #f1f1f1" }
                  }
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
