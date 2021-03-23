const express = require("express");
const router = express.Router();
const {
  fetchClub,
  clubList,
  createClub,
  deleteClub,
  updateClub,
  clubLeague,
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
router.get("/clubs", clubList);
router.post("/clubs", createClub);
router.delete("/clubs/:clubID", deleteClub);
router.put("/clubs/:clubID", updateClub);
router.get("/clubs/:clubID", clubLeague);

module.exports = router;
