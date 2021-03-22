const express = require("express");
const router = express.Router();
const {
  fetchPlayer,
  playerList,
  createPlayer,
  deletePlayer,
  updatePlayer,
} = require("./controllers");

router.param("playerID", async (req, res, next, playerID) => {
  const player = await fetchPlayer(playerID, next);
  if (player) {
    req.player = player;
    next();
  } else {
    const error = new Error("Player Not Found");
    error.status = 404;
    next(error);
  }
});
router.get("/players", playerList);
router.post("/players", createPlayer);
router.delete("/players/:playerID", deletePlayer);
router.put("/players/:playerID", updatePlayer);

module.exports = router;
