const { taskcollection } = require("../../schemas/task.schema");

const getalltask = async (req, res) => {
  try {
    const data = await taskcollection.find();

    res.status(200).send({
      success: true,
      message: "all tasks fetched successfully",
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message || "internal server error.",
      message: "internal server error.",
    });
  }
};

const paginatetasks = async (req, res) => {
  try {
    const { limit, page } = req.params;
    const data = await taskcollection.paginate(
      {},
      {
        limit: limit || 5,
        page: page || 1,
      }
    );

    res.status(200).send({
      success: true,
      message: "paginated tasks fetched successfully",
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message || "internal server error.",
      message: "internal server error.",
    });
  }
};

const getusertask = async (req, res) => {
  try {
    const { userid } = req.decoded;

    const data = await taskcollection.find({ createBy: userid });

    res.status(200).send({
      success: true,
      message: "all user tasks fetched successfully",
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message || "internal server error.",
      message: "internal server error.",
    });
  }
};
const paginateusertask = async (req, res) => {
  try {
    const { limit, page } = req.params;
    const { userid } = req.decoded;

    const data = await taskcollection.paginate(
      { createBy: userid },
      {
        limit: limit || 5,
        page: page || 1,
      }
    );

    res.status(200).send({
      success: true,
      message: "paginated tasks fetched successfully",
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message || "internal server error.",
      message: "internal server error.",
    });
  }
};

module.exports = {
  getalltask,
  getusertask,
  paginatetasks,
  paginateusertask,
};
