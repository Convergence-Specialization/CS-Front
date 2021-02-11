import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import NavBot from "../SmallComponents/NavBot";
import { mainPageIcons, majorIntroduce } from "../../assets/Resources";

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
  position: relative;
`;

const BoardWrapper = styled.div`
  margin-top: 13px;
  padding: 10px;
  width: 90%;
  height: 700px;
  border-radius: 15px;
  justify-content: space-between;
  align-items: center;
  line-height: 1.12;
  color: #444444;
  background-color: white;
  position: relative;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  @media (max-width: 430px) {
    font-size: 12px;
  }
`;

const BoardTitle = styled.div`
  font-size: 15px;
  margin: 8px 5px 5px 10px;
  font-weight: bold;
  line-height: 1.17;
  color: #000000;
  @media (max-width: 430px) {
    font-size: 15px;
  }
`;

const BoardText = styled.div`
  margin-left: 5px;
  font-size: 14px;
  line-height: 1.7;
  word-break: keep-all;
`;

const ImageWrapper = styled.div`
  justify-content: center;
  padding-top: 15px;
`;

const Image = styled.img`
  width: 100%;
  padding: 10px;
  border-radius: 20px;
`;

const ICT = () => {
  const history = useHistory();
  return (
    <Container id="ICT_DIV">
      <NavBot Icon={mainPageIcons.Ict} Name="ICT 유통물류" />
      <BoardContainer>
        <BoardWrapper>
          <BoardTitle>- 융합전공 소개</BoardTitle>
          <BoardText>
            ICT와 유통물류가 결합되는 옴니채널 시장의 급격한 성장에 발맞추어
            신설된 융합전공. 미래창조과학부의 K-ICT 전략산업 중, 소프트웨어,
            IoT, 클라우드, 정보보안, 스마트 디바이스 및 디지털 콘텐츠 산업 등과
            밀접한 관계가 있음
          </BoardText>
          <BoardTitle>- 참여 학과</BoardTitle>
          <BoardText>
            경영학부, 벤처중소기업학과, 컴퓨터학부,
            산업∙정보시스템공학과,전자정보공학부
          </BoardText>
          <ImageWrapper>
            <Image src={majorIntroduce.ICT}></Image>
          </ImageWrapper>
        </BoardWrapper>
      </BoardContainer>
    </Container>
  );
};
export default ICT;
