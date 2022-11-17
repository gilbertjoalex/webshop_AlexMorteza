const express = require("express");
const productRouter = require("./routers/productRouter");
const cors = require("cors");
const { Router } = express;
const userRouter = require("./routers/userRouter");
const loginRouter = require("./routers/loginRouter");

const app = express();
// DONT FORGET THIS!
app.use(express.json());
app.use(cors());
app.use(productRouter);
app.use(userRouter);
app.use(loginRouter);

// app.get("/", (req, res) => {
//   res.send("Hello express!");
// });

app.listen(4000, () => {
  console.log("listening on port 4000");
});
