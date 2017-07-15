'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentSubject = sequelize.define('StudentSubject', {
    StudentId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER,
    Score: DataTypes.INTEGER
  });
  StudentSubject.associate = model =>{
    StudentSubject.belongsTo(model.Subject) ;
    StudentSubject.belongsTo(model.Student)
  }

  return StudentSubject;
};
