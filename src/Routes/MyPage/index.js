import MyPage from "../../Component/MyPage";
import Navbar from "../../Component/Navbar";
import { Icons } from "../../assets/Resources";
const MyPagePresenter = () => {
  return (
    <>
      <Navbar Navname="마이페이지" 
      isRight1Disabled History IconRight2= {Icons.Home}
       />
      <MyPage />
    </>
  );
};
export default MyPagePresenter;
