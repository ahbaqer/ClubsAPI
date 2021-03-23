const { Club, League } = require("../../db/models");

exports.fetchClub = async (clubID, next) => {
  try {
    const foundClub = await Club.findByPk(clubID, {
      include: [
        {
          model: League,
          as: "leagues",
          attributes: ["name"],
        },
      ],
    });
    return foundClub;
  } catch (error) {
    next(error);
  }
};
exports.clubList = async (_, res) => {
  try {
    const clubs = await Club.findAll();
    res.json(clubs);
  } catch (error) {
    res.status(500).json("No Clubs Found");
    console.log("message:", error.message);
  }
};

exports.createClub = async (req, res, next) => {
  try {
    const newClub = await Club.create(req.body);
    res.status(201).json(newClub);
  } catch (error) {
    next(error);
    console.log("Error Message:", error.message);
  }
};

exports.deleteClub = async (req, res, next) => {
  try {
    await req.club.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.updateClub = async (req, res, next) => {
  try {
    await req.club.update(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.clubLeague = async (req, res, next) => {
  try {
    res.json(req.club);
  } catch (error) {
    next(error);
  }
};
