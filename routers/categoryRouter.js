const { Router } = require("express"); // just import the Router object
const { where } = require("sequelize");
const product = require("../models/product");
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

router.get("/1", async (req, res) => {
  const categoryElectronics = await Product.findAll({
    where: {
      categoryId: 1,
    },
  });
  if (categoryElectronics) {
    res.json(categoryElectronics);
  } else {
    res.status(404).send("Book in that genre is disallowed for viewing.");
  }
});

router.get("/2", async (req, res) => {
  const categoryJewelery = await Product.findAll({
    where: {
      categoryId: 2,
    },
  });
  if (categoryJewelery) {
    res.json(categoryJewelery);
  } else {
    res.status(404).send("Book in that genre is disallowed for viewing.");
  }
});

router.get("/3", async (req, res) => {
  const categoryMensClothing = await Product.findAll({
    where: {
      categoryId: 3,
    },
  });
  if (categoryMensClothing) {
    res.json(categoryMensClothing);
  } else {
    res.status(404).send("Book in that genre is disallowed for viewing.");
  }
});

router.get("/4", async (req, res) => {
  const categoryWomenClothing = await Product.findAll({
    where: {
      categoryId: 4,
    },
  });
  if (categoryWomenClothing) {
    res.send(categoryWomenClothing);
  } else {
    res.status(404).send("Book in that genre is disallowed for viewing.");
  }
});

//     categoryElectronics = await Product.findByPk(include);
//     res.json(categoryElectronics);
//     console.log(categoryElectronics);
//   } catch (error) {
//     next(error, "Electronics Category Error");
//   }
// });

// router.patch("/:id", async (req, res, next) => {
//     try {
//       const bookId = parseInt(req.params.id);
//       const bookToUpdate = await Book.findByPk(bookId);
//       if (!bookToUpdate) {
//         res.status(404).send("Book not found");
//       } else {
//         const updatedBook = await bookToUpdate.update(req.body);
//         res.json(updatedBook);
//       }
//     } catch (e) {
//       next(e);
//     }
//   });e
//    const booksByGenre = await Book.findAll({
//     where: {
//       genre: req.params.genre,
//     },
//   });
//   if (booksByGenre) {
//     res.send(booksByGenre);
//   } else {
//     res.status(404).send("Book in that genre is disallowed for viewing. ");
//   }
// });

module.exports = router;
