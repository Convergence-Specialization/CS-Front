import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import ConvergenceBoard from "../Component/UiJeong/ConvergenceBoard";
import BottomNav from "../Component/BottomNav";

export default () => {
  return (
    <>
      <Navbar Navname='융특 커뮤니티 슝'/>
      <ConvergenceBoard />
      <BottomNav />
      <Footer />
    </>
  );
};