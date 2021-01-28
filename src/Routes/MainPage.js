import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import MainPage from "../Component/MainPage";
import React from "react";

const MainPagePresenter = () => {
  return (
    <>
      <Navbar Navname="융특커뮤니티 슝" />
      <MainPage />
      <Footer />
    </>
  );
};
export default MainPagePresenter;
