import Announcement from "../Component/Announcement/Read";
import Navbar from "../Component/Navbar";
import NavBot from "../Component/NavBot";

export default () => {
  return (
    <>
      <Navbar Navname="융특 커뮤니티 슝" />
      <NavBot
        Icon="https://user-images.githubusercontent.com/62606632/104843043-f97a8280-590b-11eb-9ff6-95dcd26563be.png"
        Name="공지사항"
      />
      <Announcement />
    </>
  );
};
