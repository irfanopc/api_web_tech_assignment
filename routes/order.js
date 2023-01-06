const router = require("express").Router();

const Customer = require("../models/customer");
const Order = require("../models/order");
const Product = require("../models/product");

router.post("/order", async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(200).json({ order });
    const product_id = req.body;
    const customer_id = req.body;
    const product = await Product.find({ product_id });

    const customer = Customer.find({ customer_id });
    await Customer.findByIdAndUpdate(customer_id, {
      balance: (balance -= req.body.quantity * product.price),
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/orders/:orderID", async (req, res) => {
  try {
    const { orderID } = req.params;

    const order = await Order.findOne({ _id: orderID });
    if (!order) {
      return res
        .status(202)
        .json({ message: "order doestnot exist with order id" });
    }
    res.status(200).json({ order });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
