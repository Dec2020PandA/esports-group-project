import React, { useState, useEffect } from "react";

import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";

import styles from "../css/Dashboard.module.css";

export default (props) => {
  console.log(props.games);
  return (
    <div>
      <TopBar />
      <div className={styles.mainContent}>
        <Sidebar />
        {props.games.map((game, index) => (
          <h1 className={styles.game} key={index}>
            {game.gameType}
          </h1>
        ))}
      </div>
    </div>
  );
};
