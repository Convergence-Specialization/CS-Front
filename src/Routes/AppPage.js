import Footer from "../Component/Footer";
import Nav from "../Component/Nav";
import AppPage from "../Component/AppPage";
import BottomNav from "../Component/BottomNav";
import React, { useState } from "react";


const Apppage = () => {
    const [nweet, setNweet] = useState("");
    const onSubmit = (event) => {
      event.preventDefault();
    };
    const onChange = (event) => {
      const {
        target: { value },
      } = event;
      setNweet(value);
    };
    return (
      <div>
        <form onSubmit={onSubmit}>
          <input
            value={nweet}
            onChange={onChange}
            type="text"
            placeholder="글쓰기"
            maxLength={120}
          />
          <input type="submit" value="저장" />
        </form>
      </div>
    );
  };export default Apppage;

//로그인 한 후 메인 페이지
