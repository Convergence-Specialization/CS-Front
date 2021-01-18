import Footer from "../Component/Footer";
import Nav from "../Component/Nav";
import AppPage from "../Component/AppPage";
import BottomNav from "../Component/BottomNav";

export default () => {
  return (
    <>
      <Nav />
      <AppPage />
      <BottomNav />
      <Footer />
    </>
  );
};
const AppPage = () => <span> Login</span>;
export default AppPage;

//로그인 한 후 메인 페이지
