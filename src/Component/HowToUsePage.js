import React from "react";
import styled from "styled-components";
import { howtouseiconzip } from "../assets/Resources";
import Slider from "react-slick";


import { major, navbotIcons } from "../assets/Resources";
import { useHistory } from "react-router-dom";
import LoadingSmall from "../Component/SmallComponents/LoadingSmall";


/*
// TODO : 요건 필요 src={howtouseiconzip.howtousereadicon1}
const IntroduceImg1 = styled.img`
  width: 100%;
  //padding: 20px 0;
  display: flex;
  align-self: flex-start;
`;*/
const Container = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  margin-top:20px;
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


const Slick = styled.div`
  background-color: #f1f1f1;
  margin: 10px 20px 30px 20px;
  padding: 10px;
  border-radius: 20px;
`;
const SlickBox = styled.div`
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SlickCustomLeftButton = styled.div`
  position: absolute;
  bottom: 10%;
  left: 20px;
  font-size: 20px;
  z-index: 98;
`;
const SlickCustomRightButton = styled.div`
  position: absolute;
  bottom: 10%;
  right: 20px;
  font-size: 20px;
  z-index: 98;
`;
const IntroduceImage = styled.img`
  margin: 0 auto;
  width: 85%;
`;


const HowToUsePresenter = () => {
  const history = useHistory();
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    swipeToSlide: true,
    arrows: false,
  };

  const SlickRef = React.createRef();

  return (
    <Container>
          <SlickCustomLeftButton onClick={() => SlickRef.current.slickPrev()}>
            {"< 이전"}
          </SlickCustomLeftButton>
          <SlickCustomRightButton onClick={() => SlickRef.current.slickNext()}>
            {"다음 >"}
          </SlickCustomRightButton>
          <Slider {...settings} ref={SlickRef}>
            <SlickBox>
              <IntroduceImage
                src={howtouseiconzip.howtousereadicon1}
              />
            </SlickBox>
            <SlickBox>
              <IntroduceImage
                src={howtouseiconzip.howtousereadicon2}
              />
            </SlickBox>
            <SlickBox>
              <IntroduceImage
                src={howtouseiconzip.howtousereadicon3}
              />
            </SlickBox>
            <SlickBox>
              <IntroduceImage
                src={howtouseiconzip.howtousereadicon4}
              />
            </SlickBox>
            <SlickBox>
              <IntroduceImage
                src={howtouseiconzip.howtousereadicon5}
              />
            </SlickBox>
            <SlickBox>
              <IntroduceImage
                src={howtouseiconzip.howtousereadicon6} />
            </SlickBox>
            <SlickBox>
              <IntroduceImage
                src={howtouseiconzip.howtousereadicon7} />
            </SlickBox>
          </Slider>


    </Container>
  );
};
export default HowToUsePresenter;
