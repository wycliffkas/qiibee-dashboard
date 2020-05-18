require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
const userRouter = require("./api/users/user.router");

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/users", userRouter);

app.listen(process.env.APP_PORT, () => {
  "server is up and running on port", process.env.APP_PORT;
});
