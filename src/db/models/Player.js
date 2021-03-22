module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define("Player", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
  return Player;
};
