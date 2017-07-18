'use strict';
const makeKey = require("../helper/key")
const encrypt = require("../helper/encryptPassword")
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    Key: DataTypes.STRING
  }, {
    hooks :{
    beforeCreate: (models) => {
      let newPassword = models.password;
      let key = models.Key;
      models.password = encrypt(newPassword);
      models.Key = makeKey();
    }
  }
  });
  return User;
};
