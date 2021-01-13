import React, { useState, useEffect } from "react";

import { Link } from "@reach/router";

import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";

import EventScoreCard from "../components/EventScoreCard";

import styles from "../css/Dashboard.module.css";

export default (props) => {
  console.log(props.games);
  return (
    <div>
      <TopBar />
      <div className={styles.mainContent}>
        <Sidebar />
        <div className={styles.featured}>
          {props.games.map((game, index) => (
            <Link
              key={index}
              className={styles.link}
              to={`/${game._id}/edit`}
              state={game}
            >
              <EventScoreCard game={game} index={index} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
