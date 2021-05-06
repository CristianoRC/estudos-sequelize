const User = (sequelize, DataTypes) => {
  return sequelize.define("User", {
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
  });
};

module.exports = User;