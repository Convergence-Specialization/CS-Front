import React, { useState } from "react";
import { dbService } from "../fbase";

const Comment = ({commentObj, isOwner}) =>{
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(commentObj.text);
    const onDeleteClick = async () => {
      const ok = window.confirm("삭제하시겠습니까?");
      if (ok) {
        await dbService.doc(`nweets/${commentObj.id}`).delete();
      }
    };
    const toggleEditing = () => setEditing((prev) => !prev);
    const onSubmit = async (event) => {
      event.preventDefault();
      await dbService.doc(`nweets/${commentObj.id}`).update({
        text: newNweet,
      });
      setEditing(false);
    };
    const onChange = (event) => {
        const {
          target: { value },
        } = event;
        setNewNweet(value);
      };
      return (
        <div>
          {editing ? (
            <>
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder="수정"
                  value={newNweet}
                  required
                  onChange={onChange}
                />
                <input type="submit" value="수정" />
              </form>
              <button onClick={toggleEditing}>Cancel</button>
            </>
          ) : (
            <>
              <h4>{commentObj.text}</h4>
              <h6>작성자 : {commentObj.creatorId}</h6>
              <button>댓글쓰기</button>

              {isOwner && (
                <>
                  <button onClick={onDeleteClick}>삭제</button>
                  <button onClick={toggleEditing}>수정</button>
                </>
              )}
            </>
          )}
        </div>
      );
    };
    
    export default Comment;



