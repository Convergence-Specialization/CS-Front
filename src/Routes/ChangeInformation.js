import Footer from "../Component/Footer";
import ChangeInformation from "../Component/MyPage/ChangeInformation";
import Navbar from "../Component/Navbar";

const ChangeInformationPresenter = () => {
  return (
    <>
      <Navbar Navname="마이페이지" />
      <ChangeInformation />
      <Footer />
    </>
  );
};
export default ChangeInformationPresenter;