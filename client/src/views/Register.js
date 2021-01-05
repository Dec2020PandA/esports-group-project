import React, { useState } from "react";
import { Link } from "@reach/router";

import styles from "../css/Login.module.css";

export default () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.header}>Register</h1>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>First Name</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Last Name</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Password</label>
          <input
            className={styles.input}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="/login" className={styles.redirect}>
            Already have an account? <span className={styles.link}>Login!</span>
          </Link>
        </div>
        <input className={styles.btn} type="submit" value="Register" />
      </form>
    </div>
  );
};
