import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import io from "socket.io-client";

import EventForm from "../components/EventForm";

import styles from "../css/Add.module.css";

export default () => {
  const [socket] = useState(() => io(":8000"));

  const sendGame = (game) => {
    console.log(game);
    socket.emit("new_game", game);
  };

  return (
    <div>
      <h1>Add</h1>
      <EventForm
        gameType=""
        teamOne=""
        teamOneLogo=""
        teamTwo=""
        teamTwoLogo=""
        teamOneMS=""
        teamOneRS=""
        teamTwoMS=""
        teamTwoRS=""
        eventName=""
        bestOf=""
        time=""
        submit={sendGame}
      />
    </div>
  );
};
