const { taskcollection } = require("../../schemas/task.schema");

const deleteall = async (req, res) => {
  try {
    const { role } = req.decoded;

    if (role !== "admin") {
      res.status(400).send({
        success: false,
        message: "you are not authorised to drop table.",
      });
      return;
    }
    const data = await taskcollection.deleteMany({});

    res.status(400).send({
      success: true,
      message: "all task deleted successfully.",
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message || "Unable to delete task.",
      message: "Unable to delete task.",
    });
  }
};

const deletebyid = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await taskcollection.findByIdAndDelete(id);

    res.status(400).send({
      success: false,
      message: "task deleted successfully.",
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message || "Unable to delete task.",
      message: "Unable to delete task.",
    });
  }
};

const userdeletebyid = async (req, res) => {
  try {
    const { id } = req.params;
    const { userid } = req.decoded;

    const task = await taskcollection.findById(id);

    if (userid !== task.createBy.toString()) {
      res.status(400).send({
        success: false,
        message: "you are not authorised to delete this task.",
      });
      return;
    }

    const data = await taskcollection.findByIdAndDelete(id);
    res.status(400).send({
      success: false,
      message: "task deleted successfully.",
      data,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message || "Unable to delete task.",
      message: "Unable to delete task.",
    });
  }
};

module.exports = { deleteall, deletebyid, userdeletebyid };
