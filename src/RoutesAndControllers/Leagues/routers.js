const express = require("express");
const router = express.Router();
const { fetchClub } = require("../Clubs/controllers");
const {
  fetchLeague,
  leagueList,
  createLeague,
  deleteLeague,
  updateLeague,
  leagueClub,
  addToClub,
  removeClub,
} = require("./controllers");

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
router.get("/leagues", leagueList);
router.post("/leagues", createLeague);
router.delete("/leagues/:leagueID", deleteLeague);
router.put("/leagues/:leagueID", updateLeague);
router.get("/leagues/:leagueID", leagueClub);
router.delete("/leagues/:leagueID/clubs/:clubID", removeClub);
router.post("/leagues/:leagueID/clubs/:clubID", addToClub);

module.exports = router;
