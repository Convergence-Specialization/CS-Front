import Footer from "../Component/Footer";
import MainPage from "../Component/MainPage";
import Navbar from "../Component/Navbar";
import BottomNav from "../Component/BottomNav";

const MainPagePresenter = () => {
  return (
    <>
      <Navbar />
      <MainPage />
      <BottomNav />
      <Footer />
    </>
  );
};
export default MainPagePresenter;
