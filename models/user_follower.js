'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Follower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_Follower.init({
    UserId: DataTypes.INTEGER,
    FollowingUserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_Follower',
  });
  return User_Follower;
};