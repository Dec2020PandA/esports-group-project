const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  teamLogo: {
    type: String,
  },
  teamName: {
    type: String,
    required: [true, "The team must have a name!"],
  },
  mapScore: {
    type: Number,
    required: [true, "The team needs a map score"],
  },

  secondaryScore: {
    type: Number,
    required: [true, "The team needs a round or kill score"],
  },
});

const GameSchema = new mongoose.Schema(
  {
    gameType: {
      type: String,
      required: [true, "The game must have a name!"],
    },
    teamOne: TeamSchema,
    teamTwo: TeamSchema,
    eventName: {
      type: String,
      required: [true, "The Game needs an event or season!"],
    },
    bestOf: {
      type: Number,
      required: [true, "The game needs a best of series!"],
    },

    time: {
      type: String,
      required: [true, "The game needs a start time"],
    },

    special: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports.Game = mongoose.model("Game", GameSchema);
