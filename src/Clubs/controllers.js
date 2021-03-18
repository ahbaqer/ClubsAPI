const { Clubs } = require("../../db/models/Clubs");

exports.clubList = async (_, res) => {
  try {
    const clubs = await Clubs.findAll();
    console.log(clubs);
    res.json(clubs);
  } catch (error) {
    res.status(500).json("No Clubs Found");
    console.log("message:", error.message);
  }
};
exports.createClub = async (req, res, next) => {
  try {
    const newClub = await Clubs.create(req.body);
    res.status(201).json(newClub);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
