const { League } = require("../../db/models");

exports.fetchLeague = async (leagueID, next) => {
  try {
    const foundLeague = await League.findByPk(leagueID);
    return foundLeague;
  } catch (error) {
    next(error);
  }
};
exports.leagueList = async (_, res) => {
  try {
    const leagues = await League.findAll();
    console.log(leagues);
    res.json(leagues);
  } catch (error) {
    res.status(500).json("No Leagues Found");
    console.log("message:", error.message);
  }
};

exports.createLeague = async (req, res, next) => {
  try {
    const newLeague = await League.create(req.body);
    res.status(201).json(newLeague);
  } catch (error) {
    next(error);
    console.log("Error Message:", error.message);
  }
};

exports.deleteLeague = async (req, res, next) => {
  try {
    await req.league.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.updateLeague = async (req, res, next) => {
  try {
    await req.league.update(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
