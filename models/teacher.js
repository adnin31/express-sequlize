'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teachers', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    SubjectId :DataTypes.INTEGER
  });
  Teacher.associate = models =>{
    Teacher.belongsTo(models.Subject)
  }
  return Teacher;
};
