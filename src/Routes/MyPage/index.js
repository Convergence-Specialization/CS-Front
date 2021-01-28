import Footer from "../../Component/Footer";
import MyPage from "../../Component/MyPage";
import Navbar from "../../Component/Navbar";

const MyPagePresenter =() => {
  return (
    <>
      <Navbar Navname="마이페이지" />
      <MyPage />
      <Footer />
    </>
  );
};
export default MyPagePresenter;