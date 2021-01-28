import React from "react";
import { authService } from "../fbase";
import { useHistory } from "react-router-dom";

const ProfilePresenter = () => {
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

export default ProfilePresenter;






//프로필, 로그아웃 버튼 있는곳