const { League, Club } = require("../../db/models");

exports.fetchLeague = async (leagueID, next) => {
  try {
    const foundLeague = await League.findByPk(leagueID, {
      include: [
        {
          model: Club,
          as: "clubs",
          attributes: ["name"],
        },
      ],
    });
    return foundLeague;
  } catch (error) {
    next(error);
  }
};
exports.leagueList = async (_, res) => {
  try {
    const leagues = await League.findAll({
      include: [
        {
          model: Club,
          as: "clubs",
          attributes: ["name"],
        },
      ],
    });
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
exports.leagueClub = async (req, res, next) => {
  try {
    res.json(req.league);
  } catch (error) {
    next(error);
  }
};

exports.addToClub = async (req, res, next) => {
  try {
    const newLeague = await League.findByPk(req.league.id);
    const club = await Club.findByPk(req.club.id);
    newLeague.addClub(club);
    res.json(newLeague);
  } catch (error) {
    next(error);
  }
};
exports.removeClub = async (req, res, next) => {
  try {
    const club = await Club.findByPk(req.club.id);
    req.league.removeClub(club);
    res.json(req.league);
  } catch (error) {
    next(error);
  }
};
