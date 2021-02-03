import Event from "../Component/Board/Announcement/Event/ListView";
import NavBot from "../Component/SmallComponents/NavBot";
import Navbar from "../Component/Navbar";
import { mainPageIcons } from "../assets/Resources";

const EventPresenter = () => {
  return (
    <>
      <Navbar />
      <NavBot Icon={mainPageIcons.announce} Name="학부행사" />
      <Event />
    </>
  );
};

export default EventPresenter;
