import React, { useState } from "react";
import { Link } from "@reach/router";

import styles from "../css/Add.module.css";

export default () => {
  const [teamOne, setTeamOne] = useState("");
  const [teamTwo, setTeamTwo] = useState("");
  const [teamOneMS, setOneMS] = useState("");
  const [teamTwoMS, setTwoMS] = useState("");
  const [teamOneRS, setOneRS] = useState("");
  const [teamTwoRS, setTwoRS] = useState("");
  const [eventName, setEventName] = useState("");
  const [bestOf, setBestOf] = useState("");
  const [time, setTime] = useState();

  return (
    <div>
      <h1>Add</h1>
    </div>
  );
};
