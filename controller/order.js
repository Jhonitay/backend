const {  Sequelize, Transaction } = require("sequelize");
const { Order } = require("../models");
const env = process.env.NODE_ENV || "development";
const db = require("../config/config.json")[env];

const createOrder = async (req, res) => {
  const sequelize = new Sequelize(db);
  const { productId, userId, jumlah, total } = req.body;

  try {
    const order = await sequelize.transaction(
      { isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED },
      async (t) => {
        return await Order.create(
          {
            jumlah: jumlah,
            total: total,
          },
          { transaction: t }
        );
      }
    );

    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create order" });
  }
};

module.exports = { createOrder };
