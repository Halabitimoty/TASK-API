const bcrypt = require("bcrypt");

require("dotenv").config();

const { usercollection } = require("../../schemas/user.schema");
const { registerval } = require("../../schemas/joischema/user.val");

const register = async (req, res) => {
  try {
    const { fullname, email, password, role, profilepicture } = req.body;

    await registerval.validateAsync({
      fullname,
      email,
      password,
      role: role.toLowerCase(),
      profilepicture,
    });

    const isUserPresent = await usercollection
      .findOne({ email })
      .maxTimeMS(20000);

    if (isUserPresent) {
      return res.status(409).send({
        success: false,
        error: "username already exists",
        message: "sign up failed.",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedpassword = bcrypt.hashSync(password, salt);

    await usercollection.create({
      fullname: fullname,
      email: email,
      password: hashedpassword,
      role: role,
      profilepicture: profilepicture,
    });

    res.status(201).send({
      success: true,
      message: "sign up successfull.",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message || "sign up failed.",
      message: "sign up failed",
    });
  }
};

module.exports = register;
