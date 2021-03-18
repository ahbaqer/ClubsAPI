module.exports = (sequelize, DataTypes) => {
  const Clubs = sequelize.define("Clubs", {
    name: {
      type: DataTypes.STRING,
    },

    location: {
      type: DataTypes.STRING,
    },
    logo: {
      type: DataTypes.STRING,
    },
    outfitColor: {
      type: DataTypes.STRING,
    },
  });
  return Clubs;
};
