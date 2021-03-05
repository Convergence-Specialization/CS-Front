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
  padding-bottom: 100px;
  @media (max-width: 430px) {
    padding-bottom: 50px;
  }
`;
const SlickBox = styled.div`
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SlickCustomLeftButton = styled.div`
  position: relative;
  font-size: 30px;
  font-weight: bold;
  color: #7ab8f3;
  z-index: 98;
  @media (max-width: 430px) {
    font-size: 21px;
  }
`;
const SlickCustomRightButton = styled.div`
  position: relative;
  font-size: 30px;
  font-weight: bold;
  color: #7ab8f3;
  z-index: 98;
  @media (max-width: 430px) {
    font-size: 21px;
  }
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
            <IntroduceImage src={howtouseiconzip.htu1} />
          </SlickBox>
          <SlickBox>
            <IntroduceImage src={howtouseiconzip.htu2} />
          </SlickBox>
          <SlickBox>
            <IntroduceImage src={howtouseiconzip.htu3} />
          </SlickBox>
          <SlickBox>
            <IntroduceImage src={howtouseiconzip.htu4} />
          </SlickBox>
          <SlickBox>
            <IntroduceImage src={howtouseiconzip.htu5} />
          </SlickBox>
          <SlickBox>
            <IntroduceImage src={howtouseiconzip.htu6} />
          </SlickBox>
          <SlickBox>
            <IntroduceImage src={howtouseiconzip.htu7} />
          </SlickBox>
          <SlickBox>
            <IntroduceImage src={howtouseiconzip.htu8} />
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
          {slickIndex === 8 ? (
            <SlickCustomRightButton
              onClick={() => {
                history.goBack();
                localStorage.setItem("alreadyReadHowToUse", "yes");
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
