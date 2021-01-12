import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Router } from "@reach/router";

import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Register from "./views/Register";
import Add from "./views/Add";
import Edit from "./views/Edit";

import styles from "./css/App.module.css";

function App() {
  const [socket] = useState(() => io(":8000"));
  const [games, setGames] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log("Is this running?");
    socket.on("all_games", (data) => {
      setGames(data);
      setLoaded(true);
    });

    //NOT HERE
    socket.on("games", () => {
      console.log("here");
    });

    // note that we're returning a callback function
    // this ensures that the underlying socket will be closed if App is unmounted
    // this would be more critical if we were creating the socket in a subcomponent
    return () => socket.disconnect(true);
  });

  //Socket emits a message containing a game object, sends it to server

  return (
    <div className="App">
      {/* <h1>Hello</h1>
      <button onClick={sendGame}>Click me to Emit</button> */}

      {loaded && (
        <Router>
          <Dashboard path="/" default games={games.games} />
          <Login path="/login" />
          <Register path="/register" />
          <Add path="/add" />
          <Edit path="/:id/edit" />
        </Router>
      )}
    </div>
  );
}

export default App;
