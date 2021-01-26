import Footer from "../Component/Footer";
import ChangeInformation from "../Component/MyPage/ChangeInformation";
import Navbar from "../Component/Navbar";
import BottomNav from "../Component/BottomNav";

const ChangeInformationPresenter = () => {
  return (
    <>
      <Navbar Navname="마이페이지" />
      <ChangeInformation />
      <BottomNav />
      <Footer />
    </>
  );
};
export default ChangeInformationPresenter;