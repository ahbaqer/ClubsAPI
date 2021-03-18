module.exports = (sequelize, DataTypes) => {
  const Leagues = sequelize.define("Leagues", {
    name: {
      type: DataTypes.STRING,
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
  return Leagues;
};
