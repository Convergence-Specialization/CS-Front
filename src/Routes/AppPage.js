import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import AppPage from "../Component/AppPage";
import BottomNav from "../Component/BottomNav";
import React, { useState } from "react";
import {dbService} from "../fbase";



export default () => {
  return (
    <>
      <Navbar Navname='융특커뮤니티 슝'/>
      <AppPage />
      <BottomNav />
      <Footer />
    </>
  );
};