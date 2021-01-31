import MyPage from "../../Component/MyPage";
import Navbar from "../../Component/Navbar";
import { mainPageIcons } from "../../assets/Resources";
const MyPagePresenter = () => {
  return (
    <>
      <Navbar Navname="마이페이지" 
      IconRight1={mainPageIcons.notification} 
      IconNameRight1="알림 아이콘"
      IconRight2={mainPageIcons.profile}
       IconNameRight2="프로필 아이콘"
       />
      <MyPage />
    </>
  );
};
export default MyPagePresenter;
