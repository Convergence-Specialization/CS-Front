import React from "react";
import styled from "styled-components";
import { navIcons, navbotIcons } from "../assets/Resources";
import Navbar from "../Component/Navbar";
import NavBot from "../Component/SmallComponents/NavBot";

const IntroduceAndFooterTextWrapper = styled.div`
  margin: 8px 10px 0 0;
`;

const TotalContainer = styled.div`
  padding-bottom: 10px;
`;
const Introduce1Wrapper = styled.div`
  display: flex;
`;

const IntroduceText = styled.div`
  font-size: 14px;
  word-break: keep-all;
  text-align: center;
  line-height: 1.3;
  @media (max-width: 430px) {
  }
`;

const BoardContainer = styled.div`
  width: 93%;
  min-height: 80vh;
  border-radius: 15px;
  margin: 20px auto;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
  padding: 10px 15px 10px;
`;

const Privacy = () => {
  return (
    <>
      <Navbar isRight1Disabled History IconRight2={navIcons.Home} />
      <NavBot Name="개인정보 처리방침" Icon={navbotIcons.check} />
      <TotalContainer>
        <BoardContainer>
          <Introduce1Wrapper>
            <IntroduceAndFooterTextWrapper>
              <IntroduceText
                style={{
                  textAlign: "left",
                  marginLeft: "5px",
                }}
              >
                숭실대 융특 커뮤니티 슝 (이하 ‘슝’이라 한다)는 개인정보 보호법
                제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을
                신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이
                개인정보 처리지침을 수립․공개합니다. 슝은 개인정보처리방침을
                개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할
                것입니다.
                <br /> 본 방침은 2021년 03월 07일부터 시행됩니다. <br /> <br />
                제1조(개인정보의 처리목적) <br /> 슝은 다음의 목적을 위하여
                개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적
                이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는
                개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한
                조치를 이행할 예정입니다. <br /> 1. 커뮤니티 회원 가입 및 관리
                회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별․인증,
                회원자격 유지․관리, 서비스 부정이용 방지, 각종 고지․통지,
                고충처리 등을 목적으로 개인정보를 처리합니다. <br /> 2. 재화
                또는 서비스 제공 서비스 제공, 콘텐츠 제공, 맞춤서비스 제공,
                본인인증, 연령인증 등을 목적으로 개인정보를 처리합니다. <br />{" "}
                3. 고충처리 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한
                연락․통지, 처리결과 통보 등의 목적으로 개인정보를 처리합니다.{" "}
                <br /> <br /> 제2조(개인정보의 처리 및 보유기간) <br /> ① 슝은
                법령에 따른 개인정보 보유․이용기간 또는 정보주체로부터
                개인정보를 수집시에 동의받은 개인정보 보유․이용기간 내에서
                개인정보를 처리․보유합니다. ② 각각의 개인정보 처리 및 보유
                기간은 다음과 같습니다. <br /> 1. 커뮤니티 회원 가입 및 관리 :
                커뮤니티 탈퇴시까지 다만, 다음의 사유에 해당하는 경우에는 해당
                사유 종료시까지 1) 관계 법령 위반에 따른 수사․조사 등이 진행중인
                경우에는 해당 수사․조사 종료시까지 2) 서비스 부정이용 방지를
                위해 필요한 경우에는 그 필요성의 해소시까지 <br /> 2. 재화 또는
                서비스 제공 : 재화․서비스 공급완료시까지 다만, 다음의 사유에
                해당하는 경우에는 해당 기간 종료시까지 1) 「전자상거래 등에서의
                소비자 보호에 관한 법률」에 따른 표시․광고, 계약내용 및 이행 등
                거래에 관한 기록 - 표시․광고에 관한 기록 : 6월 - 계약 또는
                청약철회, 대금결제, 재화 등의 공급기록 : 5년 - 소비자 불만 또는
                분쟁처리에 관한 기록 : 3년 2)「통신비밀보호법」제41조에 따른
                통신사실확인자료 보관 - 가입자 전기통신일시, 개시․종료시간,
                상대방 가입자번호, 사용도수, 발신기지국 위치추적자료 : 1년 -
                컴퓨터통신, 인터넷 로그기록자료, 접속지 추적자료 : 3개월 3)
                정상적인 서비스 제공을 위해 개인정보 처리가 불가피한 경우 - 해당
                서비스 종료시까지 <br /> <br /> 제3조(개인정보의 제3자 제공){" "}
                <br /> ① 슝은 정보주체의 개인정보를 제1조(개인정보의 처리
                목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의
                특별한 규정 등 개인정보 보호법 제17조에 해당하는 경우에만
                개인정보를 제3자에게 제공합니다.
                <br /> <br /> 제4조(정보주체의 권리․의무 및 행사방법) <br /> ①
                정보주체는 슝에 대해 언제든지 다음 각 호의 개인정보 보호 관련
                권리를 행사할 수 있습니다. <br /> 1. 개인정보 열람요구 <br /> 2.
                오류 등이 있을 경우 정정 요구
                <br /> 3. 삭제요구 <br /> 4. 처리정지 요구 <br /> ② 제1항에 따른
                권리 행사는 슝에 대해 전자우편(ssuconvergence@gmail.com)을
                통하여 하실 수 있으며 슝은 이에 대해 지체없이 조치하겠습니다.{" "}
                <br /> ③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를
                요구한 경우에는 슝은 정정 또는 삭제를 완료할 때까지 당해
                개인정보를 이용하거나 제공하지 않습니다. <br /> ④ 제1항에 따른
                권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을
                통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지
                제11호 서식에 따른 위임장을 제출하셔야 합니다. ⑤ 정보주체는
                개인정보 보호법 등 관계법령을 위반하여 슝이 처리하고 있는
                정보주체 본인이나 타인의 개인정보 및 사생활을 침해하여서는
                아니됩니다. <br /> <br /> 제5조(처리하는 개인정보 항목) <br />{" "}
                슝은 다음의 개인정보 항목을 처리하고 있습니다. 1. 커뮤니티 회원
                가입 및 관리 ․필수항목 : 이메일, 비밀번호, 학번, 이름 2. 인터넷
                서비스 이용과정에서 아래 개인정보 항목이 자동으로 생성되어
                수집될 수 있습니다. ․IP주소, 쿠키, MAC주소, 서비스 이용기록,
                방문기록, 불량 이용기록 등 3. 슝 내의 개별 서비스 이용, 이벤트
                응모 및 경품 신청 과정에서 해당 서비스의 이용자에 한해 추가
                개인정보 수집이 발생할 수 있습니다. 추가로 개인정보를 수집할
                경우에는 해당 개인정보 수집 시점에서 이용자에게 ‘수집하는
                개인정보 항목, 개인정보의 수집 및 이용목적, 개인정보의
                보관기간’에 대해 안내 드리고 동의를 받습니다. <br /> <br />{" "}
                제6조(개인정보의 파기) <br /> ① 슝은 개인정보 보유기간의 경과,
                처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이
                해당 개인정보를 파기합니다. <br /> ② 정보주체로부터 동의받은
                개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도
                불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는
                경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나
                보관장소를 달리하여 보존합니다. <br /> ③ 개인정보 파기의 절차 및
                방법은 다음과 같습니다. <br /> 1. 파기절차 슝은 파기 사유가
                발생한 개인정보를 선정하고, 슝의 개인정보 보호책임자의 승인을
                받아 개인정보를 파기합니다. <br /> 2. 파기방법 슝은 전자적 파일
                형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여
                파기하며, 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을
                통하여 파기합니다. <br /> <br /> 제7조(개인정보의 안전성
                확보조치) 슝은 개인정보의 안전성 확보를 위해 다음과 같은 조치를
                취하고 있습니다. <br /> 1. 기술적 조치 : 개인정보처리시스템 등의
                접근권한 관리, 접근통제시스템 설치, 비밀번호 등의 암호화,
                보안프로그램 설치 <br /> 2. 물리적 조치 : 서버로의 접근통제{" "}
                <br /> <br /> 제8조(개인정보 보호책임자) <br /> ① 슝은 개인정보
                처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한
                정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보
                보호책임자를 지정하고 있습니다. <br /> ▶ 개인정보 보호책임자{" "}
                <br /> 성명 : 조영현 <br /> 직책 : 팀장 <br /> 연락처 :
                ssuconvergence@gmail.com <br /> <br /> ② 정보주체께서는 슝의
                서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련
                문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및
                담당부서로 문의하실 수 있습니다. 슝은 정보주체의 문의에 대해
                지체없이 답변 및 처리해드릴 것입니다. <br /> <br />{" "}
                제9조(개인정보 열람청구) <br /> 정보주체는 개인정보 보호법
                제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수
                있습니다. 슝은 정보주체의 개인정보 열람청구가 신속하게
                처리되도록 노력하겠습니다. <br /> ▶ 개인정보 열람청구 접수․처리
                부서 <br /> 직 책 : 팀장 <br /> 담당자 : 조영현 <br /> 연락처 :
                ssuconvergence@gmail.com <br /> <br /> 제10조(권익침해 구제방법){" "}
                <br />
                정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해구제,
                상담 등을 문의하실 수 있습니다. <br /> <br /> [ 아래의 기관은
                슝과는 별개의 기관으로서, 슝의 자체적인 개인정보 불만처리,
                피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이
                필요하시면 문의하여 주시기 바랍니다 ] <br /> <br /> ▶ 개인정보
                침해신고센터 (한국인터넷진흥원 운영) <br /> - 소관업무 :
                개인정보 침해사실 신고, 상담 신청 <br /> - 커뮤니티 :
                privacy.kisa.or.kr <br /> - 전화 : (국번없이) 118 <br /> - 주소
                : (138-950) 서울시 송파구 중대로 135 한국인터넷진흥원
                개인정보침해신고센터 <br /> <br /> ▶ 개인정보 분쟁조정위원회
                (한국인터넷진흥원 운영) <br /> - 소관업무 : 개인정보
                분쟁조정신청, 집단분쟁조정 (민사적 해결) <br /> - 커뮤니티 :
                privacy.kisa.or.kr <br /> - 전화 : (국번없이) 118 <br /> - 주소
                : (138-950) 서울시 송파구 중대로 135 한국 인터넷 진흥원 개인
                정보 침해 신고 센터 <br /> <br /> ▶ 대검찰청 사이버범죄수사단 :
                02-3480-3573 (www.spo.go.kr)
                <br /> <br /> ▶ 경찰청 사이버테러대응센터 : 1566-0112
                (www.netan.go.kr)
                <br /> <br /> 제11조(개인정보 처리방침 변경) ① <br /> 이
                개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른
                변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행
                7일 전부터 공지사항을 통하여 고지할 것입니다.
              </IntroduceText>
            </IntroduceAndFooterTextWrapper>
          </Introduce1Wrapper>
        </BoardContainer>
      </TotalContainer>
    </>
  );
};
export default Privacy;
