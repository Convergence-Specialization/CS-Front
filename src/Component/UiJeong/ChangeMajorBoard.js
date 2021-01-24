import React from "react";
import styled from "styled-components";
import { Icons } from "../../assets/Resources";


const TopBar = styled.div`
    background-color: white; 
    padding: 10px 20px; 
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

const Title = styled.div`
    width: 90%;
    height: 15px;
    padding: 20px;
    display: flex;
    margin: 10px auto;
    flex-direction: column;
    border-radius: 15px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    font-family: NanumSquareRoundR;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    font-size: 15px;
    background-color: white;
    color: #939393;
`;

const Text = styled.div`
    width: 90%;
    height: 350px;
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
    color: #8D8D8D;
`;

const Wrap = styled.div`
    display: flex;
`;

const Wrap2 = styled.div`
    display: flex;
    color: red;
`;

const Img = styled.img`
    width: 25px;
`;

const ChangeMajorBoard = () => {
    return (
        <>
            <TopBar> <Img src={Icons.Paperplane} /> 전과게시판</TopBar>
            <Back>
                <Title>제목</Title>
                <Text>
                    <Wrap>여기를 눌러서 글을 작성하실 수 있습니다.</Wrap>
                    <Wrap></Wrap>
                    <Wrap>[융특 슝 이용 규칙 준수]</Wrap>    
                    <Wrap>융특 슝의 이용규칙 전문을 반드시 숙지하신 후 글을 작성해 주세요.</Wrap>
                    <Wrap>이용규칙을 위반한 경우 작성한 게시글이 삭제되거나, 글쓰기 제한 등의</Wrap>
                    <Wrap>제재가 가해질 수 있습니다.</Wrap>
                    <Wrap></Wrap>
                    <Wrap>- 욕설, 비하, 음란물, 개인정보가 포함된 게시물 사용 금지</Wrap>
                    <Wrap2>- 특정인이나 단체/지역을 비방하는 행위 금지 </Wrap2>
                </Text>  
            </Back>
        </>
    );
}

export default ChangeMajorBoard;

//종이비행기 이미지, 한 칸 띄우기, 버튼, textarea, placeholder  미완성