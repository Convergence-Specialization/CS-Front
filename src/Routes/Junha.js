import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import Junha from "../Component/Test/Junha";
import BottomNav from "../Component/BottomNav";
import NavBot from "../Component/NavBot";
import { Icons, mainPageIcons } from "../assets/Resources";
export default () => {
  return (
    <>
      <Navbar Navname="융특커뮤니티 슝" />
      <NavBot
        Icon='https://user-images.githubusercontent.com/62606632/104843043-f97a8280-590b-11eb-9ff6-95dcd26563be.png'
        Name="전과 게시판"
        
      />
      <Junha />
      <BottomNav />
      <Footer />
    </>
  );
};
