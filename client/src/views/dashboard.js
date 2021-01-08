import React, { useState, useEffect } from "react";

import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";

export default (props) => {
  console.log(props.games);
  return (
    <div>
      <TopBar />
      {props.games.map((game, index) => (
        <h1 key={index}>{game.gameType}</h1>
      ))}
      <Sidebar />
    </div>
  );
};
