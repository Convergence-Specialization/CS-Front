import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import AppPage from "../Component/AppPage";
import BottomNav from "../Component/BottomNav";
import React, { useState, useEffect } from "react";
import {dbService, firestoreInstance} from "../fbase";


const MyAppPage = ({userObj}) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);

    useEffect(() => {
      dbService.collection("nweets").onSnapshot((snapshot) => {
        const nweetArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNweets(nweetArray);
      });
    }, []);
    const onSubmit = async (event) => {
      event.preventDefault();
      await dbService.collection("nweets").add({
        text :nweet,
        createdAt: firestoreInstance.FieldValue.serverTimestamp(),
        creatorId : userObj.uid,
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
            <h4>{nweet.text}</h4>
            <h5>{nweet.creatorId}</h5>
            <></>
          </div>
        ))}
      </div>
      </div>
    );
  };export default MyAppPage;

//로그인 한 후 메인 페이지