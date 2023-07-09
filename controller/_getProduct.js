const {Product} = require("../models");


const getProduct = async (req, res) => {
    const product= await Product.findOne({
        include: { model: Product, where: { product_id: req.body.productId } },
    });
    const response = {
    code: "200",
    status: "OK",
    message: "Product found!",
    product: {
      product_id: product.product_id,
      name: product.name,
      dimensi: product.dimensi,
      berat: product.berat,
      stok: product.stok,
      jenis: product.jenis,
    },
  };
  console.log(response);
  return res.status(200).json(response);
};


module.exports = getProduct;