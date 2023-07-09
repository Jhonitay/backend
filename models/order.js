const {  Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // define association here
      // Order.belongsTo(models.Product, {
      //   onDelete: "CASCADE",
      //   onUpdate: "CASCADE",
      //   foreignKey : {
      //     name: "product_id"
      //   },
      //   as: "product",
      // })
      // Order.belongsTo(models.User, {
      //   onDelete: "CASCADE",
      //   onUpdate: "CASCADE",
      //   foreignKey: {
      //     name: "user_id"
      //   },
      //   as: "user",
      // })
      this.Product = Order.belongsTo(models.Product, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        foreignKey: {
          name: "product_id",
          // type: DataTypes.UUID,
          // allowNull: true,
        },
        as: "product"
      });
      
      this.User = Order.belongsTo(models.User, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        foreignKey: {
          name: "user_id",
          // type: DataTypes.UUID,
          // allowNull: true,
        },
        as: "user"
      });

    }
  }
  Order.init({
    orderId: {
      type : DataTypes.UUID,
      defaultValue : DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    accountId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: "Order",
    tableName: "orders",
    underscored: true
  });
  return Order;
};