import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import io from "socket.io-client";

import EventForm from "../components/EventForm";

import styles from "../css/Add.module.css";

export default (props) => {
  const game = props.location.state;
  const gameId = game._id;
  console.log(gameId);
  const [socket] = useState(() => io(":8000"));

  const sendGame = (game) => {
    console.log(game);
    socket.emit("update_game", { gameId, game });
  };

  return (
    <div>
      <EventForm
        submit={sendGame}
        gameType={game.gameType}
        teamOne={game.teamOne.teamName}
        teamOneLogo={game.teamOne.teamLogo}
        teamTwo={game.teamTwo.teamName}
        teamTwoLogo={game.teamTwo.teamLogo}
        teamOneMS={game.teamOne.mapScore}
        teamOneRS={game.teamOne.secondaryScore}
        teamTwoMS={game.teamTwo.mapScore}
        teamTwoRS={game.teamTwo.secondaryScore}
        eventName={game.eventName}
        bestOf={game.bestOf}
        time={game.time}
      />
    </div>
  );
};
