import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import UiJeong from "../Component/UiJeong";
import BottomNav from "../Component/BottomNav";

export default () => {
  return (
    <>
      <Navbar Navname='마이페이지'/>
      <UiJeong />
      <BottomNav />
      <Footer />
    </>
  );
};
