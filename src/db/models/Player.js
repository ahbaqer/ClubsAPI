module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define("Player", {
    playerID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
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
