import ChangeInformation from "../../Component/MyPage/ChangeInformation";
import Navbar from "../../Component/Navbar";
import { Icons } from "../../assets/Resources";
const ChangeInformationPresenter = () => {
  return (
    <>
   <Navbar Navname="마이페이지" 
      isRight1Disabled History IconRight2= {Icons.Home}
       />
      <ChangeInformation />
    </>
  );
};
export default ChangeInformationPresenter;
