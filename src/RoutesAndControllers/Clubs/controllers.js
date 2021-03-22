const { Club, Player } = require("../../db/models");

exports.fetchClub = async (clubID, next) => {
  try {
    const foundClub = await Club.findByPk(clubID);
    return foundClub;
  } catch (error) {
    next(error);
  }
};
exports.clubList = async (_, res) => {
  try {
<<<<<<< HEAD
    const clubs = await Club.findAll();
=======
    console.log(Club);
    const clubs = await Club.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Player,
        as: "players",
        attributes: { exclude: ["createdAt", "updatedAt", "clubID"] },
      },
    });
    console.log(clubs);
>>>>>>> c36e3cfc63dceb8543aee8fbe7fb3418fa559106
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
