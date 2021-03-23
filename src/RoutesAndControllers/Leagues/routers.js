const express = require("express");
const router = express.Router();
const {
  fetchLeague,
  leagueList,
  createLeague,
  deleteLeague,
  updateLeague,
  leagueClub,
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
router.get("/leagues", leagueList);
router.post("/leagues", createLeague);
router.delete("/leagues/:leagueID", deleteLeague);
router.put("/leagues/:leagueID", updateLeague);
router.get("/leagues/:leagueID", leagueClub);

module.exports = router;
