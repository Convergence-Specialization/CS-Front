import React from "react";
import styled from "styled-components";
import { horseIcons } from "../../../../assets/Resources";

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
  height: 450px;
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
const BoardTitleWrapper = styled.div`
  margin: 5px 0 10px 5px;
`;
const BoardTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  @media (max-width: 430px) {
    font-size: 16px;
  }
`;

const WritterAndDate = styled.div`
  font-size: 12px;
  text-align: center;
  margin-left: 8px;
  padding-top: 5px;

  @media (max-width: 430px) {
  }
`;

const BoardLine = styled.div`
  border: solid 1px #a5a5a5;
  margin: 5px 10px 0px 10px;
`;

const BoardWritterWrapper = styled.div`
  display: flex;
  align-items: left;
  padding-top: 5px;
  justify-content: left;
  width: 94%;
`;

const BoardText = styled.div`
  margin: 5px;
  font-size: 14px;
  line-height: 2;
  word-break: keep-all;
`;

const BoardButton = styled.div`
  margin: 0px 10px 0px 290px;
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

const HorseImg = styled.img`
  width: 8%;
`;
const SubBox = styled.div`
  font-size: 14px;
  width: 90%;
  margin: 15px auto;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const SubPre = styled.div`
  display: flex;
  margin: 10px 20px;
`;
const SubFor = styled.div`
  display: flex;
  margin: 10px 20px;
`;

const Announcement = () => {
  return (
    <Container>
      <BoardContainer>
        <BoardWrapper>
          <BoardTitleWrapper>
            <BoardTitle>전과 신청 결과는 1월 18일에 발표됩니다.</BoardTitle>
            <BoardWritterWrapper>
              <HorseImg src={horseIcons.normal} alt="말머리" />
              <WritterAndDate>관리자 융슝이 | 21.02.04</WritterAndDate>
            </BoardWritterWrapper>
          </BoardTitleWrapper>
          <BoardLine />
          <BoardText>
            뭐하지...?
            <br />
            상당히 심심하구만
            <br />
            사실 원래 공지사항은 관리자가 글써야하는데 그거 기획도 안 했고 맨
            마지막에 만들어도 된다고 해서 걍 어떻게 보일지 만들고 있어여
            <br />
            뭐하지.... 심심해
            <br />
            지금 아이스크림 먹고 싶다
            <br />
            서울가면 또 할 거 없는데 울 은소가 다음주에나 서울
            온대여ㅠㅠㅠㅠㅠㅠㅠㅠ
            <br />
            은소씌.... 나랑 놀아줭
          </BoardText>
        </BoardWrapper>
        <SubBox>
          <SubPre>이전 | '온라인학습법특강' 참여</SubPre>
          <BoardLine />
          <SubFor>이후 | 뭐라고 해야하지</SubFor>
        </SubBox>
        <BoardButton>
          <BoardButtonText>목록</BoardButtonText>
        </BoardButton>
      </BoardContainer>
    </Container>
  );
};
export default Announcement;
