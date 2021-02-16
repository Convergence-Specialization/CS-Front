import React from "react";
import styled from "styled-components";
import { horseIcons, Icons, navIcons } from "../assets/Resources";
import Navbar from "../Component/Navbar";

const GithubAndHelperContainer = styled.div`
  background-color: white;
  /* align-items: center; */
  padding: 30px 0;
`;

const Title = styled.div`
  font-family: "양진체";
  font-size: 22px;
  text-align: center;
  color: #727272;
  margin: 20px 0;
`;
const GithubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  @media (max-width: 430px) {
  }
`;

const Line1 = styled.div`
  width: 0;
  height: 130px;
  margin: 0 10px;
  text-align: center;
  border: solid 1px #dcdcdc;
`;

const GithubText = styled.div`
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  @media (max-width: 430px) {
  }
`;
const Text = styled.div`
  font-family: "양진체";
  font-size: 13px;
  text-align: center;
  line-height: 1.5;
  margin-top: 5px;
  color: #009bcb;
  @media (max-width: 430px) {
  }
`;
const Text2 = styled.div`
  font-size: 13px;
  text-align: center;
  line-height: 1.3;
  @media (max-width: 430px) {
  }
`;
const GithubImage = styled.img`
  margin: 0 auto;
  width: 60px;
  border-radius: 55%;
`;

const TeamContainer = styled.div`
  padding: 30px 0;
`;

const MakersTitle = styled.div`
  font-family: "양진체";
  line-height: 1.3;
  margin-top: 8px;
  font-size: 19px;
`;
const MakersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  @media (max-width: 430px) {
  }
`;
const GithubAndMakersTotalWrapper = styled.div`
  margin: 30px auto;
  text-align: center;
  display: flex;
`;
const HorseImg = styled.img`
  /* width: 23%;
  border-radius: 55%;
  margin: 19px; */
  margin: 0 auto;
  width: 100px;
  border-radius: 55%;
`;
const Line = styled.div`
  width: 30px;
  height: 0;
  margin: 12px 0;
  border: solid 1px #7b7b7b;
`;
const HelperWrapper = styled.div`
  margin: 30px 0;
`;
const FooterContainer = styled.div`
  padding: 10px 0;
  display: flex;
  @media (max-width: 768px) {
    padding: 6px;
  }
`;
const SoongsilImg = styled.img`
  width: 80px;
`;

const FooterText = styled.div`
  font-size: 11px;
  line-height: 1.5;
  text-align: left;
  color: #616161;
  @media (max-width: 430px) {
  }
`;

const FooterTextWrapper = styled.div`
  margin: 20px 10px 0 0;
`;
const Makers = () => {
  return (
    <>
      <Navbar isRight1Disabled History IconRight2={navIcons.Home} />
      <GithubAndHelperContainer>
        <Title>github(깃허브)</Title>
        <GithubAndMakersTotalWrapper>
          <GithubWrapper>
            <GithubImage
              src={Icons.github}
              onClick={() =>
                window.open(
                  "https://github.com/Convergence-Specialization/CS-Front"
                )
              }
            />
            <GithubText>CS-Frontend</GithubText>
          </GithubWrapper>
          <Line1 />
          <GithubWrapper>
            <GithubImage
              src={Icons.github}
              onClick={() =>
                window.open(
                  "https://github.com/Convergence-Specialization/CS-Backend"
                )
              }
            />
            <GithubText>CS-Backend</GithubText>
          </GithubWrapper>
        </GithubAndMakersTotalWrapper>
      </GithubAndHelperContainer>
      <TeamContainer>
        <Title>팀 소개</Title>
        <GithubAndMakersTotalWrapper>
          <MakersWrapper>
            <HorseImg src={horseIcons.face} />
            <MakersTitle>조영현</MakersTitle>
            <Text>
              LEADER
              <br />
              BACK-END
            </Text>
            <Line />
            <Text2>
              내가 대장임
              <br /> 코딩짱짱맨
            </Text2>
          </MakersWrapper>
          <MakersWrapper>
            <HorseImg src={horseIcons.face} />
            <MakersTitle>안은소</MakersTitle>
            <Text>
              FRONT-END
              <br />
              DESIGNER
            </Text>
            <Line />
            <Text2>
              웹 기획
              <br />
              웹페이지 개발
            </Text2>
          </MakersWrapper>
          <MakersWrapper>
            <HorseImg src={horseIcons.face} />
            <MakersTitle>지연우</MakersTitle>
            <Text>
              FRONT-END
              <br />
              DESIGNER
            </Text>
            <Line />
            <Text2>
              웹 기획
              <br />
              웹페이지 개발
            </Text2>
          </MakersWrapper>
        </GithubAndMakersTotalWrapper>
        <GithubAndMakersTotalWrapper>
          <MakersWrapper>
            <HorseImg src={horseIcons.face} />
            <MakersTitle>김의정</MakersTitle>
            <Text>FRONT-END</Text>
            <Line />
            <Text2>웹페이지 개발</Text2>
          </MakersWrapper>
          <MakersWrapper>
            <HorseImg src={horseIcons.face} />
            <MakersTitle>김준하</MakersTitle>
            <Text>FRONT-END</Text>
            <Line />
            <Text2>
              프론트엔드 장인
              <br />
              웹개발 나한테 줘!
            </Text2>
          </MakersWrapper>
          <MakersWrapper>
            <HorseImg src={horseIcons.face} />
            <MakersTitle>이우혁</MakersTitle>
            <Text>BACK-END</Text>
            <Line />
            <Text2>백엔드 장인</Text2>
          </MakersWrapper>
        </GithubAndMakersTotalWrapper>
      </TeamContainer>
      <GithubAndHelperContainer>
        <Title>도움주신 분</Title>
        <HelperWrapper>
          <MakersWrapper>
            <HorseImg src={horseIcons.face} />
            <MakersTitle>이수정</MakersTitle>
            <Text>DESIGNER</Text>
            <Line />
            <Text2>
              융슝이 캐릭터
              <br /> 디자인
            </Text2>
          </MakersWrapper>
        </HelperWrapper>
      </GithubAndHelperContainer>
      <FooterContainer>
        <GithubWrapper>
          <SoongsilImg src={Icons.숭실} />
        </GithubWrapper>
        <FooterTextWrapper>
          <FooterText style={{ fontSize: "17px" }}>
            융합특성화자유전공학부
          </FooterText>
          <FooterText>
            서울특별시 동작구 상도로 309 숭실대학교 문화관 302호
            <br />
            융합특성화자유전공학부, 서울특별시 16978
            <br />
            TEL) 02-829-8220
          </FooterText>
        </FooterTextWrapper>
      </FooterContainer>
    </>
  );
};
export default Makers;
