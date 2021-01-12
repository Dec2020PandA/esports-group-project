import React, { useState, useEffect } from "react";

import styles from "../css/EventForm.module.css";

export default (props) => {
  const [gameType, setGameType] = useState("");
  const [teamOne, setTeamOne] = useState("");
  const [teamOneLogo, setTeamOneLogo] = useState("");
  const [teamTwoLogo, setTeamTwoLogo] = useState("");
  const [teamTwo, setTeamTwo] = useState("");
  const [teamOneMS, setOneMS] = useState("");
  const [teamTwoMS, setTwoMS] = useState("");
  const [teamOneRS, setOneRS] = useState("");
  const [teamTwoRS, setTwoRS] = useState("");
  const [eventName, setEventName] = useState("");
  const [bestOf, setBestOf] = useState("");
  const [time, setTime] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const game = {
      gameType,
      teamOne: {
        teamName: teamOne,
        teamLogo: teamOneLogo,
        mapScore: teamOneMS,
        secondaryScore: teamOneRS,
      },
      teamTwo: {
        teamName: teamTwo,
        teamLogo: teamTwoLogo,
        mapScore: teamTwoMS,
        secondaryScore: teamTwoRS,
      },
      eventName,
      bestOf,
      time,
    };
    props.submit(game);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* team 1 */}
        <div className={styles.teamContainer}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Team 1</label>
            <input
              className={styles.input}
              type="text"
              onChange={(e) => setTeamOne(e.target.value)}
            />
          </div>

          <div className={styles.inputGroupSmall}>
            <label className={styles.inputLabelSmall}>Map Score</label>
            <input
              className={styles.input}
              type="text"
              onChange={(e) => setOneMS(e.target.value)}
            />
          </div>
          <div className={styles.inputGroupSmall}>
            <label className={styles.inputLabelSmall}>Round/Kill Score</label>
            <input
              className={styles.input}
              type="text"
              onChange={(e) => setOneRS(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Team 1 Logo</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTeamOneLogo(e.target.value)}
          />
        </div>
        {/* team 2 */}
        <div className={styles.teamContainer}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Team 2</label>
            <input
              className={styles.input}
              type="text"
              onChange={(e) => setTeamTwo(e.target.value)}
            />
          </div>

          <div className={styles.inputGroupSmall}>
            <label className={styles.inputLabelSmall}>Map Score</label>
            <input
              type="text"
              className={styles.input}
              onChange={(e) => setTwoMS(e.target.value)}
            />
          </div>
          <div className={styles.inputGroupSmall}>
            <label className={styles.inputLabelSmall}>Round/Kill Score</label>
            <input
              type="text"
              className={styles.input}
              onChange={(e) => setTwoRS(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Team 2 Logo</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTeamTwoLogo(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Event Name</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Game</label>
          <input
            type="text"
            className={styles.input}
            onChange={(e) => setGameType(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Best Of</label>
          <input
            type="text"
            className={styles.input}
            onChange={(e) => setBestOf(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Time Start</label>
          <input
            type="text"
            className={styles.input}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <input className={styles.btn} type="submit" value="Update" />
      </form>
    </div>
  );
};
