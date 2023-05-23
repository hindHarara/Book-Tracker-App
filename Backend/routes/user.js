const { Router } = require("express");
const { userController } = require("../controllers");

const router = Router();

router.post("/signup", userController.signup)
.post("/login", userController.login)

module.exports = router;
