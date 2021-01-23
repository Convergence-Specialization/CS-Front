import React from "react";
import styled from "styled-components";
import { TopBar, Back, Board } from "../MyPage/MyPosts";


const ChangeMajorBoard = () => {
    return (
        <>
            <TopBar>
                ✔ 내가 쓴 글
            </TopBar>
            <Back>
                <Board>
                </Board> 
                <Board>
                </Board>
            </Back>
        </>
    );
}

export default ChangeMajorBoard;