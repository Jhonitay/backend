const express = require("express");
const { login } = require("../controller/login.js");
const { signup } = require("../controller/signup.js");
const { getProduct } = require("../controller/getProduct.js");
const { createcontacts } = require("../controller/contacts.js");
const { getContacts } = require("../controller/getContacts.js");

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/product", getProduct);
router.post("/contacts", createcontacts);
router.post("/getcontacts", getContacts);



module.exports = router;