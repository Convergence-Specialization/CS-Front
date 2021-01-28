import Navbar from "../../Component/Navbar";
import MyPosts from "../../Component/MyPage/MyPosts/ListView"; //마이포스츠만 써줄라면 인데스js쓰기

export default () => {
  return (
    <>
      <Navbar Navname="마이페이지" />
      <MyPosts />
    </>
  );
};