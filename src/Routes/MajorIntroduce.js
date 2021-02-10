import Navbar from "../Component/Navbar";
import Car from "../Component/MajorIntroduce/Car";
import BigData from "../Component/MajorIntroduce/BigData";
import Energy from "../Component/MajorIntroduce/Energy";
import Security from "../Component/MajorIntroduce/Security";
import ICT from "../Component/MajorIntroduce/ICT";
import Unification from "../Component/MajorIntroduce/Unification";

const MajorIntroduce = () => {
  return (
    <>
      <Navbar />
      <Car />
      <BigData />
      <Energy />
      <ICT />
      <Security />
      <Unification />
    </>
  );
};

export default MajorIntroduce;
