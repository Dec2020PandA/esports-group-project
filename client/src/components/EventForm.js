import React, { useState, useEffect } from "react";

import styles from "../css/EventForm.module.css";

export default (props) => {
  const [teamOne, setTeamOne] = useState("");
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
    alert("submitted update form");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
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
            <label className={styles.inputLabel}>Map Score</label>
            <input
              className={styles.input}
              type="text"
              onChange={(e) => setOneMS(e.target.value)}
            />
          </div>
          <div className={styles.inputGroupSmall}>
            <label className={styles.inputLabel}>Round/Kill Score</label>
            <input
              className={styles.input}
              type="text"
              onChange={(e) => setOneRS(e.target.value)}
            />
          </div>
        </div>
        {/* team 2 */}
        <div className={styles.teamContainer}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Team 2</label>
            <input
              className={styles.input}
              type="text"
              onChange={(e) => setTwoMS(e.target.value)}
            />
          </div>
          <div className={styles.inputGroupSmall}>
            <label className={styles.inputLabel}>Map Score</label>
            <input
              type="text"
              className={styles.input}
              onChange={(e) => setTwoMS(e.target.value)}
            />
          </div>
          <div className={styles.inputGroupSmall}>
            <label className={styles.inputLabel}>Round/Kill Score</label>
            <input
              type="text"
              className={styles.input}
              onChange={(e) => setTwoRS(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Event Name</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Best Of</label>
          <input
            type="text"
            className={styles.input}
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Time Start</label>
          <input
            type="text"
            className={styles.input}
            onChange={(e) => console.log(e.target.value)}
          />
        </div>

        <input className={styles.btn} type="submit" value="Update" />
      </form>
    </div>
  );
};
