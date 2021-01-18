import React, {useState, useEffect} from "react";
import GlobalStyles from "./GlobalStyles";
import AppRouter from "./Router";
import {authService} from "../fbase";


function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return(
  <>
  {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
</>
);}

export default App;
