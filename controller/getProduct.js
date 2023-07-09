const { Product} = require("../models");

const getProduct = async (req, res) => {
  console.log("Request profile received!");


  const product = await Product.findAll();
  if (!product) {
    const error = new Error("Product not found!");
    error.code = "404";
    error.status = "Product not found!";
    const response = {
      code: error.code,
      status: error.status,
      message: error.message,
    };
    return res.status(404).json(response);
  }
  const response = {
    code: "200",
    status: "OK",
    message: "Product found!",
    product: { product },
  };
  console.log(response);
  return res.status(200).json(response); 
};

module.exports = { getProduct } ;