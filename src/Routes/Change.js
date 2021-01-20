import Footer from "../Component/Footer";
import Change from "../Component/Change";
import Navbar from "../Component/Navbar";
import BottomNav from "../Component/BottomNav";

export default () => {
  return (
    <>
      <Navbar Navname="마이페이지" />
      <Change />
      <BottomNav />
      <Footer />
    </>
  );
};
