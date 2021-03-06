import Navbar from "../Component/Navbar";
import Car from "../Component/MajorIntroduce/Car";
import BigData from "../Component/MajorIntroduce/BigData";
import Energy from "../Component/MajorIntroduce/Energy";
import Security from "../Component/MajorIntroduce/Security";
import ICT from "../Component/MajorIntroduce/ICT";
import TotalSubject from "../Component/MajorIntroduce/TotalSubject";
import Unification from "../Component/MajorIntroduce/Unification";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const MajorIntroduce = () => {
  const location = useLocation();
  useEffect(() => {
    const scrollToFunction = (elementId) => {
      window.scrollTo({
        // TODO: 50이거 네비바 정확한 height로 수정 필요.
        top: document.getElementById(elementId).offsetTop - 45,
        behavior: "smooth",
      });
    };
    switch (!!location.state && location.state.whichClicked) {
      case "TOTAL_SUBJECT":
        scrollToFunction("TOTAL_SUBJECT_DIV");
        break;
      case "SMART_CAR":
        scrollToFunction("SMART_CAR_DIV");
        break;
      case "BIG_DATA":
        scrollToFunction("BIG_DATA_DIV");
        break;
      case "ICT":
        scrollToFunction("ICT_DIV");
        break;
      case "SECURITY":
        scrollToFunction("SECURITY_DIV");
        break;
      case "KOREA":
        scrollToFunction("KOREA_DIV");
        break;
      case "ENERGY_SCIENCE":
        scrollToFunction("ENERGY_SCIENCE_DIV");
        break;
      default:
        break;
    }
  }, [location]);
  return (
    <>
      <Navbar />
      <TotalSubject />
      <Car />
      <Energy />
      <Security />
      <BigData />
      <ICT />
      <Unification />
    </>
  );
};

export default MajorIntroduce;
