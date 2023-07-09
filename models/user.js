const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.Account = User.belongsTo(models.Account, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        foreignKey: {
          name: "account_id",
        },
      });
      this.Order = User.hasMany(models.Order, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        foreignKey: {
          name: "user_id",
          // type: DataTypes.UUID,
          // allowNull: true,
        },
        as: "user"
      })
    }
  }
  User.init({
    userId: {
      type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
        allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
        allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    accountId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: "User",
    tableName: "users",
    underscored: true
  });
  return User;
};