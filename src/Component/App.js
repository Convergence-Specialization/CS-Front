import React, {useState} from "react";
import GlobalStyles from "./GlobalStyles";
import AppRouter from "./Router";

function App() {
  const [isLoggedin, setisLoggedin] = useState(false);

  return <AppRouter isLoggedin = {isLoggedin} />;
}

export default App;
