import React from "react";

const Comment = ({commentObj, isOwner}) =>(
    <div>
    <h4>{commentObj.text}</h4>
    <h6>작성자 : {commentObj.creatorId}</h6>
    
    <button>댓글쓰기</button>
    {isOwner && 
    <>
        <button>삭제</button>
        <button>수정</button>
    </>}
  </div>
);

export default Comment;

