const { updateval } = require("../../schemas/joischema/task.val");
const { taskcollection } = require("../../schemas/task.schema");

const updatetask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, published } = req.body;

    await updateval.validateAsync({ id, title, description, published });

    const data = await taskcollection.findByIdAndUpdate(id, {
      title,
      description,
      published,
    });

    res.status(200).send({
      success: true,
      message: "task successfully updated",
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

module.exports = { updatetask };
