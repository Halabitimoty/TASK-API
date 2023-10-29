const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { loginval } = require("../../schemas/joischema/user.val");
const { usercollection } = require("../../schemas/user.schema");

require("dotenv").config();

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    await loginval.validateAsync({ email, password });

    const userdetails = await usercollection.findOne({ email });

    if (!userdetails) {
      return res.status(404).send({
        success: false,
        error: "User not found",
        message: "Login failed",
      });
    }

    const passwordmatch = bcrypt.compareSync(password, userdetails.password);

    if (!passwordmatch) {
      return res.status(400).send({
        success: false,
        error: "Invalid credentials",
        message: "Login failed",
      });
    }

    const { email: useremail, _id, role } = userdetails;

    const token = jwt.sign(
      {
        email: useremail,
        userid: _id,
        role: role,
      },
      process.env.SECRET
    );

    res.status(200).send({
      success: true,
      message: "login successful",
      token,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message || "sign in failed.",
      message: "sign in failed",
    });
  }
};

module.exports = login;
