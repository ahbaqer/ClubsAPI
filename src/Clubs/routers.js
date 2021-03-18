const express = require("express");
const router = express.Router();
const { clubList, createClub } = require("./controllers");

router.get("/clubs", clubList);
router.post("/clubs", createClub);

module.exports = router;
