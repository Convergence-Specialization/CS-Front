import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import ChangeMajorBoard from "../Component/UiJeong/ChangeMajorBoard";
import BottomNav from "../Component/BottomNav";

export default () => {
  return (
    <>
      <Navbar Navname='융특 커뮤니티 슝'/>
      <ChangeMajorBoard />
      <BottomNav />
      <Footer />
    </>
  );
};