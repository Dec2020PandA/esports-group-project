import React, { useState } from "react";
import { Link } from "@reach/router";

import styles from "../css/Login.module.css";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.header}>Login</h1>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            type="text"
            placeholder="JohnDoe@123.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Password</label>
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link className={styles.redirect} to="/register">
            Already have an account?{" "}
            <span className={styles.link}>Register!</span>
          </Link>
        </div>

        <input className={styles.btn} type="submit" value="Login" />
      </form>
    </div>
  );
};
