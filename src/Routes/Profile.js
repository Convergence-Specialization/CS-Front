import React from "react";
import { authService } from "../fbase";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <>
      <button onClick={onLogOutClick}>로그아웃</button>
    </>
  );
};








//프로필, 로그아웃 버튼 있는곳