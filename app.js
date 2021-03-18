const express = require("express");
const db = require("./db/models");

const cors = require("cors");
const clubRoutes = require("./src/Clubs/routers");
const app = express();
app.use(cors());

app.use(express.json());
app.use("/", clubRoutes);

const run = async () => {
  try {
    await db.sequelize.sync();
    console.log("Connection to the database successful!");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
  await app.listen(9000, () => {
    console.log("The application is running on localhost:9000");
  });
};

run();
