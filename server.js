const express = require("express");
const cors = require("cors");

const app = express();

const cookieParser = require("cookie-parser");

//Require mongoose config
const connect = require("./server/config/mongoose.config");
const { Game } = require("./server/models/game.model");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

const server = app.listen(8000, () =>
  console.log("The server is running on port 8000")
);

//TO INITIALIZE Socket, we need to pass invoke a new instance of socket.io
//and pass it to our express server
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["content-type"],
  },
});

io.on("connection", (socket) => {
  //Each client that connects gets its own socket id
  console.log(`${socket.id} has connected`);
  // connect.then((db) => {
  //   console.log("Connected to db through socket");

  // let game = new Game({ gameName: "Overwatch" });
  // game.save();

  //We can emit the data from the database here
  Game.find(function (err, games) {
    socket.emit("all_games", { games });
  });

  socket.on("update_game", (data) => {
    Game.findOneAndUpdate({ _id: data.gameId }, data.game, {
      new: true,
      runValidators: true,
    })
      .then((updatedGame) => console.log(updatedGame))
      .catch((err) => console.log(err));
  });

  //Here is where we receive the emit from client and store data into DB
  socket.on("new_game", (data) => {
    console.log(data);

    let game = new Game(data);
    game
      .save()
      .then(() => {
        console.log("yellow");
        Game.find({}).then((games) => {
          io.emit("games", { games });
        });
      })
      .catch((err) => console.log(err));
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} has disconnected`);
  });

  //If this is logged, our client has successfully completed the handshake
  //Add all event listeners HERE. Connection is a built in event listener
});
