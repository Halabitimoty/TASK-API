const cloud = require("cloudinary").v2;

const { usercollection } = require("../../schemas/user.schema");
const { config } = require("../../utilities/cloud");

cloud.config(config);

const uploadprofilepic = async (req, res) => {
  try {
    const { filename } = req.file;
    const { userid } = req.decoded;

    const result = await cloud.uploader.upload("public/" + filename, {
      folder: "taskpicture",
    });
    console.log(result.secure_url);

    const userpics = await usercollection
      .findByIdAndUpdate(userid, {
        profilepicture: result.secure_url,
      })
      .maxTimeMS(30000);

    res.status(200).send({
      success: true,
      message: "profile picture upload successfully.",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message || "unable to upload picture",
      message: "unable to upload picture",
    });
  }
};

module.exports = { uploadprofilepic };
