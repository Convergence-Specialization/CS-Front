import Navbar from "../../Component/Navbar";
import MyPosts from "../../Component/MyPage/MyPosts/ListView"; //마이포스츠만 써줄라면 인데스js쓰기
import NavBot from "../../Component/SmallComponents/NavBot";
import { Icons } from "../../assets/Resources";
export default () => {
  return (
    <>
      <Navbar Navname="마이페이지" />
      <NavBot Name="내가 쓴 글" Icon={Icons.check} />
      <MyPosts />
    </>
  );
};
