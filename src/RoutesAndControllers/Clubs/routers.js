const express = require("express");
const router = express.Router();
const { fetchLeague } = require("../Leagues/controllers");
const {
  fetchClub,
  clubList,
  createClub,
  deleteClub,
  updateClub,
  clubLeague,
  removeLeague,
  addToLeague,
} = require("./controllers");

router.param("clubID", async (req, res, next, clubID) => {
  const club = await fetchClub(clubID, next);
  if (club) {
    req.club = club;
    next();
  } else {
    const error = new Error("Club Not Found");
    error.status = 404;
    next(error);
  }
});
router.param("leagueID", async (req, res, next, leagueID) => {
  const league = await fetchLeague(leagueID, next);
  if (league) {
    req.league = league;
    next();
  } else {
    const error = new Error("League Not Found");
    error.status = 404;
    next(error);
  }
});
router.get("/clubs", clubList);
router.post("/clubs", createClub);
router.delete("/clubs/:clubID", deleteClub);
router.put("/clubs/:clubID", updateClub);
router.get("/clubs/:clubID", clubLeague);
router.delete("/clubs/:clubID/league/:leagueID", removeLeague);
router.post("/clubs/:clubID/league/:leagueID", addToLeague);

module.exports = router;
