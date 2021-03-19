const express = require("express");
const cors = require("cors");
const db = require("./src/db/models");

//Routers
const clubRoutes = require("./src/RoutesAndControllers/Clubs/routers.js");
const playerRoutes = require("./src/RoutesAndControllers/Players/routers.js");
const leagueRoutes = require("./src/RoutesAndControllers/Leagues/routers.js");

// app use
const app = express();
app.use(express.json());
app.use(cors());

//Router use
app.use("/", clubRoutes);
app.use("/", playerRoutes);
app.use("/", leagueRoutes);

// Server Running
const run = async () => {
  try {
    await db.sequelize.sync({ force: false });
    console.log("Connection to the database successful!");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
  await app.listen(9000, () => {
    console.log("The application is running on localhost:9000");
  });
};

run();
