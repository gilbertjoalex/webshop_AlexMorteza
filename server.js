const express = require("express");
const productRouter = require("./routers/productRouter");
const cors = require("cors");

const app = express();
// DONT FORGET THIS!
app.use(express.json());
app.use(cors());
app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.send("Hello express!");
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});
