import Navbar from "../Component/Navbar";
import NavBot from "../Component/SmallComponents/NavBot";
import Announcement from "../Component/Board/Announcement/Normal/Read";
import { mainPageIcons } from "../assets/Resources";

const AnnouncementPresenter = () => {
  return (
    <>
      <Navbar/>
      <NavBot Icon={mainPageIcons.announce} Name="공지사항" />
      <Announcement />
    </>
  );
};
export default AnnouncementPresenter;