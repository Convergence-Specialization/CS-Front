import Create from "../Component/Board/Announcement/Normal/Create";
import NavBot from "../Component/SmallComponents/NavBot";
import Navbar from "../Component/Navbar";
import { mainPageIcons } from "../assets/Resources";

const AnnounceCreatePresenter = () => {
  return (
    <>
      <Navbar />
      <NavBot Icon={mainPageIcons.announce} Name="학부행사" />
      <Create />
    </>
  );
};

export default AnnounceCreatePresenter;
