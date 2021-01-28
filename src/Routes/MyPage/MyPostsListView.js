import Footer from "../../Component/Footer";
import Navbar from "../../Component/Navbar";
import MyPosts from "../../Component/MyPage/MyPosts/ListView";

export default () => {
  return (
    <>
      <Navbar Navname='마이페이지'/>
      <MyPosts />
      <Footer />
    </>
  );
};
