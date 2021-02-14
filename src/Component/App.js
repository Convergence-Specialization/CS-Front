import React from "react";
import GlobalStyles from "./GlobalStyles";
import AppRouter from "./Router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <>
      <GlobalStyles />
      <AppRouter />
    </>
  );
}

export default App;
