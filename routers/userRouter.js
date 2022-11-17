const { Router } = require("express");
const User = require("../models").user;
const router = Router();
const bcrypt = require("bcrypt");
router.post("/users", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name) {
      res.status(400).send("Name is required!");
    } else if (!email) {
      res.status(400).send("Country is required");
    } else if (!password) {
      res.status(400).send("Password is required");
    } else {
      const newUser = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
      });
      res.json(newUser);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
