import React from "react";
import styled from "styled-components";
import { events } from "../../../../assets/Resources";
import Slider from "react-slick";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
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

const BoardWrapper = styled.div`
  margin-top: 13px;
  padding: 10px;
  width: 90%;
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

const BoardTitle = styled.div`
  font-size: 15px;
  margin: 5px 5px 0px 10px;
  font-weight: bold;
  line-height: 1.17;
  color: #000000;
  @media (max-width: 430px) {
    font-size: 18px;
  }
`;

const BoardDate = styled.div`
  font-size: 12px;
  text-align: right;
  margin-top: 2px;
  @media (max-width: 430px) {
  }
`;

const BoardLine = styled.div`
  border: solid 1px #a5a5a5;
  margin: 5px 10px 0px 10px;
`;

const ImageBox = styled.div`
  padding: 13px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 430px) {
  }
`;

const EventImage = styled.img`
  margin: 0 10px;
  width: 200px;
  @media (max-width: 430px) {
  }
`;

const BoardText = styled.div`
  margin-left: 5px;
  font-size: 14px;
  line-height: 2;
  word-break: keep-all;
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

const BoardButtonText = styled.div`
  margin: 5px 0px 5px 0px;
  font-weight: bold;
`;

const Event = () => {
  const history = useHistory();
  return (
    <Container>
      <BoardContainer>
        <BoardWrapper>
          <BoardTitle>융특 E-Sports</BoardTitle>
          <BoardDate>진행 중인 행사</BoardDate>
          <BoardDate>21.02.03 ~ 21.03.04</BoardDate>
          <BoardLine />
          <ImageBox>
            <EventImage src={events.esports} />
          </ImageBox>
          <BoardText>
            📸”빛나는 순간을 함께하다” 융합특성화자유전공학부
            <br /> 제 3대 학생회 SHUTTER입니다!
            <br /> ‼E-SPORTS 대회 우승자 발표하겠습니다‼ <br />
            <br />롤 : 강련웅, 김동환, 김현수, 박정우, 조정현
            <br /> 카트 스피드 : 류장원 <br />
            카트 아이템 : 강병민 <br />
            <br />
            융특 내 롤과 카트의 최강자가 결정났습니다! 너무너무 축하 드립니다🔥
            수상을 떠나 참여해주신 모든 분들께 격려의 박수와 감사의 인사를
            드립니다👏 <br />
            <br />
            ✨SHUTTER 마지막 행사인 온라인 종강총회도 많은 참여 부탁드립니다
          </BoardText>
        </BoardWrapper>
        <BoardButton>
          <BoardButtonText onClick={() => history.push("/board/event")}>
            목록
          </BoardButtonText>
        </BoardButton>
      </BoardContainer>
    </Container>
  );
};
export default Event;
