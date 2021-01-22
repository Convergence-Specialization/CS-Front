import Footer from "../Component/Footer";
import ChangePW from "../Component/MyPage/ChangePW";
import Navbar from "../Component/Navbar";
import BottomNav from "../Component/BottomNav";

export default () => {
  return (
    <>
      <Navbar Navname="마이페이지" />
      <ChangePW />
      <BottomNav />
      <Footer />
    </>
  );
};
