module.exports = (sequelize, DataTypes) => {
  const Club = sequelize.define("Club", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
  return Club;
};
