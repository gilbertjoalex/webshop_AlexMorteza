const { Router } = require("express"); // just import the Router object
const Product = require("../models").product;
const Category = require("../models").category;

const router = Router();

router.get("/products", async (req, res, next) => {
  try {
    res.send(await Product.findAll({ include: [Category] }));
  } catch (error) {
    console.log(error);
    next(error);
    // res.status(500).send("Something went wrong");
  }
});

router.get("/products/:id", async (req, res, next) => {
  try {
    res.send(await Product.findOne(req.body.id, { include: [Category] }));
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
