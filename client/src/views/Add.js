import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import io from "socket.io-client";

import EventForm from "../components/EventForm";

import styles from "../css/Add.module.css";

export default () => {
  const [socket] = useState(() => io(":8000"));

  const [teamOne, setTeamOne] = useState("");
  const [teamTwo, setTeamTwo] = useState("");
  const [teamOneMS, setOneMS] = useState("");
  const [teamTwoMS, setTwoMS] = useState("");
  const [teamOneRS, setOneRS] = useState("");
  const [teamTwoRS, setTwoRS] = useState("");
  const [eventName, setEventName] = useState("");
  const [bestOf, setBestOf] = useState("");
  const [time, setTime] = useState();

  const game = {
    gameType: "VALORANT",
    teamOne: {
      teamName: "TSM",
      mapScore: 0,
      secondaryScore: 0,
    },
    teamTwo: {
      teamName: "C9",
      mapScore: 0,
      secondaryScore: 0,
    },
    eventName: "LCS Summer Split",
    bestOf: 5,
    time: "9:00 PM CST",
  };

  const sendGame = (e) => {
    e.preventDefault();
    socket.emit("new_game", game);
  };

  return (
    <div>
      <EventForm />
    </div>
  );
};
