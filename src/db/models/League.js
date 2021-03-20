module.exports = (sequelize, DataTypes) => {
  const League = sequelize.define("League", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
    },
    prize: {
      type: DataTypes.INTEGER,
    },
    leagueType: {
      type: DataTypes.STRING,
    },
  });
  return League;
};
