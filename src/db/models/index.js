"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Databases relations
db.Club.hasMany(db.Player, {
  foreignKey: "clubID",
  as: "players",
});
db.Player.belongsTo(db.Club, {
  foreignKey: "clubID",
  as: "club",
});
<<<<<<< HEAD
db.Player.belongsTo(db.Club, {
  as: "club",
  foreignKey: "clubID",
});
=======
>>>>>>> c36e3cfc63dceb8543aee8fbe7fb3418fa559106

module.exports = db;
