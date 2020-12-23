import "./App.css";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";

function App() {
  const [socket] = useState(() => io(":8000"));

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
    socket.emit("new_game", { gameName: "League of Legends" });
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={sendGame}>Click me to Emit</button>
    </div>
  );
}

export default App;
