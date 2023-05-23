const bookRouter = require("./books");
const userRouter = require("./user");
const ro = require("./t")

module.exports = (app) => {
  app.get("/", (req, res, next) => {
    res.status(200).json({
      status: true,
      message: null,
    });
  });
  app.get("/books", bookRouter);
  app.use("/user", userRouter);
  app.use("/b",ro)
};
