'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    las_name: DataTypes.STRING,
    email: DataTypes.STRING
  });
  return Student;
};
