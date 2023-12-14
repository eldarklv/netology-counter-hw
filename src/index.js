const express = require("express");
const counterRouter = require("./routes/counter");

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use("/counter", counterRouter);

app.listen(port, () => {
  console.log(`Приложение запущено на порту ${port}`);
});
