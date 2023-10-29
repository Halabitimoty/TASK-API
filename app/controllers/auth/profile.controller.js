const { usercollection } = require("../../schemas/user.schema");

const profile = async (req, res) => {
  try {
    const { userid } = req.decoded;

    const user = await usercollection.findById(userid, "-password");

    res.status(200).send({
      success: true,
      message: "user profile found.",
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message || "profile not found.",
      message: "profile not found.",
    });
  }
};

module.exports = profile;
