const { forgetpasswordval } = require("./../../schemas/joischema/user.val");
const { usercollection } = require("../../schemas/user.schema");
const { forgetpasswordcollection } = require("../../schemas/forgetpassword");
const { smtp } = require("../../utilities/smtp");
const { v4 } = require("uuid");

const forgetpassword = async (req, res) => {
  try {
    const { email } = req.body;

    await forgetpasswordval.validateAsync({ email });

    const user = await usercollection.findOne({ email }).maxTimeMS(20000);

    if (!user) {
      return res.status(404).send({
        success: false,
        error: "no user found",
        message: "no user found",
      });
    }

    const uid = v4();

    await forgetpasswordcollection.create({
      userid: user._id,
      token: uid,
    });

    smtp.sendMail({
      to: email,
      subject: "Password Reset",
      html: `
                <div>
                    <h1>Password Reset</h1>
                    <div>Click <a href="">here</a> to reset your password</div>
                    <div>or use this UID = ${uid}</div>
                </div>
            `,
    });

    res.status(200).send({
      success: true,
      message: "email sent successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message || "email validation failed.",
      message: "email validation failed.",
    });
  }
};

module.exports = forgetpassword;
