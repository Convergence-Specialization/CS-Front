import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import Eunso from "../Component/Test/Eunso";
import BottomNav from "../Component/BottomNav";
import NavBot from "../Component/NavBot";
import { Icons, mainPageIcons } from "../assets/Resources";

function eunsoRouter() {
  return (
    <>
      <Navbar Navname="융특커뮤니티 슝" />
      <NavBot
        Icon="https://user-images.githubusercontent.com/62606632/104843043-f97a8280-590b-11eb-9ff6-95dcd26563be.png"
        Name="전과게시판" />
      <Eunso />
      <BottomNav />
      <Footer />
    </>
  );
}
export default eunsoRouter;