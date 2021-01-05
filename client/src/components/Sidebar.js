import React, { useState } from "react";
import { Link } from "@reach/router";

import styles from "../css/Sidebar.module.css";

export default () => {
  const [active, setActive] = useState("home");

  return (
    <div className={styles.sidebar}>
      <p className={styles.sideLabel}>Navigation</p>
      <Link to="">
        <button
          onClick={(e) => setActive("home")}
          className={active == "home" ? styles.active : styles.navBtn}
        >
          Home
        </button>
      </Link>
      <Link to="/league-of-legends">
        <button
          onClick={(e) => setActive("league")}
          className={active == "league" ? styles.active : styles.navBtn}
        >
          League of Legends
        </button>
      </Link>
      <Link to="/counter-strike">
        <button
          onClick={(e) => setActive("cs")}
          className={active == "cs" ? styles.active : styles.navBtn}
        >
          CS:GO
        </button>
      </Link>
      <Link to="/valorant">
        <button
          onClick={(e) => setActive("valorant")}
          className={active == "valorant" ? styles.active : styles.navBtn}
        >
          VALORANT
        </button>
      </Link>
      <Link to="/overwatch">
        <button
          onClick={(e) => setActive("overwatch")}
          className={active == "overwatch" ? styles.active : styles.navBtn}
        >
          Overwatch
        </button>
      </Link>
    </div>
  );
};
