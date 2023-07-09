const {  Sequelize, Transaction } = require("sequelize");
const { Account, User } = require("../models");
const env = process.env.NODE_ENV || "development";
const db = require("../config/config.json")[env];

const signup = async (req, res) => {
  const sequelize = new Sequelize(db);
  const { email, password, username } = req.body;

  try {
    const account = await sequelize.transaction(
      { isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED },
      async (t) => {
        return await Account.create(
          {
            email: email,
            password: password,
            User: {
              username: username,
            },
          },
          { transaction: t, include: [User] }
        );
      }
    );

    const response = {
      code: 201,
      status: "Created",
      message: "User has been successfully created",
    };

    return res.status(201).json(response);
  } catch (error) {
    const response = {
      code: error.code,
      status: error.status,
      message: error.message,
    };
    console.log(response);

    return res.status(500).json(response);
  } finally {
    await sequelize.close;
  }
};

module.exports = { signup };
