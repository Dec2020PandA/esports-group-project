import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Router } from "@reach/router";

import EventScoreCard from "./components/EventScoreCard";
import Login from "./views/Login";
import Register from "./views/Register";

import styles from "./css/App.module.css";

function App() {
  const [socket] = useState(() => io(":8000"));

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

  useEffect(() => {
    console.log("Is this running?");
    socket.on("all_games", (data) => console.log(data));

    // note that we're returning a callback function
    // this ensures that the underlying socket will be closed if App is unmounted
    // this would be more critical if we were creating the socket in a subcomponent
    return () => socket.disconnect(true);
  }, []);

  //Socket emits a message containing a game object, sends it to server
  const sendGame = (e) => {
    e.preventDefault();
    socket.emit("new_game", game);
  };

  return (
    <div className="App">
      {/* <h1>Hello</h1>
      <button onClick={sendGame}>Click me to Emit</button> */}
      <Router>
        <EventScoreCard path="/" />
        <Login path="/login" />
        <Register path="/register" />
      </Router>
    </div>
  );
}

export default App;
