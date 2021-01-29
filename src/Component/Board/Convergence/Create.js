import React from "react";
import styled from "styled-components";
import { Icons } from "../../../assets/Resources";

const TopBar = styled.div`
    display: flex;
    align-items: center;
    background-color: white; 
    padding: 5px 5px; 
    font-size: 18px;
    font-family: NanumSquareRoundR;
    font-weight: bolder;
    font-stretch: normal;
    font-style: normal;
`;

const Back = styled.div` 
    background-color: #F5F5F5;
    padding: 10px;
`;

const Text = styled.div`
    width: 90%;
    height: 500px;
    padding: 20px;
    display: flex;
    margin: 10px auto;
    flex-direction: column;
    border-radius: 15px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    font-family: NanumSquareRoundR;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    font-size: 10px;
    line-height: 30px;
    background-color: white;
`;

const Wrap = styled.div`
    display: flex;
    font-size: 15px;
    font-weight: bold;
    color: #939393;
`;

const Wrap2 = styled.div`
    display: flex;
    color: #8D8D8D;
`;

const Wrap3 = styled.div`
    display: flex;
    color: red;
`;

const ButtonContainer = styled.div`
    padding: 7px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.div`
    margin: 5px auto;
    padding: 7px 22px; 
    background-color: #d4e6fb;
    border-radius: 12px;
    font-family: NanumSquareRoundR;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    line-height: 1.12;
    text-align: center;
    @media (max-width: 430px) {
    font-size: 15px;
  }
`;

const Img = styled.img`
    width: 40px;
    padding: 0px 5px;
`;

 
const ConvergenceBoard = () => {
    return (
        <>  
            <TopBar> <Img src={Icons.Paperplane} /> 융특게시판 </TopBar>
            <Back>
                <Text>
                    <Wrap>내용을 입력하세요</Wrap>
                    <Wrap2> </Wrap2>
                    <Wrap2>[융특 슝 이용규칙 준수]</Wrap2>
                    <Wrap2>융특 슝의 이용규칙 전문을 반드시 숙지하신 후 글을 작성해 주세요.</Wrap2>
                    <Wrap2>이용규칙을 위한한 경우 작성한 게시글이 삭제되거나, 글쓰기 제한 등의 제재가 가해질 수 있습니다.</Wrap2>
                    <Wrap2> </Wrap2>
                    <Wrap2>- 욕설, 비하, 음란물, 개인정보가 포함된 게시물 사용 금지</Wrap2>
                    <Wrap3>- 특정인이나 단체/지역을 비방하는 행위 금지</Wrap3>
                </Text>
                <ButtonContainer>
                    <Button>취소</Button>
                    <Button>완료</Button>
                </ButtonContainer>
            </Back>
        </>
    );
}


export default ConvergenceBoard;