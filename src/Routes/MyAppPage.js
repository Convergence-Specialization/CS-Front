import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import AppPage from "../Component/AppPage";
import BottomNav from "../Component/BottomNav";
import React, { useState, useEffect } from "react";
import {dbService, firestoreInstance} from "../fbase";


const MyAppPage = () => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const getNweets = async () => {
      const dbNweets = await dbService.collection("nweets").get();
      dbNweets.forEach((document) => {
        const nweetObject = {
          ...document.data(),
          id: document.id,
        };
        setNweets((prev) => [nweetObject, ...prev]);
      });
    };
    useEffect(() => {
      getNweets();
    }, []);
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
        <div>
        {nweets.map((nweet) => (
          <div key={nweet.id}>
            <h4>{nweet.nweet}</h4>
          </div>
        ))}
      </div>
      </div>
    );
  };export default MyAppPage;

//로그인 한 후 메인 페이지