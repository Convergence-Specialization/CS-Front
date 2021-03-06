import React from "react";
import styled from "styled-components";
import NavBot from "./NavBot";
import { major } from "../../assets/Resources";

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
  min-height: 700px;
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

const TotalSubject = () => {
  return (
    <Container id="TOTAL_SUBJECT_DIV">
      <NavBot Icon={major.Books} Name="융합 전공" />
      <BoardContainer>
        <BoardWrapper>
          <BoardTitle>- 융합전공 소개</BoardTitle>
          <BoardText>
            융특 신입생은 1학년 때는 교양교육, SW기초교육, 전공기초교육,
            융합역량교육, 창의교육, 리더십교육 등을 이수합니다. <br />
            2학년 진급 시에는 '미래사회융합전공 (스마트자동차, 에너지공학,
            정보보호, 빅데이터, ICT 유통물류, 통일외교 및 개발협력)'과
            '주전공(미래사회 수요 융합전공 참여 학과 중 선택'을 1+1체제로
            선택하여, 해당 융합전공 및 주전공 교과과정을 이수합니다. <br />
            ('주전공'은 선택 시 학과(부)별 입학정원의 30% 이내로 인원을 제한)
          </BoardText>
          <BoardTitle style={{ marginTop: "20px" }}>
            - 전과 성적 산출 방법
          </BoardTitle>
          <BoardText>
            1학기 전공 기초과목 40%
            <br />
            (융합전공을 위한 수학, PHL) + <br />
            2학기 전공 기초과목 60%
            <br />
            (융합전공을 위한 심화수학, 물리학 기초 및 융합, 프로그래밍 및 실습,
            빅데이터 프로그래밍 언어, IT기반의 유통물류경영 중 최소 2과목~4과목)
          </BoardText>
          <BoardTitle style={{ marginTop: "20px" }}>
            - 전공기초 학점 유의사항
          </BoardTitle>
          <BoardText>
            융특 학생들은 졸업요건이 2학년 이후 전과한 과의 졸업요건을 따른다.
            따라서 1학년에만 들을 수 있는 전공기초과목 이수 학점 확인이
            중요하다. 1학기에는 PHL(3학점), 융합 전공을 위한 수학(3학점) 총
            6학점이 이수가 된다. 2학기에는 최소 2과목에서 최대 4과목까지
            선택하여 수강할 수 있지만 전과할 학부에 따라 전공기초 졸업요건을
            충족해야 하므로 수강해야 하는 과목은 학부마다 다르다.
          </BoardText>
        </BoardWrapper>
      </BoardContainer>
    </Container>
  );
};
export default TotalSubject;
