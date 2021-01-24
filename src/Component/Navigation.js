import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">메인페이지</Link>
      </li>
      <li>
        <Link to="/profile">내 정보</Link>
      </li>
    </ul>
  </nav>
);
export default Navigation;

















// 프로필이랑 홈 이어주는곳