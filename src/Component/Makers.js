import React from "react";
import styled from "styled-components";
import { navIcons, etc, navbotIcons, Images } from "../assets/Resources";
import Navbar from "../Component/Navbar";
import NavBot from "../Component/SmallComponents/NavBot";

const GithubContainer = styled.div`
  background-color: #f1f1f1;
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
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  @media (max-width: 430px) {
  }
`;

const GithubImage = styled.img`
  margin: 0 auto;
  width: 60px;
  border-radius: 55%;
`;

const GithubTotalWrapper = styled.div`
  margin: 30px auto;
  text-align: center;
  display: flex;
`;

const IntroduceWrapper = styled.div`
  background-color: white;
`;

const IntroduceImg = styled.img`
  margin: 30px auto;
  width: 100%;
`;

const TeamIntroduceImg = styled.img`
  width: 100%;
`;
const Makers = () => {
  return (
    <>
      <Navbar isRight1Disabled History IconRight2={navIcons.Home} />
      <NavBot Name="SSYUNG 소개" Icon={navbotIcons.check} />
      <IntroduceWrapper>
        <IntroduceImg src={Images.Introduce1} />
      </IntroduceWrapper>
      <GithubContainer>
        <Title>github(깃허브)</Title>
        <GithubTotalWrapper>
          <GithubWrapper>
            <GithubImage
              src={etc.github}
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
              src={etc.github}
              onClick={() =>
                window.open(
                  "https://github.com/Convergence-Specialization/CS-Backend"
                )
              }
            />
            <GithubText>CS-Backend</GithubText>
          </GithubWrapper>
        </GithubTotalWrapper>
      </GithubContainer>
      <IntroduceWrapper>
        <TeamIntroduceImg src={Images.TeamIntroduce1} />
        <TeamIntroduceImg src={Images.TeamIntroduce2} />
        <TeamIntroduceImg src={Images.TeamIntroduce3} />
        <TeamIntroduceImg src={Images.TeamIntroduce4} />
      </IntroduceWrapper>
      <TeamIntroduceImg src={Images.Footer} />
    </>
  );
};
export default Makers;
