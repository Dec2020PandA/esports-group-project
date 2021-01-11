import React from "react";

import styles from "../css/TopBar.module.css";

export default () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search for players, games, events..."
        />
        <input className={styles.btn} type="submit" value="S" />
      </div>
    </div>
  );
};
