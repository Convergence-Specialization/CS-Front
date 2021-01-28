import Footer from "../Component/Footer";
import Event from "../Component/Event/ListView";
import Navbar from "../Component/Navbar";

const EventPresenter = () => {
  return (
    <>
      <Navbar Navname="융특 커뮤니티 슝" />
      <Event />
      <Footer />
    </>
  );
};

export default EventPresenter;