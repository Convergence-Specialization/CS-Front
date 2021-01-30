import React from "react";
import styled from "styled-components";
import NavBot from "../../SmallComponents/NavBot";
import { Icons } from "../../../assets/Resources";

const Back = styled.div`
    background-color: #F5F5F5;
    padding: 10px 0px;
`;

const Board = styled.div`
    width: 90%;
    height: 250px;
    padding: 15px;
    display: flex;
    margin: 10px auto;
    flex-direction: column;
    border-radius: 15px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    font-weight: bold;
    font-size: 17px;
    background-color: white;
`;

const Box = styled.div`
    padding: 0px 0px 10px 0px;
    border-bottom: 2px solid #aca9a9;
`;

const BlankPost = styled.div`
    padding: 70px 10px 10px 10px;
    margin: 10px auto;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    color: #C8C8C8;
`;

const MyPost = () => {
    return (
        <>
            <NavBot
                Name="내가 쓴 글"
                Icon={Icons.check}
            />
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