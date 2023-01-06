const router = require("express").Router();
const Customer = require("../models/customer");

// routing code goes here

router.post("/customer", async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(200).json({ customer });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
});

router.get("/customer/:customerID", async (req, res) => {
  try {
    const { customerID } = req.params;

    const customer = await Order.findOne({ _id: customerID });
    if (!customer) {
      return res
        .status(202)
        .json({ message: "customer doestnot exist with order id" });
    }
    res.status(200).json({ customer });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
});

router.put("/email/costOfAnOrder/:id", async (req, res) => {
  try {
    const { customer_id } = req.params;
    const { balance } = req.body;
    const customer = await Customer.findByIdAndUpdate(customer_id, { balance });
    res.status(200).json({ customer });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
