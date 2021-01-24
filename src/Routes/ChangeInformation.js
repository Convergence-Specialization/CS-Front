import Footer from "../Component/Footer";
import ChangeInformation from "../Component/MyPage/ChangeInformation";
import Navbar from "../Component/Navbar";
import BottomNav from "../Component/BottomNav";

export default () => {
  return (
    <>
      <Navbar Navname="마이페이지" />
      <ChangeInformation />
      <BottomNav />
      <Footer />
    </>
  );
};
