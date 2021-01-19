import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import Junha from "../Component/Test/Junha";
import BottomNav from "../Component/BottomNav";
import NavBot from "../Component/NavBot";
export default () => {
  return (
    <>
      <Navbar Navname='융특커뮤니티 슝'/>
      <NavBot Name='전과 게시판'/>
      <Junha />
      <BottomNav />
      <Footer />
   
    </>
  );
};
