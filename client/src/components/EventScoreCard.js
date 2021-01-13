import React from "react";
import "../App.css";
import tsm from "../resources/tsm.png";
import tl from "../resources/liquid.png";

//NEED TO REPLACE DATA WITH PROPS FROM DATABASE

import styles from "../css/EventScoreCard.module.css";

export default (props) => {
  const { game } = props;

  const stagger = 150;

  console.log(props.index);
  return (
    //Card
    <div
      style={{ "animation-delay": `${props.index * stagger}ms` }}
      className={styles.eventCard}
    >
      {/* Team 1 Info */}
      <div className={styles.teamOneContainer}>
        <img
          src={game.teamOne.teamLogo}
          alt="team logo"
          className={styles.teamLogo}
        />
        <div className={styles.teamOneText}>
          <p className={styles.teamName}>{game.teamOne.teamName}</p>
          <p className={styles.winLoss}>( {game.teamOne.mapScore} )</p>
        </div>
      </div>
      {/* Match Feed */}
      <div className={styles.scoreContainer}>
        <p className={styles.live}>
          LIVE <span className={styles.circleLive}></span>
        </p>
        <h2 className={styles.score}>
          {game.teamOne.secondaryScore} - {game.teamTwo.secondaryScore}
        </h2>
        <p className={styles.eventName}>{game.eventName}</p>
        <p className={styles.bestOf}>Bo{game.bestOf}</p>
      </div>
      {/* Team 2 Info */}
      <div className={styles.teamTwoContainer}>
        <div className={styles.teamTwoText}>
          <p className={styles.teamName}>{game.teamTwo.teamName}</p>
          <p className={styles.winLoss}>( {game.teamTwo.mapScore} )</p>
        </div>
        <img
          src={game.teamTwo.teamLogo}
          alt="team logo"
          className={styles.teamLogo}
        />
      </div>
    </div>
  );
};
