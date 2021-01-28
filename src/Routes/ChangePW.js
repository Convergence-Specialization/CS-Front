import Footer from "../Component/Footer";
import ChangePW from "../Component/MyPage/ChangePW";
import Navbar from "../Component/Navbar";

const ChangePWPresenter = () => {
  return (
    <>
      <Navbar Navname="마이페이지" />
      <ChangePW />
      <Footer />
    </>
  );
};
export default ChangePWPresenter;