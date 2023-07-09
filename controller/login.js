const { Sequelize, ValidationError } = require("sequelize");
const jsonwebtoken = require("jsonwebtoken");
const { Account, User } = require("../models");
const env = process.env.NODE_ENV || "development";
const db = require("../config/config.json")[env];

const login = async (req, res) => {
  const sequelize = new Sequelize(db);
  const { email, password } = req.body;
  try {
    const account = await Account.findOne({ where: { email: email } , attributes: ['email', 'password'], include : User });
    if (!account) {
      throw new ValidationError("Account does not exist");
    }
    const inputAccount = {
      email: email,
      password: password,
    };

    const token = jsonwebtoken.sign(
      { id: account.user_id },
      "test",
      { expiresIn: "1h" }
    );
    res.cookie("EF_TOKEN_ID", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    });
    const response = {
      code: 200,
      message: "Login successful",
    };
    console.log(response);
    return res.status(response.code).json(response);
  } catch (error) {
    if (error instanceof ValidationError) {
      error.code = 400;
      error.status = "Bad Request";
    }
    const response = {
      code: error.code,
      message: error.message,
    };
    console.log(response);
    return res.status(response.code).json(response);

  } finally {
    await sequelize.close();
  }
};

module.exports = { login };