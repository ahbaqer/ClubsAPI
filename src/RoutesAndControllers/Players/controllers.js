const { Player } = require("../../db/models");

exports.fetchPlayer = async (playerID, next) => {
  try {
    const foundPlayer = await Player.findByPk(playerID);
    return foundPlayer;
  } catch (error) {
    next(error);
  }
};
exports.playerList = async (_, res) => {
  try {
    const players = await Player.findAll();
    console.log(players);
    res.json(players);
  } catch (error) {
    res.status(500).json("No players Found");
    console.log("message:", error.message);
  }
};

exports.createPlayer = async (req, res, next) => {
  try {
    const newPlayer = await Player.create(req.body);
    res.status(201).json(newPlayer);
  } catch (error) {
    next(error);
    console.log("Error Message:", error.message);
  }
};

exports.deletePlayer = async (req, res, next) => {
  try {
    await req.player.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.updatePlayer = async (req, res, next) => {
  try {
    await req.player.update(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
