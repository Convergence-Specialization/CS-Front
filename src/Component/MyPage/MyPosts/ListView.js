import React from "react";
import styled from "styled-components";
import { Icons } from "../../../assets/Resources";

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
    padding: 10px 0px;
`;

const Board = styled.div`
    width: 90%;
    height: 400px;
    padding: 15px;
    display: flex;
    margin: 10px auto;
    flex-direction: column;
    border-radius: 15px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    font-family: NanumSquareRoundR;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    font-size: 17px;
    background-color: white;
`;

const Box = styled.div`
    padding: 0px 0px 10px 0px;
    border-bottom: 2px solid #aca9a9;
`;

const BlankPost = styled.div`
    padding: 150px;
    margin: 10px auto;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    font-size: 14px;
    color: #C8C8C8;
`;

const MyPost = () => {
    return (
        <>
            <TopBar>
                ✔ 내가 쓴 글
            </TopBar>
            <Back>
                <Board>
                    <Box>융특게시판</Box>
                    <BlankPost>⁕작성한 내용이 없습니다⁕</BlankPost>
                </Board> 
                <Board>
                    <Box>전과게시판</Box>
                    <BlankPost>⁕작성한 내용이 없습니다⁕</BlankPost>
                </Board>
            </Back>
        </>
    );
}

export default MyPost;