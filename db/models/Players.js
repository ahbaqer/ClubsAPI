module.exports = (sequelize, DataTypes) => {
  const Players = sequelize.define("Players", {
    name: {
      type: DataTypes.STRING,
    },

    number: {
      type: DataTypes.INTEGER,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    position: {
      type: DataTypes.STRING,
    },
  });
  return Players;
};
