const { Router } = require("express"); // just import the Router object
// const category = require("../models/category");
// const product = require("../models/product");   ---MISTAKEN SYNTAX, needs const ----
const Product = require("../models").product;
const Category = require("../models").category;
const router = Router();

router.get("/", async (req, res, next) => {
  try {
    console.log(Category.body);
    const allCategories = await Category.findAll();
    res.json(allCategories);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const categoryById = await Category.findByPk(req.params.id);
    console.log(categoryById);
    res.json(categoryById);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
