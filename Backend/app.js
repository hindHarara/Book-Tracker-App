const express = require("express");
const createError = require("http-errors");
const  cors   = require('cors')

const routes = require("./routes");
const middleware = require("./middlewares");

const app = express();

app.use(cors());

process.on("unhandledRejection", (reason) => {
  process.exit(1);
});

middleware(app);
routes(app);

// app.use((req, res, next) => {
//   const error = createError(404);
//   next(error);
// });

app.use((error, req, res, next) => {
  console.log(error);
  res.status(error.statusCode).json({
    status: false,
    message: error.message,
  });
});

module.exports = app;
