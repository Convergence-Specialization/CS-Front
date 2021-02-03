import ChangePW from "../../Component/MyPage/ChangePW";
import Navbar from "../../Component/Navbar";
import { Icons } from "../../assets/Resources";
const ChangePWPresenter = () => {
  return (
    <>
       <Navbar Navname="마이페이지" 
      isRight1Disabled History IconRight2= {Icons.Home}
       />
      <ChangePW />
    </>
  );
};
export default ChangePWPresenter;