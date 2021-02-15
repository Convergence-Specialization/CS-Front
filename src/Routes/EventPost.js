import EventPost from "../Component/Board/Announcement/Event/EventPost";
import NavBot from "../Component/SmallComponents/NavBot";
import Navbar from "../Component/Navbar";
import { navbotIcons } from "../assets/Resources";

const EventPostPresenter = () => {
  return (
    <>
      <Navbar />
      <NavBot Icon={navbotIcons.announce} Name="학부행사" />
      <EventPost />
    </>
  );
};

export default EventPostPresenter;
