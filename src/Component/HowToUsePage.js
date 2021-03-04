import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { howtouseiconzip } from "../assets/Resources";
import Slider from "react-slick";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #f1f1f1;
`;
const SlickBoxWrapper = styled.div`
  background-color: #f1f1f1;
`;
const SlickBox = styled.div`
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SlickCustomLeftButton = styled.div`
  position: relative;
  font-size: 21px;
  font-weight: bold;
  color: #7ab8f3;
  z-index: 98;
`;
const SlickCustomRightButton = styled.div`
  position: relative;
  font-size: 21px;
  font-weight: bold;
  color: #7ab8f3;
  z-index: 98;
`;
const SlickButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 10px auto 0px;
`;
const IntroduceImage = styled.img`
  margin: 0 auto;
  width: 90%;
`;
const HowToUsePresenter = () => {
  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 1,
    swipeToSlide: true,
    arrows: false,
    afterChange: (index) => setSlickIndex(index + 1),
  };
  const [slickIndex, setSlickIndex] = useState(1);
  const history = useHistory();
  const SlickRef = React.createRef();

  return (
    <Container>
      <SlickBoxWrapper>
        <Slider {...settings} ref={SlickRef}>
          <SlickBox>
            <IntroduceImage src={howtouseiconzip.howtousereadicon1} />
          </SlickBox>
          <SlickBox>
            <IntroduceImage src={howtouseiconzip.howtousereadicon2} />
          </SlickBox>
          <SlickBox>
            <IntroduceImage src={howtouseiconzip.howtousereadicon3} />
          </SlickBox>
          <SlickBox>
            <IntroduceImage src={howtouseiconzip.howtousereadicon4} />
          </SlickBox>
          <SlickBox>
            <IntroduceImage src={howtouseiconzip.howtousereadicon5} />
          </SlickBox>
          <SlickBox>
            <IntroduceImage src={howtouseiconzip.howtousereadicon6} />
          </SlickBox>
          <SlickBox>
            <IntroduceImage src={howtouseiconzip.howtousereadicon7} />
          </SlickBox>
        </Slider>
        <SlickButtonWrapper>
          {slickIndex === 1 ? (
            <SlickCustomLeftButton>{""}</SlickCustomLeftButton>
          ) : (
            <SlickCustomLeftButton onClick={() => SlickRef.current.slickPrev()}>
              {"< 이전"}
            </SlickCustomLeftButton>
          )}
          {slickIndex === 7 ? (
            <SlickCustomRightButton
              onClick={() => {
                history.push("/");
              }}
            >
              {"완료 >"}
            </SlickCustomRightButton>
          ) : (
            <SlickCustomRightButton
              onClick={() => SlickRef.current.slickNext()}
            >
              {"다음 >"}
            </SlickCustomRightButton>
          )}
        </SlickButtonWrapper>
      </SlickBoxWrapper>
    </Container>
  );
};
export default HowToUsePresenter;