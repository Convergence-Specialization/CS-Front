import React from "react";
import styled from "styled-components";
import { events } from "../../../../assets/Resources";
import Slider from "react-slick";
import { useHistory } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding-top: 45px;
`;

const BoardContainer = styled.div`
  width: 100%;
  border-radius: 0px;
  background-color: #f1f1f1;
  padding: 0 auto;
  padding-bottom: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const BoardChildWrapper = styled.div`
  margin-top: 13px;
  padding: 10px;
  width: 93%;
  height: 250px;
  border-radius: 15px;
  justify-content: space-between;
  align-items: center;
  line-height: 1.12;
  color: #444444;
  background-color: white;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  @media (max-width: 430px) {
    font-size: 12px;
  }
`;

const BoardLine = styled.div`
  border: solid 1px #a5a5a5;
  margin: 5px 10px 0px 10px;
`;
const BoardChildTitle = styled.div`
  font-size: 18px;
  margin: 5px 5px 10px 10px;
  font-weight: bold;
  line-height: 1.17;
  color: #000000;
  @media (max-width: 430px) {
    font-size: 18px;
  }
`;

const BoardButton = styled.div`
  margin: 15px 10px 0px 290px;
  padding: 5px;
  width: 15%;
  height: 30px;
  background-color: #d4e6fb;
  border-radius: 15px;
  justify-content: space-between;
  align-items: center;
  line-height: 1.12;
  text-align: center;
  color: #444444;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  @media (max-width: 430px) {
    font-size: 15px;
  }
`;

const EventImage = styled.img`
  margin: 0 10px;
  width: 130px;
`;

const BoardButtonText = styled.div`
  margin: 5px 0px 5px 0px;
  font-weight: bold;
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

const Event = () => {
  const history = useHistory();
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Container>
      <button
        onClick={() =>
          history.push({
            pathname: `/board/announcement`,
            state: {
              pageName: "create",
            },
          })
        }>
        글 작성
      </button>
      <BoardContainer>
        <BoardChildWrapper>
          <BoardChildTitle>진행 중인 행사</BoardChildTitle>
          <BoardLine></BoardLine>
          <SlickBox1>
            <Slider {...settings}>
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
        </BoardChildWrapper>
        <BoardChildWrapper>
          <BoardChildTitle>종료된 행사</BoardChildTitle>
          <BoardLine></BoardLine>

          <SlickBox1>
            <Slider {...settings}>
              <SlickBox>
                <EventImage src={events.esports} />
                <SlickText>융특 E-Sports</SlickText>
                <SlickDate>21.02.03~ 21.03.04</SlickDate>
              </SlickBox>
              <SlickBox>
                <EventImage src={events.graduate} />
                <SlickText>융퀴즈 온 더 전과</SlickText>
                <SlickDate>21.02.03~ 21.03.04</SlickDate>
              </SlickBox>
              <SlickBox>
                <EventImage src={events.ssuevent} />
                <SlickText>SSU 캐슬</SlickText>
                <SlickDate>21.02.03~ 21.02.04</SlickDate>
              </SlickBox>
              <SlickBox>
                <EventImage src={events.friday} />
                <SlickText>뭔 이벤트였는지 까먹음ㅎ</SlickText>
                <SlickDate>21.02.03~ 21.02.04</SlickDate>
              </SlickBox>
              <SlickBox>
                <EventImage src={events.mentor} />
                <SlickText>신입생 멘토 모집</SlickText>
                <SlickDate>21.02.03~ 21.02.04</SlickDate>
              </SlickBox>
            </Slider>
          </SlickBox1>
        </BoardChildWrapper>
        <BoardButton>
          <BoardButtonText>목록</BoardButtonText>
        </BoardButton>
      </BoardContainer>
    </Container>
  );
};
export default Event;
