import Footer from "../../Component/Footer";
import MyPage from "../../Component/MyPage";
import Navbar from "../../Component/Navbar";
import BottomNav from "../../Component/BottomNav";

export default () => {
  return (
    <>
      <Navbar Navname="마이페이지" />
      <MyPage />
      <BottomNav />
      <Footer />
    </>
  );
};
