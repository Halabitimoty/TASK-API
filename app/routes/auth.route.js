const express = require("express");
const router = express.Router();

const { isuserloggedin } = require("../middlewares/middlewares");
const {
  login,
  profile,
  register,
  forgetpassword,
  resetpassword,
} = require("../controllers/auth/auth.controller");

router.post("/login", login);
router.post("/register", register);
router.post("/forgetpassword", forgetpassword);
router.put("/resetpassword", resetpassword);
router.get("/profile", isuserloggedin, profile);

module.exports = router;
