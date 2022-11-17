const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");
const User = require("../models").user;
const bcrypt = require("bcrypt");

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).send({
        message: "Please supply a valid email and password",
      });
    } else {
      const userByEmail = await User.findAll({
        where: {
          email: email,
        },
      });
      if (bcrypt.compareSync(password, userByEmail[0].password)) {
        res.send({
          jwt: toJWT({ userId: userByEmail[0].id }),
        });
      } else {
        res.send("User not found!");
      }
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
