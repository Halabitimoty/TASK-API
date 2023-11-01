const bcrypt = require("bcrypt");

const { resetpasswordval } = require("../../schemas/joischema/user.val");
const { usercollection } = require("../../schemas/user.schema");
const { forgetpasswordcollection } = require("../../schemas/forgetpassword");

const resetpassword = async (req, res) => {
  try {
    const { newpassword, token } = req.body;

    await resetpasswordval.validateAsync({ newpassword });

    const user = await forgetpasswordcollection
      .findOne({ token })
      .maxTimeMS(20000);

    if (!user) {
      return res.status(404).send({
        success: false,
        error: "invalid token",
        message: "invalid token",
      });
    }
    const newhashedpassword = bcrypt.hashSync(
      newpassword,
      bcrypt.genSaltSync(10)
    );

    await usercollection.findByIdAndUpdate(user.userid, {
      password: newhashedpassword,
    });

    await forgetpasswordcollection.findOneAndDelete({ token });

    res.status(200).send({
      success: true,
      message: "Password changed successful",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message || "reset password failed.",
      message: "reset password failed.",
    });
  }
};

module.exports = resetpassword;
