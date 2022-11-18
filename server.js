const express = require("express");
const productRouter = require("./routers/productRouter");
const categoryRouter = require("./routers/categoryRouter");
const cors = require("cors");
const { Router } = express;

const app = express();
// DONT FORGET THIS!
app.use(express.json());
app.use(cors());
app.use("/products", productRouter);
app.use("/category", categoryRouter);

// app.get("/", (req, res) => {
//   res.send("Hello express!");
// });

app.listen(4000, () => {
  console.log("listening on port 4000");
});
