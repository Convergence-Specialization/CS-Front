import React from "react";
import Board from "./Board";
import Img from "./Img";
import Ko from "./Ko";


export default function AppPage() {
  return (
    <div>

      <Ko />
      <Img />
      <Board />
    </div>
  );
}
