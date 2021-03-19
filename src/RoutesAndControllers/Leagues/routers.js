const express = require("express");
const router = express.Router();
const {
  fetchLeague,
  leagueList,
  createLeague,
  deleteLeague,
  updateLeague,
} = require("./controllers");

router.param("LeagueID", async (req, res, next, LeagueID) => {
  const league = await fetchLeague({ LeagueID }, next);
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

module.exports = router;
