const express = require("express");
const router = express.Router();

const { isuserloggedin } = require("../middlewares/middlewares");
const {
  login,
  profile,
  register,
  forgetpassword,
} = require("../controllers/auth/auth.controller");

router.post("/login", login);
router.post("/register", register);
router.post("/forgetpassword", forgetpassword);
router.get("/profile", isuserloggedin, profile);

module.exports = router;
