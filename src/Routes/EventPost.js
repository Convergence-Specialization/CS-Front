import EventPost from "../Component/Board/Announcement/Event/EventPost";
import NavBot from "../Component/SmallComponents/NavBot";
import Navbar from "../Component/Navbar";
import { mainPageIcons } from "../assets/Resources";

const EventPostPresenter = () => {
  return (
    <>
      <Navbar />
      <NavBot Icon={mainPageIcons.announce} Name="학부행사" />
      <EventPost />
    </>
  );
};

export default EventPostPresenter;
