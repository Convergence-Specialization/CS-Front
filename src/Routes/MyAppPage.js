import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import AppPage from "../Component/AppPage";
import BottomNav from "../Component/BottomNav";
import React, { useState } from "react";
import {dbService, firestoreInstance} from "../fbase";


const MyAppPage = () => {
    const [nweet, setNweet] = useState("");
    const onSubmit = async (event) => {
      event.preventDefault();
      await dbService.collection("nweets").add({
        nweet,
        createdAt: firestoreInstance.FieldValue.serverTimestamp(),
      }).catch((error)=>{
          alert(error)
      });
      setNweet("");
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
  };export default MyAppPage;

//로그인 한 후 메인 페이지