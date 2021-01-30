import MyPage from "../../Component/MyPage";
import Navbar from "../../Component/Navbar";

const MyPagePresenter = () => {
  return (
    <>
      <Navbar Navname="마이페이지" />
      <MyPage />
    </>
  );
};
export default MyPagePresenter;
