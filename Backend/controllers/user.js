const { User } = require("../models");
// const { ObjectId } = require("bson");
const createError = require("http-errors");

const signup = (req, res, next) => {
  const userData = req.body;

  const validation = User.validate(userData);
  if (validation.error) {
    next(createError(400, validation.error.message));
  }
  const user = new User(userData);

  user
    .isExist()
    .then((result) => {
      if (result.check) {
        next(createError(409, result.message));
      }else {
        user.save((status) => {
    if (status.status) {
      res.status(201).json({
        status: true,
        message: "User has been created successfully",
      });
    } else {
      next(createError(500, status.message));
    }
  });
      }
    })
    .catch((err) => {
      next(createError(500, err.message));
    });
  
}

const login = (req, res, next) => {
User.login(req.body)
.then(result => {
if(result.status){
res.status(200).json(result.data)
}
next(createError(result.code, result.message))
})
.catch(err => {
next(createError(500, err.message))
})
}
module.exports = {
  signup, login
}
