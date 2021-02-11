import React, { useState } from "react";
import styled from "styled-components";
import { subjectDicts } from "../../../../assets/Dicts";
import { horseIcons } from "../../../../assets/Resources";

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: ${(props) => props.width || "360px"};
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 30px 20px;
`;
const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
const TitleImg = styled.img`
  margin: 0 10px;
  width: 30px;
`;
const Title = styled.div`
  text-align: center;
  color: #437ecb;
  font-weight: bold;
  font-size: 20px;
`;
const UpperWrapper = styled.div`
  padding: 8px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
`;
const ContentText = styled.div`
  color: #646464;
`;
const CheckBox = styled.input`
  width: 20px;
  height: 20px;
`;
const ChildWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 3px;
`;
const Button = styled.div`
  margin-top: 10px;
  padding: 10px 40px;
  border-radius: 15px;
  background-color: #d4e6fb;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;
export const SelectSubjectModal = ({ onClose, visible, subjectSelected }) => {
  const [tempChecked, setTempChecked] = useState(subjectSelected);
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(tempChecked);
    }
  };
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper onClick={onMaskClick} tabIndex="-1" visible={visible}>
        <ModalInner tabIndex="0" className="modal-inner">
          <TitleWrapper>
            <TitleImg src={horseIcons.newhorse} alt={"말머리 아이콘"} />
            <Title>말머리 선택</Title>
            <TitleImg src={horseIcons.newhorse} alt={"말머리 아이콘"} />
          </TitleWrapper>
          <UpperWrapper onClick={() => setTempChecked("NONE")}>
            <ContentText>말머리 선택 안 함</ContentText>
            <CheckBox
              readOnly
              type="checkbox"
              checked={tempChecked === "NONE"}
            />
          </UpperWrapper>
          <ChildWrapper onClick={() => setTempChecked("SMART_CAR")}>
            <TitleImg src={subjectDicts.SMART_CAR.img} alt={"말머리 아이콘"} />
            <ContentText>스마트 자동차</ContentText>
            <CheckBox
              readOnly
              type="checkbox"
              checked={tempChecked === "SMART_CAR"}
              style={{ position: "absolute", right: "10px" }}
            />
          </ChildWrapper>
          <ChildWrapper onClick={() => setTempChecked("ENERGY_SCIENCE")}>
            <TitleImg
              src={subjectDicts.ENERGY_SCIENCE.img}
              alt={"말머리 아이콘"}
            />
            <ContentText>에너지 공학</ContentText>
            <CheckBox
              readOnly
              type="checkbox"
              style={{ position: "absolute", right: "10px" }}
              checked={tempChecked === "ENERGY_SCIENCE"}
            />
          </ChildWrapper>
          <ChildWrapper onClick={() => setTempChecked("SECURITY")}>
            <TitleImg src={subjectDicts.SECURITY.img} alt={"말머리 아이콘"} />
            <ContentText>정보보안</ContentText>
            <CheckBox
              readOnly
              type="checkbox"
              style={{ position: "absolute", right: "10px" }}
              checked={tempChecked === "SECURITY"}
            />
          </ChildWrapper>
          <ChildWrapper onClick={() => setTempChecked("BIGDATA")}>
            <TitleImg src={subjectDicts.BIGDATA.img} alt={"말머리 아이콘"} />
            <ContentText>빅데이터</ContentText>
            <CheckBox
              readOnly
              type="checkbox"
              style={{ position: "absolute", right: "10px" }}
              checked={tempChecked === "BIGDATA"}
            />
          </ChildWrapper>
          <ChildWrapper onClick={() => setTempChecked("ICT")}>
            <TitleImg src={subjectDicts.ICT.img} alt={"말머리 아이콘"} />
            <ContentText>ICT 유통물류</ContentText>
            <CheckBox
              readOnly
              type="checkbox"
              style={{ position: "absolute", right: "10px" }}
              checked={tempChecked === "ICT"}
            />
          </ChildWrapper>
          <ChildWrapper onClick={() => setTempChecked("KOREA")}>
            <TitleImg src={subjectDicts.KOREA.img} alt={"말머리 아이콘"} />
            <ContentText>통일 외교 및 개발협력</ContentText>
            <CheckBox
              readOnly
              type="checkbox"
              style={{ position: "absolute", right: "10px" }}
              checked={tempChecked === "KOREA"}
            />
          </ChildWrapper>
          <Button onClick={() => onClose(tempChecked)}>확인</Button>
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

export default SelectSubjectModal;
