const { Router } = require("express"); // just import the Router object
// const category = require("../models/category");
// const product = require("../models/product");   ---MISTAKEN SYNTAX, needs const ----
const Product = require("../models").product;
const Category = require("../models").category;

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    res.send(await Product.findAll({ include: [Category] }));
  } catch (error) {
    console.log(error);
    next(error);
    // res.status(500).send("Something went wrong");
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    res.send(await Product.findByPk(req.params.id, { include: [Category] }));
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// router.get("/categories", async (req, res, next) => {
//   try {
//     res.send(await Category.findAll());
//   } catch (error) {
//     console.log(error);
//     next(error);
//     res.status(500).send("Something went wrong");
//   }
// });

// router.get("/categories", async (req, res, next) => {
//   try {
//     const existingCategory = await Category.findAll({});
//     console.log(existingCategory, "****************************");
//     const { title } = req.body;
//     if (!title) {
//       res.status(400).send("missing parameters");
//       // } else if (!existingAuthor) {
//       //   const newAuthor = await Author.create(req.body);
//       //   res.json(newAuthor);
//     } else {
//       res.send(existingCategory.req.body);
//     }
//   } catch (e) {
//     next(e);
//   }
// });

module.exports = router;
