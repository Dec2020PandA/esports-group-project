import React from "react";
import "../App.css";
import logo from "../resources/tsm.png";
//NEED TO REPLACE DATA WITH PROPS FROM DATABASE

import styles from "../css/EventScoreCard.module.css";

export default () => {
  return (
    //Card
    <div className={styles.eventCard}>
      {/* Team 1 Info */}
      <div className={styles.teamOneContainer}>
        <img src={logo} alt="team logo" className={styles.teamLogo} />
        <div className={styles.teamOneText}>
          <p className={styles.teamName}>TSM</p>
          <p className={styles.winLoss}>( 1 )</p>
        </div>
      </div>
      {/* Match Feed */}
      <div className={styles.scoreContainer}>
        <p className={styles.live}>
          LIVE <div className={styles.circleLive}></div>
        </p>
        <h2 className={styles.score}>0 - 1</h2>
        <p className={styles.eventName}>LCS Summer</p>
        <p className={styles.bestOf}>Bo3</p>
      </div>
      {/* Team 2 Info */}
      <div className={styles.teamTwoContainer}>
        <div className={styles.teamTwoText}>
          <p className={styles.teamName}>Team Liquid</p>
          <p className={styles.winLoss}>( 0 )</p>
        </div>
        <img src={logo} alt="team logo" className={styles.teamLogo} />
      </div>
    </div>
  );
};
