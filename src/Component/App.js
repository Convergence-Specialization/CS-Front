import React, {useState} from "react";
import GlobalStyles from "./GlobalStyles";
import AppRouter from "./Router";
import {authService} from "../fbase";


function App() {
  console.log(authService.currentUser);
  const [isLoggedin, setisLoggedin] = useState(false);

  return <AppRouter isLoggedin = {isLoggedin} />;
}

export default App;
