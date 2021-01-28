import Navbar from "../Component/Navbar";
import NavBot from "../Component/SmallComponents/NavBot";
import Announcement from "../Component/Board/Announcement/Normal/Read";
import { mainPageIcons } from "../assets/Resources";

const AnnouncementPresenter = () => {
  return (
    <>
      <Navbar Navname="융특 커뮤니티 슝" />
      <NavBot Icon={mainPageIcons.announce} Name="공지사항" />
      <Announcement />
    </>
  );
};
export default AnnouncementPresenter;