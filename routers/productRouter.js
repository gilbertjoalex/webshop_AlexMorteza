const { Router } = require("express"); // just import the Router object
const Product = require("../models").product;

const router = Router();

router.get("/all", async (req, res, next) => {
  try {
    res.send(await product.findAll({ include: [category] }));
  } catch (error) {
    console.log(error);
    next(error);
    // res.status(500).send("Something went wrong");
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    res.send(await product.findOne(req.params.id, { include: [category] }));
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
