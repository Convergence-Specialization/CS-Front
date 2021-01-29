import React, {useState, useEffect} from "react";
import GlobalStyles from "./GlobalStyles";
import AppRouter from "./Router";
import {authService} from "../fbase";
import { FaSlidersH } from "react-icons/fa";


function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return(
  <>
  {init ? <AppRouter isLoggedIn={isLoggedIn} userObj ={userObj} /> : "로딩중"}
</>
);}

export default App;
